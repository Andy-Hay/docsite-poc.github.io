"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[53790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/index",id:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/index",title:"Adding extra data: the Subject class",description:"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class",slug:"/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialisation",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation/"},next:{title:"Tracking specific events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/tracking-specific-events/"}},s={},c=[{value:"Set user ID with\xa0<code>setUserId</code>",id:"set-user-id-withsetuserid",level:3},{value:"Set screen resolution with\xa0<code>setScreenResolution</code>",id:"set-screen-resolution-withsetscreenresolution",level:3},{value:"Set viewport dimensions with\xa0<code>setViewport</code>",id:"set-viewport-dimensions-withsetviewport",level:3},{value:"Set color depth with\xa0<code>setColorDepth</code>",id:"set-color-depth-withsetcolordepth",level:3},{value:"Set timezone with\xa0<code>setTimezone</code>",id:"set-timezone-withsettimezone",level:3},{value:"Set the language with\xa0<code>setLanguage</code>",id:"set-the-language-withsetlanguage",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event."),(0,r.kt)("p",null,"The Subject class has a set of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setUserId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setScreenResolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setViewport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setColorDepth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimezone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setLanguag"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/ActionScript3-Tracker#set-lang"},(0,r.kt)("inlineCode",{parentName:"a"},"e")))),(0,r.kt)("p",null,"Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'s1.setUserID("Kevin Gleason");\ns1.setLanguage("en-gb");\ns1.setScreenResolution(1920, 1080);\n')),(0,r.kt)("p",null,"After that, you can add your Subject to your Tracker like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Tracker(emitter, namespace, appId, s1);\n// OR\nt1.setSubject(s1);\n")),(0,r.kt)("h3",{id:"set-user-id-withsetuserid"},"Set user ID with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setUserId")),(0,r.kt)("p",null,"You can set the user ID to any string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'s1.setUserId( "{{USER ID}}" )\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'s1.setUserId("alexd")\n')),(0,r.kt)("h3",{id:"set-screen-resolution-withsetscreenresolution"},"Set screen resolution with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setScreenResolution")),(0,r.kt)("p",null,"If you wish to track the device's screen resolution, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"t1.setScreenResolution( {{WIDTH}}, {{HEIGHT}} )\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"t1.setScreenResolution(1366, 768)\n")),(0,r.kt)("p",null,"You can get these values by referencing\xa0",(0,r.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/system/Capabilities.html#screenResolutionX"},"flash.system.Capabilities.screenResolutionX"),"\xa0and\xa0",(0,r.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/system/Capabilities.html#screenResolutionY"},"flash.system.Capabilities.screenResolutionY"),", although they will only reflect the dimensions of the main screen."),(0,r.kt)("p",null,"Alternatively, if your AS3 code has script access via\xa0",(0,r.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html"},"ExternalInterface"),", you can use Javascript to query these values from the browser or another player context."),(0,r.kt)("h3",{id:"set-viewport-dimensions-withsetviewport"},"Set viewport dimensions with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setViewport")),(0,r.kt)("p",null,"If your AS3 code has access to the viewport dimensions (by calling Javascript code through\xa0",(0,r.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html"},"ExternalInterface"),"), then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"s.setViewport( {{WIDTH}}, {{HEIGHT}} )\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"s.setViewport(300, 200)\n")),(0,r.kt)("h3",{id:"set-color-depth-withsetcolordepth"},"Set color depth with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setColorDepth")),(0,r.kt)("p",null,"If your AS3 code has access to the bit depth of the device's color palette for displaying images (by calling Javascript's screen.colorDepth via\xa0",(0,r.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html"},"ExternalInterface"),"), then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"s.setColorDepth( {{BITS PER PIXEL}} )\n")),(0,r.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"s.setColorDepth(32)\n")),(0,r.kt)("h3",{id:"set-timezone-withsettimezone"},"Set timezone with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setTimezone")),(0,r.kt)("p",null,"This method lets you pass a user's timezone in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"s.setTimezone( {{TIMEZONE}} )\n")),(0,r.kt)("p",null,"The timezone should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'s.setTimezone("Europe/London")\n')),(0,r.kt)("h3",{id:"set-the-language-withsetlanguage"},"Set the language with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setLanguage")),(0,r.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"s.setLanguage( {{LANGUAGE}} )\n")),(0,r.kt)("p",null,"The language should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"s.setLanguage('en')\n")))}u.isMDXComponent=!0}}]);