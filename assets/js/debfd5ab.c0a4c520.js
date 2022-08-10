"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95487:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Google AMP (0.1.0)",date:"2020-03-13",sidebar_position:1e3},l=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0/index",id:"migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0/index",title:"Google AMP (0.1.0)",description:"Deprecated",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0",slug:"/migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:1e3,frontMatter:{title:"Google AMP (0.1.0)",date:"2020-03-13",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Google AMP (1.0.3)",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0-2/"},next:{title:"Pixel Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/pixel-tracker/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Standard variables",id:"standard-variables",level:2},{value:"<code>collectorHost</code>",id:"collectorhost",level:3},{value:"<code>appId</code>",id:"appid",level:3},{value:"Tracking events",id:"tracking-events",level:2},{value:"Page view",id:"page-view",level:3},{value:"Structured events",id:"structured-events",level:3},{value:"Analytics",id:"analytics",level:3}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Deprecated"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/google-amp-tracker/"},"latest version of this tracker.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Snowplow is collaborating with Google on their\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.ampproject.org/"},"Accelerated Mobile Pages Project"),"\xa0(AMPP or AMP for short). AMP is an open source (Apache License 2.0) initiative to improve the mobile web experience by optimizing web pages for mobile devices."),(0,r.kt)("p",null,"To learn more about analytics for AMP pages see the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.ampproject.org/docs/reference/extended/amp-analytics.html"},"amp-analytics"),"\xa0reference. For general information about AMP see\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.ampproject.org/docs/get_started/about-amp.html"},"What Is AMP?"),"\xa0on the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.ampproject.org/"},"Accelerated Mobile Pages (AMP) Project"),"\xa0site."),(0,r.kt)("p",null,"Snowplow is natively integrated into the project, so pages optimized with AMP HTML can be tracked in Snowplow by adding the appropriate\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"amp-analytics"),"\xa0tag to your pages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<amp-analytics type="snowplow" id="snowplow1">\n    <script type="application/json">\n      {     ...   }   \n    <\/script>   \n  </amp-analytics>\n</body>\n')),(0,r.kt)("h2",{id:"standard-variables"},"Standard variables"),(0,r.kt)("p",null,"Certain parameters must be provided in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'"vars"'),"\xa0section of the tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"vars": {   ... },\n')),(0,r.kt)("h3",{id:"collectorhost"},(0,r.kt)("inlineCode",{parentName:"h3"},"collectorHost")),(0,r.kt)("p",null,"Specify the host to your collector like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"vars": {\n  "collectorHost": "snowplow-collector.acme.com",\n  ...\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do\xa0",(0,r.kt)("em",{parentName:"li"},"not"),"\xa0include the protocol aka schema (",(0,r.kt)("inlineCode",{parentName:"li"},"http(s)://"),")"),(0,r.kt)("li",{parentName:"ul"},"Do\xa0",(0,r.kt)("em",{parentName:"li"},"not"),"\xa0include a trailing slash"),(0,r.kt)("li",{parentName:"ul"},"Use of HTTPS is mandatory in AMP, so your Snowplow collector\xa0",(0,r.kt)("strong",{parentName:"li"},"must"),"\xa0support HTTPS")),(0,r.kt)("h3",{id:"appid"},(0,r.kt)("inlineCode",{parentName:"h3"},"appId")),(0,r.kt)("p",null,"You must set the application ID for the website you are tracking via AMP:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"vars": {\n  "appId": "campaign-microsite",\n  ...\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You do not have to use the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"appId"),"\xa0to distinguish AMP traffic from other web traffic (unless you want to) - see the\xa0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Google-AMP-Tracker#analytics"},"Analytics"),"\xa0section for an alternative approach")),(0,r.kt)("h2",{id:"tracking-events"},"Tracking events"),(0,r.kt)("p",null,"The following trigger request values are supported for the Snowplow Analytics configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageView"),"\xa0for page view tracking"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"structEvent"),"\xa0for structured event tracking")),(0,r.kt)("p",null,"All event tracking is disabled by default; you can enable it on an event-by-event basis as follows:"),(0,r.kt)("h3",{id:"page-view"},"Page view"),(0,r.kt)("p",null,"Enable the page view tracking like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<amp-analytics type="snowplow" id="snowplow2">\n<script type="application/json">\n{\n  "vars": {\n    "collectorHost": "snowplow-collector.acme.com",  // Replace with your collector host\n    "appId": "campaign-microsite"                    // Replace with your app ID\n  },\n  "triggers": {\n    "trackPageview": {  // Trigger names can be any string. trackPageview is not a required name\n      "on": "visible",\n      "request": "pageView"\n    }\n  }\n}\n<\/script>\n</amp-analytics>\n')),(0,r.kt)("h3",{id:"structured-events"},"Structured events"),(0,r.kt)("p",null,'Structured events are user interactions with content that can be tracked independently from a web page or a screen load. "Structured" refers to the Google Analytics-style structure of having up to five fields (with only the first two required).'),(0,r.kt)("p",null,"Events can be sent by setting the AMP trigger request value to event and setting the required event category and action fields."),(0,r.kt)("p",null,"The following example uses the selector attribute of the trigger to send an event when a particular element is clicked:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<amp-analytics type="snowplow" id="snowplow3">\n<script type="application/json">\n{\n  "vars": {\n    "collectorHost": "snowplow-collector.acme.com",  // Replace with your collector host\n    "appId": "campaign-microsite"                    // Replace with your app ID\n  },\n  "triggers": {\n    "trackClickOnHeader" : {\n      "on": "click",\n      "selector": "#header",\n      "request": "structEvent",\n      "vars": {\n        "structEventCategory": "ui-components",\n        "structEventAction": "header-click"\n      }\n    }\n  }\n}\n<\/script>\n</amp-analytics>\n')),(0,r.kt)("p",null,"You can set key-value pairs for the following event fields in the vars attribute of the trigger:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Validation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"structEventCategory")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"action"),"\xa0belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"structEventAction")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"structEventLabel")),(0,r.kt)("td",{parentName:"tr",align:null},"A string to provide additional dimensions to the event data"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"structEventProperty")),(0,r.kt)("td",{parentName:"tr",align:null},"A string describing the object or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"structEventValue")),(0,r.kt)("td",{parentName:"tr",align:null},"A value to provide numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Int or Float")))),(0,r.kt)("h3",{id:"analytics"},"Analytics"),(0,r.kt)("p",null,"All events sent via this tracker will have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"v_tracker"),"\xa0set to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"amp-0.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platform"),"\xa0set to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"web"))),(0,r.kt)("p",null,"If you want to analyze events sent via this tracker, you may prefer to query for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"v_tracker LIKE 'amp-%'"),"\xa0to future-proof your query against future releases of this tracker (which may change the version number)."))}u.isMDXComponent=!0}}]);