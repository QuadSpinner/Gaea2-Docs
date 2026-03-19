---
title: Gaea 1.3.1.1 Bleeding Edge
uid: gaea-1-3-1-1-bleeding-edge
modified: "2025-07-22T21:38:44Z"
description: The latest Bleeding Edge build is out now!
---

The latest Bleeding Edge build is out now! Featuring Arboreal and Crumble nodes as well as some important performance boosts.

[Download Gaea 1.3.1.1](https://quadspinner.com/download/)## Arboreal Node

The Arboreal Node gives you the power of creating superficial forests and vegetation. These forests are part of the heightfield while being "detached" enough for various export scenarios.

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-slope-rocks.tor-_02-54-41-PM.jpg)Arboreal Nodes stacked to create desert shrubsBy keeping the vegetation part of the heightfield you can bake using normals, Light, etc. then discard the bumpy heightfield. Or you can export with the noise and create beautiful distant terrains. The overhead for such forests is tiny compared to populating 3D objects - and less wasteful!

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-arb.tor-_05-51-37-PM.jpg)For performance crucial scenarios like Skyboxes, baking the trees with the Light node gives you delicious soft shadows (even for 1px trees!). Then exporting it as an optimized mesh (without the trees) would give you a 4K equivalent terrain for hardly a thousand polygons.

## Growth Simulation

Originally meant to be a set of nodes, we have combined the Conifers, Broadleaf, and Shrub into a single, convenient node. Each of the three species has its own simulation system.

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_01-36-59-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_01-36-40-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_01-36-19-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_01-36-07-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-arbo-009-001.tor-_12-01-44-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-arbo-009-003.tor-_12-14-29-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-arbo-009-001.tor-_12-05-38-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-shrubs001.tor-_10-10-37-PM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-shrubs001.tor-_10-07-21-PM.jpg)The built-in Inhibitors let you control the growth in a realistic way.The most important aspect of the growth parameters is the flow type. Depending on the environment, your trees/shrubs would grow near flows (eg, arid environments) or avoid flows (eg, alpine mountains with snow).

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-arb.tor-_05-41-43-PM-1.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-arb.tor-_05-42-47-PM.jpg)![](__GHOST_URL__/content/images/2022/04/Google_Earth_Pro_04-25-23-PM.jpg)A mountain with vegetation inspired by a real mountain (a volcanic plug) near our office.The flow simulation can learn from existing Erosion, Snow, and other simulation nodes to automatically avoid areas where heavy flows, rivers, or snowdrifts occur.

![](__GHOST_URL__/content/images/2022/04/ezgif-3-401ccede79.gif)The Health slider lets you control the overall health of the ecosystem.Additionally, you can control the altitude and slope ranges, and add patchiness and randomness. When even that is not enough, you can simply add a custom inhibitor mask.

## Species and Maps

The Arboreal node is designed to be chained with other Arboreal nodes. Forests - especially artistically pleasing ones - are far too complex to be trusted to a single node/simulation. A simple way to do this is to use a high Patches and Chaos value, and a low density. Then duplicate the node, change the seed, and chain it to the previous one. Repeat this process multiple times.

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-flows.tor-_02-01-18-AM.jpg)With this technique, each node creates a unique cluster of trees, and you get an individual mask for the different clusters. This can be used to create color patches like in the image above, or color-coded maps which can be used to drive species population using scatter plugins in your favorite 3D app or game engine.

For example, with some minor automation, you could even animate the health maps and use them to drive the growth of different species at different rates.

# Crumble

Crumble runs a different kind of simulation that feeds off of existing crevices, erosive information, and other subtle details to collapse the terrain. Just as the name implies, the terrain starts crumbling from the edges.

![](__GHOST_URL__/content/images/2022/04/ezgif-1-ef2f2193f3.gif)A simple animation of the Duration property.Crumble works with just about any GeoPrimitive, Erosion, and LookDev node. While the controls may seem somewhat simplistic, they can create a wide range of effects depending on the combination.

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_03-45-30-PM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_03-45-42-PM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_03-45-48-PM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_03-45-57-PM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_03-46-20-PM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Slump.tor-_03-46-59-PM.jpg)Variations of the different settings.# Performance Improvements

While Gaea 1.3 brought major stability and performance improvements, some nodes and internal simulations faced regression issues which actually slowed down the performance. We're pleased to report that this has been fixed and more than a dozen nodes will see anywhere between 200% to 500% improvements. Dunes, Sand, Canyonizers, Stacks, DriftNoise, and many other popular nodes will see major improvement. Convector gets the highest boost with ~800%!

![](__GHOST_URL__/content/images/2022/04/Picture1-2.png)![](__GHOST_URL__/content/images/2022/04/Picture2-2.png)Nodes with the strongest improvements.# Changelog

### New

- Arboreal Node.

- Crumble Node.

- New UI for picking tiles for 1:1 previews.

### Enhanced

- Texture now has a new Fast mode.

- Repeat node now accepts an optional RGB texture just like Seamless.

- Overlay experience (right-click the underlay icon). Overlays are now available in tile selection and tile preview dialogs.

- 4K preview now automatically switches the quality to Ultra.

- Warning when using Normalized output in tiled builds.

- Animator now allows saving in JPG format.

- Erosion Studio can now be launched from the Gaea start screen. Shortcut in Start Menu is still available, and the recommended way.

- New Blank template for Slump.

- Major performance improvements.

### Fixed

- Dunes' direction sliders were swapped.

- Minor tweaks to Dunes' default settings.

- Synth would not accept RGB input from a file node.

- Tiled Builds would fail with any tile blending amount.

- Issues with Output node and .r32 format fixed.

- Do not allow changing resolution while processing.

- Nodes could not be renamed in rare situations.

- 2D Viewport would show incorrect port names for some nodes.

- Removed obsolete visualization ports for color nodes.

- Atmosphere visualization would not update between files.

- Several Animator bug fixes.

- New file would be contaminated if you close the Start dialog.

- Tooltip was obstructed when the port name was too long.

- Saving the current workspace would ignore UI scale.

- Several minor bug fixes and internal cleanup.
