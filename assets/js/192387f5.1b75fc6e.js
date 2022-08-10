"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[6547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||r;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"Run the collector as a single instance VM in GCP",date:"2020-02-27",sidebar_position:20},l=void 0,i={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-a-single-instance-vm-in-gcp/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-a-single-instance-vm-in-gcp/index",title:"Run the collector as a single instance VM in GCP",description:"To run the collector on a single GCP instance, you'll first need to spin one up:",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-a-single-instance-vm-in-gcp/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-a-single-instance-vm-in-gcp",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-a-single-instance-vm-in-gcp/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-a-single-instance-vm-in-gcp/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:20,frontMatter:{title:"Run the collector as a single instance VM in GCP",date:"2020-02-27",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup the Pub/Sub topics",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/setup-the-pub-sub-topics/"},next:{title:"Run the collector as an autoscaling group of instances behind an Load Balancer",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-an-autoscaling-group-of-instances-behind-an-load-balancer/"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To run the collector on a single GCP instance, you'll first need to spin one up:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/home/dashboard"},"GCP dashboard"),", and once again, make sure your project is selected."),(0,a.kt)("li",{parentName:"ul"},"Click the hamburger on the top left corner, and select Compute Engine, under Compute"),(0,a.kt)("li",{parentName:"ul"},"Enable billing if you haven\u2019t (if you haven\u2019t enabled billing, at this point the only option you\u2019ll see is a button to do so)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86384).Z,width:"939",height:"249"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click \u201cCreate instance\u201d and pick the apropriate settings for your case, making sure of, at least the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("em",{parentName:"li"},"Access scopes"),", select \u201cSet access for each API\u201d and enable \u201cCloud PubSub\u201d"),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("em",{parentName:"li"},"Firewall"),", select \u201cAllow HTTP traffic\u201d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Optional")," Click ",(0,a.kt)("em",{parentName:"li"},"Management, disk, networking, SSH keys_Under _Networking"),", add a Tag, such as \u201ccollector\u201d. (This is needed to add a tagged Firewall rule, explained below)")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(96280).Z,width:"727",height:"813"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32603).Z,width:"512",height:"506"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the hamburger on the top left corner, and click on \u201cVPC Network\u201d, under ",(0,a.kt)("em",{parentName:"li"},"Networking")),(0,a.kt)("li",{parentName:"ul"},"On the sidebar, click on \u201cFirewall rules\u201d"),(0,a.kt)("li",{parentName:"ul"},"Click \u201cCreate Firewall Rule\u201d"),(0,a.kt)("li",{parentName:"ul"},"Name your rule"),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("em",{parentName:"li"},"Source filter"),' pick \u201cIP ranges\u201d and specify "0.0.0.0/0" (to allow traffic from everywhere)'),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("em",{parentName:"li"},"Protocols and ports")," add \u201ctcp:8080\u201d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note that 8080 is the port assigned to the collector in the configuration file. If you choose another port here, make sure you change the config file"))),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("em",{parentName:"li"},"Target tags")," add the Tag with which you labeled your instance (here ",(0,a.kt)("inlineCode",{parentName:"li"},"collector"),")"),(0,a.kt)("li",{parentName:"ul"},"Click \u201cCreate\u201d"),(0,a.kt)("li",{parentName:"ul"},"Now prepare your collector config file by following ",(0,a.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/stream-collector/configure/"},"the configuration guide"),"."),(0,a.kt)("li",{parentName:"ul"},"Create a Google Cloud Storage bucket that will host this configuration file for the collector")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30824).Z,width:"740",height:"639"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then click \u201cUpload Files\u201d and upload your configuration file.")),(0,a.kt)("p",null,"Once you have your config file in place, ssh into your instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ gcloud compute ssh your-instance-name --zone your-instance-zone\n")),(0,a.kt)("p",null,"And then run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ sudo apt-get update\n$ sudo apt-get -y install default-jre\n$ sudo apt-get -y install unzip\n$ wget "https://github.com/snowplow/stream-collector/releases/download/2.3.0/snowplow-stream-collector-google-pubsub-<VERSION>.jar"\n$ gsutil cp gs://<YOUR-BUCKET-NAME/<YOUR-CONFIG-FILE-NAME> .\n$ java -jar snowplow-stream-collector-google-pubsub-<VERSION>.jar --config <YOUR-CONFIG-FILE-NAME>\n')))}u.isMDXComponent=!0},30824:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud-create-bucket-1-a816b46a58b9af66fb76fd9474a9f3b9.png"},86384:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud-create-instance-1-048a6efd5ae2120943d6541e0b033b82.png"},96280:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud-create-instance-2-afe3659e7652ca4723fd8dad14bb1549.png"},32603:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud-create-instance-3-e95bfac67a648a12f98d5dab915a3ae0.png"}}]);