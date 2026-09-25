---
title: Nodes
uid: build-options-nodes
order: 04
description: Review exportable nodes, choose which ports are written, and control per-node filenames and formats.
---

# Nodes

The **Nodes** tab lists all nodes marked for export and lets you adjust their output settings before building.

![](/.data/ui/interface/build-options/nodes/build-option-nodes-1.webp)

## Node Export Settings

* **Port Selection**: From the export menu, you can choose specific ports, such as `Enabled`, `Out`, `Flow`, `Wear`, or `Deposits`, to control exactly which data is exported.
* **Primary Only**: Export only the primary or most important output of a node.
* **Mark All/None**: Quickly select or clear all available export options.
* **Filename**: The name specified here becomes the base filename used during export. Files are written in the format `<NameOrNodeName>_<PortName>.<extension>`.
* **File Formats**: Choose the format that best matches the requirements of the receiving application or workflow.

:::info
You can disable `_Out` suffix for the Primary Port in the @build-options-build section.
:::
