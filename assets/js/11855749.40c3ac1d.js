"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[98384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Getting Started",date:"2020-07-22",sidebar_position:0},i=void 0,l={unversionedId:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/getting-started/index",id:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/getting-started/index",title:"Getting Started",description:"Event recovery at its core, is the ability to fix events that have failed and replay them through your pipeline.",source:"@site/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/getting-started/index.md",sourceDirName:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/getting-started",slug:"/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/getting-started/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/getting-started/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:0,frontMatter:{title:"Getting Started",date:"2020-07-22",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Manual Event Recovery for Snowplow BDP",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/"},next:{title:"Configuration",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/"}},s={},u=[{value:"What you&#39;ll need to get started",id:"what-youll-need-to-get-started",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Event recovery at its core, is the ability to fix events that have failed and replay them through your pipeline."),(0,a.kt)("p",null,"After inspecting failed events either in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/failed-events-in-the-ui/"},"Snowplow BDP Console"),", or in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/accessing-failed-events/failed-events-in-athena-and-bigquery/"},"partitioned failure buckets"),", you can determine which events are possible to recover based on what the fix entails."),(0,a.kt)("p",null,"With recovery it is possible to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"replace values - e.g. correct a typo in a schema name for validation"),(0,a.kt)("li",{parentName:"ul"},"remove values - e.g. remove improperly encoded values from a URL string"),(0,a.kt)("li",{parentName:"ul"},"cast JSON types - e.g. change a property's type from ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"integer"))),(0,a.kt)("p",null,"If your failed events would not be fixed by applying the above, they currently would be considered unrecoverable. Due to the fact that there might be a mix of recoverable and unrecoverable data in your storage, event recovery uses configuration in order to process only a subset of the failed events."),(0,a.kt)("h3",{id:"what-youll-need-to-get-started"},"What you'll need to get started"),(0,a.kt)("p",null,"The typical flow for recovery and some prerequisites to consider would be:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Understanding the failure issue")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Familiarity with the ",(0,a.kt)("a",{parentName:"li",href:"/docs/migrated/managing-data-quality/understanding-failed-events/"},"failed event types")),(0,a.kt)("li",{parentName:"ul"},"Access to S3 or GCS buckets with failed events")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configuring a recovery")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding the ",(0,a.kt)("a",{parentName:"li",href:"/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/"},"configuration structure")),(0,a.kt)("li",{parentName:"ul"},"Comfort with using Regular Expressions (RegEx)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Testing the configuration")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ability to edit/run a Scala script locally")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run the recovery")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS sub account or GCP project admin access in order to create a recovery user")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Monitor the recovery")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access to DataFlow UI (GCP) or EMR reporting (AWS)")))}c.isMDXComponent=!0}}]);