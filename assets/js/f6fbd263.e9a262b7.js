"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[43317],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(i),g=o,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||n;return i?r.createElement(d,a(a({ref:t},c),{},{components:i})):r.createElement(d,a({ref:t},c))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<n;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},22151:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=i(87462),o=(i(67294),i(3905));const n={title:"Static repo",date:"2021-03-26",sidebar_position:4e3},a=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/index",id:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/index",title:"Static repo",description:"A static repo is simply an Iglu repository server structured as a static website.\xa0Iglu Central\xa0can be used as an example,\xa0serving\xa0its whole content over http.",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo",slug:"/migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659256171,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:4e3,frontMatter:{title:"Static repo",date:"2021-03-26",sidebar_position:4e3},sidebar:"tutorialSidebar",previous:{title:"Setup Iglu Server",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/"},next:{title:"JVM Embedded Repo",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/"}},p={},l=[{value:"1. Choose a hosting partner",id:"1-choose-a-hosting-partner",level:2},{value:"2. Prepare your files",id:"2-prepare-your-files",level:2},{value:"3. Host the files in your schema registry",id:"3-host-the-files-in-your-schema-registry",level:2},{value:"4. Update your Iglu client configuration",id:"4-update-your-iglu-client-configuration",level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A static repo is simply an Iglu repository server structured as a static website.\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-central-setup/"},"Iglu Central"),"\xa0can be used as an example,\xa0",(0,o.kt)("a",{parentName:"p",href:"http://iglucentral.com/"},"serving"),"\xa0its whole content over http."),(0,o.kt)("h2",{id:"1-choose-a-hosting-partner"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Static-repo-setup#1-choose-a-hosting-partner"}),"1","."," Choose a hosting partner"),(0,o.kt)("p",null,"We host static Iglu registry using Amazon S3, but you can choose any existing webserver your company is already using, such as Apache, IIS or Nginx."),(0,o.kt)("h2",{id:"2-prepare-your-files"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Static-repo-setup#2-prepare-your-files"}),"2","."," Prepare your files"),(0,o.kt)("p",null,"You need to create a file structure for your JSON Schemas. Please check out the template we provide here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/tree/master/2-repositories/static-registry/template"},"https://github.com/snowplow/iglu/tree/master/2-repositories/static-registry/template")),(0,o.kt)("p",null,"Make the following changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"com.myvendor"),"\xa0with your company domain, reverse-ordered"),(0,o.kt)("li",{parentName:"ul"},"Replace\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"myschema"),"\xa0with the name of your first JSON Schema"),(0,o.kt)("li",{parentName:"ul"},"Leave\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"jsonschema"),"\xa0as-is (we only support JSON Schemas for now)"),(0,o.kt)("li",{parentName:"ul"},"Replace\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"1-0-0"),"\xa0with the schema specification of your first JSON Schema")),(0,o.kt)("p",null,"Writing JSON Schemas is out of scope for this setup guide - see\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"Self-describing-JSONs-and-JSON-Schemas"),"\xa0for details."),(0,o.kt)("p",null,"Done? Now you are ready to host your files."),(0,o.kt)("h2",{id:"3-host-the-files-in-your-schema-registry"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Static-repo-setup#3-host-the-files-in-your-schema-registry"}),"3","."," Host the files in your schema registry"),(0,o.kt)("p",null,"To host your static schema registry, follow the AWS guide,\xa0",(0,o.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/gettingstarted/latest/swh/website-hosting-intro.html"},"Host a Static Website on Amazon Web Services"),"."),(0,o.kt)("p",null,"To host your static schema on an alternative webserving platform, please consult the appropriate webserver documentation or talk to your Systems team."),(0,o.kt)("h2",{id:"4-update-your-iglu-client-configuration"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Static-repo-setup#4-update-your-iglu-client-configuration"}),"4","."," Update your Iglu client configuration"),(0,o.kt)("p",null,"Finally, update your Iglu client configuration so that it can resolve your new registry."),(0,o.kt)("p",null,"For details on how to do this, check out the page on\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},"Iglu client configuration"),"."))}u.isMDXComponent=!0}}]);