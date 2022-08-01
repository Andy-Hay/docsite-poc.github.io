"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[89957],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=c(a),h=l,g=k["".concat(i,".").concat(h)]||k[h]||p[h]||r;return a?n.createElement(g,s(s({ref:e},d),{},{components:a})):n.createElement(g,s({ref:e},d))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,s=new Array(r);s[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:l,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55138:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={title:"Latest compatibility matrix",date:"2021-04-29",sidebar_position:-1e3},s=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/version-compatibility-matrix/latest-version-compatibility-matrix/index",id:"migrated/pipeline-components-and-applications/version-compatibility-matrix/latest-version-compatibility-matrix/index",title:"Latest compatibility matrix",description:"Recommended Stack",source:"@site/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/latest-version-compatibility-matrix/index.md",sourceDirName:"migrated/pipeline-components-and-applications/version-compatibility-matrix/latest-version-compatibility-matrix",slug:"/migrated/pipeline-components-and-applications/version-compatibility-matrix/latest-version-compatibility-matrix/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/latest-version-compatibility-matrix/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:-1e3,frontMatter:{title:"Latest compatibility matrix",date:"2021-04-29",sidebar_position:-1e3},sidebar:"tutorialSidebar",previous:{title:"Version compatibility matrix",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/"},next:{title:"Snowplow 22.01 Western Ghats",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats/"}},i={},c=[{value:"Recommended Stack",id:"recommended-stack",level:3},{value:"AWS",id:"aws",level:4},{value:"GCP",id:"gcp",level:4},{value:"Iglu",id:"iglu",level:4},{value:"<strong>Trackers</strong>",id:"trackers",level:4},{value:"<strong>Data Model</strong>ing",id:"data-modeling",level:4},{value:"SQL Runner",id:"sql-runner",level:5},{value:"dbt",id:"dbt",level:5},{value:"<strong>Testing</strong>",id:"testing",level:4},{value:"Analytics SDKs",id:"analytics-sdks",level:4}],d={toc:c};function p(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"recommended-stack"},"Recommended Stack"),(0,l.kt)("p",null,"Please note, the ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," indicates that we recommend always being on the latest patched version."),(0,l.kt)("h4",{id:"aws"},"AWS"),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Stream Collector"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Stream Enrich"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Dataflow Runner"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Sqs2Kinesis")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"http://github.com/snowplow/stream-collector/releases",target:"_blank",rel:"noreferrer noopener"},"v2.4.5")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/enrich/releases",target:"_blank",rel:"noreferrer noopener"},"v2.0.5")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/dataflow-runner/releases",target:"_blank",rel:"noreferrer noopener"},"v0.5.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/sqs2kinesis/releases/tag/1.0.0",target:"_blank",rel:"noreferrer noopener"},"v1.0.x"))))),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"S3 Loader"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"RDB Loader"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Snowflake Loader"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Elasticsearch",(0,l.kt)("br",null),"Loader")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-s3-loader/releases",target:"_blank",rel:"noreferrer noopener"},"v2.1.3")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-rdb-loader/releases",target:"_blank",rel:"noreferrer noopener"},"v1.2.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-snowflake-loader/releases",target:"_blank",rel:"noreferrer noopener"},"v0.9.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-elasticsearch-loader/releases"},"v1.0.5"))))),(0,l.kt)("h4",{id:"gcp"},"GCP"),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Stream Collector"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Beam Enrich"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Enrich PubSub"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"GCS Loader"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"BigQuery Stream Loader")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/stream-collector/releases",target:"_blank",rel:"noreferrer noopener"},"v2.4.5")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/enrich/releases",target:"_blank",rel:"noreferrer noopener"},"v2.0.5")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/enrich/releases",target:"_blank",rel:"noreferrer noopener"},"v2.0.5")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-google-cloud-storage-loader/releases",target:"_blank",rel:"noreferrer noopener"},"v0.3.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/releases",target:"_blank",rel:"noreferrer noopener"},"v1.1.0"))))),(0,l.kt)("h4",{id:"iglu"},"Iglu"),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Iglu Server"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"igluctl"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Iglu Central")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/iglu-server/releases",target:"_blank",rel:"noreferrer noopener"},"v0.7.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/igluctl/releases/",target:"_blank",rel:"noreferrer noopener"},"v0.8.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/iglu-central/releases",target:"_blank",rel:"noreferrer noopener"},"R132"))))),(0,l.kt)("h4",{id:"trackers"},(0,l.kt)("strong",{parentName:"h4"},"Trackers")),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"JS (Web & Node)"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Android"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"iOS"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"React Native"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Flutter"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Java"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},".NET"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Python")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"v3.3.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-android-tracker/releases"},"v3.0.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-objc-tracker/releases"},"v3.0.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-react-native-tracker/releases"},"v1.0.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-flutter-tracker/releases"},"v0.1.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-java-tracker/releases"},"v0.11.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-dotnet-tracker/releases"},"v1.1.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-python-tracker/releases"},"v0.10.x"))))),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"AMP"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Roku"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Unity"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"PHP"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Golang"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Scala"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"Ruby"),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},"C++")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/"},"v1.0.3")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-roku-tracker/releases"},"v0.2.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-unity-tracker/releases"},"v0.5.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-php-tracker/releases"},"v0.4.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-golang-tracker/releases"},"v2.4.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-scala-tracker/releases"},"v1.0.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-ruby-tracker/releases"},"v.0.8.x")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-cpp-tracker/releases"},"v0.1.x"))))),(0,l.kt)("h4",{id:"data-modeling"},(0,l.kt)("strong",{parentName:"h4"},"Data Model"),"ing"),(0,l.kt)("h5",{id:"sql-runner"},"SQL Runner"),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Redshift web model"),(0,l.kt)("td",null,"BigQuery web model"),(0,l.kt)("td",null,"Snowflake web model")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.2.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v.1.0.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.0.x"))))),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Redshift mobile model"),(0,l.kt)("td",null,"BigQuery mobile model"),(0,l.kt)("td",null,"Snowflake mobile model")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v.1.1.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x"))))),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"SQL Runner")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/sql-runner/releases"},"v0.9.x"))))),(0,l.kt)("h5",{id:"dbt"},"dbt"),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"dbt-snowplow-web"),(0,l.kt)("td",null,"dbt-snowplow-utils"),(0,l.kt)("td",null,"dbt")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/dbt-snowplow-web/releases",target:"_blank",rel:"noreferrer noopener"},"v0.5.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/dbt-snowplow-utils/releases",target:"_blank",rel:"noreferrer noopener"},"v0.5.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/dbt-labs/dbt/releases"},"v1.0.x"))))),(0,l.kt)("h4",{id:"testing"},(0,l.kt)("strong",{parentName:"h4"},"Testing")),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Mini"),(0,l.kt)("td",null,"Micro")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-mini/releases"},"v0.13.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-micro/releases"},"v1.2.x"))))),(0,l.kt)("h4",{id:"analytics-sdks"},"Analytics SDKs"),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Scala"),(0,l.kt)("td",null,"JavaScript"),(0,l.kt)("td",null,"Python"),(0,l.kt)("td",null,".NET"),(0,l.kt)("td",null,"Go")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-python-analytics-sdk/releases"},"v2.1.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-js-analytics-sdk/releases"},"v0.3.0")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-python-analytics-sdk/releases"},"v0.2.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-dotnet-analytics-sdk/releases"},"v0.2.x")),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-golang-analytics-sdk/releases",target:"_blank",rel:"noreferrer noopener"},"v0.1.x"))))),(0,l.kt)("p",null,"We hope that the above provides clarity on our recommended stack, however if you have any questions or feedback please reach out to us on\xa0",(0,l.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/"},"discourse"),"."))}p.isMDXComponent=!0}}]);