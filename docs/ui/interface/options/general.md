---
title: General
uid: options-general
order: 01
---

# General

The **General** tab provides essential application-wide preferences, controlling how Gaea launches, handles logs, updates, licensing, and diagnostic tools. These settings affect global behavior rather than project-specific options.

![](/.data/assets/Options_-_General_09-56-50-PM.png)



## **Startup Settings**

* **Start Gaea on:** Select which monitor Gaea will open on at launch. Useful for multi-monitor setups.
  * _Monitor 0_ – Opens on the first detected monitor.
  * _Monitor 1 (Primary)_ – Opens on the system’s primary display.

## **Interface Behavior**

* **Move cursor to target when using the Lazy Menu:** Automatically moves the mouse cursor to the selected target in the Lazy Menu for faster interaction.
* **Show Expert Tools:** Enables advanced tools intended for experienced users. May expose complex features not needed for beginners.

## **Update and Reporting**

* **Check for updates on startup:** _(Currently disabled)_ When enabled, Gaea will check for available updates every time it launches.
* **Enable Verbose Logging:** Creates more detailed log files for troubleshooting. This can generate large files. Requires a restart to take effect.
* **Report crash reports anonymously:** Sends crash reports to QuadSpinner without identifying data.
* **Report anonymous usage statistics:** Helps improve Gaea by sending non-identifiable usage patterns.

## **Licensing and Network**

* **Local License Server:** Specify the IP address and port of a floating license server for shared licensing environments. Example: `192.168.100.11:9000`.
* **Use Web Proxy:** Enable and configure a proxy server for network communications if your environment restricts direct connections.



## **Utilities**

* **Open Data Folder:** Opens Gaea’s data storage directory containing logs, cache, and settings.
* **Run Diagnostics:** Runs internal diagnostic tools to detect and troubleshoot common issues.
* **Factory Reset:** Resets all preferences and settings to their original defaults. _This cannot be undone._



:::warning
Verbose logging should only be enabled when troubleshooting to avoid excessive disk usage.
:::


