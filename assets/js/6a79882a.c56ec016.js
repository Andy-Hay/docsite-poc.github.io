"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[70398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tracking events",date:"2022-01-31",sidebar_position:3e3},l=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events/index",id:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events/index",title:"Tracking events",description:"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your apps.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events",slug:"/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:3e3,frontMatter:{title:"Tracking events",date:"2022-01-31",sidebar_position:3e3},sidebar:"tutorialSidebar",previous:{title:"Initialization and configuration",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/initialization-and-configuration/"},next:{title:"Adding data to your events: context and more",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/"}},d={},p=[{value:"Track self-describing events with\xa0<code>SelfDescribing</code>",id:"track-self-describing-events-withselfdescribing",level:2},{value:"Track structured events with\xa0<code>Structured</code>",id:"track-structured-events-withstructured",level:2},{value:"Track page views with\xa0<code>PageViewEvent</code>",id:"track-page-views-withpageviewevent",level:2},{value:"Track screen views with\xa0<code>ScreenView</code>",id:"track-screen-views-withscreenview",level:2},{value:"Track timing events with\xa0<code>Timing</code>",id:"track-timing-events-withtiming",level:2},{value:"Track user consent with\xa0<code>ConsentGranted</code>\xa0and\xa0<code>ConsentWithdrawn</code>",id:"track-user-consent-withconsentgrantedandconsentwithdrawn",level:2},{value:"Automatically tracking view events using navigator observer",id:"automatically-tracking-view-events-using-navigator-observer",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your apps."),(0,r.kt)("p",null,"We provide several built-in event classes to help you track different kinds of events. When instantiated, their objects can be passed to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow.track()"),"\xa0method to send events to the Snowplow collector. The event classes range from single purpose ones, such as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),", to the more complex but flexible\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),", which can be used to track any kind of user behaviour. We strongly recommend using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),"\xa0for your tracking, as it allows you to design custom event types to match your business requirements.\xa0",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"This post"),'\xa0on our blog, "Re-thinking the structure of event data" might be informative here.'),(0,r.kt)("p",null,"Event classes supported by the Flutter Tracker:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Event type tracked"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelfDescribing")),(0,r.kt)("td",{parentName:"tr",align:null},'Custom event based on "self-describing" JSON schema')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Structured")),(0,r.kt)("td",{parentName:"tr",align:null},"Semi-custom structured event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScreenView")),(0,r.kt)("td",{parentName:"tr",align:null},"View of a screen in the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Timing")),(0,r.kt)("td",{parentName:"tr",align:null},"User timing events such as how long resources take to load.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConsentGranted")),(0,r.kt)("td",{parentName:"tr",align:null},"User opting into data collection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConsentWithdrawn")),(0,r.kt)("td",{parentName:"tr",align:null},"User withdrawing consent for data collection.")))),(0,r.kt)("p",null,"All the methods share common features and parameters. Every type of event can have an optional context added. See the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/"},"next page"),"\xa0to learn about adding extra data to events. It's important to understand how event context works, as it is one of the most powerful Snowplow features. Adding event context is a way to add depth, richness and value to all of your events."),(0,r.kt)("p",null,"Snowplow events are all processed into the same format, regardless of the event type (and regardless of the tracker language used). Read about the different properties and fields of events in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"."),(0,r.kt)("p",null,"We will first discuss the custom event types, followed by the out-of-the-box event types. Note that you can also design and create your own page view, or screen view, using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"selfDescribing"),", to fit your business needs better. The out-of-the-box event types are provided so you can get started with generating event data quickly."),(0,r.kt)("h2",{id:"track-self-describing-events-withselfdescribing"},"Track self-describing events with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"SelfDescribing")),(0,r.kt)("p",null,"Use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),"\xa0type to track a custom event. This is the most advanced and powerful tracking method, which requires a certain amount of planning and infrastructure."),(0,r.kt)("p",null,'Self-describing events are based around "self-describing" (self-referential) JSONs, which are a specific kind of\xa0',(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema"),". A unique schema can be designed for each type of event that you want to track. This allows you to track the specific things that are important to you, in a way that is defined by you."),(0,r.kt)("p",null,"This is particularly useful when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to track event types which are proprietary/specific to your business"),(0,r.kt)("li",{parentName:"ul"},"You want to track events which have unpredictable or frequently changing properties")),(0,r.kt)("p",null,"A self-describing JSON has two keys,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),". The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0value should point to a valid self-describing JSON schema. They are called self-describing because the schema will specify the fields allowed in the data value. Read more about how schemas are used with Snowplow\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),"."),(0,r.kt)("p",null,"After events have been collected by the event collector, they are validated to ensure that the properties match the self-describing JSONs. Mistakes (e.g. extra fields, or incorrect types) will result in events being processed as Bad Events. This means that only high-quality, valid events arrive in your data storage or real-time stream."),(0,r.kt)("p",null,"Your schemas must be accessible to your pipeline to allow this validation. We provide\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/"},"Iglu"),"\xa0for schema management. If you are a paid Snowplow customer, you can manage your schemas through your console. Check out our\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"Ruby tracker Rails"),"\xa0example to see how we included schemas in the Snowplow Micro testing pipeline in that app."),(0,r.kt)("p",null,"Creating an instance of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),"\xa0takes a schema name and a dictionary of event data."),(0,r.kt)("p",null,"Example (assumes that\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"tracker"),"\xa0is a tracker instance created using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow.createTracker"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track(SelfDescribing(\n    schema: 'iglu:com.example_company/save_game/jsonschema/1-0-2',\n    data: {\n        'saveId': '4321',\n        'level': 23,\n        'difficultyLevel': 'HARD',\n        'dlContent': true\n    }\n));\n")),(0,r.kt)("h2",{id:"track-structured-events-withstructured"},"Track structured events with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"Structured")),(0,r.kt)("p",null,'This method provides a halfway-house between tracking fully user-defined self-describing events and out-of-the box predefined events. This event type can be used to track many types of user activity, as it is somewhat customizable. "Struct" events closely mirror the structure of Google Analytics events, with "category", "action", "label", and "value" properties.'),(0,r.kt)("p",null,"As these fields are fairly arbitrary, we recommend following the advice in this table how to define structured events. It's important to be consistent throughout the business about how each field is used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required in event?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this action belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"Often used to refer to the 'object' the action is performed on"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"property")),(0,r.kt)("td",{parentName:"tr",align:null},"Describing the 'object', or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track(Structured(\n    category: 'shop',\n    action: 'add-to-basket',\n    label: 'Add To Basket',\n    property: 'pcs',\n    value: 2.00,\n));\n")),(0,r.kt)("h2",{id:"track-page-views-withpageviewevent"},"Track page views with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"PageViewEvent")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"PageViewEvent"),"\xa0may be used to track page views on the Web. The event is designed to track web page views and automatically captures page title, referrer and URL. Being Web-only, it is not implemented on Android and iOS where the app is not displayed as a Web page."),(0,r.kt)("p",null,"Page view events are the basic building blocks for the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/modeling-your-data/the-snowplow-web-data-model/"},"Snowplow web data model"),"."),(0,r.kt)("h2",{id:"track-screen-views-withscreenview"},"Track screen views with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"ScreenView")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),"\xa0to track a user viewing a screen (or similar) within your app. This is the page view equivalent for apps that are not webpages. The arguments are\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"name"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"transitionType"),". The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),'\xa0properties are required. "Name" is the human-readable screen name, and "ID" should be the unique screen ID (UUID v4).'),(0,r.kt)("p",null,"Screen view events are used in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/modeling-your-data/the-snowplow-mobile-model/"},"Snowplow mobile data model"),". Nevertheless, the Flutter tracker also implements them on Web. You may adopt the mobile data model and choose to track screen views instead of page views on Web to provide consistent event tracking across all platforms."),(0,r.kt)("p",null,'This method creates an unstruct event, by creating and tracking a self-describing event. The schema ID for this is "iglu:com.snowplowanalytics.snowplow/screen',"_",'view/jsonschema/1-0-0", and the data field will contain the parameters which you provide. That schema is hosted on the schema repository Iglu Central, and so will always be available to your pipeline.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required in event?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the screen viewed."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"The id (UUID v4) of screen that was viewed."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of screen that was viewed."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"previousName")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the previous screen that was viewed."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"previousType")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of screen that was viewed."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"previousId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id (UUID v4) of the previous screen that was viewed."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transitionType")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of transition that led to the screen being viewed."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track(ScreenView(\n    id: '2c295365-eae9-4243-a3ee-5c4b7baccc8f',\n    name: 'home',\n    type: 'full',\n    transitionType: 'none'));\n")),(0,r.kt)("h2",{id:"track-timing-events-withtiming"},"Track timing events with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"Timing")),(0,r.kt)("p",null,"Use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Timing"),"\xa0type to track user timing events such as how long resources take to load. These events take a timing\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"variable"),"\xa0being measured, and the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"timing"),"\xa0time measurement. An optional\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"\xa0can be added to further identify the timing event"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required in event?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the timing category."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variable")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the timing variable measured."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timing")),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the time."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional string to further identify the timing event."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track(Timing(\n    category: 'category',\n    variable: 'variable',\n    timing: 1,\n    label: 'label',\n));\n")),(0,r.kt)("h2",{id:"track-user-consent-withconsentgrantedandconsentwithdrawn"},"Track user consent with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"ConsentGranted"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"ConsentWithdrawn")),(0,r.kt)("p",null,"Use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentGranted"),"\xa0to track a user opting into data collection and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentWithdrawn"),"\xa0to track a user withdrawing their consent for data collection."),(0,r.kt)("p",null,"For both events, a consent document context will be attached to the event using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"documentId"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"version"),"\xa0arguments supplied. To specify that a user opts out of all data collection using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentWithdrawn"),"\xa0event, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"all"),"\xa0property should be set to true."),(0,r.kt)("p",null,"Properties of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentGranted"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required in event?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expiry")),(0,r.kt)("td",{parentName:"tr",align:null},"The expiry date-time of the consent."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"documentId")),(0,r.kt)("td",{parentName:"tr",align:null},"The consent document ID."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"The consent document version."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional consent document name."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"documentDescription")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional consent document description."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track(ConsentGranted(\n    expiry: DateTime.now(),\n    documentId: '1234',\n    version: '5',\n    name: 'name1',\n    documentDescription: 'description1',\n));\n")),(0,r.kt)("p",null,"Properties of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentWithdrawn"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required in event?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether user opts out of all data collection."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"documentId")),(0,r.kt)("td",{parentName:"tr",align:null},"The consent document ID."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"The consent document version."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional consent document name."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"documentDescription")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional consent document description."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track(ConsentWithdrawn(\n    all: false,\n    documentId: '1234',\n    version: '5',\n    name: 'name1',\n    documentDescription: 'description1',\n));\n")),(0,r.kt)("h2",{id:"automatically-tracking-view-events-using-navigator-observer"},"Automatically tracking view events using navigator observer"),(0,r.kt)("p",null,"There is also an option to automatically track view events when currently active pages change through the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Navigator-class.html"},"Navigator API"),"."),(0,r.kt)("p",null,"To activate this feature, one has to register a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowObserver"),"\xa0retrieved from the tracker instance using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker.getObserver()"),". The retrieved observer can be added to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"navigatorObservers"),"\xa0in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialApp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MaterialApp(\n  navigatorObservers: [\n    tracker.getObserver()\n  ],\n  ...\n);\n")),(0,r.kt)("p",null,"If using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Router"),"\xa0API with the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialApp.router"),"\xa0constructor, add the observer to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"observers"),"\xa0of your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator"),"\xa0instance, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Navigator(\n  observers: [tracker.getObserver()],\n  ...\n);\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowObserver"),"\xa0automatically tracks\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"PageViewEvent"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),"\xa0events when the currently active\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ModalRoute"),"\xa0of the navigator changes."),(0,r.kt)("p",null,"By default,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),"\xa0events are tracked on all platforms. In case\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerConfiguration.webActivityTracking"),"\xa0is configured when creating the tracker,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"PageViewEvent"),"\xa0events will be tracked on Web instead of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),"\xa0events (",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),"\xa0events will still be tracked on other platforms)."),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker.getObserver()"),"\xa0function takes an optional\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nameExtractor"),"\xa0function as argument which is used to extract a name from new routes that is used in tracked\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"PageViewEvent"),"\xa0events."),(0,r.kt)("p",null,"The following operations will result in tracking a view event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Navigator.pushNamed(context, '/contact/123');\n\nNavigator.push<void>(context, MaterialPageRoute(\n  settings: RouteSettings(name: '/contact/123'),\n  builder: (_) => ContactDetail(123)));\n\nNavigator.pushReplacement<void>(context, MaterialPageRoute(\n  settings: RouteSettings(name: '/contact/123'),\n  builder: (_) => ContactDetail(123)));\n\nNavigator.pop(context);\n")))}c.isMDXComponent=!0}}]);