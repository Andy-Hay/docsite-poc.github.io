"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[81027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const l={title:"Setup guide for AWS",date:"2020-04-03",sidebar_position:10},r=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/setup-guide-for-aws/index",id:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/setup-guide-for-aws/index",title:"Setup guide for AWS",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/setup-guide-for-aws/index.md",sourceDirName:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/setup-guide-for-aws",slug:"/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/setup-guide-for-aws/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/setup-guide-for-aws/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Setup guide for AWS",date:"2020-04-03",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Snowplow Mini 0.6.3",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/"},next:{title:"Setup guide for GCP",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/setup-guide-for-gcp/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"large &amp; xlarge &amp; xxlarge",id:"large--xlarge--xxlarge",level:3},{value:"Security Group",id:"security-group",level:2},{value:"Choose AMI",id:"choose-ami",level:2},{value:"Choose Instance Type",id:"choose-instance-type",level:2},{value:"Configure Instance",id:"configure-instance",level:2},{value:"Add Storage",id:"add-storage",level:2},{value:"Tag Instance",id:"tag-instance",level:2},{value:"Configure Security Group",id:"configure-security-group",level:2},{value:"Review",id:"review",level:2}],d={toc:s};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,i.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,i.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates (because they can)")),(0,i.kt)("p",null,"All setup for Snowplow Mini is done within the AWS Console and will incur small amounts of running costs, depending on the size of the EC2 instance you select."),(0,i.kt)("p",null,"As of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0"),", we offer 3 different images for 3 new sizes of Snowplow Mini."),(0,i.kt)("p",null,"To decide on which size of Snowplow Mini to choose, read on."),(0,i.kt)("h3",{id:"large--xlarge--xxlarge"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow-mini/wiki/Setup-guide-AWS---0.6.3#large--xlarge--xxlarge"}),"large & xlarge & xxlarge"),(0,i.kt)("p",null,"Until\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0"),", Snowplow Mini was being used inside AWS\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.medium"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"n1-standard-1"),"\xa0in GCP, instances and it served well for demonstration purposes. However, we observed that Snowplow Mini started exceeding its initial motivation and machine resources started to become an obstacle, causing issues with Elasticsearch etc. This is why, Mini is available at 3 different sizes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"large"),"\xa0: Same image published so far. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"4g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"8g"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xlarge"),"\xa0: Double the large image. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"8g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"1.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16g"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xxlarge"),"\xa0: Double the xlarge image. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"32g"),".")),(0,i.kt)("p",null,"This service is available as an EC2 image within the AWS Community AMIs in the following regions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"large / t2.large"),(0,i.kt)("th",{parentName:"tr",align:null},"xlarge / t2.xlarge"),(0,i.kt)("th",{parentName:"tr",align:null},"xxlarge / t2.xxlarge"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0e9b9bd42ca09c47d"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-088f63064ae27e920"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06b807ee13254e7e3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0a3f996541189232a"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0f9591113ea13cbb2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0b8f16f39965a8894")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-036c4db5fcffb439c"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-070475e7e88254e32"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00f5d973dc0af8d1d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-09b2512c653e5eb02"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0b01cb3e838758f72"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0ec723990092f2246")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-04160000840212f3e"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-05649443fc8e86935"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-01f580423d5e844f5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-048d9caee988189ce"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0a1705657ecc581bd"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-03ad1ade8ff719b17")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0fa92e73e24e205d4"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-031f91edd2f07490c"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0b55d0b05e033a0ea")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-03585406c7bd3d489"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0a70a603b8bd5fa72"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0039be6f1b2bbff84")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0365093be7dd4a999"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07c57b538aff81a45"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0d69fbe2bb7b21856")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0942c89e98d7d0fad"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07ee36bce37ddb410"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-03fada9b4b747a0a6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0f5c1eefc5095352b"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00f7e589539525078"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0301867ccd506c804")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0ffc7c3d2e2087b11"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00cae007cf47b051e"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07f34334697cf5a26")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0977120803f37b8a0"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06f88d63be0e0697c"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-08531dc51d3b5fd88")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0a5f4c3eb1f3987d2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-03cd743821a119182"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-05ba7aad350c8852c")))),(0,i.kt)("p",null,"The software stack installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 0.13.0"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 0.21.0"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 0.10.2"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.3.0"),(0,i.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.3.1"),(0,i.kt)("li",{parentName:"ul"},"Kibana-OSS 6.3.1"),(0,i.kt)("li",{parentName:"ul"},"Postgresql 9.5"),(0,i.kt)("li",{parentName:"ul"},"NSQ v1.0.0-compat")),(0,i.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,i.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"snowplow-mini-topology",src:a(68427).Z,width:"1051",height:"686"})),(0,i.kt)("h2",{id:"security-group"},"Security Group"),(0,i.kt)("p",null,"In the EC2 Console UI select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Security Groups"),"\xa0from the panel on the left."),(0,i.kt)("p",null,"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Create Security Group"),"\xa0button and fill in the name, description and what VPC you want to attach it to."),(0,i.kt)("p",null,"You will then need to add the following InBound rules:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"snowplow-mini-security-group-setup",src:a(89784).Z,width:"1366",height:"768"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (80)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (443)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,i.kt)("li",{parentName:"ul"},"SSH (optional):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (22)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"{{ YOUR IP HERE }}/32"))))),(0,i.kt)("p",null,"For OutBound you can leave the default to allow everything out."),(0,i.kt)("h2",{id:"choose-ami"},"Choose AMI"),(0,i.kt)("p",null,"In the EC2 Console UI select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Launch Instance"),"\xa0button then select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Community AMIs"),"\xa0button. In the search bar enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"snowplow-mini-0.6.3"),"\xa0to find the needed AMI and then select it."),(0,i.kt)("h2",{id:"choose-instance-type"},"Choose Instance Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0.6.3"),"\xa0AMI names expilicitly specifies which instance type to use."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0.6.3-large"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.large"),"\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.3-xlarge"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.xlarge"),"\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.3-xxlarge"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.2xlarge")),(0,i.kt)("h2",{id:"configure-instance"},"Configure Instance"),(0,i.kt)("p",null,"If you created your Security Group in a different VPC than the default you will need to select the same VPC in the Network field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": If you select a custom VPC ensure that you select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Enable"),"\xa0for the Auto-assign Public IP option."),(0,i.kt)("h2",{id:"add-storage"},"Add Storage"),(0,i.kt)("p",null,"Depending on how long you intend to run Snowplow Mini and how much data you intend to send/store you will need to change the size of the block store accordingly."),(0,i.kt)("p",null,"For basic testing and debugging;"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"20-50 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"large")),(0,i.kt)("li",{parentName:"ul"},"50-100 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,i.kt)("li",{parentName:"ul"},"100-200 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"xxlarge"))),(0,i.kt)("p",null,"We also recommend changing the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Volume Type"),"\xa0to GP2 from Magnetic for a smoother experience."),(0,i.kt)("h2",{id:"tag-instance"},"Tag Instance"),(0,i.kt)("p",null,"Add any tags you like here."),(0,i.kt)("h2",{id:"configure-security-group"},"Configure Security Group"),(0,i.kt)("p",null,"Select the Security Group you created in Step 2."),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("p",null,"Press the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Launch"),"\xa0button and select an existing key-pair, or create a new one, if you want to be able to SSH onto the box."))}u.isMDXComponent=!0},89784:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-groups-setup-8ceb1ae04baae89e38972cd4a38b0bde.png"},68427:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);