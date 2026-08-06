---
title: Build Options
uid: build-options
order: 01
description: Use Build Options to control resolution, terrain scale, exports, regions, profiles, scripts, and build commands in Gaea.
---

# Build Options

The **Build Options** window gathers the settings that define how Gaea builds and exports a terrain. Use the tabs on the left to choose build scope, output destinations, tiled build behavior, export nodes, Terrain Definition, regions, profiles, scripts, and execution commands.

![](/.data/ui/interface/build-options/index/build-options-overview.webp)

| Tab | Purpose |
|---|---|
| [Resolution](@build-options-resolution) | Choose the build scope, resolution, subdivision mode, and output layout. |
| [Build](@build-options-build) | Set the build destination, filename behavior, and overwrite handling. |
| [Tiles](@build-options-tiles) | Configure tile naming, organization, overlap, and axis handling. |
| [Nodes](@build-options-nodes) | Select exportable ports and per-node output settings. |
| [Script](@build-options-script) | Run post-build commands automatically after a build finishes. |
| [Terrain](@build-options-terrain) | Define terrain width, height, and real-scale values in the Terrain Definition panel. |
| [Regions](@build-options-regions) | Create focused high-detail regions inside a larger terrain. |
| [Profiles](@build-options-profiles) | Save and recall complete sets of build settings. |
| [Commands](@build-options-commands) | Start the build or copy the generated command line. |

## How the tabs work together

Two tabs usually define the foundation of a build:

* **Resolution** determines how many pixels are used to represent the build.
* **Terrain** defines the physical size of the world through the **Terrain Definition** settings.

Together, those settings determine the terrain's meters-per-pixel value and help keep erosion, scale judgments, and downstream exports grounded in a realistic size.

For background on scale, see [Scale and Resolution](@scale-and-resolution) and [Dimensions and Scale](@dimensions-and-scale).
