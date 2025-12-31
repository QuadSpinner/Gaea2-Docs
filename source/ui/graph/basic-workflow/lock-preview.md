---
title: Lock Preview
uid: lock-preview
order: 02
icon: anchor-lock
---

# Lock Preview

Locking preview to a node shows only the that node in the viewport. When a node preview is locked, changes made to the other nodes will force updates to all nodes between that node and the locked node. This allows you to see the end result of a change.

To pin a node, right-click it and select `Lock Preview`. You can also select the node and press `F`. Now when you edit any other node before the locked node, the changes will propagate all the way to the locked node every time.

The locked node can be accessed quickly from the Toolbar in the @data-editor. It is shown as a green link.

![NOTE: Nodes that are not a descendant of the Locked Node will not be updated until the lock is released.](/.data/assets/image%20(5).png)