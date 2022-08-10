"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[50054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Piinguin technical documentation",date:"2021-03-26",sidebar_position:10},o=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/index",id:"migrated/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/index",title:"Piinguin technical documentation",description:"The Piinguin project consists of three parts. Those are the:",source:"@site/docs/migrated/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/index.md",sourceDirName:"migrated/pipeline-components-and-applications/piinguin/piinguin-technical-documentation",slug:"/migrated/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:10,frontMatter:{title:"Piinguin technical documentation",date:"2021-03-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Setting up Piinguin",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/piinguin/setting-up-piinguin/"},next:{title:"Right to be Forgotten Spark Application",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/"}},c={},p=[{value:"Protocol",id:"protocol",level:3},{value:"Server",id:"server",level:3},{value:"Client",id:"client",level:3},{value:"Piinguin relay",id:"piinguin-relay",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Piinguin project consists of three parts. Those are the:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Protocol"),(0,a.kt)("li",{parentName:"ul"},"Server"),(0,a.kt)("li",{parentName:"ul"},"Client")),(0,a.kt)("h3",{id:"protocol"},"Protocol"),(0,a.kt)("p",null,"Piinguin is based on GRPC ","[","grpc","]"," which is a protobuf based RPC framework. The protocol in the project specifies the interface between the client and server. There is a ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," file which describes the interactions between the client and the server for reading, writing and deleting records. That file is used with the excellent ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thesamet/sbt-protoc"},"scalapb")," scala compiler plug-in to generate ",(0,a.kt)("inlineCode",{parentName:"p"},"Java")," code stubs for both the server and the client. These can then be used to implement any behavior based on that interface."),(0,a.kt)("h3",{id:"server"},"Server"),(0,a.kt)("p",null,"The server implements the behavior of the server according to the interface, which in this particular case means writing to and reading from Dynamo DB using the excellent ",(0,a.kt)("a",{parentName:"p",href:"https://www.scanamo.org/"},"scanamo")," library. In the highly unlikely event (as unlikely as a hash collision) that a hash coincides for two values, the last seen original value will be kept (there are thoughts of keeping all values in that case, although their utility is dubious. Feel free to discuss in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/piinguin/issues/8"},"relevant issue")," on GitHub)."),(0,a.kt)("h3",{id:"client"},"Client"),(0,a.kt)("p",null,"Finally the client artifact provides a client API for use from ",(0,a.kt)("inlineCode",{parentName:"p"},"Scala"),". There are three main ways to use the client API, which are the Scala Futures, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/functional-streams-for-scala/fs2"},"FS2")," IO and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/functional-streams-for-scala/fs2"},"FS2")," Streaming. The streaming implementation is ",(0,a.kt)("em",{parentName:"p"},"highly experimental")," and is use is currently discouraged as it is likely to change completely (but all comments and PRs are welcome)."),(0,a.kt)("h2",{id:"piinguin-relay"},"Piinguin relay"),(0,a.kt)("p",null,"The piinguin relay is using the above mentioned Piinguin Client, in an AWS Lambda to forward all PII messages to the Piinguin Server. It uses the ",(0,a.kt)("a",{parentName:"p",href:"/docs/modeling-your-data/analytics-sdk/"},"Analytics SDK")," to read the Enriched Events that are contained in the stream and extract the relevant fields (currently modified and original value only), and perform a ",(0,a.kt)("inlineCode",{parentName:"p"},"createRecord")," operation."))}u.isMDXComponent=!0}}]);