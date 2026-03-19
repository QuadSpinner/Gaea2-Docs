---
title: Node
uid: options-node
order: 05
description: T.
---

# Node

The **Node** tab manages the appearance and interaction behavior of nodes in the graph workspace, allowing customization of visual style, connection handling, and data display precision.

![](/.data/assets/Options_-_Node_09-56-59-PM.png)



## **Node Style**

* **Muted (Gaea 2)** – Uses a softer, less saturated color scheme for nodes, improving focus on the graph structure. _(Default)_
* **Vibrant (Gaea 1)** – Uses brighter, high-contrast colors from the earlier Gaea UI style.



## **Show Shine Effect on Node When Build Completes**

* **Enabled:** A visual shine animation plays on a node after it finishes building, providing a visual cue for completion.
* **Disabled:** No build-complete effect is shown.



## **Show Build Time on Node**

* **Enabled:** Displays the time taken to build each node directly on the node itself.
* **Disabled:** Build times are hidden.



## **Show Values with High Precision**

* **Enabled:** Displays node parameter values with extended decimal precision for finer adjustments.
* **Disabled:** Values are rounded for cleaner display.



## **Snap Connections to Available Ports**

* **Enabled:** Connection lines automatically snap to valid ports when dragging links between nodes. _(Recommended)_
* **Disabled:** Freeform connections without snapping, requiring precise placement.



## **Double-Click on Port to Connect**

* **Enabled:** Allows connecting two ports by double-clicking instead of dragging.
* **Disabled:** Only drag-and-drop connections are available.



## **Gaea 1 Style Mask Ports (Legacy Option)**

* **Enabled:** Adds explicit "Mask" ports to nodes, restoring Gaea 1 behavior.
* **Disabled (Recommended):** Modern Gaea workflow allows dropping a connection onto the node body and selecting **"Add as Mask"** instead of using dedicated ports.
* _(Legacy option retained for compatibility with old graphs; existing files are unaffected.)_



## **Notes**

* The **modern mask workflow** is the preferred approach, simplifying port layouts and improving graph readability.
* High precision display is useful for technical fine-tuning but may visually clutter the node UI.
* Visual effects such as **shine on build completion** can be disabled for performance on lower-end systems.


