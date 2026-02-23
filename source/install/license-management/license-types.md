---
title: License Types
uid: license-types
icon: key-skeleton-left-right
order: 08
---

# License Types and Activation Methods

Gaea supports multiple license formats and activation workflows, depending on whether you are activating online, offline, or using a floating license.

## Online Activation Key

An online license uses a serial/license key in the format:

* Standard key: `xxxx-xxxx-xxxx-xxxx`
* Online floating key: `FL-xxxx-xxxx-xxxx-xxxx`

### Activate via Dialog

1. Open the **Authorization** dialog in Gaea.
2. Copy/paste the license key.
3. Confirm to load and validate the license.

### Activate by File

Use this method when you want to distribute the key but allow the end user machine to activate without admin intervention.

1. Create a text file named `activate.lic` (Notepad is fine).
2. Put **only** the license key in the file (no extra spaces, no additional lines).
3. Copy `activate.lic` to the **Gaea Data Folder** (see @paths-and-storage).

   * For mass deployment, place it in each user’s `AppData > Gaea Data` folder, or in the install folder as appropriate for your deployment setup.

On launch, Gaea will check if a license is already validated. If not, it will attempt to read and activate using `activate.lic`.

## Offline Activation File

Offline licenses are provided as a `.lic` file containing XML (for example: `ABCD1234.lic`).

### Activate via Dialog

1. Open the activation/authorization dialog.
2. Either:

   * Drag-and-drop the `.lic` file onto the dialog, **or**
   * Click **Have a license file?** and browse to the file.

### Activate by File

1. Rename the provided file to `gaea2.lic`.
2. Copy `gaea2.lic` into the **Gaea Data Folder** (see @paths-and-storage).

## Offline Floating Server File

Offline floating licenses are managed through a locally deployed @fortress. The floating license file is typically provided by your admin or generated via the [Fortress Console](@fortress-assign).

1. Obtain the floating license file from your admin (or Fortress Console export).
2. Copy it to the **Gaea Data Folder** on the workstation.
3. Rename it to `floating.lic`.

Gaea will detect `floating.lic` and load both the license key and server connection details from it.
