---
title: Audit a Graph Before Build with Data View
uid: audit-graph-before-build
order: 29
description: Use Data View to catch missing exports, required baking, heavy nodes, errors, and orphaned graph work before a build.
---

# Audit a Graph Before Build with Data View

Many build problems are visible before the build starts. The graph already knows which nodes are marked for export, which nodes need baking, which nodes are heavy, and which nodes have errors.

Use that information before spending time on a serious build.

:::tip
Open @data-view before a final build or handoff. It is faster to catch missing exports and required baking there than after a failed build.
:::

## What to look for

In the Terrain tab, filter for nodes with errors, heavy nodes, required baking, and orphan nodes. Errors and required baking can block the build. Heavy nodes explain slow iteration. Orphans often reveal old experiments that will confuse handoff.

In the Build tab, review export-marked nodes, output names, ports, and formats. A mask can look finished in the graph and still never leave the project if it is not marked for export.

## A small audit pass

Open Data View. Check errors first. Then check required baking, especially before tiled or Hybrid builds. Look at heavy nodes if the graph feels slower than expected. Review orphans before handoff. Finally, inspect the Build tab and rename unclear outputs before running a small validation build.

If the output differs from expectation, check @build-reports before guessing.

## Common finds

* a final mask visible in the graph but not marked for export
* an old output node still writing files
* required baking before a tiled build
* an orphaned branch that looks like production logic
* one heavy node making the build feel broken

## Confirm it in Gaea

This guide should show:

* Data View with the Terrain tab filters
* Required Baking results before a tiled or Hybrid build
* the Build tab listing export-marked nodes
* an orphan-node cleanup example
* a Build Report after a validation build

After the audit, you should know what will export, what needs baking, what is slow, what is broken, and what should be removed or isolated.
