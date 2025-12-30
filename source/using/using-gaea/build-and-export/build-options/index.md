---
title: Build Options
uid: build-options
---

# Build Options

## **Resolution**

![](/.data/assets/Build-Options-Resolution-(2).png)

* **Region: Select the build scope, options can be Whole terrain or select a region from the dropdown.**
* **Resolution**: Select the output resolution of the terrain (e.g., 2K, 4K). Higher resolutions provide more detail but require more memory.
* **Subdivision**: Choose the build speed and quality balance:
  * **None**: No subdivision for fast, low-quality builds.
  * **Faster**: Faster build speed with moderate quality.
  * **Balanced**: A balance between speed and quality.
  * **Slower**: Highest quality but slower build speed.
* **Output**: Choose the output format:
  * **Single Image**: Exports as a single image file.
  * **Tiled Images**: Divides the output into tiles.
* **Tile Size**: Set the size of each tile (e.g., 1024x1024 pixels).
* **Blending**: Determines the blending percentage between adjacent tiles for smooth transitions.

See @scale-and-resolution.md

## **Build**

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

## **Tiles**

![](/.data/assets/Build-Options-Tiles-(2).png)

* **Tile Suffix Pattern**: Choose a suffix format for naming tiles (e.g., `_y%Y%_x%X%`).
* **Add Leading Zeroes**: Adds leading zeroes to tile numbers for consistent filename length.
* **Start Numbering from 1**: Starts tile numbering from 1 instead of 0.
* **Organization**: Select how tiles are organized in the output (e.g., Folders for each Node).
* **Flip Y Axis**: Reverses the Y-axis orientation for tile output.
* **Preserve Cache in Build Folder**: Retains tile cache files in the build folder for later use.
* **Overlap Pixels**: Set the number of overlapping pixels between adjacent tiles for smoother seams.

## **Nodes**

The Exportable Nodes section lists all nodes marked for export. You can modify their options here.

![](/.data/assets/Build-Option-Nodes-(1).png)

**Port Selection.** From the export menu, you can select specific ports (such as Enabled, Out, Flow, Wear, or Deposits) to export, providing control over the data being exported and optimizing resource usage.

**Additional Options**

* **Primary Only.** Export only the primary or most important outputs of a node, reducing the number of files and focusing on key data.
* **Mark All/None.** Quickly select or deselect all available export options for efficiency and convenience.

**Filename.** The name specified for the node here will be the name used to save file. Files are named in the format `<Name or NodeName>_<PortName>.<extension>`, ensuring clarity and order in file management.

:::info
You can disable `_Out` suffix for the Primary Port in [.](./).
:::

**File Formats.** Gaea supports a wide range of file formats, allowing you to choose the best option based on the requirements of the receiving application or your workflow needs.

## **Script**

**Post-Build Script**: Enter command-line instructions to execute automatically after the build completes. This can automate additional tasks like file organization or further processing.

![](/.data/assets/Build-Options-Script-(2).png)

## **Terrain**

![](/.data/assets/Build-Options-Terrain-(2).png)

* **Width**: Set the physical width of the terrain in meters.
* **Height**: Set the maximum physical height of the terrain in meters.
* **Scale Display**: Displays the current scale in meters per pixel (e.g.,`2.441m/px`) and the Height-Scale Ratio.

See @scale-and-resolution.mdfor more information.

## **Regions**

Regions allows you to take a portion of your terrain and upscale it to a higher resolution. Gaea gives you the ability to preview any individual region. You can have an unlimited number of regions.

Right-Click on regions surface and click on "Add Region" to add region.  Once the region is created, it can be resized by resized handles on the bottom right of region.

![](/.data/assets/Build-Option-Add-Region-Menu.png)

See @managing-regions.md for more information.

## Profiles

Build Profiles let you save all Build Settings in a named preset. If you find yourself creating multiple versions of your terrain, or creating different output types, you can switch between the different build settings swiftly with Profiles.

![](/.data/assets/Build-Options-Profile.webp)

See @#using-profiles

## Commands

**Execute Build.** Starts the @build-swarmfor the current file and outputs a full resolution build as specified in the Build Options.

**Copy Command Line.** Displays the command line for the current file, including fully qualified paths and any variables with their default values.

![](/.data/assets/command_line_example.png)

See @command-line-automation.mdfor further details on how to use the Command Line.
