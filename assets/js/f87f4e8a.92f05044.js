"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[25937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"Setup Iglu Server",date:"2021-03-26",sidebar_position:1e3},a=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/index",id:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/index",title:"Setup Iglu Server",description:"For more information on the architecture of the Iglu server, please read\xa0the technical documentation.",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup",slug:"/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:1e3,frontMatter:{title:"Setup Iglu Server",date:"2021-03-26",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Iglu Server configuration reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/"},next:{title:"Static repo",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/"}},p={},s=[{value:"Available on Terraform Registry",id:"available-on-terraform-registry",level:2},{value:"1. Run the Iglu server",id:"1-run-the-iglu-server",level:2},{value:"2. Initialize the database",id:"2-initialize-the-database",level:2},{value:"3. Use the API key generation service",id:"3-use-the-api-key-generation-service",level:2},{value:"Dummy mode",id:"dummy-mode",level:2},{value:"Logging",id:"logging",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For more information on the architecture of the Iglu server, please read\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"the technical documentation"),"."),(0,o.kt)("h2",{id:"available-on-terraform-registry"},"Available on Terraform Registry"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/iglu-server-ec2/aws/latest"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Terraform&message=Registry&color=7B42BC&logo=terraform",alt:null}))),(0,o.kt)("p",null,"A Terraform module is available which deploys an Iglu Server on AWS EC2 without the need for this manual setup."),(0,o.kt)("h2",{id:"1-run-the-iglu-server"},"1","."," Run the Iglu server"),(0,o.kt)("p",null,"Iglu Server is ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/snowplow/iglu-server"},"published on Docker Hub"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker pull snowplow/iglu-server:0.8.4\n")),(0,o.kt)("p",null,"The application is configured by passing a hocon file on the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm \\\n  -v $PWD/config.hocon:/iglu/config.hocon \\\n  snowplow/iglu-server:0.8.4 --config /iglu/config.hocon\n")),(0,o.kt)("p",null,"Alternatively, you can download and run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/iglu-server/releases"},"a jar file from the github release"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar iglu-server-0.8.4.jar --config /path/to/config.hocon\n")),(0,o.kt)("p",null,"Here is an example of a minimal configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "database": {\n    "host": "postgres"\n    "dbname": "igludb"\n    "username": "postgres"\n    "password": "mysecret"\n  }\n\n  "superApiKey": "bb7b7503-40d3-459c-943a-f8d31a6f5638"\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/"},"the configuration reference")," for a complete description of all parameters."),(0,o.kt)("p",null,"We also provide a\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/iglu-server/blob/master/docker/docker-compose.yml"},"docker-compose.yml"),"\xa0to help you get started."),(0,o.kt)("h2",{id:"2-initialize-the-database"},"2","."," Initialize the database"),(0,o.kt)("p",null,"With a fresh install you need to manually create the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ psql -U postgres -c "CREATE DATABASE igludb"\n')),(0,o.kt)("p",null,"And then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," command of the iglu server to create the database tables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm \\\n  -v $PWD/config.hocon:/iglu/config.hocon \\\n  snowplow/iglu-server:0.8.4 setup --config /iglu/config.hocon\n")),(0,o.kt)("h2",{id:"3-use-the-api-key-generation-service"},"3","."," Use the API key generation service"),(0,o.kt)("p",null,"The super API key you put in the configuration file is able to generate further API keys for your clients through the API key generation service."),(0,o.kt)("p",null,"To generate a pair of read and write API keys for a specific vendor prefix, simply send a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request to this URL using your super API key in an\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"apikey"),"\xa0HTTP header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HOST/api/auth/keygen\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl \\\n  HOST/api/auth/keygen \\\n  -X POST \\\n  -H 'apikey: your_super_apikey' \\\n  -d '{\"vendorPrefix\":\"com.acme\"}'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," From 0.6.0+ the vendor prefix should be ",(0,o.kt)("inlineCode",{parentName:"p"},"vendorPrefix")," within a JSON body however prior to this it was ",(0,o.kt)("inlineCode",{parentName:"p"},"vendor_prefix")," as a query parameter."),(0,o.kt)("p",null,"You should receive a JSON response like this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "read": "an-uuid",\n  "write": "another-uuid"\n}\n')),(0,o.kt)("p",null,"If you need to revoke a specific API key, you can do so by sending a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),"\xa0request to the following endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HOST/api/auth/keygen?key=some-uuid\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl \\\n  HOST/api/auth/keygen \\\n  -X DELETE \\\n  -H 'apikey: your_super_apikey' \\\n  -d 'key=some-uuid'\n")),(0,o.kt)("p",null,"You should now be all set up to use the Iglu server, if you would like to know more about the Iglu server, please read the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"technical documentation"),"."),(0,o.kt)("h2",{id:"dummy-mode"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Setting-up-an-Iglu-Server#dummy-mode"}),"Dummy mode"),(0,o.kt)("p",null,"Since 0.6.0 Iglu Server supports new dummy DB mode. In this mode, Server does not require persistent storage as PostgreSQL and stores all data in memory. Use this for debug purposes only, all your data will be lost after restart."),(0,o.kt)("p",null,"To enable dummy mode, you need to set\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"database.type"),"\xa0setting to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},'"dummy"'),"."),(0,o.kt)("p",null,"Dummy Iglu Server works with single hardcoded master API key -\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"48b267d7-cd2b-4f22-bae4-0f002008b5ad"),", which you can use to upload your schemas and create new api keys."),(0,o.kt)("h2",{id:"logging"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Setting-up-an-Iglu-Server#logging"}),"Logging"),(0,o.kt)("p",null,"Iglu Server uses\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.slf4j.org/api/org/slf4j/impl/SimpleLogger.html"},"SLF4J Simple Logger"),"\xa0underneath. Which can be configured via system properties."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ iglu-server-0.8.4.jar \\\n  -Dorg.slf4j.simpleLogger.logFile=server.log                                   # In order to redirect logs\n  -Dorg.slf4j.simpleLogger.log.org.http4s.blaze.channel.nio1.SelectorLoop=warn  # To suppress very verbose SelectorLoop output\n")),(0,o.kt)("p",null,"On debug loglevel\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaService"),"\xa0will print all HTTP requests and responses."))}c.isMDXComponent=!0}}]);