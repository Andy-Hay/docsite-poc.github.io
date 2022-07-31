"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[12372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Using the Elasticsearch Loader",date:"2020-02-26",sidebar_position:30},o=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader/index",title:"Using the Elasticsearch Loader",description:"Configuration",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:30,frontMatter:{title:"Using the Elasticsearch Loader",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Installing the Elasticsearch Loader",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/installing-the-elasticsearch-loader/"},next:{title:"Indicative",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/"}},l={},c=[{value:"Configuration",id:"configuration",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Execution",id:"execution",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The sink is configured using a HOCON file, for which you can find an example ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/snowplow/snowplow-elasticsearch-loader/master/examples/config.hocon.sample"},"here"),". These are the fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source"),': Change this to "kinesis", "stdin" or "nsq".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sink.good"),': Where to write good events. "elasticsearch" or "stdout".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sink.bad"),': Where to write error JSONs for bad events. "kinesis", "stderr" or "nsq" (or "none" to ignore bad events).'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),': "good" if the input stream contains successfully enriched events; "bad" if it contains bad rows; "plain-json" if it contains plain JSON.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aws.accessKey")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"aws.secretKey"),': Change these to your AWS credentials. You can alternatively leave them as "default", in which case the ',(0,a.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain")," will be used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.initialPosition"),': Where to start reading from the stream the first time the app is run. "TRIM',"_",'HORIZON" for as far back as possible, "LATEST" for as recent as possibly, "AT',"_",'TIMESTAMP" for after specified timestamp.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.initialTimestamp"),': Need to be specified when initial position is "AT',"_",'TIMESTAMP"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.maxRecords"),": Maximum number of records fetched in a single request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.region"),": The AWS region where the streams are located."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.appName"),": Unique identifier for the app which ensures that if it is stopped and restarted, it will restart at the correct location."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.channelName"),": Channel name for NSQ source stream. If more than one application reading from the same NSQ topic at the same time, all of them must have unique channel name to be able to get all the data from the same topic"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.host"),": Hostname for NSQ tools"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.port"),": HTTP port number for nsqd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.lookupPort"),": HTTP port number for nsqlookupd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream.inStreamName"),": The name of the input stream of the tool which you choose as a source."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream.outStreamName"),": The name of the output stream of the tool which you choose as sink. Records which cannot be converted to JSON or can be converted but are rejected by Elasticsearch get sent here."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streams.buffer.byteLimit"),": Whenever the total size of the buffered records exceeds this number, they will all be sent to elasticsearch."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streams.buffer.recordLimit"),": Whenever the total number of buffered records exceeds this number, they will all be sent to elasticsearch."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streams.buffer.timeLimit"),": If this length of time passes without the buffer being flushed, the buffer will be flushed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.client.endpoint"),": The Elasticesarch cluster endpoint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.client.port"),": The Elasticesarch cluster port."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.client.maxTimeout"),": The Elasticesarch maximum timeout in milliseconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.client.ssl"),": If using the HTTP API whether to use SSL or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.aws.signing"),": If using the Amazon Elasticsearch service and the HTTP API, this lets you sign your requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.aws.region"),": If signing API requests, region where the Elasticsearch cluster is located."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.cluster.name"),": The Elasticesarch cluster name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.cluster.index"),": The Elasticsearch index name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elasticsearch.cluster.clusterType"),": The Elasticesarch type name.")),(0,a.kt)("h3",{id:""},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/elasticsearch-loader-setup#monitoring"})),(0,a.kt)("h3",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"You can also include Snowplow Monitoring in the application. This is set up through a new section at the bottom of the config. You will need to ammend:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.collectorUri")," insert your snowplow collector URI here."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.appId")," the app-id used in decorating the events sent.")),(0,a.kt)("p",null,"If you do not wish to include Snowplow Monitoring, remove the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"monitoring")," section from the config."),(0,a.kt)("h3",{id:"-1"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/elasticsearch-loader-setup#execution"})),(0,a.kt)("h3",{id:"execution"},"Execution"),(0,a.kt)("p",null,"The Elasticsearch Loader is a jarfile. Simply provide the configuration file as a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ java -jar snowplow-elasticsearch-loader-http-0.10.0.jar --config my.conf # if using the HTTP API\n$ java -jar snowplow-elasticsearch-loader-tcp-0.10.0.jar --config my.conf # if using the transport API with a 5.x cluster\n$ java -jar snowplow-elasticsearch-loader-tcp-2x-0.10.0.jar --config my.conf # if using the transport API with a 2.x cluster\n")),(0,a.kt)("p",null,"This will start the process of reading events from Kinesis and writing them to an Elasticsearch cluster."))}u.isMDXComponent=!0}}]);