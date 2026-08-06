## Color Lookup

Color texture generation in Gaea is based on color lookup tables, or CLUTs. A CLUT maps grayscale values from a heightfield, mask, or data map to a color ramp. Dark values use one end of the ramp, bright values use the other end, and intermediate values sample the colors between them.

When TextureBase is used before @satmap, @cluter, @synth, or another color node, it acts as the mask that controls where those colors appear. Instead of coloring only by raw elevation, the color node follows TextureBase's natural material distribution, including slope response, flow-like streaks, soil buildup, patches, and random breakup.

Use this workflow when a direct height-based color ramp feels too clean or uniform. TextureBase gives the color lookup a more terrain-aware input, so rocks, soil, sediment, and vegetation colors can separate into more believable regions.

