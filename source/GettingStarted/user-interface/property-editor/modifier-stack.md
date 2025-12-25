---
title: Modifier Stack
uid: modifier-stack
---

# Modifier Stack

## Modifier Stack

Modifiers are additional adjustments you can add on top of most nodes. These Modifiers are post-processed onto the node's output, so you can modify them without having to rebuild the node.

Many of these Modifiers provide the same functionality as nodes of the same names. However, when you use a Modifier, you create less overhead than creating individual nodes for small adjustments.

![](/.data/assets/image (26).png)

The Modifier Stack can be used to re-order the Modifiers applied to the node. Often this may change the end-result when using impactful Modifiers such as Autolevel or Height Remap.

:::info
The Modifier Stack is the evolution of the Post Process Stack found in Gaea 1. Modifiers are more flexible, powerful, and memory efficient.
:::

In addition to the array of Modifiers available, three unique Modifiers exist that are not directly available as nodes: Influence, Min, and Max.&#x20;

## Modifiers

| Height       | Effects   | Blend Modes | Masks     |
| ------------ | --------- | ----------- | --------- |
| Autolevel    | Blur      | Max         | Influence |
| Clamp        | Warp      | Min         | Height    |
| Drop         | Shaper    | Difference  | Slope     |
| Equalize     | Threshold | Invert      |           |
| Height Remap |           |             |           |
| Match Height |           |             |           |
| Strong       |           |             |           |



For strategies on using Modifiers, see [using-modifiers](/../using-gaea/managing-graphs/using-modifiers.html).

