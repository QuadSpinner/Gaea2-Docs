---
title: Assign Licenses
uid: fortress-assign
icon: toggle-on
order: 03
---

# Workstation License

Any workstation with Gaea installed will require a `floating.lic` file to authenticate and communicate with the server.

Use the `Create License File` option to generate a new file.

This is what the `floating.lic` file typically looks like.
```
FL-00000000-0000-0000-0000-000000000000
192.168.100.11:9000
```

See @paths-and-storage for folder locations.

## Creating a license file 

Select "Create a License File".

![](/.data/ui/fortress-create1.png)

Choose a Tenant.

![](/.data/ui/fortress-create2.png)

Choose the desired IP address or enter one manually. If you have multiple network cards, you will see all the IP addresses assigned to the current server.

![](/.data/ui/fortress-create3.png)

Choose the location to save the file (or enter to accept the default shown).

![](/.data/ui/fortress-create4.png)

It will usually be saved as `000000.lic` (or in the name of the Tenant's ID). Copy this file to the Gaea Data folder on any workstation and rename it to `floating.lic`. Gaea will detect the file and load both the key and server information from it.

### Heartbeat Length

The server uses a 1-minute heartbeat with a 5-minute grace period to allow for lost packets or temporary network issues.

Once a heartbeat is missed for 5 minutes, the license will be released. The administrator can also use the dashboard to kill an active license if it is stuck for any reason.

A local token is stored for duration of the run so `Gaea.exe`, `Gaea.Build.exe`, and Gaea plugins can all share the same license token and prevent over-allocation or other license issues.

## Viewing and Deallocating License Tokens

By default, the Fortress Console shows only the Tenants and does not auto-refresh to prevent resource-drain on the server.

![](/.data/ui/fortress-allocs.png)

Select `View Allocations` to see a live list of Allocated Licenses.

![](/.data/ui/fortress-allocs-kill.png)

To deallocate a license, there are two options. Once you choose the desired machine to deallocate, all sessions on that machine will be released.

![](/.data/ui/fortress-allocs-killing.png)

The first is a graceful option using `D` which sends a "exit gracefully" command to the Gaea instance then waits 10 seconds for the command to be accepted and executed.

The second is a brute force kill option using `K` which immediately deallocates the workstation.



