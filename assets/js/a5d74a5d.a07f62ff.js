"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[99660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"React Native Tracker v0 reference",date:"2021-08-09",sidebar_position:0},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference/index",id:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference/index",title:"React Native Tracker v0 reference",description:"This documentation page is about a previous version of the React Native tracker. Go to the latest docs.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference",slug:"/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"React Native Tracker v0 reference",date:"2021-08-09",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Previous versions",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/"},next:{title:"Migrating from v0 to v1",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/"}},s={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Quickstart Guide",id:"quickstart-guide",level:3},{value:"Quick migration from 0.1.x",id:"quick-migration-from-01x",level:4},{value:"What\u2019s next?",id:"whats-next",level:3},{value:"Automatic Tracking Features",id:"automatic-tracking-features",level:4},{value:"Examples",id:"examples",level:3},{value:"Tracking custom events",id:"tracking-custom-events",level:4},{value:"Attaching Entities to events",id:"attaching-entities-to-events",level:4},{value:"Features",id:"features",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Initialisation Options",id:"initialisation-options",level:4},{value:"Tracker configuration",id:"tracker-configuration",level:4},{value:"Setting the Subject",id:"setting-the-subject",level:4},{value:"Subject properties",id:"subject-properties",level:4},{value:"Tracking Methods",id:"tracking-methods",level:3},{value:"Screen View Tracking",id:"screen-view-tracking",level:4},{value:"Custom event tracking",id:"custom-event-tracking",level:4},{value:"Structured event tracking",id:"structured-event-tracking",level:4},{value:"Page View Tracking",id:"page-view-tracking",level:4},{value:"Data Modelling",id:"data-modelling",level:2},{value:"Important features for Data Modelling",id:"important-features-for-data-modelling",level:3},{value:"User identification",id:"user-identification",level:4},{value:"Aggregation",id:"aggregation",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This documentation page is about a previous version of the React Native tracker. ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/"},"Go to the latest docs"),"."),(0,i.kt)("p",null,"The Snowplow React Native Tracker is a module which imports the Native Snowplow ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/objective-c-tracker/"},"iOS")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/android-tracker/"},"Android")," trackers as native modules, available for use in React Native projects."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started",(0,i.kt)("a",{parentName:"h2",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#getting-started"})),(0,i.kt)("h3",{id:"installation"},"Installation",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#installation"})),(0,i.kt)("p",null,"Install the tracker with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @snowplow/react-native-tracker --save\n")),(0,i.kt)("h3",{id:"quickstart-guide"},"Quickstart Guide",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#quickstart-guide"})),(0,i.kt)("p",null,"Minimal setup \u2013 initialise the tracker and track a screen view:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { createTracker } from '@snowplow/react-native-tracker';\n\nconst tracker = createTracker('namespace', {\n  endpoint: 'my-endpoint.com',\n  appId: 'my-app-id'\n});\n\ntracker.trackScreenViewEvent({screenName: 'myScreenName'});\n")),(0,i.kt)("h4",{id:"quick-migration-from-01x"},"Quick migration from 0.1.x"),(0,i.kt)("p",null,"In the previous 0.1.x releases, initializing the tracker was done differently. As an example describing the API change for a quick migration to v0.2.0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/* Previous API (v0.1.x) \nimport Tracker from '@snowplow/react-native-tracker';                       // (a)\n\nconst initPromise = Tracker.initialize({                                    // (b)\n  endpoint: 'my-endpoint.com',\n  namespace: 'my-namespace',\n  appId: 'my-app-id'\n});\ninitPromise                                                                 // (c)\n  .then(() => Tracker.trackScreenViewEvent({screenName: 'myScreenName'}));  // (d)\n*/ /* --- Vs --- */\n/* Current API (v0.2.0) */\nimport { createTracker } from '@snowplow/react-native-tracker';\n\nconst tracker = createTracker('namespace', {\n  endpoint: 'my-endpoint.com',\n  appId: 'my-app-id'\n});\ntracker.trackScreenViewEvent({screenName: 'myScreenName'});\n")),(0,i.kt)("p",null,"In short:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(a) The previous ",(0,i.kt)("inlineCode",{parentName:"li"},"Tracker")," class has been removed. Instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"Tracker.initialize"),", use the ",(0,i.kt)("inlineCode",{parentName:"li"},"createTracker")," function instead."),(0,i.kt)("li",{parentName:"ul"},"(b) The tracker ",(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," is now a required initialization parameter outside the tracker configuration object."),(0,i.kt)("li",{parentName:"ul"},"(c) In v0.2.0 there is no need to await tracker initialization, since async issues are now handled internally."),(0,i.kt)("li",{parentName:"ul"},"(d) The ",(0,i.kt)("inlineCode",{parentName:"li"},"track..")," methods are now properties of the tracker object instead of static class methods.")),(0,i.kt)("h3",{id:"whats-next"},"What\u2019s next?",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#what%E2%80%99s-next"})),(0,i.kt)("h4",{id:"automatic-tracking-features"},"Automatic Tracking Features"),(0,i.kt)("p",null,"Many of the automatic tracking options available on iOS and Android are also available in React Native \u2013 these can be enabled in the configuration passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"createTracker"),". For example, to set up tracking of lifecycle events, with the mobile context and session context enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { createTracker } from '@snowplow/react-native-tracker';\n\nconst tracker = createTracker('my-namespace', {\n  endpoint: 'my-endpoint.com',\n  appId: 'my-app-id',\n  lifecycleEvents: true,\n  platformContext: true,\n  sessionContext: true\n});\n")),(0,i.kt)("p",null,"See the configuration section below for a full list of options."),(0,i.kt)("h3",{id:"examples"},"Examples",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#examples"})),(0,i.kt)("h4",{id:"tracking-custom-events"},"Tracking custom events"),(0,i.kt)("p",null,"Custom events may be tracked using the ",(0,i.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackSelfDescribingEvent({\n  schema: 'iglu:com.acme/example/jsonschema/1-0-0',\n  data: {someExampleField: 'Hello World'}\n});\n")),(0,i.kt)("p",null,"See Custom Event Tracking Section below for more detail."),(0,i.kt)("h4",{id:"attaching-entities-to-events"},"Attaching Entities to events"),(0,i.kt)("p",null,"All tracker methods take two arguments: A JSON of key-value pairs for the event\u2019s properties, and an optional array of contexts, i.e. of self-describing JSONs to be attached as entities. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackScreenViewEvent(\n   { screenName: 'myScreenName' },\n   [\n     {\n       schema: 'iglu:com.acme/example_entity/jsonschema/1-0-0',\n       data: {someOtherExampleField: 'Foo Bar Baz'}\n     },\n   ]\n );\n\n tracker.trackSelfDescribingEvent(\n   {\n     schema: 'iglu:com.acme/example_event/jsonschema/1-0-0',\n     data: {someExampleField: 'Hello World'}\n   },\n   [\n     {\n       schema: 'iglu:com.acme/example_entity/jsonschema/1-0-0',\n       data: {someOtherExampleField: 'Foo Bar Baz'}\n     },\n   ]\n );\n")),(0,i.kt)("p",null,"An empty array is acceptable, which will attach no entities to the event."),(0,i.kt)("h2",{id:"features"},"Features",(0,i.kt)("a",{parentName:"h2",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#features"})),(0,i.kt)("h3",{id:"configuration"},"Configuration",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#configuration"})),(0,i.kt)("h4",{id:"initialisation-options"},"Initialisation Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createTracker()")," will instantiate an Emitter and Tracker instance of the native tracker in the app. It takes as arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the tracker namespace"),(0,i.kt)("li",{parentName:"ul"},"the tracker configuration object")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const tracker = createTracker('my-namespace', {\n  // required\n  endpoint: 'my-endpoint.com',\n  appId: 'my-app-id',\n\n  // optional\n  method: 'post',\n  protocol: 'https',\n  platformContext: true,\n  base64Encoded: true,\n  applicationContext: true,\n  lifecycleEvents: true,\n  screenContext: true,\n  sessionContext: true,\n  foregroundTimeout: 600,\n  backgroundTimeout: 300,\n  checkInterval: 15,\n  installTracking: true\n  }\n);\n")),(0,i.kt)("h4",{id:"tracker-configuration"},"Tracker configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endpoint"),": (string) \u2013 The Snowplow collector endpoint \u2013 omit the protocol."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"appId"),": (string) \u2013 The app ID. Used to identify the environment being tracked.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method"),": (",(0,i.kt)("inlineCode",{parentName:"li"},"'get'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'post'"),") \u2013 The HTTP method for requests. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"'post'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protocol"),": (",(0,i.kt)("inlineCode",{parentName:"li"},"'http'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'https'"),") \u2013 The HTTP protocol for requests. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"'https'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base64Encoded"),": (boolean) \u2013 Base64 encode custom events and contexts before sending. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformContext"),": (boolean) \u2013 Attach the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/mobile_context/jsonschema/1-0-1"},"platform context")," to all events \u2013 aka mobile context. The platform context contains operating system and device information, as well as the IDFV/IDFA values, if the app is configured to collect these. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"applicationContext"),": (boolean) \u2013 Attach the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.mobile/application/jsonschema/1-0-0"},"application context")," to all events. The application context contains app version and build number. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenContext"),": (boolean) \u2013 Attach the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.mobile/screen/jsonschema/1-0-0"},"screen context")," to all events. The screen context contains information about the current and previous screen, along with a screen view id, which is incremented on every screen view event, and can be used to aggregate events to a screen view level in modeling. It is a similar concept to the page view id on web. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sessionContext"),": (boolean) \u2013 Attach the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-1"},"client session context")," to all events. The client session context contains session ID and session index, which can be used to aggregate events to session level in modeling. This context also contains tracker-generated UUID for user identification. This UUID is generated on install of the app. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foregroundTimeout"),": (integer) \u2013 Where sessionContext is enabled, configures the period (in seconds) of inactivity while the app is in the foreground before a new session (ie a new session ID) is created. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"600")," (ten minutes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backgroundTimeout"),": (integer) \u2013 Where sessionContext is enabled, configure the period (in seconds) of inactivity while the app is in the background before a new session (ie a new session ID) is created. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"300")," (five minutes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"checkInterval"),": (integer) \u2013 Where sessionContext is enabled, configure the frequency (in seconds) with which the tracker performs a check for whether or not the foreground or background timeout has elapsed. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifecycleEvents"),": (boolean) \u2013 Track app lifecycle events, such as foreground and background events. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"installTracking"),": (boolean) \u2013 Track app install events. Defaults is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h4",{id:"setting-the-subject"},"Setting the Subject"),(0,i.kt)("p",null,"The subject is a persistent object containing global data that applies to all events, such as a manually set userId. Set the subject data using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setSubjectData()")," method. All parameters are optional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.setSubjectData({\n  userId: 'my-user-id',\n  screenWidth: 123,\n  screenHeight: 456,\n  colorDepth: 20,\n  timezone: 'Europe/London',\n  language: 'en',\n  ipAddress: '123.45.67.89',\n  useragent: '[some-user-agent-string]',\n  networkUserId: '5d79770b-015b-4af8-8c91-b2ed6faf4b1e',\n  domainUserId: '5d79770b-015b-4af8-8c91-b2ed6faf4b1e',\n  viewportWidth: 123,\n  viewportHeight: 456\n});\n")),(0,i.kt)("h4",{id:"subject-properties"},"Subject properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userId"),": (string) \u2013 Manually defined userId. Commonly used for user self-identification \u2013 for example after sign in. To unset the userid, pass a null value to this argument."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenWidth"),": (integer) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"dvce_screenwidth")," field. Must be accompanied by ",(0,i.kt)("inlineCode",{parentName:"li"},"screenHeight"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenHeight"),": (integer) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"dvce_screenheight")," field. Must be accompanied by ",(0,i.kt)("inlineCode",{parentName:"li"},"screenWidth"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewportWidth"),": (integer) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"br_viewwidth")," field. Must be accompanied by ",(0,i.kt)("inlineCode",{parentName:"li"},"viewportHeight"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewportHeight"),": (integer) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"br_viewheight")," field. Must be accompanied by ",(0,i.kt)("inlineCode",{parentName:"li"},"viewportWidth"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"colorDepth"),": (integer) \u2013 Populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"br_colordepth")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timezone"),": (string) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"os_timezone")," field. Should contain a valid database timezone code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language"),": (string) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"br_lang")," field. Should contain a valid ISO standard language code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ipAddress"),": (string) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_ipaddress")," field. Should contain a valid IP address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useragent"),": (string) \u2013 Overwrites the ",(0,i.kt)("inlineCode",{parentName:"li"},"useragent")," field. Should be a valid useragent string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"networkUserId"),": (string) \u2013 Populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"network_userid")," field. Typically used to link native tracking to in-app browser events tracked using the javascript Normally one would retrieve the network userid from the browser and pass it to the app. Should contain a valid UUID4 string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domainUserId"),": (string) \u2013 Populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"domain_userid")," field. Typically used to link native tracking to in-app browser events tracked using the javascript Normally one would retrieve the domain userid from the browser and pass it to the app. Should contain a valid UUID4 string.")),(0,i.kt)("h3",{id:"tracking-methods"},"Tracking Methods",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#tracking-methods"})),(0,i.kt)("h4",{id:"screen-view-tracking"},"Screen View Tracking"),(0,i.kt)("p",null,"Track a screen view with the ",(0,i.kt)("inlineCode",{parentName:"p"},"trackScreenViewEvent()")," method. Screen view events will auotomatically be populated with a screen view ID (UUID4), which increments each time a new screen view event fires. This id is also attached to the screen view context if enabled, which enables users to tie screen view events to all other events which happen on the screen, and to aggregate data per screen view."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackScreenViewEvent({\n  screenName: 'my-screen',\n  screenType: 'my-type',\n  transitionType: 'my-transition'\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenName"),": (string) \u2013 Developer-defined screen name.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenType"),": (string) \u2013 Developer-defined screen type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transitionType"),": (string) \u2013 Developer-defined transition type.")),(0,i.kt)("p",null,"To attach custom contexts, pass a second argument to the function, containing an array of self-describing JSON."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackScreenViewEvent(\n  {screenName: 'myScreenName'},\n  [{\n    schema: 'iglu:com.acme/example_entity/jsonschema/1-0-0',\n    data: {someExampleField: 'Foo Bar Baz'}\n  }]\n);\n")),(0,i.kt)("h4",{id:"custom-event-tracking"},"Custom event tracking"),(0,i.kt)("p",null,"Track Custom events using the ",(0,i.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackSelfDescribingEvent({\n  schema: 'iglu:com.acme/example/jsonschema/1-0-0',\n  data: {someExampleField: 'Hello World'}\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required properties"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema"),": (string) \u2013 A valid Iglu schema path. This must point to the location of the custom event\u2019s schema, of the format: ",(0,i.kt)("inlineCode",{parentName:"li"},"iglu:{vendor}/{name}/{format}/{version}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": (object) \u2013 The custom data for your event. This data must conform to the schema specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," argument, or the event will fail validation and land in bad rows.")),(0,i.kt)("p",null,"To attach custom contexts, pass a second argument to the function, containing an array of self-describing JSON."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackSelfDescribingEvent(\n  {\n    schema: 'iglu:com.acme/example_event/jsonschema/1-0-0',\n    data: {someExampleField: 'Hello World'}\n  },\n  [{\n    schema: 'iglu:com.acme/example_entity/jsonschema/1-0-0',\n    data: {someOtherExampleField: 'Foo Bar Baz'}\n  }]\n);\n")),(0,i.kt)("h4",{id:"structured-event-tracking"},"Structured event tracking"),(0,i.kt)("p",null,"Track a structured event with the ",(0,i.kt)("inlineCode",{parentName:"p"},"trackStructuredEvent()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackStructuredEvent({\n  category: 'my-category',\n  action: 'my-action',\n  label: 'my-label',\n  property: 'my-property',\n  value: 50.00\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"category"),": (string) \u2013 Structured event category."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"action"),": (string) \u2013 Structured event action.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),": (string) \u2013 Structured event label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"property"),": (string) \u2013 Structured event property."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": (number) \u2013 Structured event value.")),(0,i.kt)("p",null,"To attach custom contexts, pass a second argument to the function, containing an array of self-describing JSON."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackStructuredEvent(\n  {\n    category: 'my-category',\n    action: 'my-action',\n    label: 'my-label',\n    property: 'my-property',\n    value: 50.00\n  },\n  [{\n    schema: 'iglu:com.acme/example_entity/jsonschema/1-0-0',\n    data: {someOtherExampleField: 'Foo Bar Baz'}\n  }]\n);\n")),(0,i.kt)("h4",{id:"page-view-tracking"},"Page View Tracking"),(0,i.kt)("p",null,"Track a page view event with the ",(0,i.kt)("inlineCode",{parentName:"p"},"trackPageViewEvent()")," method. Typically this is uncommon in apps, but is sometimes used where fitting data into an existing page views model is required. To track page views from an in-app browser, it is advisable to use the javascript tracker in-browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker.trackPageViewEvent({\n  pageUrl: 'https://my-url.com',\n  pageTitle: 'My page title',\n  pageReferrer: 'http://some-other-url.com'\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageUrl"),": (string) \u2013 Page Url for the page view event. Must be a vaild url.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional properties")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageTitle"),": (string) \u2013 Page Title for the page view event."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageReferrer"),": (string) \u2013 Url for the referring page to the page view event. Must be a vaild url.")),(0,i.kt)("h2",{id:"data-modelling"},"Data Modelling",(0,i.kt)("a",{parentName:"h2",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#data-modelling"})),(0,i.kt)("h3",{id:"important-features-for-data-modelling"},"Important features for Data Modelling",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/#important-features-for-data-modelling"})),(0,i.kt)("p",null,"For most use cases, the recommended setup is to enable at least the session context, screen context, and platform context. These will enable most of the common information in modeling mobile events in a standard way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"createTracker('my-namespace', {\n  endpoint: 'my-endpoint.com',\n  appId: 'my-app-id',\n  platformContext: true,\n  screenContext: true,\n  sessionContext: true\n});\n")),(0,i.kt)("h4",{id:"user-identification"},"User identification"),(0,i.kt)("p",null,"The session context contains a UUID format userid, which is generated on app install. This can be used to easily identify individual installations of the app. If it is necessary to handle cases where users share an app, or uninstall/reinstall an app, this ID should be supplemented with additional logic."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setSubjectData()")," method offers the ability to set or unset a custom userid. This is typically used to track logged in users, and can be used to handle cases of multiple users. Normally this self-identified user id is treated as the primary identifier, and modeling logic stitches across the other ids to give this one priority."),(0,i.kt)("p",null,"The platform context will contain the device and advertising identifiers, if the app has permission to track this."),(0,i.kt)("p",null,"Where an app contains an embedded browser, typically in-app events are tracked using the Javascript tracker, and cookie values are passed to the application. The ",(0,i.kt)("inlineCode",{parentName:"p"},"setSubjectData()")," method offers the ability to set these fields."),(0,i.kt)("h4",{id:"aggregation"},"Aggregation"),(0,i.kt)("p",null,"To follow a similar model of aggregation to that of a web model, one can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aggregate to screen view level using the screen view ID from the screen view context"),(0,i.kt)("li",{parentName:"ul"},"aggregate to the session level the session id from the client session context"),(0,i.kt)("li",{parentName:"ul"},"aggregate to a user level the user","_","id from the client session context.")),(0,i.kt)("p",null,"The screen view and session context is attached to all events and so these can be used to attribute events to their screen views and sessions."),(0,i.kt)("p",null,"These contexts also contain identifiers for the previous screens and sessions, to facilitate easier user journey mapping."),(0,i.kt)("p",null,"The session context contains the first event id for the session in order to make it easier to identify the start time for a given session."),(0,i.kt)("p",null,"See also the official ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/modeling-your-data/the-snowplow-mobile-model/"},"Snowplow mobile data model"),"!"))}d.isMDXComponent=!0}}]);