"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={title:"Set up the stream collector",date:"2021-08-04",sidebar_position:-10},l=void 0,c={unversionedId:"migrated/pipeline-components-and-applications/stream-collector/setup/index",id:"migrated/pipeline-components-and-applications/stream-collector/setup/index",title:"Set up the stream collector",description:"Available on Terraform Registry",source:"@site/docs/migrated/pipeline-components-and-applications/stream-collector/setup/index.md",sourceDirName:"migrated/pipeline-components-and-applications/stream-collector/setup",slug:"/migrated/pipeline-components-and-applications/stream-collector/setup/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/stream-collector/setup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659256171,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:-10,frontMatter:{title:"Set up the stream collector",date:"2021-08-04",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Stream Collector",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/stream-collector/"},next:{title:"Configure the Stream Collector",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/stream-collector/configure/"}},i={},s=[{value:"Available on Terraform Registry",id:"available-on-terraform-registry",level:2},{value:"Run the collector",id:"run-the-collector",level:2},{value:"Health check",id:"health-check",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"available-on-terraform-registry"},"Available on Terraform Registry"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/collector-kinesis-ec2/aws/latest"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Terraform&message=Registry&color=7B42BC&logo=terraform",alt:null}))),(0,n.kt)("p",null,"A Terraform module is available which deploys the stream collector on a AWS EC2 without the need for this manual setup."),(0,n.kt)("h2",{id:"run-the-collector"},"Run the collector"),(0,n.kt)("p",null,"The stream collector is on docker hub with several different flavours. Pull the image that matches the sink you are using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker pull snowplow/scala-stream-collector-kinesis:2.7.0\ndocker pull snowplow/scala-stream-collector-pubsub:2.7.0\ndocker pull snowplow/scala-stream-collector-kafka:2.7.0\ndocker pull snowplow/scala-stream-collector-nsq:2.7.0\ndocker pull snowplow/scala-stream-collector-stdout:2.7.0\n")),(0,n.kt)("p",null,"The application is configured by passing a hocon file on the command line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run --rm \\\n  -v $PWD/config.hocon:/snowplow/config.hocon \\\n  -p 8080:8080 \\\n  snowplow/scala-stream-collector-${flavour}:2.7.0 --config /snowplow/config.hocon\n")),(0,n.kt)("p",null,"Alternatively, you can download and run ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/stream-collector/releases"},"a jar file from the github release"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"java -jar scala-stream-collector-kinesis-2.7.0.jar --config /path/to/config.hocon\n")),(0,n.kt)("h2",{id:"health-check"},"Health check",(0,n.kt)("a",{parentName:"h2",href:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/run-the-scala-stream-collector/#healthcheck"})),(0,n.kt)("p",null,"Pinging the collector on the /health path should return a 200 OK response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl http://localhost:8080/health\n")))}u.isMDXComponent=!0}}]);