"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[88079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"YAUAA enrichment",date:"2020-02-14",sidebar_position:30},o=void 0,s={unversionedId:"migrated/enriching-your-data/available-enrichments/yauaa-enrichment/index",id:"migrated/enriching-your-data/available-enrichments/yauaa-enrichment/index",title:"YAUAA enrichment",description:"YAUAA (Yet Another User Agent Analyzer) enrichment is a powerful user agent parser and analyzer.",source:"@site/docs/migrated/enriching-your-data/available-enrichments/yauaa-enrichment/index.md",sourceDirName:"migrated/enriching-your-data/available-enrichments/yauaa-enrichment",slug:"/migrated/enriching-your-data/available-enrichments/yauaa-enrichment/",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/yauaa-enrichment/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:30,frontMatter:{title:"YAUAA enrichment",date:"2020-02-14",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"IP Lookup enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/ip-lookup-enrichment/"},next:{title:"IP anonymization enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"YAUAA (Yet Another User Agent Analyzer) enrichment is a powerful user agent parser and analyzer."),(0,r.kt)("p",null,"It uses ",(0,r.kt)("a",{parentName:"p",href:"https://yauaa.basjes.nl/"},"YAUAA API")," to parse and analyze the user agent string of an HTTP request and extract as many relevant information as possible about the user's device and browser, like for instance the device class (Phone, Tablet, etc.)."),(0,r.kt)("table",{class:"has-fixed-layout"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("strong",null,"YAUAA parsing relies entirely on in-memory ",(0,r.kt)("em",null,"HashMap"),"s and require roughly 400 MB of RAM (see "),(0,r.kt)("a",{href:"https://yauaa.basjes.nl/README-MemoryUsage.html"},"here"),(0,r.kt)("strong",null,"). Additional memory is also needed if caching is enabled (by default)."))))),(0,r.kt)("p",null,"There is no interaction with an external system."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.enrichments/yauaa_enrichment_config/jsonschema/1-0-0"},"Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/yauaa_enrichment_config.json"},"Example"))),(0,r.kt)("p",null,"Only one parameter can be set in the configuration : ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheSize"),". This field determines the number of already parsed user agents that are kept in memory for faster processing. If set to 0, caching is disabled. If not set, a default size is used for the cache (10000)."),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("p",null,"This enrichment uses the field ",(0,r.kt)("inlineCode",{parentName:"p"},"useragent"),"."),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("p",null,"This enrichment adds a new derived context to the enriched event with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/nl.basjes/yauaa_context/jsonschema/1-0-1"},"this schema")," (since enrich 1.4.0)."),(0,r.kt)("p",null,"If a field can't be figured out by the algorithm, it won't be in the output. But some fields can have value\xa0",(0,r.kt)("em",{parentName:"p"},"UNKNOWN"),"."),(0,r.kt)("p",null,"The only field that will always be present is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"deviceClass"),"."),(0,r.kt)("p",null,"Here is an example of a derived context attached by this enrichment for a page visited with a Samsung Galaxy S9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "schema":"iglu:com.snowplowanalytics.snowplow/yauaa_context/jsonschema/1-0-1",\n    "data": {\n        "deviceClass":"Phone",\n        "deviceName":"Samsung SM-G960F",\n        "deviceBrand":"Samsung",\n        "operatingSystemClass":"Mobile",\n        "operatingSystemName":"Android",\n        "operatingSystemVersion":"8.0.0",\n        "operatingSystemNameVersion":"Android 8.0.0",\n        "operatingSystemVersionBuild":"R16NW",\n        "layoutEngineClass":"Browser",\n        "layoutEngineName":"Blink",\n        "layoutEngineVersion":"62.0",\n        "layoutEngineVersionMajor":"62",\n        "layoutEngineNameVersion":"Blink 62.0",\n        "layoutEngineNameVersionMajor":"Blink 62",\n        "agentClass":"Browser",\n        "agentName":"Chrome",\n        "agentVersion":"62.0.3202.84",\n        "agentVersionMajor":"62",\n        "agentNameVersion":"Chrome 62.0.3202.84",\n        "agentNameVersionMajor":"Chrome 62"\n   }\n}\n')),(0,r.kt)("p",null,"The full output possiblities generated by the YAUAA algorithm can be found\xa0",(0,r.kt)("a",{parentName:"p",href:"https://yauaa.basjes.nl/README-Output.html"},"here"),"."))}p.isMDXComponent=!0}}]);