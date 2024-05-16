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
The type of content that will be loaded in that page.

## Preset Filters
Define the page's items by presetting filters.

You can use that to create pages, based on the criteria/filters of your preference.

:::tip
If the `Preset Filters` setting is empty, our results page will be empty, but it will still load results after selecting filters (e.g. From the modules).
In that case, you better keep this menu item invisible in the front-end.
Our suggestion is to hide it using the `Link Type > Display in Menu` setting.
:::

## Primary Filter
If a primary filter is selected, that filter will use as an alias, that menu item's alias.
That means that the urls will be shorter and more specific to the site's content.

:::info
only [root filters](/component/filter-config/filter#root) can be used as *Primary Filters*.
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

## Results Sorting

###  Search Results Sort Field
The field based on which, the search results are sorted.

:::info
If there is a search query, the results are considered **search results**, no matter if there are filters selected.
:::

### Search Results Sort Direction
The direction of the sorting, for the search results.

### Filtering Results Sort Field
The field based on which, the filtering results are sorted.

:::info
This setting will be taken into account, only when no search query exists.
:::

### Filtering Results Sort Direction
The direction of the sorting, for the filtering results.






