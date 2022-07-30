"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[33154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},24402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={title:"Building an Enriched event relay for GTM SS",date:"2021-11-24",sidebar_position:999990},i=void 0,l={unversionedId:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/index",id:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/index",title:"Building an Enriched event relay for GTM SS",description:"This documentation is for Open Source pipeline installations which want to explore using Google Tag Manager Server Side with Enriched Events.",source:"@site/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss",slug:"/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/",draft:!1,tags:[],version:"current",sidebarPosition:999990,frontMatter:{title:"Building an Enriched event relay for GTM SS",date:"2021-11-24",sidebar_position:999990},sidebar:"tutorialSidebar",previous:{title:"HTTP Request Tag Configuration",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/"},next:{title:"Custom Integrations",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/custom-integrations/"}},s={},u=[{value:"GTM SS Snowplow Client as Enriched Destination",id:"gtm-ss-snowplow-client-as-enriched-destination",level:2},{value:"Example CURL request",id:"example-curl-request",level:3}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation is for Open Source pipeline installations which want to explore using Google Tag Manager Server Side with Enriched Events."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Snowplow BDP"),"\xa0customers have access to relay functionality which can forward enriched events to a GTM SS container.\xa0",(0,o.kt)("strong",{parentName:"p"},"Open Source pipelines"),"\xa0will require a relay to be built which can forward enriched events from a Snowplow pipeline."),(0,o.kt)("p",null,"To understand the fundamentals that are discussed here, please read the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/forwarding-events-to-destinations/supporting-additional-destinations/custom-integrations/"},"Custom Integrations documentation"),"."),(0,o.kt)("h2",{id:"gtm-ss-snowplow-client-as-enriched-destination"},"GTM SS Snowplow Client as Enriched Destination"),(0,o.kt)("p",null,"The GTM SS Snowplow Client has an enriched endpoint which accepts enriched events in JSON. Before sending events from the Snowplow Enriched Stream, these events should be converted from Enriched TSV events into Enriched JSON using a\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/modeling-your-data/analytics-sdk/"},"Snowplow Analytics SDK"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up the\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/forwarding-events-to-destinations/supporting-additional-destinations/google-tag-manager-server-side/snowplow-client-for-gtm-ss/"},"Snowplow Client"),"\xa0within your GTM Server Side Container."),(0,o.kt)("li",{parentName:"ol"},"Create a\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/forwarding-events-to-destinations/supporting-additional-destinations/custom-integrations/"},"Custom Integration application for AWS or GCP"),"."),(0,o.kt)("li",{parentName:"ol"},"Use an\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/modeling-your-data/analytics-sdk/"},"Analytics SDK"),"\xa0to convert to an Enriched JSON."),(0,o.kt)("li",{parentName:"ol"},"Send the JSON event as POST request to\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"https://{{gtm-ss-url}}/com.snowplowanalytics.snowplow/enriched"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The payload can be a single Enriched JSON event, or an array of Enriched JSON events.")))),(0,o.kt)("h3",{id:"example-curl-request"},"Example CURL request"),(0,o.kt)("p",null,"Below is an example CURL request of what your application should send to GTM SS Snowplow Client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --request POST \\\n  --url https://{{gtm-ss-url}}/com.snowplowanalytics.snowplow/enriched \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "app_id": "example-website",\n  "platform": "web",\n  "etl_tstamp": "2021-11-26T00:01:25.292Z",\n  "collector_tstamp": "2021-11-20T00:02:05Z",\n  "dvce_created_tstamp": "2021-11-20T00:03:57.885Z",\n  "event": "unstruct",\n  "event_id": "c6ef3124-b53a-4b13-a233-0088f79dcbcb",\n  "txn_id": null,\n  "name_tracker": "sp1",\n  "v_tracker": "js-3.1.6",\n  "v_collector": "ssc-2.3.0-stdout$",\n  "v_etl": "snowplow-micro-1.1.2-common-2.0.1",\n  "user_id": "jon.doe@email.com",\n  "user_ipaddress": "92.231.54.234",\n  "user_fingerprint": null,\n  "domain_userid": "de81d764-990c-4fdc-a37e-adf526909ea6",\n  "domain_sessionidx": 3,\n  "network_userid": "ecdff4d0-9175-40ac-a8bb-325c49733607",\n  "geo_country": "US",\n  "geo_region": "CA",\n  "geo_city": "San Francisco",\n  "geo_zipcode": "94109",\n  "geo_latitude": 37.443604,\n  "geo_longitude": -122.4124,\n  "geo_location": "37.443604,-122.4124",\n  "geo_region_name": "San Francisco",\n  "ip_isp": "AT&T",\n  "ip_organization": "AT&T",\n  "ip_domain": "att.com",\n  "ip_netspeed": "Cable/DSL",\n  "page_url": "https://snowplowanalytics.com/use-cases/",\n  "page_title": "Snowplow Analytics",\n  "page_referrer": null,\n  "page_urlscheme": "https",\n  "page_urlhost": "snowplowanalytics.com",\n  "page_urlport": 443,\n  "page_urlpath": "/use-cases/",\n  "page_urlquery": "",\n  "page_urlfragment": "",\n  "refr_urlscheme": null,\n  "refr_urlhost": null,\n  "refr_urlport": null,\n  "refr_urlpath": null,\n  "refr_urlquery": null,\n  "refr_urlfragment": null,\n  "refr_medium": null,\n  "refr_source": null,\n  "refr_term": null,\n  "mkt_medium": null,\n  "mkt_source": null,\n  "mkt_term": null,\n  "mkt_content": null,\n  "mkt_campaign": null,\n  "contexts_org_w3_performance_timing_1": [\n    {\n      "navigationStart": 1415358089861,\n      "unloadEventStart": 1415358090270,\n      "unloadEventEnd": 1415358090287,\n      "redirectStart": 0,\n      "redirectEnd": 0,\n      "fetchStart": 1415358089870,\n      "domainLookupStart": 1415358090102,\n      "domainLookupEnd": 1415358090102,\n      "connectStart": 1415358090103,\n      "connectEnd": 1415358090183,\n      "requestStart": 1415358090183,\n      "responseStart": 1415358090265,\n      "responseEnd": 1415358090265,\n      "domLoading": 1415358090270,\n      "domInteractive": 1415358090886,\n      "domContentLoadedEventStart": 1415358090968,\n      "domContentLoadedEventEnd": 1415358091309,\n      "domComplete": 0,\n      "loadEventStart": 0,\n      "loadEventEnd": 0\n    }\n  ],\n  "se_category": null,\n  "se_action": null,\n  "se_label": null,\n  "se_property": null,\n  "se_value": null,\n  "unstruct_event_com_snowplowanalytics_snowplow_link_click_1": {\n    "targetUrl": "http://www.example.com",\n    "elementClasses": [\n      "foreground"\n    ],\n    "elementId": "exampleLink"\n  },\n  "tr_orderid": null,\n  "tr_affiliation": null,\n  "tr_total": null,\n  "tr_tax": null,\n  "tr_shipping": null,\n  "tr_city": null,\n  "tr_state": null,\n  "tr_country": null,\n  "ti_orderid": null,\n  "ti_sku": null,\n  "ti_name": null,\n  "ti_category": null,\n  "ti_price": null,\n  "ti_quantity": null,\n  "pp_xoffset_min": null,\n  "pp_xoffset_max": null,\n  "pp_yoffset_min": null,\n  "pp_yoffset_max": null,\n  "useragent": null,\n  "br_name": null,\n  "br_family": null,\n  "br_version": null,\n  "br_type": null,\n  "br_renderengine": null,\n  "br_lang": null,\n  "br_features_pdf": true,\n  "br_features_flash": false,\n  "br_features_java": null,\n  "br_features_director": null,\n  "br_features_quicktime": null,\n  "br_features_realplayer": null,\n  "br_features_windowsmedia": null,\n  "br_features_gears": null,\n  "br_features_silverlight": null,\n  "br_cookies": null,\n  "br_colordepth": null,\n  "br_viewwidth": null,\n  "br_viewheight": null,\n  "os_name": null,\n  "os_family": null,\n  "os_manufacturer": null,\n  "os_timezone": null,\n  "dvce_type": null,\n  "dvce_ismobile": null,\n  "dvce_screenwidth": null,\n  "dvce_screenheight": null,\n  "doc_charset": null,\n  "doc_width": null,\n  "doc_height": null,\n  "tr_currency": null,\n  "tr_total_base": null,\n  "tr_tax_base": null,\n  "tr_shipping_base": null,\n  "ti_currency": null,\n  "ti_price_base": null,\n  "base_currency": null,\n  "geo_timezone": null,\n  "mkt_clickid": null,\n  "mkt_network": null,\n  "etl_tags": null,\n  "dvce_sent_tstamp": null,\n  "refr_domain_userid": null,\n  "refr_dvce_tstamp": null,\n  "contexts_com_snowplowanalytics_snowplow_ua_parser_context_1": [\n    {\n      "useragentFamily": "IE",\n      "useragentMajor": "7",\n      "useragentMinor": "0",\n      "useragentPatch": null,\n      "useragentVersion": "IE 7.0",\n      "osFamily": "Windows XP",\n      "osMajor": null,\n      "osMinor": null,\n      "osPatch": null,\n      "osPatchMinor": null,\n      "osVersion": "Windows XP",\n      "deviceFamily": "Other"\n    }\n  ],\n  "domain_sessionid": "2b15e5c8-d3b1-11e4-b9d6-1681e6b88ec1",\n  "derived_tstamp": "2021-11-20T00:03:57.886Z",\n  "event_vendor": "com.snowplowanalytics.snowplow",\n  "event_name": "link_click",\n  "event_format": "jsonschema",\n  "event_version": "1-0-0",\n  "event_fingerprint": "e3dbfa9cca0412c3d4052863cefb547f",\n  "true_tstamp": "2021-11-20T00:03:57.886Z"\n}\'\n')))}c.isMDXComponent=!0}}]);