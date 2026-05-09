---
icon: square-terminal
title: Extensibility
uid: extensibility
order: 01
description: Choose the right Gaea extensibility path for reusable graph tools, parameterized projects, scripting, and SDK planning.
---

# Extensibility

Extensibility in Gaea covers the tools that let you turn a graph or project into something reusable, controllable, or pipeline-friendly. Start here when you want to package graph logic, expose artist-facing controls, drive builds through variables, or evaluate future custom-node workflows.

For automation-only workflows, such as command-line builds and bridge execution, start with @automation instead. Use this section when the structure of the graph itself needs to become more reusable or programmable.

## Choose a Path

| Goal | Start with |
| --- | --- |
| Package graph logic into reusable nodes | @macros |
| Expose controls that can drive one or more node properties | @variables |
| Transform or constrain incoming property values | @expressions |
| Build procedural shapes or calculations inside the graph | @math-node |
| Review available expression and Math node functions | @functions |
| Understand future custom-node and plugin development | @tor-platform-sdk |

## Macros

Use @macros when you want to turn a graph into a reusable node. A macro can expose selected parameters, provide optional inputs and outputs, and let teams share terrain logic without copying the full source graph into every project.

Macros are the best first step for reusable artist-facing tools because they work inside Gaea's existing graph workflow. Read @building-macros for the authoring process, then @macros-best-practices before sharing macros with a team.

## Scripting and Expressions

Use @scripting-and-expressions when you need a project to respond to exposed values or computed logic.

- @variables create reusable values that can be bound to node properties and controlled through the UI or automation.
- @expressions modify a bound value at the property level, which is useful for scaling, clamping, or deriving one control from another.
- @math-node lets you write procedural calculations directly inside the graph.

These features are often the bridge between artist controls and automated builds. A project can expose variables for a pipeline, use expressions to keep controls stable, and use the Math node for custom procedural behavior.

## SDK

@tor-platform-sdk is the future-facing developer path for custom nodes and plugins on Gaea's TOR Platform. Treat it as planning context unless the page specifically marks a feature as currently available.

If you are building production workflows today, start with @macros and @scripting-and-expressions before moving into SDK material.

## In this section

<div id='show-sublinks'></div>
