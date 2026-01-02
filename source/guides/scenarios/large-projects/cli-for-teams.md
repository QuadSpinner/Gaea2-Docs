---
title: Command Line for Teams
uid: cli-for-teams
---

# Command Line Basics for Teams

The command line is how you turn a “personal” terrain file into a *repeatable team asset*.

It enables:

- consistent builds across machines,
- quick automation (nightly builds, CI, farm rendering),
- reproducible variations (variables + seed).

Gaea provides two command line entry points:

- `Gaea.exe` (UI-side CLI tasks)
- `Gaea.Swarm.exe` (Build Swarm automation)

## Use “Copy Command Line” First

In the UI, use **Build → Copy Command Line** to get the exact command for the current file, with fully qualified paths and variable defaults.

That gives your team a known-good baseline command to version and reuse.

## `Gaea.exe` Basics

`Gaea.exe` is mainly for tasks like activation/deactivation and diagnostics.

Common flags include:

- `-Path <file.terrain>`
- `-Activate <key or license file>`
- `-Deactivate`
- `-CPUOnly`
- `-SafeMode`
- `-Verbose`

:::tip
Verbose logging is great for debugging, but don’t leave it on permanently unless you need it.
:::

## `Gaea.Swarm.exe` Basics (Build Automation)

`Gaea.Swarm.exe` is what you use to build terrains headlessly.

Minimum viable build:

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain"
````

### Build a specific profile

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain" --profile "Final_8K"
```

### Build a specific region

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain" --profile "Final_8K" --region "Volcano_Closeup"
```

### Ignore baked cache (clean build)

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain" --ignorecache
```

### Set a seed (repeatable variation)

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain" --seed 1337
```


## Working with Variables and Expressions

See @variables and @expressions on how to enable variable driven properties that can be manipulated through the command line.

### Set variables (great for team presets)

Single variable:

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain" -v ErosionStrength:0.63
```

Multiple variables:

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain" -v ErosionStrength:0.63 -v Snowline:0.42
```

Variables from file:

```sh
Gaea.Swarm --Filename "D:\Project\Terrain_Final.terrain" --vars "D:\Project\vars_final.json"
```

## Team Tips That Actually Matter

1. Use **Build Profiles** to standardize output sets (Shape, Detail, Final).
2. Store variable presets in version control (`vars_final.json`, `vars_game.json`).
3. Use `--seed` to make “random” variation repeatable.
4. Prefer Build Swarm for heavy builds—UI resources can compete with Swarm.