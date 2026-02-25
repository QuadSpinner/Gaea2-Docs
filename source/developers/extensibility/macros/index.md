---
icon: puzzle-piece
title: Macros
uid: macros
order: 01
---

# Macros

{% include "macros23.md" %}

Gaea allows you to encapsulate a graph inside a node - this is known as a Macro. You can expose parameters of nodes inside the graph. You can add arithmetic and logic in each parameter as well.

## Features

* Expose variables/parameters, and bind one to many properties.
* Use Expressions to filter incoming values.
* Add optional inputs and outputs.
* Secure export to protect your source graph.
* Brand your macro/nodes, if you prefer.

## Comparison to World Machine

WM keeps entire macro worlds within a macro node, so each usage of a Macro node adds 1x the weight. Gaea references them from a central library and creates instances instead of copies. This is similar to linking to a DLL. 

* The Macro is efficiently packaged into a lightweight version for fast execution. 
* 20 copies of the same macro in a single world only create 1 node's worth of overhead as they share the same definition.
* Updating the macro in a project updates all instances. Great for upgrades, bug fixes, etc.

# Future expansion

The current Macro system is an MVP (minimally viable product) designed to provide a robust core foundation. Keeping the core minimal helps ensure the feature set is stable, predictable, and as error-free as possible.

Macro capabilities will expand over time with added convenience features, more branding options, improved handling of complex Macros, and better project management tooling.

Some enhancements are planned for the Gaea 2.4 and 2.5 releases. Larger changes that require a new engine will be part of Gaea 3 and later. Macro features will continue to be refined and extended across future releases.
