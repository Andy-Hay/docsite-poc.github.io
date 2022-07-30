"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[5548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Configuration",date:"2020-08-25",sidebar_position:10},i=void 0,l={unversionedId:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/index",id:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/index",title:"Configuration",description:"Configuration for event recovery involves the use of reusable components that help map onto specific failure types. The following components are available:",source:"@site/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/index.md",sourceDirName:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration",slug:"/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Configuration",date:"2020-08-25",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/getting-started/"},next:{title:"Configuration Examples",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/configuration-examples/"}},p={},s=[{value:"<strong>Steps</strong>",id:"steps",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Flows",id:"flows",level:3},{value:"I/O",id:"io",level:2},{value:"AWS",id:"aws",level:4},{value:"GCP",id:"gcp",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configuration for event recovery involves the use of reusable components that help map onto specific failure types. The following components are available:"),(0,o.kt)("h3",{id:"steps"},(0,o.kt)("strong",{parentName:"h3"},"Steps")),(0,o.kt)("p",null,"Steps are individual modifications applied to specific failed event payloads. The steps operate on specific field values and can replace, remove/nullify or cast JSON type values."),(0,o.kt)("p",null,"Notice"),(0,o.kt)("p",null,"Recovery operates on an individual event's ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," field. As an example to reach the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"vendor"),"\xa0field that\u2019s located within\xa0the payload, the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"path"),"\xa0would be\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"$.vendor"),"."),(0,o.kt)("p",null,"Steps are constructed in JSON object format consisting of four individual parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"op"),"\xa0\u2013 transformation operation to perform: Replace, Remove, Cast"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),"\xa0\u2013 JSON Path to the object where the operation is meant to happen. The path can contain specific field names (ie.\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"vendor"),") , array ids (ie.\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"[1]"),") or filters (by regex:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"$.raw.parameters.cx.data.[?(@.data.navigationStart=~([0-9]+))].data.domComplete"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"match"),"\xa0\u2013 an expression applied when replacing field\u2019s values with new value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\xa0\u2013 a new value to be set"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," - used for casting types ",(0,o.kt)("em",{parentName:"li"},"from")," one type ",(0,o.kt)("em",{parentName:"li"},"to")," another")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Replace\n{\n  "op": "Replace",\n  "path": "$.raw.parameters.aid",\n  "match": "(?U)^.*$",\n  "value": "https://console.snplow.com/"\n}\n\n// Remove\n{\n  "op": "Remove",\n  "path": "$.raw.parameters.aid",\n  "match": "(?U)^.*$"\n}\n\n// Cast\n{\n  "op": "Cast",\n  "path": "\n$.raw.parameters.cx.data.[?(@.data.navigationStart=~([0-9]+))].data.domComplete",\n  "from": "Numeric",\n  "to": "Boolean"\n}\n')),(0,o.kt)("h3",{id:"conditions"},"Conditions"),(0,o.kt)("p",null,"Conditions are boolean expressions that operate on failed event fields in order to match on specific structure or values."),(0,o.kt)("p",null,"Note that conditions can be applied to arbitrary fields and therefore a condition's path scopes its entry point as the failed events \u201croot\u201d."),(0,o.kt)("p",null,"Much like steps, conditions are constructed with the following JSON object format consisting of four individual parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"op"),"\xa0\u2013 transformation operation to perform: Replace, Remove, Cast & Test (tests that the specified value is set in the document. If the test fails, then the patch as a whole should not apply.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),"\xa0\u2013 JSON Path to object, the path can contain specific field names (ie.\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"raw"),") , array ids (ie.\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"[1]"),") or filters (by regex:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"[?(@.schema=~iglu://\\\\.*)]"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\xa0\u2013 a value matcher to match against: match a regular expression, compare directly (object equality), check size for equality, less or greater than")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Compare values\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "value": "beam-enrich"\n  }\n}\n\n// Match against regex\n{\n  "op": "Test",\n  "path": "$.payload.raw.vendor",\n  "value": {\n    "regex": "com.snowplow\\\\.*"\n  }\n}\n\n// Compare sizes\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "size": {\n      "eq": 11\n    }\n  }\n}\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "size": {\n      "gt": 3\n    }\n  }\n}\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "size": {\n      "lt": 30\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"flows"},"Flows"),(0,o.kt)("p",null,"Flows are sequences of Steps applied one by one. Flows are mapped onto specific steps and conditions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "name": "main flow",\n  "conditions": [],\n  "steps": []\n}\n')),(0,o.kt)("h2",{id:"io"},"I/O"),(0,o.kt)("p",null,"In principle data is sourced from bucket storage and delivered back into a collector. Recoverable and unrecoverable failed events are stored in bucket storage. For cloud-specific locations see below tables."),(0,o.kt)("h4",{id:"aws"},"AWS"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"input"),(0,o.kt)("td",null,"output"),(0,o.kt)("td",null,"failed output"),(0,o.kt)("td",null,"unrecoverable output")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"S3",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--input"),")"),(0,o.kt)("td",null,"Kinesis",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--output"),")"),(0,o.kt)("td",null,"S3",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--failedOutput"),")"),(0,o.kt)("td",null,"S3",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--unrecoverableOutput"),")")))),(0,o.kt)("h4",{id:"gcp"},"GCP"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"input"),(0,o.kt)("td",null,"output"),(0,o.kt)("td",null,"failed output"),(0,o.kt)("td",null,"unrecoverable output")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"GCS",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--input"),")"),(0,o.kt)("td",null,"PubSub",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--output"),")"),(0,o.kt)("td",null,"GCS",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--failedOutput"),")"),(0,o.kt)("td",null,"GCS (",(0,o.kt)("code",null,"--unrecoverableOutput"),")")))))}c.isMDXComponent=!0}}]);