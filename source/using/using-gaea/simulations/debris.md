---
title: Debris
uid: simulation-debris
order: 02
description: Simulate mechanical erosion with thousands (even millions) of individual, physical rocks and other geological debris using our physics-engine powered.
---

# Debris

Simulate mechanical erosion with thousands (even millions) of individual, physical rocks and other geological debris using our physics-engine powered Debris simulation.

![](/.data/using/using-gaea/simulations/debris/gaea-talus-node003-terrain.webp)

![](/.data/using/using-gaea/simulations/debris/gaea-talus-node003-terrain-02.webp)

You can keep them in the heightmap, or export a point-cloud for later use. You can even color each rock individually.

![](/.data/using/using-gaea/simulations/debris/debris.webp)

## Emission Source

The Debris simulation lets you control the emission source so you can place the debris as needed. In this image, the flow map of the terrain is provided as the Emitter Source, so the debris form only within those lanes and the take advantage of the inherent physics of the flows to create scree rivers.

Wear data from @erosion2 can often be a great source.

![](/.data/using/using-gaea/simulations/debris/gaea-cx1-terrain.webp)

## Friction and Restitution

The Friction and Restitution controls determine how debris behaves when it falls and slides across the terrain. While we often describe it as controlling how far debris can travel, in the underlying physics, it’s about **energy loss** during movement:

* **Restitution**: Energy lost during impacts – how far debris bounces or slides after hitting a surface.
* **Friction**: Energy lost while sliding – how easily debris moves across the terrain.

So, adjusting friction changes how steep or shallow debris deposits will appear in your terrain simulations. Higher friction = steeper, shorter slides. Lower friction = longer, shallower debris spreads.

:::info
For natural rock surfaces, the friction coefficient averages around **0.62**. This value directly relates to the **slope of repose** – the stable angle at which debris piles up. A friction coefficient of 0.62 corresponds to a **32° slope**, which is the typical angle of a talus (debris pile) formed under gravity.
:::

## Size, Shape, and Layering

You vary debris sizes and even layer multiple Debris simulations to mix and match settings and shapes. The Debris node provides Sharp and Round rock shapes.

![](/.data/using/using-gaea/simulations/debris/gaea-talus-node002-terrain-1.webp)

See the Debris examples that ship with Gaea to see how layering multiple simulations work.

![](/.data/using/using-gaea/simulations/debris/size-shape-and-layering.webp)

:::info
When using multiple Debris nodes, you can use @accumulators to combine all the output masks for colorization and other purposes.
:::

