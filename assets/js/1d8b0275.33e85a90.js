"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[51097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,d=g["".concat(p,".").concat(m)]||g[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Iglu Central Setup",date:"2021-03-26",sidebar_position:50},a=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/iglu/iglu-central-setup/index",id:"migrated/pipeline-components-and-applications/iglu/iglu-central-setup/index",title:"Iglu Central Setup",description:"This guide is designed for Iglu users wanting to create a public mirror or private clone of\xa0Iglu Central. There are a couple of reasons you may want to do this:",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/iglu-central-setup/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/iglu-central-setup",slug:"/migrated/pipeline-components-and-applications/iglu/iglu-central-setup/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-central-setup/",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Iglu Central Setup",date:"2021-03-26",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Scala client",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/"},next:{title:"Dataflow Runner",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/dataflow-runner/"}},p={},c=[{value:"Create Iglu Central Mirror",id:"create-iglu-central-mirror",level:2},{value:"Hosting an Iglu Server based mirror",id:"hosting-an-iglu-server-based-mirror",level:3},{value:"Hosting a Static Repository based mirror",id:"hosting-a-static-repository-based-mirror",level:3},{value:"Update your Iglu client configuration",id:"update-your-iglu-client-configuration",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide is designed for Iglu users wanting to create a public mirror or private clone of\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},"Iglu Central"),". There are a couple of reasons you may want to do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Some Snowplow components require a Iglu Server, so the static Iglu Central repository will not work."),(0,o.kt)("li",{parentName:"ol"},"You may want to access Iglu Central from a software system that cannot access the open internet."),(0,o.kt)("li",{parentName:"ol"},"You may want a mirror of Iglu Central which has lower latency to your software system.")),(0,o.kt)("p",null,"This guide is divided into two sections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create Iglu Central Mirror"),(0,o.kt)("li",{parentName:"ol"},"Update your Iglu client configuration to point to your new Iglu Central")),(0,o.kt)("h2",{id:"create-iglu-central-mirror"},"Create Iglu Central Mirror"),(0,o.kt)("h3",{id:"hosting-an-iglu-server-based-mirror"},"Hosting an Iglu Server based mirror"),(0,o.kt)("p",null,"Some components of Snowplow require an Iglu Server, and a static repo will not work. This means you'll want to host a mirror of Iglu Central. You can mirror Iglu Central using ",(0,o.kt)("inlineCode",{parentName:"p"},"[igluctl](/docs/migrated/pipeline-components-and-applications/iglu/igluctl)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/iglu-central\ncd iglu-central\nigluctl static push --public schemas/ http://MY-IGLU-URL 00000000-0000-0000-0000-000000000000\n")),(0,o.kt)("p",null,"For further information on Iglu Central, consult the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-central-setup/"},"Iglu Central setup guide"),"."),(0,o.kt)("h3",{id:"hosting-a-static-repository-based-mirror"},"Hosting a Static Repository based mirror"),(0,o.kt)("p",null,"Iglu Central is built on top of the Iglu static repo server, so the first step is to\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/setting-up-iglu/step-2-setup-an-iglu-repository/2-1-a-static-repo/"},"setup a static repo"),". You can give your copy of Iglu Central a name like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://iglucentral.acme.com\n")),(0,o.kt)("p",null,"Once you have completed this static repo setup, then copy into your\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"/schemas"),"\xa0sub-folder\xa0",(0,o.kt)("strong",{parentName:"p"},"all"),"\xa0of the schemas that you can find ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas"},"in the Iglu Central GitHub Repo")),(0,o.kt)("p",null,"Once you have done this, check that your schemas are publically accessible, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://iglucentral.acme.com/schemas/com.snowplowanalytics.self-desc/instance/jsonschema/1-0-2\n")),(0,o.kt)("h2",{id:"update-your-iglu-client-configuration"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-Central-setup#update-your-iglu-client-configuration"}),"Update your Iglu client configuration"),(0,o.kt)("p",null,"You now need to update your Iglu client configuration to point to your Iglu Central mirror, rather than the original."),(0,o.kt)("p",null,"Given a standard Iglu client configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-2",\n  "data": {\n    "cacheSize": 500,\n    "repositories": [\n      {\n        "name": "Iglu Central",\n        "priority": 0,\n        "vendorPrefixes": [ "com.snowplowanalytics" ],\n        "connection": {\n          "http": {\n            "uri": "http://iglucentral.com"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Update it to point to your Iglu Central mirror:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-2",\n  "data": {\n    "cacheSize": 500,\n    "repositories": [\n      {\n        "name": "Acme Corp\'s Iglu Central mirror",\n        "priority": 0,\n        "vendorPrefixes": [ "com.snowplowanalytics" ],\n        "connection": {\n          "http": {\n            "uri": "http://iglucentral.acme.com"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"And that's it - your Iglu client should now resolve to your Iglu Central mirror, rather than the original."))}s.isMDXComponent=!0}}]);