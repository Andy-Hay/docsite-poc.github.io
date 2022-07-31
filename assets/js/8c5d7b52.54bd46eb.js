"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[42974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={title:"Snowplow Client Configuration",date:"2021-11-24",sidebar_position:100},a=void 0,s={unversionedId:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/snowplow-client-configuration/index",id:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/snowplow-client-configuration/index",title:"Snowplow Client Configuration",description:"Populating common User Data",source:"@site/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/snowplow-client-configuration/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/snowplow-client-configuration",slug:"/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/snowplow-client-configuration/",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/snowplow-client-configuration/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659256171,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:100,frontMatter:{title:"Snowplow Client Configuration",date:"2021-11-24",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Snowplow Client for GTM SS",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/"},next:{title:"Snowplow Tag for GTM SS",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/"}},l={},d=[{value:"Populating common User Data",id:"populating-common-user-data",level:2},{value:"Forward User IP address",id:"forward-user-ip-address",level:2},{value:"sp.js settings",id:"spjs-settings",level:2},{value:"Additional Options",id:"additional-options",level:2},{value:"Populate GAv4 Client Properties",id:"populate-gav4-client-properties",level:3},{value:"Custom POST Path",id:"custom-post-path",level:3},{value:"Claim GET Requests",id:"claim-get-requests",level:3},{value:"Include Original\xa0<code>tp2</code>\xa0Event",id:"include-originaltp2event",level:3},{value:"Include Original Self Describing Event",id:"include-original-self-describing-event",level:3},{value:"Include Original Contexts Array",id:"include-original-contexts-array",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"populating-common-user-data"},"Populating common User Data"),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"GTM Common Event"),"\xa0has a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"user_data"),"\xa0property. To populate this, you can attach a context Entity to your events of this schema:\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"iglu:com.google.tag-manager.server-side/user_data/jsonschema/1-0-0"),", which can be found on\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/853357452300b172ebc113d1d75d1997f595142a/schemas/com.google.tag-manager.server-side/user_data/jsonschema/1-0-0"},"Iglu Central"),"."),(0,i.kt)("h2",{id:"forward-user-ip-address"},"Forward User IP address"),(0,i.kt)("p",null,"As the container sits between the website user and the Snowplow collector (or other downstream destinations), the users IP will be unknown to the destination. By enabling this option, the users IP address will be included in the events sent to Tags."),(0,i.kt)("p",null,"By disabling this, you are able to use GTM SS as a proxy which can string user IP addresses from requests. Many tags also offer this functionality at the tag level."),(0,i.kt)("h2",{id:"spjs-settings"},"sp.js settings"),(0,i.kt)("p",null,"This setting allows for your GTM SS Container to serve your\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js"),"\xa0JavaScript Tracker file. This allows you to have first party hosting of your tracker without the need to set up separate hosting or use a third party CDN."),(0,i.kt)("p",null,"It is recommended to rename\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js"),"\xa0if enabling this setting, as many adblockers will block requests to files named\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js"),". A random string is the best option here."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52590).Z,width:"630",height:"294"})),(0,i.kt)("p",null,"You can request\xa0",(0,i.kt)("em",{parentName:"p"},"any"),"\xa0version of the Snowplow JavaScript Tracker with this setting enabled. e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"https://{{gtm-ss-url}}/3.1.6/776b5b25.js"),"\xa0will load v3.1.6, or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"https://{{gtm-ss-url}}/2.18.2/776b5b25.js"),"\xa0will load v2.18.2."),(0,i.kt)("h2",{id:"additional-options"},"Additional Options"),(0,i.kt)("h3",{id:"populate-gav4-client-properties"},"Populate GAv4 Client Properties"),(0,i.kt)("p",null,"If you want to forward your Snowplow events to the GAv4 Tag, enable this option to populate additional properties which the GAv4 requires."),(0,i.kt)("h3",{id:"custom-post-path"},"Custom POST Path"),(0,i.kt)("p",null,"As many ad blockers will block the default\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/com.snowplowanalytics.snowplow/tp2"),"\xa0POST path, it is recommended to change this and then update your trackers initialization to use this custom POST path."),(0,i.kt)("h3",{id:"claim-get-requests"},"Claim GET Requests"),(0,i.kt)("p",null,"The default Snowplow path for GET requests is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/i"),", as this is so short there is a chance it could conflict with other Clients within your GTM SS Container. If you'd only like your Snowplow Client to listen for POST requests, you can disable this GET endpoint with this setting."),(0,i.kt)("h3",{id:"include-originaltp2event"},"Include Original\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"tp2"),"\xa0Event"),(0,i.kt)("p",null,"If using this Client to receive Snowplow Tracker events and then forward to a Snowplow Collector with the Snowplow Tag, you should leave this option enabled as it will allow the Snowplow Tag to forward the original tracker event with no extra processing."),(0,i.kt)("h3",{id:"include-original-self-describing-event"},"Include Original Self Describing Event"),(0,i.kt)("p",null,'By default, the self describing event will be "shredded" into a key using the schema name as the key, this is a "lossy" transformation, as the Minor and Patch parts of the jsonschema version will be dropped. This flag populates the original, lossless, Self Describing Event as\xa0',(0,i.kt)("inlineCode",{parentName:"p"},"x-sp-self_describing_event"),"."),(0,i.kt)("h3",{id:"include-original-contexts-array"},"Include Original Contexts Array"),(0,i.kt)("p",null,'By default, the contexts will be "shredded" into separate keys using the context name as the key, this is a "lossy" transformation, as the Minor and Patch parts of the jsonschema version will be dropped. If you would like to keep the original "lossless" contexts array, enable this option.'))}c.isMDXComponent=!0},52590:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/spjssettings-905ab9716df666e83d799fa929e3bc40.png"}}]);