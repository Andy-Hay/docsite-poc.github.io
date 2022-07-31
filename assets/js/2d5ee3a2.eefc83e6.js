"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||n;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={title:"What is deployed on GCP?",date:"2021-09-23",sidebar_position:300},s=void 0,i={unversionedId:"migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/index",id:"migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/index",title:"What is deployed on GCP?",description:"Let\u2019s take a look at what's deployed on GCP upon running the quick start example script.",source:"@site/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/index.md",sourceDirName:"migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp",slug:"/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/",permalink:"/docsite-poc.github.io/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:300,frontMatter:{title:"What is deployed on GCP?",date:"2021-09-23",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Query your Postgres data",permalink:"/docsite-poc.github.io/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/"},next:{title:"Further Exploration",permalink:"/docsite-poc.github.io/docs/migrated/open-source-quick-start/further-exploration/"}},l={},p=[{value:"<strong>Collector load balancer</strong>",id:"collector-load-balancer",level:4},{value:"<strong>Stream Collector</strong>",id:"stream-collector",level:4},{value:"<strong>Stream Enrich</strong>",id:"stream-enrich",level:4},{value:"<strong>Pubsub topics</strong>",id:"pubsub-topics",level:4},{value:"<strong>Iglu</strong>",id:"iglu",level:4},{value:"<strong>Postgres loader</strong>",id:"postgres-loader",level:4},{value:"Have any questions? Reach out to us on discourse!",id:"have-any-questions-reach-out-to-us-on-discourse",level:5},{value:"Or start tracking events from your own application &gt;&gt;",id:"or-start-tracking-events-from-your-own-application-",level:5}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Let\u2019s take a look at what's deployed on GCP upon running the quick start example script.")),(0,a.kt)("p",null,"Note: you can very easily edit the script by removing certain modules, giving you the flexibility to design the topology of your pipeline according to your needs."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/09/image-4.png?w=1024",alt:null})),(0,a.kt)("h4",{id:"collector-load-balancer"},(0,a.kt)("strong",{parentName:"h4"},"Collector load balancer")),(0,a.kt)("p",null,"This is an application load balancer for your inbound HTTP/S traffic. Traffic is routed from the load balancer to the collector.\xa0"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"em",href:"https://registry.terraform.io/modules/snowplow-devops/lb/google/latest"},"terraform-google-lb")," terraform module.")),(0,a.kt)("h4",{id:"stream-collector"},(0,a.kt)("strong",{parentName:"h4"},"Stream Collector")),(0,a.kt)("p",null,"This is a Snowplow event collector that receives raw Snowplow events over HTTP, serializes them to a ",(0,a.kt)("a",{parentName:"p",href:"http://thrift.apache.org/"},"Thrift")," record format, and then writes them to pubsub. More details can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/scala-stream-collector/"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/collector-pubsub-ce/google/latest"},"collector-pubsub-ce")," terraform module.")),(0,a.kt)("h4",{id:"stream-enrich"},(0,a.kt)("strong",{parentName:"h4"},"Stream Enrich")),(0,a.kt)("p",null,"This is a Snowplow app written in scala which:\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reads raw Snowplow events off a Pubsub topic populated by the Scala Stream Collector"),(0,a.kt)("li",{parentName:"ul"},"Validates each raw event"),(0,a.kt)("li",{parentName:"ul"},"Enriches each event (e.g. infers the location of the user from his/her IP address)"),(0,a.kt)("li",{parentName:"ul"},"Writes the enriched Snowplow event to the enriched topic")),(0,a.kt)("p",null,"It is designed to be used downstream of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/scala-stream-collector/"},"Scala Stream Collector"),". More details can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/"},"here"),".\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/enrich-pubsub-ce/google/latest"},"enrich-pubsub-ce")," terraform module.")),(0,a.kt)("h4",{id:"pubsub-topics"},(0,a.kt)("strong",{parentName:"h4"},"Pubsub topics")),(0,a.kt)("p",null,"Your pubsub topics are a key component of ensuring a non-lossy pipeline, providing crucial back-up, as well as serving as a mechanism to drive real time use cases from the enriched stream.\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/pubsub-topic/google/latest"},"pubsub-topic")," terraform module.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Raw stream")),(0,a.kt)("p",null,"Collector payloads are written to this raw pubsub topic, before being picked up by the Enrich application.\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enriched topic")),(0,a.kt)("p",null,"Events that have been validated and enriched by the Enrich application are written to this enriched stream."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bad 1 topic")),(0,a.kt)("p",null,"This bad topic is for events that the collector or enrich fail to process. An event can fail at the collector point due to, for instance, it being too large for the stream creating a size violation bad row, or it can fail during enrichment due to a schema violation or enrichment failure.\xa0 More details can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/"},"here"),".\xa0"),(0,a.kt)("h4",{id:"iglu"},(0,a.kt)("strong",{parentName:"h4"},"Iglu")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/"},"Iglu")," allows you to publish, test and serve schemas via an easy-to-use RESTful interface. It is split into a few services."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Iglu load balancer")),(0,a.kt)("p",null,"This load balances the inbound traffic and routes traffic to the Iglu Server.\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/collector-pubsub-ce/google/latest"},"google-lb")," terraform module.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Iglu Server")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/iglu-server/"},"Iglu Server")," serves requests for Iglu schemas stored in your schema registry.\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/iglu-server-ce/google/latest"},"iglu-server-ce")," terraform module.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Iglu cloudSQL")),(0,a.kt)("p",null,"This is the Iglu Server database where the Iglu schemas themselves are stored.\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/cloud-sql/google/latest"},"cloud-sql")," terraform module.")),(0,a.kt)("h4",{id:"postgres-loader"},(0,a.kt)("strong",{parentName:"h4"},"Postgres loader")),(0,a.kt)("p",null,"The Snowplow application responsible for reading the enriched and bad data and ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/"},"loading to Postgres.")),(0,a.kt)("p",null,"_",(0,a.kt)("strong",{parentName:"p"},"_For further details on the resources, default and required input variables, and outputs see the ",(0,a.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/postgres-loader-pubsub-ce/google/latest"},"postgres-loader-pubsub-ce")," terraform module.__")),(0,a.kt)("h5",{id:"have-any-questions-reach-out-to-us-on-discourse"},"Have any questions? Reach out to us on ",(0,a.kt)("a",{parentName:"h5",href:"https://discourse.snowplowanalytics.com/"},"discourse"),"!"),(0,a.kt)("h5",{id:"or-start-tracking-events-from-your-own-application-"},"Or start ",(0,a.kt)("a",{parentName:"h5",href:"/docs/migrated/open-source-quick-start/further-exploration/start-tracking-events-and-further-enrich-your-data/"},"tracking events from your own application")," >>"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Do you have any feedback for us?"),(0,a.kt)("p",null,"We are really interested in understanding how you are finding the Quick Start and what we can do to better support you in getting started with our open source. If you have a moment, ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/rKEqpFxwTfLjhQzR6"},"let us know via this short survey"),"."))}c.isMDXComponent=!0}}]);