---
icon: square-terminal
title: Building Bridges
uid: building-bridges
description: Build bridge workflows around Gaea.Swarm.exe by exposing inputs, parameters, and output paths as variables.
---

# Building Bridges

A Gaea bridge connects a `.terrain` file to another application, engine, DCC, or pipeline tool. In the current developer workflow, the reliable integration boundary is a prepared terrain file, variables, file paths, and command-line execution through Build Swarm.

This means a bridge usually does not need to change the graph at runtime. The bridge prepares input files and variable values, runs Gaea, then imports or registers the exported files in the target application.

For existing supported bridge workflows, start with @gaea2unreal or @gaea2houdini. Use this section when you need to design a custom workflow around the same file-based automation ideas.

## Bridge Shape

A practical bridge has five parts:

1. A `.terrain` file that can build without manual UI decisions.
2. Variables for any input filenames, output paths, or exposed node parameters the host application needs to control.
3. Export nodes with predictable formats, names, and output locations.
4. A command-line build step that launches `Gaea.Swarm.exe` with the correct file, profile, region, and variable values.
5. Host-side code that reads the exported files and maps them into the target application.

## Prepare the Terrain File

The terrain file is the contract between Gaea and the bridge. Keep that contract explicit:

- Bind the `Filename` property of a File node when the bridge needs to provide an input heightfield or mask.
- Bind exposed terrain controls to @variables instead of editing node properties per run.
- Bind Export node paths when the bridge needs to choose the output folder or filename.
- Use **Explicit** output location when the host application provides the full output path. The Export node expects the path without the file extension; the selected export format decides the extension.
- Use Build Profiles when the same graph needs preview, final, engine-specific, or batch output setups.

See @managing-input-and-output for the input and output binding details.

## Choose the Output Contract

Before writing bridge code, decide what the target application will receive. A bridge may consume a heightfield, masks, color maps, tiled outputs, metadata, or a mix of those files. The important part is that filenames, formats, and scale expectations are predictable.

For Unreal workflows, @unreal-import and @gaea2unreal describe the Unreal node, naming, and JSON metadata expected by the Gaea2Unreal importer. For Houdini workflows, @gaea2houdini and @preparing-a-terrain-file show how a terrain file can expose input bindings, output maps, and parameters for the Houdini side to drive.

## Bridge Patterns

| Pattern | Use it when |
| --- | --- |
| File-in, file-out processor | Another tool sends Gaea an input terrain or mask, waits for the build, then reads the exported output. |
| Export preparation bridge | Gaea prepares files and metadata in a format that a target application can import, such as the Unreal workflow. |
| Batch or farm bridge | A pipeline tool runs many builds from the same `.terrain` file by changing variables, seeds, profiles, or regions. |
| Artist-facing wrapper | A DCC or engine plugin presents a small UI, writes variable values, and runs Build Swarm behind the scenes. |

## Implementation Notes

- Start by copying the command line from @build-options-commands for a working terrain file.
- Prefer a variable file with `--vars` when the bridge needs to pass several values.
- Keep temporary input and output folders unique per run so concurrent builds do not overwrite each other.
- Capture logs and preserve Gaea's build reports when diagnosing failed or unexpected builds.
- Treat the generated files as the handoff point. The target application should validate that the expected files exist before importing them.

## In this section

<div id='show-sublinks'></div>
