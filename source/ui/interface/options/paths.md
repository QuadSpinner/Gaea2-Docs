---
title: Paths
uid: options-paths
order: 02
description: The Paths tab defines where Gaea stores and retrieves user data and project files.
---

# Paths

The **Paths** tab defines where Gaea stores and retrieves user data and project files. Properly configuring these paths ensures smooth operation, faster backups, and prevents accidental data loss or corruption.

![](/.data/ui/interface/options/paths/options-paths.webp)



## **File Thumbnails**

Specifies where thumbnail images for saved files are stored.

* **Don't Save:** Thumbnails are not generated or stored.
* **Central Data Folder:** Thumbnails are stored in a central location within Gaea’s data folder. _(Recommended)_
* **Next to File:** Thumbnails are saved alongside the corresponding file.

## **User Files**

Specifies the main directory where Gaea stores:

* Presets
* Screenshots
* Other Gaea documents

Default path: `C:\Users\<User>\Documents\Gaea`



## **Project Files**

Defines the default directory where all Gaea project files (`*.terrain`, `*.gmacro`) are stored. Default path: `C:\Users\<User>\Documents\Gaea\Projects`



:::danger
**Do not store project or user folders inside the Gaea installation directory.** 

Example: If Gaea is installed in `D:\Gaea\`, avoid setting your paths to `D:\Gaea\Docs`.

**Separation of data and installation files** prevents conflicts during updates or reinstalls as well.
:::

:::success
**Projects are lightweight**, but **Builds can be large**. 

Storing builds in a separate drive or location is recommended, especially if you frequently back up project folders.
:::



## **Notes**

* These settings only affect the **default save/load locations**. You can still manually select other paths when saving projects or exporting data.
* Ensure the specified folders have full read/write permissions for Gaea to operate correctly.
* Changing paths does not automatically move existing files; manual migration is required.


