"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[15360],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(m,l(l({ref:e},p),{},{components:n})):a.createElement(m,l({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46900:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tracker",date:"2020-02-26",sidebar_position:40},l=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/tracker/index",title:"Tracker",description:"The Tracker object is responsible for co-ordinating the saving and sending of events as well as managing the optional Session object.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/unity-tracker/tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/tracker/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:40,frontMatter:{title:"Tracker",date:"2020-02-26",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Initialization",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization/"},next:{title:"Emitter",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/emitter/"}},c={},s=[{value:"Constructor",id:"constructor",level:3},{value:"Functions",id:"functions",level:3},{value:"<code>StartEventTracking()</code>",id:"starteventtracking",level:4},{value:"<code>StopEventTracking()</code>",id:"stopeventtracking",level:4},{value:"<code>Track(IEvent)</code>",id:"trackievent",level:4}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Tracker object is responsible for co-ordinating the saving and sending of events as well as managing the optional Session object."),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowplow/snowplow/wiki/Unity-Tracker#emitter"},(0,r.kt)("inlineCode",{parentName:"a"},"emitter"))),(0,r.kt)("td",{parentName:"tr",align:null},"The Emitter object you create"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"trackerNamespace")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the tracker instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appId")),(0,r.kt)("td",{parentName:"tr",align:null},"The application ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowplow/snowplow/wiki/Unity-Tracker#subject"},(0,r.kt)("inlineCode",{parentName:"a"},"subject"))),(0,r.kt)("td",{parentName:"tr",align:null},"The Subject that defines a user"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowplow/snowplow/wiki/Unity-Tracker#session"},(0,r.kt)("inlineCode",{parentName:"a"},"session"))),(0,r.kt)("td",{parentName:"tr",align:null},"The Session object you create"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"platform")),(0,r.kt)("td",{parentName:"tr",align:null},"The device the Tracker is running on"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Mobile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64Encoded")),(0,r.kt)("td",{parentName:"tr",align:null},"If we\xa0",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"base 64 encode"),"\xa0json values"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"A full Tracker construction should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'IEmitter e1 = new AsyncEmitter ("com.collector.acme")\nSubject subject = new Subject();\nSession session = new Session();\nTracker t1 = new Tracker(e1, "Namespace", "AppId", subject, session, DevicePlatforms.Desktop, true);\n')),(0,r.kt)("p",null,"All of these variables can be altered after creation with the accompanying\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"tracker.SetXXX()"),"\xa0function."),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"The Tracker also contains several critical functions that must be used to start Tracking."),(0,r.kt)("h4",{id:"starteventtracking"},(0,r.kt)("inlineCode",{parentName:"h4"},"StartEventTracking()")),(0,r.kt)("p",null,"This function must be called before any events will start being stored or sent. This is due to the fact that we do not want to start any background processing from the constructors so it is left up to the developer to choose when to start everything up."),(0,r.kt)("p",null,"This function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Starts the background emitter thread"),(0,r.kt)("li",{parentName:"ul"},"Starts the background event processor thread"),(0,r.kt)("li",{parentName:"ul"},"Starts the background session check timer (Optional)")),(0,r.kt)("p",null,"Once this is run everything should be in place for asynchronous event tracking."),(0,r.kt)("h4",{id:"stopeventtracking"},(0,r.kt)("inlineCode",{parentName:"h4"},"StopEventTracking()")),(0,r.kt)("p",null,"If you need to temporarily halt the Tracker from tracking events you can run this function. This will bring all event processing, sending and collection to a halt and nothing will be started again until ",(0,r.kt)("inlineCode",{parentName:"p"},"StartEventTracking()"),"\xa0is fired again."),(0,r.kt)("h4",{id:"trackievent"},(0,r.kt)("inlineCode",{parentName:"h4"},"Track(IEvent)")),(0,r.kt)("p",null,"This is the function used for Tracking all events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"tracker.Track(IEvent newEvent);\n")))}u.isMDXComponent=!0}}]);