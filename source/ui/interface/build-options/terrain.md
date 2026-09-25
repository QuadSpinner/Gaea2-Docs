---
title: Terrain
uid: build-options-terrain
order: 06
description: Configure the Terrain Definition for a build, including terrain width, maximum height, and the real-scale values derived from them.
---

# Terrain

The **Terrain** tab contains the **Terrain Definition** panel, where you set the physical size of the terrain used by the build. These values define the real-world scale of the terrain and influence measurements, simulations, and export expectations across the project.

![](/.data/shared/common/build-options-2.webp)

## Terrain Definition

* **Width**: Sets the terrain width in meters.
* **Height**: Sets the maximum terrain height in meters.
* **Real Scale**: Displays the current meters-per-pixel value for the terrain at the active build resolution.
* **Height-Scale Ratio**: Displays the relationship between terrain height and terrain width.

## Why Terrain Definition matters

Terrain Definition is more than a display setting. It helps you:

* judge whether mountains, valleys, and erosion features are sized realistically;
* understand how much ground each pixel represents at the current build resolution; and
* keep exported terrains consistent when moving into other applications.

For a broader explanation of terrain scale, see [Scale and Resolution](@scale-and-resolution) and [Dimensions and Scale](@dimensions-and-scale).
