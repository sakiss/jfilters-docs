---
sidebar_position: 4
id: filtering-module
title: Create a Filtering Module
---

# Filtering Module
The filtering module, provides the filters to the front-end.

## Create
1. Go to `System > Manage > Site Modules` to open the module manager.
2. Press 'New'.
3. Select "JFilters Filters".

## Setup
As with any module, publish it, put it in a module position and assign a menu item. More on that in [Joomla Modules Documentation](https://docs.joomla.org/Module).



1.  **Selected Filters**.
    The filters that will be loaded in the module. Use that setting if you want to restrict the module to load ONLY specific filters.
    
    :::info
    The module by default shows the filters and their options, relevant to the page's content.
    :::
    
2.  **Combine Filters with Smart Search**.
    Enable that if you want the filters to refine the results of the smart search component.
    
3. **Results Page**. The page that will be used to show the results of that filtering module.

4. **Context**. This defines the type of items that will be returned as results. It has meaning only if there are filters for different contexts (e.g. different components).

Save the module and it's finished.

![Docusaurus](/img/thumb.svg) Well done! Visit your front-end to see the filters.