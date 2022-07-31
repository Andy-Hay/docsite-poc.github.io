"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[63096],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(t),m=i,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||r;return t?o.createElement(d,a(a({ref:n},l),{},{components:t})):o.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},80531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const r={title:"enrich-pubsub (GCP) and enrich-kinesis (AWS)",date:"2020-10-22",sidebar_position:10},a=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/index",id:"migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/index",title:"enrich-pubsub (GCP) and enrich-kinesis (AWS)",description:"enrich-pubsub",source:"@site/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/index.md",sourceDirName:"migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub",slug:"/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:10,frontMatter:{title:"enrich-pubsub (GCP) and enrich-kinesis (AWS)",date:"2020-10-22",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"(deprecated) Beam Enrich",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/"},next:{title:"Monitoring",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring/"}},c={},p=[{value:"enrich-pubsub",id:"enrich-pubsub",level:2},{value:"enrich-kinesis",id:"enrich-kinesis",level:2}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enrich-pubsub"},"enrich-pubsub"),(0,i.kt)("p",null,"enrich-pubsub is a standalone JVM application that reads from and writes to PubSub topics. It can be run from anywhere, as long as it has permissions to access the topics. For example, run it as a ","[Kubernetes]",'(http://Configuration Beam Enrich specific options Beam Enrich comes with a set of predefined CLI options:  --job-name, the name of the job as it will appear in the Dataflow console --raw=projects/{project}/subscriptions/{raw-topic-subscription} which describes the input PubSub subscription Beam Enrich will consume from --enriched=projects/{project}/topics/{enriched-topic} which is the PubSub topic the successfully enriched events will be sinked to --bad=projects/{project}/topics/{bad-topic}, the PubSub topic where events that have failed enrichment will end up --pii=projects/{project}/topics/{pii-topic}, the PubSub topic where events resulting from the PII enrichment will end up, optional --resolver=iglu_resolver.json, the necessary Iglu resolver to lookup the schemas in your data --enrichments=enrichments the optional directory containing the enrichments that need to be performed It\u2019s important to note that every enrichment relying on local files will need to have the necessary files stored in Google Cloud Storage, e.g. the IP lookups enrichment:  {   "schema": "iglu:com.snowplowanalytics.snowplow/ip_lookups/jsonschema/2-0-0",   "data": {     "name": "ip_lookups",     "vendor": "com.snowplowanalytics.snowplow",     "enabled": true,     "parameters": {       "geo": {         "database": "GeoLite2-City.mmdb",         "uri": "gs://gcs-bucket/maxmind"       }     }   } }Copy Code language: JSON / JSON with Comments (json) Dataflow options To run on Dataflow, Beam Enrich will rely on a set of additional configuration options:  --runner=DataFlowRunner which specifies that we want to run on Dataflow --project={project}, the name of the GCP project --streaming=true to notify Dataflow that we\u2019re running a streaming application --zone=europe-west2-a, the zone where the Dataflow nodes (effectively GCP Compute Engine nodes) will be launched --region=europe-west2, the region where the Dataflow job will be launched --gcpTempLocation=gs://location/, the GCS bucket where temporary files necessary to run the job (e.g. JARs) will be stored The list of all the options can be found at ',(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options."},"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options."),") job, or on a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute"},"GCP compute instance"),", or even just from your laptop."),(0,i.kt)("p",null,"It is published on Docker Hub and can be run with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run \\\n  -it --rm \\\n  -v $PWD:/snowplow \\\n  -e GOOGLE_APPLICATION_CREDENTIALS=/snowplow/snowplow-gcp-account-11aa55ff6b1b.json \\\n  snowplow/snowplow-enrich-pubsub:3.2.2 \\\n  --enrichments /snowplow/enrichments \\\n  --iglu-config /snowplow/resolver.json \\\n  --config /snowplow/config.hocon\n")),(0,i.kt)("p",null,"Above assumes that you have following directory structure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"GCP credentials ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/docs/authentication/getting-started"},"JSON file")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"enrichments")," directory, (possibly empty) with all ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/setup-snowplow-on-gcp/setup-validation-and-enrich-beam-enrich/add-additional-enrichments/"},"enrichment configuration JSONs")),(0,i.kt)("li",{parentName:"ol"},"Iglu Resolver ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/iglu/iglu-resolver/"},"configuration JSON")),(0,i.kt)("li",{parentName:"ol"},"enrich-pubSub ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/enrich-pubsub-configuration-reference/"},"configuration HOCON"))),(0,i.kt)("p",null,"Alternatively, you can download and run\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/releases"},"a jar file from the github release"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar snowplow-enrich-pubsub-3.2.2.jar \\\n  --enrichments /snowplow/enrichments \\\n  --iglu-config /snowplow/resolver.json \\\n  --config /snowplow/config.hocon\n")),(0,i.kt)("h2",{id:"enrich-kinesis"},"enrich-kinesis"),(0,i.kt)("p",null,"enrich-kinesis is a standalone JVM application that reads from and writes to Kinesis streams. It can be run from anywhere, as long as it has permissions to access the streams."),(0,i.kt)("p",null,"It is published on Docker Hub and can be run with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run \\\n  -it --rm \\\n  -v $PWD:/snowplow \\\n  -e AWS_ACCESS_KEY_ID=xxx \\\n  -e AWS_SECRET_ACCESS_KEY=xxx \\\n  snowplow/snowplow-enrich-kinesis:3.2.2 \\\n  --enrichments /snowplow/enrichments \\\n  --iglu-config /snowplow/resolver.json \\\n  --config /snowplow/config.hocon\n")),(0,i.kt)("p",null,"Above assumes that you have following directory structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enrichments")," directory, (possibly empty) with all ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/setup-snowplow-on-gcp/setup-validation-and-enrich-beam-enrich/add-additional-enrichments/"},"enrichment configuration JSONs")),(0,i.kt)("li",{parentName:"ul"},"Iglu Resolver ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/iglu/iglu-resolver/"},"configuration JSON")),(0,i.kt)("li",{parentName:"ul"},"enrich-kinesis ",(0,i.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/enrich-pubsub-configuration-reference/"},"configuration HOCON"))),(0,i.kt)("p",null,"Depending on where the app runs, ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_KEY")," might not be required."),(0,i.kt)("p",null,"Alternatively, you can download and run\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/releases"},"a jar file from the github release"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar snowplow-enrich-kinesis-3.2.2.jar \\\n  --enrichments /snowplow/enrichments \\\n  --iglu-config /snowplow/resolver.json \\\n  --config /snowplow/config.hocon\n")))}u.isMDXComponent=!0}}]);