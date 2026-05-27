---
title: Plan Scale, Height, and Resolution Before You Start
uid: plan-scale-height-resolution
order: 20
description: Set terrain width, height range, build resolution, and target output before scale problems spread through the graph.
---

# Plan Scale, Height, and Resolution Before You Start

Scale problems usually do not look like scale problems at first.

A terrain feels soft in engine, cliffs feel too vertical, erosion feels too small, or an 8K build still does not hold enough detail. The graph may be fine. The problem is often that terrain width, height range, and output resolution were never chosen as one production setup.

:::tip
Write down width, height range, target app, and final output type before adding detail nodes.
:::

## Fix the setup before fixing the graph

Start with the three numbers that define the terrain contract: width, height, and resolution. Width and height live in Terrain Definition. Build resolution lives in the resolution settings. Together, they decide the world-space density of the output.

Resolution does not mean quality by itself. A 4096 map across 4096 m gives about 1 m per sample. The same map across 8192 m gives about 2 m per sample. If the terrain feels soft, increasing erosion or surface detail may not help; the world-space density may be wrong.

## A reliable starting pass

Set the target first: gameplay terrain, cinematic vista, closeup patch, tiled world, mesh, or engine landscape. Pick the terrain width in meters. Pick a height range that fits the landscape type. Hills, coastal cliffs, alpine ranges, and badlands need different vertical contracts.

Work at a fast preview resolution while designing macro shape. Choose final build resolution from the output target, not from habit. Use @using-regions for closeups and @tiled-builds for large worlds instead of forcing the whole terrain to one expensive build.

## Stop and revise if

Stop if you only know the resolution, not the terrain width. Stop if the terrain looks correct only from one viewport camera. Stop if you are changing Terrain Definition after masks and erosion are finished. Stop if you cannot explain the terrain height in the receiving app.

Those are signs the graph is carrying a scale decision that should have been made earlier.

## Confirm it in Gaea

This guide should include:

* Terrain Definition showing width and height range
* build resolution settings for preview and final profiles
* a Region setup for closeup work
* a tiled build setup for a larger world
* the same terrain checked in the target app, when available

Before the graph gets complex, you should be able to say: "This is a 4 km terrain, with about 700 m of useful relief, designed at 2K or 4K, built through a gameplay profile, with a focused Region for closeup work."

That sentence gives the graph a physical target. It does not decide the art. It prevents scale from becoming a late-stage surprise.
