"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[36481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Tracking the Subject",date:"2020-02-26",sidebar_position:30},a=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/index",id:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/index",title:"Tracking the Subject",description:"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class",slug:"/migrated/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/adding-extra-data-the-subject-class/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:30,frontMatter:{title:"Tracking the Subject",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialization",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/initialization/"},next:{title:"Tracking specific events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/tracking-specific-events/"}},s={},p=[{value:"Tracking the Subject",id:"tracking-the-subject",level:3},{value:"Set user ID with\xa0<code>SetUserId</code>",id:"set-user-id-withsetuserid",level:3},{value:"Set screen resolution with\xa0<code>SetScreenResolution</code>",id:"set-screen-resolution-withsetscreenresolution",level:3},{value:"Set viewport dimensions with\xa0<code>SetViewport</code>",id:"set-viewport-dimensions-withsetviewport",level:3},{value:"Set color depth with\xa0<code>SetColorDepth</code>",id:"set-color-depth-withsetcolordepth",level:3},{value:"Set timezone with\xa0<code>SetTimezone</code>",id:"set-timezone-withsettimezone",level:3},{value:"Set the language with\xa0<code>SetLang</code>",id:"set-the-language-withsetlang",level:3},{value:"Set the IP Address with\xa0<code>SetIpAddress</code>",id:"set-the-ip-address-withsetipaddress",level:3},{value:"Set the useragent with\xa0<code>SetUseragent</code>",id:"set-the-useragent-withsetuseragent",level:3},{value:"Set the Domain User ID with\xa0<code>SetDomainUserId</code>",id:"set-the-domain-user-id-withsetdomainuserid",level:3},{value:"Set the Domain User ID with\xa0<code>SetNetworkUserId</code>",id:"set-the-domain-user-id-withsetnetworkuserid",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event."),(0,i.kt)("p",null,"Create a subject like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"subject := sp.InitSubject()\n")),(0,i.kt)("p",null,"The Subject class has a set of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetUserId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetScreenResolution")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetViewport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetColorDepth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetTimezone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetLanguage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetIpAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetUseragent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetDomainUserId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetNetworkUserId"))),(0,i.kt)("h3",{id:"tracking-the-subject"},"Tracking the Subject"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Subject")," can be used into two ways."),(0,i.kt)("p",null,"When initialising the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tracker"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tracker := sp.InitTracker(\n  sp.RequireEmitter(emitter),\n  sp.OptionSubject(subject)\n)\n")),(0,i.kt)("p",null,"Or when you track an event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'tracker.TrackPageView(sp.PageViewEvent{\n  PageUrl: sp.NewString("acme.com"),\n  Subject: subject\n})\n')),(0,i.kt)("p",null,"When setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Subject")," as you track as event, you will override the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tracker")," level ",(0,i.kt)("inlineCode",{parentName:"p"},"Subject")," for that specific event."),(0,i.kt)("h3",{id:"set-user-id-withsetuserid"},"Set user ID with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetUserId")),(0,i.kt)("p",null,"You can set the user ID to any string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'s.SetUserId( "{{USER ID}}" );\n')),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'s.SetUserId("alexd");\n')),(0,i.kt)("h3",{id:"set-screen-resolution-withsetscreenresolution"},"Set screen resolution with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetScreenResolution")),(0,i.kt)("p",null,"If your code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetScreenResolution( {{WIDTH}}, {{HEIGHT}} );\n")),(0,i.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetScreenResolution(1366, 768);\n")),(0,i.kt)("h3",{id:"set-viewport-dimensions-withsetviewport"},"Set viewport dimensions with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetViewport")),(0,i.kt)("p",null,"If your code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetViewport( {{WIDTH}}, {{HEIGHT}} );\n")),(0,i.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetViewport(300, 200);\n")),(0,i.kt)("h3",{id:"set-color-depth-withsetcolordepth"},"Set color depth with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetColorDepth")),(0,i.kt)("p",null,"If your code has access to the bit depth of the device's color palette for displaying images, then you can pass this in to Snowplow too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetColorDepth( {{BITS PER PIXEL}} );\n")),(0,i.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetColorDepth(32);\n")),(0,i.kt)("h3",{id:"set-timezone-withsettimezone"},"Set timezone with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetTimezone")),(0,i.kt)("p",null,"This method lets you pass a user's timezone in to Snowplow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.timezone( {{TIMEZONE}} );\n")),(0,i.kt)("p",null,"The timezone should be a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'s.SetColorDepth("Europe/London");\n')),(0,i.kt)("h3",{id:"set-the-language-withsetlang"},"Set the language with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetLang")),(0,i.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetLang( {{LANGUAGE}} );\n")),(0,i.kt)("p",null,"The language should be a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetLang('en');\n")),(0,i.kt)("h3",{id:"set-the-ip-address-withsetipaddress"},"Set the IP Address with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetIpAddress")),(0,i.kt)("p",null,"This method lets you pass a user's IP Address in to Snowplow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetIpAddress( {{IP ADDRESS}} );\n")),(0,i.kt)("p",null,"The IP Address should be a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetIpAddress('127.0.0.1');\n")),(0,i.kt)("h3",{id:"set-the-useragent-withsetuseragent"},"Set the useragent with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetUseragent")),(0,i.kt)("p",null,"This method lets you pass a user's useragent string in to Snowplow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetUseragent( {{USERAGENT}} );\n")),(0,i.kt)("p",null,"The useragent should be a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetUseragent('some useragent');\n")),(0,i.kt)("h3",{id:"set-the-domain-user-id-withsetdomainuserid"},"Set the Domain User ID with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetDomainUserId")),(0,i.kt)("p",null,"This method lets you pass a user's Domain User ID string in to Snowplow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetDomainUserId( {{DOMAIN USER ID}} );\n")),(0,i.kt)("p",null,"The Domain User ID should be a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetDomainUserId('domain-uid-12');\n")),(0,i.kt)("h3",{id:"set-the-domain-user-id-withsetnetworkuserid"},"Set the Domain User ID with\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"SetNetworkUserId")),(0,i.kt)("p",null,"This method lets you pass a user's Network User ID string in to Snowplow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetNetworkUserId( {{NETWORK USER ID}} );\n")),(0,i.kt)("p",null,"The Network User ID should be a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"s.SetNetworkUserId('network-uid-12');\n")))}c.isMDXComponent=!0}}]);