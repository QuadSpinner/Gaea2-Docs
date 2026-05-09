---
title: Building a Bridge with the CLI
uid: building-a-bridge-with-the-cli
order: 03
description: Use Gaea.Swarm.exe, variables, and predictable file paths to build a simple command-line bridge.
---

# Building a Bridge with the CLI

The simplest bridge is a wrapper around `Gaea.Swarm.exe`. The wrapper prepares the input files and variable values, launches the build, then imports the exported files into the host application.

This page describes the shape of that wrapper. For the full argument reference, see @command-line-automation.

## 1. Prepare the terrain

Build the `.terrain` file in Gaea first. The bridge should start from a graph that already builds successfully, with the needed outputs configured in @build-options.

Expose anything the bridge must control:

- input file paths, such as a File node's `Filename` property
- output paths, such as an Export node's `OutputPath` property
- artist controls, such as erosion amount, snowline, or mask strength
- build choices that should become Build Profiles or Regions instead of ad hoc graph edits

See @managing-input-and-output for the required File and Export node setup.

## 2. Copy a known-good command

Open @build-options-commands and use **Copy Command Line**. This gives you the exact file path and current variable values for the terrain as Gaea understands them.

Use that copied command as the first working version of the bridge command before replacing values programmatically.

## 3. Pass bridge values with a variable file

For bridge code, `--vars` is usually easier to manage than a long list of inline variables. Write a JSON or text file for each run, then pass that file to Build Swarm.

```json
{
  "InputHeightfield": "D:\\Bridge\\input\\terrain.r16",
  "OutputHeightfield": "D:\\Bridge\\output\\processed_terrain",
  "ErosionStrength": 0.45
}
```

The names must match variables in the `.terrain` file. Output paths bound to an Export node in **Explicit** mode should omit the extension; Gaea adds the extension from the selected export format.

## 4. Run Build Swarm

Use `Gaea.Swarm.exe` for the build step. A typical bridge command uses a terrain file plus a variable file:

```sh
Gaea.Swarm.exe --Filename "D:\Bridge\Processor.terrain" --vars "D:\Bridge\run-vars.json"
```

If the bridge needs a specific build setup, add the profile or region used by that workflow:

```sh
Gaea.Swarm.exe --Filename "D:\Bridge\Processor.terrain" --profile "BridgeFinal" --vars "D:\Bridge\run-vars.json"
```

## 5. Import the result

After the build finishes, the host application should check that the expected files were created before importing them. Keep the bridge's output folder predictable and unique per run, especially if multiple builds may run in parallel.

For more complex integrations, preserve the command, variable file, and build reports with the host application's logs. That makes it much easier to reproduce a failed bridge run outside the host application.
