---
icon: puzzle
title: Building Macros
uid: building-macros
order: 02
description: "{% include \\"macros23.md\\" %}."
---

# Building Macros

{% include "macros23.md" %}

A Macro packages a small node graph and lets you reuse it as a single node. In current Gaea builds, the node used to define Macro inputs and outputs is `MacroPort`.

:::info
Edition availability:

* `Indie`: install and use existing Macros.
* `Professional` and `Enterprise`: create and use Macros. These editions also include `Expose Parameters`, `Variables and Expressions`, and `Automation`.

See [Compare Editions](https://quadspinner.com/Order/Editions/#:~:text=the%20core%20design.-,Extend%20%2B%20Automate,-Expose%20Parameters%0APromote).
:::

## Macro structure

A Macro graph is typically:

* **In**: a `MacroPort` node set to `Direction = Input`
* **Out**: a `MacroPort` node set to `Direction = Output`
* One or more processing nodes in between (for example, `Shaper`)

Rename the ports to something clear such as `In` and `Out` so the source graph stays easy to read and maintain.

## Quick Start

1. Create a new Gaea file.
2. Add a `MacroPort` node, rename it to `In`, and set `Direction` to `Input`.
3. Add a second `MacroPort`, rename it to `Out`, and set `Direction` to `Output`.
4. Set the `Display` type for each port as needed, such as `Heightfield`, `Mask`, or `Color`.
5. Place your processing nodes between them (for example, add a `Shaper`).
6. Wire the graph so the flow is `In > (your nodes) > Out` (for example, `In > Shaper > Out`).
7. Enable `Is Optional` on any `MacroPort` that should not be required.

<figure style="max-width: 820px; margin: 1rem auto;">
  <img class="img-fluid" src="/.data/developers/extensibility/macros/building-macros/create-amacro.webp" alt="A simple Macro graph built from two MacroPort nodes and a Shaper node." />
  <figcaption><p>A simple Macro graph built with <code>MacroPort &gt; Shaper &gt; MacroPort</code>.</p></figcaption>
</figure>

## Expose parameters (bind internal settings)

To expose a setting from a node inside the Macro:

1. Select the internal node (for example, `Shaper`).
2. In its Properties panel, click the diamond Property Editor for the setting you want to expose.
3. Choose `Bind to > New variable` to create a new exposed control, or bind to an existing variable.
4. Give the variable a clear name and sensible range.

<figure style="max-width: 820px; margin: 1rem auto;">
  <img class="img-fluid" src="/.data/developers/extensibility/macros/building-macros/bind-new-variable.webp" alt="Binding a Shaper property to a new variable inside a Macro." />
  <figcaption><p>Create a new exposed variable from any internal node property.</p></figcaption>
</figure>

Repeat for any other settings you want to control from outside the Macro. These exposed variables become the user-facing controls for the Macro and can also be driven through automation. For more background, see @variables and @expressions.

## Export the Macro

1. Go to `File > Export > Macro...`
2. Fill in the metadata such as author name, Macro name, version, and description.
3. Choose whether to save the `.macro` file, install it in Gaea, or both.
4. Export the Macro.
5. **Restart Gaea to test the Macro.**

<figure style="max-width: 820px; margin: 1rem auto;">
  <img class="img-fluid" src="/.data/developers/extensibility/macros/building-macros/create-amacro-export-ready.webp" alt="A finished Macro graph with renamed In and Out ports, ready to export." />
  <figcaption><p>Once the ports are named and the graph is wired, the Macro is ready to export.</p></figcaption>
</figure>

<figure style="max-width: 820px; margin: 1rem auto;">
  <img class="img-fluid" src="/.data/developers/extensibility/macros/building-macros/export-macro.webp" alt="The Export Macro dialog showing metadata, Macro ID preview, and install options." />
  <figcaption><p>Use the export dialog to define metadata, review the Macro ID, and optionally install the Macro into Gaea.</p></figcaption>
</figure>

:::tip
Keep the original Macro source `.terrain` file. The exported `.macro` is the installable package, but the source file is what you should reopen when you want to edit, fix, or improve the Macro later.
:::

## Install and use a Macro

1. Install a Macro by dragging the `.macro` file into Gaea, or use `File > Import > Macro`.
2. Installed Macros are stored in `\Data\Macros` inside your Gaea installation and can be accessed quickly through the `Artifact Explorer`.
3. Create the Macro by searching for its Macro name in the toolbox or search like any other node.

<figure style="max-width: 820px; margin: 1rem auto;">
  <video controls muted loop playsinline preload="metadata" style="width: 100%; height: auto;">
    <source src="/.data/developers/extensibility/macros/building-macros/macro-import.webm" type="video/webm" />
  </video>
  <figcaption><p>Install a Macro by dragging the <code>.macro</code> file into Gaea, then search for it by name like any other node.</p></figcaption>
</figure>


## Edit a Macro

1. Open the original Macro source `.terrain` file.
2. Modify nodes, connections, `MacroPort` definitions, and bindings as needed.
3. Export the Macro again (`File > Export > Macro...`).
4. Keep the same Macro ID if you want the installed Macro to update in place, and increase the version or revision number so the update is easy to track.
5. **Restart Gaea to ensure the updated Macro is loaded.**
