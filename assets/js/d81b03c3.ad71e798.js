"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[92037],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const l={title:"Setup guide for AWS",date:"2020-04-03",sidebar_position:10},r=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/setup-guide-for-aws/index",id:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/setup-guide-for-aws/index",title:"Setup guide for AWS",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/setup-guide-for-aws/index.md",sourceDirName:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/setup-guide-for-aws",slug:"/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/setup-guide-for-aws/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/setup-guide-for-aws/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:10,frontMatter:{title:"Setup guide for AWS",date:"2020-04-03",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Snowplow Mini 0.7.0",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/"},next:{title:"Setup guide for GCP",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-7-0/setup-guide-for-gcp/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"large &amp; xlarge &amp; xxlarge",id:"large--xlarge--xxlarge",level:3},{value:"2. Security Group",id:"2-security-group",level:2},{value:"Choose AMI",id:"choose-ami",level:2},{value:"Choose Instance Type",id:"choose-instance-type",level:2},{value:"Configure Instance",id:"configure-instance",level:2},{value:"Add Storage",id:"add-storage",level:2},{value:"Tag Instance",id:"tag-instance",level:2},{value:"Configure Security Group",id:"configure-security-group",level:2},{value:"Review",id:"review",level:2}],d={toc:s};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,i.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,i.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates (because they can)")),(0,i.kt)("p",null,"All setup for Snowplow Mini is done within the AWS Console and will incur small amounts of running costs, depending on the size of the EC2 instance you select."),(0,i.kt)("p",null,"As of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0"),", we offer 3 different images for 3 new sizes of Snowplow Mini."),(0,i.kt)("p",null,"To decide on which size of Snowplow Mini to choose, read on."),(0,i.kt)("h3",{id:"large--xlarge--xxlarge"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow-mini/wiki/Setup-guide-AWS---0.7.0#large--xlarge--xxlarge"}),"large & xlarge & xxlarge"),(0,i.kt)("p",null,"Until\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0"),", Snowplow Mini was being used inside AWS\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.medium"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"n1-standard-1"),"\xa0in GCP, instances and it served well for demonstration purposes. However, we observed that Snowplow Mini started exceeding its initial motivation and machine resources started to become an obstacle, causing issues with Elasticsearch etc. This is why, Mini is available at 3 different sizes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"large"),"\xa0: Same image published so far. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"4g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"8g"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xlarge"),"\xa0: Double the large image. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"8g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"1.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16g"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xxlarge"),"\xa0: Double the xlarge image. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"32g"),".")),(0,i.kt)("p",null,"This service is available as an EC2 image within the AWS Community AMIs in the following regions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"large / t2.large"),(0,i.kt)("th",{parentName:"tr",align:null},"xlarge / t2.xlarge"),(0,i.kt)("th",{parentName:"tr",align:null},"xxlarge / t2.xxlarge"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07aedde9dbeefb9a7"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0b72120a9d7bbb413"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0adf90839e6330282")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0648f9de8fc7c78c0"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-029c44a306e4098fc"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06d7cd7be93da12a4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-08cf21ce174d481c9"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-081c0565fc4431330"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-094cd27ae29e63a52")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0f41618d3d5769b30"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-08064df67208222b1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-083140bf1b3584f11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0c74122ff324fa86e"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0383b75aca7cbc4ae"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-011ec488c547c2543")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07b9f435caccbad41"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0c61087ae21a3ad3e"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-04c34d1c0a1628430")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0b63b27aed541dcc0"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-088c1e179abfbeddd"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00642a95f4cb99eca")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-04b2fa5cd2e5ad577"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0efecda7f499952a2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0a19683c4c8ac6803")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0f88606f10c70fc1f"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0d3d471a4862d6c74"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0da86d131f1c64207")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06e2d15f306ca7045"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-011309eabdd743130"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-090cf1fcaf3c3f7f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0d453aaffc4bdcae9"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-01e8ab8ef11662b13"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-04e6b1d3001059be0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-08e5a952a8acddf46"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0a42fe0b03531cb00"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0eaaf4734f2e05449")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0893ac7704f84584b"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0d907127224d69125"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-017cc753cc383f97f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0328c13766c13d1f1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-09f24411724187566"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00b5772148c981bf4")))),(0,i.kt)("p",null,"The software stack installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 0.13.0"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 0.21.0"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 0.10.2"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.3.0"),(0,i.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.3.1"),(0,i.kt)("li",{parentName:"ul"},"Kibana-OSS 6.3.1"),(0,i.kt)("li",{parentName:"ul"},"Postgresql 9.5"),(0,i.kt)("li",{parentName:"ul"},"NSQ v1.0.0-compat")),(0,i.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,i.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"snowplow-mini-topology",src:a(86602).Z,width:"1051",height:"686"})),(0,i.kt)("h2",{id:"2-security-group"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow-mini/wiki/Setup-guide-AWS---0.7.0#2-security-group"}),"2","."," Security Group"),(0,i.kt)("p",null,"In the EC2 Console UI select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Security Groups"),"\xa0from the panel on the left."),(0,i.kt)("p",null,"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Create Security Group"),"\xa0button and fill in the name, description and what VPC you want to attach it to."),(0,i.kt)("p",null,"You will then need to add the following InBound rules:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"snowplow-mini-security-group-setup",src:a(79157).Z,width:"1366",height:"768"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (80)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (443)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,i.kt)("li",{parentName:"ul"},"SSH (optional):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (22)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"{{ YOUR IP HERE }}/32"))))),(0,i.kt)("p",null,"For OutBound you can leave the default to allow everything out."),(0,i.kt)("h2",{id:"choose-ami"},"Choose AMI"),(0,i.kt)("p",null,"In the EC2 Console UI select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Launch Instance"),"\xa0button then select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Community AMIs"),"\xa0button. In the search bar enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"snowplow-mini-0.7.0"),"\xa0to find the needed AMI and then select it."),(0,i.kt)("h2",{id:"choose-instance-type"},"Choose Instance Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0.7.0"),"\xa0AMI names expilicitly specifies which instance type to use."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0.7.0-large"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.large"),"\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.7.0-xlarge"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.xlarge"),"\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.7.0-xxlarge"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.2xlarge")),(0,i.kt)("h2",{id:"configure-instance"},"Configure Instance"),(0,i.kt)("p",null,"If you created your Security Group in a different VPC than the default you will need to select the same VPC in the Network field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": If you select a custom VPC ensure that you select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Enable"),"\xa0for the Auto-assign Public IP option."),(0,i.kt)("h2",{id:"add-storage"},"Add Storage"),(0,i.kt)("p",null,"Depending on how long you intend to run Snowplow Mini and how much data you intend to send/store you will need to change the size of the block store accordingly."),(0,i.kt)("p",null,"For basic testing and debugging;"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"20-50 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"large")),(0,i.kt)("li",{parentName:"ul"},"50-100 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,i.kt)("li",{parentName:"ul"},"100-200 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"xxlarge"))),(0,i.kt)("p",null,"We also recommend changing the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Volume Type"),"\xa0to GP2 from Magnetic for a smoother experience."),(0,i.kt)("h2",{id:"tag-instance"},"Tag Instance"),(0,i.kt)("p",null,"Add any tags you like here."),(0,i.kt)("h2",{id:"configure-security-group"},"Configure Security Group"),(0,i.kt)("p",null,"Select the Security Group you created in Step 2."),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("p",null,"Press the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Launch"),"\xa0button and select an existing key-pair, or create a new one, if you want to be able to SSH onto the box."))}u.isMDXComponent=!0},79157:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-groups-setup-8ceb1ae04baae89e38972cd4a38b0bde.png"},86602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);