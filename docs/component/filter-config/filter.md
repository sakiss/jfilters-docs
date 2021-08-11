---
sidebar_position: 1
title: Filter section
---

# Filter

Provides essential settings and information about the filter.

![Docusaurus](/img/component/filter-filter.png)

### Display
How the filter will be displayed in the front-end.
### Root
A root filter is probably the most important filter.
It is the top-level filter from where the filtering, or the browsing experience starts.
It is not affected by the selections in the other filters and clears any selection, when it's selection changes.

:::tip
A common setup for a root filter, is to use a single-select display (e.g. links) and not have a *[clear](/component/filter-config/basic#show-clear) option*.
:::
