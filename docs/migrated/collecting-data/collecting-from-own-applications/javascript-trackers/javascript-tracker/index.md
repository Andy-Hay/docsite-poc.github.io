---
title: "JavaScript Tracker"
date: "2021-03-24"
sidebar_position: 200
---

The JavaScript Tracker supports both synchronous and asynchronous tags. We recommend the asynchronous tags in nearly all instances, as these do not slow down page load times.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
