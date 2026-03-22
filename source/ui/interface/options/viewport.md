---
title: Viewport
uid: options-viewport
order: 09
description: T.
---

# Viewport

The **Viewport** tab allows you to configure the visual display settings for Gaea’s 3D viewport. These options affect how terrains and masks are rendered during editing and previewing.

![](/.data/assets/Options_-_Viewport_09-57-08-PM.png)



## **Antialiasing**

* Options: **None, 2x, 4x, 8x**
* Improves the smoothness of edges in the viewport rendering.
* Higher values provide cleaner visuals but may reduce performance on lower-end GPUs.
* **Default: 4x**



## **Display Options**

* **Do not clear viewport when unselecting a node** _(Toggle)_
  * When enabled, the last viewed terrain remains visible even when no node is selected.
* **Show Grid** _(Toggle)_
  * Displays a reference grid in the viewport for spatial orientation.
* **Show Compass** _(Toggle)_
  * Adds a small compass widget indicating cardinal directions.
* **Show Base Marker** _(Toggle)_
  * Shows a marker for the origin/base of the terrain.
* **Conserve memory when displaying 4K terrains** _(Toggle)_
  * Optimizes memory usage for high-resolution terrains (4K+).
  * Can reduce visual fidelity slightly to save RAM and GPU memory.



## **Background**

* **Color Picker**
  * Sets the background color of the viewport.
  * Click the color box to select a custom color or press **X** to reset to default.



## **Mask Gradient**

* Defines the color scheme used when displaying mask outputs in the viewport.
* Options:
  * **Greyscale** – Black-to-white gradient. _(Default)_
  * **Red** – Red intensity map.
  * **Blue** – Blue intensity map.
  * **Spectrum** – Multi-color gradient for better visual separation of mask values.



## **Notes**

* For best performance, use **2x or 4x antialiasing** on mid-range GPUs.
* Enabling grid and compass can help with orientation but may add slight visual clutter.
* Conserving memory is recommended for projects with multiple high-resolution terrains or limited VRAM.


