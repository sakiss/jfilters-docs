---
sidebar_position: 4
id: filtering-module
title: Create a Filtering Module
description: Creating and configuring the filtering module.
---

# Filtering Module
The filtering module, shows the filters to the front-end.

## Create
1. Go to `System > Manage > Site Modules` to open the module manager.
2. Press 'New'.
3. Select `JFilters Filters`.

## Setup
As with any module, publish it, put it in a module position and assign a menu item. More on that in [Joomla Modules Documentation](https://docs.joomla.org/Module).


### Loaded Filters
Select or exclude the filters that will be loaded in the module.
Use that setting if you want to restrict the module to load ONLY specific filters.

:::info
By leaving this setting to "All /Auto", will load all the filters and their options, relevant to the page's content.
:::
    
### Load Results using Ajax
Use ajax to update the results and the JFilters modules. This can make the user experience way faster, giving an "app like" feeling.

### Combine Filters with Smart Search
Enable that if you want the filters to refine the results of the smart search component.
    
### Results Page
The page that will be used to show the results of that filtering module.
Setting that properly affects the type of the loaded filters and the type/context of the returned results.

Save the module, and you are done.

![thumbs up](/img/thumb.svg) Well done! Visit your front-end to see the filters.