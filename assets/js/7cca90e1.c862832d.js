"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[16715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const l={title:"Iglu Webhook",date:"2020-02-25",sidebar_position:30},i=void 0,r={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/iglu-webhook/index",id:"migrated/collecting-data/collecting-data-from-third-parties/iglu-webhook/index",title:"Iglu Webhook",description:"This webhook adapter lets you track events sent via a\xa0GET\xa0or\xa0POST\xa0request containing an\xa0Iglu\\-compatible event payload.",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/iglu-webhook/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/iglu-webhook",slug:"/migrated/collecting-data/collecting-data-from-third-parties/iglu-webhook/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/iglu-webhook/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:30,frontMatter:{title:"Iglu Webhook",date:"2020-02-25",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"HubSpot",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/hubspot/"},next:{title:"Iterable",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/iterable/"}},p={},s=[{value:"Setup",id:"setup",level:2},{value:"Your webhook",id:"your-webhook",level:2},{value:"Path",id:"path",level:3},{value:"Required fields",id:"required-fields",level:3},{value:"Optional fields",id:"optional-fields",level:3},{value:"Example\xa0<code>GET</code>\xa0request",id:"examplegetrequest",level:3},{value:"Example\xa0<code>POST</code>\xa0requests",id:"examplepostrequests",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This webhook adapter lets you track events sent via a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request containing an\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu"},"Iglu"),"-","compatible event payload."),(0,o.kt)("p",null,"You can use this adapter with vendors who allow you define your\xa0",(0,o.kt)("strong",{parentName:"p"},"own"),'\xa0event types for "postback" events or custom Webhook events.'),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Integrating Iglu-compatible webhooks into Snowplow is a two-stage process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure your third-party system to send Iglu-compatible events to Snowplow"),(0,o.kt)("li",{parentName:"ol"},"Setup the appropriate JSON Schema for each Iglu-compatible event you are sending through")),(0,o.kt)("h2",{id:"your-webhook"},"Your webhook"),(0,o.kt)("p",null,"The Iglu webhook adapter supports events send in as\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0requests."),(0,o.kt)("h3",{id:"path"},"Path"),(0,o.kt)("p",null,"We use a special path to tell Snowplow that these events should be parsed as Iglu self-describing JSON events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{{COLLECTOR_URL}}/com.snowplowanalytics.iglu/v1?schema=<iglu schema uri>&...\n")),(0,o.kt)("h3",{id:"required-fields"},"Required fields"),(0,o.kt)("p",null,"You can send in whatever name-value pairs on the querystring that make sense for your event, but you\xa0",(0,o.kt)("strong",{parentName:"p"},"must"),"\xa0also include a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0parameter, which is set to a valid Iglu self-describing schema URI."),(0,o.kt)("p",null,"The below examples all use a schema available on Iglu Central. However, you will likely want to create your own schema that describes the event for the platform you are receiving data from."),(0,o.kt)("p",null,"The below examples use the ",(0,o.kt)("inlineCode",{parentName:"p"},"social_interaction")," schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0\n")),(0,o.kt)("h3",{id:"optional-fields"},"Optional fields"),(0,o.kt)("p",null,"If you want to specify which app these events belong to, add an\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"aid"),"\xa0parameter as taken from the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/snowplow-tracker-protocol#1-common-parameters-platform-and-event-independent"},"Snowplow Tracker Protocol"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...&aid=<company code>&...\n")),(0,o.kt)("p",null,"You can also manually override the event's\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...&p=<platform code>&...\n")),(0,o.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/snowplow-tracker-protocol#1-common-parameters-platform-and-event-independent"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,o.kt)("h3",{id:"examplegetrequest"},"Example\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"GET"),"\xa0request"),(0,o.kt)("p",null,"Here is an example of an Iglu-compatible event sent as a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0request, for a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0"},"Social Interacton event"),", broken out onto multiple lines to make it easier to read:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{{COLLECTOR_URL}}/com.snowplowanalytics.iglu/v1?schema=iglu%3Acom.snowplowanalytics.snowplow%2Fsocial_interaction%2Fjsonschema%2F1-0-0\n  &aid=mobile-attribution\n  &p=mob\n  &network=twitter\n  &action=retweet\n")),(0,o.kt)("p",null,"This will be converted by the Iglu webhook adapter into a self-describing JSON looking like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema":"iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",\n  "data": {\n    "network": "twitter",\n    "action": "retweet"\n  }\n}\n')),(0,o.kt)("p",null,"The Snowplow enriched event containing this JSON will include\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"app_id"),'\xa0set to "mobile-attribution" and\xa0',(0,o.kt)("inlineCode",{parentName:"p"},"platform"),'\xa0set to "mob".'),(0,o.kt)("h3",{id:"examplepostrequests"},"Example\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"POST"),"\xa0requests"),(0,o.kt)("p",null,"POST requests can be compiled in three different ways for the Iglu webhook:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a full Self Describing JSON in the body"),(0,o.kt)("li",{parentName:"ul"},"With a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"?schema=<iglu schema uri>"),"\xa0in the querystring and JSON in the body"),(0,o.kt)("li",{parentName:"ul"},"As a ",(0,o.kt)("inlineCode",{parentName:"li"},"x-www-form-urlencoded")," payload")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": For the event to be accepted the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type"),"\xa0must be either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"application/json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"application/json; charset=utf-8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"))),(0,o.kt)("p",null,"The below examples are written as ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," requests as an example, however you can send the events using any tool or technology that supports sending POST requests."),(0,o.kt)("p",null,"To send as a full Self Describing JSON in the body and a Content-Type of ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --request POST \\\n   --url http://{{COLLECTOR_URL}}/com.snowplowanalytics.iglu/v1 \\\n   --header \'Content-Type: application/json\' \\\n   --data \'{\n   "schema":"iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",\n   "data": {\n         "network": "twitter",\n         "action": "retweet"\n     }\n }\'\n')),(0,o.kt)("p",null,"To send with a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"?schema=<iglu schema uri>"),"\xa0in the querystring and a data JSON in the body and Content-Type of ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --request POST \\\n   --url \'http://{{COLLECTOR_URL}}/com.snowplowanalytics.iglu/v1?schema=iglu%3Acom.snowplowanalytics.snowplow%2Fsocial_interaction%2Fjsonschema%2F1-0-0\' \\\n   --header \'Content-Type: application/json\' \\\n   --data \'{\n   "network": "twitter",\n   "action": "retweet"\n }\'\n')),(0,o.kt)("p",null,"To send as a ",(0,o.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded")," payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request POST \\\n   --url 'http://{{COLLECTOR_URL}}/com.snowplowanalytics.iglu/v1?schema=iglu%3Acom.snowplowanalytics.snowplow%2Fsocial_interaction%2Fjsonschema%2F1-0-0' \\\n   --header 'Content-Type: application/x-www-form-urlencoded' \\\n   --data 'network=twitter&action=retweet'\n")),(0,o.kt)("p",null,"As with the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0request above you can also attach extra information into the querystring to help describe your event. The following parameters can be added:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aid="),"\xa0: The application ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"p="),"\xa0: The platform"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nuid="),"\xa0: The network user ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eid="),"\xa0: A custom event ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ttm="),"\xa0: The true timestamp"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url="),"\xa0: The page URL"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cv="),"\xa0: The context vendor (deprecated)")))}u.isMDXComponent=!0}}]);