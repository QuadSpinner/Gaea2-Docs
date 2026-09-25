---
title: Working with SatMaps
uid: working-with-satmaps
order: 02
description: Our library of over 1400 color maps, derived from real satellite data, helps you colorize your terrains quickly without sacrificing realism.
---

# Working with SatMaps

Our library of over 1400 color maps, derived from real satellite data, helps you colorize your terrains quickly without sacrificing realism.

![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/sat-map.webp)

This tech was originally pioneered by QuadSpinner for GeoGlyph in 2014, Gaea's latest iteration provides an extensive library covering all natural locations, giving you a vast playground for colorizing your terrains.



![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled.webp) ![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-02.webp)

This TextureMap node is attached to a SatMap node. The SatMap is adapted to the mask as described in @crafting-masks.

## Editing SatMaps

There a few ways to quickly tweak the SatMaps to better fit your needs.

### Map Bias

By moving the Bias slider, you can have the SatMap apply more towards the left (negative values) or right (positive values) of the selected Color Map.

| <div>![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-04.webp)</div> | <div>![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-05.webp)</div> | <div>![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-06.webp)</div> |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <div>![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/satmap-bias-none.webp)</div>            | <div>![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/satmap-bias-low.webp)</div>             | <div>![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/satmap-bias-high.webp)</div>            |

### Map Clipping

You can use the Clip slider to tell SatMaps to only use the selected segment of the entire color map.

![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-03.webp)

![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/satmap-clipping.webp)

Here, we clip out most of the left half of the color map, and you can see how that changes the influence of the color map on the terrain.

#### Roughness

The Roughness setting scatters the pixels of the color map to add the desired level of chaos and distortion.

![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-07.webp) ![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-08.webp) ![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-09.webp) ![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-10.webp) ![](/.data/using/using-gaea/colorizing-and-textures/working-with-satmaps/gaea-untitled-11.webp)

#### HSL

The final tweaks come from Hue/Saturation/Luminosity editing.

***

SatMaps are one of the crucial aspects of colorizing your terrains. You can elevate your SatMaps by combining them with a Mixer as explained in @layering-textures.

And finally, add @colorerosion to add a new level of realism to your texture maps.
