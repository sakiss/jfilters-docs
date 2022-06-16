---
sidebar_position: 3
id: component-first-visit
title: Visit the Component
description: Exploring the 'JFilters' component on the 1st visit.
---

# The JFilters component

## What to check on 1st visit

### Alert Messages
If you visit the JFilters component for the 1st time, you may get some alert messages. 
Each message, will come with a call-to-action button. Please press those buttons to finish the setup.

![JFilters component warnings](/img/getting-started/component-warnings.png)

:::note
The alerts should be resolved and go away, for the extension to work properly.
:::

### Generating Filters
The component will, auto-generate the filters and set them as unpublished by default.

If your site is multilingual you may see filters with the same name, more than once.
It is because it generates a filter for each installed language.

### Publish Filters
Publish the filters you need to use, and we are almost ready to go.

:::info
We suggest keeping a "Category" filter to a *published* or a *listening* state. Also, make sure that this "Category" filter does not have a [Parent Option](/component/filter-config/tree#parent-option) that excludes the categories used for filtering.
Why? Only the filters in *published* or *listening* state are listening to the incoming HTTP requests. To have filters relevant to the content of your category pages, a category filter should listen to incoming requests.
:::

