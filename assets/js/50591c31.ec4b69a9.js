"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[88091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={title:"Setup EmrEtlRunner (pre-R35)",date:"2020-02-26",sidebar_position:20},i=void 0,a={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/index",title:"Setup EmrEtlRunner (pre-R35)",description:"Data is loaded from S3 -> Redshift by two applications:",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Setup EmrEtlRunner (pre-R35)",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"RDB Loader 1.0.0",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-rdb-loader-post-r35/"},next:{title:"Install EmrEtlRunner",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/"}},p={},u=[],l={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data is loaded from S3 -> Redshift by two applications:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"RDB Shredder: this takes the enriched data in S3 and transforms it into a format suitable for loading into Redshift (called the shredded format), which is also stored in S3"),(0,o.kt)("li",{parentName:"ol"},"RDB Loader: which takes the shredded data from S3, and loads it into Redshift.")),(0,o.kt)("p",null,"Both applications are EMR jobs. They are orchestrated using EmrEtlRunner. In this setup guide we'll walk you through how to setup EmrEtlRunner correctly, so that the shredding and loading process are successfully run. This comes down to passing EmrEtlRunner a correct configuration file."))}d.isMDXComponent=!0}}]);