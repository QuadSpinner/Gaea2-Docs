---
title: Data Folder
uid: data-folder
order: 04
---

The anatomy of the Gaea Data Folder.

| Path             | Description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| `Benchmark.json` | CPU and GPU Benchmark Speeds                                                             |
| `gaea2.lic`      | License File (see Install > License Management > License Types)                          |
| `hardware.nfo`   | Hardware configuration details used for diagnostics                                      |
| `Autosaves/`     | Autosave data                                                                            |
| `Cache/`         | Local cache folder for temporary page files and other artefacts. Can be deleted anytime. |
| `Logs/`          | All diagnostic and execution logs.                                                       |
| `Macros/`        | Storage for Macros.*                                                                     |
| `Presets/`       | Storage for Presets.*                                                                    |
| `Settings/`      | Gaea settings, preferences, and more.                                                    |
| `Thumbnails/`    | Central thumbnail repository, when enabled via Options.                                  |
| `Updates/`       | Update Cache. Delete to save space.                                                      |

## Autosaves/

| Path                                                     | Description                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `canyons_2026-01-28_00-19-30.terrain`          | A typical file's autosave copy.                                                |
| `canyons_2026-01-28_00-19-30.terrain.reason`   | The reason why this file was autosaved. Plain text file.                       |
| `DISASTER_RECOVERY__2026-01-29.terrain`        | Disaster recovery file when a fatal crash happens.                             |
| `DISASTER_RECOVERY__2026-01-29.terrain.reason` | Details, when available, for the disaster recovery copy.                       |
| `Recovery.terrain`                             | Precautionary recovery file copy of current file.                              |
| `Recovery2025-12-27_03-18-34.terrain`          | Precautionary recovery file copy when opening a file made in an older version. |

## Logs/

| Path                                    | Description                                                                 |
| --------------------------------------- | --------------------------------------------------------------------------- |
| `2025-12-31_05-40-41-SWARM.txt`    | SWARM Log output.                                                           |
| `2025-12-31_23-36-20.txt`          | Normal Log output.                                                          |
| `2025-12-31_23-36-46--VERBOSE.txt` | VERBOSE Log output when enabled via options, or if Gaea deems it necessary. |
| `CRASH_2026-01-29_22-45-41.txt`    | Crash Log details.                                                          |
| `Devices.txt`                      | CPU and GPU Devices that were loaded in the most recent session.            |

## Settings/

| Path                           | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `gaea-super.mru`      | A full list of all files ever opened in Gaea.                                   |
| `gaea-tor.mru`        | List of recently opened files.                                                  |
| `locations.mru`       | Internal list of recently used locations.                                       |
| `Preferences.options` | Gaea Build Engine preferences.*                                                 |
| `usage.stats`         | Usage statistics of nodes and connections used to power the Predictive System.* |
| `User.options`        | User Interface and Workspace preferences.*                                      |
| `whatsnew.dat`        | Version mark denoting the most recently installed version.                      |

## Updates/

| Path                       | Description                                     |
| -------------------------- | ----------------------------------------------- |
| `Gaea-2.2.8.0.exe` | Copy of an update installer downloaded by Gaea. |

---

```txt
C:\Users\<user>\AppData\Roaming\QuadSpinner\Gaea\2.0\
├── Benchmark.json
├── gaea2.lic*
├── hardware.nfo
├── Autosaves
│   ├── canyons_2026-01-28_00-19-30.terrain
│   ├── canyons_2026-01-28_00-19-30.terrain.reason
│   ├── DISASTER_RECOVERY__2026-01-29.terrain
│   ├── DISASTER_RECOVERY__2026-01-29.terrain.reason
│   ├── Recovery.terrain
│   ├── Recovery2025-12-27_03-18-34.terrain
├── Cache
├── Logs
│   ├── 2025-12-31_05-40-41-SWARM.txt
│   ├── 2025-12-31_23-36-20.txt
│   ├── 2025-12-31_23-36-46--VERBOSE.txt
│   ├── CRASH_2026-01-29_22-45-41.txt
│   └── Devices.txt
├── Macros*
├── Presets*
├── Settings
│   ├── gaea-super.mru*
│   ├── gaea-tor.mru*
│   ├── locations.mru
│   ├── Preferences.options*
│   ├── usage.stats*
│   ├── User.options*
│   └── whatsnew.dat
├── Thumbnails
└── Updates
    └── Gaea-2.2.8.0.exe
```

`* -- these files or folders may be worth backing up`
