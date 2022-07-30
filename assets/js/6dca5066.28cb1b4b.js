"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[26100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Run the collector as an autoscaling group of instances behind an Load Balancer",date:"2020-02-27",sidebar_position:30},l=void 0,i={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-an-autoscaling-group-of-instances-behind-an-load-balancer/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-an-autoscaling-group-of-instances-behind-an-load-balancer/index",title:"Run the collector as an autoscaling group of instances behind an Load Balancer",description:"This is the recommended production setup.",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-an-autoscaling-group-of-instances-behind-an-load-balancer/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-an-autoscaling-group-of-instances-behind-an-load-balancer",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-an-autoscaling-group-of-instances-behind-an-load-balancer/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-an-autoscaling-group-of-instances-behind-an-load-balancer/",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Run the collector as an autoscaling group of instances behind an Load Balancer",date:"2020-02-27",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Run the collector as a single instance VM in GCP",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/running-the-collector-as-a-single-instance-vm-in-gcp/"},next:{title:"Setup Trackers",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-trackers/"}},c={},s=[{value:"Creating an instance template",id:"creating-an-instance-template",level:2},{value:"Create an auto managed instance group",id:"create-an-auto-managed-instance-group",level:3},{value:"Configure the load balancer",id:"configure-the-load-balancer",level:3}],u={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the recommended production setup."),(0,r.kt)("p",null,"To run a load balanced auto-scaling cluster, you\u2019ll need to follow the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an instance template"),(0,r.kt)("li",{parentName:"ul"},"Create an auto managed instance group"),(0,r.kt)("li",{parentName:"ul"},"Create a load balancer")),(0,r.kt)("h2",{id:"creating-an-instance-template"},"Creating an instance template"),(0,r.kt)("p",null,"First you\u2019ll have to store your config file in some place that your instances can download from, like Google Cloud Storage. We suggest you store it in a GCP Storage bucket, as described above."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the hamburger on the top left corner and find \u201cCompute Engine\u201d, under ",(0,r.kt)("em",{parentName:"li"},"Compute")),(0,r.kt)("li",{parentName:"ul"},"Go to \u201cInstance templates\u201d on the sidebar. Click \u201cCreate instance template\u201d"),(0,r.kt)("li",{parentName:"ul"},"Choose the appropriate settings for your case. Do (at least) the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("em",{parentName:"li"},"Access scopes"),", select \u201cSet access for each API\u201d and enable \u201cCloud PubSub\u201d"),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("em",{parentName:"li"},"Firewall"),", select \u201cAllow HTTP traffic\u201d"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("em",{parentName:"li"},"Management, disk, networking, SSH keys"))))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(12218).Z,width:"1051",height:"928"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Networking"),", add a tag, such as \u201ccollector\u201d. (This is needed to add a Firewall rule)"),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Management"),"\xa0\u201cStartup script\u201d add the following script (changing the relevant fields for your case):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#! /bin/bash\nsudo apt-get update\nsudo apt-get -y install default-jre\nsudo apt-get -y install unzip\nwget "https://github.com/snowplow/stream-collector/releases/download/2.3.0/snowplow-stream-collector-google-pubsub-<VERSION>.jar"\ngsutil cp gs://<YOUR-BUCKET-NAME/<YOUR-CONFIG-FILE-NAME> .\njava -jar snowplow-stream-collector-google-pubsub-<VERSION>.jar --config <YOUR-CONFIG-FILE-NAME> &\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click \u201cCreate\u201d"),(0,r.kt)("li",{parentName:"ul"},"Add a Firewall rule as described above (if you haven\u2019t already)")),(0,r.kt)("h3",{id:"create-an-auto-managed-instance-group"},"Create an auto managed instance group"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the side bar, click \u201cInstance groups\u201d"),(0,r.kt)("li",{parentName:"ul"},"Click \u201cCreate instance group\u201d"),(0,r.kt)("li",{parentName:"ul"},"Fill in with the appropriate values. We named our instance group \u201ccollectors\u201d."),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Instance template"),"\xa0pick the instance template you created previously"),(0,r.kt)("li",{parentName:"ul"},"Set\xa0",(0,r.kt)("em",{parentName:"li"},"Autoscaling"),"\xa0to \u201cOn\u201d. By default the Autoscale is based on CPU usage and set with default settings. We\u2019ll leave them as they are for now."),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Health Check"),", pick \u201cCreate health check\u201d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name your health check"),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Port"),"\xa0add 8080 or the port you configured above"),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Request path"),"\xa0add \u201c/health\u201d"),(0,r.kt)("li",{parentName:"ul"},"Click \u201cSave and Continue\u201d"))),(0,r.kt)("li",{parentName:"ul"},"Click \u201cCreate\u201d")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(34230).Z,width:"767",height:"705"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(41246).Z,width:"487",height:"493"})),(0,r.kt)("h3",{id:"configure-the-load-balancer"},"Configure the load balancer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the hamburger on the top left corner, and find \u201cNetwork services\u201d under\xa0",(0,r.kt)("em",{parentName:"li"},"Networking")),(0,r.kt)("li",{parentName:"ul"},"On the side bar, click \u201cLoad Balancing\u201d"),(0,r.kt)("li",{parentName:"ul"},"Click \u201cCreate load balancer\u201d"),(0,r.kt)("li",{parentName:"ul"},"Select \u201cHTTP load balancing\u201d and click \u201cStart configuration\u201d")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38191).Z,width:"1258",height:"463"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Backend configuration"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click \u201cCreate a backend service\u201d"),(0,r.kt)("li",{parentName:"ul"},"Pick an appropriate name"),(0,r.kt)("li",{parentName:"ul"},"Pick the instance group we created above"),(0,r.kt)("li",{parentName:"ul"},"Pick the port number we configured earlier"),(0,r.kt)("li",{parentName:"ul"},"Input a maximum number of requests per second per instance"),(0,r.kt)("li",{parentName:"ul"},"You can input \u201cMaximum CPU utilization\u201d and \u201cCapacity\u201d at your discretion"),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Health check"),"\xa0pick the health check you created previously"))),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Host and path rules"),": you can just make sure that the backend service selected is the one we just created"),(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("em",{parentName:"li"},"Frontend configuration"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Leave\xa0",(0,r.kt)("em",{parentName:"li"},"IP"),"\xa0as \u201cEphemeral\u201d and leave\xa0",(0,r.kt)("em",{parentName:"li"},"Port"),"\xa0to 80"))),(0,r.kt)("li",{parentName:"ul"},"Click \u201cReview and finalize\u201d to check everything is OK."),(0,r.kt)("li",{parentName:"ul"},"Click \u201cCreate\u201d"),(0,r.kt)("li",{parentName:"ul"},"You\u2019ll be able to check out this load balancer IP and port by clicking on it"),(0,r.kt)("li",{parentName:"ul"},"You can then make sure this load balancer is used by your instance group by going back to \u201cInstance groups\u201d")))}p.isMDXComponent=!0},38191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gcloud-configure-load-balancer-1-30075a6d72a489941b6f7b9fcfcbfafb.png"},34230:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gcloud-create-instance-group-1-b225fe6f01219a9b987a8840648875f9.png"},41246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gcloud-create-instance-group-2-43fbcdaf288aa055c55fd8be259f6fbe.png"},12218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gcloud-create-instance-template-1-8dd66af8f95914c0d9f342d2caff1e2f.png"}}]);