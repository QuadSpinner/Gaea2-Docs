---
title: TOR Processor
uid: tor-processor
order: 02
description: Reference documentation for TOR Processor in the Gaea2Houdini workflow and integration pipeline.
---

# TOR Processor

The TOR Processor is the Houdini/Gaea processing layer used by Gaea2Houdini to run prepared `.terrain` files and return the terrain outputs Houdini needs. It keeps the contract file based: Gaea owns the procedural graph, while Houdini drives exposed inputs, cooks the graph, and consumes the generated outputs.

For the Houdini node interface, see @gaea-nodes. For artist-facing setup, see @gaea2houdini and @preparing-a-terrain-file.

## When to Use It

Use the TOR Processor workflow when you want Houdini to evaluate a Gaea terrain process without rebuilding the terrain manually in Houdini. Typical uses include:

* Running a reusable Gaea terrain graph from a Houdini SOP network.
* Sending input terrain or mask files into a prepared `.terrain` file.
* Reading Gaea height, mask, and color outputs back into Houdini.
* Using Houdini procedural networks or PDG-style workflows around a Gaea graph.

## Terrain File Requirements

The `.terrain` file should be prepared before it is used from Houdini. Keep the graph contract explicit:

* Bind incoming file paths or parameter values to variables that Houdini can drive.
* Use Export nodes for each output Houdini needs to read.
* Keep output names predictable.
* Test the graph once in Gaea before wiring it into Houdini.

See @preparing-a-terrain-file for the recommended `In > Process > Out` setup.

## Outputs

The processor expects the Gaea graph to write explicit terrain outputs that Houdini can load. Heightfields, masks, and color maps should be exported in formats that preserve the required precision.

For heightfields, prefer high precision formats such as Gaea RAW, EXR, TIFF, or another format expected by the Houdini side of the workflow. For masks and color outputs, choose the format based on how the data will be used downstream.

## Caching and Rebuilds

Gaea2Houdini caches generated results so unchanged terrain processes do not need to be recomputed every time the Houdini network cooks. Rebuild when the `.terrain` file, exposed parameters, input files, or output contract changes.

When using loops, automation, or PDG-style processing, make sure each variation has a distinct cache identity or output location so one run does not overwrite another.

## Related Topics

* @gaea-nodes for the Houdini SOP nodes.
* @gaea2houdini for the bridge workflow.
* @preparing-a-terrain-file for preparing `.terrain` files.
* @managing-input-and-output for bridge-style input and output contracts.
