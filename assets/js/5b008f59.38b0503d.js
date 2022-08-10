"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[85430],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(h,a(a({ref:n},l),{},{components:t})):r.createElement(h,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={title:"(to be deprecated) Stream Enrich",date:"2020-11-09",sidebar_position:10},a=void 0,c={unversionedId:"migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/index",id:"migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/index",title:"(to be deprecated) Stream Enrich",description:"Available on Terraform Registry",source:"@site/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/index.md",sourceDirName:"migrated/pipeline-components-and-applications/enrichment-components/stream-enrich",slug:"/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:10,frontMatter:{title:"(to be deprecated) Stream Enrich",date:"2020-11-09",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/"},next:{title:"Configure Stream Enrich",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/"}},s={},p=[{value:"Available on Terraform Registry",id:"available-on-terraform-registry",level:2},{value:"Run Stream Enrich",id:"run-stream-enrich",level:2}],l={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"available-on-terraform-registry"},"Available on Terraform Registry",(0,o.kt)("a",{parentName:"h2",href:"/docs/migrated/pipeline-components-and-applications/stream-collector/setup/#available-on-terraform-registry"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/iglu-server-ec2/aws/latest"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Terraform&message=Registry&color=7B42BC&logo=terraform",alt:null}))),(0,o.kt)("p",null,"A Terraform module is available which deploys Stream Enrich on a AWS EC2 without the need for this manual setup."),(0,o.kt)("h2",{id:"run-stream-enrich"},"Run Stream Enrich",(0,o.kt)("a",{parentName:"h2",href:"/docs/migrated/pipeline-components-and-applications/stream-collector/setup/#run-the-collector"})),(0,o.kt)("p",null,"Stream Enrich is on docker hub with several different flavours. Pull the image that matches the source/sink you are using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull snowplow/stream-enrich-kinesis:3.2.2\ndocker pull snowplow/stream-enrich-kafka:3.2.2\ndocker pull snowplow/stream-enrich-nsq:3.2.2\n")),(0,o.kt)("p",null,"The application is configured by passing a hocon file on the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm \\\n      --log-driver awslogs \\\n      --log-opt awslogs-group=${log_group_name} \\\n      --log-opt awslogs-stream=`ec2metadata --instance-id` \\\n      -v ${path_to_config_dir}:/snowplow/config \\\n      snowplow/stream-enrich-${message_queue}:${version} \\\n      --config /snowplow/config/config.hocon \\\n      --resolver file:/snowplow/config/iglu_resolver.json \\\n      --enrichments file:/snowplow/config/enrichments/\n")),(0,o.kt)("p",null,"Alternatively, you can download and run\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/releases"},"a jar file from the github release"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar snowplow-stream-enrich-kinesis-3.2.2.jar \\\n  --config /path/to/config.hocon \\\n  --enrichments file:/path/to/enrichments/ \\\n  --resolver file:/path/to/iglu_resolver.json \\\n  --force-cached-files-download\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/"},"configuration guide")," describes how to construct the config, enrichments, and resolver input files.",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/_Footer/_edit"})))}m.isMDXComponent=!0}}]);