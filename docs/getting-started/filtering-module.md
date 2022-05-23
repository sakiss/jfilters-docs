---
sidebar_position: 4
id: filtering-module
title: Create a Filtering Module
description: Creating and configuring the filtering module.
---

# Filtering Module
The filtering module, provides the filters to the front-end.

## Create
1. Go to `System > Manage > Site Modules` to open the module manager.
2. Press 'New'.
3. Select "JFilters Filters".

## Setup
As with any module, publish it, put it in a module position and assign a menu item. More on that in [Joomla Modules Documentation](https://docs.joomla.org/Module).



1. **Loaded Filters**.
    Select or exclude the filters that will be loaded in the module. 
    Use that setting if you want to restrict the module to load ONLY specific filters.
    
    :::info
    By leaving this setting to "All /Auto", will load all the filters and their options, relevant to the page's content.
    :::
    
2. **Update using Ajax**. The module uses ajax to update the results after every selection. This can make the user experience way faster, giving an "app like" feeling.

3. **Combine Filters with Smart Search**.
    Enable that if you want the filters to refine the results of the smart search component.
    
4. **Results Page**. The page that will be used to show the results of that filtering module.

5. **Context**. This defines the type of items that will be returned as results. It has meaning only if there are filters for different contexts (e.g. different components).

Save the module, and we are done.

![thumbs up](/img/thumb.svg) Well done! Visit your front-end to see the filters.