---
title: HSL
uid: hsl
order: 04
description: The HSL node adjusts Hue, Saturation, and Lightness of a color input.
---

# HSL

The HSL node adjusts Hue, Saturation, and Lightness of a color input. It is used to shift color palettes, intensify or mute colors, and brighten or darken a texture without changing its structure.

HSL is most commonly used when preparing or tuning color textures for export, or when standardizing the look of multiple texture sources so they match.

## What it’s used for

* Recoloring an albedo/basecolor map to fit a different biome or art direction.
* Reducing saturation to make a texture less "gamey" or less noisy.
* Subtle lightness changes to match value ranges across a texture set.
* Quick variations from a single source texture without reauthoring.

## Practical tips

* Prefer small hue shifts. Large hue changes tend to produce unnatural results unless the source is already close to the target palette.
* If you are using a texture as data (masks, roughness, metalness, AO, normals), avoid HSL. Use scalar remapping tools instead and keep the map linear.
* When exporting to a renderer or engine, confirm the texture is treated as color (sRGB) if it is albedo/basecolor. If it is imported as linear by mistake, saturation and lightness will not match what you saw in Gaea.
* If you are trying to fix "too dark" or "washed out," check gamma/import settings first. HSL can correct appearance, but it won’t fix a broken color-management pipeline.


# Properties
