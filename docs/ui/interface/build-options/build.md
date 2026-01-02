---
title: Build
uid: build-options-build
order: 02
---

# Build

![](/.data/assets/Build-Options-Build-(2).png)

* **Build Destination**: Specify the output folder for build files.
* **Maintain a static folder with the latest copy**: Keeps a copy of the latest build in a static location.
* **Open folder after build finishes**: Opens the output folder automatically when the build completes.
* **Copy the .terrain file to the build folder**: Saves a copy of the .terrain file in the build directory.
* **Remove Primary port name in Build output**: Removes the primary port name from output filenames.
*   **File Overwrite Mode**:
    * **Overwrite**: Replaces existing files with the same name.
    * **Increment**: Appends an incremental number to the filename to prevent overwriting.

Token can be used in the Build Path of Build Destination, the specified token will be replaced by the respective value.

See @build-tokens for details.
