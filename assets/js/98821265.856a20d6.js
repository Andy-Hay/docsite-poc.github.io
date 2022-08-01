"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[13635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),f=o,g=m["".concat(d,".").concat(f)]||m[f]||c[f]||n;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={title:"Loading transformed data",date:"2022-04-05",sidebar_position:20},i=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/index",title:"Loading transformed data",description:"For a high-level overview of the RDB Loader architecture, of which the loader is a part, see RDB Loader.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:20,frontMatter:{title:"Loading transformed data",date:"2022-04-05",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"RDB Transformer 3.0.x",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/rdb-transformer-3-0-0/"},next:{title:"Redshift loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/"}},d={},l=[],p={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For a high-level overview of the RDB Loader architecture, of which the loader is a part, see ",(0,o.kt)("a",{parentName:"em",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/"},"RDB Loader"),".")),(0,o.kt)("p",null,"The loader applications are specialised to a specific storage target. Each one performs 3 key tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consume messages from SQS / SNS to discover information about transformed data: where it is stored and what it looks like."),(0,o.kt)("li",{parentName:"ul"},"Use the information from the message to determine if any changes to the target table(s) are required, eg to add a column for a new event field. If required, submit the appropriate SQL statement for execution by the storage target."),(0,o.kt)("li",{parentName:"ul"},"Prepare and submit for execution the appropriate SQL ",(0,o.kt)("inlineCode",{parentName:"li"},"COPY")," statement.")),(0,o.kt)("p",null,"For loading into ",(0,o.kt)("strong",{parentName:"p"},"Redshift"),", use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/"},"Redshift loader"),". This loads ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/#shredded-data"},"shredded data")," into multiple Redshift tables."),(0,o.kt)("p",null,"For loading into ",(0,o.kt)("strong",{parentName:"p"},"Snowflake"),", use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/"},"Snowflake loader"),". This loads ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/#wide-row-format"},"wide row JSON format data")," into a single Snowflake table. (This is not to be confused with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-snowflake-loader"},"Snowplow Snowflake Loader"),", which is a completely separate application, not part of the RDB Loader architecture. In the long run, ",(0,o.kt)("inlineCode",{parentName:"p"},"snowplow-snowflake-loader")," will be phased out in favour of RDB Loader.)"),(0,o.kt)("p",null,"For loading into ",(0,o.kt)("strong",{parentName:"p"},"Databricks"),", use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader/"},"Databricks loader"),". This loads ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/#wide-row-format"},"wide row Parquet format data")," into a single Databricks table."))}c.isMDXComponent=!0}}]);