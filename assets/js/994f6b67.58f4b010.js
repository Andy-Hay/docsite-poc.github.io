"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[85538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||r;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"PII pseudonymization enrichment",date:"2020-02-14",sidebar_position:120},o=void 0,l={unversionedId:"migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/index",id:"migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/index",title:"PII pseudonymization enrichment",description:"PII (personally identifiable information) pseudonymization enrichment runs after all the other enrichments and pseudonymizes the fields that are configured as PIIs.",source:"@site/docs/migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/index.md",sourceDirName:"migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment",slug:"/migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:120,frontMatter:{title:"PII pseudonymization enrichment",date:"2020-02-14",sidebar_position:120},sidebar:"tutorialSidebar",previous:{title:"Custom JavaScript enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment/"},next:{title:"Currency conversion enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/currency-conversion-enrichment/"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"PII (personally identifiable information) pseudonymization enrichment runs after all the other enrichments and pseudonymizes the fields that are configured as PIIs."),(0,a.kt)("p",null,"It enables the users of Snowplow to better protect the privacy rights of data subjects, therefore aiding in compliance for regulatory measures."),(0,a.kt)("p",null,"In Europe the obligations regarding PIIs handling have been outlined on the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.eugdpr.org/"},"EU GDPR website"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.enrichments/pii_enrichment_config/jsonschema/2-0-0"},"Schema")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/pii_enrichment_config.json"},"Example"))),(0,a.kt)("p",null,"Two types of fields can be configured to be hashed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pojo"),": field that is effectively a scalar field in the enriched event (full list of fields that can be pseudonymized ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.enrichments/pii_enrichment_config/jsonschema/2-0-0#L43-L60"},"here"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"json"),": field contained inside a self-describing JSON (e.g. in ",(0,a.kt)("inlineCode",{parentName:"li"},"unstruct_event"),")")),(0,a.kt)("p",null,"With the configuration example, the fields ",(0,a.kt)("inlineCode",{parentName:"p"},"user_id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"user_ipaddress")," of the enriched event would be hashed, as well as the fields ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ip_opt")," of the unstructured event in case its schema matches ",(0,a.kt)("em",{parentName:"p"},"iglu:com.mailchimp/subscribe/jsonschema/1-","*","-","*"),"."),(0,a.kt)("p",null,"At the moment only ",(0,a.kt)("inlineCode",{parentName:"p"},'"pseudonymize"')," strategy is available and the available hashing algorithms can be found below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_MD2_"),": the 128-bit algorithm\xa0",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/MD2_(cryptography)#MD2_hashes"},"MD2"),"\xa0(not-recommended due to performance reasons see\xa0",(0,a.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6149"},"RFC6149"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_MD5_"),": the 128-bit algorithm\xa0",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/MD5#MD5_hashes"},"MD5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_SHA-1_:")," the 160-bit algorithm\xa0",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-1#Example_hashes"},"SHA-1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_SHA-256_"),": 256-bit variant of the\xa0",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions"},"SHA-2"),"\xa0algorithm"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_SHA-384_"),": 384-bit variant of the\xa0",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions"},"SHA-2"),"\xa0algorithm"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_SHA-512_"),": 512-bit variant of the\xa0",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions"},"SHA-2"),"\xa0algorithm")),(0,a.kt)("p",null,"It's ",(0,a.kt)("strong",{parentName:"p"},"important")," to keep these things in mind when using this enrichment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hashing a field can change its format (e.g. email) and its length, thus making a whole valid original event invalid if its schema is not compatible with the hashing."),(0,a.kt)("li",{parentName:"ul"},"When updating the ",(0,a.kt)("inlineCode",{parentName:"li"},"salt")," after it has already been used, same original values hashed with previous and new salt will have different hashes, thus making a join impossible and/or creating duplicate values.")),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.enrichments/pii_enrichment_config/jsonschema/2-0-0#L43-L60"},"These fields")," of the enriched event and any field of an unstructured event or context can be hashed."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"The fields are updated in-place in the enriched event."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"emitEvent")," is set to ",(0,a.kt)("em",{parentName:"p"},"true")," in the configuration, for each enriched event, an unstructured event wrapping the list of updates that happened with the fields is also emitted to the configured PII stream. Its schema can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/pii_transformation/jsonschema/1-0-0"},"here"),"."))}m.isMDXComponent=!0}}]);