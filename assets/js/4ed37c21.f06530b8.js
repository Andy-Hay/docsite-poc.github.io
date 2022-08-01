"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[99836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},87872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={title:"RDB shredder configuration reference",date:"2021-12-01",sidebar_position:450},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/rdb-shredder-configuration-reference/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/rdb-shredder-configuration-reference/index",title:"RDB shredder configuration reference",description:"Shredder and loader use different configurations starting from 2.0.0. An example config for shredder can be found here.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/rdb-shredder-configuration-reference/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/rdb-shredder-configuration-reference",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/rdb-shredder-configuration-reference/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/rdb-shredder-configuration-reference/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:450,frontMatter:{title:"RDB shredder configuration reference",date:"2021-12-01",sidebar_position:450},sidebar:"tutorialSidebar",previous:{title:"RDB loader configuration reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/"},next:{title:"Upgrade Guides",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/"}},s={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Shredder and loader use different configurations starting from 2.0.0. An example config for shredder can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/2.0.0/config/shredder.batch.config.reference.hocon"},"here"),"."),(0,o.kt)("p",null,"This is a complete list of the options that can be configured"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"input"),(0,o.kt)("th",{parentName:"tr",align:null},"Required. S3 url the enriched archive. It must be populated separately with run=YYYY-MM-DD-hh-mm-ss directories."))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"output.path"),(0,o.kt)("td",{parentName:"tr",align:null},"Required. S3 url of the shredded output.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"output.compression"),(0,o.kt)("td",{parentName:"tr",align:null},'Optional. One of "NONE" or "GZIP". Default value GZIP.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"output.region"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional if it can be resolved with AWS region provider chain. AWS region of the S3 bucket.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queue.type"),(0,o.kt)("td",{parentName:"tr",align:null},"Required. Type of the queue. It can be either sqs or sns.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queue.queueName"),(0,o.kt)("td",{parentName:"tr",align:null},"Required if queue type is sqs. Name of the sqs queue.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queue.topicArn"),(0,o.kt)("td",{parentName:"tr",align:null},"Required if queue type is sns. ARN of sns topic.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queue.region"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional if it can be resolved with AWS region provider chain. AWS region of the sqs queue or sns topic.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formats.default"),(0,o.kt)("td",{parentName:"tr",align:null},"Required, either TSV or JSON. Data format produced by default by the shredder. TSV is recommended as it enables table autocreation, but requires Iglu Server to be available with known schemas (including Snowplow schemas). JSON does not require Iglu Server, but requires Redshift JSONPaths to be configured and does not support table autocreation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formats.tsv"),(0,o.kt)("td",{parentName:"tr",align:null},"Required, list of iglu uri, but can be set to empty list []. If default is set to JSON these list of schemas will still be shredded into TSV")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formats.json"),(0,o.kt)("td",{parentName:"tr",align:null},"Required, list of iglu uri, but can be set to empty list []. If default is set to TSV these list of schemas will still be shredded into JSON")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formats.skip"),(0,o.kt)("td",{parentName:"tr",align:null},"Required, list of iglu uri, but can be set to empty list []. Schemas for which loading can be skipped.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"monitoring.sentry.dsn"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. For tracking runtime exceptions.")))))}u.isMDXComponent=!0}}]);