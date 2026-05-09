---
title: Gaea 1.3 Bleeding Edge
uid: gaea-1-3-bleeding-edge
modified: "2021-10-08T14:25:57Z"
description: It has been a long road, but we're very pleased to report that the Gaea 1.3 development is in its final stages.
---

It has been a long road, but we're very pleased to report that the Gaea 1.3 development is in its final stages. We will release a few Bleeding Edge builds between now and the final release (late October to early November).

The first of these builds is [**now available**](https://quadspinner.com/download/)!

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Rocks_and_Sand.tor-2021-09-06--6411.jpg)## Core focus: Stability

Gaea 1.3 will be our LTS (Long Term Support) build, which means it will be the officially recommended build for all production scenarios. There will be no breaking changes.

We spent the largest portion of time in 1.3 ensuring that all the top issues reported by you were addressed. We believe we have created the most stable build of Gaea yet, and that you will find it to be 20-30% more efficient when working with high resolution previews.

Under the hood, almost a third of the code has been rewritten to replace outdated or problematic portions. The results should be visible when you use Gaea.

# What's new?

This is not a complete list. See the Changelog on the download page for a full list of updates, modifications, and breaking changes.

## Highlights

- Major new nodes that redefine how you work in Gaea.

- Tiled/Distributed Builds* - one of the most requested features.

- 1:1 previews of tiles while designing.

- Seamless Tiling - tile any terrain.

- 20-40% faster processing in our heaviest nodes.

- 60-80% faster re-processing in heavy nodes such as Texture, Anastomosis, Light, etc.

- Gaea starts up in ~2 seconds on machines where it used to take ~10-15 seconds.

- Faster processing and responsiveness in 2K and 4K previews.

- Smaller memory footprint. Previews use 80% less memory.

- Next-Gen Erosion with Sediment Removal and Wizard node.

- Optimizations and UI improvements in Erosion Studio.

- Erosion Studio is now accessed via the Start Menu directly.

- Optimized Meshes with our new *Sophia* algorithm*.*

- Turntable Animator.

- Navigation Overhaul: full support for Wacom, XP-Pen, and other tablets.

- Navigation Overhaul: customizable navigation with Maya-style config.

- Navigation Overhaul: first person view is back!

- 20+ high impact bugs fixed.

- 100+ medium and low impact bugs fixed.

- 70+ new documented tutorial + quickstarts*.

> * - not available in the initial Bleeding Edge builds.

## New Nodes

We added 17 new nodes in Gaea 1.3.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Untitled.tor--2021-09-04--6390-1.jpg)**Rocky**, a primitive that creates shattered rock floors. It can be used to rocky details to other shapes as well.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Mountain.tor--2021-10-08--6605.png)**Wizard**, a completely new way of using our Erosion simulation through an easier interface with simple choices and sophisticated built-in recipes. It also supports multi-pass erosion.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Untitled.tor--2021-09-10--6475.jpg)**Seamless**, this node can transform any input terrain or color map into a tileable/repeating pattern. It requires very little effort.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Surface-001.tor--2021-07-20--5728.jpg)**Rugged**, a LookDev node that adds rocky details into any surface and turns it into a rugged formation. It can be used for superficial detailing, or intense modification. Just attach it to any shape - especially simple, feature-less ones - and see it in action.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Untitled.tor--2021-08-06--6036.jpg)**Canyon**, a simple, fast, and detailed canyon primitive. It creates a drainage based river canyon.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Utapau-v1-006.tor--2021-07-07--5618.jpg)**Craterfield**, originally meant to be separate node, but merged into the Crater node for an easier experience. It creates that classic lunar surface look. It is also flexible enough to create different, alien surfaces as well.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Rocky_Coast.tor--2021-08-26--6277.jpg)**Sea**, a water node that can let you add a water surface from edges without touching inland areas. It can also provide coastal erosion. This node replaces Coast.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Untitled.tor--2021-09-04--6386.jpg)**DriftNoise**, a unique primitive that can create overlapping "shelves". It is a versatile primitive noise that can be used in various scenarios from cliffs to crack production.

**Gabor**, another noise primitive that adds distinctive shapes compared to the common Perlin and Voronoi nodes. It can be used to create sand-like patterns, modulated hills, and more. Along with Perlin and Voronoi, we consider Gabor to be one of the foundation nodes of Gaea.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-Mountain.tor--2021-10-08--6606.jpg)**Slump**, a simple primitive that creates relative smooth hills with slumped (collapsed) areas. It is very useful for creating large landscapes.

![](__GHOST_URL__/content/images/2021/10/QuadSpinner_Gaea_-Dev-_-1.3.0-_-HeroMountain-v1-00-2021-07-24--5797.jpg)**Hill**, a cousin to the Mountain node, this primitive creates standalone hills with minor built-in erosion to mimic the needs of a smaller scale formation.

**Insert**, a utility node that lets you insert a sparse heightfield into another heightfield while preserving the target heightfield's relative heights. A common example is creating rocks on a flat (clipped) surface and then inserting them onto a terrain. Unlike Max or Add combines, Insert preserves the inserted heightfield and does not add artifacts or shapes from the underlying heightfield.

**Sunlight**, a Data Map that gives you the sunlight integral (sun light/shadow map) of any given period (up to 365 days). It can be used to drive snow melt, vegetation growth, and more. This node produces realistic results for any latitude in the world, so you can make it specific to any region your project relies on.

**Distance**, the successor to Apex, this distance transformation utility lets you take any large flat shapes and create mountain-like shapes from it. It is a low-level utility.

**SoftClip**, a low-level utility that lets you softly reduce the intensity of shapes above a specified threshold. It can be comparable to masking a shape with a Height node and then clamping that portion. Unlike such a custom set up, the SoftClip node gives better results at a tremendously faster speed and requires no setup.

**LoopBegin** and **LoopEnd**, two new logic nodes that let you repeat the processing of the nodes contained inside the chain of these two nodes.

**TiledInput**, consume tile sets of images or heightfields, and use either for 1:1 tile processing or combine into a single image. This node allows you to bring in tile sets of worlds created elsewhere and you can use Gaea's processing on it in either a normal build or a tiled one. Gaea is optimized for faster builds when your input and output tile sizes are the same. (Not available in the initial Bleeding Edge)

> We will be posting a video introduction to all the new features and nodes soon. A link will be placed here (and on our YouTube channel) in the near future.

## Node Improvements

**Sediment Removal.** A new feature in Erosion and Thermal nodes that allows you to remove sediments generated in the erosion simulation. This can be either uniformly controlled throughout the terrain, or with a mask. This is a very powerful new addition that should remove the need for masked secondary erosion in many scenarios.

**New features**. FractalTerraces, Mountain, Crater, Dunes, Sand, Hydro, Anastomosis, MultiFractal, Canyonizer, Occlusion, and Mask have new features.

![](__GHOST_URL__/content/images/2021/10/Marmoset_Toolbag_3.08____marmo-006.tbscene-2021-07-18--5702.jpg)**Mesher** now allows structure selection: Tris, Quads, or Optimizes Tris using the Sophia algorithm.

## Breaking Changes

There are some breaking changes that may affect older projects. Please check to make sure before upgrading your older files to 1.3. We highly recommend taking backups first.

Retired nodes will remain in old files, but we recommend replacing them as soon as possible. Future updates may not support them.

If you wish to retain the exact shape of an old node, we recommend saving it out to a high resolution R32/RAW file and using that via a File node instead.

- BiasGain, Contrast, and Invert nodes have been retired. Use Fx or the Post Process stack instead.

- HSL node retired. Use ColorFX instead.

- Mixer node retired. Use Combine instead.

- SubTerrace node retired.

- Biome node retired.

- Draw node retired. We recommend using Mask + Distance instead.

- Details node has been completely reworked. Not backward compatible.

- Sand node has been completely reworked. Not backward compatible.

- Dunes node has been completely reworked. Not backward compatible.

- Rocks and RockSlide have been retired.

- Crater node's Volcano mode has been retired. Use Impact Crater mode instead.

- Poisson noise removed from all noise related nodes.

- Channels mode in Igneous has been retired.

We removed some nodes like Biome and Subterrace that were subpar and did not evolve as expected. They will be back in new incarnations in the future.

Gaea 1.3 uses the newer Visual C++ 14.28 (VS16) runtime. The installer will attempt to install it automatically if it is not found.

## Major Issues Addressed

This is not a complete list, just the highlights of the bug fixes in Gaea 1.3.

- Overall stability improved across the entire application. (This will address almost 50% of bug reports we have received in the 1.2 cycle.)

- Erosion could freeze Gaea on multi-core CPUs (6 core or higher especially).

- Connecting certain nodes in a certain order would freeze or crash Gaea.

- EXR output was incorrect.

- TIFF output was incorrect in some situations.

- Island was broken.

- If an Underlay was downstream, it would force processing of all nodes.

- Modifying a node setting while it was processing would create instability.

- Nodes would process twice upon creation, often locking up the application.

- Memory leaks would lead to high RAM usage when using Gaea for a long time.

- Old memory was not properly cleaned up.

- High resolution workflow would be too slow even though processing was fast.

- Deleting multiple nodes would cause instability.

- Baked nodes would not work correctly in some situations.

- Mesher would incorrectly be labeled as "Off" in Build Manager leading to confusion.

- Rotating Synth would create a grayscale map.

- Nodes would not invalidate if a non-primary port was connected.

- Masks were ignored in Erosion in some scenarios.

- Clamp would be ignored in Post Process Stack when reloading a file.

- Favorites would be repeated in the user config file and bloat the file.

- Fixed bugs in optional OpenCL processing.

# Known Issues

Gaea 1.3 is not completely ready, as with all Bleeding Edge builds, so certain functionality may be disabled or unavailable. You may also experience some bugs. If you do please let us know.

- If a node becomes red (error state) and does not work, please try installing the latest VC++ runtime from https://aka.ms/vs/16/release/vc\_redist.x64.exe

- Tiled Builds and Split Builds are not available.

- TiledInput will not work. It will be functional in a subsequent build.

- Build Swarm is being reworked. Some minor build functionality such as Open Folder After Build, etc. may not work. In some situations, builds may fail. We're aware of these issues and are actively working on it.

- Houdini Bridge will NOT work with this build. However, this functionality will resume in the final Production Ready build.

- Raw view does not work with Light and Cartography.

- Not all quickstarts are documented.
