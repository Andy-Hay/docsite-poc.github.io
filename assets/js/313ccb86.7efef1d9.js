"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38472],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=m(a),N=r,g=o["".concat(i,".").concat(N)]||o[N]||u[N]||l;return a?n.createElement(g,p(p({ref:e},k),{},{components:a})):n.createElement(g,p({ref:e},k))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,p[1]=d;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},25649:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Understanding the enriched TSV format",date:"2021-07-07",sidebar_position:1e3},p=void 0,d={unversionedId:"migrated/understanding-your-pipeline/canonical-event/understanding-the-enriched-tsv-format/index",id:"migrated/understanding-your-pipeline/canonical-event/understanding-the-enriched-tsv-format/index",title:"Understanding the enriched TSV format",description:"Overview - TSV Format",source:"@site/docs/migrated/understanding-your-pipeline/canonical-event/understanding-the-enriched-tsv-format/index.md",sourceDirName:"migrated/understanding-your-pipeline/canonical-event/understanding-the-enriched-tsv-format",slug:"/migrated/understanding-your-pipeline/canonical-event/understanding-the-enriched-tsv-format/",permalink:"/docsite-poc.github.io/docs/migrated/understanding-your-pipeline/canonical-event/understanding-the-enriched-tsv-format/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659256171,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:1e3,frontMatter:{title:"Understanding the enriched TSV format",date:"2021-07-07",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Understanding the structure of Snowplow data",permalink:"/docsite-poc.github.io/docs/migrated/understanding-your-pipeline/canonical-event/"},next:{title:"What is Snowplow Mini?",permalink:"/docsite-poc.github.io/docs/migrated/understanding-your-pipeline/what-is-snowplow-mini/"}},i={},m=[{value:"Overview - TSV Format",id:"overview---tsv-format",level:2}],k={toc:m};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview---tsv-format"},"Overview - TSV Format"),(0,r.kt)("p",null,"The Snowplow pipeline outputs the enriched stream in a Tab Separated Values (TSV) format. As TSV files do not contain header information, this page exists to help users of the enriched stream understand what each value represents."),(0,r.kt)("p",null,"Additionally, Snowplow has a number of Analytics SDKs available which help parse the TSV records into JSON:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-scala-analytics-sdk"},"Analytics SDK Scala")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-python-analytics-sdk"},"Analytics SDK Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-dotnet-analytics-sdk"},"Analytics SDK .NET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow-incubator/snowplow-js-analytics-sdk/"},"Analytics SDK Javascript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-golang-analytics-sdk"},"Analytics SDK Golang"))),(0,r.kt)("p",null,"For explanations of what each field represents, please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/canonical-event/"},"Canonical Event Model"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Index"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"app","_","id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"platform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"etl","_","tstamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"collector","_","tstamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","created","_","tstamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"txn","_","id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"name","_","tracker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"v","_","tracker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"v","_","collector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"v","_","etl")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"user","_","id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"user","_","ipaddress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"user","_","fingerprint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"domain","_","userid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"domain","_","sessionidx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"network","_","userid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","zipcode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","latitude")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","longitude")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","region","_","name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","isp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","netspeed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","referrer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlscheme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlpath")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlquery")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlfragment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlscheme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"41"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlpath")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"42"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlquery")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"43"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlfragment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"44"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","medium")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"46"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","term")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"47"),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","medium")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"48"),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"49"),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","term")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"51"),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","campaign")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"52"),(0,r.kt)("td",{parentName:"tr",align:null},"contexts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"53"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"54"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"55"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"56"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","property")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"57"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"58"),(0,r.kt)("td",{parentName:"tr",align:null},"unstruct","_","event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"59"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","orderid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","affiliation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"61"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","total")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","tax")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"63"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","shipping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"65"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"66"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"67"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","orderid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"68"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","sku")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"70"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"71"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"72"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","quantity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"73"),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","xoffset","_","min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"74"),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","xoffset","_","max")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"75"),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","yoffset","_","min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"76"),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","yoffset","_","max")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"77"),(0,r.kt)("td",{parentName:"tr",align:null},"useragent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"78"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"79"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","family")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"81"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"82"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","renderengine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"83"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","lang")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"84"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","pdf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"85"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","flash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"86"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","director")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"88"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","quicktime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"89"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","realplayer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","windowsmedia")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"91"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","gears")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"92"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","silverlight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"93"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","cookies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"94"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","colordepth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"95"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","viewwidth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"96"),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","viewheight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"97"),(0,r.kt)("td",{parentName:"tr",align:null},"os","_","name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"98"),(0,r.kt)("td",{parentName:"tr",align:null},"os","_","family")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"99"),(0,r.kt)("td",{parentName:"tr",align:null},"os","_","manufacturer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"os","_","timezone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"101"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"102"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","ismobile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"103"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","screenwidth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"104"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","screenheight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"105"),(0,r.kt)("td",{parentName:"tr",align:null},"doc","_","charset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"106"),(0,r.kt)("td",{parentName:"tr",align:null},"doc","_","width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"107"),(0,r.kt)("td",{parentName:"tr",align:null},"doc","_","height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"108"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"109"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","total","_","base")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"110"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","tax","_","base")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"111"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","shipping","_","base")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"112"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"113"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","price","_","base")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"114"),(0,r.kt)("td",{parentName:"tr",align:null},"base","_","currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"115"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","timezone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"116"),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","clickid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"117"),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"118"),(0,r.kt)("td",{parentName:"tr",align:null},"etl","_","tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"119"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","sent","_","tstamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"120"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","domain","_","userid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"121"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","device","_","tstamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"122"),(0,r.kt)("td",{parentName:"tr",align:null},"derived","_","contexts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123"),(0,r.kt)("td",{parentName:"tr",align:null},"domain","_","sessionid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"124"),(0,r.kt)("td",{parentName:"tr",align:null},"derived","_","tstamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"125"),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","vendor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"126"),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"127"),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"128"),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"129"),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","fingerprint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"130"),(0,r.kt)("td",{parentName:"tr",align:null},"true","_","tstamp")))))}u.isMDXComponent=!0}}]);