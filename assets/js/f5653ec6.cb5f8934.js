"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[50217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={title:"Setup",date:"2020-02-26",sidebar_position:10},a=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/setup/index",id:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/setup/index",title:"Setup",description:"Integration options",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/setup/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/setup",slug:"/migrated/collecting-data/collecting-from-own-applications/unity-tracker/setup/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/setup/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Setup",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Unity Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/"},next:{title:"Initialization",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization/"}},c={},p=[{value:"Integration options",id:"integration-options",level:2},{value:"Tracker compatibility",id:"tracker-compatibility",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Download",id:"download",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"integration-options"},"Integration options"),(0,r.kt)("h3",{id:"tracker-compatibility"},"Tracker compatibility"),(0,r.kt)("p",null,"The Snowplow Unity Tracker has been built and tested using Unity 2020.3 on Windows, Linux, OSX, iOS and Android. It is built using .NET Standard 2.0 and requires at least Unity 2018.1."),(0,r.kt)("p",null,"It is not currently compatible with the WebPlayer."),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"There are several dependencies that are required to use the Unity Tracker currently. These are available in\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-unity-tracker/tree/master/Resources"},"this folder"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UnityEngine.dll"),"\xa0: This is included as a way of setting up development externally to the Unity playground; you do not need to include this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json.dll"),"\xa0: This is included as a way of setting up development externally to the Unity playground; you do not need to include this as it is bundled with Unity 2020+ or should be installed via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jilleJr/Newtonsoft.Json-for-Unity"},"Newtonsoft.Json-for-Unity package"),".")),(0,r.kt)("p",null,"All the other dependencies are required for proper Tracker function but they are included inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"unitypackage"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"download"},"Download"),(0,r.kt)("p",null,"The Unity Tracker package is published to the Unity Trackers\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-unity-tracker/releases"},"Github releases"),". Once downloaded simply add the ",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker.unitypackage"),"\xa0to your project. This should insert all of the required dll files into your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Assets/Plugins/"),"\xa0folder."))}d.isMDXComponent=!0}}]);