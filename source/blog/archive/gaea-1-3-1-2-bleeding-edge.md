---
title: Gaea 1.3.1.2 Bleeding Edge
uid: gaea-1-3-1-2-bleeding-edge
modified: "2025-07-22T21:38:45Z"
description: A minor but important update for the new Crumble and Arboreal nodes, along with a few bug fixes.
---

*A minor but important update for the new Crumble and Arboreal nodes, along with a few bug fixes.*

[Download Gaea 1.3.1.2](https://quadspinner.com/download)# Crumble

We refined the Crumble controls to give you even more artistic freedom.

![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_-Dev-_-1.3.1-_-crumble_wall.tor-_03-04-36-AM.jpg)A terrain leveraging the new Bias and Edge controls.#### Bias

Formerly called *Anisotropy*, the control has now been split into *Horizontal* and *Vertical*.

Horizontal bias shifts the erosion either towards the beginning of flow structures or towards the deposits at the end. Vertical bias shifts the erosion towards the higher altitude or lower altitudes.

While both may look simple, combining them in unique ways can give you a variety of different-looking terrains.

#### Edge

![](__GHOST_URL__/content/images/2022/05/crumble-edge.gif)While Crumble does "eat away" the edges, the control over the edges was limited. With the new *Edge* slider, you can reduce or expand the effect the erosion process has on sharp edges. You can combine this with the *Rock Hardness* slider for absolute control.

# Arboreal

Based on your feedback and internal testing, we have given Arboreal a partial makeover.

All 3 vegetation types had their algorithms tweaked for better results and a small speed boost in some cases. Expect a few more tweaks before the Production Version is released - specifically to the tree shapes.

*Shrubs* has received significant updates for placement and density. You will find it more predictable to control this time.

#### Health

![](__GHOST_URL__/content/images/2022/05/arboreal-health.gif)All density is now controlled through the singular *Health* slider.

#### Growth

You can switch between *Normal* and *Wild* growth. The latter grows trees more aggressively and will reduce the effect of inhibitors if the inhibition force is weak.

#### Flow Controls

![](__GHOST_URL__/content/images/2022/05/arboreal-flows.gif)*Flows* has been slightly optimized to respect flow structures better.

![](__GHOST_URL__/content/images/2022/05/arboreal-consolidate.gif)*Consolidate Flows* had a flaw in the last build where it would not affect most terrains. This has been fixed and you should expect it to work as shown in this preview.

![](__GHOST_URL__/content/images/2022/05/arboreal-bias.gif)*Simulation Bias* is a new addition to flow control. It can force the growth simulation towards higher or lower altitudes while respecting flow structures.

### MultiCombine for Arboreal

If you select multiple Arboreal nodes and press F8 (MultiCombine), all the Color Guide ports will be combined for easy SatMap or CLUTer use.

## Additional Changes

- Select Tiles (Tiled Builds) dialog improved. You can copy/paste selective tiles.

- Obsolete 'Visualization' port removed from color nodes.

- Arboreal node labels were overlapping in the Extended node style.

- Several bug fixes.
