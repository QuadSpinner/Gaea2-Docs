---
title: Thermal Erosion
uid: simulate-thermal-erosion
---

# Thermal Erosion

### Thermal Erosion <a href="#thermal-erosion" id="thermal-erosion"></a>

Thermal erosion is the sister to Hydraulic erosion. While used less frequently, Thermal erosion is equally as important in most environments.

**Understanding Anisotropy**

Thermal Stress Anisotropy governs how erosion and the resulting rock deposits are shaped. It smooths the terrain while eroding. Low values largely keep the original terrain intact. High values create stronger talus while eroding the original terrain. For example, sharp peaks get eroded heavily with high stress values.

The image below shows a simplified version of how Thermal Stress Anisotropy affects a terrain.

![](https://docs.quadspinner.com/images/thermal_stress_anisotropy.webp)

**Combining with Hydraulic Erosion**

In the real world, hydraulic and thermal erosion occur together. You can mimic this behavior by chaining Thermal and Erosion (or Wizard) nodes, as shown in the Layering Erosion section above.

![Chained sequence of Wizard/Erosion and Thermal nodes](https://docs.quadspinner.com/images/ref/chain-thermal-erosion.webp)

Selective Processing can be a very powerful tool in such a chain of nodes.
