"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[53799],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13379:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Tracker",date:"2020-02-26",sidebar_position:30},o=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker/index",title:"Tracker",description:"The Tracker object is responsible for co-ordinating the saving and sending of events as well as managing the optional Session object.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659256171,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:30,frontMatter:{title:"Tracker",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialization",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/initialization/"},next:{title:"Emitter",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/emitter/"}},c={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>Start(...)</code>",id:"start",level:3},{value:"<code>Stop()</code>",id:"stop",level:3},{value:"<code>Track(IEvent, Subject)</code>",id:"trackievent-subject",level:3}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Tracker object is responsible for co-ordinating the saving and sending of events as well as managing the optional Session object."),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emitter")),(0,r.kt)("td",{parentName:"tr",align:null},"The Emitter object you create"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},"The Subject that defines a user"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientSession")),(0,r.kt)("td",{parentName:"tr",align:null},"The Session object you create"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"trackerNamespace")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the tracker instance"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appId")),(0,r.kt)("td",{parentName:"tr",align:null},"The application ID"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64Encoded")),(0,r.kt)("td",{parentName:"tr",align:null},"If we\xa0",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"base 64 encode"),"\xa0json values"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"synchronous")),(0,r.kt)("td",{parentName:"tr",align:null},"If loading into storage is done in sync"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"desktopContextDelegate")),(0,r.kt)("td",{parentName:"tr",align:null},"Function to get the desktop context"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mobileContextDelegate")),(0,r.kt)("td",{parentName:"tr",align:null},"Function to get the mobile context"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geoLocationContextDelegate")),(0,r.kt)("td",{parentName:"tr",align:null},"Function to get the geo-location context"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logger")),(0,r.kt)("td",{parentName:"tr",align:null},"The logger to use within the application"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")))),(0,r.kt)("p",null,"A full Tracker construction should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var logger = new ConsoleLogger();\nvar endpoint = new SnowplowHttpCollectorEndpoint(emitterUri, method: method, port: port, protocol: protocol, l: logger);\nvar storage = new LiteDBStorage("events.db");\nvar queue = new PersistentBlockingQueue(storage, new PayloadToJsonString());\nvar emitter = new AsyncEmitter(endpoint, queue, l: logger);\nvar subject = new Subject().SetPlatform(Platform.Mob).SetLang("EN");\nvar session = new ClientSession("client_session.dict", l: logger);\n\nTracker.Instance.Start(emitter: emitter, subject: subject, clientSession: session, trackerNamespace: "some namespace", appId: "some appid", encodeBase64: true, l: logger);\n')),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.Start(...)"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.Stop()"),"\xa0methods take full responsibility for starting and stopping the threads required for processing everything asynchronously.\xa0",(0,r.kt)("strong",{parentName:"p"},"Do not"),"\xa0use any other\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Start"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Stop"),"\xa0functions other than the ones directly for the Tracker to prevent unknown behaviours."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING"),": The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"LiteDBStorage"),"\xa0object must be disposed of manually after stopping the Tracker so you will need to maintain a reference to this object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),"\xa0variables can all be altered directly from the Tracker via replicated setter methods."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"The Tracker contains several critical functions that must be used to start Tracking."),(0,r.kt)("h3",{id:"start"},(0,r.kt)("inlineCode",{parentName:"h3"},"Start(...)")),(0,r.kt)("p",null,"This function must be called before any events will start being stored or sent. This is due to the fact that we do not want to start any background processing from the constructors so it is left up to the developer to choose when to start everything up."),(0,r.kt)("p",null,"If you attempt to access the Tracker singleton before Starting it an exception will be thrown."),(0,r.kt)("p",null,"This function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Starts the background emitter thread"),(0,r.kt)("li",{parentName:"ul"},"Starts the background session check timer (Optional)")),(0,r.kt)("p",null,"Once this is run everything should be in place for asynchronous event tracking."),(0,r.kt)("h3",{id:"stop"},(0,r.kt)("inlineCode",{parentName:"h3"},"Stop()")),(0,r.kt)("p",null,"If you need to halt the Tracker from tracking events you can run this function. This will bring all event processing, sending and collection to a halt and nothing will be started again until\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Start(...)"),"\xa0is fired again."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING"),": If you are using Client Sessionization stopping and then restarting the Tracker will result in the session index incrementing."),(0,r.kt)("h3",{id:"trackievent-subject"},(0,r.kt)("inlineCode",{parentName:"h3"},"Track(IEvent, Subject)")),(0,r.kt)("p",null,"This is the function used for Tracking all events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tracker.Instance.Track(IEvent newEvent, Subject eventSubject = null);\n")))}d.isMDXComponent=!0}}]);