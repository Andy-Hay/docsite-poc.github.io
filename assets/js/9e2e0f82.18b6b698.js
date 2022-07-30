"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[21629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tracking Events",date:"2021-11-16",sidebar_position:2e3},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/index",id:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/index",title:"Tracking Events",description:"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your apps.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events",slug:"/migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/",draft:!1,tags:[],version:"current",sidebarPosition:2e3,frontMatter:{title:"Tracking Events",date:"2021-11-16",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/"},next:{title:"Adding data to your events: context and more",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/"}},s={},c=[{value:"Track self-describing events with\xa0<code>selfDescribing</code>",id:"track-self-describing-events-withselfdescribing",level:2},{value:"Track structured events with\xa0<code>structured</code>",id:"track-structured-events-withstructured",level:2},{value:"Track screen views with\xa0<code>screenView</code>",id:"track-screen-views-withscreenview",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your apps."),(0,r.kt)("p",null,"We provide several built-in methods to help you track different kinds of events. The methods range from single purpose methods, such as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"screenView"),", to the more complex but flexible\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"selfDescribing"),", which can be used to track any kind of user behaviour. We strongly recommend using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"selfDescribing"),"\xa0for your tracking, as it allows you to design custom event types to match your business requirements.\xa0",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"This post"),'\xa0on our blog, "Re-thinking the structure of event data" might be informative here.'),(0,r.kt)("p",null,"Tracking methods supported by the Roku Tracker:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Event type tracked"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selfDescribing")),(0,r.kt)("td",{parentName:"tr",align:null},'Custom event based on "self-describing" JSON schema')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"structured")),(0,r.kt)("td",{parentName:"tr",align:null},"Semi-custom structured event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screenView")),(0,r.kt)("td",{parentName:"tr",align:null},"View of screen")))),(0,r.kt)("p",null,"All the methods share common features and parameters. Every type of event can have an optional context added. A Timestamp can also be provided for all event types to override the default event timestamp. See the next page to learn about adding extra data to events. It's important to understand how event context works, as it is one of the most powerful Snowplow features. Adding event context is a way to add depth, richness and value to all of your events."),(0,r.kt)("p",null,"Snowplow events are all processed into the same format, regardless of the event type (and regardless of the tracker language used). Read about the different properties and fields of events in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"."),(0,r.kt)("p",null,"We will first discuss the custom event tracking methods, followed by the out-of-the-box event types. Note that you can also design and create your own page view, or screen view, using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"selfDescribing"),", to fit your business needs better. The out-of-the-box event types are provided so you can get started with generating event data quickly."),(0,r.kt)("h2",{id:"track-self-describing-events-withselfdescribing"},"Track self-describing events with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"selfDescribing")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"selfDescribing"),"\xa0to track a custom event. This is the most advanced and powerful tracking method, which requires a certain amount of planning and infrastructure."),(0,r.kt)("p",null,'Self-describing events are based around "self-describing" (self-referential) JSONs, which are a specific kind of\xa0',(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema"),". A unique schema can be designed for each type of event that you want to track. This allows you to track the specific things that are important to you, in a way that is defined by you."),(0,r.kt)("p",null,"This is particularly useful when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to track event types which are proprietary/specific to your business"),(0,r.kt)("li",{parentName:"ul"},"You want to track events which have unpredictable or frequently changing properties")),(0,r.kt)("p",null,"A self-describing JSON has two keys,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),". The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0value should point to a valid self-describing JSON schema. They are called self-describing because the schema will specify the fields allowed in the data value. Read more about how schemas are used with Snowplow\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),"."),(0,r.kt)("p",null,"After events have been collected by the event collector, they are validated to ensure that the properties match the self-describing JSONs. Mistakes (e.g. extra fields, or incorrect types) will result in events being processed as Bad Events. This means that only high-quality, valid events arrive in your data storage or real-time stream."),(0,r.kt)("p",null,"Your schemas must be accessible to your pipeline to allow this validation. We provide\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/"},"Iglu"),"\xa0for schema management. If you are a paid Snowplow customer, you can manage your schemas through your console. Check out our\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"Ruby tracker Rails"),"\xa0example to see how we included schemas in the Snowplow Micro testing pipeline in that app."),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"selfDescribing"),"\xa0method takes a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"roAssociativeArray"),". This array takes a schema name and a flat hash of event data."),(0,r.kt)("p",null,"Example (assumes that you mounted the Snowplow instance in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"m.global.snowplow"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.selfDescribing = {\n    data: {\n        saveId: "4321",\n        level: 23,\n        difficultyLevel: "HARD",\n        dlContent: true\n    },\n    schema: "iglu:com.example_company/save_game/jsonschema/1-0-2"\n}\n')),(0,r.kt)("h2",{id:"track-structured-events-withstructured"},(0,r.kt)("a",{parentName:"h2",href:"#track-structured-events-with-structured"}),"Track structured events with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"structured")),(0,r.kt)("p",null,'This method provides a halfway-house between tracking fully user-defined self-describing events and out-of-the box predefined events. This event type can be used to track many types of user activity, as it is somewhat customizable. "Struct" events closely mirror the structure of Google Analytics events, with "category" (',(0,r.kt)("inlineCode",{parentName:"p"},"se_ca"),'), "action" (',(0,r.kt)("inlineCode",{parentName:"p"},"se_ac"),'), "label" (',(0,r.kt)("inlineCode",{parentName:"p"},"se_la"),'), and "value" (',(0,r.kt)("inlineCode",{parentName:"p"},"se_va"),") properties."),(0,r.kt)("p",null,"As these fields are fairly arbitrary, we recommend following the advice in this table how to define structured events. It's important to be consistent throughout the business about how each field is used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required in event?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"se_ca")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this action belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"se_ac")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"se_la")),(0,r.kt)("td",{parentName:"tr",align:null},"Often used to refer to the 'object' the action is performed on"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"se_pr")),(0,r.kt)("td",{parentName:"tr",align:null},"Describing the 'object', or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"se_va")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.structured = {\n    se_ca: "shop",\n    se_ac: "add-to-basket",\n    se_pr: "pcs",\n    se_va: 2\n}\n')),(0,r.kt)("h2",{id:"track-screen-views-withscreenview"},(0,r.kt)("a",{parentName:"h2",href:"#track-screen-views-with-screenview"}),"Track screen views with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"screenView")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"screenView"),"\xa0to track a user viewing a screen (or similar) within your app. This is the page view equivalent for apps that are not webpages. The arguments are\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"name"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"transitionType"),"; while all are optional, you must provided at least one of either\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),'\xa0to create a valid event. "Name" is the human-readable screen name, and "ID" should be the unique screen ID.'),(0,r.kt)("p",null,'This method creates an unstruct event, by creating and tracking a self-describing event. The schema ID for this is "iglu:com.snowplowanalytics.snowplow/screen',"_",'view/jsonschema/1-0-0", and the data field will contain the parameters which you provide. That schema is hosted on the schema repository Iglu Central, and so will always be available to your pipeline.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'m.global.snowplow.screenView = {\n    id: "screen23",\n    name: "HUD > Save Game"\n}\n')))}d.isMDXComponent=!0}}]);