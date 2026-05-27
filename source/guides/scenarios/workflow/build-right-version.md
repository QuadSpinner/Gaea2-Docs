---
title: Build the Right Version Before You Export
uid: build-right-version
order: 26
description: Avoid sending stale, preview, wrong-profile, or incomplete Gaea builds by checking what is actually being exported.
---

# Build the Right Version Before You Export

Many export problems are not format problems. The wrong profile was active, the wrong folder was inspected, a mask was not marked for export, or the final build was actually yesterday's file.

Before sending terrain data downstream, check the build itself.

:::tip
Open the Build tab and confirm the active profile, resolution, destination, and export-marked nodes before you run the final build.
:::

## The pre-send check

Check the active profile in @build-options-profiles so a final output is not built with preview settings. Check @build-options-resolution so the intended detail level is being built. Check @build-options-build so you know which folder will receive the files.

Then check @build-options-nodes or Data View for the nodes and ports that will actually export. If automation is involved, compare the command in @build-options-commands with the build you just validated in the UI. After the build, use @build-reports and the files on disk to confirm what happened.

## Inspect the files, not the memory of the build

After building, look at the output folder by timestamp, count, and name. Make sure old files are not being mistaken for new ones. Make sure the `Latest` folder, if used, is the folder your downstream tool is reading.

Common finds include:

* final output built from `Preview_2K`
* old files left behind after a failed build
* a DCC linked to a numbered archive instead of `Latest`
* a renamed node changing a filename unexpectedly
* masks visible in the graph but not marked for export

## Confirm it in Gaea

This guide should include:

* the active Build Profile
* the Build tab destination and resolution
* the Nodes tab or Data View showing export-marked nodes
* the generated output folder with current timestamps
* a Build Report for the final build

The build is ready to send when you can point to the output folder and say which profile made it, at what resolution, with which exported nodes, and why those files are the current deliverable.
