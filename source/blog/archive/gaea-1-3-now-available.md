---
title: Gaea 1.3 now available
uid: gaea-1-3-now-available
modified: "2025-07-22T21:38:42Z"
---

One of our longest development cycles is finally over. We're happy to announce that Gaea 1.3 - our biggest and most powerful update yet - is ready for production! 

[Download Gaea 1.3 (Production Ready)](https://quadspinner.com/download/)Gaea 1.3 is the most performant version to date with better responsiveness while using the application and when building terrains. Not only that, with 260 new features, fixes, and improvements - including 100+ new Quickstarts and powerful new nodes - it is our largest shipping version to date.

![](__GHOST_URL__/content/images/2022/02/new-13-01.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-02.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-03.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-04.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-05.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-06.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-07.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-08.jpg)![](__GHOST_URL__/content/images/2022/02/new-13-09.jpg)Gaea 1.3 introduces several new nodes - such as Canyon, Craterfield, Sea, Seamless, Rugged, Rocky, Rivers, and more!# Stability and Performance

### Stability and Predictability

The majority of our time and efforts in this version were spent on ensuring stability across all modules.

We also reworked our navigation system to provide a solid, familiar experience no matter what CG application you're coming from. Viewport interactions are now fully customizable, and we have better support for pen/stylus and touch users.

### Performance

You will find that Gaea 1.3 is ***up to 30%*** faster than Gaea 1.2. Overall responsiveness of the application is also greatly increased. Startup is dramatically faster on medium and high-end configurations.

Previews at higher resolutions such as 2K or 4K are more responsive and create a smaller memory footprint. We do still recommend at least 64GB RAM when creating complex worlds in 2K or higher.

### Long Term Support (LTS)

Gaea 1.3 is meant to be our Long-Term Support (LTS) version. It is our recommended version for production use. Future updates to the LTS version will be fully backward compatible and can be installed side-by-side for risk-free upgrades while in production.

The LTS version will remain feature locked beyond the 1.3.1 updates mentioned further below.

---

# New Features

## Rivers

Gaea's new Rivers node creates vast, intricate river networks with minimal effort. Even when your terrain is not conducive to rivers, the node will intelligently adapt the terrain to allow river formations while still preserving the overall shape and character of your landscape.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-riverPlains-003.to_09-34-33-PM.jpg)The new Rivers node can produce exquisite river networks.## New Nodes

As you can see the at the top of the page, Gaea adds several new nodes including: **Canyon**, **Craterfield** (new mode inside **Crater**), **Distance**, **DriftNoise**, **Gabor**, **Hill**, **Loop**, **Repeat**, **Rivers**, **Rocky**, **Rugged**, **Sea**, **Seamless**, **Slump**, **SoftClip**, **Sunlight**, and **Wizard**.

![](__GHOST_URL__/content/images/2022/02/prototype-1.webp)![](__GHOST_URL__/content/images/2022/02/prototype-2.webp)![](__GHOST_URL__/content/images/2022/02/rock-1.webp)![](__GHOST_URL__/content/images/2022/02/rock-3.webp)![](__GHOST_URL__/content/images/2022/02/rock-4.webp)![](__GHOST_URL__/content/images/2022/02/water-2.webp)## Combine: Insert and Embed

These simple yet powerful new modes in the **Combine** node allow you to merge two disparate terrains. 

With the **Insert** mode, you can insert relatively flat and isolated shapes - such as clumps of rocks - into an uneven surface, such as sand dunes, while retaining the flatness of the rocks.

![](__GHOST_URL__/content/images/2022/02/embed.jpg)Combine's new Embed mode can transfer any terrain onto another terrain.Similarly, with the **Embed** mode, you can take any shape **-** whether flat or not - and embed them into any other terrain.

Unlike *Screen* or *Add*, the two shapes are not contaminated by each other.

This gives you the freedom to develop patterns or rock "motifs" outside of your terrain and then embed them afterwards. Such a workflow allows you to focus on the overall shape or silhouette of the terrain and add superficial details later.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Rcn-v2-001.tor-_05-04-24-AM.webp)Gaea 1.3 gives you all the tools to create exquisite details - whether part of your terrain or in a separate normal map.## Optimized Meshes

Our new Sophia Engine for synthesizing meshes uses a cutting-edge algorithm to create highly optimized meshes. It can match an arbitrary polygon count, budgeting them where they're needed to maintain the complexity of the local shapes.

The **Mesher** node now defaults to Optimized geometry.

![](__GHOST_URL__/content/images/2022/02/mesh-4-1.jpg)Optimized Tris output (top) vs. standard uniform grid output (bottom).Compared to uniform grid meshes (tris or quads), you can save up to 60% polygons based on your terrain shape. It is especially useful when you have flat or smooth areas.

![](__GHOST_URL__/content/images/2022/02/Marmoset_Toolbag_3.08____marmo-006.tbscene-2021-07-18--5700.jpg)Optimized Tris geometry reserves polygons for where they're needed the most!All the finer details can be relegated to a normal map to retain the crispness without creating a noisy mesh. This can be very useful for virtual production, games or other realtime scenarios, as well as offline renders.

![](__GHOST_URL__/content/images/2022/02/beyond-3-3.jpg)Optimized meshes can save a lot of render resources, whether for virtual production, realtime games, or offline VFX.## Wizard

The **Wizard** node is a specialized version of our flagship **Erosion** node. It is a completely new way of using our erosion simulation through an easier interface with simple choices, and sophisticated built-in recipes and passes.

If you are new to Gaea, you can achieve elaborate erosion with a minimal learning curve. If you are an experienced terrain artist, **Wizard** can help you save time by providing recipes for the most common erosion scenarios.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Shallow_Canyon.tor-2021-08-26--6270.jpg)The Wizard nodes makes erosion even easier to use.## Sediment Removal

Sediment Removal is a new feature in the **Erosion**, **Wizard**, and **Thermal** nodes. It can arbitrarily remove sediments generated from the erosive process to reveal deep crevices.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Untitled.tor-_06-59-18-PM.jpg)Mask-driven Sediment Removal in the Erosion node.Sedimental Removal can be either uniform across the entire terrain, or driven by a mask just like Precipitation or Erosion Strength.

## ThermalShaper

**ThermalShaper** is a fast and effective way to condense and coalesce shapes similar to **Shaper**. The shapes produced are closer to a **Thermal** erosion simulation.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-River_Canyon.tor-_02-49-46-AM.jpg)ThermalShaper is used to condense the peaks and ridges to give them a sharp look without creating the familiar erosion spikes.You can use it to create smoother ridges or bulk up a terrain without creating bulbous shapes. **ThermalShaper** works very well with **Rivers**.

## Seamless Tiling

One of the most requested features for Gaea was seamless tiling. The **Seamless** node can transform any terrain into a repeatable/tileable one. You can adjust the transformation on either axis and choose the blend zone extents. The built-in tile preview lets you quickly check its viability while working on it.

![](__GHOST_URL__/content/images/2022/02/new-13-06-1.jpg)Additionally, the **Repeat** node can take a seamless terrain and repeat it to create a large tiling landscape for use within your terrain. For example, you can create sand at a higher scale, then use **Seamless** and **Repeat** to make it tile across a larger area at a smaller scale.

## New Start Experience

The new Start Screen gives you direct access to over 110 new quickstarts, recent files, and update notifications. You can also search quickstarts and your recently opened files. Gaea now remembers up to 5000 past files!

![](__GHOST_URL__/content/images/2022/02/Welcome_to_Gaea_06-15-02-PM.png)## 110+ Quickstarts

Gaea 1.3 features over 110 new quickstarts that show various aspects of terrain design, including texturing techniques, economy of nodes, and more. The new Start experience lets you browse through these quickstarts through categorical menus and a search box.

![](__GHOST_URL__/content/images/2022/02/Rocks-and-Sand.jpg)![](__GHOST_URL__/content/images/2022/02/Cartography-II.jpg)![](__GHOST_URL__/content/images/2022/02/River-Canyon-with-Snow.jpg)![](__GHOST_URL__/content/images/2022/02/Bulbous-Alien-Landscape.jpg)![](__GHOST_URL__/content/images/2022/02/Volcano.jpg)![](__GHOST_URL__/content/images/2022/02/Shattered-Mountainscape.jpg)![](__GHOST_URL__/content/images/2022/02/Forced-Braiding.jpg)![](__GHOST_URL__/content/images/2022/02/River-Canyon--Eroded-.jpg)![](__GHOST_URL__/content/images/2022/02/Enclosed-River.jpg)A tiny fraction of the new quickstarts available in Gaea 1.3.## Help Menu

The handy Help menu in the top right of the Gaea window lets you access Gaea's documentation and bring up immediate help such as property details for the currently selected node.

You can also fire up Watson from the Help menu to diagnose your current session and create a log to send to tech support.

![](__GHOST_URL__/content/images/2022/02/L4ZDoOSEvt.png)Quick reference for the currently selected node right inside Gaea.You can also bring up the Keyboard Shortcuts guide to remind yourself of handy shortcuts that will make your life easier.

![](__GHOST_URL__/content/images/2022/02/g7hp9zs1XN.png)## Turntable Animator

Want to show off your cool new terrain, or give a full 360 degree view to your art director for proper evaluation? Try the new Turntable Animator. It can be accessed from the menu in the Build tab in the main Gaea sidebar.

![](__GHOST_URL__/content/images/2022/02/ezgif-3-3cb42b7cce.gif)Easily create turntable animations right inside Gaea.## High Performance with Baking

Gaea 1.3 makes baking even more useful, whether you want to increase the speed of your build, lock down certain parts of the graph, or offload finalized nodes from memory.

Baking and unbaking nodes, or loading and unloading baked cache, is now very easy through the Bake menu and the Property panel.

## Tiled Builds (Preview)

Gaea 1.3 introduces a preview version of Tiled Builds. Tiled Builds let you break the 8K limit and create larger worlds.

Along with Tiled Builds, the new 1:1 Tile Preview lets you drill down and inspect each tile at real resolution while working on the terrain. Additional functionality, such as viewport overlays, lets you identify edges where blending will occur so you can safeguard shapes ahead of time.

The core functionality is available in the Production Ready build of Gaea 1.3, however, it is not fully battle-tested and **is not considered production ready**. It will undergo improvements over the next few weeks. Additional convenience features will also be added in the 1.3.1 update in March. Further [details here](__GHOST_URL__/gaea-1-3-whats-coming/).

## Build Swarm

Build Swarm is one of the most critical parts of Gaea. We rewrote the Build Swarm from scratch for Gaea 1.3. The engine now works more efficiently, releasing unused memory faster, and allocating fewer resources in looped builds like Mutations, Tiled Builds, or Batch Builds.

![](__GHOST_URL__/content/images/2022/02/f6XDa1OVln.png)The new Build Swarm interface.The command line interface for the Build Swarm was also revised to better convey vital statistics and information about the current build.

🔕**We finally fixed that annoying ding!**   
  
If you had to endure the constant "ding" sound in previous builds, we can't apologize enough. It took us a while to discover the very strange source of the problem: it was a symbol character. The animation in the title bar of the Build Swarm used a bullet character that on some non-English locales and systems could cause a beep because U+2022 is a control character that can translate to the ASCII bell character!  
  
*Even Microsoft called it a "mystery". For any developers interested in this strange occurrence, see [this blog post](https://devblogs.microsoft.com/oldnewthing/20070104-00/?p=28513).*## Height Picker

Several nodes, such as **Snowfall**, **Height**, **Sea**, and others that have altitude sensitive properties, now have a "Height Picker" tool. Just click the eyedropper icon next to the property, then click the desired location in the 3D viewport.

You can also use the **Sample Height** button in the Status Bar to look at the height of any position on the terrain.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Untitled.tor-_07-20-40-PM.png)## Presets in Search

Search results now also include presets. You can quickly create your favorite presets straight from the **`Tab`** search window. For example, typing "rad" can let you find and create a Radial gradient instead of having to create a Gradient node and then change its mode to Radial.

![](__GHOST_URL__/content/images/2022/02/Search_07-19-03-PM.png)## Atmospheric Perspective

Toggling the built-in skybox now also gives you atmospheric perspective. You can control the amount through the Viewport settings.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-River_Canyon.tor-_02-54-55-AM.jpg)## Loop

The new **LoopBegin** / **LoopEnd** utility nodes allow you to repeat small operations. **LoopEnd** allows you to choose the number of iterations, and optionally allow mutating the seed of all nodes inside the loop.

![](__GHOST_URL__/content/images/2022/02/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Untitled.tor-_07-15-29-PM.png)## Watson Redesigned

Everyone's favorite diagnosis and repair tool was rebuilt from scratch to be faster and more useful with several new modules.

![](__GHOST_URL__/content/images/2022/02/Gaea_1.3_now_available_-_QuadSpinner_Blog_-_Person_07-25-24-PM.png)![](__GHOST_URL__/content/images/2022/02/4P981w4AGU.png)Watson was redesigned for Gaea 1.3.Not only can it capture all diagnostics in a couple of seconds, it can also help you clean your installation without having to reinstall the application.

The new Stress Test module lets you run benchmarks that can give you a score to compare against different machines. The Stress Test can also help identify issues in individual nodes.

# Download

Excited to get started? We'll soon cover new features and other helpful tips for Gaea 1.3 in videos on our [YouTube channel](https://youtube.com/quadspinner/).

In the meantime...

[Download Gaea 1.3](https://quadspinner.com/download/)

---

# Compatibility

Gaea 1.3 is NOT backward compatible with previous 1.2 builds or Bleeding Edge builds of 1.3 itself. 

In all scenarios, we highly recommend creating a backup of your work before opening old files. If at all possible, we recommend creating your terrain from scratch in Gaea 1.3.

See the documentation for the [migration guide for existing terrains](https://docs.quadspinner.com/Guide/Advanced-Topics/Migrating-Terrains.html).

⚠️Please see the list of Breaking Changes below.# Changelog

## New

- 110+ new Quickstarts!

- 1:1 Preview for Individual Tiles.

- Build Swarm's console interface has been revamped to make it more legible.

- Build: Build Swarm rewritten from the ground up for efficiency and stability.

- Build: Distributed (Tiled) Builds

- Build: Filename Format Mask for Tiled Builds

- Build: Optimized meshes with Sophia algorithm

- Build: Seamless Tiling

- Embed mode in Combine

- Feature: Turntable Animator

- Help menu in top right corner.

- Help: Directly access node documentation from properties panel.

- HydroFix node.

- Insert mode is now moved to Combine. The Insert node will be removed in the final release.

- Jitter mode in Blur node.

- New Quickstart categories.

- Node: Canyon node

- Node: Craterfield in Crater

- Node: Distance node

- Node: DriftNoise node

- Node: Gabor node

- Node: Hill node

- Node: Insert node.

- Node: LoopBegin node

- Node: LoopEnd node

- Node: Rocky node

- Node: Rugged node

- Node: Sea node

- Node: Seamless node

- Node: Slump node

- Node: SoftClip node

- Node: Sunlight node

- Node: TileInput node

- Node: Wizard node

- Recent Files stores up to 5000 files now.

- Repeat node.

- River node.

- Search can now use node presets.

- Search recent files or quickstarts in the Start screen.

- ShinyWaves node.

- Shortcut Map in new Help menu.

- ThermalShaper node.

- Tiled Builds Preview (see notes above).

- UI: New Startup Experience

- Viewport: Atmospheric Perspective

- Viewport: New viewport compass and grid

- Viewport: Orbit and First Person cameras

- Viewport: Overlay system for 3D and 2D views

- Viewport: Pick height and position visually

- Viewport: Save/Load Camera angles

- Watson redesigned.

- Watson: Additional cleanup options.

- Watson: Clean installation option.

- Watson: Force a diagnostic dump via Help menu in Gaea.

- Watson: Run stress tests.

- Workflow: 1:1 Tile Previews

- Workflow: Preview Seamless Tiling

## Improved

- Added an option to disable reusing previews when switching to a lower resolution.

- Build Manager's resolution dropdown reorganized.

- Build: Build-and-split output

- Build: Expanded resolution options

- Cache: Baked cache now shows higher resolution previews up to 4K

- Cache: Baking is now more efficient by using Build Swarm.

- Cache: Baking made more accessible, use to speed up your workflow and get higher resolution previews.

- Cache: Smart reminder to use persistent cache for faster startup

- Cache: Switching from higher to lower preview size is more efficient

- Cache: Unbake is now faster and more responsive.

- Dropped images in graph will show extension in node name.

- Erosion: Revised Toolbar for easier access to common commands

- Erosion: Build Tab added for easier access to output mechanisms.

- Erosion: Import/Reimport menu items moved to toolbar to avoid confusion.

- Erosion: Visual markers for stroke processing in Erosion Studio

- Erosion: Full support for R32 format for both input and output.

- File node: Enforce Linear Gamma option added.

- File: Raw 32-bit (.r32) now default format for working with Erosion Studio.

- Node: Anastamosis up to 80% faster

- Node: Canyonizer is now uses all CPU cores.

- Node: Canyonizer now has a Fast mode.

- Node: Cracks node has more features

- Node: Erosion 20% faster

- Node: FractalTerraces has new features.

- Node: Heal performance improved

- Node: Hydro updated.

- Node: Light node reprocessing is now faster.

- Node: Mask is now classified as a Primitive.

- Node: Minor speed improvements across all common nodes

- Node: Mountain 60% faster

- Node: Mountain has new mode

- Node: MultiFractal node has new features.

- Node: Noise nodes 20% faster

- Node: Occlusion node reworked

- Node: Recurve 50% faster

- Node: Sample Resolution control in Anastamosis

- Node: Sediment Removal feature in Erosion

- Node: Sediment Removal feature in Thermal node

- Node: Texture 40% faster

- Overall: Memory consumption improved.

- Overall: Overall efficiency and responsiveness improved.

- Overall: Overall stability improved across all scenarios.

- Overall: Startup made 90% more efficient

- Overall: Startup time reduced by up to 80%.

- Rivers algorithm produces even better results.

- SatMap style Bias slider added to QuickColor and CLUTer.

- Search dropdown height improved for different resolutions.

- Tile Blending improved.

- Typing mixer in search will return Combine node for convenience.

- UI: Build Manager simplified

- UI: Move to Tab command now accessible from the New Tab dropdown

- UI: Passive messages replaced with modal dialogs.

- UI: Quickly access recent projects from Open dropdown in title bar

- UI: Randomize button added to all Seed sliders.

- UI: Right-click node in Build list to go to node.

- UI: SatMap now visually reversed when Reverse option is enabled

- UI: Workspace defaults saving/loading simplified.

- Viewport: Customizable navigation with support for Maya-like and other popular controls

- Viewport: Detach or dock viewport quickly by right-clicking the Orbit camera button.

- Viewport: High resolution previews are now more efficient.

- Viewport: Higher efficiency for older graphics cards.

- Viewport: Improved color handling for water, snow, and other multi-material nodes

- Viewport: Improved handling of non-Wacom tablets.

- Viewport: Preview render cache requires 80% less memory.

- Viewport: Raw data view replaces the old 2D view modes

- Viewport: Select viewport quality presets by right-clicking Viewport Settings button.

- Viewport: Smaller file size and memory footprint of 3D engine.

- Viewport: Tablet support

- Viewport: Terrain direction would be inverted by 180 degrees on some hardware.

- Viewport: Ultra Tessellation option for 4K terrains in viewport

- Workflow: Improved handling of large graphs.

- Workflow: Improved warning for 4K previews, with option to never show again

- Workflow: Load custom overlay images

- Workflow: Reference overlays in tiled zoom for precision

- Workflow: Replace node

- Workflow: Warning when current node is not in the Pinned node chain.

## Fixed

- 32-bit EXR Export and Import revised (Scanline only).

- 32-bit TIFF Export and Import revised.

- Added option to invert zoom for tablet or mouse button drag.

- Adding a SatMap favorite could crash Gaea.

- Allow disabling mirroring in Fold during rotation.

- Aperture parallel processing was broken.

- Apex could incorrectly inflate shape.

- Attaching a node via Tab search would not update the new node.

- Auto updates renabled in Start screen.

- Baked Loads would not use when using Force Low Resolution open mode.

- Baked nodes would be reloaded incorrectly.

- Baking did not show progress.

- Breaker node would not return accurate results.

- Build Mutations would not work.

- Build Swarm did not produce XML file.

- Build Swarm would ignore license.

- Build Swarm would show incorrect resolution during build.

- Build: EXR output was incorrect

- Build: Specify CPU limit in command line builds

- Cache on Save did not work as expected.

- Cache: Baking would incorrectly classify some nodes in a chain.

- Cache: Improved handling of baked nodes when previewing and connecting nodes.

- Cache: Post Process could conflict with Persistent Cache

- Cancel would not be honored when closing Gaea.

- CLUTer editor would freeze while working and require manual refresh.

- Colorspace and Gamma issues in 32-bit files fixed.

- Combine's Extend property did not default to 0.

- Connecting a Primitive preset would not work correctly.

- Copy/Paste could freeze Gaea.

- Deleting a Mask node could create a false warning for missing resource.

- Displace node's Vertical mode would not return any results.

- Duplicate selection was incorrect.

- Duplicating a Mesher would not add it to the build list.

- Enhanced View has been reintroduced for Raw view.

- Few different crashes for 8K or higher builds.

- Gaea could corrupt a file in some rare situations.

- Gaea could corrupt files if certain nodes were used.

- Gaea could crash when saving a file.

- Gaea crashes when using Chokepoint and Altitude Picker

- Import was broken.

- Improved UX for renaming nodes' export filename.

- Incorrect license enforcement for 4K resolution in Indie.

- Incorrect mesh height for classic tris and quad meshes.

- Incorrect preview mesh quality when loading files.

- Logarithmic scaling and/or gamma curve was unnecessarily applied to some nodes.

- Mesh export UV and scale were incorrect.

- Mesher would crash for 8K builds.

- Minor baking issues fixed.

- Minor bugs related to opening or creating a file after working on another file.

- Minor improvements for 16K builds (still experimental!).

- Node: Angle node defaults improved.

- Node: Canyonizer would not report progress.

- Node: Combine node would not change color when working with color maps.

- Node: Erosion would freeze Gaea in some situations.

- Node: FractalTerraces reclassified as Profile node.

- Node: Island was broken

- Node: Island would not update if Seed was changed.

- Node: Masks could be ignored in Erosion node in some scenarios.

- Node: MultiCombine would show incorrect value for Uniform mode

- Node: Rotating Synth would create grayscale map

- Node: Seed removed from Snow node

- Node: ZeroBorders would work incorrectly

- Old files with the retired Coast node would failt to load.

- Option in File node for handling Gaea and non-Gaea EXR files.

- Output node now defaults to "Save to Build Folder".

- Overall: 50+ internal issues resolved for greater stability

- Overall: ForceOpenCL no longer crashes on Nvidia hardware.

- Overall: Garbage Collection would interrupt too frequently during design time.

- Recurve did not honor rotation.

- Render related crashes that could freeze the viewport in some cases.

- Replaced experimental code (for future features) that was causing instabilities.

- SatMap randomization was not random.

- SatMaps and other color nodes would break at 16k.

- Save dialog did not allow cancellation on New and Open.

- Sea surface artifacts at low values.

- Seamless continuity bug fixed. Edges will look much better now.

- Secondary Blur operations were broken.

- Several minor bugs and user reported issues.

- Splat would not save alpha in RGBA output.

- Status bar would show incorrect label for node progress.

- Synth was broken.

- TIFF 32-bit output was incorrect.

- Tiled Build crash if non-lynchpin node was marked for save.

- UI: 3D button would disable viewport navigation

- UI: Build Node List would show incorrect colors.

- UI: Changing Toolbox Positions would sometimes incorrectly layout the UI.

- UI: Constant node would show Seed setting incorrectly

- UI: Cursor would not scale with DPI

- UI: File Browser should show extension when opening image files.

- UI: File Browser should show full path as tooltip.

- UI: File browser would behave incorrectly in some scenarios.

- UI: Light editor would not update correctly.

- UI: Mesher would incorrectly be labelled as "Off"

- UI: Minor cleanup across the entire UI for aesthetics and cleanliness.

- UI: Node progress counter would show incorrect data.

- UI: Nodes would process twice upon creation, often creating a lock

- UI: Reset Layout would work incorrectly sometimes

- UI: Resetting a node would randomize slider colors.

- UI: SatMaps would not show correct map in editor when first created

- UI: Sliders would show incorrect capitalization.

- UI: Utility nodes would not show a color glow.

- Unbake operations optimized.

- Undo could crash if no nodes were selected.

- Unexpected repeating "ding" sound during builds has been fixed.

- Viewport: Toggling 3D twice would flatten terrain.

- Workflow: 20 various bugs related to rendering and lighting.

- Workflow: Blank project could crash Gaea.

- Workflow: Cancelling a connection drag would cause instability.

- Workflow: Clamp would be ignored in Post Process in rare situations.

- Workflow: Deleting a chokepoint would leave ghost connections.

- Workflow: Deleting multiple nodes could cause instability.

- Workflow: Duplicating a baked node should not mark the duplicate as baked.

- Workflow: Exposed parameters would be lost when modifying the graph.

- Workflow: Improved handling of node Preset files

- Workflow: Improved handling of nodes when they are updated while still being processed.

- Workflow: Improved handling of Underlay to prevent errors

- Workflow: Improved handling when user incorrectly connects or pins nodes.

- Workflow: Nodes would not invalidate in certain situations if non-primary port was connected.

- Workflow: Post Process could trigger incorrect rendering of Heavy nodes.

- Workflow: Post Process would be ignored when changing preview resolution.

- Workflow: SatMaps favorites would be repeated recursively in settings file.

- Workflow: Searching for nodes with an empty string would be handled incorrectly.

- Workflow: Some commands would not mark the file as having unsaved changes.

- Workflow: Some Post Process would not show Post Process icon on node.

- Workflow: Underlay would force processing of downstream nodes.

- Workflow: Vegetation will no longer auto-connect.

- Workspace could break with Floating viewport.

- ZeroBorders did not work as expected.

## Experimental

- We have made some optimizations and re-enabled 16k builds for testing. We do NOT recommend it for production use yet.

## Breaking Changes

- Node: BiasGain node retired.

- Node: Biome node retired.

- Node: Channels mode in Igneous has been retired.

- Node: Contrast node retired

- Node: Details node reworked

- Node: Draw node retired. Use Mask instead.

- Node: Dunes v3 reworked for better shapes

- Node: HSL node retired.

- Node: Mixer node retired.

- Node: Poisson noise removed across all nodes.

- Node: Rocks node has been retired.

- Node: RockSlide node has been retired.

- Node: Sand reworked to create better, realistic shapes.

- Node: SatMaps legacy color library removed.

- Node: Some older Primitives may not work exactly.

- Node: Subterrace node retired.

- Node: Volcano mode retired in Crater. Use Impact crater (see Quickstart).

- Viewport: 2D view autolevel removed

- Workflow: Force Low Resolution and Suspend Engine options moved to File Filter in the Open Dialog.
