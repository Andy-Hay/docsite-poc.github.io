"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[19520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),k=s(r),f=o,u=k["".concat(p,".").concat(f)]||k[f]||m[f]||n;return r?a.createElement(u,i(i({ref:t},l),{},{components:r})):a.createElement(u,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},51385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={title:"Initialization options",date:"2020-03-03",sidebar_position:10},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2/index",title:"Initialization options",description:"This page refers to version 2.14.0+ of the Snowplow JavaScript Tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:10,frontMatter:{title:"Initialization options",date:"2020-03-03",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Loading tracker with the Snowplow tag",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/loading/"},next:{title:"Additional options",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/other-parameters-2/"}},p={},s=[],l={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This page refers to version 2.14.0+ of the Snowplow JavaScript Tracker.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v1"},"here"),"\xa0for the corresponding documentation for version 1.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.0"},"here"),"\xa0for the corresponding documentation for version 2.1.1.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.2"},"here"),"\xa0for the corresponding documentation for version 2.2.2.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.3"},"here"),"\xa0for the corresponding documentation for version 2.3.0.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.4"},"here"),"\xa0for the corresponding documentation for version 2.4.3.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.5"},"here"),"\xa0for the corresponding documentation for version 2.5.3.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.6"},"here"),"\xa0for the corresponding documentation for version 2.6.2.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.7"},"here"),"\xa0for the corresponding documentation for version 2.7.2.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.8"},"here"),"\xa0for the corresponding documentation for version 2.8.2.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.9"},"here"),"\xa0for the corresponding documentation for version 2.9.0.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.10"},"here"),"\xa0for the corresponding documentation for version 2.10.0.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.11"},"here"),"\xa0for the corresponding documentation for version 2.11.0.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.12"},"here"),"\xa0for the corresponding documentation for version 2.12.0.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Click\xa0",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker-v2.13"},"here"),"\xa0for the corresponding documentation for version 2.13.0.")),(0,o.kt)("p",null,"Documentation for latest release"),(0,o.kt)("p",null,"The documentation listed here is for Version 2 of the JavaScript Tracker. Version 3 is now available and upgrading is recommended."),(0,o.kt)("p",null,"-"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/"},"Documentation for Version 3")),(0,o.kt)("p",null,"-"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/"},"v2 to v3 Migration Guide")))}m.isMDXComponent=!0}}]);