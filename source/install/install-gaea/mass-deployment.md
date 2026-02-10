---
icon: network-wired
title: Mass Deployment
uid: mass-deployment
order: 04
---

# Mass Deployment

Gaea can be deployed to a large number of workstations in multiple ways.

:::danger
When installing to a network drive, it must be installed on a network share hosted as a drive and not a UNC path. Gaea may not work properly on UNC paths.
:::

## Unattended Installation

There are two ways to perform multiple installations / mass deployment - through a command-line sequence using or using a zip file for xcopy style deployment.

In either case, you should prepare an activation file or a copy of the offline license (see @license-types for more information)

### Create an Activation File

1. Create a text file named `activate.lic` (Notepad is fine).
2. Put **only** the license key in the file (no extra spaces, no additional lines).
3. Copy `activate.lic` to the **Gaea Data Folder** (see @paths-and-storage).
   * For mass deployment, place it in each user’s `AppData > Gaea Data` folder, or in the install folder as appropriate for your deployment setup.

On launch, Gaea will check if a license is already validated. If not, it will attempt to read and activate using `activate.lic`.

## Command Line Installation

Run the install (typically `Gaea-2.x.x.x.exe`) either via UI or with command line

Command Line example:

```
Gaea-2.2.7.0.exe /VERYSILENT /SUPPRESSMSGBOXES /NORESTART /SP-

  ## additional flags
  /ALLUSERS - install for all users (administrative install).
  /CURRENTUSER - install for current user only (non-administrative install).
  /LOG="filename" - to save a log to a specific file.
  /DIR="X:\PATH" - override the installation folder.
```

Once the installation is finished, copy the license file to the Data Folder.

{% include "storage-paths.md" %}

:::note
If Gaea has not run yet, it may not have created the folder.
:::

