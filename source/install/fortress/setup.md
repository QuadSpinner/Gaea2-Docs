---
title: Server Setup
uid: fortress-setup
icon: floppy-disk-circle-arrow-right
order: 02
---

# Installing and Deploying the Fortress Server

The Fortress Server is very easily to deploy.

![](/.data/ui/fortress-tenants.png)

## Requirements

- Windows 10 or higher.
- 4GB of RAM.
- TCP access across the LAN to all workstations that need licensing.
- 100MB Hard Drive space.

You can run this on a Virtual Machine, however the Ethernet 

:::note
A Linux version is in-development. There is no specific ETA at the moment.
:::

## Setting up the Server

The Server consists of only 3 files:

```
C:\LicenseServer
├── Tenants\
│   └── 00000000.lic
├── Fortress.Console.exe
└── server.json
```

### Tenants

A Tenant is a master license file that control the number of workstations allowed under a single license. A single Server can host multiple Tenants as long as they are within the same LAN.

You will be provided with a `00000000.lic` tenant file upon purchase. The Tenant file is node-locked to your server's @hardware-thumbprint.

### Server Configuration

If the `server.json` is file is not present, `Fortress.Console.exe` will generate one on first run. By default, it has the following settings.

```
{
  "Port": 9000,
  "MaxConcurrentClients": 16,
  "TokenIdleTimeoutSeconds": 600,
  "RateLimitPerIPSeconds": 1
}
```

In most cases, you only need to change the `Port` setting, if needed. Ensure this port is allowed through firewalls for TCP/IP communication.

### Setup Workstations

See @fortress-assign for instructions on creating a license file which can be added to any Gaea installation on the network.


## Launch at Startup

The Fortress Server cannot be run as a Windows Service, however you can create a Scheduled Task to ensure that it runs on startup, and recovers in case of a forced reboot, system update, etc.

Create the following PowerShell script. Rename the `$exe` (full path of the console exe) and `$work` (working directory) variables, and save the script as `startup.ps1` then execute it from PowerShell once. This will setup the task.

```
$exe  = "C:\LicenseServer\Fortress.Console.exe"
$work = "C:\LicenseServer"

$action  = New-ScheduledTaskAction -Execute $exe -WorkingDirectory $work
$trigger = New-ScheduledTaskTrigger -AtStartup
$settings = New-ScheduledTaskSettingsSet `
  -RestartCount 999 `
  -RestartInterval (New-TimeSpan -Minutes 1) `
  -ExecutionTimeLimit (New-TimeSpan -Days 3650) `
  -MultipleInstances IgnoreNew `
  -StartWhenAvailable

Register-ScheduledTask `
  -TaskName "LicenseServer" `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -User "SYSTEM" `
  -RunLevel Highest `
  -Force
```


:::warning
It is recommended that you do not run the server as Admin unless absolutely required.
:::