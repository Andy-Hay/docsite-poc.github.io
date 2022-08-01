"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[57402],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63349:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Emitter",date:"2020-02-26",sidebar_position:40},o=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/net-tracker/emitter/index",id:"migrated/collecting-data/collecting-from-own-applications/net-tracker/emitter/index",title:"Emitter",description:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/emitter/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/net-tracker/emitter",slug:"/migrated/collecting-data/collecting-from-own-applications/net-tracker/emitter/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/emitter/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:40,frontMatter:{title:"Emitter",date:"2020-02-26",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker/"},next:{title:"Subject",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/subject/"}},p={},s=[{value:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl",level:4},{value:"Emitter Constructor",id:"emitter-constructor",level:3},{value:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-1",level:4},{value:"Endpoint Constructor",id:"endpoint-constructor",level:3},{value:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-2",level:4},{value:"Storage Constructor",id:"storage-constructor",level:3},{value:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-3",level:4},{value:"Queue Constructor",id:"queue-constructor",level:3},{value:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-4",level:4},{value:"Payload Serializer Constructor",id:"payload-serializer-constructor",level:3},{value:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-5",level:4}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-5"}),"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)"),(0,r.kt)("p",null,"The Emitter object is responsible for sending and storing all events."),(0,r.kt)("p",null,"We have one emitter available currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AsyncEmitter"),"\xa0: Fully asynchronous operation which uses threads to perform all of its operations.")),(0,r.kt)("p",null,"The Emitter depends on four other objects being built:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IEndpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IStorage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPersistentBlockingQueue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPayloadToString"))),(0,r.kt)("h3",{id:"emitter-constructor"},"Emitter Constructor"),(0,r.kt)("h4",{id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-1"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-6"}),"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"The endpoint object configured for sending events"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queue")),(0,r.kt)("td",{parentName:"tr",align:null},"The queue to be used to push and pop events from"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sendLimit")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of events to get from the queue at a time"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stopPollIntervalMs")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time to wait before checking for more events"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sendSuccessMethod")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional callback function which will report event success and failure counts"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deviceOnlineMethod")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional delegate function which will be used to check if the device is online"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logger")),(0,r.kt)("td",{parentName:"tr",align:null},"The logger to use within the application"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")))),(0,r.kt)("p",null,"A full Emitter construction should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var endpoint = new SnowplowHttpCollectorEndpoint(emitterUri, method: method, port: port, protocol: protocol, l: logger);\nvar storage = new LiteDBStorage("events.db");\nvar queue = new PersistentBlockingQueue(storage, new PayloadToJsonString());\n\nAsyncEmitter emitter = new AsyncEmitter(endpoint, queue, l: logger);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The send limit can impact performance greatly as it determines how often we need to perform I/O to the disk and how big the POSTed event batches can be."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING"),": If you are sending events via GET note that each event is sent as its own task, so this has the potential to launch 100 outbound tasks in parallel. It is recommended to lower this range if using GET to 10-15 as a maximum."),(0,r.kt)("h3",{id:"endpoint-constructor"},"Endpoint Constructor"),(0,r.kt)("h4",{id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-2"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-7"}),"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)"),(0,r.kt)("p",null,"This is a container for information about how to reach your collector."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},"The collector uri to send events to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"protocol")),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol to use when sending events (HTTP / HTTPs)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"HttpProtocol.HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"If the collector is not on port 80"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"The method to use when sending (GET / POST)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"HttpMethod.GET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postMethod")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom method for sending events via POST"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getMethod")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom method for sending events via GET"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byteLimitPost")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum byte limit when sending a POST request"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"40000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byteLimitGet")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum byte limit when sending a GET request"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"40000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logger")),(0,r.kt)("td",{parentName:"tr",align:null},"The logger to use within the application"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")))),(0,r.kt)("p",null,"We have one endpoint available currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SnowplowHttpCollectorEndpoint"))),(0,r.kt)("p",null,"A full Endpoint construction should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'SnowplowHttpCollectorEndpoint endpoint = new SnowplowHttpCollectorEndpoint("com.acme-collector", protocol: HttpProtocol.HTTPS, method: HttpMethod.GET, l: logger);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If any individual event exceeds the byte limits set then this event will be sent - but it will be assumed to have succeeded. This is to prevent constanstly attempting to send overly large events."),(0,r.kt)("h3",{id:"storage-constructor"},"Storage Constructor"),(0,r.kt)("h4",{id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-3"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-8"}),"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"The file path to store the database file at"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")))),(0,r.kt)("p",null,"We have one storage target available currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LiteDBStorage"))),(0,r.kt)("p",null,"A full Storage construction should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'LiteDBStorage storage = new LiteDBStorage("events.db");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": When using the Tracker within Xamarin you will need to fetch a correct path for internal storage. Some example code for fetching this path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Android\npublic string GetLocalFilePath(string filename)\n{\n  string path = Environment.GetFolderPath(Environment.SpecialFolder.Personal);\n  return Path.Combine(path, filename);\n}\n\n// iOS\npublic string GetLocalFilePath(string filename)\n{\n  string docFolder = Environment.GetFolderPath(Environment.SpecialFolder.Personal);\n  string libFolder = Path.Combine(docFolder, "..", "Library", "Databases");\n\n  if (!Directory.Exists(libFolder))\n  {\n    Directory.CreateDirectory(libFolder);\n  }\n\n  return Path.Combine(libFolder, filename);\n}\n')),(0,r.kt)("h3",{id:"queue-constructor"},"Queue Constructor"),(0,r.kt)("h4",{id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-4"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-9"}),"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"storage")),(0,r.kt)("td",{parentName:"tr",align:null},"The storage object to use with the queue"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payloadToString")),(0,r.kt)("td",{parentName:"tr",align:null},"Serializer for Payload objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")))),(0,r.kt)("p",null,"We have one queue available currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PersistentBlockingQueue"))),(0,r.kt)("p",null,"A full queue construction should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"PersistentBlockingQueue queue = new PersistentBlockingQueue(storage, new PayloadToJsonString());\n")),(0,r.kt)("h3",{id:"payload-serializer-constructor"},"Payload Serializer Constructor"),(0,r.kt)("h4",{id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-5"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl-10"}),"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)"),(0,r.kt)("p",null,"We have one payload serializer available currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PayloadToJsonString"))),(0,r.kt)("p",null,"A full queue construction should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"PayloadToJsonString serializer = new PayloadToJsonString();\n")),(0,r.kt)("p",null,"This controls how we queue information for internal use."))}u.isMDXComponent=!0}}]);