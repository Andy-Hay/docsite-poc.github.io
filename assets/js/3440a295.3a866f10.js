"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[89459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"Backpopulate the manifest",date:"2020-04-25",sidebar_position:30},i=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest/index",title:"Backpopulate the manifest",description:"In order to pre-populate manifest with run ids that have to be never loaded you can use backfill.py script.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Backpopulate the manifest",date:"2020-04-25",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Cross-batch deduplication",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication/"},next:{title:"Upgrade guide",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/"}},p={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to pre-populate manifest with run ids that have to be never loaded you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"backfill.py")," script."),(0,o.kt)("p",null,"Script requires to have Python 3, Snowplow Python Analytics SDK 0.2.3+ and boto3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install boto3 snowplow_analytics_sdk\n$ wget https://raw.githubusercontent.com/snowplow-incubator/snowplow-snowflake-loader/release/0.4.0/backfill.py   # Won't actually be downloaded as repository is private\n")),(0,o.kt)("p",null,"Script accepts 6 required arguments. Notice ",(0,o.kt)("inlineCode",{parentName:"p"},"startdate"),", this is the date since which (inclusive) transformer should process run ids:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./backfill.py \\\n    --startdate 2017-08-22-01-01-01 \\\n    --region $AWS_REGION \\\n    --manifest-table-name $DYNAMODB_MANIFEST \\\n    --enriched-archive $TRANSFORMER_INPUT \\\n    --aws-access-key-id=$AWS_ACCESS_KEY_ID \\\n    --aws-secret-access-key=$AWS_SECRET_KEY\n")))}d.isMDXComponent=!0}}]);