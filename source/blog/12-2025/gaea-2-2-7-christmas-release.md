---
title: Gaea 2.2.7 - Christmas Release
uid: gaea-2-2-7-christmas-release
modified: "2025-12-24T14:52:16Z"
description: During our recent announcement about Gaea 3, we also mentioned how any major issues in 2.0 would be addressed before 3.0 and made available to Gaea 2.
---

During our recent announcement about Gaea 3, we also mentioned how any major issues in 2.0 would be addressed before 3.0 and made available to Gaea 2 users free of cost. Gaea 2.2.7 is a small version bump in numbers, but a MAJOR increment in Gaea's stability and usefulness. 

[Download Gaea 2.2.7.0](https://quadspinner.com/download)# What's new in 2.2.7?

The key updates in 2.2.7.0 are:

- Draw node reliability and data-safety improvements.

- Painting workflow refined (more predictable strokes, better feedback, fewer edge-case failures).

- Brush behavior and sizing consistency improvements.

- Draw node usability upgrades (more shortcuts and guidance UI).

- New artistic control options for shaping output.

- Draw window behavior and ergonomics improved.

- Better progress visibility during long operations (especially around loading/baking).

- Smoother UI responsiveness during builds/exports/loads via async handling.

- Cache/memory handling hardened to reduce stale data and session carryover issues.

- Viewport/graph interaction and visualization improvements that make working with Draw and previews more dependable.

## Rewriting the Draw node

The Draw node is a cornerstone node, but we know it was affected by several issues since Gaea 2.1.

![](__GHOST_URL__/content/images/2025/12/Painter_07-45-50-PM.png)We rewrote the majority of the Draw node to address stability issues from the root rather than try to patch existing code. During this rewrite we were able to not only fix some long-outstanding bugs, but also add some quality-of-life features. For example, Ctrl + Mousewheel changes the hardness of the brush, while Shift + Mousewheel changes the Height/Opacity. A new Mask mode toggle has been added to the Draw node window.

## Cache System Improvements

We have made many improvements to the cache system which is used by both Baking and Idle Cache (also known as Freezing). This will improve stability when using Baking, reduce memory consumption in several scenarios, and make the Freeze/Thaw process more predictable.

## Progress Dialog

We added a Progress dialog in Gaea 2.3, and found it so useful we decided to backport it to 2.2 so you can start using it immediately.

![](__GHOST_URL__/content/images/2025/12/Gaea_-_temp.terrain_09-06-02-PM.png)It shows up during long running processes, giving you direct information as opposed to frozen UI.

## Fixes and Improvements

A large portion of this build is made up of fixes for issues and bugs you reported over the last couple of months, along with new issues (potential or otherwise) identified by our internal beta group.

**Draw node (features, UX, fixes)**

- Draw node: more mousewheel shortcuts.

- Draw node: instructions popup and info button.

- Draw node: new Height clamp option.

- Drawing out of bounds now stops the stroke.

- Better mouse-down feedback while painting.

- Several internal fixes in Draw node.

- FIX: Draw node could erase data when the next node was baked.

- FIX: Draw cursor size would not update.

- FIX: Draw window will no longer maximize (still resizable).

**Caching, memory, and session stability**

- Internal engine caching system improvements.

- FIX: Cache is no longer destroyed upon loading; it is overwritten on Save and deleted if unchecked.

- FIX: Crash related to delayed or missing cache files during load.

- FIX: Baked data could remain in memory after changing projects.

- Aggressive memory cleanup when switching sessions.

**Progress & responsiveness**

- Progress dialog for long operations.

- Show Load bake progress.

- Show Frozen Cache Load/Thaw progress.

- Export/Build commands are now handled asynchronously so the UI stays responsive.

- File loading is now asynchronous.

- FIX: Clear progress text on Build Finished.

**Build, data, and graph reliability**

- FIX: Out-to-Out connection was not selected by default.

- FIX: Build button in Data View caused issues in rare circumstances.

- FIX: Internal value mismatch when transmitting terrains for visualization.

- FIX: Potential crash when loading a graph in certain situations.

- FIX: Setting Defaults did not work in some instances.

**Viewport, graph navigation, and UI fixes**

- FIX: Screenshots and other commands in the Viewport toolbar were not working.

- FIX: Navigating with comma menu was not switching graph if node was in another graph.

- FIX: Improved visualization for selected nodes when zoomed out.

- FIX: Nodes with secondary data display (Snow, Rivers, Trees, etc.) in 2D view could crash.

- FIX: Transform Gizmo was missing.

- FIX: File Path TextEditor sizing issue.

- Artifact Explorer: Improved data size visualization and added other quality-of-life improvements.

- Internal fixes that can slightly improve 2D viewport performance.

**Variables**

- Add option to suppress Orphan Variable message.

- New variable handling buttons added to the Vars tab.

- FIX: Variables re-ordering did not work.

- FIX: Edit Variables dialog did not select on focus.

**Nodes**

- BlobRemover: new Quantization option.

- Object node Z-Axis/Offset was broken.

- Transform3D node Z-Axis/Offset was broken.

- FIX: Bomber did not work.

**Logging**

- When a file fails to open, more detailed errors are logged.

**Security / dependencies**

- Libraries updated to address security issues GHSA-6hjr-v6g4-3fm8 and GHSA-wpp4-vqfq-v4hp.

[Download Gaea 2.2.7.0](https://quadspinner.com/download)
