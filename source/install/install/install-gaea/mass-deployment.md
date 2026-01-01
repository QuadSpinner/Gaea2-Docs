---
icon: network-wired
title: Mass Deployment
uid: mass-deployment
order: 03
---

# Mass Deployment

Gaea can be deployed to a large number of workstations in multiple ways.

:::danger
When installing to a network drive, it must be installed on a network share hosted as a drive and not a UNC path. Gaea may not work properly on UNC paths.
:::

## Unattended Installation

The easiest way to install and activate Gaea is to run the following script / batch file. Replace the path and activation key as required.

The `%ACTIVATION_KEY%` can either be a License Key such as `AAA-BBBB-CCCC-DDDD` or a fully qualified path to a `XYZ1234.lic` offline license file.

:::important
If you are using a `.lic` file for activation, please replace %ACTIVATION_KEY% with "%ACTIVATION_KEY%" in all scripts.
:::

```batch
@echo off
setlocal EnableExtensions

rem ===== CONFIG =====
set "INSTALLER=Gaea-2.2.7.0.exe"
set "ACTIVATION_KEY=your_activation_key_here"
set "DEFAULT_INSTALL_DIR=%ProgramFiles%\QuadSpinner\Gaea 2"
set "LOG_FILE=%TEMP%\Gaea_Install.log"

rem ===== PREP =====
pushd "%~dp0" || (echo ERROR: Failed to access script directory.& exit /b 1)

rem Admin check (required if installing under Program Files)
net session >nul 2>&1
if errorlevel 1 (
  echo ERROR: Administrator privileges are required for this installation type.
  echo        Right-click the .bat and select "Run as administrator".
  exit /b 1
)

if not exist "%INSTALLER%" (
  echo ERROR: Installer not found: "%CD%\%INSTALLER%"
  exit /b 1
)

rem ===== INSTALL =====
echo Installing "%INSTALLER%"...
start "" /wait "%INSTALLER%" /VERYSILENT /SUPPRESSMSGBOXES /NORESTART /SP- /LOG="%LOG_FILE%"
set "RC=%ERRORLEVEL%"
if not "%RC%"=="0" (
  echo ERROR: Installer returned exit code %RC%.
  echo See log: "%LOG_FILE%"
  exit /b %RC%
)

rem ===== LOCATE GAEA.EXE =====
set "GAEA_EXE=%DEFAULT_INSTALL_DIR%\Gaea.exe"
if not exist "%GAEA_EXE%" (
  echo ERROR: Could not find Gaea.exe at "%GAEA_EXE%"
  echo If you installed to a custom location, update DEFAULT_INSTALL_DIR in this script.
  exit /b 2
)

rem ===== ACTIVATE =====
echo Activating...
"%GAEA_EXE%" -activate %ACTIVATION_KEY%
set "RC=%ERRORLEVEL%"
if not "%RC%"=="0" (
  echo ERROR: Activation failed with exit code %RC%.
  exit /b %RC%
)

echo SUCCESS: Installation + activation completed.
exit /b 0
```

:::danger
Administrator privileges will be required!
:::

## 7-Zip based Deployment

We provide 7z versions of each release so you can create your own installer if needed, or create direct deployments.

Ensure you have 7-zip installed and added to PATH.

```batch
@echo off
setlocal EnableExtensions

set "ARCHIVE=Gaea-2.2.7.0.7z"
set "ACTIVATION_KEY=your_activation_key_here"
set "INSTALL_PATH=C:\Path\To\Desired\Installation\Location"

pushd "%~dp0" || (echo ERROR: Failed to access script directory.& exit /b 1)

where 7z.exe >nul 2>&1
if errorlevel 1 (
  echo ERROR: 7-Zip not found (7z.exe). Install it or add it to PATH.
  exit /b 1
)

if not exist "%ARCHIVE%" (
  echo ERROR: Archive not found: "%CD%\%ARCHIVE%"
  exit /b 1
)

if not exist "%INSTALL_PATH%" mkdir "%INSTALL_PATH%"

echo Extracting...
7z x "%ARCHIVE%" -o"%INSTALL_PATH%" -y
if errorlevel 1 (
  echo ERROR: Extraction failed.
  exit /b 1
)

rem Find Gaea.exe (handles archives that unpack into subfolders)
set "GAEA_EXE="
for /r "%INSTALL_PATH%" %%F in (Gaea.exe) do (
  set "GAEA_EXE=%%F"
  goto :found
)
:found

if not defined GAEA_EXE (
  echo ERROR: Could not locate Gaea.exe under "%INSTALL_PATH%".
  exit /b 2
)

echo Activating using "%GAEA_EXE%"...
"%GAEA_EXE%" -activate %ACTIVATION_KEY%
exit /b %ERRORLEVEL%

```

### Zip File

Alternatively, if 7-zip is not acceptable in your network environment, you can convert it to a zip file and deploy it with this alternate script:

```batch
@echo off
setlocal EnableExtensions

set "ZIP_FILE=Gaea-2.2.7.0.zip"
set "ACTIVATION_KEY=your_activation_key_here"
set "INSTALL_PATH=C:\Path\To\Desired\Installation\Location"

pushd "%~dp0" || (echo ERROR: Failed to access script directory.& exit /b 1)

if not exist "%ZIP_FILE%" (
  echo ERROR: ZIP not found: "%CD%\%ZIP_FILE%"
  exit /b 1
)

if not exist "%INSTALL_PATH%" mkdir "%INSTALL_PATH%"

echo Extracting...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "Expand-Archive -LiteralPath '%CD%\%ZIP_FILE%' -DestinationPath '%INSTALL_PATH%' -Force"
if errorlevel 1 (
  echo ERROR: Expand-Archive failed.
  exit /b 1
)

rem Find Gaea.exe
set "GAEA_EXE="
for /r "%INSTALL_PATH%" %%F in (Gaea.exe) do (
  set "GAEA_EXE=%%F"
  goto :found
)
:found

if not defined GAEA_EXE (
  echo ERROR: Could not locate Gaea.exe under "%INSTALL_PATH%".
  exit /b 2
)

echo Activating...
"%GAEA_EXE%" -activate %ACTIVATION_KEY%
exit /b %ERRORLEVEL%
```
