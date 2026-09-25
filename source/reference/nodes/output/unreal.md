---
description: Exports terrain data in Unreal-friendly resolutions, formats, and naming conventions.
title: Unreal
uid: unreal
order: 12
---

# Unreal

## When to Use It
Use Unreal when you need terrain data in Unreal-friendly resolutions, formats, and naming conventions.

:::info
The Unreal node autolevels the 32-bit height data before export so the full height range is used when it is converted to Unreal's 16-bit landscape format.
This helps avoid wasting precision on unused headroom and gives Unreal a cleaner heightmap to import.
This may make the viewport look different, but this is normal behaviour if you're not already using the full range.
:::

## Properties
