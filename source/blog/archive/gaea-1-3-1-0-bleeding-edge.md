---
title: Gaea 1.3.1.0 Bleeding Edge
uid: gaea-1-3-1-0-bleeding-edge
modified: "2025-07-22T21:38:43Z"
description: The first Bleeding Edge build for the 1.3.1 version is now available, bringing expanded support for tiled builds, improved rivers, new LookDev nodes, and.
---

The first Bleeding Edge build for the 1.3.1 version is now available, bringing expanded support for tiled builds, improved rivers, new LookDev nodes, and several stability improvements.

As usual, keep in mind that this is a Bleeding Edge build and may be rough around the edges.

[Download Gaea 1.3.1.0 Bleeding Edge](https://quadspinner.com/download)Got feedback? Join us [on Discord](https://gaea.app/discord/).

# Tiled Builds update

We're working hard to make tiles fully production-ready in the final release of 1.3.1. Here are the first batch of updates.

## 4.3 trillion pixel terrains

We now support 8K tiles, and the maximum has been expanded to 256 x 256 tiles giving you **2 million x** **2 million** pixelsin a single terrain. Or in other words, a precision of **0.23cm/px**.

## Selective Builds

When you use the "Preserve Tile Cache" option, you can then re-run builds and rebuild only the selected tiles.

To do this, you must first have a full build with the "Preserve Tile Cache" option checked. You must build to the same path, not a new path or the cache will not function.

## Shared Edges

Tiles can now have shared/overlapping edge pixels. This will be even more useful in the next build when we will add mesh export for tiles.

Shared edges will apply to Split builds as well as Tiled builds.

## Tiled Input

The new **Tiled Input** node works like the **File** node but accepts tile sets.

# Node Updates

Several nodes that we could not get into Gaea 1.3.0 because of time constraints are now making their way into 1.3.1.

## Stratify

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-strata.tor-_09-48-10-AM.jpg)The new Lateral mode in the Stratify node creates natural, wide, and more interesting stratification compared to the previous mode (now renamed  "Localized (Classic)". There are several sub-styles and options.

## Outcrops

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-rok-1-StoneNode002_07-04-14-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-rok-1-StoneNode002_07-03-44-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-rok-1-StoneNode002_07-03-20-AM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-rok-1-StoneNode002_07-02-42-AM.jpg)The Outcrops LookDev node creates rocky outcrops on any surface. You can control coverage, breakage, and surface details. Several Outcrops nodes can be layered for complex results.

## SlopeBlur

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.0-_-sb-003.tor-_10-31-01-PM.jpg)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.0-_-sb-003.tor-_10-24-37-PM.jpg)SlopeBlur is a versatile, low-level node that adds directional blurring based on the slopes of a Guide terrain or mask. It is one of our deceptively simple nodes that can create a wide array of shapes. Don't let the "blur" in the name fool you into thinking this is only for smoothing. You can use this powerful node to alter shapes dramatically and create indentations, outcrops, and directional slope modifications.

## Synth

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-synth2.tor-_05-20-06-AM.png)Synth has received a long-overdue makeover. Previously, Synth would require you to load a file in the editor to extract a gradient. The file would not be preserved beyond the momentary session, and the overall workflow was clunky.

The new workflow removes the file selection completely and uses the second port for providing a color input. It can be File node with "Treat as RGB" turned on, or you can even give it a SatMap! This makes any SatMap editable.

## SatMaps

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-rokCanyon-002.tor-_03-46-57-AM.jpg)SatMaps gets nearly 200 new maps in the Rocky and Green libraries. The Rocky library maps are closely focused on a range of red, blonde, and dull brown rocks, while the Green library adds a more realistic variety of dull greens that still provide a good level of randomness.

## Slope

The Slope algorithm has been rewritten to provide better slope selection. The old algorithm would force normalization, giving somewhat inaccurate results. Falloff is now controlled in degrees as well.

By default, Slope now uses the new algorithm but you can switch back using the "Classic Style" checkbox. Old files will not be forced to use the new algorithm.

## Rivers

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Untitled.tor-_10-29-39-AM.jpg)The Rivers simulation has been improved to provide a slightly better, more realistic output.  Some minor bugs were also addressed regarding excessive downcutting in rare scenarios, some progress-related bugs, among others.

The water surface generated by the node has been improved as well, especially for mesh usage.

## Rocky

![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Untitled.tor-_10-32-19-AM.png)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Untitled.tor-_10-32-22-AM.png)![](__GHOST_URL__/content/images/2022/04/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Untitled.tor-_10-32-24-AM.png)The Rocky node gets a new setting "Relief" which controls how the edges and flat surface details are created. You can choose between Normal, Sharp, and Bulbous.

# Other Changes

- When using UNC paths ("\\network\path\file.tor") you will get an explicit warning since Gaea does not support UNC paths. You must use mount the share as a drive.

- File versioning inconsistencies have been fixed.

- ThermalShaper resolution independence has been improved.

- Output nodes will be forced to build to target folder when using Tiled Builds.

- Entering hex values in CLUTer and Synth could cause a crash.

- Seed values could not be pasted.

- MultiFractal Warp property should not be visible all the time.

- Mesher would not save XYZ Point Cloud.

- XYZ Point Cloud had extra linebreaks.

- Minor UI sizing and spacing improvements.

- Some internal stability fixes.

##
