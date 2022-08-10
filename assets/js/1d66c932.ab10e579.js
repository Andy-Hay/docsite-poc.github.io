"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[16916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Setup Validation and Enrich",date:"2020-02-26",sidebar_position:40},a=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/index",title:"Setup Validation and Enrich",description:"Stream Enrich is an application which:",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:40,frontMatter:{title:"Setup Validation and Enrich",date:"2020-02-26",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Setup Webhooks",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-webhooks/"},next:{title:"Setup Destinations",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/"}},p={},c=[{value:"Install, configure and run Stream Enrich",id:"install-configure-and-run-stream-enrich",level:2},{value:"Add any desired Enrichments",id:"add-any-desired-enrichments",level:2},{value:"Sink the enriched data to S3 from Kinesis",id:"sink-the-enriched-data-to-s3-from-kinesis",level:2}],l={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(43506).Z,width:"699",height:"125"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich"},"Stream Enrich")," is an application which:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Reads")," raw Snowplow events off a stream populated by the Stream Collector"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Validates")," each raw event"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Enriches")," each event (e.g. infers the location of the user from his/her IP address)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Writes")," the enriched Snowplow event to another stream")),(0,r.kt)("p",null,"This guide covers how to setup Stream Enrich."),(0,r.kt)("h2",{id:"install-configure-and-run-stream-enrich"},"Install, configure and run Stream Enrich"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/"},"Stream Enrich reference")," describes how to install, run, and configure the application."),(0,r.kt)("h2",{id:"add-any-desired-enrichments"},"Add any desired Enrichments"),(0,r.kt)("p",null,"Each enrichment is enabled by configuring a JSON config file (one per enrichment), loading these into DynamoDB and then passing the location of the configs in DynamoDB to stream enrich on running it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--enrichments")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/run-stream-enrich/"},"argument as documented"),"."),(0,r.kt)("h2",{id:"sink-the-enriched-data-to-s3-from-kinesis"},"Sink the enriched data to S3 from Kinesis"),(0,r.kt)("p",null,"Now that you have Stream Enrich running, you should have validated, enriched data being output into a Kinesis stream."),(0,r.kt)("p",null,"The next step is to ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3/"},"setup the Snowplow S3 loader")," to sink this data to S3."),(0,r.kt)("p",null,"Instructions on how to load the data into other data stores e.g. Redshift, SnowflakeDB and Elastic can be found under ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/"},"Destinations")))}d.isMDXComponent=!0},43506:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/snowplow-aws-pipeline-enrich-3830b3fb3be004407b2881d34d056cf9.png"}}]);