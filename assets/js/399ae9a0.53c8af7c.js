"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[26988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||l[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Setup Validation and Enrich (GCP)",date:"2020-02-27",sidebar_position:30},i=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index",title:"Setup Validation and Enrich (GCP)",description:"On GCP we provide two options to run enrichments: Beam Enrich, running on top of Google Dataflow and Enrich PubSub, running as a standalone JVM application.",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:30,frontMatter:{title:"Setup Validation and Enrich (GCP)",date:"2020-02-27",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Setup Webhooks",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-webhooks/"},next:{title:"Add additional enrichments",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/add-additional-enrichments/"}},p={},c=[{value:"Choose Enrich PubSub or Beam Enrich",id:"choose-enrich-pubsub-or-beam-enrich",level:2},{value:"Run Enrich",id:"run-enrich",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On GCP we provide two options to run enrichments: ",(0,r.kt)("strong",{parentName:"p"},"Beam Enrich"),", running on top of Google Dataflow and ",(0,r.kt)("strong",{parentName:"p"},"Enrich PubSub"),", running as a standalone JVM application."),(0,r.kt)("p",null,"Both applications consume the raw data from the raw Pub/Sub topic (outputted by the collector). Validate the data (against schemas stored in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/"},"Iglu Central")," or the user's own schema registry(ies), enrich the data using one or more enrichments and then write the processed data out to the enriched Pub/Sub topic, from where it can be e.g. loaded into BigQuery."),(0,r.kt)("h2",{id:"choose-enrich-pubsub-or-beam-enrich"},"Choose Enrich PubSub or Beam Enrich"),(0,r.kt)("p",null,"Both options provide same functionality but with different performance/management trade-offs. Beam has to be deployed as a Dataflow job and provides good performance and auto scaling for very big volumes of data. In some cases though we don't need this high throughput and Dataflow is an expensive and opaque service. In these cases you can use Enrich PubSub which is much cheaper for low volume pipelines and easier to manage in absence of scalability (although it also can be scaled using Kubernetes or similar orchestration tool)"),(0,r.kt)("h2",{id:"run-enrich"},"Run Enrich"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/"},"Enrich applications reference")," has instructions for setting up and running ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/"},"Enrich PubSub")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/"},"Beam Enrich")))}l.isMDXComponent=!0}}]);