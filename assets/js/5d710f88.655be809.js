"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[53060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,c=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(c,i(i({ref:t},g),{},{components:r})):a.createElement(c,i({ref:t},g))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={title:"Amplitude Tag for GTM SS",date:"2021-11-24",sidebar_position:300},i=void 0,l={unversionedId:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/index",id:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/index",title:"Amplitude Tag for GTM SS",description:"The Amplitude Tag for GTM SS allows events to be forwarded to Amplitude. This Tag works best with events from the Snowplow Client, but can also construct Amplitude events from other GTM SS Clients such as GAv4.",source:"@site/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss",slug:"/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:300,frontMatter:{title:"Amplitude Tag for GTM SS",date:"2021-11-24",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Snowplow Tag Configuration",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration/"},next:{title:"Amplitude Tag Configuration",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/"}},s={},d=[{value:"Template Installation",id:"template-installation",level:2},{value:"Tag Manager Gallery",id:"tag-manager-gallery",level:3},{value:"Amplitude Tag Setup",id:"amplitude-tag-setup",level:2}],g={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://tagmanager.google.com/gallery/#/owners/snowplow/templates/snowplow-gtm-server-side-amplitude-tag"},"Amplitude Tag for GTM SS")," allows events to be forwarded to Amplitude. This Tag works best with events from the Snowplow Client, but can also construct Amplitude events from other GTM SS Clients such as GAv4."),(0,n.kt)("p",null,"The tag is designed to work best with Self Describing Events, and atomic events, from a Snowplow Tracker, allowing for events to automatically merged into an Amplitude events properties. Additionally, any other client event properties can be included within the event properties or user properties of the Amplitude event."),(0,n.kt)("h2",{id:"template-installation"},"Template Installation"),(0,n.kt)("h3",{id:"tag-manager-gallery"},"Tag Manager Gallery"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the Templates tab in GTM Server Side, click \u201cSearch Gallery\u201d in the Tag Templates section"),(0,n.kt)("li",{parentName:"ul"},"Search for \u201cAmplitude HTTP API V2\u201d and select the official \u201cBy Snowplow\u201d tag"),(0,n.kt)("li",{parentName:"ul"},"Click Add to Workspace"),(0,n.kt)("li",{parentName:"ul"},"Accept the permissions dialog by clicking \u201cAdd\u201d")),(0,n.kt)("h2",{id:"amplitude-tag-setup"},"Amplitude Tag Setup"),(0,n.kt)("p",null,"With the template installed, you can now add the Amplitude Tag to your GTM SS Container."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'From the Tag tab, select "New", then select the Amplitude Tag as your Tag Configuration'),(0,n.kt)("li",{parentName:"ul"},"Select your desired Trigger for the events you wish to forward to Amplitude"),(0,n.kt)("li",{parentName:"ul"},"Enter your Amplitude API Key for a HTTP API integration. This can be retrieved from Amplitude Data Sources within your Amplitude project."),(0,n.kt)("li",{parentName:"ul"},"Click Save")))}p.isMDXComponent=!0}}]);