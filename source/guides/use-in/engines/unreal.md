---
title: Unreal
uid: unreal-import
order: 01
description: The easiest way to import a Gaea terrain into Unreal Engine is to use the gaea2unreal plugin.
---

# Unreal

The easiest way to import a Gaea terrain into Unreal Engine is to use @gaea2unreal. Start with @installing-gaea2unreal if the plugin is not installed yet.

If you wish to import it by yourself, use the @unreal output node to prepare the output to fit your terrain size as required by Unreal Engine. Then you can manually import the terrain.



![](/.data/assets/new-import-settings.png)

1. Enter **Landscape** mode.
2. Click **Import from File**.
3. Click the button next to **Heightmap File** and select your heightmap.
4. Calculate the Z scale for your heightmap using the formula (Max height of your heightmap in meters) x (100 to convert to centimeters) x 0.001953125.
5. Click **Import**.

:::info
If the Z-scale calculation feels too complex or you are not getting accurate results, use @gaea2unreal to import your terrain. Gaea will prepare these calculations and other factors for you.
:::



You can follow the exact instructions on Unreal's official documentation:

https://dev.epicgames.com/documentation/en-us/unreal-engine/importing-and-exporting-landscape-heightmaps-in-unreal-engine 


---


## Unreal Node

![The Unreal Node can accept multiple inputs and save them for Unreal Engine consumption.](/.data/assets/Gaea_-_Untitled_10-13-41-AM.png)

The Unreal node is made to prepare your data to be imported into Unreal Engine very easily using the Gaea2Unreal bridge plugin. The Unreal node will resample the data to a Unreal friendly resolution (for example, a 2048 x 2048 build will become 2017 x 2017 to accommodate UE's considerations).

### Adding Inputs

You can add multiple inputs to the Unreal node.

![You can add additional Input Ports by dropping a connection in the middle of the Unreal node and selecting "Add new port"](/.data/assets/Gaea_-_Untitled_10-15-28-AM.png)

![You can also click the pink "Add Port" button in the Node Properties.](/.data/assets/Gaea_-_Untitled_10-15-53-AM.png)

### Target Size and Format

The node's Target Size property lets you select the resample size. It is recommended that you select your Gaea build resolution to be the closest to the size you need. Based on your current Build Resolution set in the @build-options, you will be given a recommended Target Size.

You can set the file format for all the exported files.

:::danger
RAW is currently not fully supported. Both PNG and R16 are fully supported right now, but we recommend using PNG for maximum compatibility.
:::

![](/.data/assets/image-(33).png)

### Unreal Friendly Naming

By default, the filename for each input is decided by the name of the node. You can rename a node to rename the output filename.

To use the Gaea2Unreal bridge, you should enable Unreal Friendly Naming. This will prefix `T_` in front of masks and textures and `H_` in front of the heightfield.

:::info
The heightfield should always be the primary input.
:::

## Building

When you build your terrain, the Unreal node will save all the appropriate asset files along with a JSON definition file. This is the key file you will need for @importing-terrains. See @build-and-export for the general build workflow.

See the next section on how to set up your exported terrain in Unreal Engine.
