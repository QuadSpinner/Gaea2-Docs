---
title: Nodes
uid: build-options-nodes
order: 04
---

# Nodes

The Exportable Nodes section lists all nodes marked for export. You can modify their options here.

![](/.data/assets/Build-Option-Nodes-(1).png)

**Port Selection.** From the export menu, you can select specific ports (such as Enabled, Out, Flow, Wear, or Deposits) to export, providing control over the data being exported and optimizing resource usage.

**Additional Options**

* **Primary Only.** Export only the primary or most important outputs of a node, reducing the number of files and focusing on key data.
* **Mark All/None.** Quickly select or deselect all available export options for efficiency and convenience.

**Filename.** The name specified for the node here will be the name used to save file. Files are named in the format `<Name or NodeName>_<PortName>.<extension>`, ensuring clarity and order in file management.

:::info
You can disable `_Out` suffix for the Primary Port in [.](./).
:::

**File Formats.** Gaea supports a wide range of file formats, allowing you to choose the best option based on the requirements of the receiving application or your workflow needs.
