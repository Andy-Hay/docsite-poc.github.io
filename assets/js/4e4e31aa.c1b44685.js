"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[68022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),g=n,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Quick start guide",date:"2020-01-30",sidebar_position:0},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide/index",title:"Quick start guide",description:"Getting started with sending events using the JavaScript tracker is very similar to other web analytics vendors like Google Analytics, Adobe Analytics, etc.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Quick start guide",date:"2020-01-30",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"JavaScript Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/"},next:{title:"JavaScript Tracker v3 Reference",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/"}},c={},s=[{value:"Alternative Options",id:"alternative-options",level:4}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Getting started with sending events using the JavaScript tracker is very similar to other web analytics vendors like Google Analytics, Adobe Analytics, etc."),(0,n.kt)("p",null,"The process involves the following high level steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download the latest version of the Snowplow JavaScript tracker file, ",(0,n.kt)("inlineCode",{parentName:"li"},"sp.js"),", which can be found ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"If you are already hosting static files somewhere on your own domain, it should just be a matter of downloading and adding the ",(0,n.kt)("inlineCode",{parentName:"li"},"sp.js")," file. Otherwise you can follow our ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/"},"guides for self hosting"),", use another method of your choice, or leverage a ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/third-party-cdn-hosting/"},"Third Party CDN")," (useful for evaluation or testing)."),(0,n.kt)("li",{parentName:"ul"},"Once you have a JS tracker available, you can add the tag snippet to your site. There are also alternative options described below for adding the tracker to your website.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If manually inserting the tag into your website or tag management solution: Snowplow BDP users can generate a tag snippet in the Snowplow BDP Console ",(0,n.kt)("a",{parentName:"li",href:"https://console.snowplowanalytics.com/tag-generator"},"here"),". Other users can use and edit the standard tag ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/general-parameters/loading/"},"here"),".")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[]; p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments) };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1; n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","{{URL to sp.js}}","snowplow")); \n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once you\u2019ve generated your tag add it to all the pages you\u2019d like to track:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Place the tag directly into your codebase. Typically this will be placed into the ",(0,n.kt)("inlineCode",{parentName:"li"},"<head>")," element of your page or in a similar, suitable, location if using a Single Page Application framework.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The JavaScript Tracker supports both synchronous and asynchronous tags. We recommend the asynchronous tags in nearly all instances, as these do not slow down page load times."))),(0,n.kt)("li",{parentName:"ul"},"Load the tag using a Tag Management solution such as Google Tag Manager, usually triggered on page load."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Configure an instance of the tracker by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"newTracker")," with your desired properties."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"window.snowplow('newTracker', 'sp1', '{{collector_url}}', { \n  appId: 'my-app-id'\n})\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then you can use the track methods to send some events. You can send a Page View event to all initialised trackers with just:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"window.snowplow('trackPageView');\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can read more about the other tracking functions which are available in the JavaScript Tracker in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/"},"v3 reference")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/"},"v2 reference")," documentation.")),(0,n.kt)("h4",{id:"alternative-options"},"Alternative Options"),(0,n.kt)("p",null,"Rather than adding the tag snippet directly, you may wish to use an alternative option for loading the JavaScript Tracker."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users of Google Tag Manager can use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/google-tag-manager-custom-template/"},"Snowplow Analytics Custom Template"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the Snowplow Plugin in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/snowplow-plugin-for-analytics-npm-package/"},"analytics npm package")," (JavaScript Tracker v2 only, v3 support soon)."))))}u.isMDXComponent=!0}}]);