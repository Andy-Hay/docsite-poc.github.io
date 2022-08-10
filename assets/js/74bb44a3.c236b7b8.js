"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[7462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Cross-batch deduplication",date:"2020-04-25",sidebar_position:20},r=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication/index",title:"Cross-batch deduplication",description:"(Note that the feature described below is experimental as of version 0.4.0.)",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:20,frontMatter:{title:"Cross-batch deduplication",date:"2020-04-25",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/configuration/"},next:{title:"Backpopulate the manifest",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest/"}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(Note that the feature described below is experimental as of version 0.4.0.)")),(0,o.kt)("p",null,'Since version 0.4.0, Snowflake Transformer supports optional cross-batch deduplication that removes duplicate events across multiple loads using an "event manifest" DynamoDB table (not to be confused with the run manifest table). This table keeps the following information identifying events across multiple runs:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Event id - used to uniquely identify an event"),(0,o.kt)("li",{parentName:"ul"},"Event fingerprint - used in conjunction with the event ID to uniquely identify duplicates"),(0,o.kt)("li",{parentName:"ul"},"ETL timestamp - used to check if an event is being reprocessed due to a previous run being aborted"),(0,o.kt)("li",{parentName:"ul"},"Time to live - timestamp allowing DynamoDB automatically clean-up stale objects (set to etl","_","tstamp plus 180 days)")),(0,o.kt)("p",null,"Cross-batch deduplication can be enabled by creating an additional config file with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - Required human-readable configuration name, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"Snowflake deduplication config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Required machine-readable configuration id, e.g. UUID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auth")," - An object containing information about authentication use to read and write data to DynamoDB. Similar to the ",(0,o.kt)("inlineCode",{parentName:"li"},"auth")," object in the main Snowflake config, this can use a ",(0,o.kt)("inlineCode",{parentName:"li"},"accessKeyId"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"secretAccessKey")," pair or be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),", in which case default credentials will be retrieved."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awsRegion")," - AWS Region used by Transformer to access DynamoDB"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dynamodbTable")," - DynamoDB table used to store information about duplicate events"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"purpose")," - Always ",(0,o.kt)("inlineCode",{parentName:"li"},"EVENTS_MANIFEST"))),(0,o.kt)("p",null,"An example of this auxiliary configuration is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.snowplow.storage/amazon_dynamodb_config/jsonschema/2-0-0",\n  "data": {\n    "name": "eventsManifest",\n    "auth": {\n      "accessKeyId": "fakeAccessKeyId",\n      "secretAccessKey": "fakeSecretAccessKey"\n    },\n    "awsRegion": "us-east-1",\n    "dynamodbTable": "acme-crossbatch-dedupe",\n    "id": "ce6c3ff2-8a05-4b70-bbaa-830c163527da",\n    "purpose": "EVENTS_MANIFEST"\n  }\n}\n')),(0,o.kt)("p",null,"This configuration can be passed to Transformer using the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"--events-manifest")," flag, either as a file path or as a base64-encoded string if the ",(0,o.kt)("inlineCode",{parentName:"p"},"--base64")," flag is also set."))}d.isMDXComponent=!0}}]);