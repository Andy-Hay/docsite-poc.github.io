"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[48953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),m=r,g=h["".concat(s,".").concat(m)]||h[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"RDB loader monitoring",date:"2021-09-29",sidebar_position:350},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring/index",title:"RDB loader monitoring",description:"The RDB loader has several types of monitoring built in, to help the pipeline operator: folder monitoring, warehouse health checks, Statsd metrics, Sentry alerts, and Snowplow tracking.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:350,frontMatter:{title:"RDB loader monitoring",date:"2021-09-29",sidebar_position:350},sidebar:"tutorialSidebar",previous:{title:"Run the RDB loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/"},next:{title:"RDB loader configuration reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/"}},s={},d=[{value:"Webhook alerts",id:"webhook-alerts",level:2},{value:"Folder monitoring",id:"folder-monitoring",level:2},{value:"Warehouse Health Check",id:"warehouse-health-check",level:2},{value:"Statsd",id:"statsd",level:2},{value:"Sentry",id:"sentry",level:2},{value:"Snowplow Tracking",id:"snowplow-tracking",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The RDB loader has several types of monitoring built in, to help the pipeline operator: folder monitoring, warehouse health checks, Statsd metrics, Sentry alerts, and Snowplow tracking."),(0,r.kt)("h2",{id:"webhook-alerts"},"Webhook alerts"),(0,r.kt)("p",null,"The RDB loader can ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," an http webhook to a configurable uri whenever there is an issue which needs investigation by the pipeline operator. The webhook payload conforms to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.monitoring.batch/alert/jsonschema/1-0-0"},"the alert json schema")," in Iglu Central."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "application": "1.2.0",\n  "folder": "s3://mybucket/shredded/run=2021-09-10-13-41-27",\n  "severity": "WARNING",\n  "message": "Unloaded batch",\n  "tags": {\n    "tag1": "value1",\n  }\n}\n')),(0,r.kt)("p",null,"You can configure where the webhook is sent by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.webhook")," section in ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/configuration-reference/"},"the hocon file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "webhook": {\n    "endpoint": "http://example.com/receiver"\n    "tags": {\n      "tag1": "value1"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"folder-monitoring"},"Folder monitoring"),(0,r.kt)("p",null,"A webhook alert is sent when the RDB loader identifies inconsistencies between the shredded output in S3 and the data in the warehouse:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Checks if all folders in S3 have a ",(0,r.kt)("inlineCode",{parentName:"li"},"shredding_complete.json")," file inside. A missing json file suggests the shredder failed to complete this step, and so manual intervention is needed to remove the folder in S3."),(0,r.kt)("li",{parentName:"ol"},"Checks all folders in S3 are listed in the warehouse manifest table. If a folder is missing from the table, it suggests the loader has previously tried and failed to load the batch. Manual intervention is needed to resend the ",(0,r.kt)("inlineCode",{parentName:"li"},"shredding_complete.json")," message via SQS to trigger re-loading the folder.")),(0,r.kt)("p",null,"Folder monitoring is configured by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.folders")," section in ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/configuration-reference/"},"the hocon file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "folders": {\n    "staging": "s3://mybucket/loader/logs"\n    "period": "1 hour"\n  }\n}\n')),(0,r.kt)("h2",{id:"warehouse-health-check"},"Warehouse Health Check"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Added in version 2.1.0.")," The RDB loader can send an alert if the warehouse does not respond to a periodic ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT 1")," statement. For each failed health check, a webhook is ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"ed to a configurable url. The webhook payload conforms to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.monitoring.batch/alert/jsonschema/1-0-0"},"the alert json schema")," in Iglu Central."),(0,r.kt)("p",null,"The health check is configured by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.healthCheck")," section in ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/configuration-reference/"},"the hocon file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "healthCheck": {\n    "frequency": "20 minutes"\n    "timeout": "15 seconds"\n  }\n}\n')),(0,r.kt)("h2",{id:"statsd"},"Statsd"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/statsd/statsd"},"Statsd")," is a daemon that aggregates and summarizes application metrics. It receives metrics sent by the application over UDP, and then periodically flushes the aggregated metrics to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/statsd/statsd/blob/master/docs/backend.md"},"pluggable storage backend"),"."),(0,r.kt)("p",null,"The RDB loader can emit metrics to a statsd daemon describing every batch it processes. Here is a string representation of the metrics it sends:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"snowplow.rdbloader.count_good:42|c|#tag1:value1snowplow.rdbloader.latency_collector_to_load_min:123.4|g|#tag1:value1snowplow.rdbloader.latency_collector_to_load_max:234.5|g|#tag1:value1snowplow.rdbloader.latency_shredder_start_to_load:66.6|g|#tag1:value1snowplow.rdbloader.latency_shredder_end_to_load:44.4|g|#tag1:value1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count_good"),": the total number of good events in the batch that was loaded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latency_collector_to_load_min"),": for the most recent event in the batch, this is the time difference between reaching the collector and getting loaded to the warehouse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latency_collector_to_load_min"),": for the oldest event in the batch, this is the time difference between reaching the collector and getting loaded to the warehouse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latency_shredder_start_to_load"),": time difference between the shredder starting on this batch and the loader completing loading to the warehouse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latency_shredder_end_to_load"),": time difference between the shredder completing this batch and the loader completing loading the the warehouse.")),(0,r.kt)("p",null,"Statsd monitoring is configured by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.metrics.statsd")," section in ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/configuration-reference/"},"the hocon file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "metrics": {\n    "hostname": "localhost"\n    "port": 8125\n    "tags": {\n      "tag1": "value1"\n      "tag2": "value2"\n    }\n    "prefix": "snowplow.rdbloader"\n  }\n}\n')),(0,r.kt)("h2",{id:"sentry"},"Sentry"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.sentry.io/"},"Sentry")," is a popular error monitoring service, which helps developers diagnose and fix problems in an application. The RDB loader and shredder both can send an error report to sentry whenever something unexpected happens. The reasons for the error can then be explored in the sentry server\u2019s UI."),(0,r.kt)("p",null,"Common reasons might be lost connection to the database, or an http error fetching a schema from an Iglu server."),(0,r.kt)("p",null,"Sentry monitoring is configured by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.sentry.dsn")," key in ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/configuration-reference/"},"the hocon file")," with the url of your sentry server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "dsn": "http://sentry.acme.com"\n}\n')),(0,r.kt)("h2",{id:"snowplow-tracking"},"Snowplow Tracking"),(0,r.kt)("p",null,"The loader can emit a Snowplow event to a collector when the application crashes with an unexpected error. The event is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.monitoring.batch/load_failed/jsonschema/1-0-0"},"load","_","failed event"),"."),(0,r.kt)("p",null,"Snowplow monitoring is configured by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.snowplow")," section in ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/configuration-reference/"},"the hocon file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "appId": "redshift-loader"\n  "collector": "collector.acme.com"\n}\n')))}c.isMDXComponent=!0}}]);