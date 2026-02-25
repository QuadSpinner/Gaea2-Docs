---
title: Gamma
uid: gamma
order: 03
---

The Gamma node applies gamma adjustment to the heightfield (or mask) values. It behaves like gamma in an image editor: it remaps midtones more than extreme blacks/whites, changing perceived contrast without being a simple linear gain.

Gamma is most useful when you want to bias a terrain or mask toward lighter or darker mid-values without crushing lows/highs as aggressively as a Levels-style operation.

# Gamma

The Gamma node applies gamma adjustment to the heightfield (or mask) values. It behaves like gamma in an image editor: it remaps midtones more than extreme blacks/whites, changing perceived contrast without being a simple linear gain.

Gamma is most useful when you want to bias a terrain or mask toward lighter or darker mid-values without crushing lows/highs as aggressively as a Levels-style operation.

## Practical Usage Tips

* Think "mid-value bias" not "contrast". For min/max shaping, normalize first (Levels/Remap), then use Gamma to bend the curve.
* Make small moves. Values like 0.85 / 0.95 / 1.05 / 1.15 are often enough.
* Use on masks deliberately. Gamma is a fast way to tune erosion/flow/snow/vegetation masks without reauthoring them.
* Preview masks solo. A subtle change on terrain preview can be dramatic when used as a selector downstream.

## Gamma and Color Textures

Gamma mistakes are a common cause of "washed out", "too dark", or "mushy mask" results. The key is distinguishing color textures from data textures.

### Color vs Data

Color (usually sRGB / gamma-encoded):

* Albedo/BaseColor/Diffuse

Data (must remain linear):

* Roughness/Metalness/AO
* Normal maps
* Height/Displacement
* Masks/weightmaps/splatmaps

Rule of thumb: if it represents *visible color*, it’s usually sRGB. If it represents *numbers*, it should be linear.

### Import Tips

* Import color textures as sRGB. If treated as linear, they’ll usually appear too dark and respond oddly to edits.
* Import masks/data textures as linear. If sRGB/gamma decoding is applied, your masks will get "soft" and thresholds won’t match what you expect.
* If a mask behaves unexpectedly, verify it hasn’t been gamma-treated by the file format/exporter (common with image tools that assume sRGB).

### Export Tips

* Export color textures as sRGB unless your target explicitly expects linear color.
* Export data textures as linear, and in the target tool/engine ensure they are imported as linear (often "sRGB off").
* Avoid "fixing" pipeline mismatches by baking gamma into maps unless you control the entire pipeline; it’s easy to double-apply later.

### Common Symptoms

* Washed out color: gamma applied twice (double sRGB).
* Too dark color: missing sRGB decode (treated as linear).
* Weak/muddy masks: mask imported/exported as sRGB instead of linear.


# Properties

