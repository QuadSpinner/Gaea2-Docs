---
title: Gaea 1.3.1.3 Bleeding Edge
uid: gaea-1-3-1-3-bleeding-edge
modified: "2025-07-22T21:38:46Z"
description: This penultimate release for the 1.3.1 series brings highly requested changes, including an overhauled undo system, new undo-related tooling.
---

*This penultimate release for the 1.3.1 series brings highly requested changes, including an overhauled undo system, new undo-related tooling, auto-recovery options, and more.*

[Download Gaea 1.3.1.3](https://quadspinner.com/download/)# Arboreal Node

![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_-Dev-_-1.3.1-_-sss-002.tor-_06-34-11-PM.jpg)Additional settings and minor shape improvements have been added to the Arboreal node.

![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_-Dev-_-1.3.1-_-t-slopes-and-veget_04-18-54-AM-1.jpg)![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_-Dev-_-1.3.1-_-t-slopes-and-veget_04-18-40-AM-1.jpg)Combining 3 different Arboreal nodes to create this complex desert ecosystem.You can now control both the *Slope* and *Altitude* falloff, as well as the influence of a Custom input. A new *Reduce Density* slider helps remove plants more effectively.

The "Green" Library in SatMaps has received several new additions to help colorize the Arboreal output.

*Arboreal is now considered feature complete. We don't anticipate making any major changes.*

> If you missed our recent livestream, check out the 2 hour tutorials on creating a fully procedural scene with an ecosystem [on our YouTube Channel](https://www.youtube.com/watch?v=2ebRW994_vQ). 📽️

# Undo, Recovery, and Experimentation

We have been keenly aware that many users were not satisfied with Gaea's undo/redo mechanism. Gaea 1.2 improved many things in this regard, but we heard you loud and clear that it needed to be improved further.

Gaea 1.3.1 adds a new set of tools to address these gaps.

![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_Bleeding_Edge_-1.3.1-_-Landscape._07-56-37-PM-2.png)Some of the following functionality has been available for some time in the Property editor menu, but now they're more readily accessible for day-to-day use.

- Undo/Redo has been rewritten to be very effective, and stable.

- Node changes are now grouped into a single undo operation.*

- State/Revert/Defaults button cluster added to the Property editor to help with experimentation.

- The State button gives you a private clipboard for each node.

- The Revert button gives you fast total undo for a batch of node operations.

- Autosaves are now more powerful and frequent.

- The new Save button dropdown shows recent autosaves for quick access.

To read more about all these features in detail, [see this detailed blog post](blog.quadspinner.com/new-undo-and-recovery-tools/ ).

😓 ** This functionality was partially to blame for the undo operations. We will bring back individual undos for each single property change in the near future. For now, we consider it an important compromise to make the rest of the undo system work properly.*

## GC Sensitivity

Gaea performs garbage collection to free up resources. The GC cycles have been made more aggressive when available RAM gets low. In some situations, you may find that GC is interrupting your normal interaction. You can use the GC Sensitivity slider to choose the aggressiveness.

*This is meant for advanced users. The default value should work well for almost everyone as it adapts to your system's specifications.*

### Changelog

- Arboreal node improved with new settings.

- Improved Undo system.

- New Autosave dropdown and improved autosave mechanism.

- New State/Revert/Defaults button cluster for the Property editor.

- New GC Sensitivity, and improved performance for 2K and 4K previews.

- Several dozen new SatMaps added to the Green library.

- Fixed a potentially critical crash in some instances for CLUTer.

- Fixed a few memory leaks in color nodes.

- File Input relative path was working incorrectly.

- Right-clicking the Orbit/Camera button will now let you load and save camera angles.

- Mesh Output was inconsistent between different modes. (Regression.)

- Dunes was not working correctly. Incorrect settings would be visible.

- Raw color view would use 32-bit HDR instead of human-perceptible LDR.

- Portals would not be removed when the corresponding node was deleted.

- Baked node color would be incorrect when zoomed out.

- Velocity Map angle was working incorrectly.

- Replace Node function now tries to keep connections more aggressively.

- Show progress when loading large caches.

- Canceling 4K preview should not force rebuild of lower resolution cache.

- Baking would throw an error.

- About dialog now provides improved methods for removing (temporary) or deauthorizing (permanent) licenses.

- Several memory management improvements, especially on machines with lower amounts of RAM.
