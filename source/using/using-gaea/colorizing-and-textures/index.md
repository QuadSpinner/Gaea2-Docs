---
title: Colorizing and Textures
uid: colorizing-and-textures
description: Create color maps, masks, data maps, and layered textures for terrain look development and export.
---

# Colorizing and Textures

Colorizing in Gaea is built around masks. A terrain's height, slope, curvature, flow, soil, and other derived data can drive gradients, SatMaps, layered materials, and exported masks for downstream tools.

![](/.data/shared/using/datamaps.webp)

The goal is not only to make the viewport look finished. Good color and texture graphs also produce useful production data: albedo or diffuse maps, splat masks, erosion masks, vegetation masks, wetness masks, and other control maps that can be used in engines and DCC applications.

## Core Ideas

@crafting-masks explains how grayscale masks and color lookup tables shape most texture workflows. A mask can distribute a gradient by elevation, isolate steep slopes, follow erosion flow, or target specific terrain features.

@working-with-satmaps covers Gaea's satellite-derived color maps. SatMaps are useful for fast natural color variation, especially when combined with masks or refined through other color nodes.

@synthesizing-colors shows how @synth can convert an existing color source into an editable gradient. This is helpful when you want to extract a palette from a map and then art-direct it inside Gaea.

@layering-textures focuses on the @mixer node, which lets you stack multiple color layers and control them with terrain masks.

@simulation-colorerosion applies sediment-style logic to color maps so color can flow, collect, and weather in a way that follows the terrain.

## Useful Data Sources

* Aspect maps such as @height, @slope, @angle, @curvature, and @peaks help isolate structural terrain features.
* Generative maps such as @flowmap, @soil, @rockmap, @occlusion, @texturebase, and @texturizer create more natural variation than simple height or slope masks alone.
* Simulation outputs from erosion, snow, water, debris, or vegetation can become highly specific masks for color and material work.

## Practical Workflow

1. Start with large color zones, usually driven by height, slope, or a SatMap.
2. Add feature masks from erosion, soil, flow, rock, or occlusion data.
3. Layer secondary color variation with @mixer or additional CLUT-style nodes.
4. Keep important masks available for export if they will drive materials, scattering, or landscape layers in another application.
5. Check exported maps as data, not just as viewport color, especially for masks and splat maps.
