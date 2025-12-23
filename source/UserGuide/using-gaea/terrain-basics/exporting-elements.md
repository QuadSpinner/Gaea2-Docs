---
icon: '5'
title: Exporting Elements
uid: exporting-elements
uid: exporting-elements
---

# Exporting Elements

<figure><img src="../../.data/assets/beyond-3.webp"></figure>

Gaea is primarily an asset generator designed for creating and exporting terrains to be used in other applications. It supports all major heightfield and mesh formats, ensuring compatibility with various platforms and rendering tools.

## Key Export Elements

Below is a list of common elements you may wish to export, and the nodes you can use to get those elements.

<figure><img src="../../.data/assets/beyond-2.webp"></figure>

### The Terrain

<div align="left"><figure><img src="../../.data/assets/r2.webp"></figure> <figure><img src="../../.data/assets/sophia-2_-_ACDSee_Photo_Studio_Home_2024_06-03-23-PM.webp"></figure></div>

This can either be a 32-bit displacement map or a high precision mesh. It is the most essential part of your project. Game engines would use 16-bit displacement maps.

### Color Map

<div align="left"><figure><img src="../../.data/assets/r4.webp"></figure></div>

If you have constructed a color map that will be the Diffuse/Albedo map for your terrain, then this will be exported as either an 8-bit or 16-bit bitmap.

### Masks

<div align="left"><figure><img src="../../.data/assets/Data_Flow.webp"></figure> <figure><img src="../../.data/assets/Data_RockMap.webp"></figure></div>

Various aspects of the terrains such as the slope (Slope Map) or flow of sediments (Flow Map) can be exported as bitmaps to control map blending, masking, and driving scatter instances. These are usually exported as 8-bit bitmaps.

### Point Clouds

<figure><img src="../../.data/assets/growth-simulation.webp"></figure>

For data usage such as Tree or Rock scattering, or similar functions, you can also export masks as XYZ point clouds.

### Normals and Splat

<div align="left"><figure><img src="../../.data/assets/r6.webp"></figure></div>

Gaea has dedicated nodes for Normal Map and Splat Map creation which are exported as 8-bit bitmaps. The Normal Map node can extract Detail Normals as well.

### Ambient Occlusion and Rock Occlusion

<div><figure><img src="../../.data/assets/Data_Occlusion.webp"></figure> <figure><img src="../../.data/assets/r11.webp"></figure></div>

Gaea can export both Ambient Occlusion (AO node) and "rock occlusion" (Occlusion node). Rock Occlusion with specific masking or using the Shaper adjustment can often be used for Reflectance in PBR scenarios.

### Rendered / Baked Lighting

<div align="left"><figure><img src="../../.data/assets/r1.webp"></figure></div>

The Light node lets you use high-precision rendering to create a fully realized render that you can use for direct application on your object.

In this example below, the mountain uses a baked lightmap on an unlit shader in Blender to dramatically reduce rendering time.

<figure><img src="../../.data/assets/blender.webp"></figure>



See [build-and-export](../build-and-export/) for more specifics.



