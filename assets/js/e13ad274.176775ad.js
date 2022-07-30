"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[33831],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||r;return t?o.createElement(m,s(s({ref:n},l),{},{components:t})):o.createElement(m,s({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const r={title:"Sqs2kinesis",date:"2021-07-16",sidebar_position:40},s=void 0,a={unversionedId:"migrated/pipeline-components-and-applications/sqs2kinesis/index",id:"migrated/pipeline-components-and-applications/sqs2kinesis/index",title:"Sqs2kinesis",description:"Sqs2kinesis is an application for moving data from SQS to Kinesis on AWS. In a Snowplow pipeline, you can run it if you are using SQS as either a fallback buffer or as your primary collector sink.",source:"@site/docs/migrated/pipeline-components-and-applications/sqs2kinesis/index.md",sourceDirName:"migrated/pipeline-components-and-applications/sqs2kinesis",slug:"/migrated/pipeline-components-and-applications/sqs2kinesis/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/sqs2kinesis/",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Sqs2kinesis",date:"2021-07-16",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Configure the Stream Collector",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/stream-collector/configure/"},next:{title:"sqs2kinesis configuration reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference/"}},p={},c=[{value:"Getting a Docker image",id:"getting-a-docker-image",level:3},{value:"Configuration",id:"configuration",level:3}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sqs2kinesis is an application for moving data from SQS to Kinesis on AWS. In a Snowplow pipeline, you can run it if you are using SQS as either a fallback buffer or as your primary collector sink."),(0,i.kt)("p",null,"The AWS setup guide describes ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/configure-the-scala-stream-collector-2/#setting-up-an-sqs-buffer-2-0-0"},"how to set up a SQS buffer for your collector, and why it is needed.")," If you chose not to configure an SQS buffer, then you do not need to run sqs2kinesis."),(0,i.kt)("h3",{id:"getting-a-docker-image"},"Getting a Docker image"),(0,i.kt)("p",null,"sqs2kinesis is published on\xa0",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/snowplow/sqs2kinesis/tags"},"Docker Hub"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull snowplow/sqs2kinesis:1.0.2\n")),(0,i.kt)("p",null,"It is configured by providing a hocon file on the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run --rm \\\n  -v $PWD/config.hocon:/sqs2kinesis/config.hocon \\\n  snowplow/sqs2kinesis:1.0.2 --config /sqs2kinesis/config.hocon\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," command option is actually optional. For some setups it is more convenient to provide configuration parameters using jvm system properties or environment variables, as documented in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/v1.4.1/README.md"},"the Lightbend config readme"),"."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Here is an example of a minimal configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "input": {\n    "queue": "https://sqs.eu-central-1.amazonaws.com/000000000000/snowplow-buffer"\n  }\n  "output": {\n    # Configure output kinesis stream for valid messages\n    "good": {\n      "streamName": "snowplow-raw-payloads"\n    }\n\n    "bad": {\n      # Configure output kinesis stream for invalid sqs messages\n      "streamName": "snowplow-bad-events"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"See\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/optional-run-the-sqs2kinesis-app/sqs2kinesis-configuration-reference/"},"the configuration reference"),"\xa0for a complete description of all parameters."))}u.isMDXComponent=!0}}]);