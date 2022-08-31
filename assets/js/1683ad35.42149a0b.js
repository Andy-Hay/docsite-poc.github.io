"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[50662],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(o),u=n,b=p["".concat(d,".").concat(u)]||p[u]||m[u]||a;return o?r.createElement(b,i(i({ref:t},c),{},{components:o})):r.createElement(b,i({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},42732:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"The Snowplow mobile data model",date:"2022-04-04",sidebar_position:20},i=void 0,l={unversionedId:"migrated/modeling-your-data/the-snowplow-mobile-data-model/index",id:"migrated/modeling-your-data/the-snowplow-mobile-data-model/index",title:"The Snowplow mobile data model",description:"Overview",source:"@site/docs/migrated/modeling-your-data/the-snowplow-mobile-data-model/index.md",sourceDirName:"migrated/modeling-your-data/the-snowplow-mobile-data-model",slug:"/migrated/modeling-your-data/the-snowplow-mobile-data-model/",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/the-snowplow-mobile-data-model/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:20,frontMatter:{title:"The Snowplow mobile data model",date:"2022-04-04",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"dbt: Web data model",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/the-snowplow-web-data-model/dbt-web-data-model/"},next:{title:"sql-runner: Mobile data model",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model/"}},d={},s=[{value:"Overview",id:"overview",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Snowplow mobile data model aggregates Snowplow's out-of-the-box mobile events to create a set of derived tables - screen views, sessions, and users. These contain many useful dimensions, as well as calculated measures such as screen views per session."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(67471).Z,width:"859",height:"423"})),(0,n.kt)("p",null,"The model runs incrementally, processing new events and previously modelled events for which there is new information with every run. This avoids the costly reprocessing of previously modelled events which are unchanged. The incremental logic is separate from the logic that does the calculations for the tables so as to make customisation of the model easier."),(0,n.kt)("h1",{id:"running-the-mobile-data-model"},"Running the mobile data model"),(0,n.kt)("p",null,"There are two ways you can run the Snowplow Mobile data model, with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/sql-runner"},"sql-runner")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt"},"dbt"),". Below are guides to help you get started."))}m.isMDXComponent=!0},67471:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Screenshot-2022-03-25-at-10.50.33-5d404dca4e545db52a48114f0750bd14.png"}}]);