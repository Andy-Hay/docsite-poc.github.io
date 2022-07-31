"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[29382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(g,i(i({ref:t},s),{},{components:r})):o.createElement(g,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Vero",date:"2020-02-26",sidebar_position:140},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/vero/index",id:"migrated/collecting-data/collecting-data-from-third-parties/vero/index",title:"Vero",description:"Overview",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/vero/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/vero",slug:"/migrated/collecting-data/collecting-data-from-third-parties/vero/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/vero/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:140,frontMatter:{title:"Vero",date:"2020-02-26",sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Unbounce",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/unbounce/"},next:{title:"ZenDesk",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/zendesk/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Configure Vero",id:"configure-vero",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.getvero.com/"},"Vero"),"."),(0,n.kt)("p",null,"Available events are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bounced"),(0,n.kt)("li",{parentName:"ul"},"Clicked"),(0,n.kt)("li",{parentName:"ul"},"Created"),(0,n.kt)("li",{parentName:"ul"},"Delivered"),(0,n.kt)("li",{parentName:"ul"},"Opened"),(0,n.kt)("li",{parentName:"ul"},"Sent"),(0,n.kt)("li",{parentName:"ul"},"Unsubscribed"),(0,n.kt)("li",{parentName:"ul"},"Updated")),(0,n.kt)("h3",{id:"compatibility"},"Compatibility"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r107-trypillia"},"Snowplow R107 Trypillia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getvero.com/articles/setting-up-veros-webhooks"},"Vero webhooks"))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Integrating Vero's webhooks into Snowplow is a two-stage process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Configure Vero to send events to Snowplow"),(0,n.kt)("li",{parentName:"ol"},"(Optional) Create the Vero events tables for Amazon Redshift")),(0,n.kt)("h2",{id:"configure-vero"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Vero-webhook-setup#21-vero"}),"Configure Vero"),(0,n.kt)("p",null,"First login to Vero. Select\xa0",(0,n.kt)("strong",{parentName:"p"},"Settings"),"\xa0from the menu panel along the left-hand side of the screen, then navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"Integrations"),"\xa0in the Settings menu."),(0,n.kt)("p",null,"Select\xa0",(0,n.kt)("strong",{parentName:"p"},"Custom Integration (Webhooks)"),"\xa0from the list by clicking the row. Ensure it's switched\xa0",(0,n.kt)("strong",{parentName:"p"},"ON"),"\xa0in order to send events to Snowplow."),(0,n.kt)("p",null,"Click\xa0",(0,n.kt)("strong",{parentName:"p"},"View"),"\xa0on the right side of the\xa0",(0,n.kt)("strong",{parentName:"p"},"Custom Integration (Webhooks)"),"\xa0icon."),(0,n.kt)("p",null,"For the\xa0",(0,n.kt)("strong",{parentName:"p"},"Notification url"),"\xa0field you will need to provide the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by Vero:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.getvero/v1\n")),(0,n.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter by appending a query string to the end of the URL so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.getvero/v1?p=<platform code>\n")),(0,n.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,n.kt)("p",null,"The other values you can set up manually in the similar fashion are\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"nuid"),",\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"aid"),",\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"cv"),",\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"eid"),",\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"ttm"),", and\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,n.kt)("p",null,"Before we save our Vero webhook we can configure what types of events Vero will send to our webhook and what channels will trigger these events. Simply select the boxes that are applicable to you and Vero will send these events to our webhook."),(0,n.kt)("p",null,"Once you click the\xa0",(0,n.kt)("strong",{parentName:"p"},"Save"),"\xa0button you are ready to receive events from Vero."))}u.isMDXComponent=!0}}]);