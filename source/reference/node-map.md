---
icon: location-dot
title: Node Map
uid: node-map
order: 01
---

# Node Map


:::reference-tables
### Primitive

| Family   | Node            | Code  |
|----------|-----------------|-------|
| Assets   | @file           | `f`   |
|          | @object         | `o`   |
|          | @tileinput      | `til` |
| Basic    | @constant       | `k`   |
|          | @cracks         | `ck`  |
|          | @draw           | `vm`  |
|          | @gabor          | `g`   |
|          | @linenoise      | `ln`  |
|          | @noise          | `kn`  |
|          | @perlin         | `p`   |
|          | @voronoi        | `v`   |
|          | @cutnoise       |       |
|          | @pattern        |       |
|          | @shape          | `s`   |
| Extended | @cellular       | `ll`  |
|          | @cellular3d     | `c3`  |
|          | @dotnoise       | `do`  |
|          | @driftnoise     | `dr`  |
|          | @multifractal   | `mf`  |
|          | @waveshine      | `ws`  |
| Gradient | @cone           | `con` |
|          | @hemisphere     | `do`  |
|          | @lineargradient | `lg`  |
|          | @radialgradient | `rg`  |

### Terrain

| Family    | Node           | Code  |
|-----------|----------------|-------|
| Landscape | @canyon        | `ny`  |
|           | @craterfield   | `cf`  |
|           | @dunesea       | `du`  |
|           | @mountainrange | `mr`  |
|           | @plates        | `pl`  |
|           | @ridge         | `ri`  |
|           | @rugged        | `gg`  |
|           | @slump         | `um`  |
|           | @uplift        |       |
| Primitive | @crater        | `cra` |
|           | @island        | `is`  |
|           | @mountain      | `m`   |
|           | @mountainside  | `ms`  |
|           | @volcano       | `vo`  |

### Modify

| Family    | Node                   | Code  |
|-----------|------------------------|-------|
| Adjust    | @adjust                | `fx`  |
|           | @autolevel             | `lv`  |
|           | @clamp                 | `cl`  |
|           | @clip                  | `ci`  |
|           | @denoise               | `dn`  |
|           | @equalize              | `eq`  |
|           | @extend                | `xt`  |
|           | @flip                  | `fp`  |
|           | @match                 |       |
|           | @sharpen               | `sx`  |
|           | @threshold             | `th`  |
|           | @transpose             | `tx`  |
| Blur      | @blur                  | `b`   |
|           | @median                | `md`  |
|           | @slopeblur             | `sb`  |
|           | @variableblur          | `vb`  |
| Effect    | @origami               | `or`  |
|           | @pixelate              | `px`  |
|           | @swirl                 | `swi` |
|           | @whorl                 | `wh`  |
| Profile   | @curve                 | `cu`  |
|           | @deflate               | `df`  |
|           | @filter                | `fl`  |
|           | @fold                  | `fo`  |
|           | @graphiceq             | `gq`  |
|           | @recurve               | `rc`  |
|           | @shaper                | `sp`  |
|           | @softclip              | `sc`  |
|           | @thermalshaper         | `ts`  |
| Shape     | @meshify               | `ms`  |
| Transform | @aperture              | `ap`  |
|           | @dilate                | `di`  |
|           | @distance              | `rt`  |
|           | @transform             | `t`   |
|           | @transform3d           | `t3`  |
| Utilities | @blobremover           | `b`   |
|           | @heal                  | `hl`  |
| Warp      | @directionalwarp       | `dw`  |
|           | @slopewarp             | `sw`  |
|           | @warp                  | `w`   |

### Surface

| Family      | Node             | Code  |
|-------------|------------------|-------|
| Cartography | @contours        | `cn`  |
|             | @grid            | `gr`  |
| Rocky       | @craggy          | `cg`  |
|             | @outcrops        | `oc`  |
|             | @rocknoise       | `rn`  |
|             | @rockscape       | `rs`  |
| Scatter     | @bomber          | `bo`  |
|             | @pockmarks       | `on`  |
|             | @stones          | `on`  |
| Structure   | @bulbous         | `bu`  |
|             | @shatter         | `tt`  |
|             | @shear           | `sh`  |
| Superficial | @groundtexture   | `gt`  |
|             | @roughen         | `rog` |
|             | @sand            | `sd`  |
|             | @distress        | `dst` |
| Terrace     | @fractalterraces | `ft`  |
|             | @sandstone       | `ss`  |
|             | @steps           | `ste` |
|             | @stratify        | `ct`  |
|             | @terraces        | `st`  |

### Simulate

| Family     | Node         | Code  |
|------------|--------------|-------|
| Erosion    | @anastomosis | `an`  |
|            | @crumble     | `cr`  |
|            | @easyerosion | `ee`  |
|            | @erosion     | `ce`  |
|            | @erosion2    | `e2`  |
|            | @hillify     | `hi`  |
|            | @hydrofix    | `hf`  |
|            | @lichtenberg | `lct` |
|            | @sediments   | `sed` |
|            | @thermal     | `te`  |
|            | @thermal2    | `t2`  |
|            | @wizard      | `z1`  |
|            | @wizard2     | `z2`  |
| Scatter    | @debris      | `db`  |
|            | @scree       |       |
| Snow       | @dusting     | `ds`  |
|            | @snow        | `sn`  |
|            | @glacier     | `gl`  |
|            | @snowfield   | `sf`  |
|            | @icefloe     | `if`  |
| Vegetation | @trees       | `tr`  |
|            | @shrubs      | `shr` |
| Water      | @lake        |       |
|            | @rivers      | `rv`  |
|            | @sea         | `sea` |

### Derive

| Family     | Node            | Code  |
|------------|-----------------|-------|
| Aspect     | @angle          | `ang` |
|            | @curvature      | `cv`  |
|            | @height         | `h`   |
|            | @normals        | `nm`  |
|            | @peaks          | `pk`  |
|            | @slope          | `sl`  |
| Generative | @flowmap        | `fl`  |
|            | @flowmapclassic | `fl1` |
|            | @occlusion      | `cc`  |
|            | @rockmap        | `km`  |
| Texture    | @soil           | `so`  |
|            | @texturebase    | `tb`  |
|            | @texturizer     | `tz`  |

### Colorize

| Family    | Node          | Code  |
|-----------|---------------|-------|
| Adjust    | @gamma        | `ga`  |
|           | @hsl          | `hu`  |
| Color     | @cluter       | `clt` |
|           | @satmap       | `sa`  |
|           | @supercolor   | `sc`  |
|           | @synth        | `sy`  |
|           | @tint         | `ti`  |
|           | @watercolor   | `wc`  |
| Erosion   | @colorerosion | `cx`  |
| Surface   | @weathering   | `we`  |
| Utilities | @rgbmerge     | `rm`  |
|           | @rgbsplit     | `rs`  |
|           | @splat        | `spl` |

### Output

| Family    | Node          | Code  |
|-----------|---------------|-------|
| Assets    | @export       | `ex`  |
|           | @mesher       | `me`  |
|           | @pointcloud   | `pc`  |
|           | @unity        | `un`  |
|           | @unreal       | `ue`  |
|           | @vfx          |       |
| Render    | @ao           | `ao`  |
|           | @cartography  | `crt` |
|           | @halftone     |       |
|           | @lightx       | `lx`  |
|           | @sunlight     | `si`  |
|           | @shade        |       |
| Utilities | @meshwarp     | `nm`  |
|           | @texturebaker | `nm`  |

### Utility

| Family    | Node           | Code  |
|-----------|----------------|-------|
| Routing   | @chokepoint    | `cp`  |
|           | @combine       | `c`   |
|           | @gate          | `g8`  |
|           | @layers        |       |
|           | @loopbegin     | `lb`  |
|           | @loopend       | `le`  |
|           | @mixer         | `mx`  |
|           | @reseed        |       |
|           | @route         | `ro`  |
|           | @switch        | `swt` |
|           | @compare       | `cm`  |
| Structure | @edge          | `ed`  |
|           | @repeat        | `rp`  |
|           | @seamless      | `sls` |
| Utilities | @accumulator   | `cc`  |
|           | @dataextractor | `de`  |
|           | @mask          | `ma`  |
|           | @mathx         | `mx`  |
|           | @var           | `var` |

:::