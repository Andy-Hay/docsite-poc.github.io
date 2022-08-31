"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[11283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={title:"Technical information",date:"2021-03-26",sidebar_position:2e3},r=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/technical-information/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/technical-information/index",title:"Technical information",description:"Event mapping",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/technical-information/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/technical-information",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/technical-information/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/technical-information/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:2e3,frontMatter:{title:"Technical information",date:"2021-03-26",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Setup guide",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/"},next:{title:"Redshift",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/"}},c={},l=[{value:"Event mapping",id:"event-mapping",level:3},{value:"Batching",id:"batching",level:3},{value:"Error handling",id:"error-handling",level:3},{value:"Filtering",id:"filtering",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"event-mapping"},"Event mapping"),(0,i.kt)("p",null,"The relay transforms incoming events into the format expected by Indicative. Let's take this (very simplified for brevity) Snowplow enriched event in a JSON form as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "app_id": "foo",\n  "platform": "web",\n  "etl_tstamp": "2017-01-26 00:01:25.292",\n  "collector_tstamp": "2013-11-26 00:02:05",\n  "dvce_created_tstamp": "2013-11-26 00:03:57.885",\n  "event": "page_view",\n  "event_id": "c6ef3124-b53a-4b13-a233-0088f79dcbcb",\n  "user_id": "jon.doe@email.com",\n  "user_fingerprint": "2161814971",\n  "domain_userid": "bc2e92ec6c204a14",\n  "network_userid": "ecdff4d0-9175-40ac-a8bb-325c49733607",\n  "geo_country": "UK",\n  "geo_city": "London",\n  "page_url": "http://www.snowplowanalytics.com",\n  "derived_contexts": {\n    "schema": "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-1",\n    "data": [\n      {\n        "schema": "iglu:com.snowplowanalytics.snowplow/ua_parser_context/jsonschema/1-0-0",\n        "data": {\n          "useragentFamily": "Chrome",\n            "useragentMajor": "67",\n            "useragentMinor": "0",\n            "useragentPatch": "3396",\n            "useragentVersion": "Chrome 67.0.3396",\n            "osFamily": "Windows 7",\n            "osMajor": null,\n            "osMinor": null,\n            "osPatch": null,\n            "osPatchMinor": null,\n            "osVersion": "Windows 7",\n            "deviceFamily": "Other"\n        }\n      }\n    ]\n  },\n  "domain_sessionid": "2b15e5c8-d3b1-11e4-b9d6-1681e6b88ec1",\n  "derived_tstamp": "2013-11-26 00:03:57.886",\n  "event_vendor": "com.snowplowanalytics.snowplow",\n  "event_name": "page_view",\n  "event_format": "jsonschema",\n  "event_version": "1-0-0",\n  "event_fingerprint": "e3dbfa9cca0412c3d4052863cefb547f",\n  "true_tstamp": "2013-11-26 00:03:57.886"\n}\n')),(0,i.kt)("p",null,"It would be transformed into the following Indicative event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' {\n    "eventName": "page_view",\n    "timestamp": "2013-11-26T00:03:57.886",\n    "eventUniqueId": "jon.doe@email.com",\n    "properties": {\n        "app_id": "foo",\n        "platform": "web",\n        "etl_tstamp": "2017-01-26 00:01:25.292",\n        "collector_tstamp": "2013-11-26 00:02:05",\n        "dvce_created_tstamp": "2013-11-26 00:03:57.885",\n        "event": "page_view",\n        "event_id": "c6ef3124-b53a-4b13-a233-0088f79dcbcb",\n        "user_id": "jon.doe@email.com",\n        "user_fingerprint": "2161814971",\n        "domain_userid": "bc2e92ec6c204a14",\n        "network_userid": "ecdff4d0-9175-40ac-a8bb-325c49733607",\n        "geo_country": "US",\n        "geo_city": "New York",\n        "page_url": "http://www.snowplowanalytics.com",\n        "domain_sessionid": "2b15e5c8-d3b1-11e4-b9d6-1681e6b88ec1",\n        "derived_tstamp": "2013-11-26 00:03:57.886",\n        "event_vendor": "com.snowplowanalytics.snowplow",\n        "event_name": "page_view",\n        "event_format": "jsonschema",\n        "event_version": "1-0-0",\n        "event_fingerprint": "e3dbfa9cca0412c3d4052863cefb547f",\n        "true_tstamp": "2013-11-26 00:03:57.886",\n        "ua_parser_context_useragentFamily": "Chrome",\n        "ua_parser_context_useragentMajor": "67",\n        "ua_parser_context_useragentMinor": "0",\n        "ua_parser_context_useragentPatch": "3396",\n        "ua_parser_context_useragentVersion": "Chrome 67.0.3396",\n        "ua_parser_context_osFamily": "Windows 7",\n        "ua_parser_context_osVersion": "Windows 7",\n        "ua_parser_context_deviceFamily": "Other"  \n    }\n }\n')),(0,i.kt)("p",null,"As the example shows, any ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," values in the original event get removed, to make the corresponding Indicative event as compact as possible."),(0,i.kt)("h3",{id:""},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-indicative-relay/wiki/Technical-Information#batching"})),(0,i.kt)("h3",{id:"batching"},"Batching"),(0,i.kt)("p",null,"The Lambda does not process the records one by one. Instead, it uses features of Kinesis and Indicative REST API to both read and write the events in batches. You can set the maximum batch size when creating the function. There is no minimum batch size, so the lambda can be triggered with fewer records than configured."),(0,i.kt)("h3",{id:"-1"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-indicative-relay/wiki/Technical-Information#error-handling"})),(0,i.kt)("h3",{id:"error-handling"},"Error handling"),(0,i.kt)("p",null,"During mapping of events into Indicative event format, a failure of one event does not mean a failure of the whole batch."),(0,i.kt)("p",null,"Each failed case is separately logged into ",(0,i.kt)("em",{parentName:"p"},"CloudWatch"),", while the rest are successfully submitted to Indicative. Any HTTP errors are also logged into ",(0,i.kt)("em",{parentName:"p"},"CloudWatch"),". As of version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.4.0"),", there is no retry mechanism built in."),(0,i.kt)("h3",{id:"-2"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-indicative-relay/wiki/Technical-Information#filtering"})),(0,i.kt)("h3",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"There are three ways in which you can filter the stream of data going to Indicative:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"filter out specific events"),(0,i.kt)("li",{parentName:"ul"},"filter out specific canonical event fields"),(0,i.kt)("li",{parentName:"ul"},"filter out specific context fields.")),(0,i.kt)("p",null,"With the first filter, the whole line of data containing the event will be dropped."),(0,i.kt)("p",null,"With the second filter, only specified fields of the canonical Snowplow event will be removed and the rest of the data for the event will be relayed."),(0,i.kt)("p",null,"With the third filter, all the fields belonging to the specified context(s) will be removed and the rest of the data for the event will be relayed."))}d.isMDXComponent=!0}}]);