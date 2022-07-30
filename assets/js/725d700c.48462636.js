"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23545],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),d=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return o.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=n,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||a;return t?o.createElement(m,i(i({ref:r},l),{},{components:t})):o.createElement(m,i({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},35047:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const a={title:"R33/R34 Upgrade Guide",date:"2020-12-01",sidebar_position:400},i=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide/index",title:"R33/R34 Upgrade Guide",description:"R34 is a release with bugfixes and performance improvements. R33 was almost identical reelase with major bug preventing some long text properties from loading.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide/",draft:!1,tags:[],version:"current",sidebarPosition:400,frontMatter:{title:"R33/R34 Upgrade Guide",date:"2020-12-01",sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"R35 Upgrade Guide",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/"},next:{title:"R32 Upgrade Guide",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r32-upgrade-guide/"}},p={},d=[{value:"Updating assets",id:"updating-assets",level:2}],l={toc:d};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"R34 is a release with bugfixes and performance improvements. R33 was almost identical reelase with major bug preventing some long text properties from loading."),(0,n.kt)("h2",{id:"updating-assets"},"Updating assets"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Upgrade EmrEtlRunner to 1.0.4 or higher"),(0,n.kt)("li",{parentName:"ol"},"Your ",(0,n.kt)("inlineCode",{parentName:"li"},"redshift_config.json")," should have 4-0-0 version"),(0,n.kt)("li",{parentName:"ol"},"Update your ",(0,n.kt)("inlineCode",{parentName:"li"},"config.yml")," file")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"aws:\n  emr:\n    ami_version: 6.1.0     # was 5.19.0; Required by Spark 3\nstorage:\n  versions:\n    rdb_loader: 0.18.2      # was 0.17.0\n    rdb_shredder: 0.18.2    # was 0.16.0\n")))}u.isMDXComponent=!0}}]);