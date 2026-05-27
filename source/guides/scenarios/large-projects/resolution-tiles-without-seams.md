---
title: Choose Resolution and Tiles Without Creating Seams
uid: resolution-tiles-without-seams
order: 21
description: Plan tiled Gaea builds so resolution, baking, normalization, tile naming, and output checks stay consistent.
---

# Choose Resolution and Tiles Without Creating Seams

Tile seams are often caused before the tile build runs.

The graph may be normalizing per tile, processing a tile-unfriendly branch locally, using the wrong tile orientation, or building without a baked world-space base. Increasing blend can hide some problems, but it cannot fix a different value range baked into every tile.

:::tip
Run a small neighboring-tile test before launching the full-world build.
:::

## What usually causes seams

If height jumps at tile borders, look for local range adjustment or normalization happening too late. If masks change from tile to tile, an Autolevel or Equalize-style operation may be acting per tile. If erosion creates a border artifact, the tile may not have enough context. If the target app places tiles incorrectly, check naming, suffix pattern, leading zeroes, organization, and Y orientation in @build-options-tiles.

## A safer tile workflow

Build the world-stage terrain first: macro shapes, major masks, and global range operations. Bake tile-unfriendly stages at the closest practical full-world resolution. Keep normalization and global value decisions before the tiled stage.

Choose tile size from the target engine or DCC, not just from what is convenient in Gaea. Set the tile naming and orientation deliberately. Then build a 2x2 or adjacent-tile test and inspect borders in the target app before launching the full build.

:::warning
Increasing blend will not fix every seam. If each tile has a different value range, the seam is already part of the data.
:::

For lower resolutions, you can also use Split Build, as the tiling process is made entierly after the build, however this can be very resource intensive depending on graph complexity.

## Confirm it in Gaea

This guide should include:

* the baked world-space base before the tiled stage
* Tiled Build settings, including tile size and naming
* a Required Baking check when relevant
* a 2x2 neighboring-tile test
* the same tiles placed in the target app or DCC

The tile setup is ready when adjacent tiles agree in height and mask values, the target app places them correctly, and the build comes from a stable world-space base.
