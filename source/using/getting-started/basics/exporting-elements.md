---
icon: 5
title: Exporting Elements
uid: exporting-elements
order: 05
description: Gaea is primarily an asset generator designed for creating and exporting terrains to be used in other applications.
---

# Exporting Elements

![](/.data/using/getting-started/basics/exporting-elements/beyond-3.webp)

Gaea is primarily an asset generator designed for creating and exporting terrains to be used in other applications. It supports all major heightfield and mesh formats, ensuring compatibility with various platforms and rendering tools.

## Key Export Elements

Below is a list of common elements you may wish to export, and the nodes you can use to get those elements.

![](/.data/using/getting-started/basics/exporting-elements/beyond-2.webp)

### The Terrain

<div align="left">![](/.data/using/getting-started/basics/exporting-elements/r2.webp) ![](/.data/using/getting-started/basics/exporting-elements/sophia-2-acdsee-photo-studio-home-2024.webp)</div>

This can either be a 32-bit displacement map or a high precision mesh. It is the most essential part of your project. Game engines would use 16-bit displacement maps.

### Color Map

<div align="left">![](/.data/using/getting-started/basics/exporting-elements/r4.webp)</div>

If you have constructed a color map that will be the Diffuse/Albedo map for your terrain, then this will be exported as either an 8-bit or 16-bit bitmap.

### Masks

<div align="left">![](/.data/using/getting-started/basics/exporting-elements/data-flow.webp) ![](/.data/using/getting-started/basics/exporting-elements/data-rock-map.webp)</div>

Various aspects of the terrains such as the slope (Slope Map) or flow of sediments (Flow Map) can be exported as bitmaps to control map blending, masking, and driving scatter instances. These are usually exported as 8-bit bitmaps.

### Point Clouds

![](/.data/using/getting-started/basics/exporting-elements/growth-simulation.webp)

For data usage such as Tree or Rock scattering, or similar functions, you can also export masks as XYZ point clouds.

### Normals and Splat

<div align="left">![](/.data/using/getting-started/basics/exporting-elements/r6.webp)</div>

Gaea has dedicated nodes for Normal Map and Splat Map creation which are exported as 8-bit bitmaps. The Normal Map node can extract Detail Normals as well.

### Ambient Occlusion and Rock Occlusion

<div>![](/.data/using/getting-started/basics/exporting-elements/data-occlusion.webp) ![](/.data/using/getting-started/basics/exporting-elements/r11.webp)</div>

Gaea can export both Ambient Occlusion (AO node) and "rock occlusion" (Occlusion node). Rock Occlusion with specific masking or using the Shaper adjustment can often be used for Reflectance in PBR scenarios.

### Rendered / Baked Lighting

<div align="left">![](/.data/using/getting-started/basics/exporting-elements/r1.webp)</div>

The Light node lets you use high-precision rendering to create a fully realized render that you can use for direct application on your object.

In this example below, the mountain uses a baked lightmap on an unlit shader in Blender to dramatically reduce rendering time.

![](/.data/using/getting-started/basics/exporting-elements/blender.webp)



See @build-and-export for more specifics.



