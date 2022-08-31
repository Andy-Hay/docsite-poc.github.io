"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[61711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(a),g=r,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||n;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}s.displayName="MDXCreateElement"},42518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));const n={title:"PagerDuty",date:"2020-02-26",sidebar_position:90},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/pagerduty/index",id:"migrated/collecting-data/collecting-data-from-third-parties/pagerduty/index",title:"PagerDuty",description:"Overview",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/pagerduty/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/pagerduty",slug:"/migrated/collecting-data/collecting-data-from-third-parties/pagerduty/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/pagerduty/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:90,frontMatter:{title:"PagerDuty",date:"2020-02-26",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Olark",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/olark/"},next:{title:"Pingdom",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/pingdom/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Configure PagerDuty",id:"configure-pagerduty",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,r.kt)("a",{parentName:"p",href:"http://www.pagerduty.com/"},"PagerDuty"),"."),(0,r.kt)("p",null,"Available events are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trigger"),(0,r.kt)("li",{parentName:"ul"},"Acknowledge"),(0,r.kt)("li",{parentName:"ul"},"Unacknowledge"),(0,r.kt)("li",{parentName:"ul"},"Resolve"),(0,r.kt)("li",{parentName:"ul"},"Assign"),(0,r.kt)("li",{parentName:"ul"},"Escalate"),(0,r.kt)("li",{parentName:"ul"},"Delegate")),(0,r.kt)("h3",{id:"compatibility"},"Compatibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/0.9.13"},"Snowplow 0.9.13"),"+"," (",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors for event processing)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.pagerduty.com/documentation/rest/webhooks"},"PagerDuty webhook API"))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Integrating PagerDuty's webhooks into Snowplow is a two-stage process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure PagerDuty to send events to Snowplow"),(0,r.kt)("li",{parentName:"ol"},"(Optional) Create the PagerDuty events table into Amazon Redshift")),(0,r.kt)("h2",{id:"configure-pagerduty"},"Configure PagerDuty"),(0,r.kt)("p",null,"First login into to your PagerDuty account and select the\xa0",(0,r.kt)("strong",{parentName:"p"},"Services"),"\xa0button from the top of the screen."),(0,r.kt)("p",null,"Select which service you would like to add a Webhook endpoint to then click the\xa0",(0,r.kt)("strong",{parentName:"p"},"Add a webhook"),"\xa0button."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(30647).Z,width:"2306",height:"382"})),(0,r.kt)("p",null,"Fill in the name of your Webhook and the Endpoint URL."),(0,r.kt)("p",null,"For the Endpoint URL field, you will need to provide the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by PagerDuty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.pagerduty/v1?aid=<company code>\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aid="),"\xa0name-value pair in your URI's querystring is optional; this is the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0parameter taken from the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),". You can use it to specify which company in PagerDuty these call complete events belong to. Putting it all together, our setup screen now looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(48176).Z,width:"2290",height:"320"})),(0,r.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.pagerduty/v1?aid=<company code>&p=<platform code>\n")),(0,r.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,r.kt)("p",null,"Click save and from now on when any of the seven available events are triggered an event will also be sent to the Webhook!"),(0,r.kt)("p",null,"That's it - with this table deployed, your PagerDuty events should automatically flow through into Redshift."))}d.isMDXComponent=!0},30647:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pagerduty-1-2fe9a99167859a06d1223336662a9e97.png"},48176:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pagerduty-2-3ebad1c98ec8fce1c87c7618a3237a39.png"}}]);