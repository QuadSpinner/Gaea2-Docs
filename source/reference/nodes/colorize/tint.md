---
description: Tint converts a heightmap or mask into a color texture by blending between two colors across the input range.
title: Tint
uid: tint
order: 11
---

# Tint

Tint converts a heightmap or mask into a color texture by blending between two colors across the input range. Dark values map toward the start color, bright values map toward the end color. This is essentially a two-color lookup table (CLUT) applied to a scalar map.

Tint is useful for quick colorization, visualization of masks, and generating simple gradients for export or downstream blending.

## When to Use It
Use Tint when you need converts a heightmap or mask into a color texture by blending between two colors across the input range.

## How it works

* Input values are interpreted as a gradient position from black to white.
* The output color is interpolated between the chosen start and end colors.
* Optional hue, saturation, and lightness shifts apply a global adjustment to the gradient colors.
* Optional processing can enhance or rebalance the input range before mapping, which changes how much of the gradient is used and where transitions land.

## Common uses

* Colorizing a mask to make it easier to read while authoring a graph.
* Creating quick biome gradients, altitude tints, or stylized ramp maps.
* Generating a simple "material ID" or region visualization for review.
* Producing a lightweight color overlay that can be mixed with more detailed textures later.

## Practical tips

* Normalize the input if you need predictable mapping. If the input only occupies a narrow range, most of the output will sit near one color unless you remap or use enhancement.
* Use reverse when you want to flip the interpretation without rewriting upstream logic, for example, when a mask is inverted relative to your intended tint.
* Autolevel is a good default for unknown inputs. It maximizes gradient usage quickly, but it also changes absolute meaning, so avoid it for calibrated masks.
* Equalize can reveal structure in subtle masks by redistributing values, but it may produce "busier" transitions than expected. Use it when detail visibility matters more than strict thresholds.
* Hue, saturation, and lightness are best treated as finishing controls. Set start/end first, then do small global shifts to tune the palette.

## Properties
