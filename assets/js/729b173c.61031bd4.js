"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[29241],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=l,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Mandrill",date:"2020-02-25",sidebar_position:60},o=void 0,i={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/mandrill/index",id:"migrated/collecting-data/collecting-data-from-third-parties/mandrill/index",title:"Mandrill",description:"Overview",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/mandrill/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/mandrill",slug:"/migrated/collecting-data/collecting-data-from-third-parties/mandrill/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/mandrill/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:60,frontMatter:{title:"Mandrill",date:"2020-02-25",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"MailGun",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/mailgun/"},next:{title:"Marketo",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/marketo/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Mandrill",id:"mandrill",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,l.kt)("a",{parentName:"p",href:"https://mandrill.com/"},"Mandrill"),"."),(0,l.kt)("p",null,"Available events are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Message sent"),(0,l.kt)("li",{parentName:"ul"},"Message hard bounced"),(0,l.kt)("li",{parentName:"ul"},"Message soft bounced"),(0,l.kt)("li",{parentName:"ul"},"Message opened"),(0,l.kt)("li",{parentName:"ul"},"Message marked as spam"),(0,l.kt)("li",{parentName:"ul"},"Message rejected"),(0,l.kt)("li",{parentName:"ul"},"Message delayed"),(0,l.kt)("li",{parentName:"ul"},"Message clicked"),(0,l.kt)("li",{parentName:"ul"},"Recipient unsubscribed")),(0,l.kt)("h3",{id:"compatibility"},"Compatibility"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/0.9.14"},"Snowplow 0.9.14"),"+"," (",(0,l.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors only)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://help.mandrill.com/entries/21738186-Introduction-to-Webhooks"},"Mandrill webhook API"))),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Integrating Mandrill's webhooks into Snowplow is a two-stage process:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Configure Mandrill to send events to Snowplow"),(0,l.kt)("li",{parentName:"ol"},"(Optional) Create the Mandrill events tables into Amazon Redshift")),(0,l.kt)("h2",{id:"mandrill"},"Mandrill"),(0,l.kt)("p",null,"First login to Mandrill and click on the\xa0",(0,l.kt)("strong",{parentName:"p"},"Settings"),"\xa0button which will be on the left hand side of the screen."),(0,l.kt)("p",null,"Once in the Settings menu click on\xa0",(0,l.kt)("strong",{parentName:"p"},"Webhooks"),"\xa0and then click the\xa0",(0,l.kt)("strong",{parentName:"p"},"Add a Webhook"),"\xa0button."),(0,l.kt)("p",null,"Now we can start to setup the webhook by selecting what events we want our Mandrill Webhook to trigger!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please note: 'Rejection Whitelist Changes' & 'Rejection Blacklist Changes' are not supported by the Snowplow MandrillAdapter.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(65558).Z,width:"1940",height:"1170"})),(0,l.kt)("p",null,"Once we have selected what events we want to record we need to fill in the\xa0",(0,l.kt)("strong",{parentName:"p"},"Post To URL"),"\xa0field:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For the this field you will need to provide the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by Mandrill:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://<collector host>/com.mandrill/v1?aid=<company code>\n")),(0,l.kt)("p",null,"The\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"aid="),"\xa0name-value pair in your URI's querystring is optional; this is the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0parameter taken from the\xa0",(0,l.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),". You can use it to specify which company in Mandrill these call complete events belong to. Putting it all together, our setup screen now looks like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(13187).Z,width:"1950",height:"1030"})),(0,l.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.mandrill/v1?aid=<company code>&p=<platform code>\n")),(0,l.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,l.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,l.kt)("p",null,"Once you click the\xa0",(0,l.kt)("strong",{parentName:"p"},"Create Webhook"),"\xa0button it will attempt to authenticate that the Collector actually exists and is ready to receive events. If everything is setup correctly it will return to the previous page and you will now see your new Webhook listed!"),(0,l.kt)("p",null,"That's it - with this table deployed, your Mandrill events should automatically flow through into Redshift."))}d.isMDXComponent=!0},65558:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mandrill-1-cd468779fceea6dfa60e1b0368accad1.png"},13187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mandrill-2-723fe55962c02e12fae65adb12b1eeab.png"}}]);