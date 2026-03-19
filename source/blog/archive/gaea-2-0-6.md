---
title: Closing 2024 with Gaea 2.0.6
uid: gaea-2-0-6
modified: "2024-12-31T14:07:42Z"
description: This has been a very exciting year! Not only was Gaea 2.0 released mid-year, but since then we have pushed over 200 updates and fixes across 14 builds.
---

This has been a very exciting year! Not only was Gaea 2.0 released mid-year, but since then we have pushed over 200 updates and fixes across 14 builds.

Our focus currently is on Gaea 2.1 which will bring Build Regions, Mesh Tools, custom Math node, as well as a couple of surprises. There are dozens of smaller features and quality-of-life improvements as well.

We're taking our time with Gaea 2.1 and spending longer than anticipated in beta testing to ensure that the version we release is stable and fully production-ready. However, we wanted to do something special for our wonderful community as we close the year.

We spent some time before the holidays backporting several important quality-of-life features to Gaea 2.0 from the upcoming release, so you can start enjoying them immediately!

Let's talk about some of the big ones.

# Example Files

We're shipping 21 new examples that range from simple to advanced, showing various ways to use the new tools in Gaea 2.0. It also includes 2 full scenes and 2 custom color sources you can use with ColorErosion to explore how even low-res bitmaps can be used for additional colorization options.

![](__GHOST_URL__/content/images/2024/12/Rock-Surfaces.jpg)![](__GHOST_URL__/content/images/2024/12/Canyon-River-with-Sea.jpg)![](__GHOST_URL__/content/images/2024/12/ColorErosion-with-Bitmaps.jpg)![](__GHOST_URL__/content/images/2024/12/Complex-Scene---Debris.jpg)![](__GHOST_URL__/content/images/2024/12/Stylized-Mountain.jpg)![](__GHOST_URL__/content/images/2024/12/High-Altitude-Landscape.jpg)![](__GHOST_URL__/content/images/2024/12/Mixer-and-ColorErosion.jpg)![](__GHOST_URL__/content/images/2024/12/Debris-Advanced-2.jpg)![](__GHOST_URL__/content/images/2024/12/Supercolor.jpg)A sampling of the Example scenes shipping with Gaea 2.0.6

The example scenes are: *Alien Surface, Canyon River with Sea, Collapsed Gullies, ColorErosion with Bitmaps, Complex Scene - Debris, Debris Advanced, Debris, High Altitude Landscape, High Mountain Peak, Irregular Crater, Mesa, Mixer and ColorErosion, Rocky Riverbed, Rock Surfaces, Sandstone Butte, Sandstone Canyon, Seamless Terrain and Textures, Shattered Plains, Stylized Mountain, Supercolor, and Volcano*.

![](__GHOST_URL__/content/images/2024/12/rockyriverbed.jpg)# Draw Node Updated

We've brought back the Gaea 1.0 style of drawing in the Draw node. You can choose between live updates or stencil updates. 

![](__GHOST_URL__/content/images/2024/12/painter-stencil.gif)You can expect significant performance boost with the stencil mode.

# Progress Reporting

Sometimes it is hard to see where Gaea is working in a large graph. We have updated progress depiction in several areas.

In the Graph progress area, the currently processing node is highlighted as a yellow dot. The larger blue progress bar also shows indeterminate progress in the background (when a node takes a while to update its progress) to let you know the process is still alive.

![](__GHOST_URL__/content/images/2024/12/Gaea_-_collapsicon001.terrain_08-04-21-PM.gif)Nodes now show a "shine" as they finish a build, giving you a clear visual queue of progress along the graph.

![](__GHOST_URL__/content/images/2024/12/small-shine.gif)# Bookmarks

Navigation across a large graph can be a cumbersome task. While the Bookmark menu in the Graph toolbar was available, we saw that accessing it may be a bit awkward.

So now, when you bookmark nodes they are depicted by small color icons in the top right corner of the Graph area. You can click them to navigate to that node.

![](__GHOST_URL__/content/images/2024/12/image.png)Additionally, you can use the Lazy Menu (`F1`) to navigate to and add bookmarks.

![](__GHOST_URL__/content/images/2024/12/image-2.png)Adding and removing bookmarks is now even easier. You can simply toggle a bookmark from each node's context menu.

# Fast Navigation

Another aspect of navigation that we improved is inspired by the super-menus we see in coding tools. Press `Ctrl + T` to bring up a searchable list of all nodes in your current graph to navigate to them.

![](__GHOST_URL__/content/images/2024/12/image-3.png)# Custom Locations

We've added a new experimental option to list custom locations you choose to the File dialogs such as Open and Save. You can choose the locations in the Options window under the Experimental tab.

![](__GHOST_URL__/content/images/2024/12/image-4.png)You can also choose to show just these custom paths to reduce the clutter from the Windows folder tree - especially if you find yourself navigating between fixed project folders. Note: you can still go anywhere through the Breadcrumbs at the top or by typing a path.

![](__GHOST_URL__/content/images/2024/12/image-6.png)# Debris Support in Accumulators

Accumulators help reduce unnecessary connections and Combine nodes to gather masks from Snow and Water nodes. Now they also support Debris nodes.

![](__GHOST_URL__/content/images/2024/12/Accumulators1.png)![](__GHOST_URL__/content/images/2024/12/Accumulators2.png)# Fixes

This build also contains many fixes - some are critical and address very important issues such as CUDA failure on non-English OS installations, automation failure when using relative path files, incorrect handling of baked data in some rare situations, and a key problem with Windows 11 24H2 update that could suppress the viewport from appearing on some computers.

Please see the changelog/release notes below for a full list of fixes.

⚠️As always, Gaea maintains backward compatibility in minor updates such as this. However, for production work, we highly recommend backing up your .terrain files before opening them in a newer version just in case.# Up next...

We're going to take a short break to spend time with our families, and come back in January with new updates and the Release Candidate (RC) build of Gaea 2.1.

🎆 Happy new year, from all of us at QuadSpinner! 🎆

![](__GHOST_URL__/content/images/2024/12/rocks.jpg)# Release Notes

- 21 example files added!

- Faster draw mode in Draw node.

- Change position in Mountain node.

- Reduce Detail option in Mountain node.

- Accumulator now supports Debris Mask and Color Index.

- Projects and Gaea Documents folder paths can now be set separately. See note below.

- SuperColor output improved.

- Option to hide Graph tabs.

- Option to close Gaea UI when starting a build.

- Navigate to nodes through `Ctrl + T`.

- Progress reporting improved. It is now easier to know when nodes are being processed.

- Bookmark dots now available in Graph Tab area for easy access.

- Bookmark menu available via Lazy Menu.

- Bookmark command in Node context menu.

- Support for Custom Locations in File Dialogs.

- Option to show only Custom Locations in File Dialogs.

- Support for Floating Licenses (online).

- Hide items in Lazy Menu.

- Additional license management options in About dialog.

- Access License Management Portal from About dialog.

- Improved logging for Builds to isolate node faults.

- Improved crash log dump.

- Create default preset for any node type, and apply automatically on creation.

- Migrated Preset Storage from AppData to Documents folder.

- Added help link in Authorization dialog.

- Added option for Verbose Logging in Tools menu for tech support.

- FIX: Stones node created incorrect output.

- FIX: CUDA detection could crash in non-English Windows installations.

- FIX: Crash when creating a group with just a connection.

- FIX: Node context menu would not show checkmark for Bypass or Mark for Export.

- FIX: Duplicating a node could lead to a crash in specific situations.

- FIX: Changing viewport embedded state could freeze Gaea.

- FIX: Relative Paths could not be entered in File node.

- FIX: Relative Paths in File passed by variables would be ignored.

- FIX: FlowMapClassic would output scrambled data.

- FIX: Presets with Range values would not load.

- FIX: Rare crash when dragging a connection and double-clicking a port.

- FIX: Swap in Combine was working incorrectly.

- FIX: Accumulator nodes would incorrectly treat input as Mask and not logic input.

- FIX: Lighting was not loaded in saved files.

- FIX: Added preemptive fix for Windows 11 24H2 that could suppress the viewport.

- FIX: Family Member dropdown in Node Properties should only show current category.

- FIX: Mixer would not show simplified color for Ground layer.

- FIX: Slider labels would get truncated.

- FIX: Diagnostics window controls could get truncated in hi-DPI environments.

- FIX: Renaming a node would not rename the filename if marked for export.

- FIX: Equalize and Graphic EQ had the same shortcut key.

NOTE: Previous versions incorrectly stored `Presets` and `Screenshots` under `Documents\Gaea\Projects` instead of `Documents\Gaea\`. It has been corrected in this version. Gaea will try to migrate your presets automatically. However you may need to migrate your old files manually if some files are not moved successfully. We apologize for the inconvenience.
