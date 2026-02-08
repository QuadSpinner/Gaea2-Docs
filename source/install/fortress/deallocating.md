---
title: Deallocate Licenses
uid: fortress-deallocate
icon: toggle-off
order: 04
---

# Viewing and Deallocating License Tokens

By default, the Fortress Console shows only the Tenants and does not auto-refresh to prevent resource-drain on the server.

![](/.data/ui/fortress-allocs.png)

Select `View Allocations` to see a live list of Allocated Licenses.

![](/.data/ui/fortress-allocs-kill.png)

To deallocate a license, there are two options. Once you choose the desired machine to deallocate, all sessions on that machine will be released.

![](/.data/ui/fortress-allocs-killing.png)

The first is a graceful option using `D` which sends a "exit gracefully" command to the Gaea instance then waits 10 seconds for the command to be accepted and executed.

The second is a brute force kill option using `K` which immediately deallocates the workstation.



