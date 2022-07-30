"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[91868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),g=n,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"2.0.0 Upgrade Guide",date:"2021-07-05",sidebar_position:10},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-0-0-upgrade-guide/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-0-0-upgrade-guide/index",title:"2.0.0 Upgrade Guide",description:"Caution",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-0-0-upgrade-guide/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-0-0-upgrade-guide",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-0-0-upgrade-guide/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-0-0-upgrade-guide/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"2.0.0 Upgrade Guide",date:"2021-07-05",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"2.2.0 Upgrade Guide",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-2-0-upgrade-guide/"},next:{title:"RDB Loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/"}},s={},d=[{value:"Caution",id:"caution",level:2},{value:"Config file",id:"config-file",level:2},{value:"New features",id:"new-features",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"caution"},"Caution"),(0,n.kt)("p",null,"If you're upgrading from Snowplow pre-R119 and S3 Loader pre-0.7.0 you have to ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/s3-loader-0-7-0-google-cloud-storage-loader-0-3-1-released/3651"},"upgrade to 0.7.0")," or 1.0.0 first in order to split bad data produced during transition period."),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/05/12/snowplow-release-r119/"},"Snowplow R119")," we introduced a new self-describing bad rows format. S3 Loader 0.7.0 was the first version capable of partitioning self-describing data based on its schema. 0.7.0 and 1.0.0 are capable to recognize at runtime whether old or new format is consumed and use ",(0,n.kt)("inlineCode",{parentName:"p"},"partitionedBucket")," output path only if necessary, so both formats can be consumed."),(0,n.kt)("p",null,"S3 Loader 2.0.0 supports only new self-describing format and will be raising exceptions if legacy bad data is pushed."),(0,n.kt)("h2",{id:"config-file"},"Config file"),(0,n.kt)("p",null,"In 2.0.0 the S3 Loader went through a major configuration refactoring. A ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-s3-loader/blob/2.0.0/config/config.hocon.sample"},"sample config")," is available in GitHub repository."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No more ",(0,n.kt)("inlineCode",{parentName:"li"},"aws")," property allowing to hardcode credentials - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html"},"default credentials chain")," is used"),(0,n.kt)("li",{parentName:"ul"},"NSQ support has been dropped"),(0,n.kt)("li",{parentName:"ul"},"Instead of ",(0,n.kt)("inlineCode",{parentName:"li"},"kinesis")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"s3")," the topology now is represented as ",(0,n.kt)("inlineCode",{parentName:"li"},"input")," (Kinesis Stream) and ",(0,n.kt)("inlineCode",{parentName:"li"},"output")," (S3 bucket and a Kinesis Stream for bad data)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"partitionedBucket")," property has been removed (see Caution above)"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("inlineCode",{parentName:"li"},"purpose")," property allowing Loader to recognize the data it works with: ",(0,n.kt)("inlineCode",{parentName:"li"},"ENRICHED")," for enriched TSVs enabling latency monitoring, ",(0,n.kt)("inlineCode",{parentName:"li"},"SELF_DESCRIBING")," generally for any self-describing JSON but usually used for bad rows and ",(0,n.kt)("inlineCode",{parentName:"li"},"RAW"))),(0,n.kt)("h2",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"metrics.sentry.dsn")," can be used to track exceptions, including internal KCL exceptions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"metricsd.statsd")," can be used to send observability data to StatsD-compatible server")))}u.isMDXComponent=!0}}]);