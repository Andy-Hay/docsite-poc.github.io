"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[29460],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var a=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,r=function(t,e){if(null==t)return{};var o,a,r={},n=Object.keys(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var o=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(o),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return o?a.createElement(g,i(i({ref:e},p),{},{components:o})):a.createElement(g,i({ref:e},p))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},886:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={title:"StatusGator",date:"2020-02-26",sidebar_position:120},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/statusgator/index",id:"migrated/collecting-data/collecting-data-from-third-parties/statusgator/index",title:"StatusGator",description:"Overview",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/statusgator/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/statusgator",slug:"/migrated/collecting-data/collecting-data-from-third-parties/statusgator/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/statusgator/",draft:!1,tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"StatusGator",date:"2020-02-26",sidebar_position:120},sidebar:"tutorialSidebar",previous:{title:"Sendgrid",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/sendgrid/"},next:{title:"Unbounce",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/unbounce/"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"StatusGator",id:"statusgator",level:2}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This webhook integration lets you receive\xa0",(0,r.kt)("a",{parentName:"p",href:"https://statusgator.com/"},"StatusGator"),"\xa0status change events."),(0,r.kt)("h3",{id:"compatibility"},"Compatibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r97-knossos"},"R97 Knossos"),"+"," (",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors only)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.statusgator.com/introducing-web-hooks/"},"StatusGator webhook API"))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Integrating StatusGator's webhooks into Snowplow is a two-stage process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure StatusGator to send events to Snowplow"),(0,r.kt)("li",{parentName:"ol"},"(Optional) Create the StatusGator events tables into Amazon Redshift")),(0,r.kt)("h2",{id:"statusgator"},"StatusGator"),(0,r.kt)("p",null,"First login to StatusGator and setup one or more of the cloud services you want to receive notifications from, by clicking them and setting\xa0",(0,r.kt)("strong",{parentName:"p"},"Subscribe"),'\xa0to "ON", as in this example for the Amazon Web Services notifications:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(80393).Z,width:"1209",height:"909"})),(0,r.kt)("p",null,"Once you have selected your cloud providers, click on\xa0",(0,r.kt)("em",{parentName:"p"},"Notifications"),"*"," on the top panel and set\xa0",(0,r.kt)("strong",{parentName:"p"},"Webhooks"),'\xa0to "ON" and then add the webhook URL for your collector in the field\xa0',(0,r.kt)("strong",{parentName:"p"},"Web Hook URL"),", like so:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(41537).Z,width:"1189",height:"902"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the this field you will need to provide the URL to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by StatusGator:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.statusgator/v1\n")),(0,r.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.statusgator/v1?p=<platform code>\n")),(0,r.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,r.kt)("p",null,"Once you click the\xa0",(0,r.kt)("strong",{parentName:"p"},"Save"),"\xa0button you are ready to receive events about the downtime on your chosen cloud providers."))}u.isMDXComponent=!0},80393:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/statusgator-1-c5779b318b898af47d4e3779e7c3251d.png"},41537:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/statusgator-2-52618595db6e957e325acebe2528a46b.png"}}]);