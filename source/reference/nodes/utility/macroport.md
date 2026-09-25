---
description: Defines an input or output port inside a macro for passing height, mask, or color data.
title: MacroPort
uid: macroport
order: 12
---

# MacroPort

A MacroPort defines an external input or output for a Macro source graph. Each MacroPort becomes a port on the exported Macro node, so the port name, direction, type, and optional state should be set before export.

For the full authoring flow, see @building-macros.

## When to Use It
Use MacroPort when you are building a Macro and need to declare what data can enter or leave the packaged graph.

## Properties

| Property | Purpose |
| --- | --- |
| Direction | Sets whether this MacroPort is an `Input` or `Output` for the exported Macro. |
| Display | Sets the visible data type for the port, such as `Heightfield`, `Mask`, or `Color`. |
| Is Optional | Allows the exported Macro to build even when this port is not connected. |

Rename MacroPort nodes to clear names such as `In`, `Mask`, or `Out` before export. Those names make the Macro source easier to read and help the exported Macro's ports make sense in other graphs.
