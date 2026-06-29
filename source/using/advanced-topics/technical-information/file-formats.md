---
title: File Formats
uid: file-formats
order: 01
description: Gaea supports all modern (and some legacy) file formats for both flat files and meshes.
---

# File Formats

Gaea can read and write common terrain, image, and mesh formats used by DCC applications, game engines, and custom pipelines. Choose the format based on the kind of data you are moving and how much precision it needs to preserve.

## Supported Formats

### Bitmap and Data Formats

| Format | 32-bit | 16-bit | 8-bit | Notes |
|---|:---:|:---:|:---:|---|
| OpenEXR (`.exr`) | Yes | No | No | Best general-purpose choice for high precision heightfields and maps. |
| TIFF (`.tif`, `.tiff`) | Yes | Yes | Yes | Good compatibility for heightfields, masks, and color maps. |
| PNG (`.png`) | Yes | Yes | Yes | Useful for masks, color maps, and 16-bit heightfield workflows. |
| RAW (`.raw`, `.r16`, `.r32`) | Yes | Yes | No | Headerless heightfield data for tools that require raw values. |
| Gaea RAW (`.graw`) | Yes | No | No | Gaea's high-fidelity raw terrain data format. |
| JPEG (`.jpg`, `.jpeg`) | No | No | Yes | Color/reference images only; avoid for height data. |
| WebP (`.webp`) | No | No | Yes | Color/reference images only. |
| BMP (`.bmp`) | No | No | Yes | Legacy color/reference image support. |
| HDR (`.hdr`) | Yes | No | No | High dynamic range image data. |
| PFM (`.pfm`) | Yes | No | No | Simple floating point image data for custom workflows. |
| PSD (`.psd`) | No | No | Yes | Image import for source/reference material. |
| SVG (`.svg`) | No | No | Yes | Vector source/reference material where supported. |

:::info
Raw files may use `.raw`, `.r16`, or `.r32` depending on the target application. Different tools use different extension and precision conventions, so always confirm the expected bit depth before export.
:::

### Mesh and Object Formats

Gaea can import 3D objects through the Object node and export terrain meshes through mesh/export workflows.

* Wavefront OBJ (`.obj`)
* Autodesk Filmbox (`.fbx`)
* Collada (`.dae`)
* WebGL (`.gltf`, `.glb`)
* Point cloud (`.xyz`)

## Import Formats

Use bitmap/data formats when you need to bring in a heightfield, mask, color map, or reference image. Use mesh/object formats when you need an external model or terrain surface as part of a graph.

For heightfields, prefer 32-bit EXR, TIFF, R32, PFM, or Gaea RAW when fidelity matters. For masks and secondary maps, 16-bit PNG or TIFF is usually enough. Use 8-bit formats for reference images, color sources, or simple masks where precision is not critical.

## Export Formats

For production heightfields, EXR and TIFF provide the best balance of precision and compatibility. Use `.r32`, `.raw`, or `.graw` when another tool expects simple raw data or when you need to move data between Gaea projects with minimal loss.

For game engines and DCC tools, the correct export depends on the target:

* Use 32-bit EXR or TIFF for high-quality displacement in rendering applications.
* Use 16-bit PNG, TIFF, or RAW when the target tool expects 16-bit heightfields.
* Use OBJ or FBX when the target workflow needs a baked terrain mesh.
* Use color formats such as PNG, TIFF, or EXR for masks, splat maps, color maps, and supporting outputs.

## Project Formats

### `.terrain`

Gaea projects are saved as `.terrain` files. This is the main graph file format and can be opened by all Gaea editions that support the project version.

Automation and bridge workflows can run `.terrain` files without manually opening the full interface. See @automation for the supported command-line and file-based automation workflow.

## Precision

Gaea stores and processes heightfields in 32-bit floating point precision. Export at lower precision only when the target workflow can tolerate the reduced range.

### 32-bit

Use 32-bit output for primary heightfields, displacement maps, and any data that must survive further processing. EXR and TIFF are the most broadly useful 32-bit formats. R32 and PFM are useful for custom pipelines that read simple floating point data directly.

:::info
If you are saving output from Gaea to bring back into Gaea, use `.r32` or `.graw` for maximum fidelity and efficient loading.
:::

### 16-bit

Use 16-bit output for many masks, secondary maps, and heightfields headed to tools that require 16-bit terrain input. This can save disk space and memory, but may introduce visible stepping on very smooth or high-relief displacement.

Some game engine terrain workflows require 16-bit unsigned RAW data.

### 8-bit

Use 8-bit output for reference images, color maps that do not require high precision, and simple black-and-white masks. Avoid 8-bit output for primary terrain heightfields unless the loss of precision is acceptable.

## Raw Technical Details

For custom workflows, 32-bit float (`.r32`) and 16-bit unsigned short (`.raw`) are the simplest terrain data formats. They are headerless binary arrays that can be read directly from disk.

* `.r32` stores one 32-bit IEEE 754 float per pixel.
* `.raw` stores one 16-bit unsigned integer per pixel.
* Values are stored in little-endian byte order.
* The files are intended for square heightfields.

To infer the resolution, divide the byte length by the element size, then take the square root. Use 4 bytes per pixel for `.r32` and 2 bytes per pixel for 16-bit `.raw`.

The `.r32` format stores normalized floating point values between `0.0f` and `1.0f`. The 16-bit `.raw` format stores integer values between `0` and `65535`.

Both raw formats are recommended for grayscale heightfield data only.
