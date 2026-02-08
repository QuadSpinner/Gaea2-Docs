---
title: Logs
uid: fortress-logs
icon: scroll
order: 08
---

# Using Fortress Server Logs

All actions, events, errors, and internal observations in the Fortress Server are logged for review. We recommend sending a zip of the log folder when requesting technical support from QuadSpinner as it will help diagnose the issue faster.

## Viewing the Current Log

To view logs, select `Logs` in the main menu.

![](/.data/ui/fortress-logs1.png)

Select `Logs (Tail)` to view the most recent 40 entries.

Select `Logs (entire)` to view the full log.

![](/.data/ui/fortress-logs2.png)

## Viewing Older Logs

The console will only show the current day's log. The log file changes at midnight every day. To see older logs, select `Open Log Directory`.

![](/.data/ui/fortress-logs-directory.png)

Each day's log is stored as an individual plain text file and a LiteDB database for structured access.

Logs are typically stored in: `C:\Users\<user>\AppData\Roaming\QuadSpinner\Fortress\`

Apart from machine names, logged in user names, and similar network connectivity information, the logs do not contain any personally identifiable information.