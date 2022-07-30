"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[60834],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(87462),o=(t(67294),t(3905));const r={title:"Dataflow Runner",date:"2020-03-02",sidebar_position:100},l=void 0,i={unversionedId:"migrated/pipeline-components-and-applications/dataflow-runner/index",id:"migrated/pipeline-components-and-applications/dataflow-runner/index",title:"Dataflow Runner",description:"Dataflow Runner is a system for creating and running AWS EMR jobflow clusters and steps. It uses templated playbooks to define your cluster, and the Hadoop/Spark/et al jobs that you want to run.",source:"@site/docs/migrated/pipeline-components-and-applications/dataflow-runner/index.md",sourceDirName:"migrated/pipeline-components-and-applications/dataflow-runner",slug:"/migrated/pipeline-components-and-applications/dataflow-runner/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/dataflow-runner/",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Dataflow Runner",date:"2020-03-02",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Iglu Central Setup",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-central-setup/"},next:{title:"Snowplow Mini",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/"}},s={},u=[{value:"Installation",id:"installation",level:3},{value:"Cluster Configuration",id:"cluster-configuration",level:3},{value:"Playbook Configuration",id:"playbook-configuration",level:3},{value:"Templates",id:"templates",level:3},{value:"CLI Commands",id:"cli-commands",level:3},{value:"<code>up</code>: Launches a new EMR cluster",id:"up-launches-a-new-emr-cluster",level:4},{value:"<code>run</code>: Adds jobflow steps to a running EMR cluster",id:"run-adds-jobflow-steps-to-a-running-emr-cluster",level:4},{value:"<code>down</code>: Terminates a running EMR cluster",id:"down-terminates-a-running-emr-cluster",level:4},{value:"<code>run-transient</code>: Launches, runs and then terminates an EMR cluster",id:"run-transient-launches-runs-and-then-terminates-an-emr-cluster",level:4}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dataflow Runner is a system for creating and running ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/emr/"},"AWS EMR")," jobflow clusters and steps. It uses templated playbooks to define your cluster, and the Hadoop/Spark/et al jobs that you want to run."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Dataflow Runner binaries are available from the Github releases page.  "),(0,o.kt)("h3",{id:"cluster-configuration"},"Cluster Configuration"),(0,o.kt)("p",null,"A cluster configuration contains all of the information needed to create a new cluster which is ready to accept a playbook. Currently AWS EMR is the only supported data-flow fabric."),(0,o.kt)("p",null,"For the cluster template see:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/dataflow-runner/blob/master/config/cluster.json.sample"},"config/cluster.json.sample")),(0,o.kt)("h3",{id:"playbook-configuration"},"Playbook Configuration"),(0,o.kt)("p",null,"A playbook consists of one of more\xa0",(0,o.kt)("em",{parentName:"p"},"steps"),". Steps are added to the cluster and run in series."),(0,o.kt)("p",null,"For the playbook template see:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/dataflow-runner/blob/master/config/playbook.json.sample"},"config/playbook.json.sample")),(0,o.kt)("h3",{id:"templates"},"Templates"),(0,o.kt)("p",null,"Configuration files are run through Golang\u2019s\xa0",(0,o.kt)("a",{parentName:"p",href:"http://golang.org/pkg/text/template/"},"text template processor"),". The template processor can access all\xa0",(0,o.kt)("em",{parentName:"p"},"variables"),"\xa0defined on the command line using the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--vars"),"\xa0argument."),(0,o.kt)("p",null,"For example to use the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--vars"),"\xa0argument with a playbook step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type": "CUSTOM_JAR",\n  "name": "Combine Months",\n  "actionOnFailure": "CANCEL_AND_WAIT",\n  "jar": "s3://snowplow-hosted-assets/3-enrich/hadoop-event-recovery/snowplow-hadoop-event-recovery-0.2.0.jar",\n  "arguments": [\n    "com.snowplowanalytics.hadoop.scalding.SnowplowEventRecoveryJob",\n    "--hdfs",\n    "--input",\n    "hdfs:///local/monthly/{{.inputVariable}}",\n    "--output",\n    "hdfs:///local/recovery/{{.outputVariable}}"\n  ]\n}\n')),(0,o.kt)("p",null,"You would then pass the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"host> ./dataflow-runner run --emr-playbook ${emr-playbook-path} --emr-cluster j-2DPBXD87LSGP9 --vars inputVariable,input,outputVariable,output\n")),(0,o.kt)("p",null,"This would resolve to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type": "CUSTOM_JAR",\n  "name": "Combine Months",\n  "actionOnFailure": "CANCEL_AND_WAIT",\n  "jar": "s3://snowplow-hosted-assets/3-enrich/hadoop-event-recovery/snowplow-hadoop-event-recovery-0.2.0.jar",\n  "arguments": [\n    "com.snowplowanalytics.hadoop.scalding.SnowplowEventRecoveryJob",\n    "--hdfs",\n    "--input",\n    "hdfs:///local/monthly/input",\n    "--output",\n    "hdfs:///local/recovery/output"\n  ]\n}\n')),(0,o.kt)("p",null,"The following custom functions are also supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nowWithFormat\xa0[timeFormat]"),": where\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"timeFormat"),"\xa0is a valid Golang\xa0",(0,o.kt)("a",{parentName:"li",href:"http://golang.org/pkg/time/#Time.Format"},"time format")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeWithFormat\xa0[epoch]\xa0[timeFormat]"),": where\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"epoch"),"\xa0is the number of seconds elapsed between January 1st 1970 and a certain point in time as a string and\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"timeFormat"),"\xa0is valid Golang\xa0",(0,o.kt)("a",{parentName:"li",href:"http://golang.org/pkg/time/#Time.Format"},"time format")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'systemEnv\xa0"ENV_VAR"'),": where\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"ENV_VAR"),"\xa0is a key for a valid environment variable"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base64\xa0[string]"),": will base64-encode the string passed as argument"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'base64File\xa0"path/to/file.txt"'),": will base64-encode the content of the file located at the path passed as argument")),(0,o.kt)("h3",{id:"cli-commands"},"CLI Commands"),(0,o.kt)("p",null,"There are several commands that can be used to manage your data-flow fabric."),(0,o.kt)("h4",{id:"up-launches-a-new-emr-cluster"},(0,o.kt)("inlineCode",{parentName:"h4"},"up"),": Launches a new EMR cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME:\n   dataflow-runner up - Launches a new EMR cluster\n\nUSAGE:\n   dataflow-runner up [command options] [arguments...]\n\nOPTIONS:\n   --emr-config value  EMR config path\n   --vars value        Variables that will be used by the templater\n")),(0,o.kt)("p",null,"This command will launch a new cluster ready for step execution, the output should look something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME:\n   dataflow-runner run - Adds jobflow steps to a running EMR cluster\n\nUSAGE:\n   dataflow-runner run [command options] [arguments...]\n\nOPTIONS:\n   --emr-playbook value  Playbook path\n   --emr-cluster value   Jobflow ID\n   --async               Asynchronous execution of the jobflow steps\n   --lock value          Path to the lock held for the duration of the jobflow steps. This is materialized by a file or a KV entry in Consul depending on the --consul flag.\n   --softLock value      Path to the lock held for the duration of the jobflow steps. This is materialized by a file or a KV entry in Consul depending on the --consul flag. Released no matter if the operation failed or succeeded.\n   --consul value        Address of the Consul server used for distributed locking\n   --vars value          Variables that will be used by the templater\n")),(0,o.kt)("h4",{id:"run-adds-jobflow-steps-to-a-running-emr-cluster"},(0,o.kt)("inlineCode",{parentName:"h4"},"run"),": Adds jobflow steps to a running EMR cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"host> ./dataflow-runner up --emr-config ${emr-config-path}\nINFO[0001] Launching EMR cluster with name 'dataflow-runner - sample name'...\nINFO[0001] EMR cluster is in state STARTING - need state WAITING, checking again in 20 seconds...\nINFO[0021] EMR cluster is in state STARTING - need state WAITING, checking again in 20 seconds...\n# this goes for a few lines, omitted for brevity\nINFO[0227] EMR cluster is in state STARTING - need state WAITING, checking again in 20 seconds...\nINFO[0248] EMR cluster is in state BOOTSTRAPPING - need state WAITING, checking again in 20 seconds...\nINFO[0269] EMR cluster is in state BOOTSTRAPPING - need state WAITING, checking again in 20 seconds...\nINFO[0289] EMR cluster is in state BOOTSTRAPPING - need state WAITING, checking again in 20 seconds...\nINFO[0310] EMR cluster launched successfully; Jobflow ID: j-2DPBXD87LSGP9\n")),(0,o.kt)("p",null,"This command adds new steps to the already running cluster. By default this command is blocking - however if you wish to submit and forget simply supply the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--async"),"\xa0argument, the output should look something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"host> ./dataflow-runner run --emr-playbook ${emr-playbook-path} --emr-cluster j-2DPBXD87LSGP9\nINFO[0310] Successfully added 2 steps to the EMR cluster with jobflow id 'j-2DPBXD87LSGP9'...\nERRO[0357] Step 'Combine Months' with id 's-9WZ0VFKC770J' was FAILED\nERRO[0358] Step 'Combine Months 2' with id 's-37F9PKSXBHDAU' was CANCELLED\nERRO[0358] 2/2 steps failed to complete successfully\n")),(0,o.kt)("p",null,"In this case my first step failed which meant that my second step was cancelled. This behaviour is dependent on your\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"actionOnFailure"),"\xa0- you can choose either to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u201cCANCEL","_","AND","_","WAIT\u201d: This will cancel all other currently queued jobs and return the cluster to a waiting state ready for new job submissions."),(0,o.kt)("li",{parentName:"ol"},"\u201cCONTINUE\u201d: This will go to the next step regardless if it failed or not.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": We have removed the ability to terminate the job flow on failure, to terminate you will need to use the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"down"),"\xa0command."),(0,o.kt)("p",null,"Additionally, Dataflow Runner can acquire a lock before starting the job which can prevent other jobs from running at the same time. Its release will happen when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the job has terminated (whether successfully or with failure) with the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"--softLock"),"\xa0flag"),(0,o.kt)("li",{parentName:"ul"},"the job has succeeded with the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"--lock"),"\xa0flag (\u201chard lock\u201d)")),(0,o.kt)("p",null,"As the above implies, if a job were to fail and the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--lock"),"\xa0flag was used, manual cleaning of the lock will be required."),(0,o.kt)("p",null,"Additionally, supplying a\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.consul.io/"},"Consul"),"\xa0address, through the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--consul"),"\xa0flag will make this lock distributed."),(0,o.kt)("p",null,"When the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--consul"),"\xa0flag is used, the lock will be materialized by a key-value pair in Consul for which the key is the value supplied with the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--lock"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--softLock"),"\xa0argument. Otherwise, it will be materialized by a file on the machine located at the specified path (either relative to your working directory or absolute)."),(0,o.kt)("h4",{id:"down-terminates-a-running-emr-cluster"},(0,o.kt)("inlineCode",{parentName:"h4"},"down"),": Terminates a running EMR cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME:\n   dataflow-runner down - Terminates a running EMR cluster\n\nUSAGE:\n   dataflow-runner down [command options] [arguments...]\n\nOPTIONS:\n   --emr-config value   EMR config path\n   --emr-cluster value  Jobflow ID\n   --vars value         Variables that will be used by the templater\n")),(0,o.kt)("p",null,"When you are done with the EMR cluster you can terminate it by using the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"down"),"\xa0command. This takes the original emr configuration and the job flow id to then go and terminate the cluster, the output should look something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"host> ./dataflow-runner down --emr-config ${emr-config-path} --emr-cluster j-2DPBXD87LSGP9\nINFO[0358] Terminating EMR cluster with jobflow id 'j-2DPBXD87LSGP9'...\nINFO[0358] EMR cluster is in state TERMINATING - need state TERMINATED, checking again in 20 seconds...\nINFO[0378] EMR cluster is in state TERMINATING - need state TERMINATED, checking again in 20 seconds...\nINFO[0399] EMR cluster is in state TERMINATING - need state TERMINATED, checking again in 20 seconds...\nINFO[0420] EMR cluster is in state TERMINATING - need state TERMINATED, checking again in 20 seconds...\nINFO[0440] Transient EMR run completed successfully\n")),(0,o.kt)("h4",{id:"run-transient-launches-runs-and-then-terminates-an-emr-cluster"},(0,o.kt)("inlineCode",{parentName:"h4"},"run-transient"),": Launches, runs and then terminates an EMR cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME:\n   dataflow-runner run-transient - Launches, runs and then terminates an EMR cluster\n\nUSAGE:\n   dataflow-runner run-transient [command options] [arguments...]\n\nOPTIONS:\n   --emr-config value    EMR config path\n   --emr-playbook value  Playbook path\n   --lock value          Path to the lock held for the duration of the jobflow steps. This is materialized by a file or a KV entry in Consul depending on the --consul flag.\n   --softLock value      Path to the lock held for the duration of the jobflow steps. This is materialized by a file or a KV entry in Consul depending on the --consul flag. Released no matter if the operation failed or succeeded.\n   --consul value        Address of the Consul server used for distributed locking\n   --vars value          Variables that will be used by the templater\n")),(0,o.kt)("p",null,"This command is a combination of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"up"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"run"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"down"),"\xa0which is designed to mimic the current\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"EmrEtlRunner"),"\xa0behaviour."))}c.isMDXComponent=!0}}]);