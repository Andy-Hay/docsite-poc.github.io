"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[42850],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return r?t.createElement(g,s(s({ref:n},d),{},{components:r})):t.createElement(g,s({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},54475:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const a={title:"Run the RDB shredder",date:"2021-09-14",sidebar_position:40},s=void 0,i={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder/index",title:"Run the RDB shredder",description:"The RDB shredder is published as a jar file attached to the github release page. We also push it to several S3 buckets, from where it is accessible to an EMR cluster:",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:40,frontMatter:{title:"Run the RDB shredder",date:"2021-09-14",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"DynamoDB Table",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table/"},next:{title:"Run the RDB loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/"}},l={},p=[{value:"Dataflow Runner",id:"dataflow-runner",level:3}],d={toc:p};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The RDB shredder is published as a jar file attached to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"github release page"),". We also push it to several S3 buckets, from where it is accessible to an EMR cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s3://snowplow-hosted-assets/4-storage/rdb-shredder/snowplow-rdb-shredder-{{ version }}.jar\n-- or --\ns3://snowplow-hosted-{{ region }}/4-storage/rdb-shredder/snowplow-rdb-shredder-{{ version }}.jar\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"region")," is one of ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west-2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sa-east-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"eu-central-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ap-southeast-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ap-southeast-2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ap-northeast-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ap-south-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east-2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ca-central-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"eu-west-2"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"ap-northeast-2"),"."),(0,o.kt)("h3",{id:"dataflow-runner"},"Dataflow Runner"),(0,o.kt)("p",null,"You can use any suitable tool to periodically submit the Shredder job to EMR cluster. We recommend to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/dataflow-runner/"},"Dataflow Runner"),", here an example of cluster config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.dataflowrunner/ClusterConfig/avro/1-1-0",\n  "data": {\n    "name": "RDB Shredder",\n    "logUri": "s3://com-acme/logs/",\n    "credentials": {\n      "accessKeyId": "env",\n      "secretAccessKey": "env"\n    },\n    "roles": {\n      "jobflow": "EMR_EC2_DefaultRole",\n      "service": "EMR_DefaultRole"\n    },\n    "ec2": {\n      "amiVersion": "6.2.0",\n      "keyName": "ec2-key-name",\n      "location": {\n        "vpc": {\n          "subnetId": "subnet-id"\n        }\n      },\n      "instances": {\n        "master": {\n          "type": "m4.large",\n          "ebsConfiguration": {\n            "ebsOptimized": true,\n            "ebsBlockDeviceConfigs": [\n\n            ]\n          }\n        },\n        "core": {\n          "type": "r4.xlarge",\n          "count": 1\n        },\n        "task": {\n          "type": "m4.large",\n          "count": 0,\n          "bid": "0.015"\n        }\n      }\n    },\n    "tags": [ ],\n    "bootstrapActionConfigs": [ ],\n    "configurations": [\n      {\n         "classification":"core-site",\n         "properties":{\n            "Io.file.buffer.size":"65536"\n         },\n         "configurations":[\n   \n         ]\n      },\n      {\n         "classification":"yarn-site",\n         "properties":{\n            "yarn.nodemanager.resource.memory-mb":"57344",\n            "yarn.scheduler.maximum-allocation-mb":"57344",\n            "yarn.nodemanager.vmem-check-enabled":"false"\n         },\n         "configurations":[\n   \n         ]\n      },\n      {\n         "classification":"spark",\n         "properties":{\n            "maximizeResourceAllocation":"false"\n         },\n         "configurations":[\n   \n         ]\n      },\n      {\n         "classification":"spark-defaults",\n         "properties":{\n            "spark.executor.memory":"7G",\n            "spark.driver.memory":"7G",\n            "spark.driver.cores":"3",\n            "spark.yarn.driver.memoryOverhead":"1024",\n            "spark.default.parallelism":"24",\n            "spark.executor.cores":"1",\n            "spark.executor.instances":"6",\n            "spark.yarn.executor.memoryOverhead":"1024",\n            "spark.dynamicAllocation.enabled":"false"\n         },\n         "configurations":[\n   \n         ]\n      }\n   ],\n    "applications": [ "Hadoop", "Spark" ]\n  }\n}\n')),(0,o.kt)("p",null,"This is a typical cluster configuration for processing ~1.5GB of ungzipped enriched data."),(0,o.kt)("p",null,"You need to change following settings to match your configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logUri")," - your S3 bucket with logs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ec2.keyName")," (optional) - EC2 SSH key name if you'll need to log-in to EMR cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ec2.location.vpc.subnetId")," - your VPN subnet id")),(0,o.kt)("p",null,"Here's a typical playbook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.dataflowrunner/PlaybookConfig/avro/1-0-1",\n  "data": {\n    "region": "eu-central-1",\n    "credentials": {\n      "accessKeyId": "env",\n      "secretAccessKey": "env"\n    },\n    "steps": [\n      {\n        "type": "CUSTOM_JAR",\n        "name": "S3DistCp enriched data archiving",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "/usr/share/aws/emr/s3-dist-cp/lib/s3-dist-cp.jar",\n        "arguments": [\n            "--src", "s3://com-acme/enriched/sink/",\n            "--dest", "s3://com-acme/enriched/archive/run={{nowWithFormat "2006-01-02-15-04-05"}}/",\n            "--s3Endpoint", "s3-eu-central-1.amazonaws.com",\n            "--srcPattern", ".*",\n            "--outputCodec", "gz",\n            "--deleteOnSuccess"\n        ]\n      },\n\n      {\n        "type": "CUSTOM_JAR",\n        "name": "RDB Shredder",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "command-runner.jar",\n        "arguments": [\n            "spark-submit",\n            "--class",\n            "com.snowplowanalytics.snowplow.rdbloader.shredder.batch.Main",\n            "--master", "yarn",\n            "--deploy-mode", "cluster",\n            "s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-shredder/snowplow-rdb-shredder-2.0.0.jar",\n            "--iglu-config", "{{base64File "/home/snowplow/configs/snowplow/iglu_resolver.json"}}",\n            "--config", "{{base64File "/home/snowplow/configs/snowplow/config.hocon"}}"\n        ]\n      }\n    ],\n    "tags": [ ]\n  }\n}\n')),(0,o.kt)("p",null,"Here you'll need to set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"region")),(0,o.kt)("li",{parentName:"ul"},"Paths to your enriched data sink (",(0,o.kt)("inlineCode",{parentName:"li"},"--src"),") and enriched data lake (",(0,o.kt)("inlineCode",{parentName:"li"},"--dest"),")")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/rdb-shredder-configuration-reference/"},"configuration reference")," for a description of how to prepare the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.hocon")," file.."))}c.isMDXComponent=!0}}]);