---
sidebar_position: 5
title: Advanced section
description: The filter's 'Advanced' tab.
---
# Advanced
### Caching
![JFilters Filter 'Caching' setting](/img/component/caching.png)
By enabling it, the filter's options/values will be stored and fetched from the cache, instead of querying the database.
This can offer a significant performance boots for large websites.
:::note
For that to work, the Joomla's **"System Cache"**, should be enabled from the Global Configuration.
:::
:::info
This setting is currently available to "root" filters.
:::
### Cache Time (minutes)
The time in minutes that the filter cache will remain valid. Set this, based on the frequency you make changes that affect the filter.

### Show If Selected
By using that setting, we can display a filter, only when there is a selection in other filter/s.

For example, in a page that is not a category blog page, we may see all the published filters. Those filters can refer to different contexts (e.g. some for products and others for animals).
Would be sane to keep the 'category` filter visible and load other filters, only after a category is selected.  
![JFilters Filter 'Show If Selected' setting](/img/component/show_if_selected.png)  
This way our filters will be relevant to the selected category.  
![JFilters filters conditional display](/img/component/filter_conditional_display.gif)

