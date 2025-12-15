---
title: Crafting Masks
---

# Crafting Masks

## What is Color Lookup/CLUT?

All color texture generation in Gaea relies on applying color ramps (gradients) through a black-and-white mask.

A simple example: the darkest part of the gradient maps to the lowest terrain elevations, while the brightest part maps to the highest. Intermediate grayscale values distribute the gradient proportionally. This is known as a CLUT or Color Look Up Table.

<figure><img src="../../.data/assets/CLUTer.png"></figure>

In this example, the gradient from a CLUTer node is mapped directly to the heightfield.

<figure><img src="../../.data/assets/mountain_autolevelled.png"></figure>

Now, let's a try more detailed, colorful gradient.

<figure><img src="../../.data/assets/Gaea_-_Untitled_04-39-07-AM.png"></figure>

You can see how it distributes across the terrain.

<figure><img src="../../.data/assets/Gaea_-_Untitled_04-38-54-AM.png"></figure>

Now, if you use the same CLUT map but feed it a FlowMap instead of the terrain height, the texture will follow the flow lines defined by the FlowMap, producing a very different result.

<figure><img src="../../.data/assets/Gaea_-_Untitled_04-39-18-AM.png"></figure>



### Colorization with Texture Nodes

Gaea provides nodes such as [TextureBase](Reference/nodes/derive/texturebase) and [Texturizer](Reference/nodes/derive/texturizer) provide complex colorization masks based on the terrain's inherent features.

<figure><img src="../../.data/assets/Gaea_-_Untitled_04-44-21-AM.png"></figure>

<figure><img src="../../.data/assets/Gaea_-_Untitled_04-47-53-AM.png"></figure>

Which can create more complex textures such as this:

<figure><img src="../../.data/assets/Gaea_-_Untitled_04-50-15-AM.png"></figure>



## Data Maps

Data Maps are specialized masks for selecting key terrain properties like slope, angle, and curvature, or for generating complex simulation-based data such as water flow and soil deposits. Additional maps like TextureBase produce pseudo-random texture masks for quick, easy color texturing.

Unlike the classic approach that combines basic data (slope, angle) with noise (e.g., Perlin) or depends heavily on erosion flow outputs—often requiring careful seed tuning—Data Maps introduce controlled randomness derived from systematic terrain analysis. This produces more natural, believable color maps.

### Aspect Maps

Aspect Data Maps mask out aspects of the terrain such as Height, Slope, Curvature, Angle, Peaks, etc.

<figure><img src="../../.data/assets/datamaps.webp"></figure>

### Generative Maps

Generate Data Maps run various algorithms on the terrain to generate information such as Flows, Soil, Rock Occlusion, etc.

<figure><img src="../../.data/assets/datamaps2.webp"></figure>

Data Maps can be combined together or with Texture nodes to create complex texture masks for colorization.

