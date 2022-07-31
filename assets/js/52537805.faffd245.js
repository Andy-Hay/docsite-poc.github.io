"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[24066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Lua Tracker",date:"2020-02-26",sidebar_position:270},l=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/lua-tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/lua-tracker/index",title:"Lua Tracker",description:"The Snowplow Lua Tracker allows you to track Snowplow events in your Lua applications.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/lua-tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/lua-tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/lua-tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/lua-tracker/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:270,frontMatter:{title:"Lua Tracker",date:"2020-02-26",sidebar_position:270},sidebar:"tutorialSidebar",previous:{title:"Additional Information",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracking-cli/additional-information/"},next:{title:"Tracking events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/lua-tracker/tracking-specific-events/"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Tracking Events",id:"tracking-events",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Snowplow Lua Tracker allows you to track Snowplow events in your Lua applications."),(0,a.kt)("p",null,"It is compatible with Lua >= 5.1, along with LuaJIT."),(0,a.kt)("p",null,"This will help you set up the Lua tracker and get started tracking. For more technical details, you can visit the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-lua-tracker/"},"API docs"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Ensure you have the following installed on your system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.lua.org/"},"Lua"),"\xa0version >= 5.1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://luarocks.org/"},"LuaRocks"),"\xa0(Lua's dependency manager)"),(0,a.kt)("li",{parentName:"ul"},"curl")),(0,a.kt)("p",null,"If using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"brew"),", simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install lua luarocks curl\n")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Once these are installed, you can install the tracker using LuaRocks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"luarocks install snowplowtracker\n")),(0,a.kt)("p",null,"Note: You may find that you need to pass in the CURL","_","DIR flag if Lua cannot find\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),"\xa0by itself. Below is an example if\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),"\xa0was installed using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"brew"),"\xa0on an Intel Mac."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"luarocks install snowplowtracker CURL_DIR=/usr/local/Cellar/curl/7.82.0/\n")),(0,a.kt)("p",null,"Or, add the Snowplow Tracker to the dependencies section of your rockspec (Note: you may still have to pass\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CURL_DIR"),"\xa0when installing):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'dependencies = {\n  ...\n  "SnowplowTracker"\n}\n')),(0,a.kt)("h3",{id:"tracking-events"},"Tracking Events"),(0,a.kt)("p",null,"To track an event, simply create a tracker instance and call one of the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"track_*"),"\xa0methods. For example, simple tracking of a\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/#structured-events"},"structured event"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'local snowplow = require("snowplow")\nlocal tracker = snowplow.new_tracker("{{ collector_url }}")\n\ntracker:track_struct_event("category", "action", "label", "property", 10)\n')),(0,a.kt)("p",null,"Visit documentation about\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/lua-tracker/tracking-specific-events/"},"tracking events"),"\xa0to learn about other supported event types."))}u.isMDXComponent=!0}}]);