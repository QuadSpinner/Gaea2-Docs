---
description: Applies a multi-band equalizer-style filter to shape terrain features across different scales.
title: GraphicEQ
uid: graphiceq
order: 19
---

# GraphicEQ

<!-- AUTO-VIDEO-LINK:START -->
## Official Video

For a video breakdown of this node, see [the official GraphicEQ video](/videos/official/nodes/yt-graphiceq.html).
<!-- AUTO-VIDEO-LINK:END -->

Applies a multi-band equalizer-style filter to shape terrain features across different scales.

* **Band 1-7**\
  Seven adjustable frequency bands. Each band controls the gain for a specific range of detail scales:
  * Lower bands affect large-scale, broad features.
  * Higher bands target fine details.
  * Positive values boost features at that scale; negative values suppress them.

Use the bands together to fine-tune the terrain's overall frequency profile and achieve precise control over its shape and detail distribution.

## When to Use It
Use GraphicEQ when you want to emphasize or suppress terrain features at specific scales instead of applying one broad filter.

## Properties
