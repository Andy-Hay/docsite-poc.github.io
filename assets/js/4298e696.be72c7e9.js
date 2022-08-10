"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[58194],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(o),g=r,w=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return o?n.createElement(w,a(a({ref:t},c),{},{components:o})):n.createElement(w,a({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},24163:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={title:"Getting started on Snowplow BDP",date:"2020-01-30",sidebar_position:0},a=void 0,p={unversionedId:"migrated/getting-started-with-snowplow-bdp/index",id:"migrated/getting-started-with-snowplow-bdp/index",title:"Getting started on Snowplow BDP",description:"Setting Up Your Cloud",source:"@site/docs/migrated/getting-started-with-snowplow-bdp/index.md",sourceDirName:"migrated/getting-started-with-snowplow-bdp",slug:"/migrated/getting-started-with-snowplow-bdp/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-with-snowplow-bdp/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:0,frontMatter:{title:"Getting started on Snowplow BDP",date:"2020-01-30",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Snowplow Documentation",permalink:"/docsite-poc.github.io/docs/migrated/"},next:{title:"What is Snowplow BDP?",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-with-snowplow-bdp/what-is-snowplow-bdp/"}},l={},s=[{value:"Setting Up Your Cloud",id:"setting-up-your-cloud",level:3}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"setting-up-your-cloud"},"Setting Up Your Cloud"),(0,r.kt)("p",null,"Whether you are just getting started with your first Snowplow pipeline or would like to add additional data pipelines, you need to configure your Amazon Web Services (AWS) or Google Cloud Platform (GCP) environment to allow Snowplow to deploy and manage the pipeline(s) on your behalf."),(0,r.kt)("p",null,"Follow the links below for guidance on what is necessary to configure. The process shouldn't take too long, but it will need to be done by someone with the appropriate permission levels to configure the cloud environment."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(10313).Z,width:"195",height:"195"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/?page_id=41"},"AWS Setup Guide")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(9677).Z,width:"225",height:"225"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/?page_id=39"},"GCP Setup Guide")),(0,r.kt)("p",null,"Once you've set up your cloud environment, you can request the new pipeline to be added via the Snowplow BDP user interface:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.snowplowanalytics.com/pipelines/AWS/new"},"Request a pipeline on AWS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.snowplowanalytics.com/pipelines/gcp/new"},"Request a pipeline on GCP"))))}d.isMDXComponent=!0},10313:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/aws_logo_0-7322b6e4bff581d35533d0422bfa3a05.png"},9677:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);