---
title: Early Access Previews
uid: early-access-previews
order: 1001
---

# Early Access Previews

The following is a list of changelogs from all Early Access Preview (EAP) builds that were publicly available prior to the release of the Production Ready version.

## 2.0.0.13

* Fixed a critical regression in Blur that prevent resolution independence.

## 2.0.0.12

* Fixed a critical bug in Blur and any nodes that relied on Blur.

## 2.0.0.11

* Added option to always show Mask port on compatible nodes.
* New Outcrops node.
* New Stones node.
* New Hemisphere node.
* New Shear node.
* New Shatter node.
* New Steps node.
* New Surfacer node. (Known as Surface in Gaea 1.3)
* New modes in Data Extractor node.
* Curve node output improved.
* File node now supports relative paths.
* Linear Gamma enforcement added to File node.
* Combiner node bugfixes for Subtract and Difference modes.
* Combiner node now respects Clamp directive.
* Modifiers stack refined.
* EasyErosion modes improved.
* New Height Remap modifier replaces Multiplier.
* SoftClip removed from LightX Render node.
* Height option added to Gradient nodes.
* Craggy node size reversed for better sync with shape.
* Vertical dilation added to Dilate node.
* Improved node validation for complex graphs.
* Added a chart to visualize data in Statistics window.
* Added meter notation to Terrain Definition in Build Settings.
* Unreal Node now supports easier naming/prefix selection.
* Node Family menu improved.
* Blur speed improvement on CPU and GPU.
* Experimental GPU mode added to Median blur.
* New Sun control in Sky Editor.
* Sky Editor easier to access from Viewport toolbar.
* Removed "Sun Sphere" from viewport.
* Fixed several bugs in Sky editor.
* Fixed a bug in Bomber High Quality mode.
* Fixed a bug in Editor property visibility.
* Fixed Tab toggle shortcuts.
* Fixed a bug in Sand node Warp By Terrain option.
* Fixed a bug in Rugged node where terrain would go below the ground.
* Fixed a bug where filenames would be truncated incorrectly in File node.
* Fixed a bug where duplicated nodes would lose connections on reload.
* Fixed a bug where Craterfield would unnecessarily increase terrain height.
* Fixed a bug where bypassed nodes would break expected behavior of chain.
* Fixed a bug where replacing a node would break expected behavior of chain.
* Several minor and rare bugs fixed.

## 2.0.0.10

* Mesher would not export non-optimized meshes.
* File node improved.
* Fixed file node crashes.
* Resetting Transform node would break some properties.
* Height option added to Mountain node.
* New style for Viewport.
* Fixed floating viewport window style.
* Fixed an issue in Erosion2 not processing properly.

## 2.0.0.9

* Fixed a critical bug that caused several nodes' UI to stop functioning.
* File node would crash in some instances.
* Layers node added for blending multiple nodes with multiple masks.
* Fixed issues with the Build Path.
* Obsolete Erosion parameter removed from Craggy.
* Gizmo in Radial Gradient was inverted.
* Transform Gizmo would break the node.
* OffsetZ temporarily removed from Transform node.
* Fixed a critical bug in Mask node.
* Several internal fixes.

## 2.0.0.8

* Added support for Gaea2Houdini plugin.
* Mask port is now available in all nodes. Drop connection on center of node to expose.
* Mask node fixed.
* Fixed 2D Viewport added to the main viewport area.
* Autosave toolbar menu now populates the last 5 autosaves.
* Undo recording (work-in-progress) works. Actual undo is coming up in a near future build.
* Bypass node command now works properly.
* Build Settings window improved.
* World Dimension settings added to Build Settings window.
* Build option now directly available from the Build tab in the Data View.
* Shift-Drag on multi-thumb slider did not behave properly.
* New Plates node.
* TextureBase improved.
* Data Extractor node added to extract data from other nodes such as Modifier mask.
* New Modifiers - Blur, Equalizer, Threshold, Warp, and Influence.
* Modifiers would not be preserved when restoring a node.
* Modifiers would not be preserved when replacing a node.
* Renderer improved in CPU mode.
* Hills node simplified.
* SlopeBlur fixed.
* Option to hide Advanced tools in Options menu.
* Gizmo behavior regression fixed.
* Equalizer node added.
* Equalizer option added to Adjust node.
* 2D Map viewer navigation improved.
* Exportable Nodes view improved for readability.
* Fixed several crashes in the UI.
* Fixed several issues with the engine.
* Several performance improvements through the application.

## 2.0.0.7

* Support for Gaea Unreal Tools 2.0.0.7.
* New redesigned Curve node.
* Central Overwrite mode for builds.
* Latest Build folder option for incremental builds.
* Baked color nodes would load incorrectly.
* Post-Build Script commands.
* XPU improvements.
* Several graph bug fixes.
* Further internal engine updates for upcoming Hybrid Builds.
* Improved support for AMD devices.
* Build Settings window improved.

## 2.0.0.6

* Added support for viewport on second screen or as floating window.
* Thermal2 algorithm improved.
* Thermal2 now supports Sediment Removal.
* GPU/XPU engine improvements.
* Added fallback/retry mechanism to switch to CPU if GPU fails or runs out of memory.
* Gizmo behavior has been improved. Further improvements are coming.
* Gizmos are now optional, and can be toggled from the property editor toolbar.
* HSL node was broken.
* Gamma node was broken.
* Classic mode added to Distance node.
* Snow Gizmo behavior was incorrect.
* Origami was incorrectly categorized in Color nodes.
* Group icon and color menus were not working.
* Combine Square Root and Divide modes fixed.
* Combine UI improved for faster mode selection.
* Copy/Paste shortcuts were not working.
* Fixed several issues with Build Swarm, especially with incorrect resolutions.
* Import Graph (.terrain) command added.
* Import/Export Graph Fragment (.tfrag) files.
* Image import menu command added.
* Lots of ground-work for the upcoming Hybrid Builds.
* Improved several aspects of the main and secondary UI.

## 2.0.0.5

* Several critical fixes for license activation.
* New viewport gizmos for managing nodes such as Perlin, Radial Gradient, Transform, and more.
* Sun sunlight modification gizmo.
* Menus visually improved to distinguish from buttons.
* Improved UI for Build Swarm.
* Post-build reports in Build Swarm in UI, JSON file, and plain text.
* Min/Max Modifiers in Modifiers stack were broken.
* License issue prevented Gaea from running in some cases.
* Build Swarm would default to 1024 x 1024 resolution.
* Render modes merged into a single menu item to save space.
* Connections would not draw correctly on reconnecting some nodes.
* Deleting a Preview Locked node would crash Gaea.
* Graph Search would show up outside of the Graph.
* Terrace Steepness restored. Node works exactly as in Gaea 1.0.
* Swirl was not resolution independent.
* Curvature Map was incorrect.
* Improved handling of GPU devices.
* Several other minor fixes.

## 2.0.0.4

* Fixed an issue where Build Swarm would not run.
* Fixed an issue where license would not be recognized in some rare cases.
* Erosion1 was not working correctly.
* Halftone node added.
* Diagnostics and Benchmark would not work in some cases.
* Fixed several issues reported in Build Swarm.
* Important stability fixes.

## 2.0.0.3

* Major improvements throughout the engine.
* Support for CPU and GPU acceleration.
* Several new nodes added.
* Baking and Caching enabled.
* Foundational support for Hybrid Builds (coming soon).
* `F4` now allows node layout as in Gaea 1.0.
* Automatic updater added.
* Camera panning broke when viewport was rotated.
* Diagnostics app improved with new options and benchmarks.
* Double-clicking node in Data View selects the node in the Graph.
* Export now ensures output is clamped.
* Fast load through cached previews.
* Fixed issues with connecting nodes in some situations.
* Gaea would not work on non-English installations of windows.
* Graph toolbar button for port and portals manipulation.
* Improved licensing so activations are not exhausted quickly.
* New licensing system, with ability to release license.
* Portal available in Search.
* Prevent values beyond 0..1, unless explicitly chosen.
* Preview Resolution menu now also available at the top of the window.
* Signed distributable to avoid antivirus issues.
* Viewport navigation buttons were not assigned properly.
* Canyon: Obsolete `Width` property removed.
* Constant: Obsolete `Iterations` property removed.
* Debris: New node.
* Dilate: Node was not working properly.
* Export: Node improved.
* Extend: Node was not working properly.
* Flip: Node was not working properly.
* LineNoise: `Clamp` fixed.
* MountainSide: Erosion added to the primitive.
* MountainSide: Redesigned node now fully functional.
* Noise: Fixed property visibility based on mode.
* Primitives: All primitives will now respect the primary input as a mask.
* Recurve: Improved model.
* SoftClip: Node was not working properly.
* Swirl: `Intensity` removed. Use `Multiplier` modifier instead.
* Terraces: Obsolete `SoftFalloff` and `Steepness` removed.
* Thermal2: New node.
* ThermalShaper: `Influence` was not working.
* Unity: New node.
* Unreal: 8K resolution now available.
* Warp: `Modulation` was not working properly.
