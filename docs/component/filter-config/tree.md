---
sidebar_position: 3
title: Tree section
description: The filter's 'Tree' tab.
---

# Tree

This tab provides settings for filters that have nested options (e.g. Categories and Tags).

![JFilters Filter Tree settings](/img/component/filter-tree.png)

### Parent Option
Sets the parent option, whose children nodes will be loaded in the filter.
:::info
This setting is useful, especially when you have long lists of options, which are semantically diverse (e.g. semantically diverse categories).
:::

###  Tree Toggle State
If the tree will be shown as expanded or collapsed.
:::info
When an option is selected, that part of the tree is expanded no matter the value in this setting.
:::

###  Parent Nodes as Links
The parent options in a tree can be links (i.e., return results) or just toggle/expand their sub-tree.

### Show sub-node contents on parent node selection
Returns the contents (and the filters) of the sub-nodes (e.g., sub-categories) when  a parent node is selected.

![JFilters parent categories empty](/img/component/filter-parent_categories_empty.png)
*Show sub-node contents on parent node selection* = *No*

![JFilters parent categories include sub-categories](/img/component/filter-parent_categories_inlude_subs.png)
*Show sub-node contents on parent node selection* = *Yes*