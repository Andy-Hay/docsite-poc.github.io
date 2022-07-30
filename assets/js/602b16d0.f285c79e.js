"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[79902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=n,w=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return r?o.createElement(w,i(i({ref:t},u),{},{components:r})):o.createElement(w,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Querying your Try Snowplow data",date:"2020-11-23",sidebar_position:30},i=void 0,s={unversionedId:"migrated/try-snowplow/accessing-and-querying-your-try-snowplow-data/index",id:"migrated/try-snowplow/accessing-and-querying-your-try-snowplow-data/index",title:"Querying your Try Snowplow data",description:"Accessing your data",source:"@site/docs/migrated/try-snowplow/accessing-and-querying-your-try-snowplow-data/index.md",sourceDirName:"migrated/try-snowplow/accessing-and-querying-your-try-snowplow-data",slug:"/migrated/try-snowplow/accessing-and-querying-your-try-snowplow-data/",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/accessing-and-querying-your-try-snowplow-data/",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Querying your Try Snowplow data",date:"2020-11-23",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Tracking events with Try Snowplow",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/tracking-events-with-try-snowplow/"},next:{title:"Tutorials",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/recipes/"}},c={},l=[{value:"Accessing your data",id:"accessing-your-data",level:2},{value:"Querying your data",id:"querying-your-data",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"accessing-your-data"},"Accessing your data"),(0,n.kt)("p",null,"Try Snowplow creates a Postgres database where any events you capture are stored. This database contains the standard Snowplow schemas: atomic (for raw data), bad","_","rows (for data that has failed pipeline validation) and derived (for modeled tables)."),(0,n.kt)("p",null,"Details for accessing this data are available in the Try Snowplow console. You will also need to request the password from within the UI - please bear in mind you will only be able to do this once for security reasons."),(0,n.kt)("h2",{id:"querying-your-data"},"Querying your data"),(0,n.kt)("p",null,"Like Snowplow BDP, Try Snowplow encourages you to connect your your BI or query tool of choice to access the database and query your data."),(0,n.kt)("p",null,"You can either copy a sample query from the console tutorial, ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/try-snowplow/recipes/"},"check out the Recipes")," or start exploring your data with your own queries."))}d.isMDXComponent=!0}}]);