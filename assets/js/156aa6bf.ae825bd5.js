"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[34046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"IAB enrichment",date:"2020-02-14",sidebar_position:150},o=void 0,l={unversionedId:"migrated/enriching-your-data/available-enrichments/iab-enrichment/index",id:"migrated/enriching-your-data/available-enrichments/iab-enrichment/index",title:"IAB enrichment",description:"The IAB Spiders & Robots enrichment uses the IAB/ABC International Spiders and Bots List to determine whether an event was produced by a user or a robot/spider based on its\u2019 IP address and user agent.",source:"@site/docs/migrated/enriching-your-data/available-enrichments/iab-enrichment/index.md",sourceDirName:"migrated/enriching-your-data/available-enrichments/iab-enrichment",slug:"/migrated/enriching-your-data/available-enrichments/iab-enrichment/",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/iab-enrichment/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:150,frontMatter:{title:"IAB enrichment",date:"2020-02-14",sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Custom API Request enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/custom-api-request-enrichment/"},next:{title:"Modeling your data",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/"}},s={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The IAB Spiders & Robots enrichment uses the I",(0,r.kt)("a",{parentName:"p",href:"https://iabtechlab.com/software/iababc-international-spiders-and-bots-list/"},"AB/ABC International Spiders and Bots List")," to determine whether an event was produced by a user or a robot/spider based on its\u2019 IP address and user agent."),(0,r.kt)("p",null,"Spiders & bots are sometimes considered a necessary evil of the web. We want search engine crawlers to find our site, but we also don\u2019t want a lot of non-human traffic clouding our reporting."),(0,r.kt)("p",null,"The Interactive Advertising Bureau (IAB) is an advertising business organization that develops industry standards, conducts research, and provides legal support for the online advertising industry."),(0,r.kt)("p",null,"Their internationally recognized list of spiders and bots is regularly maintained to try and identify the IP addresses of known bots and spiders."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.enrichments/iab_spiders_and_robots_enrichment/jsonschema/1-0-0"},"Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/iab_spiders_and_robots_enrichment.json"},"Example"))),(0,r.kt)("p",null,"There are three fields that can be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," section of the enrichment configuration JSON:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ipFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"excludeUseragentFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeUseragentFile"))),(0,r.kt)("p",null,"They correspond to one of the IAB/ABC database files, and need to have two inner fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"database"),"\xa0field containing the name of the database file."),(0,r.kt)("li",{parentName:"ul"},"The\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"uri"),"\xa0field containing the URI of the bucket in which the database file is found. This field supports ",(0,r.kt)("inlineCode",{parentName:"li"},"http"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"https"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"gs")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"s3")," schemes.")),(0,r.kt)("p",null,"The table below describes the three types of database fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Field name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Database description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Database filename")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ipFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Blacklist of IP addresses considered to be robots of spiders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ip_exclude_current_cidr.txt"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"excludeUseragentFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Blacklist of useragent strings considered to be robots or spiders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"exclude_current.txt"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"includeUseragentFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist of useragent strings considered to be browsers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"include_current.txt"'))))),(0,r.kt)("p",null,"All three of these fields\xa0",(0,r.kt)("strong",{parentName:"p"},"must"),"\xa0be added to the enrichment JSON, as the IAB lookup process uses all three databases in order to detect robots and spiders. Note that the database files are commercial and proprietary and should not be stored publicly \u2013 for instance, on unprotected HTTPS or in a public S3 bucket."),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("p",null,"This enrichment uses the following fields of a Snowplow event:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useragent"),"\xa0to determine an event\u2019s user agent, which will be validated against the databases described in\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"excludeUseragentFile"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"includeUseragentFile"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user_ipaddress"),"\xa0to determine an event\u2019s IP address, which will be validated against the database described in\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ipFile"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"derived_tstamp"),"\xa0to determine an event\u2019s datetime. Some entries in the Spiders & Robots List can be considered \u201cstale\u201d, and will be given a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"category"),"\xa0of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"INACTIVE_SPIDER_OR_ROBOT"),"\xa0rather than\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ACTIVE_SPIDER_OR_ROBOT"),"\xa0based on their age.")),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("p",null,"This enrichment adds a new context to the enriched event with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.iab.snowplow/spiders_and_robots/jsonschema/1-0-0"},"this schema"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{    "schema": "iglu:com.iab.snowplow/spiders_and_robots/jsonschema/1-0-0",    "data": {        "spiderOrRobot": false,        "category": "BROWSER",        "reason": "PASSED_ALL",        "primaryImpact": "NONE"    }}\n')))}c.isMDXComponent=!0}}]);