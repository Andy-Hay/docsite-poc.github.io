"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[59538],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Snowplow Plugin for getanalytics.io",date:"2020-08-10",sidebar_position:6e3},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/index",title:"Snowplow Plugin for getanalytics.io",description:"The Snowplow JavaScript Tracker can now be deployed directly into your web and node applications using the analytics and @analytics/snowplow NPM packages.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:6e3,frontMatter:{title:"Snowplow Plugin for getanalytics.io",date:"2020-08-10",sidebar_position:6e3},sidebar:"tutorialSidebar",previous:{title:"Template for JavaScript Tracker v2",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v2/"},next:{title:"Node.js Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/"}},l={},p=[{value:"Quick Start",id:"quick-start",level:3},{value:"Full documentation",id:"full-documentation",level:3}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Snowplow JavaScript Tracker can now be deployed directly into your web and node applications using the ",(0,r.kt)("inlineCode",{parentName:"p"},"analytics")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@analytics/snowplow")," NPM packages."),(0,r.kt)("p",null,"Recommendation"),(0,r.kt)("p",null,"Snowplow recommends using the official ",(0,r.kt)("inlineCode",{parentName:"p"},"[@snowplow/browser-tracker](/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[@snowplow/node-tracker](/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/)")," instead of this package as you will receive updates faster and install a smaller dependency into your application, unless you wish to send your events to multiple providers which is where the @analytics packages are particularly useful."),(0,r.kt)("h3",{id:"quick-start"},"Quick Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install analytics\nnpm install @analytics/snowplow\n")),(0,r.kt)("p",null,"Initialise the plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import Analytics from 'analytics'\nimport snowplowPlugin from '@analytics/snowplow'\n\nconst analytics = Analytics({\n  app: 'awesome-app',\n  plugins: [\n    // Minimal recommended configuration\n    snowplowPlugin({\n      name: 'snowplow',\n      collectorUrl: 'collector.mysite.com',\n      trackerSettings: {\n        appId: 'myApp',\n        contexts: {\n          webPage: true\n        }\n      }\n    })\n  ]\n})\n")),(0,r.kt)("p",null,"Then track a page view event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"analytics.page()\n")),(0,r.kt)("h3",{id:"full-documentation"},"Full documentation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getanalytics.io/plugins/snowplow/"},"Snowplow Plugin documentation")," (getanalytics.io)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getanalytics.io/"},"Analytics package documentation")," (getanalytics.io)"))}u.isMDXComponent=!0}}]);