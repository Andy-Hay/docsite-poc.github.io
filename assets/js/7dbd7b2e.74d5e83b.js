"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[60317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(k,l(l({ref:t},s),{},{components:r})):o.createElement(k,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={title:"Olark",date:"2020-02-26",sidebar_position:80},l=void 0,i={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/olark/index",id:"migrated/collecting-data/collecting-data-from-third-parties/olark/index",title:"Olark",description:"Overview",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/olark/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/olark",slug:"/migrated/collecting-data/collecting-data-from-third-parties/olark/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/olark/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:80,frontMatter:{title:"Olark",date:"2020-02-26",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Marketo",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/marketo/"},next:{title:"PagerDuty",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/pagerduty/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Configure Olark",id:"configure-olark",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This webhook integration lets you receive\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.olark.com/"},"Olark"),"\xa0events."),(0,a.kt)("p",null,"Supported events are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transcripts"),(0,a.kt)("li",{parentName:"ul"},"Offline messages")),(0,a.kt)("h3",{id:"compatibility"},"Compatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r97-knossos"},"R97 Knossos"),"+"," (",(0,a.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors only)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.olark.com/help/webhooks"},"Olark webhook API"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Integrating Olark's webhooks into Snowplow is a two-stage process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure Olark to send events to Snowplow"),(0,a.kt)("li",{parentName:"ol"},"(Optional) Create the Olark events tables into Amazon Redshift")),(0,a.kt)("h2",{id:"configure-olark"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Olark-webhook-setup#21-olark"}),"Configure Olark"),(0,a.kt)("p",null,"First login to Olark and click on\xa0",(0,a.kt)("strong",{parentName:"p"},"Integrations"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(49067).Z,width:"1142",height:"883"})),(0,a.kt)("p",null,"In integrations search start typing\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"webhooks"),"\xa0(1) until the Webhooks integration is visible, then click\xa0",(0,a.kt)("strong",{parentName:"p"},"Edit"),"\xa0(2):"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(88685).Z,width:"1123",height:"701"})),(0,a.kt)("p",null,"On the webhooks integration page select the\xa0",(0,a.kt)("strong",{parentName:"p"},"URL to post to"),"\xa0field (1)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For the this field you will need to provide the URL to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by Olark:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.olark/v1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then select the\xa0",(0,a.kt)("strong",{parentName:"li"},"Send all transcripts automatically"),"\xa0and/or\xa0",(0,a.kt)("strong",{parentName:"li"},"Send offline messages"),"\xa0according to your needs (2). As of the time of writing (15.12.2017) no other events are directly supported so\xa0",(0,a.kt)("strong",{parentName:"li"},"do not tick Send all events"),".")),(0,a.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.olark/v1?p=<platform code>\n")),(0,a.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,a.kt)("p",null,"Once you click the\xa0",(0,a.kt)("strong",{parentName:"p"},"Save"),"\xa0button you are ready to receive events about your client chat interactions from olark."))}d.isMDXComponent=!0},49067:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/olark-1-a845ce24506ad58fd2f63a264783dc30.png"},88685:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/olark-2-c07253ed0299b844641eecc2e90cf3b0.png"}}]);