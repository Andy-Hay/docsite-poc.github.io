"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[28837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Referer parser enrichment",date:"2020-02-14",sidebar_position:50},o=void 0,l={unversionedId:"migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment/index",id:"migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment/index",title:"Referer parser enrichment",description:"This enrichment uses\xa0snowplow referer-parser\xa0library to extract attribution data from referer URLs.",source:"@site/docs/migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment/index.md",sourceDirName:"migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment",slug:"/migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment/",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:50,frontMatter:{title:"Referer parser enrichment",date:"2020-02-14",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"IP anonymization enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/"},next:{title:"Cookie extractor enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/cookie-extractor-enrichment/"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This enrichment uses\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/referer-parser"},"snowplow referer-parser"),"\xa0library to extract attribution data from referer URLs."),(0,a.kt)("p",null,"Knowing which sites refer users to our website is very much a staple of analytics in order to help understand traffic patterns. This enrichment takes the value of the referring URL and matches it against the company/site it belongs to."),(0,a.kt)("p",null,"This is particularly useful when looking for specific traffic from search engine providers or social networks for instance. Rather than scouring a full referrer URL list this enrichment adds an additional field so that it's possible to look at reports that combine sub-domains from some of the bigger referrers."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/referer_parser/jsonschema/2-0-0"},"Schema")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/referer_parser.json"},"Example"))),(0,a.kt)("p",null,"Snowplow has several subdomains like ",(0,a.kt)("em",{parentName:"p"},"console.snowplowanalytics.com")," and ",(0,a.kt)("em",{parentName:"p"},"discourse.snowplowanalytics.com"),". As users move from these subdomains to our main ",(0,a.kt)("em",{parentName:"p"},"snowplowanalytics.com")," domain, we would like to capture that traffic as being referred internally. Therefore we would set the configuration as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"internalDomains": [\n    "console.snowplowanalytics.com",\n    "discourse.snowplowanalytics.com"\n],\n')),(0,a.kt)("p",null,"Enabling this enrichment with the above configuration would fill the ",(0,a.kt)("inlineCode",{parentName:"p"},"refr_medium")," column in our data warehouse with ",(0,a.kt)("em",{parentName:"p"},"\u201cInternal\u201d")," (rather then ",(0,a.kt)("em",{parentName:"p"},'"Unknown"'),") when the referring URL to a page matches the subdomains above."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"This enrichment populates the following fields of the atomic event :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"refr_medium")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of referer. Examples : Search, Internal, Unknown, Social, Email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"refr_source")),(0,a.kt)("td",{parentName:"tr",align:null},"Name of referer if recognised. Examples: Google, Facebook")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"refr_term")),(0,a.kt)("td",{parentName:"tr",align:null},"Keywords if source is a search engine")))),(0,a.kt)("p",null,"With this information in the data warehouse it's possible to get such insights:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"refr","_","medium"),(0,a.kt)("th",{parentName:"tr",align:null},"number of sessions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Search"),(0,a.kt)("td",{parentName:"tr",align:null},"272,699")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Internal"),(0,a.kt)("td",{parentName:"tr",align:null},"142,555")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,a.kt)("td",{parentName:"tr",align:null},"127,335")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Social"),(0,a.kt)("td",{parentName:"tr",align:null},"14,525")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Email"),(0,a.kt)("td",{parentName:"tr",align:null},"5,345")))))}m.isMDXComponent=!0}}]);