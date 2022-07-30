"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[96167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={title:"Load data to S3",date:"2020-06-01",sidebar_position:-10},r=void 0,l={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3/index",title:"Load data to S3",description:"To sink the raw data from Kinesis to S3, follow the instructions below:",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3/",draft:!1,tags:[],version:"current",sidebarPosition:-10,frontMatter:{title:"Load data to S3",date:"2020-06-01",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Setup Destinations",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/"},next:{title:"Elasticsearch",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Download the executable jar file",id:"download-the-executable-jar-file",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Monitoring",id:"monitoring",level:3},{value:"Execution",id:"execution",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To sink the raw data from Kinesis to S3, follow the instructions below:"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To run the Snowplow S3 Loader, you must have installed the native LZO binaries. To do this on Ubuntu, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo apt-get install lzop liblzo2-dev\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"download-the-executable-jar-file"},"Download the executable jar file"),(0,i.kt)("p",null,"See\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Hosted-assets"},"Hosted assets"),"\xa0for the zipfile to download."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The sink is configured using a HOCON file. These are the fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source"),": Choose kinesis or nsq as a source stream"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sink"),": Choose between kinesis or nsq as a sink stream for failed events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aws.accessKey"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"aws.secretKey"),": Change these to your AWS credentials. You can alternatively leave them as \u201cdefault\u201d, in which case the\xa0",(0,i.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"\xa0will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kinesis.initialPosition"),": Where to start reading from the stream the first time the app is run. \u201cTRIM","_","HORIZON\u201d for as far back as possible, \u201cLATEST\u201d for as recent as possibly, \u201cAT","_","TIMESTAMP\u201d for after the specified timestamp."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kinesis.initialTimestamp"),": Timestamp for \u201cAT","_","TIMESTAMP\u201d initial position"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kinesis.maxRecords"),": Maximum number of records to read per GetRecords call"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kinesis.region"),": The Kinesis region name to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kinesis.appName"),": Unique identifier for the app which ensures that if it is stopped and restarted, it will restart at the correct location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nsq.channelName"),": Channel name for NSQ source stream. If more than one application reading from the same NSQ topic at the same time, all of them must have unique channel name to be able to get all the data from the same topic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nsq.host"),": Hostname for NSQ tools"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nsq.port"),": HTTP port number for nsqd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nsq.lookupPort"),": HTTP port number for nsqlookupd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stream.inStreamName"),": The name of the input stream of the tool which you choose as a source. This should be the stream to which your are writing records with the Scala Stream Collector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"streams.outStreamName"),": The name of the output stream of the tool which you choose as sink. This is stream where records are sent if the compression process fails."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"streams.buffer.byteLimit"),": Whenever the total size of the buffered records exceeds this number, they will all be sent to S3."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"streams.buffer.recordLimit"),": Whenever the total number of buffered records exceeds this number, they will all be sent to S3."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"streams.buffer.timeLimit"),": If this length of time passes without the buffer being flushed, the buffer will be flushed.\xa0",(0,i.kt)("strong",{parentName:"li"},"Note"),": With NSQ streams, only record limit is taken into account. Other two option will be ignored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.region"),": The AWS region for the S3 bucket"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.bucket"),": The name of the S3 bucket in which files are to be stored"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.format"),": The format the app should write to S3 in (",(0,i.kt)("inlineCode",{parentName:"li"},"lzo"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"gzip"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.maxTimeout"),": The maximum amount of time the app attempts to PUT to S3 before it will kill itself")),(0,i.kt)("h3",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"You can also now include Snowplow Monitoring in the application. This is setup through a new section at the bottom of the config. You will need to ammend:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.collectorUri"),"\xa0insert your snowplow collector URI here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.appId"),"\xa0the app-id used in decorating the events sent.")),(0,i.kt)("p",null,"If you do not wish to include Snowplow Monitoring, remove the entire\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"monitoring"),"\xa0section from the config."),(0,i.kt)("p",null,"An\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-s3-loader/blob/master/examples/config.hocon.sample"},"example"),"\xa0is available in the repo."),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("p",null,"The Snowplow S3 Loader is a jarfile. Simply provide the configuration file as a parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ java -jar snowplow-s3-loader-$VERSION.jar --config my.conf\n")),(0,i.kt)("p",null,"This will start the process of reading events from selected source, compressing them, and writing them to S3."))}d.isMDXComponent=!0}}]);