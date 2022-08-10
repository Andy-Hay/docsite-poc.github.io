"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[86077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Events Manifest Populator",date:"2020-12-01",sidebar_position:2e3},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator/index",title:"Events Manifest Populator",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:2e3,frontMatter:{title:"Events Manifest Populator",date:"2020-12-01",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Postgres Loader Configuration Reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/"},next:{title:"EmrEtlRunner",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/emr-etl-runner/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Duplicate storage configuration JSON",id:"duplicate-storage-configuration-json",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/tree/master/5-data-modeling/event-manifest-populator/"},"Event Manifest Populator")," is an ",(0,o.kt)("a",{parentName:"p",href:"http://spark.apache.org/"},"Apache Spark")," job allowing you to backpopulate a Snowplow event manifest in DynamoDB with the metadata of some or all enriched events from your archive in S3."),(0,o.kt)("p",null,'This one-off job solves the "cold start" problem for identifying cross-batch natural deduplicates in Snowplow\'s ',(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/rdb-shredder/"},"Relational Database Shredder step"),".",(0,o.kt)("br",{parentName:"p"}),"\n","In other words, without running this job you still will be able to deduplicate events across batches, but if Relational Database Shredder encounters duplicate of event that was shredded ",(0,o.kt)("em",{parentName:"p"},"before")," you enabled cross-batch deduplication it will land into ",(0,o.kt)("inlineCode",{parentName:"p"},"shredded/good"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In order to use Event Manifest Populator, you need to have ",(0,o.kt)("a",{parentName:"p",href:"http://boto.cloudhackers.com/en/latest/"},"boto2")," installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pip install boto\n")),(0,o.kt)("p",null,"As next step you need to grab ",(0,o.kt)("inlineCode",{parentName:"p"},"run.py")," file with instructions to run job on AWS EMR.",(0,o.kt)("br",{parentName:"p"}),"\n","You can do it by downloading it directly from Github:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wget https://raw.githubusercontent.com/snowplow/snowplow/master/5-data-modeling/event-manifest-populator/run.py\n")),(0,o.kt)("p",null,"Now you can run Event Manifest Populator with a single command (inside a directory with ",(0,o.kt)("inlineCode",{parentName:"p"},"run.py"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ python run.py $ENRICHED_ARCHIVE_S3_PATH $STORAGE_CONFIG_PATH $IGLU_RESOLVER_PATH\n")),(0,o.kt)("p",null,"Task has three required arguments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Path to enriched events archive. It can be found in ",(0,o.kt)("inlineCode",{parentName:"li"},"aws.s3.buckets.enriched.archive")," setting in your ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/emr-etl-runner/blob/master/config/stream_config.yml.sample"},"config.yml"),"."),(0,o.kt)("li",{parentName:"ol"},"Local path to ",(0,o.kt)("a",{parentName:"li",href:"#dynamodb-duplicate-storage-configuration"},"Duplicate storage")," configuration JSON."),(0,o.kt)("li",{parentName:"ol"},"Local path to ",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},"Iglu resolver")," configuration JSON.")),(0,o.kt)("p",null,"Optionally, you can also pass following arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--since")," to reduce amount of data to be stored in DynamodDB.",(0,o.kt)("br",{parentName:"li"}),"If this option was passed Manifest Populator will process enriched events only after specified date.",(0,o.kt)("br",{parentName:"li"}),"Input date supports two formats: ",(0,o.kt)("inlineCode",{parentName:"li"},"YYYY-MM-dd")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"YYYY-MM-dd-HH-mm-ss"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--log-path")," to store EMR job logs on S3. Normally, Manifest Populator does not",(0,o.kt)("br",{parentName:"li"}),"produce any logs or output, but if some error occured you'll be able to",(0,o.kt)("br",{parentName:"li"}),"inspect it in EMR logs stored in this path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--profile")," to specify AWS profile to create this EMR job."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--jar")," to specify S3 path to custom JAR")),(0,o.kt)("h2",{id:"duplicate-storage-configuration-json"},"Duplicate storage configuration JSON"),(0,o.kt)("p",null,"The configuration JSON should conform to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.storage/amazon_dynamodb_config/jsonschema/1-0-1"},(0,o.kt)("inlineCode",{parentName:"a"},"amazon_dynamodb_config")," JSON Schema"),"."),(0,o.kt)("p",null,"The properties of the schema are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": a descriptive name for this Snowplow storage target"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"accessKeyId"),": AWS Access Key Id"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secretAccessKey"),": AWS Secret Access Key"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"awsRegion"),": AWS region"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dynamodbTable"),": DynamoDB table to store information about processed events"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"purpose"),": common for all targets. Amazon DynamoDB supports only ",(0,o.kt)("inlineCode",{parentName:"li"},'"DUPLICATE_TRACKING"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": (optional) machine-readable config id")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," that Event Manifest Populator must be used only with run ids produced with version of snowplow newer than ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/releases/tag/r73-cuban-macaw"},"R73 Cuban Macaw")," as format of TSV files has been changed."))}d.isMDXComponent=!0}}]);