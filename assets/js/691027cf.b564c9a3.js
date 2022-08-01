"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[42816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Elasticsearch Loader",date:"2020-11-25",sidebar_position:600},r=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader/index",title:"Elasticsearch Loader",description:"If you are using\xa0Stream Enrich\xa0to write enriched Snowplow events to one stream and bad events to another, you can use the Elasticsearch Loader to read events from either of those streams and write them to\xa0Elasticsearch. It works with either Kinesis or NSQ streams.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:600,frontMatter:{title:"Elasticsearch Loader",date:"2020-11-25",sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage Loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/"},next:{title:"Postgres Loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/"}},l={},p=[{value:"Boolean fields reformatted",id:"boolean-fields-reformatted",level:3},{value:"New\xa0<code>geo_location</code>\xa0field",id:"newgeo_locationfield",level:3},{value:"Unstructured events",id:"unstructured-events",level:3},{value:"Custom contexts",id:"custom-contexts",level:3},{value:"Setup guide",id:"setup-guide",level:2},{value:"Configuring Elasticsearch",id:"configuring-elasticsearch",level:3},{value:"Getting started",id:"getting-started",level:4},{value:"Raising the file limit",id:"raising-the-file-limit",level:4},{value:"Defining the mapping",id:"defining-the-mapping",level:4},{value:"Installing the Elasticsearch Loader",id:"installing-the-elasticsearch-loader",level:3},{value:"Using the Elasticsearch Loader",id:"using-the-elasticsearch-loader",level:3},{value:"Configuration",id:"configuration",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are using\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/"},"Stream Enrich"),"\xa0to write enriched Snowplow events to one stream and bad events to another, you can use the Elasticsearch Loader to read events from either of those streams and write them to\xa0",(0,i.kt)("a",{parentName:"p",href:"http://www.elasticsearch.org/overview/"},"Elasticsearch"),". It works with either Kinesis or NSQ streams."),(0,i.kt)("p",null,"When loading enriched events, the resulting JSONs are like the\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/canonical-event/"},"Snowplow Canonical Event\xa0model")," with the following changes:"),(0,i.kt)("h3",{id:"boolean-fields-reformatted"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader#boolean-fields-reformatted"}),"Boolean fields reformatted"),(0,i.kt)("p",null,"All boolean fields like\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"br_features_java"),"\xa0are either\xa0",(0,i.kt)("inlineCode",{parentName:"p"},'"0"'),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},'"1"'),"\xa0in the canonical event model. The JSON converts these values to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"newgeo_locationfield"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader#new-geo_location-field"}),"New\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"geo_location"),"\xa0field"),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"geo_latitude"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"geo_longitude"),"\xa0fields are combined into a single\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"geo_location"),"\xa0field of Elasticsearch's\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-point.html"},'"geo',"_",'point" type'),"."),(0,i.kt)("h3",{id:"unstructured-events"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader#unstructured-events"}),"Unstructured events"),(0,i.kt)("p",null,"Unstructured events are expanded into full JSONs. For example, the event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "schema": "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",\n    "data": {\n        "targetUrl": "http://snowplowanalytics.com/analytics/index.html",\n        "elementId": "action",\n        "elementClasses": [],\n        "elementTarget": ""\n    }\n}\n')),(0,i.kt)("p",null,"would be converted to the field"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "unstruct_com_snowplowanalytics_snowplow_link_click_1": {\n        "targetUrl": "http://snowplowanalytics.com/analytics/index.html",\n        "elementId": "action",\n        "elementClasses": [],\n        "elementTarget": ""\n    }\n}\n')),(0,i.kt)("h3",{id:"custom-contexts"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader#custom-contexts"}),"Custom contexts"),(0,i.kt)("p",null,"Each custom context in an array is similarly expanded to a JSON with its own field. For example, the array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    {\n        "schema": "iglu:com.acme/contextOne/jsonschema/1-0-0",\n        "data": {\n            "key": "value"\n        }\n    }\n    {\n        "schema": "iglu:com.acme/contextTwo/jsonschema/3-0-0",\n        "data": {\n            "name": "second"\n        }\n    }\n]\n')),(0,i.kt)("p",null,"would be converted to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "contexts_com_acme_context_one_1": {\n        "key": "value"\n    },\n    "contexts_com_acme_context_two_3": {\n        "name": "second"\n    }\n}\n')),(0,i.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h3",{id:"configuring-elasticsearch"},"Configuring Elasticsearch"),(0,i.kt)("h4",{id:"getting-started"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader-Setup#getting-started"}),"Getting started"),(0,i.kt)("p",null,"First off, install and set up Elasticsearch version 7.x or 6.x. For more information check out the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html"},"installation guide"),"."),(0,i.kt)("h4",{id:"raising-the-file-limit"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader-Setup#raising-the-file-limit"}),"Raising the file limit"),(0,i.kt)("p",null,"Elasticsearch keeps a lot of files open simultaneously so you will need to increase the maximum number of files a user can have open. To do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo vim /etc/security/limits.conf\n")),(0,i.kt)("p",null,"Append the following lines to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{{USERNAME}} soft nofile 32000\n{{USERNAME}} hard nofile 32000\n")),(0,i.kt)("p",null,"Where {{USERNAME}} is the name of the user running Elasticsearch. You will need to logout and restart Elasticsearch before the new file limit takes effect."),(0,i.kt)("p",null,"To check that this new limit has taken effect you can run the following command from the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl localhost:9200/_nodes/process?pretty\n")),(0,i.kt)("p",null,"If the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"max_file_descriptors"),"\xa0equals 32000 it is running with the new limit."),(0,i.kt)("h4",{id:"defining-the-mapping"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader-Setup#defining-the-mapping"}),"Defining the mapping"),(0,i.kt)("p",null,"Use the following request to create the mapping with Elasticsearch 7.x:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -XPUT \'http://localhost:9200/snowplow\' -d \'{\n    "settings": {\n        "analysis": {\n            "analyzer": {\n                "default": {\n                    "type": "keyword"\n                }\n            }\n        }\n    },\n    "mappings": {\n        "properties": {\n            "geo_location": {\n                "type": "geo_point"\n            }\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html"},"mapping types are removed")," starting from Elasticsearch 7.0.0. If you use any older version, you might need to include mapping type also."),(0,i.kt)("p",null,'This initialization sets the default analyzer to "keyword". This means that string fields will not be split into separate tokens for the purposes of searching. This saves space and ensures that URL fields are handled correctly.'),(0,i.kt)("p",null,'If you want to tokenize specific string fields, you can change the "properties" field in the mapping like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -XPUT \'http://localhost:9200/snowplow\' -d \'{\n    "settings": {\n        "analysis": {\n            "analyzer": {\n                "default": {\n                    "type": "keyword"\n                }\n            }\n        }\n    },\n    "mappings": {\n        "properties": {\n            "geo_location": {\n                "type": "geo_point"\n            },\n            "field_to_tokenize": {\n                "type": "string",\n                "analyzer": "english"\n            }\n        }\n    }\n}\'\n')),(0,i.kt)("h3",{id:"installing-the-elasticsearch-loader"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader-Setup#installing-the-elasticsearch-loader"}),"Installing the Elasticsearch Loader"),(0,i.kt)("p",null,"The Elasticsearch Loader is published on Docker Hub:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull snowplow/snowplow-elasticsearch-loader:2.0.6\n")),(0,i.kt)("p",null,"The container can be run with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run \\\n  -v /path/to/config.hocon:/snowplow/config.hocon \\\n  snowplow/snowplow-elasticsearch-loader:2.0.6 \\\n  --config /snowplow/config.hocon\n")),(0,i.kt)("p",null,"Alternatively you can download and run a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-elasticsearch-loader/releases"},"jar file from the github release"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar snowplow-elasticsearch-loader-2.0.6.jar --config /path/to/config.hocon\n")),(0,i.kt)("h3",{id:"using-the-elasticsearch-loader"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader-Setup#using-the-elasticsearch-loader"}),"Using the Elasticsearch Loader"),(0,i.kt)("h4",{id:"configuration"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Elasticsearch-Loader-Setup#configuration"}),"Configuration"),(0,i.kt)("p",null,"The sink is configured using a HOCON file, for which you can find examples\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-elasticsearch-loader/tree/master/config"},"here"),". These are the fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"purpose"),(0,i.kt)("td",{parentName:"tr",align:null},'Required. "ENRICHED',"_",'EVENTS" for a stream of successfully enriched events')))),(0,i.kt)("p",null,'"BAD',"_",'ROWS" for a stream of bad events',(0,i.kt)("br",{parentName:"p"}),"\n",'"JSON" for writing plain json |\n| input.type | Required. Configures where input events will be read from.',(0,i.kt)("br",{parentName:"p"}),"\n","Can be \u201ckinesis\u201d, \u201cstdin\u201d or \u201cnsq\u201d |\n| input.streamName | Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis or nsq. Name of the stream to read from. |\n| input.initialPosition | Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type"),' is Kinesis. Specifies where to start reading from the stream the first time the app is run. "TRIM',"_",'HORIZON" for as far back as possible, "LATEST" for as recent as possibly, "AT',"_",'TIMESTAMP" for after specified timestamp. |\n| input.initialTimestamp | Used when ',(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.initialTimestamp"),' is "AT',"_",'TIMESTAMP". Specifies the timestamp to start read. |\n| input.maxRecords | Used when ',(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Optional. Maximum number of records fetched in a single request. Default value 10000. |\n| input.region | Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Optional if it can be resolved with ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html"},"AWS region provider chain"),". Region where the Kinesis stream is located. |\n| input.customEndpoint | Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Optional. Custom endpoint to override AWS Kinesis endpoints, this can be used to specify local endpoints when using localstack. |\n| input.dynamodbCustomEndpoint | Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Optional. Custom endpoint to override AWS DynamoDB endpoints for Kinesis checkpoints lease table, this can be used to specify local endpoints when using Localstack. |\n| input.appName | Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type"),' is kinesis. Optional. Used by a DynamoDB table to maintain stream state. Default value "snowplow-elasticsearch-loader". |\n| input.buffer.byteLimit | Used when ',(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Optional. The limit of the buffer in terms of bytes. When this value is exceeded, events will be sent to Elasticsearch. Default value 1000000. |\n| input.buffer.recordLimit | Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Optional. The limit of the buffer in terms of record count. When this value is exceeded, events will be sent to Elasticsearch. Default value 500. |\n| input.buffer.timeLimit | Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is kinesis. Optional. The time limit in milliseconds to wait to send the buffer to Elasticsearch. Default value 500. |\n| input.channelName | Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is nsq. Channel name for NSQ source stream. If more than one application reading from the same NSQ topic at the same time, all of them must have unique channel name to be able to get all the data from the same topic. |\n| input.nsqlookupdHost | Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type")," is nsq. Host name for nsqlookupd |\n| input.nsqlookupdPort | Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"input.type"),' is nsq. HTTP port for nsqd. |\n| output.good.type | Required. Configure where to write good events. Can be "elasticsearch" or "stdout". |\n| output.good.client.endpoint | Required. The Elasticsearch cluster endpoint. |\n| output.good.client.port | Optional. The port the Elasticsearch cluster can be accessed on. Default value 9200. |\n| output.good.client.username | Optional. HTTP Basic Auth username. Can be removed if not active. |\n| output.good.client.password | Optional. HTTP Basic Auth password. Can be removed if not active. |\n| output.good.client.shardDateFormat | Optional. Formatting used for sharding good stream, i.e. ',"_","yyyy-MM-dd. Can be removed if not needed. |\n| output.good.client.shardDateField | Optional. Timestamp field for sharding good stream. If not specified derived","_",'tstamp is used. |\n| output.good.client.maxRetries | Optional. The maximum number of request attempts before giving up. Default value 6. |\n| output.good.client.ssl | Optional. Whether to use ssl or not. Default value false. |\n| output.good.aws.signing | Optional. Whether to activate AWS signing or not. It should be activated if AWS OpenSearch service is used. Default value false. |\n| output.good.aws.region | Optional. Region where the AWS OpenSearch service is located. |\n| output.good.cluster.index | Required. The Elasticsearch index name. |\n| output.good.cluster.documentType | Optional. The Elasticsearch index type. Index types are deprecated in ES >=7.x Therefore, it shouldn\'t be set with ES >=7.x |\n| output.good.chunk.byteLimit | Optional. Bulk request to Elasticsearch will be splitted to chunks according given byte limit. Default value 1000000. |\n| output.good.chunk.recordLimit | Optional. Bulk request to Elasticsearch will be splitted to chunks according given record limit. Default value 500. |\n| output.bad.type | Required. Configure where to write bad rows. Can be "kinesis", "nsq", "stderr" or "none". |\n| output.bad.streamName | Required. Stream name for events which are rejected by Elasticsearch. |\n| output.bad.region | Used when ',(0,i.kt)("inlineCode",{parentName:"p"},"output.bad.type")," is kinesis. Optional if it can be resolved with ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html"},"AWS region provider chain"),". Region where the bad Kinesis stream is located. |\n| output.bad.customEndpoint | Used when ",(0,i.kt)("inlineCode",{parentName:"p"},"output.bad.type")," is kinesis. Optional. Custom endpoint to override AWS Kinesis endpoints, this can be used to specify local endpoints when using localstack. |\n| output.bad.nsqdHost | Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"output.bad.type")," is nsq. Host name for nsqd. |\n| output.bad.nsqdPort | Required when ",(0,i.kt)("inlineCode",{parentName:"p"},"output.bad.type")," is nsq. HTTP port for nsqd. |\n| monitoring.snowplow.collector | Optional. Snowplow collector URI for monitoring. Can be removed together with monitoring section. |\n| monitoring.snowplow.appId | Optional. The app id used in decorating the events sent for monitoring. Can be removed together with monitoring section. |\n| monitoring.metrics.cloudWatch | Optional. Whether to enable Cloudwatch metrics or not. Default value true. |"))}d.isMDXComponent=!0}}]);