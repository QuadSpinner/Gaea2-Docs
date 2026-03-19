---
title: Installation Strategies
uid: install-strategies
order: 03
icon: bullseye-arrow
description: Compare installation and deployment strategies for individual users, studios, schools, and offline or restricted environments.
---

# Installation strategies

This page covers practical deployment patterns for individuals, studios, schools, and secured environments, with emphasis on repeatability, low-touch rollout, and offline constraints.

## Key decisions

Before you pick a packaging method, decide these upfront:

* Online access during install (allowed, restricted, or none).
* Admin privileges (per-machine install vs per-user install).
* Whether you need registry-based integrations for bridges (Unreal/Houdini).
* Where per-user data will live (local profile, roaming profile, redirected folders).
* How updates will be approved and distributed (central IT vs self-updating users).

## Installer options

**Setup executable**
Use this when you want a conventional Windows install, and when you need the installer to set up registry entries required for bridge integrations. 

**7-Zip package**
Use this when you need a purely portable payload for xcopy-style deployment or custom packaging. It does not create registry entries. 

**winget**
Use this when you already manage software via Windows package management and want a simple, scripted install. Expect that the winget package may lag behind the latest website release. 

## Decision guide

| Environment                             | Recommended approach                                      | Why                                                              |
| --------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| Individual workstation, normal internet | Setup executable                                          | Simplest and most compatible with integrations.                  |
| Studio with managed endpoints           | Setup executable in silent mode                           | Predictable rollout, supports per-machine or per-user installs.  |
| School labs, non-admin students         | Per-user install (silent) or portable                     | Avoids admin dependency; easier profile-based licensing.         |
| Air-gapped / no internet                | Pre-stage prerequisites + portable payload                | Avoids installer dependency on downloading runtimes.             |
| Strictly offline, many seats            | Offline floating with Fortress + workstation license file | Centralized license control without external activation.         |

## Air-gapped and restricted networks

If internet access is blocked, treat prerequisites as first-class deployment artifacts. The installer can download required runtimes when missing, which implies internet access; in offline environments, install those runtimes beforehand. 

Recommended pattern:

* Build a "golden" package set internally: Gaea payload + required runtimes.
* Prefer the portable payload when your security team requires deterministic file inventories and minimal machine changes. 
* If you must use the setup executable, run it only after prerequisites are staged so it doesn’t attempt external downloads. 

## Mass deployment

The supported unattended install path is the setup executable with silent flags. 

Typical usage:

* Use `/ALLUSERS` for a per-machine install when IT manages the endpoint.
* Use `/CURRENTUSER` when endpoints are locked down and you deploy into user profiles. 

Plan for where the data folder will be created and how you will place license material there. The documented paths differ by install mode. 

## Portable and xcopy-style deployment

Use the 7-Zip package when you want to copy a known folder layout to many machines and avoid installer-side system changes. 

Use this approach when:

* You want a clean file-based deployment that’s easy to mirror to render nodes or lab machines.
* You need to run from removable media or a controlled internal share.

If you rely on bridge integrations that depend on registry entries, prefer the setup executable; the portable package does not create those entries. 

## Shared storage and network installs

Installing to a network drive can work, but avoid UNC paths. If you deploy from a central share, map it to a drive letter and test thoroughly. 

Practical guidance:

* Treat "run binaries directly from a share" as a separate decision from "deploy from a share". Even if the share is acceptable, local execution is usually more reliable for compute-heavy workflows.
* If you do a shared install, validate GPU/driver access and file locking behavior under concurrent launches.

## Licensing at scale

Your deployment strategy should include a licensing strategy so machines are functional on first launch.

**Online activation via file**
Place an `activate.lic` file containing only the license key in the Gaea Data Folder; Gaea will attempt activation on launch if not already validated. 

**Offline activation via file**
Rename the provided offline license file to `gaea2.lic` and copy it into the Gaea Data Folder. 

**Offline floating via Fortress**
For organizations that cannot use online activation and need floating seats, distribute a workstation file renamed to `floating.lic` into the Gaea Data Folder; it contains the floating key and server endpoint details. 

For schools and labs, prefer workflows that let IT place the license material centrally (profile/GPO/MDM) rather than relying on students to activate interactively.

## Updates and version control

* If you use winget, expect occasional lag between website releases and the package repository. 
* For managed environments, treat updates like any other software: stage, validate against a representative machine pool (GPU drivers, plugins, policy restrictions), then roll out.

## Validation checklist

After deployment, validate these on at least one machine per "image" or policy group:

* Gaea launches without prompting for missing runtimes (offline networks should not attempt downloads). 
* License material is detected from the intended location and mode (`activate.lic`, `gaea2.lic`, or `floating.lic`). 
* If you depend on bridge integrations, confirm they work in your chosen installer mode (setup executable vs portable). 
