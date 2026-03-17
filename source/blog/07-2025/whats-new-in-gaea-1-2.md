---
title: "What's new in Gaea 1.2?"
uid: whats-new-in-gaea-1-2
modified: "2025-07-22T21:38:24Z"
---

Gaea 1.2 is the largest feature update to Gaea since the original release. It features an improved user interface, a new 2.5D heightfield renderer for the viewport, LookDev nodes, several new primitives, and major performance improvements.

This release has been in development for 6 months and features over 200 enhancements and improvements, 187 bug fixes and stability improvements, 17 new nodes, and several dozen quality of life improvements.

![](__GHOST_URL__/content/images/2020/05/streamlined-ui.jpg)Gaea 1.2 features a streamlined user interface, a dedicated 2.5D heightfield renderer, and 4 different node styles.

---

## New Nodes

Gaea 1.2 introduces 17 new nodes. Below is a brief rundown of the major nodes:

### Geological Primitives

Gaea's Primitives collection had a few prefabricated shapes such as Mountain and Dunes. With this release, we take primitives the next level with a dedicated subset called Geo Primitives.

![](__GHOST_URL__/content/images/2020/05/bandlands.jpg)![](__GHOST_URL__/content/images/2020/05/ridge.png)![](__GHOST_URL__/content/images/2020/05/sand.jpg)New Geological PrimitivesThe new primitives include: *Badlands*, *Ridge*, *Sand*, and *Worselands*. Further primitives will be added in Gaea 1.3. The *Mountain* node has been enhanced with new modes to give more realistic results from the start.

![](__GHOST_URL__/content/images/2020/05/minimal-erosion.jpg)One of the key aspects of the Geo Primitives is to provide shapes that require very little erosion. In this example above, a Ridge node is processed with very light **Erosion** that uses *Selective Processing* to only erode the steepest slopes. This speeds up erosion while preserving some of the sharper shapes of the original primitive.

### LookDev Nodes

Gaea 1.2 introduces a new set of nodes crafted to give you specific "looks" for your terrain with minimal effort.

![](__GHOST_URL__/content/images/2020/05/stacks2.jpg)The *Stacks* LookDev node converts a basic shape into a stratified desert environment with optional talus slopes. In this example, a simple *SlopeNoise* node is converted into a detailed desert terrain with the *Stacks* node with Talus Pass on.

![](__GHOST_URL__/content/images/2020/05/details-2.jpg)![](__GHOST_URL__/content/images/2020/05/shatter-1.jpg)![](__GHOST_URL__/content/images/2020/05/canyonlands-1.jpg)![](__GHOST_URL__/content/images/2020/05/shear.jpg)LookDev nodes include: *Anastomosis*, *Canyonizer*, *Carver* (formerly *Landform*), *Fold*, *Shatter*, and *Shear*.

*Anastomosis* is another deceptively simple node. It creates interconnected structure from water flow simulations and uses them to carve out the terrain. You can choose from small scale rock destruction to large river-like flows.

![](__GHOST_URL__/content/images/2020/05/anastomosis.jpg)In this example, you can see a *Worselands* primitive processed through *Anastomosis* for a large amount of additional details.

### Render Nodes

The new Render nodes give you the ability to transform your height and color data into finalized texture maps which can be used in either 2D or 3D capacity.

The *Cartography* node converts your terrain into an exquisitely detailed topographical map. You can control the color scheme, grid and topography contours, and even water bodies.

![](__GHOST_URL__/content/images/2020/05/cartography2-1.jpg)The same 2.5D Heightfield renderer that powers the Gaea viewport can be supercharged to create even higher quality renders that can be used directly as diffuse maps in DCC applications or even game engines.

The *Light* node gives you full control over the renderer to bake lighting into your color maps. You can control atmospheric properties, shadows, ambient occlusion, and even custom light colors.

![](__GHOST_URL__/content/images/2020/05/render.jpg)### The advantages of a dedicated 2.5D Renderer

What makes the 2.5D renderer different to the renders you can get in DCC software or game engines is that heightfields (2.5D data) is forced into 3D space which use different topology for rendering lighting information. With the 2.5D renderer, the lighting is crisper and smaller details are lit better than any normal map. All LODs of a terrain model can have detailed lighting and can even skip normal maps.

![](__GHOST_URL__/content/images/2020/05/QuadSpinner_Gaea_-Dev-_-1.2.0--2020-04-06--195.jpg)This is an added advantage for distant terrains that won't undergo dynamic lighting. While atmospheric perspective / fog is never baked into the lighting, so it can fit with your scene's actual atmospherics.

### Warp Nodes

Last but not least, the new Warp nodes augment what the Displace node can do while providing up to 40x faster performance. You can now choose between Warp, Displace, or Directional Warp.

---

## Streamlined UI + Productivity Tools

The entire user interface has been rebuilt while retaining the familiar feel of the original interface. The toolbox is now more easily manageable through the dedicated menu. 

You can leverage Gaea's learning and predictive services through the [new Expert Mode](https://docs.quadspinner.com/Guide/Graph/Toolbox.html). When Expert Mode is turned on, the section dividers are removed allowing you more screen space for nodes.

### Infinity Graph + Portals 2.0

The Infinity Graph allows you to split your terrain graph across multiple tabs. By separating concerns, you can clean up your graph while keeping a better eye on the logic.

![](__GHOST_URL__/content/images/2020/05/infinity-graph.png)Gaea 1.0's Portals have been split into two features: Portals and Chokepoints. A chokepoint is a node stub that is used exclusively for routing connections. While portals are no longer individual nodes - any node's output ports can be turned into Portals now giving you more flexibility.

You can move nodes between graphs, and even import/export individual graphs. Or you can lock graphs (or portions of them) using the new baking options.

For more information on how to use Portals and Chokepoints, see [the docs](https://docs.quadspinner.com/Guide/Graph/Portals.html).

### Baking and Caching

When a part of the graph is finalized and you do not anticipate any changes - even temporarily, you can bake that part of the graph to prevent it from being reprocessed when the file is loaded or the nodes are refreshed. 

If you select a high resolution for the baking, the baked preview will be stored at that resolution while the rest of the unbaked nodes are shown at the current preview resolution.

When you load a file with baked nodes, the automatic "linchpin detection" loads the baked cache for nodes that actively interact outside baked node groups. This can dramatically reduce the memory load for large graphs or high resolution previews.

The Build Swarm can use baked data. This prevents baked nodes to be recalculated during builds, cutting down on build time - especially if you find yourself building the same terrain repeatedly.

For more information on Baking and Caching, see [the docs](https://docs.quadspinner.com/Guide/Using%20Gaea/Cache.html).

---

## Higher Performance

Performance improvement is an integral part of each Gaea update. But with 1.2, we were able to push the engine farther than ever.

We concentrated on some of the slowest nodes such as Texture, Displace, Transform, etc. Over 60 nodes will perform faster - especially on recent and upcoming generation processors.

![](__GHOST_URL__/content/images/2020/05/speedup.png)This graph shows a snippet of the kind of performance improvements you can expect from Gaea 1.2.

---

## Revised Quickstarts

As Gaea has evolved, the existing quickstart collection started becoming less useful and incompatible with the new changes.

We have revised the entire quickstart collection with new, relevant example files that show better methods of achieving various terrains.

![](__GHOST_URL__/content/images/2020/05/quickstarts.jpg)All Gaea quickstarts - past and present - are available [on GitHub](https://github.com/QuadSpinner/Gaea-Quickstarts). We will keep adding to this collection frequently. 

![](__GHOST_URL__/content/images/2020/05/QuadSpinnerGaea-Quickstarts_All_Gaea_Quickstart_-2020-05-31--1295.png)You can star and watch this repo on Github to be notified of new releases. This way you can get the new quickstarts without waiting for the next Gaea release.

---

## The road to Gaea 1.3

The 1.2 series of builds will get a few minor releases with additional features that were not ready in time for 1.2.0's release.

But the next major milestone is Gaea 1.3 which will introduce three major features:

- Distributed/tiled builds

- Arboreal Nodes for creating vegetation simulations

- Dramatic reduction in processing time while designing terrains

![](__GHOST_URL__/content/images/2020/05/QuadSpinner_Gaea_-Dev-_-1.2.0-_-superhero-Unk010.t-2020-05-17--1014.png)
