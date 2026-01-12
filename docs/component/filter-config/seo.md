---
sidebar_position: 4
title: SEO section
description: The filter's 'SEO' tab.
---

# SEO

SEO settings for that filter.

![JFilters Filter SEO settings](/img/component/filter-seo.png)

### Append Selections in URL Component
In which [url component](https://datatracker.ietf.org/doc/html/rfc3986#section-3), the selections will be appended.

**Path**, will append the selections in the path component.

e.g. `https://example.com/page/some-filter/some-value`


**Query**, will append the selections in the query (a.k.a. parameters) component.

e.g. `https://example.com/page?some-filter=some-value`

### Max Path Levels
This setting regards the nested/tree filters.
When an option is selected, defines the parent levels that will be appended in the url path.

Example of a filter that shows types of wines:
```
   - Wines
      - Red
         - Merlot
         - Sovignon
```
Let's say that the user selects **"Merlot"**.

With 'Max Path Levels' set to 2, the url will become:
`https://example.com/page/type/red/merlot`

With 'Max Path Levels' set to 3, the url will become:
`https://example.com/page/type/wines/red/merlot`

###  Show Selections in Page Title
Updates the page's title with the filter selections.

### Hide Links from Bots
Obfuscate the filtering links to prevent bots from following them.

:::note
The filtering module can generate a lot of links, which can put your server in a heavy load, if followed and crawled by bots.
:::

:::info
Links will be hidden also from search engine bots/crawlers. We suggest keeping this option disabled for your `root` filters.
:::

### Follow Links by Search Engines
This adds a [nofollow](https://developers.google.com/search/docs/advanced/guidelines/qualify-outbound-links?hl=en) `rel` attribute to the links.

:::info
To prevent Google from indexing your results page, [use the **noindex** robots rule](https://help.joomla.org/proxy?keyref=Help40:Menu_Item:_New_Item&lang=en#Metadata), in the results menu item.
:::

### Detect and Set Canonical Tag
If enabled, the component will add [canonical tag](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls) to your JFilters pages.
Canonical tags can point either to Joomla pages with identical content (e.g., Category Blog pages) or to JFilters pages where essential filters are used (e.g., Root Filters or Preset Filters).
:::info
Canonical tags to other pages, will be added only if those pages have search engine friendly urls.
:::