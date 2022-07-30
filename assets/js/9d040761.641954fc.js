"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[978],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={title:"Flink",date:"2020-04-14",sidebar_position:10},a=void 0,l={unversionedId:"migrated/managing-data-quality/snowplow-event-recovery/running/flink/index",id:"migrated/managing-data-quality/snowplow-event-recovery/running/flink/index",title:"Flink",description:"The Flink job reads bad rows from an S3 location and stores the recovered payloads in Kinesis, unrecovered and unrecoverable in other S3 buckets.",source:"@site/docs/migrated/managing-data-quality/snowplow-event-recovery/running/flink/index.md",sourceDirName:"migrated/managing-data-quality/snowplow-event-recovery/running/flink",slug:"/migrated/managing-data-quality/snowplow-event-recovery/running/flink/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/snowplow-event-recovery/running/flink/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Flink",date:"2020-04-14",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Beam",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/snowplow-event-recovery/running/beam/"},next:{title:"Spark",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/snowplow-event-recovery/running/spark/"}},c={},u=[{value:"Building",id:"building",level:4},{value:"Running",id:"running",level:4}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Flink job reads bad rows from an S3 location and stores the recovered payloads in Kinesis, unrecovered and unrecoverable in other S3 buckets."),(0,o.kt)("h4",{id:"building"},"Building"),(0,o.kt)("p",null,"To build the fat jar, run:"),(0,o.kt)("h4",{id:""},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-event-recovery#running"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sbt flink/assembly\n")),(0,o.kt)("h4",{id:"running"},"Running"),(0,o.kt)("p",null,"Using flink CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"flink run \\\n  snowplow-event-recovery-flink-0.2.0.jar \\\n  --input s3://bad-rows-location/** \\\n  --output recovered-kinesis-topic \\  \n  --failedOutput s3://unrecovered-collector-payloads-location/ \\\n  --unrecoverableOutput s3://unrecoverable-collector-payloads-location/ \\\n  --config $JOB_CONFIG \\\n  --resolver $RESOLVER_CONFIG\n")))}p.isMDXComponent=!0}}]);