"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[32403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Getting started",date:"2021-11-16",sidebar_position:1e3},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/index",id:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/index",title:"Getting started",description:"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0here.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide",slug:"/migrated/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:1e3,frontMatter:{title:"Getting started",date:"2021-11-16",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Roku Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/"},next:{title:"Tracking Events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Using Roku Package Manager (ropm)",id:"using-roku-package-manager-ropm",level:3},{value:"Manual Installation",id:"manual-installation",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Tracking events",id:"tracking-events",level:2},{value:"Testing",id:"testing",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/introduction-to-tracking-design/"},"here"),"."),(0,o.kt)("p",null,"The following steps will guide you through setting up the Roku tracker in your project and tracking a simple event."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"There are two options to install the Roku tracker package to your project:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"using Roku package manager (ropm),"),(0,o.kt)("li",{parentName:"ol"},"by manually copying package files.")),(0,o.kt)("h3",{id:"using-roku-package-manager-ropm"},"Using Roku Package Manager (ropm)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rokucommunity/ropm"},"ropm"),"\xa0is a package manager for the Roku platform. If you are using ropm in your project, you may install the Roku tracker using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ropm install snowplow@npm:@snowplow/roku-tracker\n")),(0,o.kt)("h3",{id:"manual-installation"},"Manual Installation"),(0,o.kt)("p",null,"The Roku tracker may be installed by simply copying source files to your Roku project. You may download and unpack the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"dist.zip"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"dist.tar.gz"),"\xa0package from the latest release build on Github. Copy the following folders and files to your Roku project:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Contents of\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"dist/source"),"\xa0into your\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"source"),"\xa0directory"),(0,o.kt)("li",{parentName:"ol"},"Contents of\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"dist/components"),"\xa0into your\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"components"),"\xa0directory")),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"It is recommended that you instantiate Snowplow and add it to the global scope. In this way, it will be accessible from anywhere within your SceneGraph application. You may create the instance in the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"init"),"\xa0function of your main scene."),(0,o.kt)("p",null,"If you installed the package using ropm, mount the component as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'m.global.AddField("snowplow", "node", false)\nm.global.snowplow = CreateObject("roSGNode", "snowplow_Snowplow")\n')),(0,o.kt)("p",null,"If you installed the package manually, mount the component as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'m.global.AddField("snowplow", "node", false)\nm.global.snowplow = CreateObject("roSGNode", "Snowplow")\n')),(0,o.kt)("h2",{id:"initialization"},"Initialization"),(0,o.kt)("p",null,"Trackers are initialized by setting the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"init"),"\xa0property with configuration of the tracker. This configuration takes the form of a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"roAssociativeArray"),". At its most basic, the configuration takes a Snowplow collector endpoint like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'m.global.snowplow.init = {\n    network: {\n        collector: "http://..."\n    }\n}\n')),(0,o.kt)("p",null,"To learn more about configuring how events are sent, check out\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/configuration/"},"this page"),"."),(0,o.kt)("h2",{id:"tracking-events"},(0,o.kt)("a",{parentName:"h2",href:"#tracking-events"}),"Tracking events"),(0,o.kt)("p",null,"To track an event, simply assign its properties as a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"roAssociativeArray"),"\xa0to a field corresponding to the event type. For instance, to track a structured event, assign the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"structured"),"\xa0property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'m.global.snowplow.structured = {\n    se_ca: "category",\n    se_ac: "action",\n    se_la: "label",\n    se_pr: "property",\n    se_va: 10\n}\n')),(0,o.kt)("p",null,"Visit documentation about\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/"},"tracking events"),"\xa0to learn about other supported event types. You may also want to read about\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/"},"adding more data to tracked events"),"."),(0,o.kt)("h2",{id:"testing"},(0,o.kt)("a",{parentName:"h2",href:"#testing"}),"Testing"),(0,o.kt)("p",null,"Testing that your event tracking is properly configured can be as important as testing the other aspects of your app. It confirms that you are generating the events you expect."),(0,o.kt)("p",null,"We provide two types of pipeline for testing and debugging.\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-mini/"},"Snowplow Mini"),"\xa0is especially useful in manual schema and pipeline testing.\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/"},"Snowplow Micro"),"\xa0is a minimal pipeline designed to be used as part of your app's automated test suite."),(0,o.kt)("p",null,"Check out the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/roku-tracker/example-app/"},"example Roku channel"),"\xa0to see the tracker used with a Snowplow Micro."))}u.isMDXComponent=!0}}]);