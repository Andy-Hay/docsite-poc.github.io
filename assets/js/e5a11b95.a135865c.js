"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1872],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const l={title:"sql-runner: Web data model",date:"2021-07-27",sidebar_position:100},i=void 0,r={unversionedId:"migrated/modeling-your-data/the-snowplow-web-data-model/sql-runner-web-data-model/index",id:"migrated/modeling-your-data/the-snowplow-web-data-model/sql-runner-web-data-model/index",title:"sql-runner: Web data model",description:"The Snowplow web data model v1.0.0 can be found in the snowplow/data-models GitHub repository.",source:"@site/docs/migrated/modeling-your-data/the-snowplow-web-data-model/sql-runner-web-data-model/index.md",sourceDirName:"migrated/modeling-your-data/the-snowplow-web-data-model/sql-runner-web-data-model",slug:"/migrated/modeling-your-data/the-snowplow-web-data-model/sql-runner-web-data-model/",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/the-snowplow-web-data-model/sql-runner-web-data-model/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:100,frontMatter:{title:"sql-runner: Web data model",date:"2021-07-27",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"The Snowplow web data model",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/the-snowplow-web-data-model/"},next:{title:"dbt: Web data model",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/the-snowplow-web-data-model/dbt-web-data-model/"}},s={},d=[{value:"Quickstart",id:"quickstart",level:2},{value:"Requirements",id:"requirements",level:4},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Configuring and running the model",id:"configuring-and-running-the-model",level:4},{value:"Technical architecture",id:"technical-architecture",level:2},{value:"The entire model",id:"the-entire-model",level:4},{value:"The individual modules",id:"the-individual-modules",level:4},{value:"Customizing the model",id:"customizing-the-model",level:2},{value:"Metadata",id:"metadata",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Snowplow web data model v1.0.0 can be found in the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/snowplow/data-models/tree/master"},"snowplow/data-models GitHub repository"),".")),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("h4",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/"},"Snowplow Javascript tracker")," version 2 or later implemented."),(0,o.kt)("li",{parentName:"ul"},"Web Page context ",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2/#webPage_context"},"enabled")," (enabled by default in ",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/#webPage_context"},"v3+"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#page-views"},"Page view events")," implemented.")),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/sql-runner"},"SQL-runner"),"\xa0must be installed (",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/modeling-your-data/setup-and-run-sql-runner/"},"Setup guide"),")."),(0,o.kt)("li",{parentName:"ul"},"A dataset of web events from the\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/"},"Snowplow Javascript tracker"),"\xa0must be available in the database.")),(0,o.kt)("h4",{id:"configuring-and-running-the-model"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/data-models/tree/feature-redshift-web-v1/web/v1/redshift#configuration"}),"Configuring and running the model"),(0,o.kt)("p",null,"First, fill in the connection details for the target database in the relevant template in\xa0",(0,o.kt)("inlineCode",{parentName:"p"},".scripts/templates/redshift.yml.tmpl"),"."),(0,o.kt)("p",null,"Password can be left as a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"PASSWORD_PLACEHOLDER"),", and set as an environment variable or passed as an argument to the run","_","playbooks script. See the README in\xa0",(0,o.kt)("inlineCode",{parentName:"p"},".scripts"),"\xa0for more detail."),(0,o.kt)("p",null,"Variables in each module's playbook can also optionally be configured also. See each playbook directory's README for more detail on configuration of each module."),(0,o.kt)("p",null,"You can then run the model, either by running playbooks individually by running SQL-runner locally, or via your Snowplow BDP GitHub repository. Of course, as a Snowplow BDP customer you can also reach out to Support to get the model deployed for you."),(0,o.kt)("h2",{id:"technical-architecture"},"Technical architecture"),(0,o.kt)("h4",{id:"the-entire-model"},"The entire model"),(0,o.kt)("p",null,"This model consists of a series of modules, each is idempotent and can be run on independent schedules, and each produces a table which serves as the input to the next module."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/04/web_full_model_structure.jpg"},(0,o.kt)("img",{parentName:"a",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/04/web_full_model_structure.jpg?w=583",alt:null}))),(0,o.kt)("h4",{id:"the-individual-modules"},"The individual modules"),(0,o.kt)("p",null,"The 'standard' modules can be thought of as source code for the core logic of the model, which Snowplow maintains. These modules carry out the incremental logic in such a way as custom modules can be written to plug into the model's structure, without needing to write a parallel incremental logic. We recommend that all customisations are written in this way, which allows us to safely maintain and roll out updates to the model, without impact on dependent custom SQL. For more information on this, jump to the section on customizing the model below."),(0,o.kt)("p",null,"Each module produces a table which acts as the input to the subsequent module (the ",(0,o.kt)("inlineCode",{parentName:"p"},"_staged")," tables), and updates a production table - with the exception of the base module, which takes atomic data as its input, and does not update a production table."),(0,o.kt)("p",null,"Each module comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"99-{module}-complete playbook"),", which marks that module complete by updating any relevant manifests, and truncating the input, and cleaning up temporary tables. The complete steps may be run at the end of each module, or at the end of the run."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/04/web_model_module.jpg"},(0,o.kt)("img",{parentName:"a",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/04/web_model_module.jpg?w=1024",alt:null}))),(0,o.kt)("p",null,"More detail on each module can be found in the relevant READMEs in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/data-models/tree/master"},"GitHub repository"),"."),(0,o.kt)("h2",{id:"customizing-the-model"},"Customizing the model"),(0,o.kt)("p",null,"Custom modules can fit into the incremental structure by consuming the same inputs, and running before the ",(0,o.kt)("inlineCode",{parentName:"p"},"99-{module}-complete")," playbook runs. Custom modules may also consume and intermediary tables of the standard module, which will not be dropped until the ",(0,o.kt)("inlineCode",{parentName:"p"},"99-{module}-complete")," playbook runs."),(0,o.kt)("p",null,"Any custom SQL that depends on a ",(0,o.kt)("inlineCode",{parentName:"p"},"_staged")," table as its input should run before the complete step of the module which handles that same input. For example, custom logic which takes events","_","staged as an input should run before the ",(0,o.kt)("inlineCode",{parentName:"p"},"99-page-views-complete")," playbook."),(0,o.kt)("p",null,"As an introductory example, if there is a requirement to include data from custom events and entities for page views, for example, we would write a custom module which:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reads events (i.e. event","_","ids) from the ",(0,o.kt)("inlineCode",{parentName:"li"},"scratch.events_staged")," table"),(0,o.kt)("li",{parentName:"ul"},"Aggregates to one row per ",(0,o.kt)("inlineCode",{parentName:"li"},"page_view_id")),(0,o.kt)("li",{parentName:"ul"},"Deletes and inserts this to a custom table which can join to the ",(0,o.kt)("inlineCode",{parentName:"li"},"derived.page_views table")," on ",(0,o.kt)("inlineCode",{parentName:"li"},"page_view_id"))),(0,o.kt)("p",null,"If the playbook for this custom module is called ",(0,o.kt)("inlineCode",{parentName:"p"},"AA-my-custom-page-views-level-module.yml.tmpl"),", then we would run the playbooks as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"standard/01-base/01-base-main.yml.tmpl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"standard/01-base/99-base-complete.yml.tmpl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"standard/02-page-views/01-page-views-main.yml.tmpl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom/AA-my-custom-page-views-level-module.yml.tmpl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"standard/02-page-views/99-page-views-complete.yml.tmpl"))),(0,o.kt)("p",null,"Custom modules can also be created with their own independent manifesting logic, in which case they are more complex, but don't rely on the standard modules."),(0,o.kt)("p",null,"More information on customizing the Snowplow web data model can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/data-models/"},(0,o.kt)("inlineCode",{parentName:"a"},"web/v1/redshift/sql-runner/sql/custom")," folder on GitHub"),"."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"Metadata is logged in the ",(0,o.kt)("inlineCode",{parentName:"p"},"{{.output_schema}}.datamodel_metadata{{.entropy}}")," table, per-module and per-run. A persistent ID is created, so that separate modules within the same run may be identified. This ID is automatically handled, as long as the ",(0,o.kt)("inlineCode",{parentName:"p"},"99-{module}-complete")," step of the last module to run has the ",(0,o.kt)("inlineCode",{parentName:"p"},":ends_run:")," variable set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Rather than setting this variable, this can be maintained manually be running the ",(0,o.kt)("inlineCode",{parentName:"p"},"00-setup/00-setup-metadata.yml.tmpl")," before all other steps, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"00-setup/99-complete-metadata.yml.tmpl")," playbook after all other steps."))}u.isMDXComponent=!0}}]);