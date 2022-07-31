"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[26185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Configuration",date:"2020-09-03",sidebar_position:300},i=void 0,s={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/configuration/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/configuration/index",title:"Configuration",description:"You may have additional information about your application's environment, current user and so on, which you want to send to your Snowplow pipeline with each event.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/configuration/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/configuration",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/configuration/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/configuration/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:300,frontMatter:{title:"Configuration",date:"2020-09-03",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Initialization",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization/"},next:{title:"Tracking Events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/tracking-events/"}},l={},p=[{value:"Setting event properties",id:"setting-event-properties",level:4},{value:"3.1 Set the platform ID with\xa0<code>setPlatform()</code>",id:"31-set-the-platform-id-withsetplatform",level:3},{value:"Set user ID with\xa0<code>setUserId()</code>",id:"set-user-id-withsetuserid",level:3},{value:"Set domain user ID with <code>setDomainUserId()</code>",id:"set-domain-user-id-with-setdomainuserid",level:3},{value:"Set domain user ID with <code>setNetworkUserId()</code>",id:"set-domain-user-id-with-setnetworkuserid",level:3},{value:"Set screen resolution with <code>setScreenResolution()</code>",id:"set-screen-resolution-with-setscreenresolution",level:3},{value:"Set viewport dimensions with\xa0<code>setViewport()</code>",id:"set-viewport-dimensions-withsetviewport",level:3},{value:"Set color depth with\xa0<code>setColorDepth()</code>",id:"set-color-depth-withsetcolordepth",level:3},{value:"Set the timezone with\xa0<code>setTimezone()</code>",id:"set-the-timezone-withsettimezone",level:3},{value:"Set the language with\xa0<code>setLang()</code>",id:"set-the-language-withsetlang",level:3},{value:"Set the IP Address with\xa0<code>setIpAddress()</code>",id:"set-the-ip-address-withsetipaddress",level:3},{value:"Set the Useragent with\xa0<code>setUseragent()</code>",id:"set-the-useragent-withsetuseragent",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may have additional information about your application's environment, current user and so on, which you want to send to your Snowplow pipeline with each event."),(0,o.kt)("h4",{id:"setting-event-properties"},"Setting event properties"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tracker")," instance has a set of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"set...()"),"\xa0methods to attach extra data to all tracked events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-platform"},(0,o.kt)("inlineCode",{parentName:"a"},"setPlatform()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-user-id"},(0,o.kt)("inlineCode",{parentName:"a"},"setUserId()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-domain-user-id"},(0,o.kt)("inlineCode",{parentName:"a"},"setDomainUserId()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://set-network-user-id"},(0,o.kt)("inlineCode",{parentName:"a"},"setNetworkUserId()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-screen-resolution"},(0,o.kt)("inlineCode",{parentName:"a"},"setScreenResolution()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-viewport"},(0,o.kt)("inlineCode",{parentName:"a"},"setViewport()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-color-depth"},(0,o.kt)("inlineCode",{parentName:"a"},"setColorDepth()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-timezone"},(0,o.kt)("inlineCode",{parentName:"a"},"setTimezone()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-lang"},(0,o.kt)("inlineCode",{parentName:"a"},"setLang()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[setIpAddress()](#set-ip-address)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[setUseragent()](#set-useragent)"))),(0,o.kt)("p",null,"The full listing of available functions on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker")," interface can be found in our ",(0,o.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-nodejs-tracker/interfaces/_tracker_.tracker.html"},"API Documentation"),"."),(0,o.kt)("h3",{id:"31-set-the-platform-id-withsetplatform"},(0,o.kt)("a",{parentName:"h3",href:"#31-set-the-platform-id-with-setplatform"}),"3.1 Set the platform ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setPlatform()")),(0,o.kt)("p",null,"You can set the platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setPlatform( "{{PLATFORM}}" );\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setPlatform("mob");\n')),(0,o.kt)("p",null,"If the platform is not set manually, it defaults to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"'srv'"),"\xa0(for server)."),(0,o.kt)("p",null,"For a full list of supported platforms, please see the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Snowplow-Tracker-Protocol"},"Snowplow Tracker Protocol"),"."),(0,o.kt)("h3",{id:"set-user-id-withsetuserid"},"Set user ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setUserId()")),(0,o.kt)("p",null,"You can set the user ID to any string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setUserId( "{{USER ID}}" );\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setUserId("alexd");\n')),(0,o.kt)("h3",{id:"set-domain-user-id-with-setdomainuserid"},"Set domain user ID with ",(0,o.kt)("inlineCode",{parentName:"h3"},"setDomainUserId()")),(0,o.kt)("p",null,"You can set the domain user ID to any string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setDomainUserId( "{{DOMAIN USER ID}}" );\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"You can set the domain user ID to any string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setDomainUserId("e8091074-f197-4279-a92e-71a34171d477");\n')),(0,o.kt)("h3",{id:"set-domain-user-id-with-setnetworkuserid"},"Set domain user ID with ",(0,o.kt)("inlineCode",{parentName:"h3"},"setNetworkUserId()")),(0,o.kt)("p",null,"You can set the domain user ID to any string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setNetworkUserId( "{{NETWORK USER ID}}" );\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t.setNetworkUserId("b98c76ad-e45c-45db-a101-224718064ac2");\n')),(0,o.kt)("h3",{id:"set-screen-resolution-with-setscreenresolution"},"Set screen resolution with ",(0,o.kt)("inlineCode",{parentName:"h3"},"setScreenResolution()")),(0,o.kt)("p",null,"If your code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setScreenResolution( {{WIDTH}}, {{HEIGHT}} );\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setScreenResolution(1366, 768);\n")),(0,o.kt)("h3",{id:"set-viewport-dimensions-withsetviewport"},"Set viewport dimensions with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setViewport()")),(0,o.kt)("p",null,"If your code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setViewport( {{WIDTH}}, {{HEIGHT}} );\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setViewport(300, 200);\n")),(0,o.kt)("h3",{id:"set-color-depth-withsetcolordepth"},"Set color depth with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setColorDepth()")),(0,o.kt)("p",null,"If your code has access to the bit depth of the device's color palette for displaying images, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setColorDepth( {{BITS PER PIXEL}} );\n")),(0,o.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setColorDepth(32);\n")),(0,o.kt)("h3",{id:"set-the-timezone-withsettimezone"},"Set the timezone with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setTimezone()")),(0,o.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setTimezone( {{TIMEZONE}} );\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setTimezone('Europe/London');\n")),(0,o.kt)("h3",{id:"set-the-language-withsetlang"},"Set the language with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setLang()")),(0,o.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setLang( {{LANGUAGE}} );\n")),(0,o.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setLang('en');\n")),(0,o.kt)("h3",{id:"set-the-ip-address-withsetipaddress"},"Set the IP Address with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setIpAddress()")),(0,o.kt)("p",null,"This method lets you set an IP Address on your events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setIpAddress( {{IP ADDRESS}} );\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setIpAddress('192.168.0.1');\n")),(0,o.kt)("h3",{id:"set-the-useragent-withsetuseragent"},"Set the Useragent with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setUseragent()")),(0,o.kt)("p",null,"This method lets you override the default Useragent on your events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setUseragent( {{USER AGENT}} );\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t.setUseragent('myapp/0.1.0');\n")))}c.isMDXComponent=!0}}]);