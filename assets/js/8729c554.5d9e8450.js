"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[55341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Introduction",date:"2021-08-06",sidebar_position:0},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/index",id:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/index",title:"Introduction",description:"Tracker Maintenance Classification",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction",slug:"/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:0,frontMatter:{title:"Introduction",date:"2021-08-06",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"React Native Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/"},next:{title:"Quick start guide",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide/"}},s={},c=[{value:"Initializing a tracker",id:"initializing-a-tracker",level:2},{value:"Configuring the tracker",id:"configuring-the-tracker",level:2},{value:"NetworkConfiguration",id:"networkconfiguration",level:3},{value:"TrackerConfiguration",id:"trackerconfiguration",level:3},{value:"SessionConfiguration",id:"sessionconfiguration",level:3},{value:"EmitterConfiguration",id:"emitterconfiguration",level:3},{value:"SubjectConfiguration",id:"subjectconfiguration",level:3},{value:"GdprConfiguration",id:"gdprconfiguration",level:3},{value:"GlobalContextsConfiguration",id:"globalcontextsconfiguration",level:3},{value:"Tracker methods",id:"tracker-methods",level:2},{value:"Tracking Events",id:"tracking-events",level:3},{value:"Adding or removing global contexts",id:"adding-or-removing-global-contexts",level:3},{value:"Setting the Subject",id:"setting-the-subject",level:3},{value:"Getting session context data from the tracker",id:"getting-session-context-data-from-the-tracker",level:3},{value:"Removing a tracker",id:"removing-a-tracker",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Tracker Maintenance Classification"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@snowplow/react-native-tracker",alt:"Latest tracker version"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dependency-version/@snowplow/react-native-tracker/peer/react-native",alt:"Supported React Native versions"}))),(0,i.kt)("p",null,"The Snowplow React Native Tracker is a module which imports the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/"},"Mobile Native Snowplow Trackers")," as native modules, available for use in React Native projects."),(0,i.kt)("p",null,"More specifically it is build upon the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v2-0/"},"Mobile Native Trackers v2"),", so as to leverage their tracking capabilities, API and configuration parameters."),(0,i.kt)("h2",{id:"initializing-a-tracker"},"Initializing a tracker"),(0,i.kt)("p",null,"The React Native Tracker can be configured with a set of configuration objects. Once you import the module into your app, the ",(0,i.kt)("inlineCode",{parentName:"p"},"createTracker")," function can be used to setup a tracker, which is identified internally by its namespace."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createTracker")," function can be used to create multiple instances of the tracker in the same app. If you call it using a namespace already used, it will reconfigure the tracker with the same namespace. If you call it with a different namespace, the tracker will create a new independent tracker."),(0,i.kt)("h2",{id:"configuring-the-tracker"},"Configuring the tracker"),(0,i.kt)("p",null,"The configuration objects that are used to initialize a tracker are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NetworkConfiguration"),": ",(0,i.kt)("strong",{parentName:"li"},"Required"),". Configures the network connection with the Snowplow collector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TrackerConfiguration"),": ",(0,i.kt)("strong",{parentName:"li"},"Optional"),". Configures the general behaviour of the tracker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SessionConfiguration"),": ",(0,i.kt)("strong",{parentName:"li"},"Optional"),". Configures the session behaviour."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EmitterConfiguration"),": ",(0,i.kt)("strong",{parentName:"li"},"Optional"),". Configures the way the tracker sends events to the collector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SubjectConfiguration"),": ",(0,i.kt)("strong",{parentName:"li"},"Optional"),". Specifies details to send with events about the user and the platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GdprConfiguration"),": ",(0,i.kt)("strong",{parentName:"li"},"Optional"),". Configures the GDPR context."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GlobalContextsConfiguration"),": ",(0,i.kt)("strong",{parentName:"li"},"Optional"),". Configures the GlobalContexts feature.")),(0,i.kt)("h3",{id:"networkconfiguration"},"NetworkConfiguration"),(0,i.kt)("p",null,"Represents the network communication configuration allowing the tracker to be able to send events to the Snowplow collector."),(0,i.kt)("p",null,"Its type definition is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface NetworkConfiguration {\n  /**\n   * The collector endpoint\n   *  - if the protocol is not included it defaults to https\n   */\n  endpoint: string;\n\n  /**\n   * The Http Method to use when sending events to the collector\n   * @defaultValue 'post'\n   */\n  method?: HttpMethod;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"endpoint"),": (",(0,i.kt)("strong",{parentName:"li"},"Required"),"). URL of the collector that is going to receive the events tracked by the tracker. The URL can include the schema/protocol (e.g.: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://collector-url.com"),"). In case the URL doesn\u2019t include the schema/protocol, the HTTPS protocol is automatically selected."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"method"),": The method used to send the requests (",(0,i.kt)("inlineCode",{parentName:"li"},"'get'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'post'"),"). Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"'post'"),".")),(0,i.kt)("h3",{id:"trackerconfiguration"},"TrackerConfiguration"),(0,i.kt)("p",null,"Represents the configuration of the tracker and the core tracker properties. The TrackerConfiguration can be used to setup the tracker behaviour indicating what should be tracked in terms of automatic tracking and contexts/entities to attach to the events."),(0,i.kt)("p",null,"Its type definition is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface TrackerConfiguration {\n  /**\n   * Identifier of the app.\n   */\n  appId?: string;\n  /**\n   * The device platform the tracker runs on.\n   * @defaultValue 'mob'\n   */\n  devicePlatform?: DevicePlatform;\n  /**\n   * Whether payload JSON data should be base64 encoded.\n   * @defaultValue true\n   */\n  base64Encoding?: boolean;\n  /**\n   * The log level of tracker logs.\n   * @defaultValue 'off'\n   */\n  logLevel?: LogLevel;\n  /**\n   * Whether application context is attached to tracked events.\n   * @defaultValue true\n   */\n  applicationContext?: boolean;\n  /**\n   * Whether platform context is attached to tracked events.\n   * @defaultValue true\n   */\n  platformContext?: boolean;\n  /**\n   * Whether geo-location context is attached to tracked events.\n   * @defaultValue false\n   */\n  geoLocationContext?: boolean;\n  /**\n   * Whether session context is attached to tracked events.\n   * @defaultValue true\n   */\n  sessionContext?: boolean;\n  /**\n   * Whether screen context is attached to tracked events.\n   * @defaultValue true\n   */\n  screenContext?: boolean;\n  /**\n   * Whether enable automatic tracking of ScreenView events.\n   * @defaultValue true\n   */\n  screenViewAutotracking?: boolean;\n  /**\n   * Whether enable automatic tracking of background and foreground transitions.\n   * @defaultValue false\n   */\n  lifecycleAutotracking?: boolean;\n  /**\n   * Whether enable automatic tracking of install event.\n   * @defaultValue true\n   */\n  installAutotracking?: boolean;\n  /**\n   * Whether enable crash reporting.\n   * @defaultValue true\n   */\n  exceptionAutotracking?: boolean;\n  /**\n   * Whether enable diagnostic reporting.\n   * @defaultValue false\n   */\n  diagnosticAutotracking?: boolean;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"appId"),": Identifer of the app.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"devicePlatform"),": The device platform the app runs on. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"'mob'"),". Allowed platform values are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'mob'"),": Mobile/Tablet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'web'"),": Web(including mobile web)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'pc'"),": Desktop/Laptop/Netbook"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'srv'"),": Server-side app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'app'"),": General app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'tv'"),": Connected TV"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'cnsl'"),": Games Console"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'iot'"),": Internet of things"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"base64encoding"),": It indicates whether the JSON data in the payload should be base64 encoded. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"logLevel"),": The log level of tracker logs. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"'off'"),". Allowed logLevel values are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'off'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'error'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'debug'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'verbose'")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"sessionContext"),": Whether session context is sent with all the tracked events. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"applicationContext"),": Whether application context is sent with all the tracked events. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"platformContext"),": Whether mobile/platform context is sent with all the tracked events. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"geoLocationContext"),": Whether geo-location context is sent with all the tracked events. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"screenContext"),": Whether screen context is sent with all the tracked events. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"screenViewAutotracking"),": Whether automatic tracking of ScreenView events is enabled. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"lifecycleAutotracking"),": Whether automatic tracking of background and foreground transitions is enabled. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"installAutotracking"),": Whether automatic tracking of install event is enabled. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"exceptionAutotracking"),": Whether crash reporting is enabled. Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,i.kt)("h3",{id:"sessionconfiguration"},"SessionConfiguration"),(0,i.kt)("p",null,"Represents the configuration of the Session context which gets attached to each event tracked and changes based on the timeout set for the inactivity of app when in foreground or background."),(0,i.kt)("p",null,"Session data is maintained for the life of the application being installed on a device. Essentially it will update if it is not accessed within a configurable timeout."),(0,i.kt)("p",null,"Its type definition is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface SessionConfiguration {\n  /**\n   * The amount of time in seconds before the session id is updated while the app is in the foreground\n   * @defaultValue 1800\n   */\n  foregroundTimeout: number;\n  /**\n   * The amount of time in seconds before the session id is updated while the app is in the background\n   * @defaultValue 1800\n   */\n  backgroundTimeout: number;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"foregroundTimeout"),": The amount of time in seconds that can elapse before the session id is updated while the app is in the foreground. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1800")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"backgroundTimeout"),": The amount of time in seconds that can elapse before the session id is updated while the app is in the background. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"1800"))),(0,i.kt)("h3",{id:"emitterconfiguration"},"EmitterConfiguration"),(0,i.kt)("p",null,"Represents the tracker configuration from the emission perspective. It can be used to setup details about how the tracker should treat the events once they have been processed but not yet sent."),(0,i.kt)("p",null,"Its type definition is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface EmitterConfiguration {\n  /**\n   * The buffer option for post requests.\n   * @defaultValue 'single'\n   */\n  bufferOption?: BufferOption;\n\n  /**\n   * Maximum number of events collected from the EventStore to be sent in a request.\n   * @defaultValue 150\n   */\n  emitRange?: number;\n\n  /**\n   *Maximum number of threads working in parallel in the tracker to send requests.\n   * @defaultValue 15\n   */\n  threadPoolSize?: number;\n\n  /**\n   * Maximum amount of bytes allowed to be sent in a payload in a POST request.\n   * @defaultValue 40000\n   */\n  byteLimitPost?: number;\n\n  /**\n   * Maximum amount of bytes allowed to be sent in a payload in a GET request.\n   * @defaultValue 40000\n   */\n  byteLimitGet?: number;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bufferOption"),": Sets the emitter's buffer behavior concerning whether the events should be sent instantly or after the buffer has reached it\u2019s limit. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"'single'"),". Allowed bufferOption values are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'single'"),": Sends events instantly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'default'"),": (Affects only POST method). Sets buffer limit to 10 events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'large'"),": (Affects only POST method). Sets buffer limit to 25 events."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"emitRange"),": Maximum number of events collected to be sent in a request. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"150")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"threadPoolSize"),": Maximum number of threads working in parallel in the tracker to send requests. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"15")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"byteLimitGet"),": Maximum amount of bytes allowed to be sent in a payload in a GET request. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"40000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"byteLimitPost"),": Maximum amount of bytes allowed to be sent in a payload in a POST request. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"40000"))),(0,i.kt)("h3",{id:"subjectconfiguration"},"SubjectConfiguration"),(0,i.kt)("p",null,"Represents the configuration of the subject. The SubjectConfiguration can be used to provide the basic information about the user."),(0,i.kt)("p",null,"Its type definition is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface SubjectConfiguration {\n  /**\n   * user id\n   */\n  userId?: string | null;\n  /**\n   * network user id (UUIDv4)\n   */\n  networkUserId?: string | null;\n  /**\n   * domain user id\n   */\n  domainUserId?: string | null;\n  /**\n   * The custom user-agent. It overrides the user-agent used by default.\n   */\n  useragent?: string | null;\n  /**\n   * IP address\n   */\n  ipAddress?: string | null;\n  /**\n   * The timezone label\n   */\n  timezone?: string | null;\n  /**\n   * The language set in the device\n   */\n  language?: string | null;\n  /**\n   * The screen resolution\n   */\n  screenResolution?: ScreenSize | null;\n  /**\n   * The screen viewport size\n   */\n  screenViewport?: ScreenSize | null;\n  /**\n   * color depth (integer)\n   */\n  colorDepth?: number | null;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"userId"),": The custom user identifier. Commonly used for user self-identification \u2013 for example after sign in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"networkUserId"),": Populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"network_userid")," field. Typically used to link native tracking to in-app browser events tracked using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/"},"JavaScript Tracker"),". Normally one would retrieve the network userid from the browser and pass it to the app. Should contain a valid UUID4 string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"domainUserId"),": Populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"domain_userid")," field. Typically used to link native tracking to in-app browser events tracked using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/"},"JavaScript Tracker"),". Normally one would retrieve the domain userid from the browser and pass it to the app. Should contain a valid UUID4 string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"useragent"),": The custom useragent. It populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"useragent")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ipAddress"),": The IP address of the user. It populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_ipaddress")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"timezone")," (set by the tracker): The current timezone label. Populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"os_timezone")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"language")," (set by the tracker): The language set in the device."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"screenResolution")," (set by the tracker): The screen resolution. The screen resolution size can be set as an array of ","[","width, height","]",". Populates the event fields ",(0,i.kt)("inlineCode",{parentName:"li"},"dvce_screenwidth")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"dvce_screenheight"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"screenViewport"),": The screen viewport. The screen viewport size can be set as an array of ","[","width, height","]",". Populates the event fields ",(0,i.kt)("inlineCode",{parentName:"li"},"br_viewwidth")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"br_viewheight"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"colorDepth"),": The color depth. Populates the ",(0,i.kt)("inlineCode",{parentName:"li"},"br_colordepth")," field.")),(0,i.kt)("p",null,'Information about the subject can also be set at runtime. In the "Setting the subject" section below, you can find out more about the available tracker methods to do so.'),(0,i.kt)("h3",{id:"gdprconfiguration"},"GdprConfiguration"),(0,i.kt)("p",null,"It represents the GDPR configuration of the tracker, and if set, the tracker will have the respective GDPR context attached to all events."),(0,i.kt)("p",null,"Its type definition is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export interface GdprConfiguration {\n  /**\n   * Basis for processing\n   */\n  basisForProcessing: Basis;\n  /**\n   * ID of a GDPR basis document.\n   */\n  documentId: string;\n  /**\n   * Version of the document.\n   */\n  documentVersion: string;\n  /**\n   * Description of the document.\n   */\n  documentDescription: string;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"basisForProcessing"),": Required. Represents the basis for processing according to GDPR. Allowed values for ",(0,i.kt)("inlineCode",{parentName:"li"},"basisForProcessing")," are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'consent'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'contract'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'legal_obligation'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'legitimate_interests'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'public_task'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'vital_interests'")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"documentId"),": Required. The GDPR document id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"documentVersion"),": Required. The GDPR document version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"documentDescription"),": Required. The GDPR document description.")),(0,i.kt)("h3",{id:"globalcontextsconfiguration"},"GlobalContextsConfiguration"),(0,i.kt)("p",null,"It represents the static Global Contexts which will be attached to all events. Each GlobalContext is identified by a tag and an array of custom contexts."),(0,i.kt)("p",null,"The relevant type definitions are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export interface GlobalContext {\n  /**\n   * tag\n   */\n  tag: string,\n  /**\n   * contexts\n   */\n  globalContexts: SelfDescribing[]\n}\n\n/**\n * Global Contexts configuration\n */\nexport type GCConfiguration = GlobalContext[];\n")),(0,i.kt)("p",null,"Global Contexts can also be set (added or removed) at runtime. In the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/#adding-or-removing-global-contexts"},"Adding or removing global contexts")," section below, you can find out more about the available tracker methods to do so."),(0,i.kt)("h2",{id:"tracker-methods"},"Tracker methods"),(0,i.kt)("h3",{id:"tracking-events"},"Tracking Events"),(0,i.kt)("p",null,"The React Native Tracker can track the out-of-the-box events as the Mobile Native iOS and Android trackers. The available track methods are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackSelfDescribingEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackStructuredEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackEcommerceTransactionEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackScreenViewEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackTimingEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackConsentGrantedEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackConsentWithdrawnEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"trackPageViewEvent"))),(0,i.kt)("p",null,"You can find out about all available track methods with details and examples in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/tracking-events/"},"Tracking events")," section that follows."),(0,i.kt)("h3",{id:"adding-or-removing-global-contexts"},"Adding or removing global contexts"),(0,i.kt)("p",null,"Each set of global contexts is identified by a tag. Through the tag it is possible to add or remove GlobalContexts at runtime. The tracker methods to do so are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"addGlobalContexts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"removeGlobalContexts"))),(0,i.kt)("p",null,"You can find out more information and examples about how to add or remove global contexts ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/tracking-events/#global-contexts"},"here"),"."),(0,i.kt)("h3",{id:"setting-the-subject"},"Setting the Subject"),(0,i.kt)("p",null,"It is possible to change subject data at runtime, as the user journey evolves. Once initialized, the React Native tracker provides the methods to do so for each subject property:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setUserId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setNetworkUserId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setDomainUserId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setIpAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setUseragent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setTimezone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setLanguage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setScreenResolution")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setScreenViewport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setColorDepth"))),(0,i.kt)("p",null,"Alternatively, you can use the ",(0,i.kt)("strong",{parentName:"p"},"setSubjectData")," method to provide a new SubjectConfiguration."),(0,i.kt)("p",null,"You can find out more on how to use the tracker's methods to set the subject information at runtime in the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/tracking-events/#setting-the-subject-data"},"Tracking events section"),"."),(0,i.kt)("h3",{id:"getting-session-context-data-from-the-tracker"},"Getting session context data from the tracker"),(0,i.kt)("p",null,"You can also get back session data from the tracker at runtime, that may be useful for your tracking and data modeling design. The available methods are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getSessionUserId"),": To get the session user identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getSessionId"),": To get the session identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getSessionIndex"),": To get the session index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getIsInBackground"),": To get whether the app is currently in background state or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getBackgroundIndex"),": To get the number of background transitions in the current session."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getForegroundIndex"),": To get the number of foreground transitions in the current session.")),(0,i.kt)("p",null,"You can find out more on how to use the tracker's methods to get session data at runtime in the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/#getting-session-data-from-the-tracker"},"Advanced Usage section"),"."),(0,i.kt)("h2",{id:"removing-a-tracker"},"Removing a tracker"),(0,i.kt)("p",null,"The React Native Tracker API also provides functions to remove a tracker or remove all trackers at runtime. You can find out how in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/#removing-a-tracker-at-runtime"},"Advanced Usage section")," of the React Native Tracker."))}p.isMDXComponent=!0}}]);