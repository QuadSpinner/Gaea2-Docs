---
title: Importing Terrains
uid: importing-terrains-introduction
description: Bring external heightfields, tiled datasets, color maps, and meshes into Gaea for enhancement or integration.
---

# Importing Terrains

Imported terrain data can be used as a starting point, a reference layer, a mask source, or a production handoff between Gaea and another tool. Once the data is in the graph, it behaves like any other Gaea terrain and can be eroded, reshaped, colorized, baked, or exported.

The most common import path is the @file node, which loads supported heightfield and image formats. Use it for DEMs, RAW heightmaps, EXR or TIFF displacement maps, masks, and color textures.

## Choosing an Import Method

Use @file when you have a single heightmap, mask, or color image. This is the standard choice for bringing terrain data into a graph.

Use @tileinput when you are working with an existing tile set and need the imported data to match a tiled build workflow.

Use @object when you want to bring mesh data into Gaea and rasterize it into a heightfield. For mesh-specific workflow notes, see @importing-meshes.

## Scale and Precision

Imported data often arrives with different assumptions about height range, units, bit depth, and clamping. Before you process it heavily, check whether the terrain is using the vertical range you expect.

* Use high precision formats such as EXR, TIFF, R32, or Gaea RAW when you need to preserve height detail.
* Avoid clamping data too early if the source contains negative elevations, bathymetry, or values outside a normalized 0 to 1 range.
* Use @match-height when you need to fit incoming DEM or heightmap data into a known maximum altitude.
* Review @scale-and-resolution when the imported terrain must match a real-world size or a downstream engine scale.

## After Import

Imported terrain usually benefits from a small cleanup stage before it becomes part of the main graph. Autolevel, Match, Clamp, Blur, Denoise, or erosion can help bring the source into a stable working range.

If the imported data is a fixed production input, consider baking it with @baking-nodes once the setup is correct. This keeps later graph work responsive and reduces the chance of accidentally changing the imported baseline.

For supported file types and precision notes, see @file-formats.
