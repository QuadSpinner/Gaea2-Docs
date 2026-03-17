---
title: Gaea 3.0 - Now in Development
uid: gaea-3-0-now-in-development
modified: "2025-11-25T16:01:14Z"
---

Gaea 3.0 is now in active development, and it’s a major leap forward in how artists build serious environments. This release is about scale, realism, and speed—built on a new foundation that expands what Gaea can do without compromising its procedural core.

[What happens to Gaea 2.0?How We Ship 2.0 While R&D Moves to 3.0: Parallel Development, Roadmap Delivery, and more.![](__GHOST_URL__/content/images/icon/Qs_Logo_Square_Pink-3.png)QuadSpinner BlogQuadSpinner Team![](__GHOST_URL__/content/images/thumbnail/gaea2to3-1.png)](__GHOST_URL__/what-happens-to-gaea-2-0/)Here are a few high points from the preview:

**World Space / Infinite Worlds**  
Terrains are no longer confined to a single square. Gaea 3 introduces true world-space workflows so you can build and explore massive, continuous regions—backed by the new TOR Engine 3.0.

![](__GHOST_URL__/content/images/2025/11/world0.webp)**Next-Gen Simulations**

![](__GHOST_URL__/content/images/2025/11/sand7.webp)- **Sand Simulation**: A high-performance aeolian solver designed specifically for terrain—everything from subtle surface drift to kilometer-scale dunes, driven by realistic wind physics.

- **Snow Simulation**: A new physics engine enabling advanced snow tools that expand on Gaea’s existing suite.

- **Rivers**: A balanced workflow for guiding a river shape while letting the solver generate natural meanders and river history.

- **Thermal Erosion (New)**: A next-gen thermal model delivering more natural patterns, sharper feature preservation, and improved sediment transport—alongside further TOR-powered improvements across erosions.

![](__GHOST_URL__/content/images/2025/11/road1.webp)![](__GHOST_URL__/content/images/2025/11/sand3.webp)## Terrain Building: More Tools, More Control

Gaea 3 expands the core terrain toolkit:

![](__GHOST_URL__/content/images/2025/11/rocksurface.webp)- **New Primitives** for shapes and scenarios we haven’t supported before.

- **New/Expanded Surfaces** for deeper control over non-sedimentary terrain, including natural effects like meltwater streams.

- **Vector Tools**: Long-awaited precision drawing for rivers, lakes, roads, envelopes, and more.

![](__GHOST_URL__/content/images/2025/11/gi2-1.webp)- **2.7D Displacement**: Break out of strict 2.5D while still exporting heightfield-agnostic data. Triplanar displacement opens new rendering detail and realism.

- **Draw Tools 3.0**: A full rewrite combining vector and brush workflows, plus reference overlays for guided editing.

![](__GHOST_URL__/content/images/2025/11/ecosys.webp)- **EcoSystem Tools**: Layered ecosystems, multiple dead zones, global interactions (water/sand/snow), and exports as masks, point clouds, or driver data.

- **Renderer 3.0**: A large-scale GI system purpose-built for 2.5D terrains, tuned for massive landscapes with high fidelity.

## Workflow Upgrades Across the Board

Gaea 3 is packed with quality-of-life improvements based on real user workflows:

![](__GHOST_URL__/content/images/2025/11/draw.png)- **Progressive Previews**: Instant low-res previews that refine progressively as you work.

![](__GHOST_URL__/content/images/2025/11/snapins.png)- **Snap-Ins**: A new extension system for deep, efficient node customization—direct access to internal data without extra nodes.

- **Improved Mask Visualization**: Overlay masks, switch outputs instantly, and inspect micro-values without editing the mask.

- **Mixer 3.0**: Color generators built into Mixer itself, reducing node clutter and cutting RAM use dramatically in high-res builds.

![](__GHOST_URL__/content/images/2025/11/mixer30.png)## UI & Pipeline: Built for Production

Gaea 3 modernizes the full experience:

- **Command Bar** for fast global actions and node creation.

- **Context-Sensitive UI** that follows selection inside the graph.

- **Improved Start Experience** with file search, history, templates, and recovery.

- **Multi-Screen Redesign** with HUD-style viewport workflows.

- **Full Localization** at launch: Chinese (Simplified), French, German, Japanese, Korean, Spanish—plus community-friendly open standards.

And for pipelines:

- **Native USD Support** with terrain data, masks, and roundtripping.

- **Gaea SDK (C#)** enabling custom nodes, tools, and extensions—with optional C++ integration for custom solvers.

- **Updated .terrain Format** with built-in versioning, multi-terrain projects, and recovery.

- **Build Stack**, **New Viewport**, **OCIO color grading**, **customizable/compact UI**, and major **plugin expansions** (3ds Max, Blender, Maya, Unity, plus upgraded Unreal/Houdini bridges).

![](__GHOST_URL__/content/images/2025/11/gi2.webp)This is only the initial reveal. There’s a lot more coming, and we’ll be sharing details as development progresses.

[What happens to Gaea 2.0?How We Ship 2.0 While R&D Moves to 3.0: Parallel Development, Roadmap Delivery, and more.![](__GHOST_URL__/content/images/icon/Qs_Logo_Square_Pink-2.png)QuadSpinner BlogQuadSpinner Team![](__GHOST_URL__/content/images/thumbnail/gaea2to3.png)](__GHOST_URL__/what-happens-to-gaea-2-0/)

Read the full Gaea 3.0 Preview, roadmap, and CyberWeek pre-order details on our site:

[www.quadspinner.com/gaea3](https://quadspinner.com/gaea3) 

⚠️****Pre-Order & Early Access (CyberWeek)!****   
  
Gaea 3.0 is expected to ship in ****mid-2026****, with Early Access builds available sooner for qualifying users. During CyberWeek, pre-orders include the best discounts and Early Access eligibility.  
  
[Find out more about CyberWeek 2025 here!](https://quadspinner.com/cyberweek/)
