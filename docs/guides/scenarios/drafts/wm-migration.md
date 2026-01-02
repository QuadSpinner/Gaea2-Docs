---
title: Migrate from World Machine
uid: wm-migration
---

# Migrating from World Machine to Gaea

If you’re coming from World Machine, you already know the core idea: build terrains by chaining generators, modifiers, and erosion. What changes in Gaea is less the *goal* and more the *mindset*—how you structure graphs, how you handle scale, and how you iterate safely at high resolution.

This guide highlights the biggest workflow shifts so you can get productive quickly and avoid the most common “WM habits” that cause friction.

---

# The key mindset shifts

## Stop thinking “zoom in later”

In older fractal-first workflows, it’s common to build a big world, then “zoom in” to get a hero area. Fractals tolerate that. Erosion and physically-inspired processes don’t.

In Gaea, it’s usually safer to:

1. Build the hero feature at the fidelity it needs.
2. Integrate it into the wider landscape using composition tools (Transform, Combine, Transpose, Embed).

This keeps erosion scale believable and lets you build the hero piece at 8K separately from the world when needed.

## Keep the initial shape clean

WM users often front-load detail early (lots of noise on the base terrain). In Gaea, that tends to restrict how much procedural shaping and erosion can do later.

A better pattern:

* Macro shape first (simple, readable forms)
* Erosion second (lets the terrain “tell the story”)
* Surface and micro detail last (finish and texture support)

## Think in modules, not monoliths

Instead of one giant graph that does everything:

* Split work into logical stages (shape → detail → lookdev)
* Bake stable checkpoints
* Or separate into multiple `.terrain` files and pass data forward using Gaea RAW + File nodes

This reduces memory use, improves iteration speed, and makes teamwork much easier.

---

# A major workflow upgrade: task-specific nodes

One of the biggest differences you’ll feel immediately is that Gaea leans into **task-specific tools**.

In World Machine, it’s common to “massage” a result out of lots of lower-level building blocks—especially for foundational shapes. Gaea still supports that approach, but you often don’t have to.

## Example: basic forms without the noise gymnastics

If you want a clean cone, crater, mesa, ridge, or other simple landform:

* In older workflows you might stack multiple noises, clamps, warps, and masks to sculpt a usable primitive.
* In Gaea, **Primitives** can give you ready-to-run base shapes immediately, so you can spend your time on the *terrain design* and *erosion language* instead of wrestling the base form into existence.

## Power users aren’t boxed in

This doesn’t mean Gaea is “only presets.” The low-level building blocks are still there:

* you can still construct shapes from noises, remaps, and custom masking,
* you can still design highly specific behaviors and art-direct every stage,
* you just have more purpose-built nodes available when you want to move faster.

---

# Translating common WM habits into Gaea equivalents

## “Devices” → Nodes, plus stronger composition

You’ll still chain operations, but Gaea leans heavily on *composition*:

* **Transform** to place and scale features
* **Combine** to merge heightfields and control blending
* **Embed** to seat features into terrain convincingly (clean transitions)
* **Transpose** to route masks/fields cleanly without spaghetti

## “Layout-based design” → Still valid, often cleaner with masks and modules

If you’re used to shaping with layout devices, you’ll feel at home—but you’ll often get better long-term results by:

* building hero features as reusable modules,
* using masks intentionally to control where erosion/details apply.

## “Build everything at final res” → Build smart, bake smarter

High-res everything-all-at-once is where memory and iteration speed go to die.

In Gaea, you’ll get farther by:

1. Working at a comfortable preview resolution.
2. Baking stable sections.
3. Building only what needs the expensive resolution (often in batches).

---

# A practical migration checklist

## First week goals

1. Rebuild one of your favorite WM terrains in Gaea at a modest resolution.
2. Identify two “checkpoints” and bake them.
3. Create one build profile for a quick preview build and one for final output.

## Your new default graph structure

1. Macro Shape (clean forms, low noise)
2. Primary Erosion (the big read)
3. Secondary Detail (selective, controlled)
4. Surface (micro detail, breakup, texture support)
5. Outputs (height + the few masks you truly need)

---

# The most common pitfalls for WM migrants

## Pitfall: “Why does my erosion look wrong when I change scale?”

Because erosion is scale-sensitive. If you change extents, zoom/crop, or rebuild a region at a different scale, erosion settings may no longer represent the same physical reality.

Fix:

* Decide scale early.
* Build hero elements at their intended scale.
* Compose them into the bigger world instead of zooming.

## Pitfall: Over-noising the base terrain

Heavy early noise can “freeze” the terrain’s read and limit what erosion can do.

Fix:

* Keep the base simple.
* Let erosion and surface nodes generate most detail.

## Pitfall: DCC relinking every build

If your output paths change every build, you get roundtrips.

Fix:

* Use incremental build folders for history.
* Also maintain a static `Latest` output folder for stable DCC links.

## Pitfall: One file does everything

Big monolithic graphs are harder to iterate, harder to debug, and harder to collaborate on.

Fix:

* Separate stages into files (shape/detail/lookdev).
* Pass stable results forward as RAW.
* Keep “interfaces” (handoff files) named consistently.

---

# A recommended “migration starter project”

If you want a structured exercise:

1. Make a simple volcano using Primitives or a clean macro setup.
2. Erode it until it reads well at mid distance.
3. Build a separate surrounding landscape.
4. Compose the volcano into the world with Transform/Embed/Combine.
5. Build the volcano branch at 8K for closeups and the world branch at whatever the shot requires.

This single exercise teaches the biggest Gaea advantage over the old “zoom later” habit: **you can keep multiple scales in one graph without breaking physical plausibility.**
