"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[61242],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},15888:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"Iterable",date:"2022-05-17",sidebar_position:30},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/iterable/index",id:"migrated/collecting-data/collecting-data-from-third-parties/iterable/index",title:"Iterable",description:"Overview",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/iterable/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/iterable",slug:"/migrated/collecting-data/collecting-data-from-third-parties/iterable/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/iterable/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Iterable",date:"2022-05-17",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Iglu Webhook",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/iglu-webhook/"},next:{title:"MailChimp",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/mailchimp/"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Configure Iterable to send events to Snowplow",id:"configure-iterable-to-send-events-to-snowplow",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This webhook integration lets you track a variety of events provided by Iterable through their\xa0",(0,n.kt)("a",{parentName:"p",href:"https://support.iterable.com/hc/en-us/articles/208013936-System-Webhooks"},"System Webhooks"),". The event types include email opens and clicks, sent SMS or push notifications, and more."),(0,n.kt)("h2",{id:"configure-iterable-to-send-events-to-snowplow"},"Configure Iterable to send events to Snowplow"),(0,n.kt)("p",null,"First, login to Iterable. Under\xa0",(0,n.kt)("strong",{parentName:"p"},"Integrations"),"\xa0in the top toolbar, click on\xa0",(0,n.kt)("strong",{parentName:"p"},"System webhooks"),"."),(0,n.kt)("p",null,"Then select\xa0",(0,n.kt)("strong",{parentName:"p"},"Create webhook"),"\xa0above the list of webhooks on the right and enter the endpoint URL. The endpoint URL field is the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by Iterable:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://<collector host>/com.snowplowanalytics.iglu/v1?schema=iglu%3Acom.iterable%2Fsystem_webhook%2Fjsonschema%2F1-0-0\n")),(0,n.kt)("p",null,"You may want to set the snowplow\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"aid="),"\xa0parameter in your URL query string to the company for which this webhook has been configured; this is the\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0parameter taken from the\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),", however this is optional. The company is also contained in the received messages."),(0,n.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter by appending a query string to the end of the URL, in combination or separately with aid above. Here is what the final URL would look like for a configured aid and platform:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://<collector host>/com.snowplowanalytics.iglu/v1?schema=iglu%3Acom.iterable%2Fsystem_webhook%2Fjsonschema%2F1-0-0&aid=<company>&p=<platform code>\n")),(0,n.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/snowplow-tracker-protocol#1-common-parameters-platform-and-event-independent"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,n.kt)("p",null,"Having entered the endpoint URL, click on\xa0",(0,n.kt)("strong",{parentName:"p"},"Create"),'. This will open a form where you can set up authentication of the callbacks \u2013 leave that to "None". In the bottom part of the page, you will be able to select which events to subscribe to as shown in this screenshot:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(7715).Z,width:"810",height:"1024"})),(0,n.kt)("p",null,"That\u2019s it \u2013 when you save the configuration, Iterable events should automatically flow through into your data warehouse."))}d.isMDXComponent=!0},7715:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/iterable-events-810x1024-9c02a317d11b6989116049079f224476.png"}}]);