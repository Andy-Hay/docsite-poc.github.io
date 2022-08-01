"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[31071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Initialization",date:"2020-02-26",sidebar_position:20},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/net-tracker/initialization/index",id:"migrated/collecting-data/collecting-from-own-applications/net-tracker/initialization/index",title:"Initialization",description:"Assuming you have completed the\xa0.NET Tracker Setup\xa0for your project, you are now ready to initialize the .NET Tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/initialization/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/net-tracker/initialization",slug:"/migrated/collecting-data/collecting-from-own-applications/net-tracker/initialization/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/initialization/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:20,frontMatter:{title:"Initialization",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/setup/"},next:{title:"Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/tracker/"}},c={},s=[{value:"Importing the library",id:"importing-the-library",level:3},{value:"Creating a tracker",id:"creating-a-tracker",level:3},{value:"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)",id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Assuming you have completed the\xa0.NET Tracker Setup\xa0for your project, you are now ready to initialize the .NET Tracker."),(0,o.kt)("h3",{id:"importing-the-library"},"Importing the library"),(0,o.kt)("p",null,"Add the following\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"using"),"\xa0lines to the top of your\xa0",(0,o.kt)("inlineCode",{parentName:"p"},".cs"),"\xa0scripts to access the Tracker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Snowplow.Tracker.Emitters;\nusing Snowplow.Tracker.Endpoints;\nusing Snowplow.Tracker.Logging;\nusing Snowplow.Tracker.Models;\nusing Snowplow.Tracker.Models.Events;\nusing Snowplow.Tracker.Models.Adapters;\nusing Snowplow.Tracker.Queues;\nusing Snowplow.Tracker.Storage;\n")),(0,o.kt)("p",null,"You should now be able to setup the Tracker!"),(0,o.kt)("h3",{id:"creating-a-tracker"},"Creating a tracker"),(0,o.kt)("h4",{id:"using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#using-snowplowtracker-net-standard-or-snowplowtrackerplatformextensions-pcl"}),"Using Snowplow.Tracker (.NET Standard) or Snowplow.Tracker.PlatformExtensions (PCL)"),(0,o.kt)("p",null,"To use the Tracker in your code simply instantiate the Tracker interface with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create logger\nvar logger = new ConsoleLogger();\n\n// Controls the sending of events\nvar endpoint = new SnowplowHttpCollectorEndpoint(emitterUri, method: method, port: port, protocol: protocol, l: logger);\n\n// Controls the storage of events\n// NOTE: You must dispose of storage yourself when closing your application!\nvar storage = new LiteDBStorage("events.db");\n\n// Controls queueing events\nvar queue = new PersistentBlockingQueue(storage, new PayloadToJsonString());\n\n// Controls pulling events of the queue and pushing them to the sender\nvar emitter = new AsyncEmitter(endpoint, queue, l: logger);\n\n// Contains information about who you are tracking\nvar subject = new Subject().SetPlatform(Platform.Mob).SetLang("EN");\n\nTracker.Tracker.Instance.Start(emitter: emitter, subject: subject, trackerNamespace: "some namespace", appId: "some appid", l: logger);\n')),(0,o.kt)("p",null,"This starts a global singleton Tracker which can be accessed anywhere via the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker.Tracker.Instance.{{ method }}"),"\xa0chain."))}u.isMDXComponent=!0}}]);