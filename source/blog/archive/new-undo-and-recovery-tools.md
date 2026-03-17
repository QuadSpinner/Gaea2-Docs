---
title: New Undo and Recovery Tools
uid: new-undo-and-recovery-tools
modified: "2022-05-27T15:05:42Z"
---

*The new Undo and Recovery tools help you experiment, revert changes, explore different opportunities, and flex your creative muscles without facing unexpected crashes or loss of data.*

We have been keenly aware that many users were not satisfied with Gaea's undo/redo mechanism. Gaea 1.2 improved many things in this regard, but we heard you loud and clear that it needed to be improved further.

Gaea 1.3.1.3 ([currently in Bleeding Edge](blog.quadspinner.com/gaea-1-3-1-3-bleeding-edge/ )) adds a new set of tools to address these gaps.

# Standard Recovery

The "Standard Recovery" tools include undo/redo and their siblings - a set of new "memory" options.

The following functionality has been available for some time in the Property editor menu, but now they're more readily accessible for day-to-day use.

## Undo/Redo

The regular Undo/Redo actions have been rewritten with stability in mind. To counter the instability that Undo could create Gaea no longer creates an individual undo action for node property changes. Multiple property changes performed together are grouped into a single Undo unit. Try using the Revert and Remember tools below instead for a wider experimentation opportunity.

In previous versions, Gaea would try to retain the node's built cache, however, now it will readily clear the cache. This will force the undone node to be rebuilt but the little time sacrificed will improve stability.

## Revert Changes

The moment you select a node Gaea will quietly keep aside a copy of the settings as they exist. If you find that any new changes you make are not adequate and want to start over, just hit the Revert button and it will replace the current settings with the version it saved. Then you can experiment again.

![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_Bleeding_Edge_-1.3.1-_-Landscape._07-53-46-PM-1.png)As you make changes, the Revert button's tooltip will log each change for you to see. You can hover over it anytime to see exactly what changes you made.

Note, when you unselect the node or move to another node, the revert settings copy will be erased. When you select the node again, a new copy will be created of the settings.

## Remember State

The "state" behaves almost exactly like the copy of settings saved by the Revert function. However, instead of doing it automatically, the State button allows you to manually save and load the copy. 

![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_Bleeding_Edge_-1.3.1-_-Landscape._07-56-37-PM-1.png)The practical purpose of this feature is to help you try out different settings without losing what you may already have. You can think of it like your node's very own clipboard. Every single node automatically gets one.

When a state has been saved, the button will be popped out and will say "Remember". When you press it, a copy of your node's settings are saved. The button will depress and say "Release".

If and when you wish to go back to the old settings, you simply press Release and the button will pop out and remember the old settings.

You can right-click the button and select "Clear State" to make it forget the saved settings. This is especially useful if you have saved an old state and wish to replace it with a new one.

*Unlike the Revert button, going away to a different node will not forget the remembered state. However, the state is remembered only for a session. If you change files or close the application then it will forget the state.*

## Defaults

This is a very simple "Reset to Defaults" button, which is also available through the shortcut Ctrl + R. It simply resets all settings to the node's default.

You can use the Revert button to undo this action.

*Note, that you can reset a single setting to its default when you right-click it.*

# Disaster Recovery

Undo, Revert, and similar tools only deal with the expected. For the unexpected, you can rely on the enhanced autosave.

![](__GHOST_URL__/content/images/2022/05/QuadSpinner_Gaea_Bleeding_Edge_-1.3.1-_-Landscape._08-02-21-PM.png)Autosave has been made more sensitive. Any action that creates a significant change will automatically trigger an autosave. The new dropdown next to the Save button gives you quick access to recent autosaves. The reason for each autosave is also listed to make sure you pick the right autosave.

The Save button, when right-clicked, exposes options for a save reminder timer. Previously, this timer only triggered a visual alert in the form of flashing the save button when you have not saved the file for 5 minutes (or the amount of time selected in the menu). With Gaea 1.3.1, whenever that amount of time passes, Gaea will create an autosave. Even if you don't save the file after the visual alert goes off, Gaea will create an autosave every time the timer goes off.

---

Try out this new functionality in [Gaea 1.3.1.3 Bleeding Edge now](blog.quadspinner.com/gaea-1-3-1-3-bleeding-edge/ ). ☄️
