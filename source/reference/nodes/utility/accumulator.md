---
title: Accumulator
uid: accumulator
order: 01
description: One of the common ways a graph gets clutters with overlapping connections is when multiple Snow, Lake, or Debris nodes are used and their respective masks.
---

# Accumulator

One of the common ways a graph gets clutters with overlapping connections is when multiple Snow, Lake, or Debris nodes are used and their respective masks need to be combined for further use.

The new Accumulator node is a special type of standalone Generator node that can collect all such masks for you without creating several connections.

It works for Snow Mask, Snow Depth, Water Mask, Water Depth, Shore Mask, Debris Mask, Debris Color Index.

:::warning
The Accumulator will only add nodes that have been built. To ensure all required nodes are built, connect the last node you will use for masking with the Accumulator output to the Accumulator Input. This will not affect the Accumulator but will ensure that all appropriate nodes are built.
:::

