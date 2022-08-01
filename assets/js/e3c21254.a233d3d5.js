"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[73383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,w=u["".concat(s,".").concat(c)]||u[c]||g[c]||r;return n?o.createElement(w,i(i({ref:t},d),{},{components:n})):o.createElement(w,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Google Tag Manager Server Side",date:"2021-11-24",sidebar_position:10},i=void 0,l={unversionedId:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/index",id:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/index",title:"Google Tag Manager Server Side",description:"To support sending events to adjacent destinations, Snowplow works with Google Tag Manager Server Side. There are both Snowplow Authored and Vendor/Community authored Tags which will allow event data to be forwarded to different destinations.",source:"@site/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side",slug:"/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:10,frontMatter:{title:"Google Tag Manager Server Side",date:"2021-11-24",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Native Integrations",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/native-integrations/"},next:{title:"Snowplow Client for GTM SS",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/"}},s={},p=[{value:"Configuration Options",id:"configuration-options",level:2},{value:"Destinations Hub (Post-pipeline)",id:"destinations-hub-post-pipeline",level:3},{value:"Server Side Tag Manager (Pre-pipeline)",id:"server-side-tag-manager-pre-pipeline",level:3},{value:"Deploying Google Tag Manager Server Side",id:"deploying-google-tag-manager-server-side",level:2},{value:"Snowplow Client",id:"snowplow-client",level:2},{value:"Snowplow Tag",id:"snowplow-tag",level:2},{value:"Snowplow Authored Tags",id:"snowplow-authored-tags",level:2}],d={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To support sending events to adjacent destinations, Snowplow works with Google Tag Manager Server Side. There are both Snowplow Authored and Vendor/Community authored Tags which will allow event data to be forwarded to different destinations."),(0,a.kt)("p",null,"Before reading this documentation, we recommend you become familiar with\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/intro"},"the fundamentals of Server Side tagging"),"."),(0,a.kt)("p",null,"Taking an approach with Snowplow and GTM SS offers many additional flexibility and control:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full visibility into all transformations on the data"),(0,a.kt)("li",{parentName:"ul"},"Ability to evolve sophistication over time"),(0,a.kt)("li",{parentName:"ul"},"All data remains in your private cloud until you choose to forward it"),(0,a.kt)("li",{parentName:"ul"},"Ease of setup due to rich libraries of tags and familiar GTM UI")),(0,a.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,a.kt)("p",null,"GTM SS with Snowplow can be setup in two different configurations."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/11/gtmssoptions.png?w=1024",alt:null})),(0,a.kt)("h3",{id:"destinations-hub-post-pipeline"},"Destinations Hub (Post-pipeline)"),(0,a.kt)("p",null,"Use GTM SS to relay enriched events to destinations. Events are sent to GTM SS after being processed by your Snowplow Pipeline."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,a.kt)("th",{parentName:"tr",align:null},"Snowplow BDP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2757 (See documentation)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/migrated/forwarding-events-to-destinations/supporting-additional-destinations/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://console.snowplowanalytics.com/destinations/catalog"},"Request Setup"))))),(0,a.kt)("h3",{id:"server-side-tag-manager-pre-pipeline"},"Server Side Tag Manager (Pre-pipeline)"),(0,a.kt)("p",null,"Use GTM SS to relay raw events before the Snowplow pipeline to destinations, including to your Snowplow pipeline."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,a.kt)("th",{parentName:"tr",align:null},"Snowplow BDP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,a.kt)("h2",{id:"deploying-google-tag-manager-server-side"},"Deploying Google Tag Manager Server Side"),(0,a.kt)("p",null,"GTM SS must first be deployed before it can be used. This can easily achieved by deploying to GCP App Engine from directly within the GTM User Interface. Alternatively, docker images are available for other deployment options, such as on AWS or with Kubernetes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/tag-platform/tag-manager/server-side/script-user-guide"},"App Engine Setup Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/tag-platform/tag-manager/server-side/manual-setup-guide"},"Manual Setup"))),(0,a.kt)("h2",{id:"snowplow-client"},"Snowplow Client"),(0,a.kt)("p",null,"To receive events in your GTM SS container, the Snowplow Client must be installed. This works for both events direct from the tracker, or enriched events from the pipeline."),(0,a.kt)("p",null,"The Snowplow Client populates the common event data so many GTM SS tags will just work, however it also populates a set of additional properties to ensure the rich Snowplow event data is available to Tags which wish to take advantage of this, such as the Snowplow Authored Tags."),(0,a.kt)("h2",{id:"snowplow-tag"},"Snowplow Tag"),(0,a.kt)("p",null,"If using GTM SS as a Server Side Tag Manager for Snowplow JavaScript Tracker events, you will want to ensure you forward these events to your Snowplow Collector. The Snowplow Tag will automatically forward any events the Snowplow Client receives once it has been configured with your Collector URL. It can also construct Snowplow events from other GTM SS Clients such as GAv4."),(0,a.kt)("h2",{id:"snowplow-authored-tags"},"Snowplow Authored Tags"),(0,a.kt)("p",null,"Snowplow have created a number of GTM SS Tags which work best with the Snowplow Client and make use of the rich data available from Snowplow tracker or Enriched events."))}g.isMDXComponent=!0}}]);