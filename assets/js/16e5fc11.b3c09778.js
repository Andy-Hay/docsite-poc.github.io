"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[79095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={title:"Right to be Forgotten Spark Application Setup Guide",date:"2021-03-26",sidebar_position:10},r="Setup and running guide",p={unversionedId:"migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/index",id:"migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/index",title:"Right to be Forgotten Spark Application Setup Guide",description:"Building",source:"@site/docs/migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/index.md",sourceDirName:"migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide",slug:"/migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:10,frontMatter:{title:"Right to be Forgotten Spark Application Setup Guide",date:"2021-03-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Right to be Forgotten Spark Application",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/right-to-be-forgotten-spark-application/"},next:{title:"Community & contributing",permalink:"/docsite-poc.github.io/docs/migrated/contributing/"}},l={},s=[{value:"Building",id:"building",level:2},{value:"Deploying",id:"deploying",level:2},{value:"Running",id:"running",level:2},{value:"Verifying",id:"verifying",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-and-running-guide"},"Setup and running guide"),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("p",null,"Assuming you already have SBT installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone git://github.com/snowplow-incubator/right-to-be-forgotten-spark-job.git\n..\n$ sbt assembly\n..\n")),(0,o.kt)("p",null,"The 'fat jar' is now available as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"target/snowplow-right-to-be-forgotten-job-x.x.x.jar\n")),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("p",null,"Deploying will depend on where you have chosen to run the spark job. Assuming that are running on ","[","Amazon Elastic MapReduce","]","[","emr","]",", then deploying is consists of copying the jar to S3 or directly to the master node."),(0,o.kt)("p",null,"The example on running below assumes that you have copied the jar to the master node."),(0,o.kt)("h2",{id:"running"},"Running"),(0,o.kt)("p",null,'Running R2F requires a "removal criteria" file in order to match the rows to be erased. The file consists of rows of a single JSON self-describing datum which conforms to the ',"[","iglu schema here","]","[","removal-criteria-iglu-schema","]",".",(0,o.kt)("br",{parentName:"p"}),"\n","As can be seen from the schema, it expects a single criterion of either ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pojo")," fields. Special care needs to be taken that the value uniquely identifies an individual as there is a chance (e.g. when using an IP address) that it does not and more data than intended is erased.",(0,o.kt)("br",{parentName:"p"}),"\n","To avoid that, an additional argument needs to be provided to the spark job that specifies the maximum proportion of rows from the archive that you expect to be matched in that execution (e.g. 0.5 for half), as a safeguard. The job will fail if that number is exceeded."),(0,o.kt)("p",null,"So in your spark installation (assumed to be EMR for this example) all you would need to do is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark-submit \\\n    --master yarn \\\n    --deploy-mode client ./snowplow-right-to-be-forgotten-job-0.1.0.jar \\\n    --removal-criteria s3://snowplow-data-<mycompany>/config/to_be_forgotten.json \\\n    --input-directory s3://snowplow-data-<mycompany>/enriched/archive/ \\\n    --non-matching-output-directory s3://snowplow-data-<mycompany>/r2f-test/non-matching/runid=<yyyy-mm-dd-HH-MM-SS> \\\n    --matching-output-directory s3://snowplow-data-<mycompany>/r2f-test/matching/runid=<yyyy-mm-dd-HH-MM-SS> \\\n    --maximum-matching-proportion 0.01\n")),(0,o.kt)("p",null,"The R2F arguments are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--removal-criteria")," (in this example ",(0,o.kt)("inlineCode",{parentName:"li"},"s3://snowplow-data-<mycompany>/config/to_be_forgotten.json"),"):",(0,o.kt)("br",{parentName:"li"}),"This is the URL of the removal criteria file containing the criteria for which an event will be removed form the archive."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--input-directory")," (in this example ",(0,o.kt)("inlineCode",{parentName:"li"},"s3://snowplow-data-<mycompany>/enriched/archive/"),"):",(0,o.kt)("br",{parentName:"li"}),"The directory that contains the snowplow data input"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--non-matching-output-directory")," (in this case ",(0,o.kt)("inlineCode",{parentName:"li"},"s3://snowplow-data-<mycompany>/r2f-test/non-matching/runid=<yyyy-mm-dd-HH-MM-SS>"),"):",(0,o.kt)("br",{parentName:"li"}),"The directory that contains all data that do not match the criteria"),(0,o.kt)("li",{parentName:"ul"},"(Optional) ",(0,o.kt)("inlineCode",{parentName:"li"},"--matching-output-directory")," (in this case ",(0,o.kt)("inlineCode",{parentName:"li"},"s3://snowplow-data-<mycompany>/r2f-test/matching/runid=<yyyy-mm-dd-HH-MM-SS>"),"):",(0,o.kt)("br",{parentName:"li"}),"The directory that contains the matching output"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--maximum-matching-proportion")," (In this case ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"):",(0,o.kt)("br",{parentName:"li"}),"The maximum proportion of the input events that are allowed to match. If the actual proportion is higher the job will fail.")),(0,o.kt)("p",null,"This process does not preserve the directory structure under the ",(0,o.kt)("inlineCode",{parentName:"p"},"enriched archive")," (namely the ",(0,o.kt)("inlineCode",{parentName:"p"},"run=<runid>")," sub-folders)."),(0,o.kt)("h2",{id:"verifying"},"Verifying"),(0,o.kt)("p",null,"Successful execution means that the folders that you have specified above, contain the data that you expect, and that the job exited without an exception."),(0,o.kt)("p",null,"In the case that the proportion of matched records was higher than that specified, for instance there will be an exception thrown."))}d.isMDXComponent=!0}}]);