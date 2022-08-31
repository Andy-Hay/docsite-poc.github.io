"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[44783],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"IP anonymization enrichment",date:"2020-02-14",sidebar_position:40},o=void 0,c={unversionedId:"migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/index",id:"migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/index",title:"IP anonymization enrichment",description:'This enrichment replaces the end of the user\'s IP address with "x"s, on a configurable length. For instance 13.54.45.87 could become 13.54.x.x.',source:"@site/docs/migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/index.md",sourceDirName:"migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment",slug:"/migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/ip-anonymization-enrichment/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:40,frontMatter:{title:"IP anonymization enrichment",date:"2020-02-14",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"YAUAA enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/yauaa-enrichment/"},next:{title:"Referer parser enrichment",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment/"}},l={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'This enrichment replaces the end of the user\'s IP address with "x"s, on a configurable length. For instance 13.54.45.87 could become 13.54.x.x.'),(0,i.kt)("p",null,"Both IPv4 and IPv6 are supported."),(0,i.kt)("p",null,"This enrichment runs after ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/available-enrichments/ip-lookup-enrichment/"},"IP lookup enrichment"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/anon_ip/jsonschema/1-0-1"},"Schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/anon_ip.json"},"Example"))),(0,i.kt)("p",null,"The number of octets (IPv4) to anonymize is specified with ",(0,i.kt)("inlineCode",{parentName:"p"},"anonOctets")," and the number of segments (IPv6) to anonymize is specified with ",(0,i.kt)("inlineCode",{parentName:"p"},"anonSegments"),"."),(0,i.kt)("p",null,"For example anonymizing one octet would change an IPv4 address of 255.255.255.255 to 255.255.255.x, and anonymizing three octets would change it to 255.x.x.x."),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("p",null,"This enrichment uses the IP of the user, that can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"user_ipaddress"),"\xa0field of the atomic event."),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"The anonymized value of the IP address is updated in-place in ",(0,i.kt)("inlineCode",{parentName:"p"},"user_ipaddress"),"\xa0field, before ever being stored."))}u.isMDXComponent=!0}}]);