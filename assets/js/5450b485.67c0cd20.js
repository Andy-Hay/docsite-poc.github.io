"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[93183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?o.createElement(h,a(a({ref:t},c),{},{components:r})):o.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={title:"Troubleshooting",date:"2020-04-14",sidebar_position:50},a=void 0,s={unversionedId:"migrated/managing-data-quality/snowplow-event-recovery/troubleshooting/index",id:"migrated/managing-data-quality/snowplow-event-recovery/troubleshooting/index",title:"Troubleshooting",description:"Monitoring",source:"@site/docs/migrated/managing-data-quality/snowplow-event-recovery/troubleshooting/index.md",sourceDirName:"migrated/managing-data-quality/snowplow-event-recovery/troubleshooting",slug:"/migrated/managing-data-quality/snowplow-event-recovery/troubleshooting/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/snowplow-event-recovery/troubleshooting/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:50,frontMatter:{title:"Troubleshooting",date:"2020-04-14",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/snowplow-event-recovery/0-2-monitoring/"},next:{title:"Migrating from 0.1.0",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0/"}},l={},u=[{value:"Monitoring",id:"monitoring",level:2},{value:"Possible Failures",id:"possible-failures",level:2},{value:"Process Failures",id:"process-failures",level:3},{value:"Missing Resources",id:"missing-resources",level:4},{value:"Configuration Issues",id:"configuration-issues",level:4},{value:"Recovery Failures",id:"recovery-failures",level:3},{value:"Missing recovery configuration",id:"missing-recovery-configuration",level:4},{value:"Replacement Failures",id:"replacement-failures",level:4},{value:"Cast Failures",id:"cast-failures",level:4},{value:"Unrecoverable Bad Row Type",id:"unrecoverable-bad-row-type",level:4},{value:"Invalid JSON Format",id:"invalid-json-format",level:4},{value:"Invalid Data Format",id:"invalid-data-format",level:4},{value:"Codec Failures",id:"codec-failures",level:4},{value:"Unexpected Behavior",id:"unexpected-behavior",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring"},"Monitoring"),(0,n.kt)("p",null,"In order to verify the process is running properly there are several locations that can be monitored, depending on your runtime environment these are: datasinks (for recovery job processed output): ",(0,n.kt)("inlineCode",{parentName:"p"},"failedOutput")," (S3/GCS bucket), ",(0,n.kt)("inlineCode",{parentName:"p"},"unrecoverableOutput")," (S3/GCS bucket), ",(0,n.kt)("inlineCode",{parentName:"p"},"output")," (Kinesis/PubSub streams) and job runners (tracking job status and processing in real-time)."),(0,n.kt)("h2",{id:"possible-failures"},"Possible Failures"),(0,n.kt)("p",null,"There are two main reasons why recovery process may fail. Process Failures preventing recovery process to proceed and Recovery Failures that mean recovery flow cannot be applied to given bad row/line. Another set of issues is unexpected behavior of the application. The three failure types need to be handled differently."),(0,n.kt)("h3",{id:"process-failures"},"Process Failures"),(0,n.kt)("p",null,"Process failures are usually caused by misconfiguration. They usually happen as the job is submitted to its runner (Apache Beam, Spark, Flink). Reported failures may differ, but usually they boil down to:"),(0,n.kt)("h4",{id:"missing-resources"},"Missing Resources"),(0,n.kt)("p",null,"This means that resources set as input or output for recovery do not exist or are inaccessible to application."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," Check the existence of resources provided to job configuration and their access policies."),(0,n.kt)("h4",{id:"configuration-issues"},"Configuration Issues"),(0,n.kt)("p",null,"The largest group of issues causing early process termination are configuration issues. They are reported in CLI as the job is submitted."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," Make sure the configuration is well formed and it is conforming its schema."),(0,n.kt)("h3",{id:"recovery-failures"},"Recovery Failures"),(0,n.kt)("p",null,"Definitely the largest and the most common issue with automated recovery process are recovery failures. These are runtime errors that prevent application from recovering given lines / bad rows. These failures will produce values under ",(0,n.kt)("inlineCode",{parentName:"p"},"failedOutput")," directory."),(0,n.kt)("p",null,"Recovery error is yet another bad row type that is able to be recovered. For convenience recovery errors use original configurations and do not require another recovery flows configured especially for them."),(0,n.kt)("p",null,"Recovery error contain additional information pointing to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"recovery flow name"),(0,n.kt)("li",{parentName:"ul"},"number of recoveries attempted"),(0,n.kt)("li",{parentName:"ul"},"original bad row")),(0,n.kt)("h4",{id:"missing-recovery-configuration"},"Missing recovery configuration"),(0,n.kt)("p",null,"Happens when trying to recover a line for which no recovery flow configuration can be matched."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," Check whether supplied configuration contains a proper mapping for problematic bad row instance including its schema key and conditions that are applied before choosing configuration."),(0,n.kt)("h4",{id:"replacement-failures"},"Replacement Failures"),(0,n.kt)("p",null,"Actual replacement specified with Replace Step has failed. Reason will be supplied along with exported ",(0,n.kt)("inlineCode",{parentName:"p"},"RecoveryError")," bad row under ",(0,n.kt)("inlineCode",{parentName:"p"},"unrecoveredOutput"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," consult the exported message. This likely means that configuration supplied to modify the source bad row needs adjusting. Either with another recovery flow (when faulty row is a special case) or direct adjustment to recovery flow supplied with ",(0,n.kt)("inlineCode",{parentName:"p"},"RecoveryError"),"."),(0,n.kt)("h4",{id:"cast-failures"},"Cast Failures"),(0,n.kt)("p",null,"Much like Replacement Failures, Cast Failures occur when modifying actual value with a Cast Step has failed. The reason is supplied along with exported ",(0,n.kt)("inlineCode",{parentName:"p"},"RecoveryError")," bad row under ",(0,n.kt)("inlineCode",{parentName:"p"},"unrecoveredOutput"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," consult the exported message. This likely means that configuration supplied to modify the source bad row needs adjusting. Either with another recovery flow (when faulty row is a special case) or direct adjustment to recovery flow supplied with ",(0,n.kt)("inlineCode",{parentName:"p"},"RecoveryError"),"."),(0,n.kt)("h4",{id:"unrecoverable-bad-row-type"},"Unrecoverable Bad Row Type"),(0,n.kt)("p",null,"Some bad row types are marked as unrecoverable and therefore even with an existing configuration they will not be transformed. They are outputted to ",(0,n.kt)("inlineCode",{parentName:"p"},"unrecoverable"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," If you think that specific bad row type should be recoverable consult Extending Recovery and consider submitting a Pull Request."),(0,n.kt)("h4",{id:"invalid-json-format"},"Invalid JSON Format"),(0,n.kt)("p",null,"Happens whenever input data is not a proper JSON format."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," Check that input JSON file contains a proper JSON object in each line."),(0,n.kt)("h4",{id:"invalid-data-format"},"Invalid Data Format"),(0,n.kt)("p",null,"Happens whenever input data is not a valid ",(0,n.kt)("inlineCode",{parentName:"p"},"BadRow")," JSON format."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," Check that input JSON file contains a proper ",(0,n.kt)("inlineCode",{parentName:"p"},"BadRow")," JSON object in each line."),(0,n.kt)("h4",{id:"codec-failures"},"Codec Failures"),(0,n.kt)("p",null,"This set of failures should not really occur but means that there was an error serializing data with thrift (ThriftFailure) or Base64 coding. Some of these issues might be related to runtime locale."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action:")," Consult supplied error message outputted along with BadRow into ",(0,n.kt)("inlineCode",{parentName:"p"},"unrecoveredOutput"),". Verify that bad row producer source has the same locale as recovery worker - UTF-8."),(0,n.kt)("h3",{id:"unexpected-behavior"},"Unexpected Behavior"),(0,n.kt)("p",null,"This is hopefully the rarest but the least specific set of issues that may occur. In case any unexpected behavior happens consider submitting a GitHub issue."))}p.isMDXComponent=!0}}]);