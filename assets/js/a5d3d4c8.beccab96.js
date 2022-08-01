"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[50850],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),g=p(r),m=n,c=g["".concat(d,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(c,i(i({ref:e},s),{},{components:r})):a.createElement(c,i({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98157:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Configuration reference",date:"2021-10-07",sidebar_position:0},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/index",title:"Configuration reference",description:"This is a complete list of the options that can be configured in the Snowplow BigQuery Loader HOCON config file. The\xa0example configs in github\xa0show how to prepare an input file.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:0,frontMatter:{title:"Configuration reference",date:"2021-10-07",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"1.0.x upgrade guide",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/"},next:{title:"Previous versions",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/"}},d={},p=[{value:"Required options",id:"required-options",level:2},{value:"Monitoring options",id:"monitoring-options",level:2},{value:"Advanced options",id:"advanced-options",level:2},{value:"Config parser hints",id:"config-parser-hints",level:2}],s={toc:p};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is a complete list of the options that can be configured in the Snowplow BigQuery Loader HOCON config file. The\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/tree/master/config"},"example configs in github"),"\xa0show how to prepare an input file."),(0,n.kt)("h2",{id:"required-options"},"Required options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"projectId"),(0,n.kt)("th",{parentName:"tr",align:null},"Required. The GCP project in which all required Pub/Sub, BigQuery and GCS resources are hosted, eg my-project."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.input.subscription"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. Enriched events subscription consumed by Loader and StreamLoader, eg enriched-sub.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.good.datasetId"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. Specify the dataset to which the events table belongs, eg snowplow.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.good.tableId"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. The name of the events table, eg events.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.bad.topic"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. The name of the topic where bad rows will be written, eg bad-topic.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.types.topic"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. The name of the topic where observed types will be written, eg types-topic.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.failedInserts.topic"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. The name of the topic where failed inserts will be written, eg failed-inserts-topic.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mutator.input.subscription"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. A subscription on the loader.output.types.topic, eg types-sub.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mutator.output.good.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. Equivalent to loader.output.good.*. Can be specified in detail or as ${loader.output.good}.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repeater.input.subscription"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. Failed inserts subscription consumed by Repeater. Must be attached to the loader.output.failedInserts.topic, eg failed-inserts-sub.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repeater.output.good.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. Equivalent to loader.output.good.*. Can be specified in detail or as ${loader.output.good}.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repeater.output.deadLetters.bucket"),(0,n.kt)("td",{parentName:"tr",align:null},"Required. Failed inserts that repeatedly fail to be inserted into BigQuery are stored on GCS in this bucket, eg gs://dead-letter-bucket.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. See below for details.Note: This was a required setting in 1.0.0. Can be left blank, ie {}, to disable this functionality in that version.")))),(0,n.kt)("h2",{id:"monitoring-options"},"Monitoring options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"monitoring.statsd.*"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional. If set up, metrics will be emitted from StreamLoader and Repeater using the StatsD protocol."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.hostname"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional, eg statsd.acme.gl.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.port"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional, eg 1024.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.tags"),(0,n.kt)("td",{parentName:"tr",align:null},'Optional. You can use env vars, eg {"worker": ${HOST}}.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.period"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional, eg 10 sec.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.prefix"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional, eg snowplow.monitoring.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.dropwizard.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. If set up, metrics will be emitted from Loader using the Dropwizard protocol.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.dropwizard.period"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional, eg 10000 ms.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.stdout.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. If set up, metrics will be logged to stdout at INFO level.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitoring.sentry"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. If set up, errors will be sent to a Sentry endpoint.")))),(0,n.kt)("h2",{id:"advanced-options"},"Advanced options"),(0,n.kt)("p",null,"The defaults should be good for the overwhelming majority of deployments and hopefully you should never need to change these."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"loader.loadMode.*"),(0,n.kt)("th",{parentName:"tr",align:null},"BigQuery supports two loading APIs:- Streaming inserts API- Load jobs APIThis setting configures which one will be used.StreamLoader only supports the Streaming inserts API. Loader supports both but using the Load jobs API has experimental status."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.loadMode.type"),(0,n.kt)("td",{parentName:"tr",align:null},"Defaults to StreamingInserts. The only other possible option is FileLoads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.loadMode.retry"),(0,n.kt)("td",{parentName:"tr",align:null},"Defaults to false. Specifies if failed inserts should be retried infinitely or sent straight to the","\xa0","failedInserts","\xa0","topic. When set to true, if a row cannot be inserted, it will be re-tried indefinitely, which can throttle the whole load. In that case a restart might be required. This setting is only supported by the Streaming inserts API.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.loadMode.frequency"),(0,n.kt)("td",{parentName:"tr",align:null},"Defaults to null. Specifies how often the load job should be performed, in seconds. Unlike the near-real-time","\xa0","Streaming inserts","\xa0","API, load jobs are more batch-oriented. This setting is only supported by the Load jobs API. An example value is 60000.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.consumerSettings.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Settings for the PubsubGoogleConsumer object in the StreamLoader code. For more details see here.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.sinkSettings.good.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Settings for the good sink value in the StreamLoader code. For more details see here. For recommended number of records in each request, see here. For the HTTP request size limit, see here.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.sinkSettings.bad.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Settings for the bad sink value in the StreamLoader code. For more details see here.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.sinkSettings.types.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Settings for the type sink value in the StreamLoader code. For more details see here.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.sinkSettings.failedInserts.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Settings for the failed insert sink value in the StreamLoader code. For more details see here.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.retrySettings.*"),(0,n.kt)("td",{parentName:"tr",align:null},"Retry settings for the BigQuery client. For more details see here.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.terminationTimeout"),(0,n.kt)("td",{parentName:"tr",align:null},"Defaults to 1 minute. Specifies how long to wait before terminating the application after receiving SIGINT. This is meant to allow time for all events in-flight to be processed and acknowledged before exiting.")))),(0,n.kt)("h2",{id:"config-parser-hints"},"Config parser hints"),(0,n.kt)("p",null,"These settings only exist as hints to the config parsing library we use, so that the configuration can be represented as Scala code. They each only have one possible value and should never be changed."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"loader.input.type"),(0,n.kt)("th",{parentName:"tr",align:null},"PubSub"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.good.type"),(0,n.kt)("td",{parentName:"tr",align:null},"BigQuery")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.bad.type"),(0,n.kt)("td",{parentName:"tr",align:null},"PubSub")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.types.type"),(0,n.kt)("td",{parentName:"tr",align:null},"PubSub")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.output.failedInserts.type"),(0,n.kt)("td",{parentName:"tr",align:null},"PubSub")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loader.retrySettings.type"),(0,n.kt)("td",{parentName:"tr",align:null},"BigQueryRetrySettings")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mutator.input.type"),(0,n.kt)("td",{parentName:"tr",align:null},"PubSub")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repeater.input.type"),(0,n.kt)("td",{parentName:"tr",align:null},"PubSub")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repeater.output.deadLetters.type"),(0,n.kt)("td",{parentName:"tr",align:null},"Gcs")))))}u.isMDXComponent=!0}}]);