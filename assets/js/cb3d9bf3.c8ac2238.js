"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[60054],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"GCP - Beam",date:"2020-08-03",sidebar_position:0},i=void 0,c={unversionedId:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam/index",id:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam/index",title:"GCP - Beam",description:"The Beam job is a dockerized purpose built Dataflow job that reads data from a GCS location specified through a pattern and stores the recovered payloads in a PubSub topic, unrecovered and unrecoverable in other GCS buckets.",source:"@site/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam/index.md",sourceDirName:"migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam",slug:"/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:0,frontMatter:{title:"GCP - Beam",date:"2020-08-03",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Running",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/"},next:{title:"Flink",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/"}},p={},l=[{value:"Permissions",id:"permissions",level:2},{value:"Building",id:"building",level:2},{value:"Running",id:"running",level:2}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Beam job is a dockerized purpose built Dataflow job that reads data from a GCS location specified through a pattern and stores the recovered payloads in a PubSub topic, unrecovered and unrecoverable in other GCS buckets."),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"In order to run the job a ",(0,o.kt)("inlineCode",{parentName:"p"},"service-account")," with appropriate credentials must be set up in the project."),(0,o.kt)("p",null,"In order to be sure not to disrupt any service accounts that may be required for normal pipeline operations, it's recommended to create a new service account for recovery."),(0,o.kt)("p",null,"To create a new service account in your GCP console navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"IAM & Admin > Service")," ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"Accounts"),". Create a new account and grant ",(0,o.kt)("inlineCode",{parentName:"p"},"full project owner")," permissions."),(0,o.kt)("p",null,"Generate a new key for the service account and save down to your local machine."),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("p",null,"To build the docker image, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sbt beam/docker:publishLocal\n")),(0,o.kt)("h2",{id:"running"},"Running"),(0,o.kt)("p",null,"To run on Apache Beam in GCP Dataflow run it through a docker-deployment the options to set are shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-v {{path-to-local-key-file}}.json:/snowplow/config/credentials.json \\\n-e GOOGLE_APPLICATION_CREDENTIALS=/snowplow/config/credentials.json \\\n  snowplow/snowplow-event-recovery-beam:0.3.0-rc14 \\\n--runner=DataFlowRunner \\\n--project={{your-gcp-project-name}} \\\n--name=event-recovery-rt-pipeline \\\n--zone={{your-project-zone}} \\\n--gcpTempLocation=gs://sp-storage-loader-tmp-{{pipeline_tag_e.g._prod1}}-{{pipeline_name}}/temp \\\n--inputDirectory=gs://sp-storage-loader-bad-{{pipeline_tag_e.g._prod1}}-{{project_name}}/partitioned/** \\\n--outputTopic=projects/{{project_name}}/topics/{{recovery-topic}} \\\n--failedOutput=gs://{{create_or_choose_a_failed_output_folder}}/failed/ \\\n--unrecoverableOutput=gs://{{create_or_choose_an_unrecoverable_folder}}/unrecoverable/ \\\n--config={{base64-encoded-string of your recovery configuration}} \\\n--resolver={{base64-encoded-string of a schema resolver file (Iglu Central ok for default)}}\n")),(0,o.kt)("p",null,"As this is a self-contained docker image the first flag sets the key for the deployment in the folder for use by the job."),(0,o.kt)("p",null,"Note that for zone GCP prefers you may need to use -a or -b zones (e.g. europe-west2-b)."),(0,o.kt)("p",null,"Also note, that no ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," are needed for any of the strings."))}u.isMDXComponent=!0}}]);