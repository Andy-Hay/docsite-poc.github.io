"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[54942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Tracker Information",date:"2021-04-07",sidebar_position:2e3},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/tracker-information/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/tracker-information/index",title:"Tracker Information",description:"When initialising a tracker, you can use the returned tracker instance to access various properties from this tracker instance.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/tracker-information/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/tracker-information",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/tracker-information/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/tracker-information/",draft:!1,tags:[],version:"current",sidebarPosition:2e3,frontMatter:{title:"Tracker Information",date:"2021-04-07",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Optional timestamp argument",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/optional-timestamp-argument/"},next:{title:"API Reference",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/api-reference/"}},s={},l=[{value:"Available methods on the Tracker",id:"available-methods-on-the-tracker",level:2},{value:"<code>getDomainUserId</code>",id:"getdomainuserid",level:4},{value:"<code>getDomainUserInfo</code>",id:"getdomainuserinfo",level:4},{value:"<code>getUserId</code>",id:"getuserid",level:4},{value:"<code>getCookieName</code>",id:"getcookiename",level:4},{value:"<code>getPageViewId</code>",id:"getpageviewid",level:4}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When initialising a tracker, you can use the returned ",(0,a.kt)("inlineCode",{parentName:"p"},"tracker")," instance to access various properties from this tracker instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Configure a tracker instance named \"sp\"\nconst sp = newTracker('sp', '{{COLLECTOR_URL}', {\n appId: 'snowplowExampleApp'\n});\n\n// Access the tracker properties\nconst domainUserId = sp.getDomainUserId();\n")),(0,a.kt)("h2",{id:"available-methods-on-the-tracker"},"Available methods on the Tracker"),(0,a.kt)("h4",{id:"getdomainuserid"},(0,a.kt)("inlineCode",{parentName:"h4"},"getDomainUserId")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"getDomainUserId"),"\xa0method returns the user ID stored in the first-party cookie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const domainUserId = sp.getDomainUserId();\nconsole.log(domainUserId);\n")),(0,a.kt)("h4",{id:"getdomainuserinfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"getDomainUserInfo")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"getDomainUserInfo"),"\xa0method returns all the information stored in first-party cookie in an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const domainUserInfo = sp.getDomainUserInfo();\nconsole.log(domainUserInfo);\n")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"domainUserInfo"),"\xa0variable will contain an array with 11 elements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A string set to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"'1'"),"\xa0if this is the user's first session and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"'0'"),"\xa0otherwise"),(0,a.kt)("li",{parentName:"ol"},"The domain user ID"),(0,a.kt)("li",{parentName:"ol"},"The timestamp at which the cookie was created"),(0,a.kt)("li",{parentName:"ol"},"The number of times the user has visited the site"),(0,a.kt)("li",{parentName:"ol"},"The timestamp for the current visit"),(0,a.kt)("li",{parentName:"ol"},"The timestamp of the last visit"),(0,a.kt)("li",{parentName:"ol"},"The session id"),(0,a.kt)("li",{parentName:"ol"},"ID of the previous session (since version 3.5)"),(0,a.kt)("li",{parentName:"ol"},"ID of the first event in the current session (since version 3.5)"),(0,a.kt)("li",{parentName:"ol"},"Device created timestamp of the first event in the current session (since version 3.5)"),(0,a.kt)("li",{parentName:"ol"},"Index of the last event in the session (used to inspect order of events) (since version 3.5)")),(0,a.kt)("h4",{id:"getuserid"},(0,a.kt)("inlineCode",{parentName:"h4"},"getUserId")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"getUserId"),"\xa0method returns the user ID which you configured using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"setUserId()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const userId = sp.getUserId();\nconsole.log(userId);\n")),(0,a.kt)("h4",{id:"getcookiename"},(0,a.kt)("inlineCode",{parentName:"h4"},"getCookieName")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"getCookieName"),"\xa0method returns the complete cookie name for the domain or session cookie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const cookieName = sp.getCookieName('id');\nconsole.log(cookieName);\n")),(0,a.kt)("p",null,"The argument corresponds to the basename of the cookie: 'id' for the domain cookie, 'ses' for the session cookie."),(0,a.kt)("h4",{id:"getpageviewid"},(0,a.kt)("inlineCode",{parentName:"h4"},"getPageViewId")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"getPageViewId"),"\xa0method returns the page view id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const pageViewId = sp.getPageViewId();\nconsole.log(pageViewId);\n")))}d.isMDXComponent=!0}}]);