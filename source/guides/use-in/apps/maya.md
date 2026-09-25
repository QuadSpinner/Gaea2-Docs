---
title: Maya
uid: maya
description: Import Gaea terrains into Maya as displacement maps or mesh exports.
---

# Import a Gaea terrain into Maya

Gaea terrains can be used in Maya as displacement maps for rendering or as OBJ/FBX terrain meshes. Use displacement when you want a lightweight scene with render-time detail. Use mesh import when the terrain must be edited, sculpted, cached, or passed through a geometry pipeline.

Assumptions:

* Terrain footprint = **5000 m x 5000 m**
* Heightmap is **0..1**, where black = 0 m and white = 2500 m
* Maya units are meters

:::tip
These are Gaea defaults. Adjust the values if your terrain uses a different Terrain Definition. See @dimensions-and-scale for scale guidance.
:::

## Import as a displacement map

### 1. Export from Gaea

Export the heightfield as 32-bit EXR or TIFF for best quality. Use 16-bit PNG or TIFF only when the final workflow can tolerate less precision.

### 2. Set Maya units

Set Maya's working units to meters before creating the terrain base. This keeps the plane size and displacement height aligned with Gaea's terrain dimensions.

### 3. Create a terrain plane

Create a polygon plane and set its width and depth to match the Gaea terrain footprint. For the default terrain size, use `5000 m x 5000 m`.

Use enough subdivisions for the workflow:

* For geometry displacement, the plane needs enough subdivisions to hold the detail.
* For render-time displacement, use the subdivision and displacement settings required by your renderer.

### 4. Apply the heightmap

Connect the Gaea heightmap to the material or renderer displacement input. Treat the image as data:

* Set the heightmap color space to raw or linear.
* Avoid sRGB/gamma correction on height data.
* Set displacement height to the Gaea terrain height, such as `2500 m`.

If the terrain is inverted, invert the height source or reverse the displacement direction in the shading network.

## Import as a mesh

### 1. Export from Gaea

Use the Mesher node or export workflow to write OBJ or FBX. Export normalized scale if you want to set exact dimensions in Maya after import.

### 2. Import into Maya

Import the OBJ or FBX file into the scene. If the mesh is normalized, scale it to the terrain dimensions:

* X = `5000 m`
* Z = `5000 m`
* Y = `2500 m`, if the vertical range was normalized

Freeze or apply transforms after scaling, especially before rigging, simulation, collision, or renderer-specific displacement workflows.

## Common gotchas

* Heightmaps should be raw or linear, not color-managed as sRGB.
* A low-subdivision plane will look faceted when displaced.
* OBJ and FBX imports may use different up-axis or scale assumptions; confirm orientation before final layout.
* For general export principles, see @universal-instructions.
