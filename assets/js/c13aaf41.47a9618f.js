"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[32791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tracking specific client-side properties",date:"2022-03-24",sidebar_position:40},l=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/index",id:"migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/index",title:"Tracking specific client-side properties",description:"An event describes a single, transient activity. The context in which that event occurs - the relatively persistent environment - is also incredibly valuable data. As discussed on the previous page, the most powerful way to track such data is to use custom self-describing JSON entities. These are sent as JSON in the raw event payload. Depending on your data warehouse, event context entities are loaded into their own tables, or remain as JSON in the loaded event.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties",slug:"/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:40,frontMatter:{title:"Tracking specific client-side properties",date:"2022-03-24",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Custom tracking using schemas",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},next:{title:"Configuring how events are sent",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/configuring-how-events-are-sent/"}},d={},s=[{value:"Overriding autogenerated event properties",id:"overriding-autogenerated-event-properties",level:3},{value:"Adding <code>Subject</code> properties to events",id:"adding-subject-properties-to-events",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An event describes a single, transient activity. The context in which that event occurs - the relatively persistent environment - is also incredibly valuable data. As discussed on the previous page, the most powerful way to track such data is to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"custom self-describing JSON entities"),". These are sent as JSON in the raw event payload. Depending on your data warehouse, event context entities are loaded into their own tables, or remain as JSON in the loaded event."),(0,r.kt)("p",null,'The Java tracker provides an additional "primitive" method to track a small subset of contextual data, using the ',(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),' class. As with the "primitive" ',(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"},"event")," types, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"PageView"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),' properties directly populate the "atomic" fields of the raw event payload. These data will always end up in individual columns of the main event table in the data warehouse.'),(0,r.kt)("p",null,"The fields tracked using ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," tend to be most relevant in client-side tracking. Some are set automatically in all events during enrichment, even when no ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," is added. These properties are marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," below, and discussed below. Timezone, marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"**"),", is only set when a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," is tracked with the event."),(0,r.kt)("p",null,"Add these fields to an event using ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column(s) in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userId"),(0,r.kt)("td",{parentName:"tr",align:null},"uid"),(0,r.kt)("td",{parentName:"tr",align:null},"user","_","id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipAddress","*"),(0,r.kt)("td",{parentName:"tr",align:null},"ip"),(0,r.kt)("td",{parentName:"tr",align:null},"user","_","ipaddress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timezone","*","*"),(0,r.kt)("td",{parentName:"tr",align:null},"tz"),(0,r.kt)("td",{parentName:"tr",align:null},"os","_","timezone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"language"),(0,r.kt)("td",{parentName:"tr",align:null},"lang"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","lang")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useragent","*"),(0,r.kt)("td",{parentName:"tr",align:null},"ua"),(0,r.kt)("td",{parentName:"tr",align:null},"useragent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewport"),(0,r.kt)("td",{parentName:"tr",align:null},"vp"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","viewheight, br","_","viewwidth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"screenResolution"),(0,r.kt)("td",{parentName:"tr",align:null},"res"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","screenheight, dvce","_","screenwidth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorDepth"),(0,r.kt)("td",{parentName:"tr",align:null},"cd"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","colordepth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"networkUserId","*"),(0,r.kt)("td",{parentName:"tr",align:null},"tnuid"),(0,r.kt)("td",{parentName:"tr",align:null},"network","_","userid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domainUserId"),(0,r.kt)("td",{parentName:"tr",align:null},"duid"),(0,r.kt)("td",{parentName:"tr",align:null},"domain","_","userid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domainSessionId"),(0,r.kt)("td",{parentName:"tr",align:null},"sid"),(0,r.kt)("td",{parentName:"tr",align:null},"domain","_","sessionid")))),(0,r.kt)("p",null,"Note: the ability to set ",(0,r.kt)("inlineCode",{parentName:"p"},"domainSessionId")," was added in version 0.11."),(0,r.kt)("p",null,"These properties are especially useful for client-side tracking, or for linking client-side and server-side tracking. We highly recommend tracking in both client-side and server-side, if it's relevant to your application. Read more about this in these ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2019/02/05/how-server-side-tracking-fills-holes-in-your-data-and-improves-your-analytics/"},"blog")," ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2021/11/09/the-unrivaled-power-of-joining-client-and-server-side-tracking/"},"posts"),"."),(0,r.kt)("p",null,"If you are also using the Javascript tracker, it will set ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/"},"cookies")," in the browser. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," properties ",(0,r.kt)("inlineCode",{parentName:"p"},"domainUserId"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"domainSessionId")," are intended to be used for extracted cookie values passed to the Java tracker. If you want to track other identification tokens, we recommend creating schemas and using context entities."),(0,r.kt)("p",null,"As always, be aware of privacy when tracking ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/09/06/user-identification-and-privacy/"},"personal identifiable information")," such as email addresses or IP addresses."),(0,r.kt)("h3",{id:"overriding-autogenerated-event-properties"},"Overriding autogenerated event properties"),(0,r.kt)("p",null,"All enriched Snowplow events contain values for ",(0,r.kt)("inlineCode",{parentName:"p"},"user_ipaddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useragent"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"network_userid"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"user_ipaddress")," is automatically added to all enriched events. To manually override this, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," and set a ",(0,r.kt)("inlineCode",{parentName:"p"},"ipAddress")," string; use an empty string to prevent IP address tracking. Alternatively, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/"},"IP anonymization enrichment"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useragent")," is also automatically added during enrichment. Snowplow pipelines provide multiple useragent-parsing ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/available-enrichments/"},"enrichments"),". To manually override the detected useragent, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," and set a ",(0,r.kt)("inlineCode",{parentName:"p"},"useragent")," string. For the default Tracker configuration with OkHttp, the default ",(0,r.kt)("inlineCode",{parentName:"p"},"useragent"),' will be "okhttp/4.2.2".'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"network_userid")," is the cookie value for the event collector\u2019s third-party cookie. It is the server-side user identifier. The cookie is named ",(0,r.kt)("inlineCode",{parentName:"p"},"sp")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"micro")," for Snowplow Micro pipelines). The default behaviour is for the collector to provide a new cookie/",(0,r.kt)("inlineCode",{parentName:"p"},"network_userid")," for each event it receives. To override the collector cookie\u2019s value with your own generated ID, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," object and set ",(0,r.kt)("inlineCode",{parentName:"p"},"networkUserId"),"."),(0,r.kt)("p",null,"A further property, ",(0,r.kt)("inlineCode",{parentName:"p"},"timezone"),", is generated automatically during Subject initialization, based on ",(0,r.kt)("inlineCode",{parentName:"p"},"Calendar.getInstance().getTimeZone()"),". Therefore, this will be added to all events with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," attached. The default will be overriden if ",(0,r.kt)("inlineCode",{parentName:"p"},"timezone")," is provided explicitly."),(0,r.kt)("h3",{id:"adding-subject-properties-to-events"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h3"},"Subject")," properties to events"),(0,r.kt)("p",null,"There are two ways to track the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),' "atomic" properties in your events: on an event-by-event basis; or globally, to affect all events. A combination of both methods is also possible.'),(0,r.kt)("p",null,"A simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Subject subject = new Subject.SubjectBuilder()\n        .userId("java@snowplowanalytics.com")\n        .build();\n')),(0,r.kt)("p",null,"There are no required methods for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubjectBuilder"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," can be added to any event using the ",(0,r.kt)("inlineCode",{parentName:"p"},"subject()")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.Builder")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// This example shows an Unstructured event, but all events can have a Subject\nUnstructured unstructured = Unstructured.builder()\n            .eventData(dataAsSelfDescribingJson)\n            .subject(subject)\n            .build();\n")),(0,r.kt)("p",null,"To set ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," properties in all subsequent events, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// A Subject can be provided at Tracker initialisation\nTracker tracker = new Tracker\n        .TrackerBuilder(emitter, "trackerNamespace", "appId")\n        .subject(subject)\n        .build();\n\n// Alternatively, a Subject can be set later\nTracker tracker = new Tracker\n        .TrackerBuilder(emitter, "trackerNamespace", "appId")\n        .build();\ntracker.setSubject(subject);\n')),(0,r.kt)("p",null,"Subject properties can be updated or added to after initialization, using setter methods. See the ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/Subject.html"},"API docs")," for full details."),(0,r.kt)("p",null,"It's possible to use both ",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),"-","specific and ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),"-","associated ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," objects simultaneously. Fields from both ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," objects are added to the payload, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),"-","specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," having priority."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Adding a global, Tracker-associated Subject\nSubject trackerSubject = new Subject.SubjectBuilder()\n        .language("EN")\n        .useragent("Snowplow")\n        .build();\nTracker tracker = new Tracker\n        .TrackerBuilder(emitter, "trackerNamespace", "appId")\n        .subject(trackerSubject)\n        .build();\n\n// Adding an Event-specific Subject\nSubject eventSubject = new Subject.SubjectBuilder()\n        .userId("java@snowplowanalytics.com")\n        .useragent("Mozilla/5.0")\n        .build();\n\nUnstructured unstructured = Unstructured.builder()\n        .eventData(dataAsSelfDescribingJson)\n        .subject(eventSubject)\n        .build();\n\n// Tracking the event\ntracker.track(unstructured);\n')),(0,r.kt)("p",null,"The resulting enriched event would have these ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," atomic columns populated:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"),(0,r.kt)("th",{parentName:"tr",align:null},"Value / example value"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user","_","id"),(0,r.kt)("td",{parentName:"tr",align:null},'"',(0,r.kt)("a",{parentName:"td",href:"mailto:java@snowplowanalytics.com"},"java@snowplowanalytics.com"),'"'),(0,r.kt)("td",{parentName:"tr",align:null},"eventSubject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"os","_","timezone"),(0,r.kt)("td",{parentName:"tr",align:null},'e.g. "Europe/London"'),(0,r.kt)("td",{parentName:"tr",align:null},"eventSubject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"br","_","lang"),(0,r.kt)("td",{parentName:"tr",align:null},'"EN"'),(0,r.kt)("td",{parentName:"tr",align:null},"trackerSubject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useragent"),(0,r.kt)("td",{parentName:"tr",align:null},'"Mozilla/5.0"'),(0,r.kt)("td",{parentName:"tr",align:null},"eventSubject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"network","_","userid"),(0,r.kt)("td",{parentName:"tr",align:null},'e.g. "8383057f-2769-4321-ad72-58fa1b22e4b3"'),(0,r.kt)("td",{parentName:"tr",align:null},"pipeline")))))}c.isMDXComponent=!0}}]);