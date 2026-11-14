---
title: Running Gaea on Linux (Proton)
uid: linux-proton
icon: square-terminal
order: 06
description: Community-tested steps to run Gaea 2 on Linux with Steam's Proton, including CUDA GPU compute and Build Swarm.
---

# Running Gaea on Linux (Proton)

:::warning
Linux is **not an officially supported platform**. This page documents a community-tested setup. QuadSpinner does not provide support for it, and future Gaea or Proton updates may break it.
:::

Gaea 2 can run on Linux through [Proton](https://github.com/ValveSoftware/Proton), the Wine-based compatibility layer shipped with Steam. The interface, the 3D viewport, GPU compute (NVIDIA/CUDA) and Build Swarm all work, but two of them need a small extra step.

## Tested Configuration

| Component | Version |
| --- | --- |
| Gaea | 2.3.1.0 (Community Edition) |
| Proton | Proton Experimental (`experimental-11.0-20261112`) |
| Distribution | Zorin OS 18.1 (Ubuntu 24.04 base) |
| GPU / driver | NVIDIA GeForce RTX 3080 Ti Laptop, driver 595.99 |

AMD (HIP) and Intel GPUs have **not** been tested.

## What Works

| Feature | Out of the box | With the steps below |
| --- | --- | --- |
| Installer and .NET 8 prerequisites | Yes | |
| Interface | Yes | |
| 3D viewport (Unity, Direct3D 11) | Yes | |
| GPU compute (CUDA) | No, CPU only | Yes |
| Build Swarm (GUI builds and command line) | No, crashes | Yes |

## 1. Install Gaea

Install **Proton Experimental** from your Steam library (Tools section). Then create a dedicated prefix and run the Gaea installer in it. Download the installer from your QuadSpinner account or from @install-gaea.

```bash
export STEAM_COMPAT_CLIENT_INSTALL_PATH="$HOME/.steam/steam"
export STEAM_COMPAT_DATA_PATH="$HOME/gaea-proton"   # the prefix, any empty folder
PROTON="$HOME/.steam/steam/steamapps/common/Proton - Experimental/proton"

mkdir -p "$STEAM_COMPAT_DATA_PATH"
"$PROTON" run ./Gaea-2.3.1.0.exe /VERYSILENT /SUPPRESSMSGBOXES /NORESTART
```

The installer downloads and installs the .NET 8 Desktop Runtime by itself. Gaea is installed in:

`$STEAM_COMPAT_DATA_PATH/pfx/drive_c/users/steamuser/AppData/Local/Programs/QuadSpinner/Gaea 2`

## 2. Launch Gaea

```bash
cd "$STEAM_COMPAT_DATA_PATH/pfx/drive_c/users/steamuser/AppData/Local/Programs/QuadSpinner/Gaea 2"
PROTON_USE_XALIA=0 "$PROTON" run ./Gaea.exe
```

`PROTON_USE_XALIA=0` disables Proton's accessibility helper, which otherwise floods the log with exceptions. It is optional.

### Choosing the Projects Path

In the Welcome dialog, avoid the default path inside the prefix (`C:\users\steamuser\...`): deleting or recreating the prefix would delete your projects. Wine exposes the Linux file system as drive `Z:`, so you can point Gaea to a regular Linux folder:

`Z:\home\YOU\Documents\Gaea`

## 3. Enable GPU Compute (NVIDIA)

Out of the box, **Options > Compute** only lists the CPU. Gaea's CUDA backend loads `nvcuda.dll`, but the one shipped with Proton is an empty placeholder that does not forward anything to the Linux NVIDIA driver.

The open-source [nvidia-libs](https://github.com/SveSop/nvidia-libs) project provides a working `nvcuda.dll` that forwards CUDA calls to the driver's `libcuda.so`. The steps below install it in a **separate copy** of Proton, so your Steam games are not affected.

```bash
# 1. Download nvidia-libs (tested with v1.0.5)
curl -LO https://github.com/SveSop/nvidia-libs/releases/download/v1.0.5/nvidia-libs-v1.0.5.tar.xz
tar xf nvidia-libs-v1.0.5.tar.xz

# 2. Make a hard-linked copy of Proton Experimental (uses almost no disk space)
SRC="$(readlink -f "$HOME/.steam/steam/steamapps/common/Proton - Experimental")"
DST="$HOME/proton-gaea"
cp -al "$SRC" "$DST"

# 3. Replace the placeholder nvcuda.dll (rm first, so the original is not modified through the hard link)
F="$DST/files/lib/wine/x86_64-windows/nvcuda.dll"
rm "$F" && cp nvidia-libs-v1.0.5/x64/nvcuda.dll "$F"

# 4. Remove the line that disables nvcuda in new prefixes (same rm-then-write trick)
I="$DST/files/share/wine/wine.inf"
grep -v '"nvcuda"' "$I" > /tmp/wine.inf && rm "$I" && mv /tmp/wine.inf "$I"

# 5. Point the existing prefix to the new DLL
S="$STEAM_COMPAT_DATA_PATH/pfx/drive_c/windows/system32/nvcuda.dll"
rm -f "$S" && ln -s "$F" "$S"
```

From now on, launch Gaea with this copy of Proton and force the builtin `nvcuda`:

```bash
PROTON="$HOME/proton-gaea/proton"
PROTON_USE_XALIA=0 PROTON_ENABLE_NVAPI=1 WINEDLLOVERRIDES=nvcuda=b "$PROTON" run ./Gaea.exe
```

Open **Options > Compute** and click **Scan Hardware**: your NVIDIA GPU should now be listed as a CUDA device next to the CPU.

:::info
The logs may show `amdhip64_6.dll` and `ze_loader.dll` as missing. These are the AMD (HIP) and Intel (Level Zero) runtimes and can be ignored on an NVIDIA system.
:::

## 4. Enable Build Swarm

Build Swarm (used by **Build and Export** and by `Gaea.Swarm.exe`) crashes right after `Validating online license...`. The license check uses WMI through `System.Management`, which needs `wminet_utils.dll`, a native component of the Windows .NET Framework 4.8 that Wine and Proton do not ship.

You can extract it, with its two dependencies, from Microsoft's official .NET Framework 4.8 offline installer. This needs `7z` (package `p7zip-full` on Debian/Ubuntu).

```bash
curl -L -o ndp48.exe "https://download.microsoft.com/download/f/3/a/f3a6af84-da23-40a5-8d1c-49cc10c8e76f/NDP48-x86-x64-AllOS-ENU.exe"
7z e -y -oex ndp48.exe netfx_Full.mzz
7z e -y -oex ex/netfx_Full.mzz wminet_utils_dll_amd64 ucrtbase_clr0400_dll_amd64 vcruntime140_clr0400_dll_amd64

W="$STEAM_COMPAT_DATA_PATH/pfx/drive_c/windows"
cp ex/wminet_utils_dll_amd64          "$W/Microsoft.NET/Framework64/v4.0.30319/wminet_utils.dll"
cp ex/ucrtbase_clr0400_dll_amd64      "$W/system32/ucrtbase_clr0400.dll"
cp ex/vcruntime140_clr0400_dll_amd64  "$W/system32/VCRUNTIME140_CLR0400.dll"
```

Builds now complete, both from the interface (**Build and Export**) and from the command line.

### Building from the Command Line

`Gaea.Swarm.exe` crashes at startup when its output is redirected (it tries to set the console encoding). Run it inside a pseudo-terminal, for example with `script`:

```bash
cd "$STEAM_COMPAT_DATA_PATH/pfx/drive_c/users/steamuser/AppData/Local/Programs/QuadSpinner/Gaea 2"
export WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" WINEDLLOVERRIDES=nvcuda=b
script -qfec "$HOME/proton-gaea/files/bin/wine ./Gaea.Swarm.exe \
  --Filename 'Z:\home\YOU\terrains\my.terrain' \
  --buildpath 'Z:\home\YOU\builds\my' --silent --verbose" /dev/null
```

For reference, the *Canyon River with Sea* example (1024 px, 28 outputs) built in about 8 seconds on the RTX 3080 Ti with the cache ignored, with CUDA as the only active device.

## Known Issues

- **Web browser links**: when Gaea opens a web page (for example from the license dialog), a browser launched from Proton may crash because it inherits Steam's runtime environment. Open the link manually in your browser instead.
- **Viewport crash on first launch**: on one occasion, the viewport (`Gaea.Viewport.exe`) stopped with `attempted to call a pure virtual function`. It did not happen again on later launches.

Facing other issues? See @troubleshooting. Please mention that you are running under Proton when reporting a problem.
