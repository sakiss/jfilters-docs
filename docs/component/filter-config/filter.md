---
sidebar_position: 1
title: Filter section
description: The filter's 'Filter' tab.
---

# Filter

Provides essential settings and information about the filter.

![JFilters Filter filter settings](/img/component/filter-filter.png)

### Display
How the filter will be displayed in the front-end. Based on the data type used by the filter, and it's parent field, you will see different display types available. E.g. 'Calendars' for the filters using dates.

### Root
A root filter is probably the most important filter.
It is the top-level filter from where the filtering, or the browsing experience starts.
It is not affected by the selections in the other filters and clears any existing selections when its own selection is changed.

:::tip
A common setup for a root filter, is to use a single-select display (e.g. links) and not have a *[clear](/component/filter-config/basic#show-clear) option*.
:::

:::tip
We suggest putting the root filters at the top of your filters list.
:::

### Status
A filter can get 3 statuses.
#### Published
It is loaded to the filtering module and can listen to incoming requests.
#### Listening
It is not loaded in the filtering module, but is "listening" to incoming requests and returns results.
You can use urls pointing to such filters, [inside your content](https://blue-coder.com/help/blog/using-clickable-custom-fields-and-tags-in-your-joomla-text) e.g. Pointing to an author's articles.
or call them implicitly (e.g. Use the category of a category blog page by the rest of your filters).

#### Unpublished
Such a filter is completely inactive.