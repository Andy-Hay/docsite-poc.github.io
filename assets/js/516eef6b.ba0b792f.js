"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[66109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Installation and set-up",date:"2022-03-24",sidebar_position:10},l=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/index",id:"migrated/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/index",title:"Installation and set-up",description:"Installing",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up",slug:"/migrated/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:10,frontMatter:{title:"Installation and set-up",date:"2022-03-24",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Java Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/"},next:{title:"Tracking events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"}},p={},c=[{value:"Installing",id:"installing",level:2},{value:"Install using Maven",id:"install-using-maven",level:3},{value:"Install using Gradle",id:"install-using-gradle",level:3},{value:"Install by direct download",id:"install-by-direct-download",level:3},{value:"Install in Scala project (SBT)",id:"install-in-scala-project-sbt",level:3},{value:"Setting up",id:"setting-up",level:2},{value:"Configuring the <code>Tracker</code>",id:"configuring-the-tracker",level:3},{value:"Configuring the <code>Emitter</code>",id:"configuring-the-emitter",level:3},{value:"Logging",id:"logging",level:3}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"The Snowplow Java tracker has been built and tested using Java versions 8, 11 and 17, so should work within any Java application built using JDK8 upwards. The Java tracker is also usable from Scala."),(0,r.kt)("p",null,"The current tracker version is 0.12 (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"GitHub"),")."),(0,r.kt)("h3",{id:"install-using-maven"},"Install using Maven"),(0,r.kt)("p",null,"Add into your project\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-java-tracker</artifactId>\n    <version>0.12.0</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"install-using-gradle"},"Install using Gradle"),(0,r.kt)("p",null,"From version 0.10.1 onwards, we have provided out-of-the-box support for sending events via OkHttp or Apache HTTP. The appropriate dependencies must be specified. The default tracker configuration uses OkHttp."),(0,r.kt)("p",null,"Add this into your project\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," for the default installation with OkHttp support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:0.12.0'\n    implementation ('com.snowplowanalytics:snowplow-java-tracker:0.12.0') {\n        capabilities {\n            requireCapability 'com.snowplowanalytics:snowplow-java-tracker-okhttp-support'\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Adding Apache HTTP support instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:0.12.0'\n    implementation ('com.snowplowanalytics:snowplow-java-tracker:0.12.0') {\n        capabilities {\n            requireCapability 'com.snowplowanalytics:snowplow-java-tracker-apachehttp-support'\n        }\n    }\n}\n")),(0,r.kt)("p",null,"If you are using your own ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClientAdapter")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:0.12.0'\n}\n")),(0,r.kt)("h3",{id:"install-by-direct-download"},"Install by direct download"),(0,r.kt)("p",null,"You can also manually insert the tracker by downloading the jar directly from ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=a:snowplow-java-tracker"},"Maven Central"),"."),(0,r.kt)("h3",{id:"install-in-scala-project-sbt"},"Install in Scala project (SBT)"),(0,r.kt)("p",null,"The Snowplow Java tracker is also usable from Scala. Add this to your SBT config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Dependency\nval snowplowTracker = "com.snowplowanalytics"  % "snowplow-java-tracker"  % "0.12.0"\n')),(0,r.kt)("h2",{id:"setting-up"},"Setting up"),(0,r.kt)("p",null,"The simplest initialization looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import com.snowplowanalytics.snowplow.tracker.*;\nimport com.snowplowanalytics.snowplow.tracker.emitter.*;\n\nBatchEmitter emitter = BatchEmitter.builder()\n        .url("http://collectorEndpoint")\n        .build();\nTracker tracker = new Tracker\n        .TrackerBuilder(emitter, "trackerNamespace", "appId")\n        .build();\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"Java tracker Github repository"),' includes a mini demo, "simple-console". Follow the instructions in the README to send one event of each type to your event collector. Simple-console is provided as a simple reference app to help you set up the tracker.'),(0,r.kt)("p",null,"These are the required objects for tracking using the Java tracker:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tracker")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracks events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Emitter")," (",(0,r.kt)("inlineCode",{parentName:"td"},"BatchEmitter"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Sends event payloads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subclasses of ",(0,r.kt)("inlineCode",{parentName:"td"},"Event")),(0,r.kt)("td",{parentName:"tr",align:null},"What you want to track")))),(0,r.kt)("h3",{id:"configuring-the-tracker"},"Configuring the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Tracker")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," class has the responsibility for tracking ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"},"events"),". Certain properties can also be set when creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," that will be attached to all events. These are ",(0,r.kt)("inlineCode",{parentName:"p"},"trackerNamespace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"."),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"trackerNamespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," are required arguments for ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerBuilder"),". Snowplow events are designed to be stored in a single data warehouse/lake, regardless of their source, to make data modelling easier and provide a single valuable source of truth for your business. The tracker namespace allows you to distinguish events sent by this specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),", if you are using multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," objects within your app. The ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," allows you to identify events from this specific application, if you are tracking from multiple places."),(0,r.kt)("p",null,"The other Tracker property that will be added to all tracked events is ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),". This is set by default to ",(0,r.kt)("inlineCode",{parentName:"p"},"srv"),' - "server-side app". To set another valid platform type, use the optional ',(0,r.kt)("inlineCode",{parentName:"p"},"TrackerBuilder")," method ",(0,r.kt)("inlineCode",{parentName:"p"},"platform()"),"."),(0,r.kt)("p",null,"The final two ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerBuilder")," methods are ",(0,r.kt)("inlineCode",{parentName:"p"},"base64()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subject()"),". By default, JSONs within the event are sent base-64 encoded. This can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," here at ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," initialization. The ",(0,r.kt)("inlineCode",{parentName:"p"},"subject()")," method is for adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),", explained ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/"},"here"),"."),(0,r.kt)("p",null,"To initialize a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," with all the options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tracker tracker = new Tracker.TrackerBuilder(emitter, namespace, appId)\n            .base64(false)\n            .platform(DevicePlatform.Desktop)\n            .subject(Subject)\n            .build();\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," will produce events with the ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," value ",(0,r.kt)("inlineCode",{parentName:"p"},"pc"),"."),(0,r.kt)("p",null,"See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/Tracker.TrackerBuilder.html"},"TrackerBuilder")," details."),(0,r.kt)("h3",{id:"configuring-the-emitter"},"Configuring the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Emitter")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter")," class manages the buffering and sending of tracked events. Event sending configuration is described fully ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/configuring-how-events-are-sent/"},"on this page"),"."),(0,r.kt)("p",null,"See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/emitter/BatchEmitter.Builder.html"},"BatchEmitter.Builder")," and ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/emitter/AbstractEmitter.Builder.html"},"AbstractEmitter.Builder")," options."),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"Logging in the Tracker is done using SLF4J. The majority of the logging set as ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," so it will not overly populate your own logging."),(0,r.kt)("p",null,"Since Java tracker v0.11, user-supplied values are only logged at ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," level."))}d.isMDXComponent=!0}}]);