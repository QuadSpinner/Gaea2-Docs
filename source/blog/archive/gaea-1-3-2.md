---
title: Gaea 1.3.2
uid: gaea-1-3-2
modified: "2022-11-14T21:27:34Z"
---

*Rock tooling, object import, and supersampled screenshots.*

![](__GHOST_URL__/content/images/2022/11/detailtexture.png)Gaea version 1.3, gets a solid feature bump with this update. We are very pleased to announce that Gaea now contains some of your most-requested features.

[Download Gaea 1.3.2](https://quadspinner.com/download/?utm_source=blog&utm_content=Gaea_1_3_2&utm_medium=cta1)## RockNoise

![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_-Dev-_-1.3.1-_-rocknoise2.tor-_03-56-00-PM.jpg)RockNoise adds a whole new dimension to your terrains.***RockNoise*** generates a field of rocks with size variations and controllable density. The "flat" generation makes it ideal for applying the rocks on any surface using the *Embed* and *Insert* modes in the *Combine* node.

![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Untitled.tor-_01-30-06-AM.jpg)RockNoise embedded into a terrain using the Erosion node's Wear map as a mask.It can be mixed with *Rocky* and *Outcrops* nodes for even broader rock output. In the example above, *RockNoise* is embedded into an *Erosion* node's output using the *Wear* output as a mask.

![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_-Dev-_-1.3.1-_-Untitled.tor-_02-01-55-PM.jpg)RockNoise's minimal interface lets you control Density and Octaves. The Size parameter controls the overall size of the largest rocks. The Octaves work like Perlin or other noises. Each octave adds smaller/subdivided rocks in between the larger ones from the previous octave. 

## Obj2Heightfield

The new heightfield capture tool takes an OBJ file and lets you convert it into a terrain that you can use in Gaea.

![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_-_Obj2Heightfield_0.6_-PREVIEW-_10-34-07-PM.png)The Obj2Heightfield interface.The workflow is very simple: 

- In Gaea's main menu, select *Import > Obj2Heightfield*.

- Select an OBJ file to load.

- *Alt + MouseL* to rotate the view. *W/E/R* to Move/Rotate/Scale the mesh.

- You can see the capture preview in the bottom right. Use the *Preview* toggle to see a heightfield approximation in the viewport.

- Click *Capture* to save the heightfield. Repeat to save more captures.

- When finished, click *Return to Gaea*. Gaea will then let you import the capture.

![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_-_Obj2Heightfield_0.6_-PREVIEW-_10-34-03-PM.png)Preview mode showing an approximated heightfield. Actual capture will be of higher quality.Obj2Heightfield is fully functional and available across all editions.

![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_Bleeding_Edge_-1.3.2-_-Untitled.t_10-55-11-PM.png)![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_Bleeding_Edge_-1.3.2-_-Untitled.t_10-56-43-PM.png)Once imported, the heightfield is just like any other output and you can use any Gaea tool on it.## Screenshots Upgraded

A new dedicated Screenshot button is available in the Status Bar under the graph. Clicking the button will take an "auto screenshot" of the viewport. The screenshot is named after your current open file and suffixed with a timestamp and saved in the Gaea Screenshot folder (eg: *RockyTerrain\_2022-11-10\_23-00-32.png*).

Right-clicking the button gives you many new options. You can choose to save a screenshot to a specific location and filename, or take a screenshot of the graph instead of the viewport.

![](__GHOST_URL__/content/images/2022/11/QuadSpinner_Gaea_Bleeding_Edge_-1.3.2-_-Untitled.t_10-59-10-PM.png)The new Supersampling option allows you to double or quadruple your screenshots resolution. For example, if you are on a 4K display, a 4x supersampled screenshot will be 12K in size.

The supersampling occurs in realtime on the GPU and provides maximum fidelity to show off your terrains. 2K and 4K supersampling look fantastic with 4096 x 4096 previews.

In addition, you can choose to have a transparent background in the screenshot.

## Houdini-Gaea Bridge

SideFx has updated the *SideFx Labs* tools. As of [version 19.5.422](https://github.com/sideeffects/SideFXLabs/releases/tag/19.5.422), *Gaea TOR Processor SOP 4.0* works with Gaea 1.3. Our thanks to the SideFx Labs team for the update.

Gaea's automation mode will now produce detailed logs in the main Logs folder for every build. This can be particularly useful when debugging Houdini Bridge issues. See the Gaea.Build.exe command line help for more information.

Watson will collect these logs when making a diagnostics package.

[Download Gaea 1.3.2](https://quadspinner.com/download/?utm_source=blog&utm_content=Gaea_1_3_2&utm_medium=cta2)## Additional fixes

- RockNoise: a new tool for making rocks.

- Obj2Heightfield: Import OBJ files and capture them as heightfields.

- Screenshots: transparent backgrounds, 4x supersampling.

- Screenshots: save quickly to Screenshots folder with automatic filenames.

- Screenshots: new dedicated button in Status Bar.

- Rocky: new mode to make stratified rocks.

- TOR File thumbnails now smaller JPEGs instead of uncompressed PNGs.

- Route node revised.

- More detailed build logs when using automation or Houdini Bridge.

- Outcrops: defaults tweaked.

- Show cumulative build time of select nodes in Status Bar.

- New license management UI in main menu.

- File node: Gaea EXR checkbox renamed to 32-bit EXR to better describe the function.

- Added safety warning to Mesher when using Optimized structure.

- FIX: Optimized mesh output could fail in rare scenarios.

- FIX: Optimized mesh output could crash in Build Swarm.

- FIX: Mesh could incorrectly save during design-time.

- FIX: Mountain could crash if scale was set to 0.

- FIX: Crumble would cause errors when some values were too low.

- FIX: Thumbnail files accessed in Start screen would remain locked during session.

- FIX: Auto Apply in blank file could crash Gaea.

- FIX: Statistics dialog could display cache size incorrectly.

- FIX: Several internal bug fixes and memory improvements.
