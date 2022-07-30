"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[62170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(r),d=o,f=g["".concat(l,".").concat(d)]||g[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},55828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Golang Tracker",date:"2020-02-26",sidebar_position:170},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/index",title:"Golang Tracker",description:"The\xa0Snowplow Golang Tracker\xa0allows you to track Snowplow events from your Golang apps and servers.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/golang-tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/golang-tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/",draft:!1,tags:[],version:"current",sidebarPosition:170,frontMatter:{title:"Golang Tracker",date:"2020-02-26",sidebar_position:170},sidebar:"tutorialSidebar",previous:{title:"Pixel Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/pixel-tracker/"},next:{title:"Setup",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/setup/"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The\xa0Snowplow Golang Tracker\xa0allows you to track Snowplow events from your Golang apps and servers."),(0,o.kt)("p",null,"There are three basic types of object you will create when using the Snowplow Golang Tracker: subjects, emitters, and trackers."),(0,o.kt)("p",null,"A subject represents a user whose events are tracked. A tracker constructs events and sends them to an emitter. The emitter then sends the event to the endpoint you configure; a valid Snowplow Collector."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"READ ME"),": As sending and processing of events is done asynchronously it is advised to create the Tracker as a singleton object. This is due to the fact that all events are first persistently stored in a local Sqlite3 database; if multiple Trackers are created there is the possibility of duplicate sending of events and overt consumption of resources."),(0,o.kt)("p",null,"See\xa0",(0,o.kt)("a",{parentName:"p",href:"http://blog.ralch.com/tutorial/design-patterns/golang-singleton/"},"here for instructions"),"\xa0on building a Singleton in Golang."))}u.isMDXComponent=!0}}]);