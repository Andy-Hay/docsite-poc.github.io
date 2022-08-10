"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[87009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={title:"Setup Guide for GCP",date:"2021-02-19",sidebar_position:-10},r=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/setup-guide-for-gcp/index",id:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/setup-guide-for-gcp/index",title:"Setup Guide for GCP",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/setup-guide-for-gcp/index.md",sourceDirName:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/setup-guide-for-gcp",slug:"/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/setup-guide-for-gcp/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/setup-guide-for-gcp/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:-10,frontMatter:{title:"Setup Guide for GCP",date:"2021-02-19",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Setup Guide for AWS",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/setup-guide-for-aws/"},next:{title:"Usage Guide",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-2/usage-guide/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Importing public tarballs to a GCP project",id:"importing-public-tarballs-to-a-gcp-project",level:2},{value:"large &amp; xlarge &amp; xxlarge",id:"large--xlarge--xxlarge",level:3},{value:"Create instance",id:"create-instance",level:2}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,o.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,o.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates (because they can)")),(0,o.kt)("p",null,"The software stack installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 2.1.0"),(0,o.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 1.4.1"),(0,o.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 1.0.0"),(0,o.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.6.1"),(0,o.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.8.9"),(0,o.kt)("li",{parentName:"ul"},"Kibana-OSS 6.8.9"),(0,o.kt)("li",{parentName:"ul"},"Postgresql 9.5"),(0,o.kt)("li",{parentName:"ul"},"NSQ v1.2.0")),(0,o.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,o.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(97047).Z,width:"1051",height:"686"})),(0,o.kt)("h2",{id:"importing-public-tarballs-to-a-gcp-project"},"Importing public tarballs to a GCP project"),(0,o.kt)("p",null,"Our offering for GCP is 3 compressed tarballs for 3 different sized Snowplow Mini, produced through\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud"),"'s\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/compute/images/export"},(0,o.kt)("inlineCode",{parentName:"a"},"export")),"\xa0command. Simply put, they are Virtual Disk images exported in GCP format, a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"disk.raw"),"\xa0file that has been tarred and gzipped."),(0,o.kt)("p",null,"To use them within GCP console, you need to import a tarball of your choice into your GCP project. You can use\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud"),"\xa0CLI utility to do that."),(0,o.kt)("p",null,"Browse\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/quickstarts"},"GCP docs"),"\xa0to get started with\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud"),"."),(0,o.kt)("p",null,"Assuming you have\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud"),"\xa0setup and configured for your GCP project, use\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud"),"'s\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/compute/images/create"},(0,o.kt)("inlineCode",{parentName:"a"},"create")),"\xa0command to import a tarball of your choice into your GCP project."),(0,o.kt)("p",null,"A sample usage would be as following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud compute images create \\\nimported-sp-mini \\\n--source-uri \\\nhttps://storage.googleapis.com/snowplow-mini/snowplow-mini-0-11-0-large-1604511003.tar.gz\n")),(0,o.kt)("p",null,"Note that\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"imported-sp-mini"),"\xa0is a name of your choice for destination image and above URI is for large image, change it with your preferred version of Snowplow Mini."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"L / 2 vCPUs"),(0,o.kt)("th",{parentName:"tr",align:null},"XL / 4 vCPUs"),(0,o.kt)("th",{parentName:"tr",align:null},"XXL / 8 vCPUs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://storage.googleapis.com/snowplow-mini/snowplow-mini-0-12-1-large-1612457190.tar.gz"},"large")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://storage.googleapis.com/snowplow-mini/snowplow-mini-0-12-1-xlarge-1612455542.tar.gz"},"xlarge")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://storage.googleapis.com/snowplow-mini/snowplow-mini-0-12-1-xxlarge-1612454474.tar.gz"},"xxlarge"))))),(0,o.kt)("p",null,"You can find more about\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud compute images create"),"\xa0command\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/compute/images/create"},"here"),"\xa0for additional parameters."),(0,o.kt)("p",null,"After importing our tarball of your choice into your project, you should see it under\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Images"),"\xa0on\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Compute Engine"),"."),(0,o.kt)("p",null,"To decide on which size of Snowplow Mini to choose, read on."),(0,o.kt)("h3",{id:"large--xlarge--xxlarge"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow-mini/wiki/Setup-guide-GCP#large--xlarge--xxlarge"}),"large & xlarge & xxlarge"),(0,o.kt)("p",null,"Until today, Snowplow Mini was being used inside AWS\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"t2.medium"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"n1-standard-1"),"\xa0in GCP, instances and it served well for demonstration purposes. However, we observed that Snowplow Mini started exceeding its initial motivation and machine resources started to become an obstacle, causing issues with Elasticsearch etc. This is why, Mini is available at 3 different sizes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"large"),"\xa0: Same image published so far. Elasticsearch has\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"4g"),"\xa0heap size and Snowplow apps has\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"0.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"8g"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xlarge"),"\xa0: Double the large image. Elasticsearch has\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"8g"),"\xa0heap size and Snowplow apps has\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"1.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"16g"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xxlarge"),"\xa0: Double the xlarge image. Elasticsearch has\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"16g"),"\xa0heap size and Snowplow apps has\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"3g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"32g"),".")),(0,o.kt)("p",null,"If you want, you can download\xa0",(0,o.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/snowplow-mini/snowplow-mini-0-12-1-large-1612457190.tar.gz"},(0,o.kt)("inlineCode",{parentName:"a"},"large")),"\xa0,\xa0",(0,o.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/snowplow-mini/snowplow-mini-0-12-1-xlarge-1612455542.tar.gz"},(0,o.kt)("inlineCode",{parentName:"a"},"xlarge")),"\xa0and\xa0",(0,o.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/snowplow-mini/snowplow-mini-0-12-1-xxlarge-1612454474.tar.gz"},(0,o.kt)("inlineCode",{parentName:"a"},"xxlarge")),"\xa0for other usages/purposes."),(0,o.kt)("h2",{id:"create-instance"},"Create instance"),(0,o.kt)("p",null,"Go to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Compute Engine"),"\xa0on GCP console, select\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Images"),"\xa0from menu on the left. You should see your imported image on the list. Select it then you should see\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE INSTANCE"),"\xa0button at the top of the page. Click on it."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(40181).Z,width:"1052",height:"676"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49048).Z,width:"1086",height:"1408"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(74532).Z,width:"948",height:"1226"})),(0,o.kt)("p",null,"Click\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),"."),(0,o.kt)("p",null,"These images show setup for\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"large"),"\xa0image. To setup\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"xlarge"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"xxlarge"),", you should increase memory per above explanation of different sizes."))}d.isMDXComponent=!0},49048:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-instance-2-b23317e188861463d0a697e7e6698441.png"},74532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-instance-3-7397ccd9528d0226acb3bf709bdccf5a.png"},40181:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-instance-cc7dee2edb679cbcfab716d3f068aa49.png"},97047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);