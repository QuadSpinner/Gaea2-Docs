---
title: Gaea 1.2.1
uid: gaea-1-2-1
modified: "2020-11-27T11:33:58Z"
description: We are pleased to announce the Production Ready release of Gaea 1.2.1.2 which was in Bleeding Edge for a while.
---

We are pleased to announce the **Production Ready** release of **Gaea 1.2.1.2** which was in Bleeding Edge for a while.

This build took a bit longer than normal to go from Bleeding Edge to Production Ready as our team was working a bit slower because of the ongoing pandemic, and making some extra time for our families. However, we are quite happy with the amount of features and improvements we were able to pack into this update.

Let's look at some of the highlights.

# Node Updates

## Fx

The new Fx node is pretty much the same as Post Process Stack, but in node form. By studying how you used Adjustment nodes, we found that it would often be a trial and error process where the node would need to be replaced with another. Sometimes the node would need to be chained with another.

![](__GHOST_URL__/content/images/2020/11/fx-node.jpg)The Fx node makes that process easier by combining all the common adjustments inside a single node and allowing you to toggle them on and off. Additionally, it has its own Post Process Stack so you can apply further adjustments.

## FractalTerraces: Advanced Mode

FractalTerraces' Advanced mode opens up completely new possibilities for creating stratified landscapes. You now have detailed control over uniformity, shape production, and even coloration. Use the secondary output (only available in Advanced mode) with a SatMaps, CLUTer, or other color node to clamp color values within terrace layers.

![](__GHOST_URL__/content/images/2020/11/fractalterrace2.jpg)## Constant: Noise Mode

We also learned from you that often you would just need a plain noise heightfield to work into other elements. For this, a constant node would need to be hooked up to a Noise node. By adding the Noise node's functionality directly in the Constant node, you will now find it easier to get plain noise.

![](__GHOST_URL__/content/images/2020/11/constant-noise.jpg)## ZeroBorders: Precise Mode

You wanted pixel-perfect precision in ZeroBorders, and now you have it! The new Precise mode lets you specify the border in pixels. This can very useful when making 

---

# User Experience Updates

## Collapse Nodes

Sometimes you may not want some obvious nodes taking up precious real estate in the graph. Now you can collapse a node into small square by pressing **F11**. Press again to expand it back to normal size.

![](__GHOST_URL__/content/images/2020/11/collapse-nodes.jpg)## Node Menus

Press **C** to show the Connect Menu for the selected node. From here you can connect any port to an existing portal, or convert that port into a portal itself.

![](__GHOST_URL__/content/images/2020/11/connect-menu.jpg)If you press **Ctrl** while converting a port to a portal, instead of directly turning that port into a portal, Gaea will add a **Chokepoint** node and convert that into a portal. This mimics the old Portal style from Gaea 1.0.

Press **X** to show the Disconnect menu where you can disconnect ports.

![](__GHOST_URL__/content/images/2020/11/disconnect-menu.jpg)Press **,** (comma) to bring up the Quick Navigation menu which will show you the other nodes that are connected to the selected node. Clicking a listed node will take you to that node, even if it is in another graph tab.

![](__GHOST_URL__/content/images/2020/11/navigate-menu.jpg)## Replace Node

You can right-click any node and select Replace node to bring up the node creation menu. You can type the name of the node to replace it with. 

Gaea will replace the node and attempt to reroute connections to the best available ports. If ports between the old and new nodes are incompatible, the existing connections will be routed to a **Chokepoint** instead. This will prevent you from losing your connection chain.

## Bug fixes

We fixed a few dozen smaller bugs and inconveniences you reported over the last couple of builds, including the Bleeding Edge for 1.2.1 itself. Majority of these were related to the graph itself, so you will have a better working experience.

![](__GHOST_URL__/content/images/2020/11/GaeaLogoV3_Light.png)

> See the entire change log and download the update from <https://quadspinner.com/download>
