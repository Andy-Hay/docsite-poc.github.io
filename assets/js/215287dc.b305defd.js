"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[32756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(v,i(i({ref:t},u),{},{components:n})):o.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Testing",date:"2020-08-26",sidebar_position:20},i=void 0,l={unversionedId:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/testing/index",id:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/testing/index",title:"Testing",description:"Once you've know how you want to configure the recovery job, it's worthwhile to test your configuration locally, before deploying an actual recovery job.",source:"@site/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/testing/index.md",sourceDirName:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/testing",slug:"/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/testing/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/testing/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:20,frontMatter:{title:"Testing",date:"2020-08-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Configuration Examples",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/configuration/configuration-examples/"},next:{title:"Running",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/"}},s={},c=[{value:"Script based",id:"script-based",level:2},{value:"A complete recovery",id:"a-complete-recovery",level:2},{value:"A custom recovery scenario",id:"a-custom-recovery-scenario",level:3},{value:"Output",id:"output",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you've know how you want to configure the recovery job, it's worthwhile to test your configuration locally, before deploying an actual recovery job."),(0,r.kt)("p",null,"There are at least a couple of ways to go about testing your configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Script based \u2013 a set of pre-made scripts intended to test configurations on an example set of data to verify the change to the payload is as expected."),(0,r.kt)("li",{parentName:"ul"},'A complete recovery using the event recovery Integration Spec - a sort of "dry-run" of the job. This runs the complete job through to replaying events into a pipeline for enrichment.')),(0,r.kt)("h2",{id:"script-based"},"Script based"),(0,r.kt)("p",null,"Prerequisite:"),(0,r.kt)("p",null,"To make use of scripting utility only a single dependency is required \u2013\xa0",(0,r.kt)("a",{parentName:"p",href:"https://amonite.io/"},"ammonite"),". To install it simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo sh -c '(echo \"#!/usr/bin/env sh\" && curl -L https://github.com/lihaoyi/Ammonite/releases/download/2.1.1/2.12-2.1.1) > /usr/local/bin/amm && chmod +x /usr/local/bin/amm' \n")),(0,r.kt)("p",null,"Now your are able to use a prebuilt script that will allow you to run the configuration against a sample data payload."),(0,r.kt)("p",null,'The test script sets up a local version of the recovery job and applies configuration settings against a specific "bad row":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// REQUIRED SETUP\ninterp.repositories() ++= Seq(coursierapi.MavenRepository.of("http://maven.snplow.com/releases/"))\n\n@\n\nimport $url.{`https://raw.githubusercontent.com/snowplow-incubator/snowplow-event-recovery/feature/recovery-typeclasses/scripts/Recovery.sc` => Recovery}, Recovery._\nimport $ivy.`com.snowplowanalytics::snowplow-event-recovery-core:0.2.0-rc10`, com.snowplowanalytics.snowplow.event.recovery._, config._, json._\n\n// ACTUAL TESTS\n// for available functions see [[https://raw.githubusercontent.com/snowplow-incubator/snowplow-event-recovery/feature/recovery-typeclasses/scripts/Recovery.sc]]\n\noperations.cast("""{"int": "1"}""", "$.int", CastType.String, CastType.Array)\noperations.replace("""{"int": "1"}""", "$.int", "(?U)^.*$", "new")\n\nval cfg = """{ "schema": "iglu:com.snowplowanalytics.snowplow/recoveries/jsonschema/2-0-0", "data": { "iglu:com.snowplowanalytics.snowplow.badrows/enrichment_failures/jsonschema/1-0-*": [{"name": "passthrough", "conditions": [], "steps": []}]}}"""\n\nval badrow = """{"schema":"iglu:com.snowplowanalytics.snowplow.badrows/enrichment_failures/jsonschema/1-0-0","data":{"processor":{"artifact":"beam-enrich","version":"1.0.0-rc5"},"failure":{"timestamp":"2020-02-17T09:28:18.100Z","messages":[{"enrichment":{"schemaKey":"iglu:com.snowplowanalytics.snowplow.enrichments/api_request_enrichment_config/jsonschema/1-0-0","identifier":"api-request"},"message":{"error":"Error accessing POJO input field [user]: [java.lang.NoSuchMethodException: com.snowplowanalytics.snowplow.enrich.common.outputs.EnrichedEvent.user_id-foo()]"}}]},"payload":{"enriched":{"app_id":"console","platform":"web","etl_tstamp":"2020-02-17 09:28:18.095","collector_tstamp":"2020-02-17 09:28:16.560","dvce_created_tstamp":"2020-02-17 09:28:16.114","event":"page_view","event_id":"2dfeb9b7-5a87-4214-8a97-a8b23176856b","txn_id":null,"name_tracker":"msc-gcp-stg1","v_tracker":"js-2.10.2","v_collector":"ssc-1.0.0-rc4-googlepubsub","v_etl":"beam-enrich-1.0.0-rc5-common-1.0.0","user_id":null,"user_ipaddress":"18.194.133.57","user_fingerprint":null,"domain_userid":"d6c468de-0aed-4785-9052-b6bb77b6dddb","domain_sessionidx":13,"network_userid":"510b2f05-27e3-4fd3-b449-a2702926da5e","geo_country":"DE","geo_region":"HE","geo_city":"Frankfurt am Main","geo_zipcode":"60313","geo_latitude":50.1188,"geo_longitude":8.6843,"geo_region_name":"Hesse","ip_isp":null,"ip_organization":null,"ip_domain":null,"ip_netspeed":null,"page_url":"https://console.snowplowanalytics.com/","page_title":"Snowplow BDP","page_referrer":null,"page_urlscheme":"https","page_urlhost":"console.snowplowanalytics.com","page_urlport":443,"page_urlpath":"/","page_urlquery":null,"page_urlfragment":null,"refr_urlscheme":null,"refr_urlhost":null,"refr_urlport":0,"refr_urlpath":null,"refr_urlquery":null,"refr_urlfragment":null,"refr_medium":null,"refr_source":null,"refr_term":null,"mkt_medium":null,"mkt_source":null,"mkt_term":null,"mkt_content":null,"mkt_campaign":null,"contexts":"{\\"schema\\":\\"iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0\\",\\"data\\":[{\\"schema\\":\\"iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0\\",\\"data\\":{\\"id\\":\\"39a9934a-ddd3-4581-a4ea-d0ba20e63b92\\"}},{\\"schema\\":\\"iglu:org.w3/PerformanceTiming/jsonschema/1-0-0\\",\\"data\\":{\\"navigationStart\\":1581931694397,\\"unloadEventStart\\":1581931696046,\\"unloadEventEnd\\":1581931694764,\\"redirectStart\\":0,\\"redirectEnd\\":0,\\"fetchStart\\":1581931694397,\\"domainLookupStart\\":1581931694440,\\"domainLookupEnd\\":1581931694513,\\"connectStart\\":1581931694513,\\"connectEnd\\":1581931694665,\\"secureConnectionStart\\":1581931694572,\\"requestStart\\":1581931694665,\\"responseStart\\":1581931694750,\\"responseEnd\\":1581931694750,\\"domLoading\\":1581931694762,\\"domInteractive\\":1581931695963,\\"domContentLoadedEventStart\\":1581931696039,\\"domContentLoadedEventEnd\\":1581931696039,\\"domComplete\\":0,\\"loadEventStart\\":0,\\"loadEventEnd\\":0}}]}","se_category":null,"se_action":null,"se_label":null,"se_property":null,"se_value":null,"unstruct_event":null,"tr_orderid":null,"tr_affiliation":null,"tr_total":null,"tr_tax":null,"tr_shipping":null,"tr_city":null,"tr_state":null,"tr_country":null,"ti_orderid":null,"ti_sku":null,"ti_name":null,"ti_category":null,"ti_price":null,"ti_quantity":0,"pp_xoffset_min":0,"pp_xoffset_max":0,"pp_yoffset_min":0,"pp_yoffset_max":0,"useragent":"Mozilla/5.0 (X11; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0","br_name":null,"br_family":null,"br_version":null,"br_type":null,"br_renderengine":null,"br_lang":"en-US","br_features_pdf":0,"br_features_flash":0,"br_features_java":0,"br_features_director":0,"br_features_quicktime":0,"br_features_realplayer":0,"br_features_windowsmedia":0,"br_features_gears":0,"br_features_silverlight":0,"br_cookies":1,"br_colordepth":"24","br_viewwidth":1918,"br_viewheight":982,"os_name":null,"os_family":null,"os_manufacturer":null,"os_timezone":"Europe/Berlin","dvce_type":null,"dvce_ismobile":0,"dvce_screenwidth":1920,"dvce_screenheight":1080,"doc_charset":"UTF-8","doc_width":1918,"doc_height":982,"tr_currency":null,"tr_total_base":null,"tr_tax_base":null,"tr_shipping_base":null,"ti_currency":null,"ti_price_base":null,"base_currency":null,"geo_timezone":"Europe/Berlin","mkt_clickid":null,"mkt_network":null,"etl_tags":null,"dvce_sent_tstamp":"2020-02-17 09:28:16.507","refr_domain_userid":null,"refr_dvce_tstamp":null,"derived_contexts":"{\\"schema\\":\\"iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-1\\",\\"data\\":[{\\"schema\\":\\"iglu:com.snowplowanalytics.snowplow/ua_parser_context/jsonschema/1-0-0\\",\\"data\\":{\\"useragentFamily\\":\\"Firefox\\",\\"useragentMajor\\":\\"72\\",\\"useragentMinor\\":\\"0\\",\\"useragentPatch\\":null,\\"useragentVersion\\":\\"Firefox 72.0\\",\\"osFamily\\":\\"Linux\\",\\"osMajor\\":null,\\"osMinor\\":null,\\"osPatch\\":null,\\"osPatchMinor\\":null,\\"osVersion\\":\\"Linux\\",\\"deviceFamily\\":\\"Other\\"}}]}","domain_sessionid":"96958bf6-a8bf-4be8-9c67-fd957b6bc8d2","derived_tstamp":"2020-02-17 09:28:16.167","event_vendor":"com.snowplowanalytics.snowplow","event_name":"page_view","event_format":"jsonschema","event_version":"1-0-0","event_fingerprint":"5acdc8f85f9530081d1a71ec430c8756","true_tstamp":null},"raw":{"vendor":"com.snowplowanalytics.snowplow","version":"tp2","parameters":[{"name":"e","value":"pv"},{"name":"duid","value":"d6c468de-0aed-4785-9052-b6bb77b6dddb"},{"name":"vid","value":"13"},{"name":"eid","value":"2dfeb9b7-5a87-4214-8a97-a8b23176856b"},{"name":"url","value":"https://console.snowplowanalytics.com/"},{"name":"aid","value":"console"},{"name":"cx","value":"eyJzY2hlbWEiOiJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5zbm93cGxvdy9jb250ZXh0cy9qc29uc2NoZW1hLzEtMC0wIiwiZGF0YSI6W3sic2NoZW1hIjoiaWdsdTpjb20uc25vd3Bsb3dhbmFseXRpY3Muc25vd3Bsb3cvd2ViX3BhZ2UvanNvbnNjaGVtYS8xLTAtMCIsImRhdGEiOnsiaWQiOiIzOWE5OTM0YS1kZGQzLTQ1ODEtYTRlYS1kMGJhMjBlNjNiOTIifX0seyJzY2hlbWEiOiJpZ2x1Om9yZy53My9QZXJmb3JtYW5jZVRpbWluZy9qc29uc2NoZW1hLzEtMC0wIiwiZGF0YSI6eyJuYXZpZ2F0aW9uU3RhcnQiOjE1ODE5MzE2OTQzOTcsInVubG9hZEV2ZW50U3RhcnQiOjE1ODE5MzE2OTYwNDYsInVubG9hZEV2ZW50RW5kIjoxNTgxOTMxNjk0NzY0LCJyZWRpcmVjdFN0YXJ0IjowLCJyZWRpcmVjdEVuZCI6MCwiZmV0Y2hTdGFydCI6MTU4MTkzMTY5NDM5NywiZG9tYWluTG9va3VwU3RhcnQiOjE1ODE5MzE2OTQ0NDAsImRvbWFpbkxvb2t1cEVuZCI6MTU4MTkzMTY5NDUxMywiY29ubmVjdFN0YXJ0IjoxNTgxOTMxNjk0NTEzLCJjb25uZWN0RW5kIjoxNTgxOTMxNjk0NjY1LCJzZWN1cmVDb25uZWN0aW9uU3RhcnQiOjE1ODE5MzE2OTQ1NzIsInJlcXVlc3RTdGFydCI6MTU4MTkzMTY5NDY2NSwicmVzcG9uc2VTdGFydCI6MTU4MTkzMTY5NDc1MCwicmVzcG9uc2VFbmQiOjE1ODE5MzE2OTQ3NTAsImRvbUxvYWRpbmciOjE1ODE5MzE2OTQ3NjIsImRvbUludGVyYWN0aXZlIjoxNTgxOTMxNjk1OTYzLCJkb21Db250ZW50TG9hZGVkRXZlbnRTdGFydCI6MTU4MTkzMTY5NjAzOSwiZG9tQ29udGVudExvYWRlZEV2ZW50RW5kIjoxNTgxOTMxNjk2MDM5LCJkb21Db21wbGV0ZSI6MCwibG9hZEV2ZW50U3RhcnQiOjAsImxvYWRFdmVudEVuZCI6MH19XX0"},{"name":"tna","value":"msc-gcp-stg1"},{"name":"cs","value":"UTF-8"},{"name":"cd","value":"24"},{"name":"page","value":"Snowplow BDP"},{"name":"stm","value":"1581931696507"},{"name":"tz","value":"Europe/Berlin"},{"name":"tv","value":"js-2.10.2"},{"name":"vp","value":"1918x982"},{"name":"ds","value":"1918x982"},{"name":"res","value":"1920x1080"},{"name":"cookie","value":"1"},{"name":"p","value":"web"},{"name":"dtm","value":"1581931696114"},{"name":"lang","value":"en-US"},{"name":"sid","value":"96958bf6-a8bf-4be8-9c67-fd957b6bc8d2"}],"contentType":"application/json","loaderName":"ssc-1.0.0-rc4-googlepubsub","encoding":"UTF-8","hostname":"gcp-sandbox-prod1.collector.snplow.net","timestamp":"2020-02-17T09:28:16.560Z","ipAddress":"18.194.133.57","useragent":"Mozilla/5.0 (X11; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0","refererUri":"https://console.snowplowanalytics.com/","headers":["Timeout-Access: ","Host: gcp-sandbox-prod1.collector.snplow.net","User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0","Accept: */*","Accept-Language: en-US, en;q=0.5","Accept-Encoding: gzip, deflate, br","Origin: https://console.snowplowanalytics.com","Referer: https://console.snowplowanalytics.com/","Cookie: sp=510b2f05-27e3-4fd3-b449-a2702926da5e","X-Cloud-Trace-Context: 958285ba723e212998af29cec405e002/12535615945289151925","Via: 1.1 google","X-Forwarded-For: 18.194.133.57, 35.201.76.62","X-Forwarded-Proto: https","Connection: Keep-Alive","application/json"],"userId":"510b2f05-27e3-4fd3-b449-a2702926da5e"}}}}"""\n\nconfigs.validate(cfg)\n\njobs.test(cfg, badrow)\njobs.testMany(cfg, List(badrow))\n')),(0,r.kt)("p",null,"You can grab the script from our GitHub repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-event-recovery/blob/feature/recovery-typeclasses/scripts/test.sc"},"here"),"."),(0,r.kt)("p",null,"The main sections that need editing are the ",(0,r.kt)("inlineCode",{parentName:"p"},"val cfg and val badrow")," sections. CFG of course refers to the configuration you'd like to test and badrow refers to an example failed event."),(0,r.kt)("p",null,"Start by adding your flows, conditions and/or steps as described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/event-recovery-for-insights/configuration/"},"previous section"),"."),(0,r.kt)("p",null,"Then replace the badrow value with a representative failed event example. Be careful to use actual failed events from your production data as it may contain data that requires specific data access policy requirements. Check with your Data protection officer if you are allowed to copy production data to your local machine."),(0,r.kt)("p",null,"To run above example, assuming the file is named locally as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"test.sc"),", run:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"amm test.sc"),"."),(0,r.kt)("p",null,"This will run the operation that you specified in your configuration (e.g. ","`","replace","`"," and output to console the result. You should then be able to check the collector payload should now be modified as expected based on your configuration."),(0,r.kt)("p",null,"See the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-event-recovery/blob/feature/recovery-typeclasses/scripts/Recovery.sc"},"main script"),"\xa0for additional available convenience functions."),(0,r.kt)("h2",{id:"a-complete-recovery"},"A complete recovery"),(0,r.kt)("p",null,"As part of the event recovery project there is the ability to run it in ",(0,r.kt)("inlineCode",{parentName:"p"},"testOnly")," mode. It might be worth while to take a look at the documentation on ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/event-recovery-for-insights/running/"},"running the recovery")," first, in order to familiarize yourself with the full process of triggering a recovery job."),(0,r.kt)("p",null,"You can test a complete recovery, starting from bad rows to getting the data enriched by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modifying a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"bad_rows.json"),"\xa0file which should contain examples of bad rows you want to recover"),(0,r.kt)("li",{parentName:"ul"},"Adding your recovery scenarios to a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"recovery_scenarios.json")),(0,r.kt)("li",{parentName:"ul"},"If your recovery is relying on specific Iglu repositories additionally to Iglu central, you\u2019ll need to specify those repositories in a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"resolver.json")),(0,r.kt)("li",{parentName:"ul"},"If your recovery is relying on specific enrichments, you\u2019ll need to add them to\xa0an ",(0,r.kt)("inlineCode",{parentName:"li"},"enrichments.json"),".")),(0,r.kt)("p",null,"Once this is all done, you can run\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'sbt "project core" "testOnly *IntegrationSpec"'),". What this process will do is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the recovery on the bad rows contained in\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"bad_rows.json"),"\xa0according to the configuration in\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"recovery_scenarios.json")),(0,r.kt)("li",{parentName:"ul"},"Check that these recovered payloads pass enrichments, optionally leveraging the additional Iglu repositories and enrichments")),(0,r.kt)("h3",{id:"a-custom-recovery-scenario"},"A custom recovery scenario"),(0,r.kt)("p",null,"If you\u2019ve written an additional recovery scenario you\u2019ll need to add the corresponding unit tests to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"RecoverScenarioSpec.scala"),"\xa0and then run\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sbt test"),"."),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("p",null,"The output of Snowplow Event Recovery can also be fed into an enrichment platform to be enriched."))}p.isMDXComponent=!0}}]);