"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[29594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const r={title:"Monitoring",date:"2021-10-04",sidebar_position:10},a=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring/index",id:"migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring/index",title:"Monitoring",description:"Enrich app has monitoring built in, to help the pipeline operator.",source:"@site/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring/index.md",sourceDirName:"migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring",slug:"/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:10,frontMatter:{title:"Monitoring",date:"2021-10-04",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"enrich-pubsub (GCP) and enrich-kinesis (AWS)",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/"},next:{title:"Configuration",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/"}},p={},l=[{value:"Statsd",id:"statsd",level:2},{value:"stdout",id:"stdout",level:2},{value:"Sentry",id:"sentry",level:2},{value:"Cloudwatch (for enrich-kinesis)",id:"cloudwatch-for-enrich-kinesis",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enrich app has monitoring built in, to help the pipeline operator."),(0,o.kt)("h2",{id:"statsd"},"Statsd",(0,o.kt)("a",{parentName:"h2",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/monitoring/#statsd"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/statsd/statsd"},"Statsd"),"\xa0is a daemon that aggregates and summarizes application metrics. It receives metrics sent by the application over UDP, and then periodically flushes the aggregated metrics to a\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/statsd/statsd/blob/master/docs/backend.md"},"pluggable storage backend"),"."),(0,o.kt)("p",null,"Enrich can periodically emit event-based metrics to a statsd daemon. Here is a string representation of the metrics it sends:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"snowplow.enrich.raw:42|c|#tag1:value1\nsnowplow.enrich.good:30|c|#tag1:value1\nsnowplow.enrich.bad:12|c|#tag1:value1\nsnowplow.enrich.latency:123.4|g|#tag1:value1\nsnowplow.enrich.invalid_enriched:0|c|#tag1:value1\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"raw"),": total number of raw collector payloads received."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"good"),": total number of good events successfully enriched."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bad"),": total number of failed events, e.g. due to schema violations, invalid collector payload, or an enrichment failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"latency"),": time difference between the collector timestamp and time the event is emitted to the output stream"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"invalid_enriched"),": number of enriched events that were not valid against ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/atomic/jsonschema/1-0-0"},"atomic")," schema")),(0,o.kt)("p",null,"Note, the count metrics (",(0,o.kt)("inlineCode",{parentName:"p"},"raw"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"good"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bad")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid_enriched"),") refer to the updated count since the previous metric was emitted. A collector payload can carry multiple events, so it is possible for ",(0,o.kt)("inlineCode",{parentName:"p"},"good")," to be larger than ",(0,o.kt)("inlineCode",{parentName:"p"},"raw"),"."),(0,o.kt)("p",null,"Statsd monitoring is configured by setting the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring.metrics.statsd"),"\xa0section in\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/"},"the hocon file"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"monitoring": {\n  "metrics": {\n    "hostname": "localhost"\n    "port": 8125\n    "tags": {\n      "tag1": "value1"\n      "tag2": "value2"\n    }\n    "prefix": "snowplow.enrich."\n    "period": "10 seconds"\n  }\n}\n')),(0,o.kt)("h2",{id:"stdout"},"stdout"),(0,o.kt)("p",null,"Above metrics can also be printed in the logs (with log level ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),")."),(0,o.kt)("p",null,"To do that, this section needs to appear in the configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"monitoring": {\n  "metrics": {\n    "stdout": {\n      "period": "1 minute"\n      "prefix": "snowplow.enrich."\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"sentry"},"Sentry",(0,o.kt)("a",{parentName:"h2",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/monitoring/#sentry"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sentry.io/"},"Sentry"),"\xa0is a popular error monitoring service, which helps developers diagnose and fix problems in an application. Enrich can send an error report to sentry whenever something unexpected happens when trying to enrich an event. The reasons for the error can then be explored in the sentry server\u2019s UI."),(0,o.kt)("p",null,"Sentry monitoring is configured by setting the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring.sentry.dsn"),"\xa0key in\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/"},"the hocon file"),"\xa0with the url of your sentry server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"monitoring": {\n  "dsn": "http://sentry.acme.com"\n}\n')),(0,o.kt)("h2",{id:"cloudwatch-for-enrich-kinesis"},"Cloudwatch (for enrich-kinesis)"),(0,o.kt)("p",null,"It's possible to send KCL and KPL metrics to Cloudwatch by adding this section to the config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"monitoring": {\n  "cloudwatch": true\n}\n')))}d.isMDXComponent=!0}}]);