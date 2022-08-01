"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[35567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Initialisation",date:"2020-02-25",sidebar_position:20},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation/index",id:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation/index",title:"Initialisation",description:"Assuming you have completed the\xa0Actionscript 3 Tracker Setup\xa0for your project, you are now ready to initialize the AS3 Tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation",slug:"/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:20,frontMatter:{title:"Initialisation",date:"2020-02-25",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/setup/"},next:{title:"Adding extra data: the Subject class",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/"}},c={},p=[{value:"Importing the module",id:"importing-the-module",level:3},{value:"Creating a Tracker",id:"creating-a-tracker",level:3},{value:"<code>emitter</code>",id:"emitter",level:4},{value:"<code>subject</code>",id:"subject",level:4},{value:"<code>namespace</code>",id:"namespace",level:4},{value:"<code>appId</code>",id:"appid",level:4},{value:"<code>base64Encoded</code>",id:"base64encoded",level:4},{value:"Change the tracker&#39;s platform with\xa0<code>setPlatform</code>",id:"change-the-trackers-platform-withsetplatform",level:3}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Assuming you have completed the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/setup/"},"Actionscript 3 Tracker Setup"),"\xa0for your project, you are now ready to initialize the AS3 Tracker."),(0,r.kt)("h3",{id:"importing-the-module"},"Importing the module"),(0,r.kt)("p",null,"Import the AS3 Tracker's classes into your AS3 code like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.snowplowanalytics.snowplow.tracker.*;\nimport com.snowplowanalytics.snowplow.tracker.emitter.*;\nimport com.snowplowanalytics.snowplow.tracker.payload.*;\n")),(0,r.kt)("p",null,"That's it - you are now ready to initialize a Tracker instance."),(0,r.kt)("h3",{id:"creating-a-tracker"},"Creating a Tracker"),(0,r.kt)("p",null,"To instantiate a tracker in your code simply instantiate the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),"\xa0interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Tracker(emitter:Emitter, namespace:String, appId:String, subject:Subject, stage:Stage = null, base64Encoded:Boolean = true)\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'var t1:Tracker = new Tracker(emitter, "AF003", "cf", user1Subject, this.stage, true);\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emitter")),(0,r.kt)("td",{parentName:"tr",align:null},"The Emitter object you create"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Tracker instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appId")),(0,r.kt)("td",{parentName:"tr",align:null},"The application ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},"The Subject that defines a user"),(0,r.kt)("td",{parentName:"tr",align:null},"No (default null)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stage")),(0,r.kt)("td",{parentName:"tr",align:null},"The stage property of a DisplayObject"),(0,r.kt)("td",{parentName:"tr",align:null},"No (Default null)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64Encoded")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable\xa0",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"base 64 encoding")),(0,r.kt)("td",{parentName:"tr",align:null},"No (Default true)")))),(0,r.kt)("h4",{id:"emitter"},(0,r.kt)("inlineCode",{parentName:"h4"},"emitter")),(0,r.kt)("p",null,"The emitter to which the tracker will send events. See\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/ActionScript3-Tracker#5-sending-event-emitter"},"Emitters"),"\xa0for more on emitter configuration."),(0,r.kt)("h4",{id:"subject"},(0,r.kt)("inlineCode",{parentName:"h4"},"subject")),(0,r.kt)("p",null,"The user which the Tracker will track. This should be an instance of the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/ActionScript3-Tracker#3-adding-extra-data-the-subject-class"},"Subject"),"\xa0class. You don't need to set this during Tracker construction; you can use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.setSubject"),"\xa0method afterwards. In fact, you don't need to create a subject at all. If you don't, though, your events won't contain user-specific data such as timezone and language."),(0,r.kt)("h4",{id:"namespace"},(0,r.kt)("inlineCode",{parentName:"h4"},"namespace")),(0,r.kt)("p",null,"If provided, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"\xa0argument will be attached to every event fired by the new tracker. This allows you to later identify which tracker fired which event if you have multiple trackers running."),(0,r.kt)("h4",{id:"appid"},(0,r.kt)("inlineCode",{parentName:"h4"},"appId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),"\xa0argument lets you set the application ID to any string."),(0,r.kt)("h4",{id:"base64encoded"},(0,r.kt)("inlineCode",{parentName:"h4"},"base64Encoded")),(0,r.kt)("p",null,"By default, unstructured events and custom contexts are encoded into Base64 to ensure that no data is lost or corrupted. You can turn encoding on or off using the Boolean\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"base64Encoded"),"\xa0argument."),(0,r.kt)("h3",{id:"change-the-trackers-platform-withsetplatform"},"Change the tracker's platform with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setPlatform")),(0,r.kt)("p",null,"You can change the platform by calling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'tracker.setPlatform("cnsl");\n')),(0,r.kt)("p",null,"For a full list of supported platforms, please see the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Snowplow-Tracker-Protocol"},"Snowplow Tracker Protocol"),"."))}d.isMDXComponent=!0}}]);