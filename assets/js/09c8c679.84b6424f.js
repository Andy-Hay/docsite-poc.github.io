"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[72571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Analytics SDKs",date:"2020-11-02",sidebar_position:80},o=void 0,s={unversionedId:"migrated/modeling-your-data/analytics-sdk/index",id:"migrated/modeling-your-data/analytics-sdk/index",title:"Analytics SDKs",description:"Overview",source:"@site/docs/migrated/modeling-your-data/analytics-sdk/index.md",sourceDirName:"migrated/modeling-your-data/analytics-sdk",slug:"/migrated/modeling-your-data/analytics-sdk/",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/analytics-sdk/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:80,frontMatter:{title:"Analytics SDKs",date:"2020-11-02",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Retrieving data model execution data via the API",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/retrieving-job-execution-data-via-the-api/"},next:{title:"Analytics SDK - Scala",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/analytics-sdk/analytics-sdk-scala/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Snowplow Analytics SDKs",id:"snowplow-analytics-sdks",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Snowplow Analytics SDKs are designed for data engineers and data scientists working with Snowplow in a number of languages."),(0,r.kt)("p",null,"Some good use cases for the SDKs include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Transforming the Enriched TSV to Enriched JSON for further processing"),(0,r.kt)("li",{parentName:"ol"},"Developing AI/ML models on your event data"),(0,r.kt)("li",{parentName:"ol"},"Performing analytics-on-write in AWS Lambda as part of our Kinesis real-time pipeline"),(0,r.kt)("li",{parentName:"ol"},"Within Snowplow pipeline components to process event data")),(0,r.kt)("h2",{id:"snowplow-analytics-sdks"},"Snowplow Analytics SDKs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/analytics-sdk-scala/"},"Scala Analytics SDK")," - lets you work with Snowplow enriched events in your Scala event processing, data modeling and machine-learning jobs. You can use this SDK with Apache Spark, AWS Lambda, GCP Cloud Functions, Apache Flink and other Scala-compatible data processing frameworks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/modeling-your-data/analytics-sdk/analytics-sdk-javascript/"},"JavaScript and TypeScript Analytics SDK")," - lets you work with Snowplow enriched events in your Node.js or other JavaScript environments. This SDK can be used with AWS Lambda and Google Cloud Functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/modeling-your-data/analytics-sdk/analytics-sdk-go/"},"Go Analytics SDK")," - lets you work with Snowplow enriched events in your Go environments. This SDK can be used with AWS Lambda and Google Cloud Functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/analytics-sdk-python/"},"Python Analytics SDK")," - lets you work with Snowplow enriched events in your Python event processing, data modeling and machine-learning jobs. You can use this SDK with Apache Spark, AWS Lambda, GCP Cloud Functions and other Python-compatible data processing frameworks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/analytics-sdk-net/"},".NET Analytics SDK")," - lets you work with Snowplow enriched events in your .NET event processing, data modeling and machine-learning jobs. You can use this SDK with Azure Data Lake Analytics, Azure Function, AWS Lambda, GCP Cloud Functions other .NET-compatible data processing frameworks.")))}p.isMDXComponent=!0}}]);