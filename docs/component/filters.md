---
sidebar_position: 1
title: Filters
description: Explanation of the task buttons, in the component's filters view.
---

# Filters

## Synchronize
Pressing the *"Synchronize"* button, will synchronize the filters with the Joomla CMS, deleting orphan filters and generating new.

![synchronize button](/img/component/synchronize.png)

For example if you created new "Custom Fields", filters will be generated for them. If a "Custom Field" is deleted, the respective filter will be deleted.
If a new content language is installed and there are categories for that language, your will see new a new category filter for that language.

:::info
The synchronization will not change the setup of your existing filters.
:::

## Re-Generate
Pressing that button, will delete all your existing filters and generate new filters from your system.

![re-generate button](/img/component/re-generate.png)

:::caution
Your existing filters will be deleted.
:::