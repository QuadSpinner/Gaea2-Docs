---
icon: u
title: Gaea2Unreal
uid: gaea2unreal
description: Use Gaea2Unreal to bring Gaea heightfields and weight maps into Unreal Engine with the Gaea Landscape Importer.
---

# Gaea2Unreal

Gaea2Unreal is the bridge between Gaea and Unreal Engine. It reads the terrain files prepared by Gaea's Unreal workflow, applies the scale and size metadata Gaea exports, and creates an Unreal Landscape through the Gaea Landscape Importer.

Use this bridge when you want Gaea to handle Unreal-friendly terrain sizing, naming, and metadata instead of calculating the landscape import settings manually.

## Recommended Workflow

1. Install Gaea using the standard @regular-installation so bridge integration data is registered correctly.
2. Download and install the Gaea2Unreal plugin from Gaea's `Tools > Plugins` menu.
3. Prepare your terrain with the @unreal-import workflow so the heightfield, optional weight maps, and JSON metadata are exported together.
4. Open Unreal Engine, launch the Gaea Landscape Importer, and import the Gaea heightmap.
5. Add weight maps and landscape layer information if your terrain uses material layers.

## In This Section

| Page | Use it for |
| --- | --- |
| @installing-gaea2unreal | Installing the plugin into Unreal Engine or a project. |
| @importing-terrains | Creating an Unreal Landscape from a Gaea heightmap. |
| @importing-weight-maps | Importing Gaea masks as Unreal Landscape weight maps. |
| @source-code-unreal | Finding the open source plugin repository and branch guidance. |
| @troubleshooting-ue | Fixing common install, visibility, and import issues. |

## Related Pages

- @unreal-import explains the Unreal-specific export workflow inside Gaea.
- @unreal documents the Unreal output node in the node reference.
- @build-options covers the build settings that affect exported terrain files.
