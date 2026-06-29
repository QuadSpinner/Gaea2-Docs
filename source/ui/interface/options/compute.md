---
title: Compute
uid: options-compute
order: 12
description: The Compute tab allows you to configure which available hardware devices are used for computation, optimizing performance across CPU and GPU resources.
---

# Compute

The **Compute** tab allows you to configure which available hardware devices are used for computation, optimizing performance across CPU and GPU resources.

![](/.data/ui/interface/options/compute/options-compute.webp)



## **Available Devices**

This section lists all detected compute-capable devices and APIs, with a **performance score** indicating their relative speed in Gaea’s benchmarks (higher is better).

## Device List

Lists all available computer devices that Gaea can use for processing terrains.

* Sub-options under each device allow you to select which technology is enabled for that device. For example, OpenCL, Level Zero, CUDA, etc.

**Scan Hardware and Determine Speeds**: Initiates a scan of all hardware to evaluate processing capabilities and optimize device selection. Once done, a score for each device and technology is shown in the list.

See @benchmark-devices for additional information.

## Driver Issues <a href="#driver-issues" id="driver-issues"></a>

If Gaea detects driver issues with any devices, an error readout will be shown next to that device. Depending on the issue, the device may be prevented from loading in Gaea until the driver has been updated.

## CPU-only mode <a href="#cpu-only-mode" id="cpu-only-mode"></a>

Gaea can be forced to run using CPU only. This may not necessarily bring performance down too much as Gaea uses advanced techniques to keep performance up while using the CPU.

If you are experiencing instabilities, disabling GPU and Accelerators may improve stability.

See @cpu-only-mode



* **Toggle Switches** – Enable or disable each compute backend per device.
* **Score** – Benchmark performance metric; helps you select the fastest option.
* **Scan Hardware and Determine Speeds** – Detects devices and benchmarks their compute speeds.
* **Enforce Optimal Settings** – Automatically selects the **best-performing combination** of devices based on benchmark results.



## **Usage Tips**

* Prefer **CUDA** on NVIDIA GPUs for maximum performance.
* Use **Native CPU** mode if GPU is unavailable or reserved for other tasks.
* Disable low-scoring devices to prevent job scheduling on slow hardware.
* Re-scan after driver updates or hardware changes.


