---
sidebar_position: 3
id: component-first-visit
title: Visit the Component
description: Exploring the 'JFilters' component on the 1st visit.
---

# The JFilters component

## What it does
The component's main responsibilities are:
1. Generates the filters from the Joomla cms.
2. Provides an interface for the filters' configuration.
3. Provides the filters to the front-end.
4. Performs the filtering and return results.

## What to check on 1st visit

### Alert Warnings
If you visit the JFilters component for the 1st time, you may get some warning messages at the top. 
Each warning message, will come with a call-to-action button. Please press those buttons to resolve the mentioned issues.

![JFilters component warnings](/img/getting-started/component-warnings.png)

:::note
The warnings should be resolved and go away, for the extension to work properly.
:::

### Generating Filters
The component will, auto-generate the filters and set them as unpublished by default.

In case you wonder why you see some filters with the same name, more than once. 
It is because it generates a filter for each installed language, when Joomla is setup as multi-lingual.

### Publish Filters
Publish the filters you need to use, and we are almost ready to go.

:::info
We suggest keeping a "Category" filter to *published* or *listening* state. Also, make sure that this "Category" filter does not have a [Parent Option](/component/filter-config/tree#parent-option) that excludes the categories used for filtering.
Why? Only the filters in *published* or *listening* state are listening to the incoming HTTP requests. If you want your filters to be relevant to a content category page, a category filter should listen to incoming requests.
:::

