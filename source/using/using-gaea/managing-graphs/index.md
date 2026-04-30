---
title: Managing Graphs
uid: managing-graphs
description: Organize, inspect, and simplify larger Gaea graphs with modifiers, portals, accumulators, data views, and scale tools.
---

# Managing Graphs

As a terrain becomes more detailed, the graph becomes part of the design problem. Good graph management makes it easier to understand what each branch is doing, reuse important outputs, find expensive nodes, and make changes without breaking downstream work.

This section focuses on practical habits and tools for keeping production graphs readable.

## Key Workflows

@using-modifiers shows how to apply common adjustments directly on a node without adding a chain of extra nodes. Modifiers are useful for height remaps, masks, warps, and quick local corrections.

@portals-introduction explains how portals and chokepoints reduce long-distance connections and create safer handoff points between graph stages.

@accumulators can collect masks from multiple simulation nodes, such as snow, water, vegetation, or debris, without building a dense web of Combine nodes.

@data-view gives you a structured way to inspect the graph, exports, variables, statistics, heavy nodes, orphan nodes, and other project-level information.

@navigating-complex-graphs covers navigation habits for larger projects, including how to move through dependencies, use landmarks, and keep related work grouped.

@visualizing-scale helps you judge whether the terrain reads correctly at the intended real-world scale.

## Practical Habits

* Name important nodes and keep major graph stages visually separated.
* Use portals for long connections and repeated references, especially across distant graph regions.
* Use chokepoints before branches that feed many downstream systems.
* Prefer modifiers for small local adjustments that do not need to become standalone graph logic.
* Use the Data View to find exports, heavy nodes, orphan nodes, and other maintenance targets.
* Bake stable sections when the graph becomes expensive to preview or build.
