"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[19276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Getting started",date:"2022-01-31",sidebar_position:10},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/getting-started/index",id:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/getting-started/index",title:"Getting started",description:"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0here.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/getting-started/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/getting-started",slug:"/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/getting-started/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/getting-started/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:10,frontMatter:{title:"Getting started",date:"2022-01-31",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Flutter Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/"},next:{title:"Initialization and configuration",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/initialization-and-configuration/"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Installation on Web",id:"installation-on-web",level:3},{value:"Initialization",id:"initialization",level:2},{value:"Tracking events",id:"tracking-events",level:2},{value:"Testing",id:"testing",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/introduction-to-tracking-design/"},"here"),"."),(0,r.kt)("p",null,"The following steps will guide you through setting up the Flutter tracker in your project and tracking a simple event."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Add the Snowplow tracker as a dependency to your Flutter application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flutter pub add snowplow_tracker\n")),(0,r.kt)("p",null,"This will add a line with the dependency like to your pubspec.yaml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies:\n    snowplow_tracker: ^0.1.0\n")),(0,r.kt)("p",null,"Import the package into your Dart code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import 'package:snowplow_tracker/snowplow_tracker.dart'\n")),(0,r.kt)("h3",{id:"installation-on-web"},"Installation on Web"),(0,r.kt)("p",null,"If using the tracker within a Flutter app for Web, you will also need to import the Snowplow JavaScript Tracker in your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"\xa0file. Please load the JS tracker with the Snowplow tag as\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/loading/"},"described in the official documentation"),". Do not change the global function name\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow"),"\xa0that is used to access the tracker \u2013 the Flutter APIs assume that it remains the default as shown in documentation."),(0,r.kt)("p",null,"Make sure to use JavaScript tracker version\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"3.2"),"\xa0or newer. You may also refer to the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-flutter-tracker/tree/main/example"},"example project"),"\xa0in the Flutter tracker repository to see this in action."),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Instantiate a tracker using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow.createTracker"),"\xa0function. You may create the tracker in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"initState()"),"\xa0of your main widget. At its most basic, the function takes two required arguments:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint"),". Tracker namespace identifies the tracker instance, you may create multiple trackers with different namespaces. The endpoint is the URI of the Snowplow collector to send the events to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SnowplowTracker tracker = await Snowplow.createTracker(\n    namespace: 'ns1',\n    endpoint: 'http://...'\n);\n")),(0,r.kt)("p",null,"There are additional optional arguments to configure the tracker. To learn more about configuring how events are sent, check out\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/initialization-and-configuration/"},"this page"),"."),(0,r.kt)("h2",{id:"tracking-events"},"Tracking events"),(0,r.kt)("p",null,"To track events, simply instantiate their respective types (e.g.,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Structured"),") and pass them to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"tracker.track"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow.track"),"\xa0methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track(ScreenView(\n    id: '2c295365-eae9-4243-a3ee-5c4b7baccc8f',\n    name: 'home',\n    type: 'full',\n    transitionType: 'none'));\n")),(0,r.kt)("p",null,"Visit documentation about\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/tracking-events/"},"tracking events"),"\xa0to learn about other supported event types. You may also want to read about\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/adding-data/"},"adding more data to tracked events"),"."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Testing that your event tracking is properly configured can be as important as testing the other aspects of your app. It confirms that you are generating the events you expect."),(0,r.kt)("p",null,"We provide two types of pipeline for testing and debugging.\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-mini/"},"Snowplow Mini"),"\xa0is especially useful in manual schema and pipeline testing.\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/"},"Snowplow Micro"),"\xa0is a minimal pipeline designed to be used as part of your app's automated test suite."))}d.isMDXComponent=!0}}]);