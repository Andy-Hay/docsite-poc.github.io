"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[63536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Geolocation",date:"2021-04-07",sidebar_position:11e3},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation/index",title:"Geolocation",description:"If this plugin is enabled, the tracker will attempt to create a context from the visitor\u2019s geolocation information. If the visitor has not already given or denied the website permission to use their geolocation information, a prompt will appear. If they give permission, then all events from that moment on will include their geolocation information.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation/",draft:!1,tags:[],version:"current",sidebarPosition:11e3,frontMatter:{title:"Geolocation",date:"2021-04-07",sidebar_position:11e3},sidebar:"tutorialSidebar",previous:{title:"GA Cookies",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/"},next:{title:"Link Click Tracking",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/link-click-tracking/"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Functions",id:"functions",level:3},{value:"Context",id:"context",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If this plugin is enabled, the tracker will attempt to create a context from the visitor\u2019s geolocation information. If the visitor has not already given or denied the website permission to use their geolocation information, a prompt will appear. If they give permission, then all events from that moment on will include their geolocation information."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-geolocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-`geolocation` ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-`geolocation` "))),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\nimport { GeolocationPlugin, enableGeolocationContext } from '@snowplow/browser-plugin-geolocation';\n\nnewTracker('sp1', '{{collector_url}}', { \n   appId: 'my-app-id', \n   plugins: [ GeolocationPlugin() ],\n});\n\nenableGeolocationContext();\n")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("table",{class:"has-fixed-layout"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"enableGeolocationContext")),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/#enableGeolocationContext"},"Documentation"))))),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"Adding this plugin will automatically capture the following context:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Context"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0"},"iglu:com.snowplowanalytics.snowplow/geolocation","_","context/jsonschema/1-1-0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:n(25944).Z,width:"510",height:"370"}))))))}u.isMDXComponent=!0},25944:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Screenshot-2021-03-30-at-22.25.13-cb191812e711f44b07c6505b4dcd507f.png"}}]);