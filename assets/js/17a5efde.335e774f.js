"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[4772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Sending event: Emitter",date:"2020-02-25",sidebar_position:60},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/sending-event-emitter/index",id:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/sending-event-emitter/index",title:"Sending event: Emitter",description:"Events are sent using an\xa0Emitter\xa0class. You can initialize a class with a collector endpoint URL and optionally choose the HTTP\xa0POST\xa0method instead of\xa0GET.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/sending-event-emitter/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/sending-event-emitter",slug:"/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/sending-event-emitter/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/sending-event-emitter/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:60,frontMatter:{title:"Sending event: Emitter",date:"2020-02-25",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Tracking specific events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/tracking-specific-events/"},next:{title:"Payload",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/actionscript3-tracker/payload/"}},s={},c=[{value:"Using a buffer",id:"using-a-buffer",level:3},{value:"Choosing the HTTP method",id:"choosing-the-http-method",level:3},{value:"Method of sending HTTP requests",id:"method-of-sending-http-requests",level:3},{value:"Emitter callback",id:"emitter-callback",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Events are sent using an\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0class. You can initialize a class with a collector endpoint URL and optionally choose the HTTP\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0method instead of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Emitter(uri:string, httpMethod:String)\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'var e1:Emitter = new Emitter("d3rkrsqld9gmqf.cloudfront.net");\nvar e2:Emitter = new Emitter("d3rkrsqld9gmqf.cloudfront.net", URLRequestMethod.POST);\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument Name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uri")),(0,a.kt)("td",{parentName:"tr",align:null},"The collector endpoint URI events will be sent to"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"httpMethod")),(0,a.kt)("td",{parentName:"tr",align:null},"The HTTP method to use when sending events"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("h3",{id:"using-a-buffer"},"Using a buffer"),(0,a.kt)("p",null,"A buffer is used to group events together in bulk before sending them. This is useful to reduce network usage. By default, the AS3 Emitter does not buffer but instead sends events instantly as soon as they are created. You can use a buffer instead by calling setBufferOption with the number of events to batch together in the buffer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'var e1:Emitter = new Emitter("d3rkrsqld9gmqf.cloudfront.net");\ne1.setBufferOption(BufferOption.BATCH);\n')),(0,a.kt)("p",null,"There are two predefined constants but you can use any integer value:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Option")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BufferOption.DEFAULT"),(0,a.kt)("td",{parentName:"tr",align:null},"1","."," Events are sent as soon as they are created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BufferOption.BATCH"),(0,a.kt)("td",{parentName:"tr",align:null},"10","."," Sends events in a group when 10 events are created")))),(0,a.kt)("h3",{id:"choosing-the-http-method"},"Choosing the HTTP method"),(0,a.kt)("p",null,"Snowplow supports receiving events via\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0requests. In a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0request, each event is sent in an individual request. With POST requests, events are bundled together in one request."),(0,a.kt)("p",null,"You can set the HTTP method in the Emitter constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'var e1:Emitter = new Emitter("d3rkrsqld9gmqf.cloudfront.net", URLRequestMethod.POST);\n')),(0,a.kt)("p",null,"The default method is\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"."),(0,a.kt)("p",null,"Actionscript provides standard constants for the two options in the URLRequestMethod class:"),(0,a.kt)("p",null,"URLRequestMethod.GET URLRequestMethod.POST"),(0,a.kt)("h3",{id:"method-of-sending-http-requests"},"Method of sending HTTP requests"),(0,a.kt)("p",null,"An AS3 Emitter sends requests asynchronously. Flash does not support synchronous requests."),(0,a.kt)("h3",{id:"emitter-callback"},"Emitter callback"),(0,a.kt)("p",null,"The AS3 Emitter dispatches events when it succeeds or fails to flush the buffer."),(0,a.kt)("p",null,"You can register event listeners for these events if you need to handle the success or failure case. Here is a sample bit of code to show how it could work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'var emitter:Emitter = new Emitter(testURL);\nemitter.addEventListener(EmitterEvent.SUCCESS, function(bufferLength:int) {\n    trace("Buffer length for POST/GET:" + bufferLength);\n  }\n);\nemitter.addEventListener(EmitterEvent.FAILURE, function (successCount:int, failedEvents:Array, errorString:String) {\n    trace("Failure, successCount: " + successCount + "\\nfailedEvents:\\n" + failedEvents.toString() + "\\nerror:\\n" + errorString:String);\n  }\n);\n')),(0,a.kt)("p",null,"In the example, we can see in-line handling of the both cases. If events are all successfully sent, the success callback method receives the number of successful events sent. If there were any failures, the failure callback method receives the number of successful events sent (if any) and a\xa0",(0,a.kt)("em",{parentName:"p"},"Array of events"),"\xa0that failed to be sent (i.e. the HTTP state code did not return 200). In addition, in the case of failure, an additional parameter is provided with the text of the network or security error that caused the failure."))}u.isMDXComponent=!0}}]);