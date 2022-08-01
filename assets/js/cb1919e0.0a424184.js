"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[97177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Deduplication",date:"2022-04-04",sidebar_position:30},o=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/deduplication/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/deduplication/index",title:"Deduplication",description:"NOTE: Deduplication is currently only available in the Spark transformer.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/deduplication/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/deduplication",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/deduplication/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/deduplication/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:30,frontMatter:{title:"Deduplication",date:"2022-04-04",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Stream transformer",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/"},next:{title:"RDB Transformer configuration reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/"}},s={},d=[{value:"In-batch natural deduplication",id:"in-batch-natural-deduplication",level:2},{value:"In-batch synthetic deduplication",id:"in-batch-synthetic-deduplication",level:2},{value:"Cross-batch natural deduplication",id:"cross-batch-natural-deduplication",level:2},{value:"How to enable cross-batch natural deduplication",id:"how-to-enable-cross-batch-natural-deduplication",level:3},{value:"Costs and performance implications",id:"costs-and-performance-implications",level:3},{value:"How RDB Transformer uses DynamoDB for deduplication",id:"how-rdb-transformer-uses-dynamodb-for-deduplication",level:3},{value:"Creating the DynamoDB table and IAM policy",id:"creating-the-dynamodb-table-and-iam-policy",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Deduplication is currently only available in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/"},"Spark transformer"),"."),(0,i.kt)("p",null,"Duplicates are a common problem in event pipelines. At the root of it is the fact that we can't guarantee every event has a unique UUID because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we have no exactly-once delivery guarantees"),(0,i.kt)("li",{parentName:"ul"},"user-side software can send events more than once"),(0,i.kt)("li",{parentName:"ul"},"robots can send events reusing the same event ID.")),(0,i.kt)("p",null,"Depending on your use case, you may choose to ignore duplicates, or deal with them once the events are in the data warehouse."),(0,i.kt)("p",null,"If you are loading into ",(0,i.kt)("strong",{parentName:"p"},"Redshift")," (using ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/#shredded-data"},"shredded data"),"), we strongly recommend to deduplicate the data upstream of loading. Once duplicates are loaded into separate tables, table joins would create a Cartesian product."),(0,i.kt)("p",null,"This is less of a concern with ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/#wide-row-format"},"wide row format")," loading into ",(0,i.kt)("strong",{parentName:"p"},"Snowflake"),", where it's easier to deduplicate during the data modeling step in the warehouse."),(0,i.kt)("p",null,"This table shows the available deduplication mechanisms:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Strategy"),(0,i.kt)("th",{parentName:"tr",align:null},"Batch?"),(0,i.kt)("th",{parentName:"tr",align:null},"Same event ID?"),(0,i.kt)("th",{parentName:"tr",align:null},"Same event fingerprint?"),(0,i.kt)("th",{parentName:"tr",align:null},"Availability"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In-batch natural deduplication"),(0,i.kt)("td",{parentName:"tr",align:null},"In-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark transformer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In-batch synthetic deduplication"),(0,i.kt)("td",{parentName:"tr",align:null},"In-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark transformer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch natural deduplication"),(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark transformer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch synthetic deduplication"),(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Not supported")))),(0,i.kt)("h2",{id:"in-batch-natural-deduplication"},"In-batch natural deduplication"),(0,i.kt)("p",null,'"Natural duplicates" are events which share the same event ID (',(0,i.kt)("inlineCode",{parentName:"p"},"event_id"),") and the same event payload (",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint"),"), meaning that they are semantically identical to each other. For a given batch of events being processed, RDB Transformer keeps only the first out of each group of natural duplicates and discards all others."),(0,i.kt)("p",null,"To enable this functionality, you need to have the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},"Event Fingerprint Enrichment")," enabled in Enrich. This will correctly populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint")," property. No changes are required in the transformer's own ",(0,i.kt)("inlineCode",{parentName:"p"},"config.hocon")," file."),(0,i.kt)("p",null,"If the fingerprint enrichment is not enabled, the transformer will assign a random UUID to each event, effectively marking all events as non-duplicates (in the 'natural' sense)."),(0,i.kt)("h2",{id:"in-batch-synthetic-deduplication"},"In-batch synthetic deduplication"),(0,i.kt)("p",null,'"Synthetic duplicates" are events which share the same event ID (',(0,i.kt)("inlineCode",{parentName:"p"},"event_id"),"), but have different event payload (",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint"),"), meaning that they can be either semantically independent events or the same events with slightly different payloads (caused by third-party software). For a given batch of events being processed, RDB Transformer uses the following strategy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collect all the events with identical ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," which are left after natural deduplication"),(0,i.kt)("li",{parentName:"ul"},"Generate new random ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," for each of them"),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/duplicate/jsonschema/1-0-0"},(0,i.kt)("inlineCode",{parentName:"a"},"duplicate"))," context with the original ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," for each event where the duplicated ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," was found.")),(0,i.kt)("p",null,"There is no transformer configuration required for this functionality: deduplication is performed automatically. It is optional but highly recommended to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},"Event Fingerprint Enrichment")," in Enrich in order to correctly populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint")," property."),(0,i.kt)("h2",{id:"cross-batch-natural-deduplication"},"Cross-batch natural deduplication"),(0,i.kt)("p",null,"The strategies described above deal with duplicates within the same batch of data being processed. But what if events are duplicated across batches?"),(0,i.kt)("p",null,"To apply any of these strategies, we need to store information about previously seen duplicates, so that we can compare events in the current batch against them. We don't need to store the whole event: just the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_id")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint")," fields."),(0,i.kt)("p",null,"We need to store these in a database that allows fast random access, so we chose DynamoDB, a fully managed NoSQL database service."),(0,i.kt)("p",null,"For more information on how duplicates are created, the difference between 'natural' and 'synthetic' duplicates, and possible mitigation strategies, see ",(0,i.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/de-deduplicating-events-in-hadoop-and-redshift-tutorial/248"},"this evergreen Discourse thread")," and ",(0,i.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2015/08/19/dealing-with-duplicate-event-ids/"},"this still-relevant blog post"),"."),(0,i.kt)("h3",{id:"how-to-enable-cross-batch-natural-deduplication"},"How to enable cross-batch natural deduplication"),(0,i.kt)("p",null,"To enable cross-batch natural deduplication, you must provide a third configuration option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RDB Transformer")," step of the Dataflow Runner playbook, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--duplicate-storage-config")," flag. Like the other options, this needs to be provided as a base64-encoded string. This config file contains information about the DynamoDB table to be used, as well as credentials for accessing it. For more details on the config file structure, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-events-manifest"},"Snowplow Events Manifest")," library and its documentation."),(0,i.kt)("p",null,"An example step definition can look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "CUSTOM_JAR",\n  "name": "RDB Transformer",\n  "actionOnFailure": "CANCEL_AND_WAIT",\n  "jar": "command-runner.jar",\n  "arguments": [\n    "spark-submit",\n    "--class", "com.snowplowanalytics.snowplow.rdbloader.shredder.batch.Main",\n    "--master", "yarn",\n    "--deploy-mode", "cluster",\n    "s3://snowplow-hosted-assets-eu-central-1/4-storage/transformer-batch/snowplow-transformer-batch-4.1.0.jar",\n    "--iglu-config", "{{base64File "/home/snowplow/configs/snowplow/iglu_resolver.json"}}",\n    "--config", "{{base64File "/home/snowplow/configs/snowplow/config.hocon"}}",\n    "--duplicate-storage-config", "{{base64File "/home/snowplow/configs/snowplow/duplicate-storage-config.json"}}"\n  ]\n}\n')),(0,i.kt)("p",null,"If this configuration option is not provided, cross-batch natural deduplication will be disabled. In-batch deduplication will still work however."),(0,i.kt)("p",null,"To avoid 'cold start' problems you may want to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator/"},(0,i.kt)("inlineCode",{parentName:"a"},"event-manifest-populator"))," Spark job, which backfills the duplicates table with events from a specified point in time onwards."),(0,i.kt)("h3",{id:"costs-and-performance-implications"},"Costs and performance implications"),(0,i.kt)("p",null,"Cross-batch deduplication uses DynamoDB as transient storage and therefore has associated AWS costs. The default write capacity is 100 units, which should roughly cost USD50 per month. Note that at this rate your shred job can get throttled by insufficient capacity, even with a very powerful EMR cluster. You can tweak throughput to match your needs but that will inflate the bill."),(0,i.kt)("h3",{id:"how-rdb-transformer-uses-dynamodb-for-deduplication"},"How RDB Transformer uses DynamoDB for deduplication"),(0,i.kt)("p",null,"We store duplicate data in a DynamoDB table with the following attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventId"),", a String"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fingerprint"),", a String"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"etlTime"),", a Date"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ttl"),", a Date.")),(0,i.kt)("p",null,"We can query this table to see if the event that is currently being processed has been seen before based on ",(0,i.kt)("inlineCode",{parentName:"p"},"event_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint"),"."),(0,i.kt)("p",null,"We store the ",(0,i.kt)("inlineCode",{parentName:"p"},"etl_timestamp")," to prevent issues in case of a failed transformer run. If a run fails and is then rerun, we don't want the rerun to consider rows in the DynamoDB table which were written as part of the failed run. Otherwise all events that were processed by the failed run will be rejected as duplicates."),(0,i.kt)("p",null,"To update the DynamoDB table, RDB Transformer uses so-called 'conditional updates' to perform a check-and-set operation on a per-event basis. The algorithm is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attempt to write the ",(0,i.kt)("inlineCode",{parentName:"li"},"(event_id, event_fingerprint, etl_timestamp)")," triple to DynamoDB but succeed only if the ",(0,i.kt)("inlineCode",{parentName:"li"},"(event_id, event_fingerprint)")," pair cannot be found in the table with an earlier ",(0,i.kt)("inlineCode",{parentName:"li"},"etl_timestamp")," than the current one."),(0,i.kt)("li",{parentName:"ul"},"If the write fails, we have a natural duplicate. We can safely drop it because we know that we have the 'original' of this event already safely in the data warehouse."),(0,i.kt)("li",{parentName:"ul"},"If the write succeeds, we know we have an event which is not a natural duplicate. (It could still be a synthetic duplicate however.)")),(0,i.kt)("p",null,"The transformer performs this check after grouping the batch by ",(0,i.kt)("inlineCode",{parentName:"p"},"event_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint"),". This ensures that all check-and-set requests for a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"(event_id, event_fingerprint)")," pair will come from a single mapper, avoiding race conditions."),(0,i.kt)("p",null,"To keep the DynamoDB table size in check, we're using the time-to-live feature which provides automatic cleanup after the specified time. For event manifests this time is the ETL timestamp plus 180 days. This is stored in the table's ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl")," attribute."),(0,i.kt)("h3",{id:"creating-the-dynamodb-table-and-iam-policy"},"Creating the DynamoDB table and IAM policy"),(0,i.kt)("p",null,"If you provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"duplicate-storage-config")," that specifies a DynamoDB table but RDB Transformer can't find it upon launch, it will create it with the default provisioned throughput. That might not be enough for the amount of data you want to process. Creating the table upfront gives you the opportunity to spec it out according to your needs. This step is optional but recommended."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The table name can be anything, but it must be unique."),(0,i.kt)("li",{parentName:"ol"},"The partition key must be called ",(0,i.kt)("inlineCode",{parentName:"li"},"eventId")," and have type String. The sort key must be called ",(0,i.kt)("inlineCode",{parentName:"li"},"fingerprint")," and have type String. You can refer to the the ",(0,i.kt)("a",{parentName:"li",href:"#how-rdb-transformer-uses-dynamodb-for-deduplication"},"DynamoDB table definition")," above for the full table schema."),(0,i.kt)("li",{parentName:"ol"},'Uncheck the "Use default settings" checkbox and set "Write capacity units" to 100 (or your desired value).'),(0,i.kt)("li",{parentName:"ol"},'After the table is created, note down its ARN in the "Overview" tab.'),(0,i.kt)("li",{parentName:"ol"},'Create the IAM policy In the AWS console, navigate to IAM and go to "Policies". Select "Create Your Own Policy" and choose a descriptive name. Here\'s an example Policy Document that you can paste:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "Stmt1486765706000",\n      "Effect": "Allow",\n      "Action": [\n        "dynamodb:CreateTable",\n        "dynamodb:DeleteTable",\n        "dynamodb:DescribeTable",\n        "dynamodb:PutItem"\n      ],\n      "Resource": [\n        "arn:aws:dynamodb:us-east-1:{{AWS_ACCOUNT_ID}}:table/snowplow-deduplication"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Replace the element in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resources")," array with the ARN that you noted down in step 4. If you've already created the table, the policy does not require the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamodb:CreateTable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamodb:DeleteTable")," permissions."))}c.isMDXComponent=!0}}]);