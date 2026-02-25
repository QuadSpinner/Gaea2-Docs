---
icon: puzzle
title: Building Macros
uid: building-macros
order: 02
---

# Building Macros

{% include "macros23.md" %}

A Macro encapsulates a small node graph and lets you reuse it as a single node. You can expose internal node settings as Macro parameters by binding them.

## Macro structure

A Macro graph is typically:

* **In**: a `Wormhole` node set to `Direction = Input`
* **Out**: a `Wormhole` node set to `Direction = Output`
* One or more processing nodes in between (for example, `Shaper`)

## Create a Macro

1. Create a new Gaea file.
2. Add a `Wormhole` node, rename it to `In`, set `Direction` to `Input`.
3. Add a second `Wormhole` node, rename it to `Out`, set `Direction` to `Output`.
4. Place your processing nodes between them (example: add a `Shaper`).
5. Wire the graph so the flow is `In > (your nodes) > Out` (example: `In > Shaper > Out`).

## Expose parameters (bind internal settings)

To expose a setting from a node inside the Macro:

1. Select the node (example: `Shaper`).
2. In its Properties panel, click the diamond Property Editor for the setting you want to expose.
3. Use the binding menu to bind that setting to a Macro parameter (example: `Bind to > Shape`).

Repeat for any other settings you want to control from outside the Macro.

## Export and load the Macro

1. Go to `File > Export > Macro...`
2. Fill in the metadata (author name, macro name, etc.).
3. Restart Gaea to load the newly exported Macro.

## Install and use a Macro

1. Install a Macro via `File > Import > Macro`.
2. Create it from the toolbox or via search like any other node.

## Edit a Macro

1. Open the Macro Source file.
2. Modify nodes, connections, and bindings as needed.
3. Export the Macro again (`File > Export > Macro...`).
4. Restart Gaea if needed to ensure the updated Macro is loaded.
