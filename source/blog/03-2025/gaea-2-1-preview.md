---
title: "Gaea 2.1 Preview: Enhanced Workflow, Stability, and Performance"
uid: gaea-2-1-preview
modified: "2025-03-03T15:55:13Z"
---

**Gaea 2.1 is now available in Public Early Access Preview**, bringing major workflow improvements, expanded mesh support, and increased stability. This update enhances your terrain-building experience with powerful new features and over **100 fixes** addressing key user-reported issues.

💡UPDATE! Gaea 2.1 is now production ready. [Download it here](https://quadspinner.com/download/).Over the next few weeks, we will publish in-depth posts covering the top features of this build.

### **New Features & Enhancements**

- **Build Regions** – Isolate sections of your terrain and build them at **higher resolutions with improved quality**.

- **Mesh Workflow Overhaul** – Import meshes as heightfields and export heightfields as meshes **more efficiently**, with expanded support for **FBX, glTF, and other industry-standard formats**.

- **New Tools & Nodes** – Unlock creative possibilities with **new Nodes, Custom Overlays, Turntable Animations, and Tangent-Space Normals**.

We’ve resolved **over 100 issues**, making this **the most stable and reliable version of Gaea yet**. This update directly **addresses top community-reported bugs** and enhances performance across the board.

# Highlights

![](__GHOST_URL__/content/images/2025/02/Build_Settings_and_Regions_08-29-45-PM.png)Isolate areas of your terrain with Build Regions and export them at an arbitrary resolution.![](__GHOST_URL__/content/images/2025/02/Gaea_-_temp.terrain_08-41-21-PM.png)New Uplift primitive node.![](__GHOST_URL__/content/images/2025/02/image.png)Lichtenberg Node for creating lightning/flow patterns.![](__GHOST_URL__/content/images/2025/02/image-1.png)Canyon carved from Lichtenberg pattern and Distance node.![](__GHOST_URL__/content/images/2025/02/Gaea_-_Sediments-New.terrain_04-04-03-PM.png)Overhauled Weathering node for creating highlights and lowlights on existing texture maps.![](__GHOST_URL__/content/images/2025/02/image-6.png)WaterColor node for quickly colorizing water bodies.![](__GHOST_URL__/content/images/2025/02/image-5.png)Import Meshes with the Object node.![](__GHOST_URL__/content/images/2025/02/image-4.png)Overlay support, including Custom Overlays.![](__GHOST_URL__/content/images/2025/02/Gaea_-_temp.terrain_09-06-26-PM.png)Turntable Animations to show off your terrains.![](__GHOST_URL__/content/images/2025/02/image-2.png)Stats / Information Readout showing node details![](__GHOST_URL__/content/images/2025/02/image-3.png)Improved, cleaner Gradient Editor and Color Picker![](__GHOST_URL__/content/images/2025/02/Gaea_-_temp.terrain_08-42-00-PM.png)Easier Navigation and Measurement Tool Access in 2D views.![](__GHOST_URL__/content/images/2025/02/image-7.png)Bomber now supports Grid patterns with Jitter.![](__GHOST_URL__/content/images/2025/02/XGaea2BUILDDebugGaea.Swarm.exe_07-51-28-PM-1.png)Overhauled UI for Build Swarm with support for both modern Windows Terminal and the classic Command Prompt.![](__GHOST_URL__/content/images/2025/02/Build_Settings_and_Regions_08-00-36-PM.png)Build Profiles![](__GHOST_URL__/content/images/2025/02/Batch_Build_Manager_07-33-43-PM.png)Batch Build and Mutations### **Your Feedback Matters!**

This is a **Preview Build**, allowing you to explore the new features and adapt your workflows before the final release. Your **feedback and suggestions** are crucial—let us know what works, what doesn’t, and what could be improved!

We plan to finish Gaea 2.1 by the end of February 2025, and provide any subsequent features based on your feedback in March.

# Download Gaea 2.1 Preview 1

Try Gaea 2.1 Early Access Preview today and experience the next evolution in terrain creation! 🚀

![](__GHOST_URL__/content/images/2025/02/ea-docs.jpg)💡UPDATE! Gaea 2.1 is now production ready. [Download it here](https://quadspinner.com/download/).###  ⚠️ Running Gaea 2.1 side-by-side with Gaea 2.0

We provide the Gaea 2.1 beta as a zip ([7zip](https://www.7-zip.org/download.html)) file. You can simply extract it to a local folder and run Gaea 2.1 from there. All settings and local files will be kept within the Data subfolder of the location where you extract the package.

It will NOT interfere with your existing Gaea 2.0 installation.

---

# Release Notes

## Features

- **Sky Editor**: Overlay images on terrain.

- **Readout Data View Panel**: New panel for detailed node stats.

- **Normals Node**: Added tangent-space normals (Work-in-Progress).

- **Turntable Animator**: New feature (custom resolutions and supersampling pending).

- **Regions Support**: Added support for defining and using regions.

- **Preset Search Enhancements**: Use `_` to find presets.

- **Automatic Preset Shortcodes**: Shortened names for presets (e.g., `LongPass → LP`).

- **Build Swarm Overhaul**: Improved UI and functionality.

- **Command-Line Help for Swarm**: Restored CLI help output.

- **Improved Micro-Detail Rendering**: More accurate viewport display for details smaller than 1px.

#### New Nodes

- **AB Compare**: Compare differences between two nodes.

- **Lichtenberg**: Generate natural branching and flow networks.

- **Object Node**: Import 3D objects.

- **Transform3D**: Manipulate terrains in 3D space.

- **WaterColor**: Colorization of water elements.

- **Loop Nodes**: Introduced looping functionality.

- **MathX**: Custom math-based node processing.

- **Uplift**: New terrain primitive node.

- **MeshWarp**: Warp maps to mesh and generate tangent-space normals.

## Improvements

### **Progress Reporting & UI**

- Improved progress animations.

- More accurate status bar readouts.

- Enhanced progress reporting for **Turntable** animations and **Bake** operations.

- Improved **Build Log**: Now saved in the build destination folder for crash/failure debugging.

- Removed red coloration from **Breakdown Chart** at the end of a command-line build.

### **Editor & Workflow Enhancements**

- **Graph Shortcuts Restriction**: Option to confine shortcuts to the graph area to prevent accidental actions (configurable in **Options**).

- **Graph Tabs**: Now support longer names.

- **Easier Terrain Input**: Simplified height and width entry.

- **Variable Editor**: Improvements for better usability.

- **Gradient Editor**: Redesigned for better control.

- **Minimal Color Picker**: Streamlined UI for color selection.

- **SatMap List Display**: Option to show as a single stack.

- **Lighting Editor**: Improved UI and controls.

- **SatMap List Scaling**: Supports stretching to show additional columns.

- **Shortcut**: `Ctrl + Shift + F8` to **Combine to Layers**.

### **File Management & Performance**

- **Autosave on Version Mismatch**: Automatically saves a copy when opening a file from an older version.

- **Improved File Repair**: Better handling of older data.

- **Cleanup Options**: Added option to delete logs and autosaves older than 45 days.

- **Path Token for Region Name**: Added new option for paths.

- **Expanded Options Dialog**: More settings and customizations.

### **Quality of Life Improvements**

- **Node Tooltip Changes**: Now streamlined in favor of **Readout Data View**.

- **2D Viewport RGB Readout**: Now supports pixel readouts.

- **Viewport Behavior Customization**: Option to prevent clearing the viewport when unselecting a node.

- **Editor Controls for Gate Nodes**: Improved usability and handling.

- **File Nodes Open Dialog**: Now shows "All Supported Extensions" by default.

- **Nahimic Bloatware Detection**: Improved warnings for potential issues.

- **Disable Micro-Animations**: Added an option to turn them off for a snappier UI.

## Nodes

#### **New Nodes**

- **AB Compare**: Compare differences between two nodes.

- **Lichtenberg**: Generate natural branching and flow networks.

- **Object Node**: Import 3D objects.

- **Transform3D**: Manipulate terrains in 3D space.

- **WaterColor**: Colorization of water elements.

- **Loop Nodes**: Introduced looping functionality.

- **MathX**: Custom math-based node processing.

- **Uplift**: New terrain primitive node.

- **MeshWarp**: Warp maps to mesh and generate tangent-space normals.

#### **Node Enhancements**

- **Mesher**: Improved for reducing sharp artifacts.

- **Clip Modifier**: Added for precise adjustments.

- **Clip Node**: Now features an **AutoClip** option.

- **MountainSide**: Additional modes and features.

- **Sediments Node**: Overhauled for **physically accurate sedimentation**, multiple passes, and extra masks.

- **Weathering Node**: Rewritten for precision.

- **Synth Node**: Manual synthesis added. You can now synthesize a gradient and edit it. Improved logic and quality.

- **Curve Node**: **Fit to Curve** command and **Relative Mode** added.

- **Bomber Node**: New **Grid Mode** and **Jitter** options.

- **Dilate Node**: Now features an **Invert** option.

#### **Performance & Stability Fixes**

- **PointCloud & Normals Export**: Tweaked for better accuracy.

- **Batch Builds in Build Menu**: Now supports **Profiles**.

- **Accumulator Node**: Now renders correctly when used as a **Mask**.

- **Height Modifier**: Fixed excessive data storage issue.

- **MountainRange Node**: Corrected out-of-range values.

- **Mesher**: Improved progress reporting.

#### **Bug Fixes**

- **LineNoise**: Fixed visual artifacts.

- **Secondary Output Masks**: Fixed for Canyon, FractalTerrace, SandStone, Stratify, and EasyErosion nodes.

- **Unreal Export**: No longer **autolevels all output**.

- **Seamless Node**: Fixed **RGB channel bug**.

- **Presets (Curve, Synth, CLUTer)**: Now load correctly.

- **Dilate Node**: Fixed data contamination issue.

- **Clamp Node**: Now correctly affects **0 values**.

## Fixes

#### **Crashes & Stability**

- Fixed a crash when double-clicking a **node’s port** and interacting with the node.

- Fixed **Swarm** crashes caused by `[]` characters in paths.

- Fixed a **race condition** in Swarm device loading.

- Fixed **file saving failures** showing inadequate warnings.

- Prevented accidental **parallel builds** when using Refresh/Refresh All.

- Fixed a **critical bug** preventing **Tiled Builds**.

- Improved handling when **Perforce** or other source control locks files.

#### **Graph & UI Fixes**

- Fixed **graph connections** disappearing until `ESC` was pressed.

- Fixed **Combine Ports swapping** breaking visuals.

- Fixed **double-dots in recovery filenames**.

- Fixed **unnecessary tabs** being created when using **Repair File**.

- Fixed an issue where **deleting a tab** would not refresh the graph.

- Fixed **graph tab name trimming** in **Data View**.

- Fixed **keyboard shortcuts** not honoring `Ctrl` in some situations.

- Fixed **Search shortcut (Tab)** not working in an empty graph.

- Fixed **preset sorting** issues in search results.

- Fixed **inconsistent animation** when deleting multiple items.

- Fixed an issue where **canceling a node** could freeze the engine.

- Fixed **redundant shine effect** on nodes already built.

- Fixed **hidden Graph Tabs** not hiding corresponding **Data View** nodes.

#### **Data & Export Fixes**

- Fixed **Unbaking** contaminating data.

- Fixed **Range and Vector3 duplication** issues.

- Fixed **data contamination** when duplicating and pasting nodes.

- Fixed **some outputs not saving** in the build folder.

Several internal changes have been made to improve the overall stability and performance of Gaea.

## Compatibility

Gaea 2.1 files are NOT backward compatible with older builds. Please make sure to back up your files before opening them in Gaea 2.1.

Gaea will try to automatically create a copy of the older file in the Autosave folder when opening it for the first time.

WE DO NOT RECOMMEND USING AN EARLY ACCESS PREVIEW FOR PRODUCTION USE!

## Using Regions

For detailed instructions, see [the documentation](https://gaea.app/docs-regions).

1. Like with tiling, all "Must Bake" nodes must be baked. For convenience, add a Gate node where you want the baking to end and use the Bake Menu > Bake Gates command to quickly bake all gates. You can use the Data View Tree Filter "Requires Baking" to see which nodes must be baked.

2. Use the Regions tab in Build Settings to define your regions. Right-click to select current node as your preview. (You must save your file first.) This process will become easier as we add polish to these features.

3. Once Regions are created and your bakeables are baked, use the Region dropdown next to the Preview Resolution dropdown, or the Preview > Region menu to select a region to drill-down to.

4. All non-baked nodes will act at whatever your preview or build resolution is. You can scale it to any resolution you like.

You can set the Build Scope in Build Settings to a specific region and launch a build to build just that region.

Additionally, you get Build Profiles to save and load build settings for various scopes.

NOTE: This is a preview build and is subject to change between now and final release.
