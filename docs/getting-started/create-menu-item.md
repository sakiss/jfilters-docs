---
sidebar_position: 4
title: Create a menu item for the results
---

Go to `Menus` select your menu and press the "New" button.

As "Menu Item Type" select `JFilters > Results`.

As *Alias*, we suggest setting something that is relevant to your content.  
e.g. If the site (or the used filters) are about wines, you can set *'wines'* as alias. 

We will explain the settings under the **Options** tab, as the other are common settings for all the menu items in Joomla.

![JFilters menu settings](/img/getting-started/menu-options.png)

## Context
The type of content (i.e. Items) that will be loaded in that page.

## Preset Filters
Define that page's content by presetting filters. Usually, this is the content that you want your users to filter.

:::info
The *Preset Filters* cannot be cleared/removed from the page, even if you try that through the filtering module.
:::

:::tip
If the `Preset Filters` setting is empty, the results page will be empty, and it will only show results, after selecting filters in the front-end (e.g. From the filtering modules).
In that case, you better keep this menu item invisible in the front-end.
Our suggestion is to hide it using the `Link Type > Display in Menu` setting.
:::

## Primary Filter
If a primary filter is selected, that filter will use as an alias, that menu item's alias.
That means that the urls will be shorter and more specific to the site's content.\
Example: if you have a menu item alias `wines`, and you select `merlot` from your "Category" filter, you can have the following outcome:\
a. Without setting the "Category" as a *Primary Filter* the url will be:
`https://example.com/wines/category/merlot` \
b. After setting the "Category" as a *Primary Filter* the url will be: `https://example.com/wines/merlot`

:::info
only [root filters](/component/filter-config/filter#root) can be used as *Primary Filters*.
:::

## Show Sorting Fields
Displays a drop-down with the available sorting options in the front-end.

## Sorting Rules
This feature allows for dynamic sorting of the results, based on various criteria.
:::info
By default, the first applicable sorting rule is used, regardless of how many rules are created, unless the user selects a sorting field in the front-end.
If no *Sorting Rules* set, the default will be used ("Title Ascending" for filtering and "Relevance Descending" for search).
:::

A rule is validated based on the following criteria:
### Use On Search 
We have a search when there is a search query. I.e. When filtering the *Smart Search* results.
### Use on Filtering
Every other case (i.e. when there is no search query), applies here.

### Apply When
Conditions can be set, based on the page's filters (i.e. content). By setting conditions, different *Sorting Fields* can be used, per result set.\
For example if you have a website about *Books* and *Movies*, you can have different sorting fields for the *Books* and different for the *Movies*.
This is very handy when your website has diverse content,

####  Page's Filters
Set the operator, of the condition.
##### Contain
The page's filters should *contain* at least 1 of the filters set in the [Filters](#filters) field.
##### Not Contain
The page's filters should NOT *contain* any of the filters set in the [Filters](#filters) field.
##### Filters
The filters that will be compared against the page's set filters.

:::tip
If you set at least one rule, the hardcoded defaults will be ignored and yours will be used instead. \
We suggest setting at least one rule for [Use on Search](#use-on-search). The suggested *Sorting Field* for that is *"Relevance Descending"* .
:::

## Results Display

:::info
The following settings exist also in the Smart Search's menu item, since both JFilters and the Smart Search use the same layout for showing the results.
:::

### Result Taxonomy
Shows meta-data like: *type*, *author*, *category* and *language* to the result items.

### Result Description
Shows a short description to the result items.

### Result Image
Shows an image to the result items.

### Image Class
We can set a class to the image.
E.g. `float-start`, `float-end`, to position the image.

###  Linked Image
Indicates if the image is a link that leads to the result item.

### Description Length
Length of the *Result Description*.

###  Result Date
The creation date of the result item (e.g. an article).

###  Result URL
The url of the result item.
