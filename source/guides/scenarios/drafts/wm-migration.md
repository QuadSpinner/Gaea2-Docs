---
title: Migrate from World Machine
uid: wm-migration
---

# Migrating from World Machine to Gaea

If you’re coming from World Machine, you already know the core idea: build terrains by chaining generators, modifiers, and erosion. What changes in Gaea is less the *goal* and more the *mindset*—how you structure graphs, how you handle scale, and how you iterate safely at high resolution.

This guide highlights the biggest workflow shifts so you can get productive quickly and avoid the most common “WM habits” that cause friction.

## 1) The “good news” first: scale works the same

**World Machine:** internally stores height as **0..1**, and a project-wide scaling value maps that normalized range to **meters**. Changing that scaling affects the whole world. 

**Gaea:** terrain is also a heightfield where values are **0..1**, and those values are scaled to represent a **height range in meters** (example: 0.5 equals half your max height). 
Gaea also treats world space in meters (“one unit equals one meter” in typical usage). 

**Migration implication:** you don’t need to “rethink” scale. Just make sure your **terrain width (meters)** and **max height (meters)** in Gaea match what you used in WM. 

---

## 2) Core concept mapping (WM → Gaea)

| World Machine habit                      | Closest Gaea approach        | Why it matters                                                                 |
| ---------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------ |
| Device network + groups                  | Node graph + **Tabs/Groups** | Keep large terrains readable (separate shape / erosion / masks / export).      |
| Wire routing points                      | **Portals + Chokepoints**    | Cleaner long-distance wiring; safer refactors around hubs.                     |
| “View downstream while editing upstream” | **Lock Preview**             | Pin viewport to a node; upstream changes propagate to it.                      |
| “My mask preview looks wrong”            | **Underlays**                | Force the correct heightfield under a color/mask preview.                      |
| Lots of direct masking on nodes          | **Mask node (post-mask)**    | Mask as a fast post-process so changing the mask doesn’t rebuild heavy nodes.  |

---

## 3) First-time setup in Gaea (WM-friendly)

### Match your WM “world scale” immediately

In Gaea Build/Terrain settings, set:

* **Width (meters)** (your world footprint)
* **Height (meters)** (your max elevation range) 

Then sanity-check with Gaea’s measurement tools:

* You can see **Metric Height (meters)** and also the **Raw Value (0..1)** via the Height Picker. 

This lines up cleanly with WM’s “0..1 internally + meters via global scaling” model. 

---

## 4) Rebuilding your WM graph in Gaea (a practical approach)

### Step A — Recreate your “height spine” first

Just like in WM: generators → shaping → erosion → post shaping.

In Gaea, lean on search-based node creation:

* **TAB** = quick search nodes. 

### Step B — Convert WM mask habits to “modern Gaea masking”

Instead of wiring masks into every heavy node, prefer the **Mask node** after the effect chain:

* Docs explicitly call out that masking a node directly means mask changes can force a rebuild, while the **Mask node** is “extremely fast” because it’s post-process. 
* The docs also recommend adopting the Mask node to make builds faster. 

### Step C — Fix “is this a heightfield or a mask?” confusion

Gaea lets you override how a node is preview-rendered:

* **Render Intent (Override)** can display output as **Heightfield** or **Mask**. 

That’s a nice replacement for WM’s “Display as Mask” style behavior in layout workflows. 

---

## 5) WM Layout Generator → Gaea drawing + masking workflow

WM Layout Generator is explicitly a vector design tool for terrain areas, roads/rivers, and mask regions, and you can view downstream output while editing it. 
It also has options like **Display as Mask**, **Invert Values**, and **Breakup** for natural edges. 

In Gaea, you’ll typically replace this with:

* a drawing/input approach (the docs point older users toward **Draw**) 
* then apply those shapes/masks using the **Mask node** post-process workflow (faster iteration). 

To keep your “layout editing but judging final look” habit:

* **Lock Preview** the downstream node you care about (hotkey **F**). 
* If the terrain under your mask/color looks wrong, set the correct **Underlay** (hotkey **G**). 

---

## 6) Working fast (Gaea equivalents of WM “build management”)

### Suspend processing while you reorganize

Gaea can pause node processing entirely:

* **Suspend/Resume Engine** (shortcut **`**) freezes updates so you can edit without triggering rebuilds. 

### Use organization features earlier than you did in WM

* **Portals** help keep graphs readable (especially across tabs). 
* **Chokepoints** make it safer to rewire around a hub node later. 

---

## 7) Builds & exports (focus on the common case: Single Image)

Gaea’s Build Options support:

* **Single Image** (most common) and **Tiled Images** (special-case). 

For day-to-day solo work, the big “pipeline sanity” tip in the docs is:

* Keep build history **and** enable **Maintain a static folder with the latest copy**, so your DCC links don’t break every build. 

Also, exported file naming is predictable:

* `<NodeName>_<PortName>.<extension>` by default. 

---

## 8) About Gates/Baking (kept brief, per your note)

Gaea’s docs describe **Gates** as “checkpoint” nodes that let you bake stable sections quickly, and call out that this is useful for “Tiled and Huge Builds.” 

If you’re doing the typical **Single Image** workflow, you can treat this as optional and skip it most of the time (and only reach for it when you genuinely need tiled/huge-output workflows). 

---

## 9) WM → Gaea “first migration project” checklist

1. Pick one WM project you know well.
2. Note its **world size** and **max elevation range** (meters).
3. In Gaea, set **Width/Height (meters)** to match. 
4. Rebuild the height spine first (generators → erosion → shaping).
5. Convert direct-masking habits to a **Mask node** post-mask pass for faster iteration. 
6. Use:

   * **TAB** to add nodes fast 
   * **F** Lock Preview to judge downstream while editing upstream 
   * **G** Underlay when mask/color previews sit on the wrong terrain 
   * **`** Suspend Engine when reorganizing heavy graphs 
