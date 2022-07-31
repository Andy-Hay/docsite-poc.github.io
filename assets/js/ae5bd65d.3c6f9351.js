"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[37753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Verify schema dependencies with the Data Structures CI tool",date:"2020-06-01",sidebar_position:2e3},o=void 0,s={unversionedId:"migrated/managing-data-quality/testing-and-qa-workflows/using-the-data-structures-ci-tool-for-data-quality/index",id:"migrated/managing-data-quality/testing-and-qa-workflows/using-the-data-structures-ci-tool-for-data-quality/index",title:"Verify schema dependencies with the Data Structures CI tool",description:'The Data Structures CI is a command-line tool which integrates Data Structures API into your CI/CD pipelines and currently has one task which verifies that all schema dependencies for a project are already deployed into a specified environment (e.g. "DEV", "PROD").',source:"@site/docs/migrated/managing-data-quality/testing-and-qa-workflows/using-the-data-structures-ci-tool-for-data-quality/index.md",sourceDirName:"migrated/managing-data-quality/testing-and-qa-workflows/using-the-data-structures-ci-tool-for-data-quality",slug:"/migrated/managing-data-quality/testing-and-qa-workflows/using-the-data-structures-ci-tool-for-data-quality/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/testing-and-qa-workflows/using-the-data-structures-ci-tool-for-data-quality/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:2e3,frontMatter:{title:"Verify schema dependencies with the Data Structures CI tool",date:"2020-06-01",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Upgrading Snowplow Micro",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro/"},next:{title:"Failed Events",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/failed-events/"}},l={},c=[{value:"Authorization",id:"authorization",level:2},{value:"Create your manifest file",id:"create-your-manifest-file",level:2},{value:"Setting up as a Github Action",id:"setting-up-as-a-github-action",level:2},{value:"Setting up for other deployment pipelines",id:"setting-up-for-other-deployment-pipelines",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Download the CI tool",id:"download-the-ci-tool",level:3},{value:"Run the task",id:"run-the-task",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The Data Structures CI is a command-line tool which integrates Data Structures API into your CI/CD pipelines and currently has one task which verifies that all schema dependencies for a project are already deployed into a specified environment (e.g. "DEV", "PROD").'),(0,i.kt)("p",null,"This is available as a ",(0,i.kt)("a",{parentName:"p",href:"#Setting_up_as_a_Github_Action"},"Github Action")," and as a ",(0,i.kt)("a",{parentName:"p",href:"#Setting_up_for_other_deployment_pipelines"},"universal install for other deployment pipelines")," e.g. Travis CI, CircleCI, Gitlab, Azure Pipelines, Jenkins\u2026"),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"In order to be able to perform tasks with the tool, you will need to supply both your Organization ID and an API key."),(0,i.kt)("p",null,"The Organization ID is a UUID that can be retrieved from the URL immediately following the .com when visiting console"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81778).Z,width:"727",height:"57"})),(0,i.kt)("p",null,"An API Key can be created ",(0,i.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/credentials"},"here"),"."),(0,i.kt)("h2",{id:"create-your-manifest-file"},"Create your manifest file"),(0,i.kt)("p",null,'This command allows you to verify that all schema dependencies for a project (declared in a specific "manifest") are already deployed into an environment (e.g. "DEV", "PROD").'),(0,i.kt)("p",null,"In your application project, create a JSON file for your manifest that will store references to the schema dependencies you have for your project. During a CI build this file will be parsed, validated and used by Data Structures CI to check that each schema is correctly deployed to the appropriate environment before the code for the application gets deployed, effectively guarding against the 'Schema not found' type of ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/understanding-failed-events/"},"failed events"),"."),(0,i.kt)("p",null,"Here is an example manifest file where our application has dependencies on three schemas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"checkout_process")," version ",(0,i.kt)("inlineCode",{parentName:"li"},"1-0-7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," version ",(0,i.kt)("inlineCode",{parentName:"li"},"1-0-1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"product")," version ",(0,i.kt)("inlineCode",{parentName:"li"},"2-0-0"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.insights/data_structures_dependencies/jsonschema/1-0-0",\n  "data": {\n    "schemas": [\n      {\n        "vendor": "com.acme.marketing",\n        "name": "checkout_process",\n        "format": "jsonschema",\n        "version": "1-0-7"\n      },\n      {\n        "vendor": "com.acme",\n        "name": "user",\n        "format": "jsonschema",\n        "version": "1-0-1"\n      },\n      {\n        "vendor": "com.acme",\n        "name": "product",\n        "format": "jsonschema",\n        "version": "2-0-0"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"The manifest must adhere to this ",(0,i.kt)("a",{parentName:"p",href:"http://iglucentral.com/schemas/com.snowplowanalytics.insights/data_structures_dependencies/jsonschema/1-0-0"},"self-describing JSON Schema"),"."),(0,i.kt)("h2",{id:"setting-up-as-a-github-action"},"Setting up as a Github Action"),(0,i.kt)("p",null,"To use the Github Action simply add this snippet as a step on your existing GitHub Actions pipeline, replacing the relevant variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"name: Example workflow using Snowplow's Data Structures CI\non: push\njobs:\n  data-structures-check:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@master\n    - name: Run Snowplow's Data Structures CI\n      uses: snowplow-product/msc-schema-ci-action/check@v1\n      with:\n        organization-id: ${{ secrets.SNOWPLOW_ORG_ID }}\n        api-key: ${{ secrets.SNOWPLOW_API_KEY }}\n        manifest-path: 'snowplow-schemas.json'            \n        environment: ${{ env.ENVIRONMENT }}\n")),(0,i.kt)("p",null,"View the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-product/msc-schema-ci-action"},"Github Action repository"),"."),(0,i.kt)("h2",{id:"setting-up-for-other-deployment-pipelines"},"Setting up for other deployment pipelines"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JRE 8 or above")),(0,i.kt)("h3",{id:"download-the-ci-tool"},"Download the CI tool"),(0,i.kt)("p",null,"You can download Data Structures CI from our Bintray repository, using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -L https://github.com/snowplow-product/msc-schema-ci-tool/releases/download/1.0.0/data_structures_ci_1.0.0.zip | jar xv && chmod +x ./data-structures-ci\n")),(0,i.kt)("h3",{id:"run-the-task"},"Run the task"),(0,i.kt)("p",null,"You can run the task using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ export ORGANIZATION_ID=<organization-id>\n$ export API_KEY=<api-key>\n$ ./data-structures-ci check \\\n    --manifestPath /path/to/snowplow-schemas.json \\\n    --environment DEV\n")),(0,i.kt)("p",null,"View the repository for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-product/msc-schema-api-examples/"},"integration examples"),"."))}p.isMDXComponent=!0},81778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/orgID-abcb03ac4037410de585e7079489d91c.png"}}]);