"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[13136],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),s=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(r),g=n,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return r?a.createElement(u,o(o({ref:e},p),{},{components:r})):a.createElement(u,o({ref:e},p))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17784:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Getting the most out of performance timing",date:"2020-02-26",sidebar_position:30},o=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing/index",title:"Getting the most out of performance timing",description:"Documentation for latest release",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Getting the most out of performance timing",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Tracker Callbacks",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks/"},next:{title:"Migrating from v2 to v3",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/"}},l={},s=[],p={toc:s};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Documentation for latest release"),(0,n.kt)("p",null,"The documentation listed here is for Version 2 of the JavaScript Tracker. Version 3 is now available and upgrading is recommended."),(0,n.kt)("p",null,"-"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/"},"Documentation for Version 3")),(0,n.kt)("p",null,"-"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/"},"v2 to v3 Migration Guide")),(0,n.kt)("p",null,"The\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"domComplete"),",\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"loadEventStart"),", and\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"loadEventEnd"),"\xa0metrics in the NavigationTiming API are set to 0 until after every script on the page has finished executing, including sp.js. This means that the corresponding fields in the PerformanceTiming reported by the tracker will be 0. To get around this limitation, you can wrap all Snowplow code in a\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\xa0call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"setTimeout(function () {\n\n // Load Snowplow and call tracking methods here\n\n}, 0);\n")),(0,n.kt)("p",null,"This delays its execution until after those NavigationTiming fields are set."))}d.isMDXComponent=!0}}]);