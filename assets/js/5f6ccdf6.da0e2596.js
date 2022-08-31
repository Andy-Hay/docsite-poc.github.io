"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[34440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||n;return r?a.createElement(m,c(c({ref:t},p),{},{components:r})):a.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<n;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={title:"Scala Tracker",date:"2020-10-28",sidebar_position:210},c=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/index",title:"Scala Tracker",description:"The Snowplow Scala Tracker allows you to track Snowplow events in your Scala apps and servers. The tracker should be straightforward to use if you are comfortable with Scala development.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/scala-tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/scala-tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:210,frontMatter:{title:"Scala Tracker",date:"2020-10-28",sidebar_position:210},sidebar:"tutorialSidebar",previous:{title:"The RedisWorker class",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/python-tracker/the-redisworker-class/"},next:{title:"Scala Tracker v1",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/"}},l={},s=[],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Snowplow Scala Tracker allows you to track Snowplow events in your Scala apps and servers. The tracker should be straightforward to use if you are comfortable with Scala development."),(0,o.kt)("p",null,"There are three main classes which the Scala Tracker uses: subjects, emitters, and trackers."),(0,o.kt)("p",null,"A subject represents a single user whose events are tracked, and holds data specific to that user."),(0,o.kt)("p",null,'A tracker always has one active subject at a time associated with it. The default subject only has "platform=server" configured, but you can replace it with a subject containing more data. The tracker constructs events with that subject and sends them to one or more emitters, which sends them on to a Snowplow collector.'))}d.isMDXComponent=!0}}]);