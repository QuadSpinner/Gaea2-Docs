---
title: Gaea 2.2 released!
uid: gaea-2-2-released
modified: "2025-07-14T19:41:16Z"
description: Over the last 3 months, we've been working very hard to create Gaea 2.2.
---

### Gaea 2.2 features a major upgrade for Erosion\_2, Ice nodes, several new nodes, 20+ improvements to existing nodes, many key workflow enhancements, and over 150 bug fixes and stability updates.

Over the last 3 months, we've been working very hard to create Gaea 2.2. We consider this to be one of our biggest updates to Gaea ever, both in terms of new functionality as well as internal engine upgrades to add a new level of stability. We were able to address over 50 suggestions/ideas and 100+ bug fixes as reported by you, and our internal testing team.

We also laid the foundation for a lot of features that will follow in the near-future, including the return of the Gaea TOR Processor SOP for Houdini.

![](__GHOST_URL__/content/images/2025/07/selective_precip.jpg)# Erosion\_2: Selective Precipitation

One of the most loved features of Classic Erosion from Gaea 1 has been ported to the new GPU-friendly algorithm.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_Untitled_02-02-46-AM.png)![](__GHOST_URL__/content/images/2025/07/Gaea_-_Untitled_10-06-30-PM.png)Selective Precipitation comes in two forms: built in Orographic Erosion controls where you can create Rain Shadows, Slope and Altitude limits; or use a mask to drive precipitation in any form you want!

# Glacier

The Glacier node takes Snow or other custom input and converts it into thick sheets of ice. The surface can be converted into a variety of surfaces, including directional sloped grooves, fluvial breakage, complex substructure, and more.

![](__GHOST_URL__/content/images/2025/07/glacier.jpg)# Snowfield

Snowfield is a new snow node that creates heavy snowfall specifically for large environments and strong snowy peaks. It performs snow simulation in cascades, creating realistic interaction between new and old snow, as well as creating snow buildup that is not directly possible with a single Snow node.

![](__GHOST_URL__/content/images/2025/07/sf1.jpg)# Examples Browser

The new Examples Browser, accessible from both the Start dialog and the File menu, provides easy access to 60 new examples.

![](__GHOST_URL__/content/images/2025/07/Examples_10-08-19-PM.png)We will continue to update these examples.

New examples include highly complex production-quality setups such as the Glacier Complex Setup.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_site_followRivers-013.terrain_03-16-30-AM.png)# Single Craters

The Crater node can now be used to generate single crater exactly like the Craterfield node. You can use the Gizmo (Z) to move it in the viewport, and even chain multiple Crater nodes to place craters on top of each other.

![](__GHOST_URL__/content/images/2025/07/crater.png)# Debris

Debris gets an high-powered efficient upgrade as well as a new sizing mechanism to set the individual debris size more accurately.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_TalusNode003.terrain_11-54-53-PM.png)Coupled with Erosion\_2's new selective erosion, you can take your terrains to new heights!

# Trees + Shrubs

The Trees node has been overhauled to make it easier to use, predictable, and further in line with Gaea 1's Arboreal node.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_site-biomes-004.terrain_08-55-27-PM.png)![](__GHOST_URL__/content/images/2025/07/veg0.jpg)![](__GHOST_URL__/content/images/2025/07/veg1.jpg)![](__GHOST_URL__/content/images/2025/07/veg2.jpg)![](__GHOST_URL__/content/images/2025/07/veg3.jpg)![](__GHOST_URL__/content/images/2025/07/veg4.jpg)![](__GHOST_URL__/content/images/2025/07/veg5.jpg)Layering 3 Tree systems/biotopes to create an intricate ecosystem. Last image shows internal data of freshwater and other aspects are considered when growing trees.B

# Colorized Mask Previews

Choose from several mask colorizations in the Viewport/Sky properties. The new modes aim to help you visualize detail more accurately in different situations.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_TalusNode003.terrain_11-57-19-PM.png)![](__GHOST_URL__/content/images/2025/07/Gaea_-_Untitled_10-24-55-PM.png)# Other Nodes

## Shape Primitive

A new basic primitive to create geometric shapes.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_Untitled_10-35-50-PM.png)## IceFloe

Create frozen chunks of ice in lakes and sea shores.

![](__GHOST_URL__/content/images/2025/07/icefloe.webp)## Dusting

Dusting angles can now be turned off for even greater control.

![](__GHOST_URL__/content/images/2025/07/dusting.webp)## BlobRemover

A low-level node that helps isolate and remove small blobs or disconnected shapes.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_Untitled_10-43-03-PM.png)## Scree

Add fake stones and rocks in flow zones on a terrain. A quick way to add a lot of small detail. Mix with Debris to reduce required debris count while still creating an illusion of heavy rock accumulation.

![](__GHOST_URL__/content/images/2025/07/Gaea_-_TalusNode002.terrain_09-02-33-PM---Copy.jpg)## And more...

### **New Nodes**

- **BlobRemover** – Clean up noisy formations in terrain.

- **Distress** – Introduce erosion and decay details.

- **Glacier** - Add giant sheets of ice on your mountains.

- **IceFloe** – Simulate fractured, frozen terrain features.

- **Shape** – Create primitive terrain shapes.

- **Scree** – Scatter rock debris naturally.

- **Snowfield** – Specialized snow coverage node.

- **Var** – Create and manipulate variables in advanced graphs.

- **Shrubs** – Create vast, low-lying bushes and shrubs to accompany the Trees node.

- **Heal** – Node from Gaea 1 ported to Gaea 2.

---

### **Node Updates & Improvements**

- **Crater** – Now supports single placement and Gizmo.

- **Craterfield** – Significant performance boost.

- **ColorErosion** – Added Diffusion control for softening effects.

- **Debris** – New *Scale* control and more art-directable output.

- **DriftNoise** – Classic Gaea 1 look is now optional.

- **Erosion2** – Major new algorithm upgrade with selective processing.

	- **Orographic Erosion** controls.

	- **Selective Precipitation** mask input.

	- **Direction Bias** added.

	- Improved deterministic output.

- **Crumble** – Directional Bias added.

- **EasyErosion** – Direction Bias support.

- **Dusting** – Slope coverage now optional.

- **ThermalShaper** – Rewritten for faster GPU execution, and with additional controls.

- **Mixer** – Supports Height/Slope inputs. Shows constant color if unconnected.

- **Sediments** – Now includes *Fine* mode.

- **Snow** – New *Model Scale* parameter. Secondary port display fixed.

- **Slope** – *MicroAccent* parameter for finer control over slope selection.

- **Steps** - Incorrect behavior has been fixed.

- **Peaks** - Option to increase detection sensitivity.

- **RGBSplit** – Enhanced with grayscale mode options.

- **RGBMerge** – Better contamination handling and new enhancement options.

- **Recurve** – Orientation improvements.

- **Transform** – Supports Color inputs; position corrected to -1 to +1 range.

- **WaterColor** – New HSL mode; sea visuals updated. No longer requires Guide input in Accumulation mode.

- **Blur** – Now supports color maps.

- **MeshWarp** – Renamed to **TextureBaker** for clarity.

- **GroundTexture** – New simple Roughness mode.

# Bridge Updates

![](__GHOST_URL__/content/images/2025/07/bridges.png)More Bridges are being planned, and will be full open-source projects.## Gaea2Unreal for UE 5.6

The open-source Gaea2Unreal plugin has been updated to support Unreal Engine 5.6, and is now ready for production use.

Download from [GitHub Releases](https://github.com/QuadSpinner/Gaea2Unreal/releases).

## Gaea2Houdini Redux!

We've been busy rewriting Gaea2Houdini based on your feedback. Very soon, we plan to reintroduce the Gaea TOR Processor SOP into Houdini. The updated engine is powered by the new Variables and Expressions system, as well as brand new background-service Build System to faster interface between Gaea and Houdini. 

![](__GHOST_URL__/content/images/2025/07/realColors2.webp)We're also pleased to announce that the new TOR Processor will support color use, including ColorErosion!

---

# Download Now

Upgrade your Gaea experience and [download Gaea 2.2 today](https://quadspinner.com/download/).

![](__GHOST_URL__/content/images/2025/07/27D.jpg)We will cover the new features in detail over multiple blog posts and videos over the next few weeks. Stay tuned!

---

# Full Release Notes

### **Workflow Enhancements**

- **Regions** – Independent resolutions and improved management; internal code handling improved.

- **Autosaves** – Easier access via File and Autosave menus.

- **Artifact Explorer** – Inspect contents across multiple Gaea folders.

- **Example Browser** – Access **60 new curated example files** from Start Dialog and File menu.

- **Camera Commands** – Restore to Last Loaded or Default view.

- **Node Creation** – Toolbox now auto-connects to selected nodes.

- **Draw Node** – Now behaves predictably when duplicated.

- **Portal Menu** – Improved UX, avoids cyclic connections.

- **CLI** – Set resolution, license server, and other params.

	- New *`--silent`* switch to disable interactive UI.

	- New **SwarmHost** middleware for building custom Bridges.

	- Specify Build Path using `buildpath`.

---

### **Graph & UI Upgrades**

- **Graph Autolayout** – Improved stability and portal handling.

- **Node Placement** – Smarter duplication and cleaner alignment.

- **DataView** – More intuitive selection updates.

- **Treeview & Regions** – Enhanced layout, naming, and resizing from all sides.

- **Options Window** – Reorganized for better clarity.

- **Mask Visualization** – Multiple gradient presets; **Viewport Mask Color options** to visualize masks with different palettes.

- **UI Texts** – Tooltip hints, last modified time, and improved sliders.

- **Zoom Extents** – More stable, even on empty graphs.

- **Recent Menu** – Shows last modified date in tooltip.

- **Render Modes** – Faster rendering with improved mechanism and fewer memory allocations.

	- **Clay Render Mode** now supports color maps.

	- Switch Render Modes with double-key shortcuts: F1, 1; F1, 2; F1, 3.

	- Lazy Menu tweaked for easier access.

	- Viewport rendering improved overall.

---

### **Command Line & Licensing**

- **CLI** – See Workflow Enhancements for new switches.

- **Floating Licenses** – Supports **Offline Fortress Server** deployments.

- **GRAW** – Improved read/write reliability; writes additional metadata.

- **Swarm** – Honors *`--ignorecache`* switch.

---

### **Performance & Stability**

- **Cache/Bake/Freeze** – Major rewrite for reliability and speed.

- **Improved determinism** on GPU nodes like Erosion2.

- **Improved node efficiency** for Craterfield, Debris, etc.

- **Improved memory handling** for 8K and 16K builds.

- **Aggressive memory recovery** during 4K+ builds.

- **Smart Cache** – Option to offload unused cache to disk.

- **Improved memory readout** in Status Bar.

- **Faster undo stack**, drag-drop modifiers, and layout performance.

- **Loading Baked Data** better utilizes SSDs.

- **Accumulators** – Memory management improved.

---

### **FIXES**

#### Critical crashes and data corruption

- FIX: Deleting a graph tab could create node remnants that could corrupt a file.

- FIX: Major error that prevented undo operations.

- FIX: Bake required nodes could cause a crash.

- FIX: Crash when loading tabs in specific situations.

- FIX: Crash when removing portal.

- FIX: Crash if Gizmo hotkey used when node is unselected.

- FIX: Graph selection change could crash Gaea.

- FIX: Setting node filter criteria to heavy on empty graph could cause a crash.

- FIX: ZoomExtents would cause crash on empty graph.

- FIX: Potential crash when rendering ReadOuts if Cache is null.

- FIX: Weathering could fail during large builds if used before SatMaps.

---

#### Stability / reliability

- FIX: Loading Baked Data better utilizes SSDs.

- FIX: Accumulators should not remain in memory if not used.

- FIX: Smart Cache: better orphan data detection and cleanup.

- FIX: Orphan data detection to fix obsolete data remnants from older versions of Gaea.

- FIX: Incorrect memory usage reported in some situations.

- FIX: Swarm would not honor *`--ignorecache`* switch.

- FIX: Gaea reinforces Nvidia Fallback Policy profile if removed.

- FIX: Cache folder would not be created when creating a job.

- FIX: GetCacheSize could fail if cache is missing. Should not cascade.

- FIX: Hybrid Build could fail in some instances when exporting a single output.

- FIX: Half (half-float) files were not being written.

- FIX: Migratory copy save can fail.

- FIX: Import caused inner exception when dialog closed without file selection or file was missing.

- FIX: IPs are now loaded through plain text. Needs testing!

---

#### Functional correctness / node behavior

- FIX: WaterColor should not require Guide input if Accumulation mode is used.

- FIX: RGBSplit was broken.

- FIX: Snow extra inputs were working incorrectly.

- FIX: Secondary port display in Snow.

- FIX: Mixer should honor current input as Underlay if pinned underlay is not present.

- FIX: Transform position corrected to -1 to +1 range.

- FIX: Draw node is blank when duplicated.

- FIX: Thermal2 could create an excess border at the edges.

- FIX: Modifiers were not rebuilt when dragged and re-ordered.

- FIX: Modifiers were not added to the bottom of the stack.

- FIX: Modifier UI was not updating after modifier undo.

- FIX: Node export could be blocked in rare cases.

- FIX: Node render is outdated when reconnecting a node.

- FIX: Node added inside a group's bounds was not correctly assigned to the group.

- FIX: Node did not read state correctly in some situations.

- FIX: Switch can now bypass validation, and provide routing more accurately.

- FIX: Tint should not enforce defaults in struct parameters.

- FIX: Transpose's Insert and Embed may not work cleanly.

---

#### Graph, UI, and usability

- FIX: Autolayout does not work on other rows of graph.

- FIX: Autolayout should ignore portals.

- FIX: Toolbox padding incorrect when confined to a small area.

- FIX: Portal Menu avoids cyclic connections.

- FIX: Clicking on region makes it shift to the left.

- FIX: Region position and size changed on reload.

- FIX: Regions management, internal code handling improved.

- FIX: Duplicate name checking on region renaming.

- FIX: Renaming node does not rename Portals.

- FIX: Search portal menu now does not show portals that can create cyclic connection.

- FIX: Node Creation Toolbox now auto-connects to selected nodes.

- FIX: Create connection was not calling OnSourceUpdated, affecting selection of newly created connection.

- FIX: Creating group without selected items could crash Gaea.

- FIX: Draw window borders were intrusive and overlapped.

- FIX: Prevent premature snapping to small node outputs.

- FIX: File node does not throw error if file is missing but cached.

- FIX: File Relative Paths fixed.

- FIX: Lighting Reset was broken.

- FIX: TaskDialog should be owned by top window.

- FIX: Setup title should show full version.

- FIX: Viewport overlay was not updating to region size in preview regions.

- FIX: Viewport Navigation was setting Sensitivity incorrectly.

- FIX: Zoom extents could cause crash in some cases.

- FIX: Viewport Navigation improved.

- FIX: Status Text was not displayed.

- FIX: Recent Menu shows last modified date in tooltip.

---

#### Undo/Redo, save/load, graph state

- FIX: Do not Freeze if not dirty.

- FIX: Freeze not working on close.

- FIX: Frozen cache would not load; Offloaded GUID was not saved in metadata.

- FIX: Gaea would crash on undoing enum parameter value.

- FIX: Undo operations improved for graph changes.

- FIX: Undo values were not applying correctly.

- FIX: On file load bypass node not clearly identified.

- FIX: On file open graph elements did not show at saved position.

- FIX: Current graph contents were not visible on file load.

- FIX: Major error that prevented undo operations.

- FIX: Potential fix for Modifiers undo.

---

#### Misc / low severity

- FIX: Added a pre-build warning if color nodes dependent on Height nodes were not connected.

- FIX: Connection issues fixed in "move to tab" option.

- FIX: EditorBase visibility issues.

- FIX: Event should be handled in Dispatcher.

- FIX: Graph nodes visibility issues, zoom state not maintained on file load.

- FIX: Grayscale caused issues by not passing a copy.

- FIX: GroundBrightness default was missing.

- FIX: Group auto-connect menu would not show enclosed portals.

- FIX: Old files were forced to use Zero Exposure and appeared black.

- FIX: Proper notification for Max Seat assignments for floating licenses.

- FIX: Race condition for checking BestDeviceActive.

- FIX: Repair File could break by importing custom default Preset for nodes.

- FIX: Route range was incorrect.

- FIX: Right-click crashed SliderY; FIX: Default should set both X and Y.

- FIX: Setting node filter criteria to heavy on empty graph could cause a crash.

- FIX: String Variable Editor could crash on null.

- FIX: Tiled Build failed with Unreal node.

- FIX: VisibilityTable did not work in some cases.

- FIX: Warn when Accumulator is not connected.

And as usual, a few dozen internal fixes and improvements to improve stability based on your feedback.

## Breaking Changes

The following nodes may not be fully backward compatible with Gaea 2.1 or earlier builds.

- Trees

- Cellular3D

- Debris

- ThermalShaper (minor variance in results)

It is highly recommended that if you migrate an active project from Gaea 2.1 to 2.2, that you make a backup first and ensure all your nodes are behaving properly.

Gaea will attempt to create a Recovery copy in the Autosave folder for disaster recovery, but you should still keep a manual backup copy just in case.
