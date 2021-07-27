---
sidebar_position: 2
title: Filter Configuration
---

# Filter Configuration

The filter settings are divided in tabs. Follows an explanation of the settings found in each tab.

## Filter
Provides essential settings and information about the filter.

![Docusaurus](/img/component/filter-filter.png)

1. ### Display
   How the filter will be displayed in the front-end.
2. ### Root
   A root filter is probably the most important filter. 
   It is the top-level filter from where the filtering, or the browsing of the content starts.
   It is not affected by the selections in the other filters and clears any selection in the other filters, when it's selection changes.

:::tip
A common setup for a root filter, is to use a single-select display (e.g. links) and not have a *[clear](#show-clear) option*.
:::


## Basic
Provides the basic settings.
![Docusaurus](/img/component/filter-basic.png)

1. ### Toggle State 
   The toggle state of the filter.
   
   ![Docusaurus](/img/component/filter-basic-collapsed.png)
   *toggle state* = *collapsed*   

   ![Docusaurus](/img/component/filter-basic-expanded.png)
   *toggle state* = *expanded*
   

:::info
If a user toggles a filter's state, the last set state will be stored in his/her browser's localstorage and will be used across the entire website and all his/her subsequent visits, **ignoring the filter's *toggle state* setting**.
:::


2. ### Show Clear
   Shows a *clear* link when there is a selection in the filter.

3. ###  Show Counter
Shows a counter, beside each option, indicating the number of the returned results items, if selected.
![Docusaurus](/img/component/filter-basic-counter.png)
   
*Show Counter* = *Show*

4. ### Scrollbar After
Sets a scrollbar when the filter exceeds certain height.

5. ### Units
The units for the *Scrollbar After* setting.
