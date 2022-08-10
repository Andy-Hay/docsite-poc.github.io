"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[13332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"Configure EmrEtlRunner",date:"2020-02-26",sidebar_position:30},a=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner/index",title:"Configure EmrEtlRunner",description:"Overview",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:30,frontMatter:{title:"Configure EmrEtlRunner",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Install EmrEtlRunner",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/"},next:{title:"Run EmrEtlRunner",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/run-emretlrunner/"}},l={},u=[{value:"Overview",id:"overview",level:3},{value:"Using environment variables",id:"using-environment-variables",level:3},{value:"Example configuration",id:"example-configuration",level:3},{value:"aws",id:"aws",level:3},{value:"Credentials",id:"credentials",level:4},{value:"s3",id:"s3",level:4},{value:"emr",id:"emr",level:4},{value:"storage",id:"storage",level:3},{value:"versions",id:"versions",level:4},{value:"monitoring",id:"monitoring",level:3},{value:"snowplow",id:"snowplow",level:4}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This page describes the format for the YAML file which is used to configure the EmrEtlRunner."),(0,r.kt)("p",null,"You can and should use the same file for both applications."),(0,r.kt)("h3",{id:""},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Common-configuration#using-environment-variables"})),(0,r.kt)("h3",{id:"using-environment-variables"},"Using environment variables"),(0,r.kt)("p",null,'You can use environment variables rather than hardcoding strings in the configuration file. For example, load your AWS access key from an environment variable named "AWS',"_","SNOWPLOW","_","SECRET","_",'KEY":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"secret_access_key: <%= ENV['AWS_SNOWPLOW_SECRET_KEY'] %>\n")),(0,r.kt)("h3",{id:"-1"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Common-configuration#example-configuration"})),(0,r.kt)("h3",{id:"example-configuration"},"Example configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'aws:\n  # Credentials can be hardcoded or set in environment variables\n  access_key_id: <%= ENV[\'AWS_SNOWPLOW_ACCESS_KEY\'] %>\n  secret_access_key: <%= ENV[\'AWS_SNOWPLOW_SECRET_KEY\'] %>\n  s3:\n    region: ADD HERE\n    buckets:\n      assets: s3://snowplow-hosted-assets # DO NOT CHANGE unless you are hosting the jarfiles etc yourself in your own bucket\n      jsonpath_assets: # If you have defined your own JSON Schemas, add the s3:// path to your own JSON Path files in your own bucket here\n      log: ADD HERE\n      encrypted: false\n      enriched:\n        good: ADD HERE       # e.g. s3://my-out-bucket/enriched/good\n        archive: ADD HERE    # Where to archive enriched events to, e.g. s3://my-archive-bucket/enriched\n        stream: ADD HERE     # S3 Loader\'s output folder with enriched data. If present raw buckets will be discarded\n      shredded:\n        good: ADD HERE       # e.g. s3://my-out-bucket/shredded/good\n        bad: ADD HERE        # e.g. s3://my-out-bucket/shredded/bad\n        errors: ADD HERE     # Leave blank unless :continue_on_unexpected_error: set to true below\n        archive: ADD HERE    # Where to archive shredded events to, e.g. s3://my-archive-bucket/shredded\n    consolidate_shredded_output: false # Whether to combine files when copying from hdfs to s3\n  emr:\n    ami_version: 5.9.0\n    region: ADD HERE        # Always set this\n    jobflow_role: EMR_EC2_DefaultRole # Created using $ aws emr create-default-roles\n    service_role: EMR_DefaultRole     # Created using $ aws emr create-default-roles\n    placement: ADD HERE     # Set this if not running in VPC. Leave blank otherwise\n    ec2_subnet_id: ADD HERE # Set this if running in VPC. Leave blank otherwise\n    ec2_key_name: ADD HERE\n    security_configuration: ADD HERE # Specify your EMR security configuration if needed. Leave blank otherwise\n    bootstrap: []           # Set this to specify custom boostrap actions. Leave empty otherwise\n    software:\n      hbase:                # Optional. To launch on cluster, provide version, "0.92.0", keep quotes. Leave empty otherwise.\n      lingual:              # Optional. To launch on cluster, provide version, "1.1", keep quotes. Leave empty otherwise.\n    # Adjust your Hadoop cluster below\n    jobflow:\n      job_name: Snowplow ETL # Give your job a name\n      master_instance_type: m1.medium\n      core_instance_count: 2\n      core_instance_type: m1.medium\n      core_instance_bid: 0.015 # In USD. Adjust bid, or leave blank for on-demand core instances\n      core_instance_ebs:    # Optional. Attach an EBS volume to each core instance.\n        volume_size: 100    # Gigabytes\n        volume_type: "gp2"\n        volume_iops: 400    # Optional. Will only be used if volume_type is "io1"\n        ebs_optimized: false # Optional. Will default to true\n      task_instance_count: 0 # Increase to use spot instances\n      task_instance_type: m1.medium\n      task_instance_bid: 0.015 # In USD. Adjust bid, or leave blank for non-spot-priced (i.e. on-demand) task instances\n    bootstrap_failure_tries: 3 # Number of times to attempt the job in the event of bootstrap failures\n    configuration:\n      yarn-site:\n        yarn.resourcemanager.am.max-attempts: "1"\n      spark:\n        maximizeResourceAllocation: "true"\n    additional_info:        # Optional JSON string for selecting additional features\nenrich:\n  versions:\n    spark_enrich: 1.18.0 # Version of the Spark Enrichment process\n  output_compression: GZIP # Stream mode supports only GZIP\nstorage:\n  versions:\n    rdb_loader: 0.14.0\n    rdb_shredder: 0.13.1        # Version of the Spark Shredding process\n    hadoop_elasticsearch: 0.1.0 # Version of the Hadoop to Elasticsearch copying process\nmonitoring:\n  tags: {} # Name-value pairs describing this job\n  logging:\n    level: DEBUG # You can optionally switch to INFO for production\n  snowplow:\n    method: get\n    app_id: ADD HERE # e.g. snowplow\n    collector: ADD HERE # e.g. d3rkrsqld9gmqf.cloudfront.net\n    protocol: http\n    port: 80\n')),(0,r.kt)("h3",{id:"aws"},"aws"),(0,r.kt)("h4",{id:"credentials"},"Credentials"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_access_key")," variables should be self-explanatory - enter your AWS access key and secret here."),(0,r.kt)("h4",{id:"s3"},"s3"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"region"),' variable should hold the AWS region in which your four data buckets (In Bucket, Processing Bucket etc) are located, e.g. "us-east-1" or "eu-west-1". Please note that Redshift can only load data from S3 buckets located in the same region as the Redshift instance, and Amazon has not to date launched Redshift in ',(0,r.kt)("em",{parentName:"p"},"every")," region. So make sure that if you're using Redshift, the bucket specified here is in a region that supports Redshift."),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," section, the ",(0,r.kt)("inlineCode",{parentName:"p"},"buckets")," variables are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets:")," holds the ETL job's static assets (HiveQL script plus Hive deserializer). You can leave this as-is (pointing to Snowplow Analytics' ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Hosted-assets"},"own public bucket containing these assets"),") or replace this with your own private bucket containing the assets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log:")," is the bucket in which Amazon EMR will record processing information for this job run, including logging any errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stream:")," is where you specify the paths for the snowplow-s3-loader to output enriched data on s3. ",(0,r.kt)("inlineCode",{parentName:"li"},"archive:")," is where your raw Snowplow events will be moved after they have been successfully processed by Elastic MapReduce"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enriched:")," is where you specify the paths through which your enriched Snowplow events will flow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shredded:")," is where you specify the paths through which your shredded types will flow")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"good:"),", ",(0,r.kt)("strong",{parentName:"p"},"always include a sub-folder on this variable (see below for why)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"good:")," specified here ",(0,r.kt)("strong",{parentName:"p"},"must")," be located in a region where Amazon has launched Redshift, because Redshift can only bulk load data from S3 that is located in the same region as the Redshift instance, and Redshift has not, to-date, been launched across all Amazon regions"),(0,r.kt)("p",null,"Each of the bucket variables must start with an S3 protocol - either ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"s3n://"),". Each variable can include a sub-folder within the bucket as required, and a trailing slash is optional."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bad:")," entries will store any raw Snowplow log lines which did not pass the enrichment or JSON validation, along with their validation errors. The ",(0,r.kt)("inlineCode",{parentName:"p"},"errors:")," entries will contain any raw Snowplow log lines which caused an unexpected error, but only if you set continue","_","on","_","unexpected","_","error to true (see below)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," there is a bug in Hive on Amazon EMR where Hive dies if you attempt to read or write data to the root of an S3 bucket. ",(0,r.kt)("strong",{parentName:"p"},"Therefore always specify a sub-folder (e.g. ",(0,r.kt)("inlineCode",{parentName:"strong"},"/events/"),") for the ",(0,r.kt)("inlineCode",{parentName:"strong"},"raw:processing"),", ",(0,r.kt)("inlineCode",{parentName:"strong"},"enriched:good")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"shredded:good")," locations.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example bucket settings")),(0,r.kt)("p",null,"Here is an example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"buckets:\n  assets: s3://snowplow-hosted-assets\n  log: s3n://my-snowplow-etl/logs/\n  stream: s3://my-data-bucket/output/of/s3/loader/running/sinking/enriched/data/in/kinesis\n  enriched:\n    good: s3://my-data-bucket/enriched/good\n    bad: s3://my-data-bucket/enriched/bad\n    errors: s3://my-data-bucket/enriched/errors\n    archive: s3://my-data-bucket/enriched/archive\n  shredded:\n    good: s3://my-data-bucket/shredded/good\n    bad: s3://my-data-bucket/shredded/bad\n    errors: s3://my-data-bucket/shredded/errors\n")),(0,r.kt)("p",null,"Please note that all buckets must exist prior to running EmrEtlRunner; trailing slashes are optional."),(0,r.kt)("h4",{id:"emr"},"emr"),(0,r.kt)("p",null,"The EmrEtlRunner makes use of Amazon Elastic Mapreduce (EMR) to process the raw log files and output the cleaned, enriched Snowplow events table."),(0,r.kt)("p",null,"This section of the config file is where we configure the operation of EMR. The variables with defaults can typically be left as-is, but you will need to set:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"region"),', which is the Amazon EC2 region in which the job should run, e.g. "us-east-1" or "eu-west-1"'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ec2_key_name"),", which is the name of the Amazon EC2 key that you set up in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/1-Installing-EmrEtlRunner#dependencies"},"Dependencies")," above")),(0,r.kt)("p",null,"Make sure that the EC2 key you specify belongs in the region you specify, or else EMR won't be able to find the key. ",(0,r.kt)("strong",{parentName:"p"},"It's strongly recommended that you choose the same Amazon region as your S3 buckets are located in.")),(0,r.kt)("p",null,"Since 6th April 2015, all new Elastic MapReduce users have been required to use IAM roles with EMR. You can leave the two ",(0,r.kt)("inlineCode",{parentName:"p"},"..._role")," fields as they are, however you must first create these default EMR roles using the AWS Command Line Interface (",(0,r.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/cli/latest/userguide/installing.html"},"installation-instructions"),"), like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ aws emr create-default-roles\n")),(0,r.kt)("p",null,"Additionally, fill in ",(0,r.kt)("strong",{parentName:"p"},"one")," of these two:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"placement"),", which is the Amazon EC2 region ",(0,r.kt)("strong",{parentName:"li"},"and"),' availability zone in which the job should run, e.g. "us-east-1a" or "eu-west-1b"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ec2_subnet_id"),", which is the ID of the Amazon EC2 subnet you want to run the job in")),(0,r.kt)("p",null,"You only need to set one of these (they are mutually exclusive settings), but you must set one."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"software:")," section lets you start up Lingual and/or HBase when you start up your Elastic MapReduce cluster. This is the configuration to start up both, specifying the versions to start:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'software:\n  hbase: "0.92.0"\n  lingual: "1.1"\n')),(0,r.kt)("h3",{id:"storage"},"storage"),(0,r.kt)("h4",{id:"versions"},"versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rdb_shredder"),": version of the RDB Shredder jar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rdb_loader"),": version of the RDB Loader jar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop_elasticsearch"),": version of the Hadoop Elasticsearch Sink")),(0,r.kt)("h3",{id:"monitoring"},"monitoring"),(0,r.kt)("p",null,"This section deals with metadata around the EmrEtlRunner and RDB Loader."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tags"),": a dictionary of name-value pairs describing the job"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logging"),": how verbose/chatty the log output from EmrEtlRunner should be.")),(0,r.kt)("h4",{id:"snowplow"},"snowplow"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow"),' section allows the ETL apps to send Snowplow events describing their own progress. To disable this internal tracking, remove the "snowplow" field from the configuration.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method"),': "get" or "post"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app_id"),": ID for the pipeline"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collector"),": Endpoint to which events should be sent")))}p.isMDXComponent=!0}}]);