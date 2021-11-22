---
sidebar_position: 1
title: Filter section
description: The filter's 'Filter' tab.
---

# Filter

Provides essential settings and information about the filter.

![JFilters Filter filter settings](/img/component/filter-filter.png)

### Display
How the filter will be displayed in the front-end.
### Root
A root filter is probably the most important filter.
It is the top-level filter from where the filtering, or the browsing experience starts.
It is not affected by the selections in the other filters and clears any selection, when it's selection changes.

:::tip
A common setup for a root filter, is to use a single-select display (e.g. links) and not have a *[clear](/component/filter-config/basic#show-clear) option*.
:::

:::tip
We suggest putting the root filters at the top of your filters list.
:::

### Status
A filter can get 3 statuses.
#### Published
A published filter is loaded to the filtering module and can listen to incoming requests.
#### Listening
A filter in that state is not loaded in the filtering module, but is listening to incoming requests and returns results.
You can use urls pointing to filters in that state, inside your content. E.g. Pointing to an author's articles.

:::tip
A url to a filter's value has this format: ```https://example.com/results-alias/filter-alias/value```
*The value has to be urlencoded if it uses [reserved characters](https://datatracker.ietf.org/doc/html/rfc3986#section-2.4).
:::
#### Unpublished
An unpublished filter is completely inactive.