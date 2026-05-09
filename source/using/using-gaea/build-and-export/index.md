---
title: Build and Export
uid: build-and-export
description: Prepare final terrain builds, export heightfields, meshes, masks, tiles, and software-specific outputs.
---

# Build and Export

Build and Export is the final handoff stage of a Gaea project. This is where you decide what data leaves the graph, at what resolution, in which format, and how it should be organized for the target application or pipeline.

Gaea can export heightfields, masks, color maps, splat maps, meshes, point clouds, tiled worlds, and application-specific outputs. The right setup depends on what the receiving tool expects and how much precision the terrain needs.

## Main Export Paths

@exporting-nodes explains how to mark nodes for export, choose output ports, name files, and use dedicated output nodes such as @export, @mesher, @unreal, and @unity.

@mesh-exports covers mesh output through the @mesher node, including grid meshes, optimized triangle meshes, scale choices, texture coordinates, and normals.

@tiled-builds explains how to build large worlds as tiles or hybrid builds, including when to bake tile-unfriendly graph sections.

@using-regions shows how to build a specific part of a terrain at higher resolution without rebuilding the entire world.

For the interface that controls resolution, build scope, tiles, regions, profiles, output nodes, and scripts, see @build-options.

## Before You Build

* Confirm the final terrain size and height range in @build-options-terrain.
* Check that every required output is marked for export or connected to an output node.
* Choose formats based on the type of data: heightfields need more precision than many masks or preview textures.
* Treat masks and packed maps as data so downstream tools do not apply unwanted color correction.
* Bake stable or tile-unfriendly sections before a tiled or hybrid build when needed.
* Run a small test build before committing to a large final output.

## Target Applications

For guidance specific to software such as @blender or @unreal-import, see @software-specific-instructions.

For automation scenarios where output paths, variables, or repeated builds are controlled outside the UI, see @command-line-automation and @managing-input-and-output.
