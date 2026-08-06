---
description: Transpose takes the character of the Reference terrain and applies to to the Input terrain.
title: Transpose
uid: transpose
order: 37
---

# Transpose

<!-- AUTO-VIDEO-LINK:START -->
## Official Video

For a video breakdown of this node, see [the official Transpose video](/videos/official/nodes/yt-transpose.html).
<!-- AUTO-VIDEO-LINK:END -->

## Example Files

Download the tutorial file from the Gaea community thread: [Transpose node tutorial file](https://talk.gaea.app/t/transpose-node-tutorial-file/579).

## When to Use It
Use Transpose when you need takes the character of the Reference terrain and applies to to the Input terrain.

## Transpose

Transpose takes the character of the Reference terrain and applies to to the Input terrain. It maintains the original volume and shape of the Input terrain so you do not lose your silhouette, but still adds the details of the Reference terrain.

In practical scenarios, it is often difficult to create the kind of surface on a specific terrain. So you can create a basic terrain with low or no details, and then create flat (or undulating) surface separately, then Transpose the details onto your basic terrain.

This also works quite well with imported terrains or even meshes.

By combining Mask and Draw, you can [paint your effect](https://www.youtube.com/watch?v=mavy7rFpY9s) area.

## Embed

## Insert

Insert is a utility node that lets you insert a sparse heightfield into another heightfield while preserving the target heightfield's relative heights. A common example is creating rocks on a flat (clipped) surface and then inserting them onto a terrain. Unlike Max or Add combines, Insert preserves the inserted heightfield and does not add artifacts or shapes from the underlying heightfield.

## Visual Direction

![](/.data/reference/nodes/modify/transpose/visual-direction.webp)

## Properties
