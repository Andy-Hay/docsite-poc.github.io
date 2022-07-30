"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[93908],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=l,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={title:"Setup Guide for AWS",date:"2021-05-11",sidebar_position:-10},r=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws/index",id:"migrated/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws/index",title:"Setup Guide for AWS",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws/index.md",sourceDirName:"migrated/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws",slug:"/migrated/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws/",draft:!1,tags:[],version:"current",sidebarPosition:-10,frontMatter:{title:"Setup Guide for AWS",date:"2021-05-11",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Control Plane API",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/control-plane-api/"},next:{title:"Setup Guide for GCP",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/setup-guide-for-gcp/"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"large &amp; xlarge &amp; xxlarge",id:"large--xlarge--xxlarge",level:3},{value:"Security Group",id:"security-group",level:2},{value:"Choose AMI",id:"choose-ami",level:2},{value:"Choose Instance Type",id:"choose-instance-type",level:2},{value:"Configure Instance",id:"configure-instance",level:2},{value:"Add Storage",id:"add-storage",level:2},{value:"Tag Instance",id:"tag-instance",level:2},{value:"Configure Security Group",id:"configure-security-group",level:2},{value:"Review",id:"review",level:2}],m={toc:d};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,l.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,l.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates")),(0,l.kt)("p",null,"All setup for Snowplow Mini is done within the AWS Console and will incur small amounts of running costs, depending on the size of the EC2 instance you select."),(0,l.kt)("p",null,"We offer Snowplow Mini in 3 different sizes. To decide on which size of Snowplow Mini to choose, read on."),(0,l.kt)("h3",{id:"large--xlarge--xxlarge"},"large & xlarge & xxlarge"),(0,l.kt)("p",null,"Until ",(0,l.kt)("inlineCode",{parentName:"p"},"0.6.0"),", Snowplow Mini was being used inside AWS\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"t2.medium"),",\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n1-standard-1"),"\xa0in GCP, instances and it served well for demonstration purposes. However, we observed that Snowplow Mini started exceeding its initial motivation and machine resources started to become an obstacle, causing issues with Elasticsearch etc. This is why, Mini is available at 3 different sizes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"large"),"\xa0: Same image published so far. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"4g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"8g"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xlarge"),"\xa0: Double the large image. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"8g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"1.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"16g"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xxlarge"),"\xa0: Double the xlarge image. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"16g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"3g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"32g"),".")),(0,l.kt)("p",null,"This service is available as an EC2 image within the AWS Community AMIs in the following regions:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#tab-v0140"},"v0.14.0"),(0,l.kt)("a",{parentName:"p",href:"#tab-0141-recommended"},"0.14.1 (Recommended)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"x"),(0,l.kt)("th",{parentName:"tr",align:null},"large / t2.large"),(0,l.kt)("th",{parentName:"tr",align:null},"xlarge / t2.xlarge"),(0,l.kt)("th",{parentName:"tr",align:null},"xxlarge / t2.xxlarge"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0699981675ed9c999"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-052d2961881572b1c"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0830ef1492f21619c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-01b7ff49f875c81b8"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-026db46f90551456d"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-017322572dc921b27")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0ef4b9fbc0ff690ba"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-067b623a0216e1e44"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-05a6488a6bcff8284")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0feda6596272eca7f"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00a90053879a821d4"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00ec336f4855596dd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0588f96c4863ffe0a"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c610428ba781090e"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0b692272c582a3eb8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03b4c06845bf1eba1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0ab6a6999bf1d6d2e"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-02d422ca47f0dfbc7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0549a2f67320524a3"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0dff8d91520c7fa25"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c35885318c16d662")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-020cf106511665857"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0e10f2f3407d8d4c5"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-02799220aac034fd3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03bb6cea6158aed2d"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-064f02a9989c461ad"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-08a2d46db6cdfbd65")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0099a70b2f9890cb8"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c95ab97669b9c637"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0127389c36e1db013")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0697c73ca0f870443"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-077617d1114766f26"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-010d69261c5646db6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0296ed3f8cdd53d74"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-08ffe776fcf2a038e"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0e0386a0b1d15bd1c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-031de8095ebc535ee"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0bb614a0f3a39a260"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c42abafd5bf4a4a9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f02a9ced0c909656"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-05dec128295c05ee9"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-04c8d25c2a9dd0499")))),(0,l.kt)("p",null,"The software stack installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 2.6.0"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 3.0.2"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 1.0.4"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.8.4"),(0,l.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.8.23"),(0,l.kt)("li",{parentName:"ul"},"Kibana-OSS 6.8.20"),(0,l.kt)("li",{parentName:"ul"},"Postgresql 14.2"),(0,l.kt)("li",{parentName:"ul"},"NSQ v1.2.1")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"x"),(0,l.kt)("th",{parentName:"tr",align:null},"large / t2.large"),(0,l.kt)("th",{parentName:"tr",align:null},"xlarge / t2.xlarge"),(0,l.kt)("th",{parentName:"tr",align:null},"xxlarge / t2.xxlarge"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0699981675ed9c999"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-052d2961881572b1c"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0830ef1492f21619c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-01b7ff49f875c81b8"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-026db46f90551456d"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-017322572dc921b27")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0ef4b9fbc0ff690ba"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-067b623a0216e1e44"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-05a6488a6bcff8284")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0feda6596272eca7f"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00a90053879a821d4"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00ec336f4855596dd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0588f96c4863ffe0a"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c610428ba781090e"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0b692272c582a3eb8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03b4c06845bf1eba1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0ab6a6999bf1d6d2e"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-02d422ca47f0dfbc7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0549a2f67320524a3"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0dff8d91520c7fa25"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c35885318c16d662")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-020cf106511665857"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0e10f2f3407d8d4c5"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-02799220aac034fd3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03bb6cea6158aed2d"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-064f02a9989c461ad"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-08a2d46db6cdfbd65")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0099a70b2f9890cb8"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c95ab97669b9c637"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0127389c36e1db013")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0697c73ca0f870443"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-077617d1114766f26"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-010d69261c5646db6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0296ed3f8cdd53d74"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-08ffe776fcf2a038e"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0e0386a0b1d15bd1c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-031de8095ebc535ee"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0bb614a0f3a39a260"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c42abafd5bf4a4a9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f02a9ced0c909656"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-05dec128295c05ee9"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-04c8d25c2a9dd0499")))),(0,l.kt)("p",null,"The software stack installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 2.6.0"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 3.0.2"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 1.0.4"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.8.4"),(0,l.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.8.23"),(0,l.kt)("li",{parentName:"ul"},"Kibana-OSS 6.8.20"),(0,l.kt)("li",{parentName:"ul"},"Postgresql 14.2"),(0,l.kt)("li",{parentName:"ul"},"NSQ v1.2.1")),(0,l.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,l.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"This image has an empty alt attribute; its file name is snowplow-mini-topology.jpg",src:a(55172).Z,width:"1051",height:"686"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IAM")),(0,l.kt)("p",null,"Create a role with the following configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 1: For ",(0,l.kt)("inlineCode",{parentName:"li"},"Select type of trusted entity")," , select ",(0,l.kt)("inlineCode",{parentName:"li"},"EC2")),(0,l.kt)("li",{parentName:"ul"},"Step 2.1: For ",(0,l.kt)("inlineCode",{parentName:"li"},"Attach permissions policies")," , create a policy with the following")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "Version" : "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "s3:GetObject",\n        "logs:CreateLogStream",\n        "logs:PutLogEvents"\n      ],\n      "Resource": ["*"]\n    }\n  ]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 2.2: In step 2 of role creation, select the policy created in the previous step"),(0,l.kt)("li",{parentName:"ul"},"Step 3: Tags are optional"),(0,l.kt)("li",{parentName:"ul"},"Step 4: Fill in the role name and create it.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CloudWatch")),(0,l.kt)("p",null,"Create a log group named ",(0,l.kt)("inlineCode",{parentName:"p"},"snowplow-mini")," so that Mini can emit logs to this log group."),(0,l.kt)("p",null,"Mini will not function properly if a log group with that name isn't found."),(0,l.kt)("h2",{id:"security-group"},"Security Group"),(0,l.kt)("p",null,"In the EC2 Console UI select\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Security Groups"),"\xa0from the panel on the left."),(0,l.kt)("p",null,"Select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Create Security Group"),"\xa0button and fill in the name, description and what VPC you want to attach it to."),(0,l.kt)("p",null,"You will then need to add the following InBound rules:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"snowplow-mini-security-group-setup",src:a(44495).Z,width:"1366",height:"768"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (80)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (443)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,l.kt)("li",{parentName:"ul"},"SSH (optional):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (22)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"{{ YOUR IP HERE }}/32"))))),(0,l.kt)("p",null,"For OutBound you can leave the default to allow everything out."),(0,l.kt)("h2",{id:"choose-ami"},"Choose AMI"),(0,l.kt)("p",null,"In the EC2 Console UI select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Launch Instance"),"\xa0button then select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Community AMIs"),"\xa0button. In the search bar enter\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"snowplow-mini-0."),"14.0\xa0to find the needed AMI and then select it."),(0,l.kt)("h2",{id:"choose-instance-type"},"Choose Instance Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0.14.0"),"\xa0AMI names explicitly specifies which instance type to use."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.14.0-large"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.large")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.14.0-xlarge"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.xlarge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.14.0-xxlarge"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.2xlarge"))),(0,l.kt)("h2",{id:"configure-instance"},"Configure Instance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select the IAM role created above.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If you created your Security Group in a different VPC than the default you will need to select the same VPC in the Network field."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": If you select a custom VPC ensure that you select\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Enable"),"\xa0for the Auto-assign Public IP option."),(0,l.kt)("h2",{id:"add-storage"},"Add Storage"),(0,l.kt)("p",null,"Depending on how long you intend to run Snowplow Mini and how much data you intend to send/store you will need to change the size of the block store accordingly."),(0,l.kt)("p",null,"For basic testing and debugging;"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"20-50 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"large")),(0,l.kt)("li",{parentName:"ul"},"50-100 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,l.kt)("li",{parentName:"ul"},"100-200 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"xxlarge"))),(0,l.kt)("p",null,"We also recommend changing the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Volume Type"),"\xa0to GP2 from Magnetic for a smoother experience."),(0,l.kt)("h2",{id:"tag-instance"},"Tag Instance"),(0,l.kt)("p",null,"Add any tags you like here."),(0,l.kt)("h2",{id:"configure-security-group"},"Configure Security Group"),(0,l.kt)("p",null,"Select the Security Group you created in Step 2."),(0,l.kt)("h2",{id:"review"},"Review"),(0,l.kt)("p",null,"Press the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Launch"),"\xa0button and select an existing key-pair, or create a new one, if you want to be able to SSH into the box."))}u.isMDXComponent=!0},44495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-groups-setup-8ceb1ae04baae89e38972cd4a38b0bde.png"},55172:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);