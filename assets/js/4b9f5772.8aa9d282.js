"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[28930],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={title:"Setup",date:"2020-04-25",sidebar_position:0},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/setup/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/setup/index",title:"Setup",description:"Snowflake Loader supports 3 authentication options: storage integration, IAM role and IAM credentials.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/setup/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/setup",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/setup/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/setup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:0,frontMatter:{title:"Setup",date:"2020-04-25",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Snowflake Loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/"},next:{title:"Configuration",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/configuration/"}},s={},p=[{value:"Setting up a storage integration",id:"setting-up-a-storage-integration",level:4},{value:"Setting up a load role",id:"setting-up-a-load-role",level:4},{value:"Setting up Snowflake",id:"setting-up-snowflake",level:4},{value:"Storing credentials in stage",id:"storing-credentials-in-stage",level:4},{value:"DynamoDB",id:"dynamodb",level:4},{value:"Snowflake",id:"snowflake",level:4},{value:"Dataflow Runner",id:"dataflow-runner",level:4},{value:"Staging enriched data",id:"staging-enriched-data",level:4}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Snowflake Loader supports 3 authentication options: storage integration, IAM role and IAM credentials."),(0,o.kt)("h4",{id:"setting-up-a-storage-integration"},"Setting up a storage integration"),(0,o.kt)("p",null,"This section is only for users loading data into Snowflake using ",(0,o.kt)("inlineCode",{parentName:"p"},"storage integration")," auth mechanism."),(0,o.kt)("p",null,"Snowflake ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-load-s3-config.html#option-1-configuring-a-snowflake-storage-integration"},"highly recommend")," this option, which avoids the need to supply AWS IAM credentials when creating stages or loading data."),(0,o.kt)("p",null,"To setup an integration, we recommend following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-load-s3-config.html#option-1-configuring-a-snowflake-storage-integration"},"Snowflake's tutorial")," up to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-load-s3-config.html#step-6-create-an-external-stage"},"step 6")," so that you"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"create an IAM policy with required permissions"),(0,o.kt)("li",{parentName:"ol"},"create an IAM role using the policy created at step 1"),(0,o.kt)("li",{parentName:"ol"},"create a storage integration at Snowflake"),(0,o.kt)("li",{parentName:"ol"},"update trust policy of the IAM role")),(0,o.kt)("p",null,"Now you can configure your loader where top level ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," looks like following as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"auth": {\n    "integrationName": "SNOWPLOW_S3_INTEGRATION"\n}\n')),(0,o.kt)("p",null,"Don't forget to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.storage/snowflake_config/jsonschema/1-0-3"},"1-0-3")," version of configuration schema."),(0,o.kt)("p",null,"Assuming that loader configuration is updated, you can run loader's setup subcommand to have remaining entities created automatically."),(0,o.kt)("h4",{id:"setting-up-a-load-role"},"Setting up a load role"),(0,o.kt)("p",null,"This section is only for users loading data into Snowflake using ",(0,o.kt)("inlineCode",{parentName:"p"},"roleArn"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"sessionDuration")," auth mechanism. With this mechanism, Snowflake Loader sends ",(0,o.kt)("inlineCode",{parentName:"p"},"AssumeRole")," request to AWS ",(0,o.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/STS/latest/APIReference/Welcome.html"},"Security Token Service")," and it returns temporary credentials (with lifespan equal ",(0,o.kt)("inlineCode",{parentName:"p"},"sessionDuration")," of seconds), which then passed with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.net/manuals/sql-reference/sql/copy-into-table.html"},"COPY INTO")," statement, allowing Snowflake to aunthenticate itself in your account. This is similar to what RDB Loader does for loading Redshift, main difference is that Snowflake Loader authenticates third-party AWS account (belonging to Snowflake Computing) to read data from S3."),(0,o.kt)("p",null,"First step is to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.net/manuals/user-guide/data-load-s3-config.html"},"create necessary AWS IAM entities")," restricted only to reading data from S3."),(0,o.kt)("p",null,"Create following IAM Policy, called ",(0,o.kt)("inlineCode",{parentName:"p"},"SnowflakeLoadPolicy"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetAccelerateConfiguration",\n                "s3:GetObject",\n                "s3:GetObjectVersion"\n            ],\n            "Resource": [\n                "arn:aws:s3:::YOUR-SNOWFLAKE-BUCKET/prefix/*"\n            ]\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::YOUR-SNOWFLAKE-BUCKET"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"This policy allows read-only access to your S3 bucket."),(0,o.kt)("p",null,"Next, you need to create an IAM role that will provide credentials."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"IAM -> Roles -> Create role -> AWS service -> EC2")),(0,o.kt)("li",{parentName:"ol"},"Attach just created ",(0,o.kt)("inlineCode",{parentName:"li"},"SnowflakeLoadPolicy")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Trust relationships -> Edit Trust relationship")),(0,o.kt)("li",{parentName:"ol"},"Insert following document (replacing 123456789123 with your account id and EMR","_","EC2","_","DefaultRole with your EMR role) and save it:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::123456789123:role/EMR_EC2_DefaultRole"\n      },\n      "Action": "sts:AssumeRole"\n    }\n  ]\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Now save Role ARN as your ",(0,o.kt)("inlineCode",{parentName:"li"},"roleArn")," in target configuration")),(0,o.kt)("h4",{id:""},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-snowflake-loader/wiki/Setup-Guide#setting-up-snowflake"})),(0,o.kt)("h4",{id:"setting-up-snowflake"},"Setting up Snowflake"),(0,o.kt)("p",null,"Snowflake Loader provides quick setup action that automatically creates following entities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"atomic")," database schema"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"atomic.events")," table to store enriched events"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.snowflake.net/manuals/user-guide/data-load-create-file-format.html"},"File format")," - entity to describe how Snowplow enriched data should be processed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.snowflake.net/manuals/user-guide/data-load-create-stage.html#external-locations"},"External Stage")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"atomic")," schema - reference to S3 path; output of Snowplow Snowflake Transformer. Can optionally contain AWS credentials"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.snowflake.net/manuals/user-guide/warehouses.html"},"Virtual Warehouse")," - computing entity of Snowflake; smallest (X-Small) be default")),(0,o.kt)("p",null,"All above safely can have default settings. Warehouse can be scaled up manually."),(0,o.kt)("p",null,"(Optional) If you want to use storage integration, you should create it before running setup command. Check the related section of this page to see instructions."),(0,o.kt)("p",null,"Two things you need to create manually are Snowflake database and DynamoDB table. After database is created, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),"."),(0,o.kt)("p",null,"To do this you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," CLI action for Snowflake Loader:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wget https://github.com/snowplow-incubator/snowplow-snowflake-loader/releases/download/0.9.0/snowplow-snowflake-loader-0.9.0.jar\n\n$ java -jar snowplow-snowflake-loader-0.9.0.jar \\\n    setup \\\n    --config /path/to/config.json \\\n    --resolver /path/to/resolver.json \n\n# OR\n\n$ java -jar snowplow-snowflake-loader-0.9.0.jar \\\n    setup \\\n    --base64\n    --config $(cat /path/to/config.json | base64 -w 0) \\\n    --resolver $(cat /path/to/resolver.json | base64 -w 0)\n")),(0,o.kt)("h4",{id:"storing-credentials-in-stage"},"Storing credentials in stage"),(0,o.kt)("p",null,"Apart from using AWS Role and static credentials, it is also possible to save credentials in Snowflake stage."),(0,o.kt)("p",null,"This can be added manually (if stage already exists). Snowflake Console -> Databases -> YOUR DB -> Stages -> Edit YOUR STAGE Or during ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," from local machine (if stage doesn't exist). If you add credentials to config, run ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," - they'll be added to stage and after than can be safely removed from config"),(0,o.kt)("h4",{id:"dynamodb"},"DynamoDB"),(0,o.kt)("p",null,"To use DynamoDB table as processing manifest you need to create table with partition key ",(0,o.kt)("inlineCode",{parentName:"p"},"RunId")," with string type and fill ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest")," property in configuration with newly created table name."),(0,o.kt)("h4",{id:"snowflake"},"Snowflake"),(0,o.kt)("p",null,"Snowplow data in Snowflake is stored in single fat table called ",(0,o.kt)("inlineCode",{parentName:"p"},"atomic.events")," (schema can be changed, table name cannot)."),(0,o.kt)("p",null,"Initial ",(0,o.kt)("inlineCode",{parentName:"p"},"atomic.events")," DDL for Snowflake can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-snowflake-loader/blob/master/loader/src/main/resources/sql/atomic-def.sql"},"atomic-def.sql"),"."),(0,o.kt)("h4",{id:"dataflow-runner"},"Dataflow Runner"),(0,o.kt)("p",null,"Dataflow Runner used to run Snowplow Snowflake Transformer Spark job on EMR cluster. It also can run loader."),(0,o.kt)("p",null,"EMR Cluster has default configuration. Only ",(0,o.kt)("inlineCode",{parentName:"p"},"ec2.keyName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"logUri")," must be changed. Everything else is optional. Edit and save below as ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "schema":"iglu:com.snowplowanalytics.dataflowrunner/ClusterConfig/avro/1-1-0",\n   "data":{\n      "name":"dataflow-runner - snowflake transformer",\n      "logUri":"s3://snowplow-snowflake-test/logs/",\n      "region":"us-east-1",\n      "credentials":{\n         "accessKeyId":"env",\n         "secretAccessKey":"env"\n      },\n      "roles":{\n         "jobflow":"EMR_EC2_DefaultRole",\n         "service":"EMR_DefaultRole"\n      },\n      "ec2":{\n         "amiVersion":"6.4.0",\n         "keyName":"key-name",\n         "location":{\n            "vpc":{\n               "subnetId":null\n            }\n         },\n         "instances":{\n            "master":{\n               "type":"m2.xlarge"\n            },\n            "core":{\n               "type":"m2.xlarge",\n               "count":1\n            },\n            "task":{\n               "type":"m1.medium",\n               "count":0,\n               "bid":"0.015"\n            }\n         }\n      },\n      "tags":[ ],\n      "bootstrapActionConfigs":[ ],\n      "configurations":[\n         {\n            "classification":"core-site",\n            "properties":{\n               "Io.file.buffer.size":"65536"\n            }\n         },\n         {\n            "classification":"mapred-site",\n            "properties":{\n               "Mapreduce.user.classpath.first":"true"\n            }\n         },\n         {\n            "classification":"yarn-site",\n            "properties":{\n               "yarn.resourcemanager.am.max-attempts":"1"\n            }\n         },\n         {\n            "classification":"spark",\n            "properties":{\n               "maximizeResourceAllocation":"true"\n            }\n         }\n      ],\n      "applications":[ "Hadoop", "Spark" ]\n   }\n}\n')),(0,o.kt)("p",null,"Edit and save below as ",(0,o.kt)("inlineCode",{parentName:"p"},"playbook.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "schema":"iglu:com.snowplowanalytics.dataflowrunner/PlaybookConfig/avro/1-0-1",\n   "data":{\n      "region":"{{.awsRegion}}",\n      "credentials":{\n         "accessKeyId":"env",\n         "secretAccessKey":"env"\n      },\n      "steps":[\n         {\n            "type":"CUSTOM_JAR",\n            "name":"Snowflake Transformer",\n            "actionOnFailure":"CANCEL_AND_WAIT",\n            "jar":"command-runner.jar",\n            "arguments":[\n               "spark-submit",\n\n               "--deploy-mode",\n               "cluster",\n               "--class",\n               "com.snowplowanalytics.snowflake.transformer.Main",\n\n               "s3://snowplow-hosted-assets/4-storage/snowflake-loader/snowplow-snowflake-transformer-0.9.0.jar",\n\n               "--config",\n               "{{base64File "./config.json"}}",\n               "--resolver",\n               "{{base64File "./resolver.json"}}",\n               "--events-manifest",\n               "{{base64File "./events_manifest.json"}}"\n            ]\n         },\n\n         {\n            "type":"CUSTOM_JAR",\n            "name":"Snowflake Loader",\n            "actionOnFailure":"CANCEL_AND_WAIT",\n            "jar":"s3://snowplow-hosted-assets/4-storage/snowflake-loader/snowplow-snowflake-loader-0.9.0.jar",\n            "arguments":[\n               "load",\n               "--base64",\n               "--config",\n               "{{base64File "./config.json"}}",\n               "--resolver",\n               "{{base64File "./resolver.json"}}"\n            ]\n         }\n      ],\n      "tags":[ ]\n   }\n}\n')),(0,o.kt)("p",null,"Bear in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"--events-manifest")," option is necessary only if you use ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/cross-batch-deduplication/"},"cross-batch deduplication"),", you can omit it otherwise."),(0,o.kt)("p",null,"To run above configuration you can use following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ dataflow-runner run-transient --emr-config cluster.json --emr-playbook playbook.json\n")),(0,o.kt)("p",null,"This will start both Transformer and Loader on EMR cluster."),(0,o.kt)("p",null,"Note that loader also can be launched on local machine, with paths specified for ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--resolver")," - you'll have to omit ",(0,o.kt)("inlineCode",{parentName:"p"},"--base64")," for that."),(0,o.kt)("h4",{id:"staging-enriched-data"},"Staging enriched data"),(0,o.kt)("p",null,"Snowflake Transformer (and Loader) expects certain structure in ",(0,o.kt)("inlineCode",{parentName:"p"},"stageUrl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s3://snowplow-data/enriched/archive/\n  + run=2020-12-01-16-30-50\n  + run=2020-12-01-17-31-02\n  + run=2020-12-01-18-30-55\n")),(0,o.kt)("p",null,"If your pipelilne uses EmrEtlRunner, those folders will be created as part of data archivation. However without EmrEtlRunner, you need to create this folder structure yourself before running Snowflake Transformer and Loader. We recommend to create this structure with auxiliary S3DistCp step ",(0,o.kt)("em",{parentName:"p"},"before")," transformer (add as first step in ",(0,o.kt)("inlineCode",{parentName:"p"},"playbook.json"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'        {\n            "type": "CUSTOM_JAR",\n            "name": "Staging enriched data",\n            "actionOnFailure": "CANCEL_AND_WAIT",\n            "jar": "/usr/share/aws/emr/s3-dist-cp/lib/s3-dist-cp.jar",\n            "arguments": [\n                "--src", "s3://snowplow-data/enriched-sink/",\n                "--dest", "s3://snowplow-data/enriched/archive/run={{nowWithFormat "2006-01-02-15-04-05"}}/",\n                "--srcPattern", ".*\\\\.gz",\n                "--deleteOnSuccess",\n                "--s3ServerSideEncryption"\n            ]\n        },\n')),(0,o.kt)("p",null,"Tranformer then will discover new folders in ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://snowplow-data/enriched/archive/")," and keep the state (processed and loaded directories) in DynamoDB manifest."))}d.isMDXComponent=!0}}]);