---
title: Fortress Server
uid: fortress
icon: server
order: 01
---

# Fortress Server for Offline Deployment

QuadSpinner’s **Fortress Server** is a locally deployable, self-hosted floating license solution designed for secure enterprise and offline environments. It enables centralized license allocation on a private network without relying on external activation services.

## When to use Fortress

Use Fortress when you need one or more of the following:

* **Offline / air-gapped deployment** (no internet access permitted)
* **Centralized floating licensing** across multiple workstations
* **Enterprise-controlled security** (local-only access, internal auditing, restricted endpoints)
* **Lab / classroom environments** where seats must be managed centrally

If you only need a single-machine offline license (non-floating), use an **Offline Activation File** instead (see the License Types page).

## Key concepts

* **Fortress Server**: The service that manages license allocation and session tracking.
* **Tenant**: An administrative grouping used to separate license pools (for example by team, project, or department).
* **Workstation license file (`floating.lic`)**: A small file placed on each client machine that tells Gaea which server to contact and which floating key to use.
* **Session / token**: A server-side record representing an active workstation allocation.
* **Heartbeat + grace period**: Clients periodically confirm activity; a grace window prevents momentary network interruptions from immediately releasing a license.

### How it works

1. An admin deploys Fortress on a machine reachable by client workstations (LAN/VPN).
2. The admin creates a workstation license file using the Fortress Console.
3. The workstation receives that file as `floating.lic` in the **Gaea Data Folder** (see @paths-and-storage).
4. When Gaea starts, it reads `floating.lic`, contacts Fortress, and requests a session.
5. While Gaea is running, it sends periodic heartbeats to keep the session active.
6. If heartbeats stop beyond the grace period, the session is released automatically.

### What gets installed

A typical deployment includes:

* **Fortress Server** (service/daemon)
* **Fortress Console** (admin UI/CLI used to create license files and manage allocations)
* **Workstation configuration** (distribution of `floating.lic`)

## Quick start

1. **Install and start Fortress Server** on a LAN-accessible machine.
2. **Confirm bind/interface**:
   * Ensure the server is listening on the NIC/IP that clients will reach (not loopback-only).
3. **Allow inbound network access** on the configured port:
   * Create OS firewall rules as needed.
4. In the **Fortress Console**, create a **Tenant** (if required by your setup).
5. Use **Create License File** to generate a workstation file.
6. Copy the generated file to each workstation’s **Gaea Data Folder** and rename it to `floating.lic`
7. Launch Gaea on a workstation and verify an allocation appears in **View Allocations**.

See @fortress-assign for the step-by-step walkthrough and screenshots.

### Networking and ports

* Workstations must be able to reach the server at `host:port` specified in `floating.lic`.
* DNS is optional; you can use a raw IP.
* Multi-NIC servers are supported, but mis-binding is a common setup issue.

Use **Network Diagnostics** to validate bind, DNS, and connectivity:

* See the Network Diagnostics page (and the screenshot flow) for expected outcomes and common fixes.

### Security notes

* Fortress is intended for **trusted internal networks**.
* Restrict access to the server port to known subnets where possible.
* Treat `floating.lic` as a deployment credential:
  * Distribute via standard IT tooling (MDM, GPO, software deployment, secure share).
  * Avoid posting it in shared/public locations.

## Related pages

* @fortress-assign (Assign Licenses / Create `floating.lic` / Manage allocations)
* @paths-and-storage (File locations for `floating.lic`, `token.lic`, logs, etc.)
* Network Diagnostics (Diagnosing reachability, DNS, bind/interface issues)
