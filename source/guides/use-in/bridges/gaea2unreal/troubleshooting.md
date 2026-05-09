---
title: Troubleshooting
uid: troubleshooting-ue
order: 99
---

# Common Scenarios

## The plugin is not visible in Unreal

Make sure you have installed to `\Engine\Plugins\GaeaUnrealTools` or `\PROJECT\Plugins\GaeaUnrealTools`. It is important that the plugin folder be called `GaeaUnrealTools` or some important file links may not work.

## World Partition import is slow

World Partition Import can be slow, even in vanilla Unreal Engine, dependin on your settings and terrain details.

To check whether the slowdown is caused by Gaea2Unreal, try importing the same terrain using Unreal's standard World Partition import without Gaea2Unreal. If that import is also slow, the issue is likely with the import process itself rather than the plugin.

## Why don't you support the latest version of Unreal Engine?

We do our best to keep it updated alongside Unreal Engine releases, but Unreal updates can sometimes introduce breaking changes and move faster than we can immediately match.

For that reason, we also provide the full source code at no cost, so anyone who needs an urgent fix can make changes right away instead of waiting on our update cycle.