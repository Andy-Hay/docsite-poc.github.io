"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[58832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},k=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=i,u=d["".concat(o,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(u,c(c({ref:t},k),{},{components:r})):n.createElement(u,c({ref:t},k))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"Link Click Tracking",date:"2021-04-07",sidebar_position:12e3},c=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/link-click-tracking/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/link-click-tracking/index",title:"Link Click Tracking",description:"Link click tracking is enabled using the\xa0enableLinkClickTracking\xa0method. Use this method once and the tracker will add click event listeners to all link elements. Link clicks are tracked as self describing events. Each link click event captures the link\u2019s href attribute. The event also has fields for the link\u2019s id, classes, and target (where the linked document is opened, such as a new tab or new window).",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/link-click-tracking/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/link-click-tracking",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/link-click-tracking/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/link-click-tracking/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:12e3,frontMatter:{title:"Link Click Tracking",date:"2021-04-07",sidebar_position:12e3},sidebar:"tutorialSidebar",previous:{title:"Geolocation",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation/"},next:{title:"Media Tracking",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/media-tracking/"}},o={},s=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Functions",id:"functions",level:3},{value:"Context",id:"context",level:3}],k={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Link click tracking is enabled using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"enableLinkClickTracking"),"\xa0method. Use this method once and the tracker will add click event listeners to all link elements. Link clicks are tracked as self describing events. Each link click event captures the link\u2019s href attribute. The event also has fields for the link\u2019s id, classes, and target (where the linked document is opened, such as a new tab or new window)."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-link-click-tracking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-link-click-tracking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-link-click-tracking"))),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\nimport { LinkClickTrackingPlugin, enableLinkClickTracking } from '@snowplow/browser-plugin-link-click-tracking';\n\nnewTracker('sp1', '{{collector_url}}', { \n   appId: 'my-app-id', \n   plugins: [ LinkClickTrackingPlugin() ],\n});\n\nenableLinkClickTracking();\n")),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("table",{class:"has-fixed-layout"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"enableLinkClickTracking")),(0,i.kt)("td",null,(0,i.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#enableLinkClickTracking"},"Documentation"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"refreshLinkClickTracking")),(0,i.kt)("td",null,(0,i.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#enableLinkClickTracking"},"Documen"),(0,i.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#refreshLinkClickTracking"},"t"),(0,i.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#enableLinkClickTracking"},"ation"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"trackLinkClick")),(0,i.kt)("td",null,(0,i.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#trackLinkClick"},"Documentation"))))),(0,i.kt)("h3",{id:"context"},"Context"),(0,i.kt)("p",null,"This plugin does not add any additional data to context of an event."))}p.isMDXComponent=!0}}]);