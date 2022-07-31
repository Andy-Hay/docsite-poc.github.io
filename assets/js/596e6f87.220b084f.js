"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[5190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,g=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={title:"Redshift loader",date:"2022-04-05",sidebar_position:10},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/index",title:"Redshift loader",description:"Setting up Redshift",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:10,frontMatter:{title:"Redshift loader",date:"2022-04-05",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Loading transformed data",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/"},next:{title:"Snowflake loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/"}},s={},d=[{value:"Setting up Redshift",id:"setting-up-redshift",level:2},{value:"Downloading the artefact",id:"downloading-the-artefact",level:2},{value:"Configuring <code>rdb-loader-redshift</code>",id:"configuring-rdb-loader-redshift",level:2},{value:"Running the Redshift loader",id:"running-the-redshift-loader",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"setting-up-redshift"},"Setting up Redshift"),(0,n.kt)("p",null,"Refer to our ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/"},"guide")," on how to setup and launch a Redshift cluster."),(0,n.kt)("h2",{id:"downloading-the-artefact"},"Downloading the artefact"),(0,n.kt)("p",null,"The asset is published as a jar file attached to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"Github release notes")," for each version."),(0,n.kt)("p",null,"It's also available as a Docker image on Docker Hub under ",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow/rdb-loader-redshift:4.2.0"),"."),(0,n.kt)("h2",{id:"configuring-rdb-loader-redshift"},"Configuring ",(0,n.kt)("inlineCode",{parentName:"h2"},"rdb-loader-redshift")),(0,n.kt)("p",null,"The loader takes two configuration files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("inlineCode",{parentName:"li"},"config.hocon")," file with application settings"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("inlineCode",{parentName:"li"},"iglu_resolver.json")," file with the resolver configuration for your ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu"},"Iglu")," schema registry.")),(0,n.kt)("p",null,"An example of the minimal required config for the Redshift loader can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/redshift.config.minimal.hocon"},"here")," and a more detailed one ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/redshift.config.reference.hocon"},"here"),". For details about each setting, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/"},"configuration reference"),"."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},"here")," for details on how to prepare the Iglu resolver file."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," All self-describing schemas for events processed by RDB Loader ",(0,n.kt)("strong",{parentName:"p"},"must")," be hosted on ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"Iglu Server")," 0.6.0 or above. ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},"Iglu Central")," is a registry containing Snowplow-authored schemas. If you want to use them alongside your own, you will need to add it to your resolver file. Keep it mind that it could override your own private schemas if you give it higher priority. For details on this see ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/important-changes-to-iglu-centrals-api-for-schema-lists/5720#how-will-this-affect-my-snowplow-pipeline-3"},"here"),"."),(0,n.kt)("h2",{id:"running-the-redshift-loader"},"Running the Redshift loader"),(0,n.kt)("p",null,"The two config files need to be passed in as base64-encoded strings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ docker run snowplow/rdb-loader-redshift:4.2.0 \\\n  --iglu-config $RESOLVER_BASE64 \\\n  --config $CONFIG_BASE64\n")))}c.isMDXComponent=!0}}]);