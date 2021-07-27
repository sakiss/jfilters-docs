---
sidebar_position: 2
title: Filter Configuration
---

# Filter Configuration

The filter settings are divided in tabs. Follows an explanation of the settings found in each tab.

## Filter
Provides essential settings and information about the filter.

![Docusaurus](/img/component/filter-filter.png)

### Display
How the filter will be displayed in the front-end.
### Root
   A root filter is probably the most important filter. 
   It is the top-level filter from where the filtering, or the browsing experience starts.
   It is not affected by the selections in the other filters and clears any selection in the other filters, when it's selection changes.

:::tip
A common setup for a root filter, is to use a single-select display (e.g. links) and not have a *[clear](#show-clear) option*.
:::


## Basic
Provides the basic settings.
![Docusaurus](/img/component/filter-basic.png)

### Toggle State
The toggle state of the filter.
   
![Docusaurus](/img/component/filter-basic-collapsed.png)
*toggle state* = *collapsed*   

![Docusaurus](/img/component/filter-basic-expanded.png)
*toggle state* = *expanded*
   

:::info
When a user toggles a filter, the last set state will be stored in his/her browser's localstorage and will be used across the entire website and all his/her subsequent visits, **ignoring the filter's *toggle state* setting**.
:::


### Show Clear
Shows a *clear* link when there is a selection in the filter. That link clears any selection in the filter if clicked.

###  Show Counter
Shows a counter, beside each option, indicating the number of the returned results items, if selected.
![Docusaurus](/img/component/filter-basic-counter.png)
   
*Show Counter* = *Show*

### Scrollbar After
Sets a scrollbar when the filter exceeds certain height.

### Units
The units for the *Scrollbar After* setting.

![Docusaurus](/img/component/filter-basic-scrollbar-after.png)

*Filter with 'Scrollbar After' set to 200px*


## Tree
This tab provides settings for filters that have nested options (e.g. Categories and Tags).
![Docusaurus](/img/component/filter-tree.png)

### Parent Option
Sets the parent option, whose children nodes will be loaded in the filter.
:::info
This is setting is useful, especially when you have long lists of options, which are semantically diverse (e.g. semantically diverse categories).
:::

###  Tree Toggle State
If the tree will be shown as expanded or collapsed.
:::info
When an option is selected, that part of the tree is expanded no matter the value in this setting.
:::

###  Parent Nodes as Links
The parent options in a tree can be links (i.e. return results) or just toggle/expand their sub-tree.

## SEO
![Docusaurus](/img/component/filter-seo.png)

### Append Selections in URL Component
In which [url component](https://datatracker.ietf.org/doc/html/rfc3986#section-3), the selections will be appended.

**Path**, will append the selections in the path component.

e.g. `https://example.com/page/some-filter/some-value`


**Query**, will append the selections in the query (a.k.a. parameters) component.

e.g. `https://example.com/page?some-filter=some-value`

### Max Path Levels
This setting regards the nested/tree filters.
When an option is selected, defines the parent levels that will be appended in the urls.

Example of a filter that shows types of wines:
```
   - Wines
      - Red
         - Merlot
         - Sovignon
```
Lets say that the user selects **"Merlot"**.

With 'Max Path Levels' set to 2, the url will become:
`https://example.com/page/type/red/merlot`

With 'Max Path Levels' set to 3, the url will become:
`https://example.com/page/type/wines/red/merlot`

###  Show Selections in Page Title
Updates the page's title with the filter selections.

### Follow Links by Search Engines
This adds a [nofollow](https://developers.google.com/search/docs/advanced/guidelines/qualify-outbound-links?hl=en) `rel` attribute to your links.

:::info
To prevent Google from indexing your results page, [use the **noindex** robots rule](https://help.joomla.org/proxy?keyref=Help40:Menu_Item:_New_Item&lang=en#Metadata), in the results menu item.
:::

### Detect and Set Canonical Tag
If enabled, the component will check if there are pages with similar content and will add a [canonical tag](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls) pointing to them.
:::info
Canonical tags to other pages, will be added only if those pages have search engine friendly urls.
:::