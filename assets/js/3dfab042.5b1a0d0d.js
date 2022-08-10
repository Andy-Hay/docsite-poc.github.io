"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[30708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={title:"Migration guide for Snowplow iOS Tracker SDK from version 1.x to 2.0",date:"2021-03-24",sidebar_position:50},a=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-ios-tracker-sdk-from-version-1-x-to-2-0/index",id:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-ios-tracker-sdk-from-version-1-x-to-2-0/index",title:"Migration guide for Snowplow iOS Tracker SDK from version 1.x to 2.0",description:"This section describes the main changes when converting an applications instrumentation of the Snowplow iOS tracker SDK from version 1.x to version 2.0.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-ios-tracker-sdk-from-version-1-x-to-2-0/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-ios-tracker-sdk-from-version-1-x-to-2-0",slug:"/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-ios-tracker-sdk-from-version-1-x-to-2-0/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-ios-tracker-sdk-from-version-1-x-to-2-0/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:50,frontMatter:{title:"Migration guide for Snowplow iOS Tracker SDK from version 1.x to 2.0",date:"2021-03-24",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Migration guide for Snowplow Android Tracker SDK from version 1.x to 2.0",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-android-tracker-sdk-from-version-1-x-to-2-0/"},next:{title:"Previous versions",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/"}},s={},c=[{value:"The new approach",id:"the-new-approach",level:2},{value:"Setup of the tracker",id:"setup-of-the-tracker",level:3},{value:"Low level migration from 1.x",id:"low-level-migration-from-1x",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the main changes when converting an applications instrumentation of the Snowplow iOS tracker SDK from version 1.x to version 2.0."),(0,i.kt)("h2",{id:"the-new-approach"},"The new approach"),(0,i.kt)("p",null,"The main objective of this new release is a revision of the public API. Currently, the tracker configuration requires the creation of the Tracker and Emitter components. Optionally, the Subject component can be configured as well. Then both need to be passed to the Tracker component. The version 2.0 simplifies this process, letting the developer to specify the configuration with Configuration objects and passing them to a ",(0,i.kt)("inlineCode",{parentName:"p"},"createTracker")," method able to return the tracker ready to use, without any other extra steps."),(0,i.kt)("p",null,"The tracker has been also updated improving the compatibility with Swift. Now, the classes of the public API don't need the ",(0,i.kt)("inlineCode",{parentName:"p"},"SP")," prefix required on Objective-C."),(0,i.kt)("h3",{id:"setup-of-the-tracker"},"Setup of the tracker"),(0,i.kt)("p",null,"The entry point to setup the tracker is now the ",(0,i.kt)("inlineCode",{parentName:"p"},"Snowplow")," class and the ",(0,i.kt)("inlineCode",{parentName:"p"},"createTracker")," methods. They need a namespace string which is now mandatory. The namespace string uniquely identifies the tracker in the app. It's important to note that all the events not sent to the collector but stored in the tracker are attached to the namespace string. This means that if a new configuration uses a different namespace, all those unsent event will still stored in the tracker, in a sort of zombie state, with no way to send them to any collector. To send them you need to reuse the original namespace string or delete them."),(0,i.kt)("p",null,"Fine tuning of the tracker is now possible with Configuration classes."),(0,i.kt)("p",null,"These are the classes now available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NetworkConfiguration"),": to configure network connection with the Snowplow collector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TrackerConfiguration"),": to configure contexts and automatic events of the tracker, and general behaviour."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SessionConfiguration"),": to configure session behaviour."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EmitterConfiguration"),": to fine tune about how the tracker sends events to the collector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SubjectConfiguration"),": to specify details to send with events about the user and the platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GdprConfiguration"),": to configure the GDPR context."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GlobalContextsConfiguration"),": to configure the GlobalContexts feature to dynamically send created contexts with some selected events.")),(0,i.kt)("p",null,"They replace many of the settings previously set on the builders for the Tracker, Subject and Emitter components."),(0,i.kt)("p",null,"An example configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func initTracker(trackerNamespace: String) -&gt; TrackerController {\n        let networkConfig = NetworkConfiguration(endpoint: "https://snowplow-collector-url.com")\n        let trackerConfig = TrackerConfiguration()\n            .sessionContext(true)\n            .platformContext(true)\n            .applicationContext(true)\n            .lifecycleAutotracking(true)\n            .screenViewAutotracking(true)\n            .screenContext(true)\n            .exceptionAutotracking(true)\n            .installAutotracking(true)\n            .diagnosticAutotracking(true)\n        let sessionConfig = SessionConfiguration(\n            foregroundTimeout: Measurement(value: 60, unit: .seconds),\n            backgroundTimeout: Measurement(value: 30, unit: .seconds)\n        )\n        let gdprConfig = GDPRConfiguration(\n            basis: .consent, \n            documentId: "id", \n            documentVersion: "1.0", \n            documentDescription: "description"\n        )\n        \n        return Snowplow.createTracker(\n            namespace: trackerNamespace,\n            network: networkConfig,\n            configurations: [trackerConfig, emitterConfig, sessionConfig, gdprConfig]);\n}\n')),(0,i.kt)("p",null,"The tracker can be controlled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrackerController")," (the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tracker")," class is now deprecated). Through the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrackerController")," it will be possible to update settings at runtime and get information about the tracking state. From the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrackerController")," it's also possible to access all the other controllers. This allows you to access and update settings about communication with the collector, emission of the events, session of the tracker (if enabled) and so on. In general, there is a specific controller for each area covered by a configuration. All of them are accessible through the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrackerController"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Please, don't retain a reference to the sub-controllers. If you invalidate or recreate the tracker, all the sub-controller instances will no longer be active."),(0,i.kt)("h2",{id:"low-level-migration-from-1x"},"Low level migration from 1.x"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS minimum supported version is bumped to iOS 9.0.\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifecycleAutotracking")," (background and foreground events and indexes on sessions) are optional and off by default.\n"),(0,i.kt)("li",{parentName:"ul"},"Enum ",(0,i.kt)("inlineCode",{parentName:"li"},"SPProtocol")," items have been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"SPProtocolHttp")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SPProtocolHttps"),".\n"),(0,i.kt)("li",{parentName:"ul"},"Enum ",(0,i.kt)("inlineCode",{parentName:"li"},"SPRequestOptions")," has been renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"SPHttpMethod")," and its items are ",(0,i.kt)("inlineCode",{parentName:"li"},"SPHttpMethodGet")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SPHttpMethodPost"),".\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Snowplow")," class is now the entry point to create trackers. The old ",(0,i.kt)("inlineCode",{parentName:"li"},"Snowplow")," class containing the constants has been renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"SPTrackerConstants"),".\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPPrimitive")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SPSelfDescribing")," have been renamed as ",(0,i.kt)("inlineCode",{parentName:"li"},"SPPrimitiveAbstract")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SPSelfDescribingAbstract"),".\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPUnstructured")," class used for self-describing events has been renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"SPSelfDescribing"),".\n"),(0,i.kt)("li",{parentName:"ul"},"The property ",(0,i.kt)("inlineCode",{parentName:"li"},"trueTimestamp")," changed the type from ",(0,i.kt)("inlineCode",{parentName:"li"},"NSNumber")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"NSDate"),".\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," on Tracker is now mandatory for the correct operativity.\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," field on ",(0,i.kt)("inlineCode",{parentName:"li"},"ScreenView")," is now mandatory.\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EcommerceItem"),"s aren't forced to have the same timestamp of the ",(0,i.kt)("inlineCode",{parentName:"li"},"EcommerceTransaction")," event.\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPEcommerceItem")," constructor doesn't require ",(0,i.kt)("inlineCode",{parentName:"li"},"itemId")," as it's added by the tracker when the e-commerce event is sent.\n"),(0,i.kt)("li",{parentName:"ul"},"Deprecated classes of the previous API (SPTracker, SPEmitter, SPSubject, ...).\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For the versions 2.0 and 2.1"),", the application install events report the timestamp of when installation happened in the ",(0,i.kt)("inlineCode",{parentName:"li"},"true_timestamp")," rather than the ",(0,i.kt)("inlineCode",{parentName:"li"},"device_timestamp"),". It caused an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-objc-tracker/issues/625"},"issue")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"derived_timestamp"),". For this reason, since the version 2.2, the application install events report the timestamp of then installation happened in the ",(0,i.kt)("inlineCode",{parentName:"li"},"device_timestamp")," like the previous 1.x versions.")))}m.isMDXComponent=!0}}]);