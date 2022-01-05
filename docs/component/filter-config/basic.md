---
sidebar_position: 2
title: Basic section
description: The filter's 'Basic' tab.
---

# Basic

Provides the basic settings.

![JFilters Filter Basic](/img/component/filter-basic.png)

### Toggle State
The toggle state of the filter.

![JFilters Filter collapsed](/img/component/filter-basic-collapsed.png)
*toggle state* = *collapsed*

![JFilters Filter expanded](/img/component/filter-basic-expanded.png)
*toggle state* = *expanded*


:::info
When a user toggles a filter, the set state will be stored in his/her browser's sessionStorage and will be used across the entire website in the current session, **ignoring the filter's *toggle state* setting**.
:::

### Sort Options By
Defines how the filter's options will be sorted.

![JFilters Filter order by label](/img/component/filter-basic-order_by_label.png)

*Sort Options By* = *Label Alphabetically ASC*

![JFilters Filter order by counter](/img/component/filter-basic-order_by_counter.png)

*Sort Options By* = *Number of Results DESC*

### Sorting Direction
The sorting direction (Ascending or Descending).

### Show Clear
Shows a *clear* link when there is a selection in the filter. That link clears any selection in the filter if clicked.

###  Show Counter
Shows a counter, beside each option, indicating the number of the returned results.

![JFilters Filter counter](/img/component/filter-basic-counter.png)

*Show Counter* = *Show*

### Scrollbar After
Sets a scrollbar when the filter exceeds the set height.

### Units
The units for the *Scrollbar After* setting.

![JFilters Filter scrollbar](/img/component/filter-basic-scrollbar-after.png)

*Filter with 'Scrollbar After' set to 200px*