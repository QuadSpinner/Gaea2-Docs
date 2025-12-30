---
icon: sidebar-flip
title: User Interface
uid: user-interface
---

# User Interface

# Primary Interface

Gaea’s primary interface is built around a node graph workflow: you assemble terrains by connecting nodes, preview results at any stage, and finalize outputs through the build system.

## Main Areas

### Graph Canvas

The center workspace where you create and connect nodes.

* **Nodes** represent terrain operations (shape, erosion, texturing, utilities).
* **Connections** define data flow (heightfields, masks, color, etc.).
* **Branching** lets you explore variants without duplicating entire graphs.

### Node Library

The catalog of available nodes, typically grouped by category.

* Add nodes by searching, browsing categories, or using quick-add actions.
* Common workflow: place a generator → shape/simulate → refine → output.

### Properties Panel

The node inspector where you edit parameters for the selected node.

* Parameters are typically organized into logical groups.
* Changing a value updates previews downstream (depending on preview/build settings).
* Many nodes expose advanced controls for quality vs speed tradeoffs.

### Viewport / Preview

A live preview of the selected node’s output.

* Switch between 2D and 3D views depending on context.
* Use visualization modes (height, slope, masks, color) to debug your graph.
* Navigation and display controls are available via the viewport toolbar.

### Build and Output

The finalization pipeline that produces exportable results.

* Configure resolution, range, tiling, file formats, and output targets.
* Builds can be run locally or via build acceleration features (when configured).
* Outputs are typically authored from dedicated output nodes or build settings.