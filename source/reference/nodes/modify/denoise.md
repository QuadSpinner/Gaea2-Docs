---
description: Denoise is a general purpose noise removal filter.
title: Denoise
uid: denoise
order: 10
---

# Denoise

Denoise is a general purpose noise removal filter. Denoise systematically cleans up random noise, spikes, and extremely sharp edges.

A single iteration is appropriate in most cases. For extremely noisy terrains that require several passes, it is recommended that the desired area be masked to protect the rest of the terrain from losing important details.

## When to Use It
Use Denoise when tiny unwanted chatter needs to be smoothed out before erosion, masking, or export.

## Visual Direction

![](/.data/assets/Denoise_VD.png)

## Properties
