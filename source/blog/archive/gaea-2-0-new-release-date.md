---
title: Gaea 2.0 New Release Date
uid: gaea-2-0-new-release-date
modified: "2024-07-20T17:08:52Z"
description: We are moving the final release date from July 24 to July 31.
---

We are moving the final release date from **July 24** to **July 31**.

We would like to take a bit longer to make sure the first Production Ready build is as polished as it can be.

On July 24, we will release a new "RC" or Release Candidate build for Gaea 2.0. That should help you start new projects and prepare for the Gaea release build.

We will also be sending all customers their permanent license keys along with the final release build.

![](__GHOST_URL__/content/images/2024/07/Gaea_2.0_09-23-34-AM.jpg)Sandstone + Erosion 2## What's coming in 2.0.0.16 RC

- Hybrid Builds for tiled builds now available.

- Unlimited Tiled Build sizes.

![](__GHOST_URL__/content/images/2024/07/image-9.png)- Data View node tree improved. Filters now available.

![](__GHOST_URL__/content/images/2024/07/image-8.png)- New Lazy Menu (press `~`).

![](__GHOST_URL__/content/images/2024/07/image-7.png)- Trees node (formerly Arboreal in Gaea 1) added.

![](__GHOST_URL__/content/images/2024/07/image.png)- New Snow 2.0 node with directional melt and small scale snow.

- New Snow Dusting node.

![](__GHOST_URL__/content/images/2024/07/image-1.png)- Contours node added.

![](__GHOST_URL__/content/images/2024/07/image-10.png)- Cartography node added.

- New TileInput node.

- Mixer node UI heavily improved.

![](__GHOST_URL__/content/images/2024/07/image-2.png)- Visualize dead zones in Tree node.

![](__GHOST_URL__/content/images/2024/07/image-3.png)- BREAKING: Flow Map node is now Flow Map Classic and Flow Map by default is the new Flow Map 2.

![](__GHOST_URL__/content/images/2024/07/image-4.png)- BREAKING: Insert and Embed modes moved from Combine to Transpose node.

- Additional settings available in Options dialog.

- Viewport background color can now be changed.

- Skybox Aerial Perspective improved.

- Baking improvements.

- Improvements to the Painter node.

- New shortcuts: `F8` for Combine nodes, `Ctrl + F8` for Mixer.

- Color nodes automatically detect nearest Underlay, unless you specify one explicitly. This means no need to connect an additional Height node.

- File node adds supports for SVG, HDR, EPS, EMF, DDS, DNG, BMP, MIFF, RGB, and WEBP.

- File node reading made more robust.

- Dropping a file on the File node's filename property can change file.

- Dropped file will be automatically recognized as RGB as required.

- Double-clicking a node allows you to cycle through different node states.

- Added confirmation before converting Group to Graph Tab.

- Enable GPU-compute by default.

- Tint node defaults changed to be more versatile.

- Hillify node defaults improved.

- Data View toolbar shows Locked Preview and Underlay node.

- Improvements to the Synth node.

![](__GHOST_URL__/content/images/2024/07/image-5.png)- FIX: Preset search would work incorrectly in some situations.

- FIX: 2D Viewport would not work in some situations.

- FIX: SatMap Reverse mode was broken.

- FIX: Zooming out of the graph could break.

- FIX: SatMap could crash when switching libraries.

- Several dozen other bugs fixed.

## Roadmap

The Gaea 2.0 journey is only beginning. Here are some of the high level features we have planned for the near future.

### Gaea 2.1 (Q3 24)

- Terrain Regions (an extension of Hybrid Builds)

- Progressive Previews for realtime updates

- Additional nodes with GPU capability

- Additional automation tools

- 36 planned improvements to existing nodes

- Next-gen 3D Object Import

- In-viewport drawing/masking

### Gaea 2.2 (Q4 24)

- Macros/Compiled Components

- Remote/Network Build support

- Modifiers 2.0

- Cloud Build support

- God Mode

- 100+ planned improvements to existing tools

In between these larger milestones, we will publish updates and bug fixes regularly.
