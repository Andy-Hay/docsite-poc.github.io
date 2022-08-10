"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[30118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Setup and run SQL Runner",date:"2020-12-01",sidebar_position:30},o=void 0,s={unversionedId:"migrated/modeling-your-data/setup-and-run-sql-runner/index",id:"migrated/modeling-your-data/setup-and-run-sql-runner/index",title:"Setup and run SQL Runner",description:"SQL Runner enables you to execute SQL scripts against the Snowplow data in your data warehouse. Specifically, it allows you to organize your SQL scripts in templatable playbooks, and execute them in series or in parallel on Snowflake, Amazon Redshift, GCP BigQuery and PostgreSQL.",source:"@site/docs/migrated/modeling-your-data/setup-and-run-sql-runner/index.md",sourceDirName:"migrated/modeling-your-data/setup-and-run-sql-runner",slug:"/migrated/modeling-your-data/setup-and-run-sql-runner/",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/setup-and-run-sql-runner/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:30,frontMatter:{title:"Setup and run SQL Runner",date:"2020-12-01",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"dbt: Mobile data model",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/the-snowplow-mobile-data-model/dbt-mobile-data-model/"},next:{title:"Configuring and running data models via Snowplow BDP",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/configuring-and-running-data-models-via-snowplow-bdp/"}},i={},u=[{value:"<strong>Playbooks</strong>",id:"playbooks",level:3},{value:"<strong>SQL files</strong>",id:"sql-files",level:3},{value:"Templates",id:"templates",level:3},{value:"<strong>Failure modes</strong>",id:"failure-modes",level:3},{value:"<strong>Return codes</strong>",id:"return-codes",level:3},{value:"<strong>Target configuration</strong>",id:"target-configuration",level:3},{value:"<strong>Redshift</strong>",id:"redshift",level:4},{value:"<strong>BigQuery</strong>",id:"bigquery",level:4},{value:"<strong>Snowflake</strong>",id:"snowflake",level:4},{value:"<strong>PostgreSQL</strong>",id:"postgresql",level:4},{value:"User guide",id:"user-guide",level:2},{value:"CLI Arguments",id:"cli-arguments",level:3},{value:"More on Consul",id:"more-on-consul",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/sql-runner"},"SQL Runner")," enables you to execute SQL scripts against the Snowplow data in your data warehouse. Specifically, it allows you to organize your SQL scripts in templatable playbooks, and execute them in series or in parallel on Snowflake, Amazon Redshift, GCP BigQuery and PostgreSQL."),(0,r.kt)("p",null,"To set up SQL Runner, Snowplow open source users can start from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/modeling-your-data/setup-and-run-sql-runner/#user-guide"},"User guide")," ."),(0,r.kt)("p",null,"For Snowplow BDP customers, SQL Runner is already setup as part of your pipeline, so you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/modeling-your-data/configuring-and-running-data-models-via-snowplow-insights/"},"get started")," with configuring and deploying your SQL data models immediately."),(0,r.kt)("p",null,"A SQL Runner data model consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL files (containing one or more SQL statements)"),(0,r.kt)("li",{parentName:"ul"},"Playbooks (YAML files organizing the SQL into steps)")),(0,r.kt)("h3",{id:"playbooks"},(0,r.kt)("strong",{parentName:"h3"},"Playbooks")),(0,r.kt)("p",null,"A playbook consists of one of more ",(0,r.kt)("em",{parentName:"p"},"steps"),", each of which consists of one or more ",(0,r.kt)("em",{parentName:"p"},"queries"),". Steps are run in series, queries are run in parallel within the step."),(0,r.kt)("p",null,"Each query contains the path to a ",(0,r.kt)("em",{parentName:"p"},"query file"),".\xa0"),(0,r.kt)("p",null,"All steps are applied against all ",(0,r.kt)("em",{parentName:"p"},"targets"),". All targets are processed in parallel."),(0,r.kt)("p",null,"In the following example, a.sql, b.sql and c.sql are run in parallel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':steps:\n  - :name: "Run a,b and c in parallel"\n    :queries:\n      - :name: a\n        :file: a.sql\n      - :name: b\n        :file: b.sql\n      - :name: c\n        :file: c.sql\n')),(0,r.kt)("p",null,"By contrast, in the example below, the three SQL files are executed in sequence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':steps:\n  - :name: "Run a..."\n    :queries:\n      - :name: a\n        :file: a.sql\n  - :name: "...then run b..."\n    :queries:\n      - :name: b\n        :file: b.sql\n  - :name: "...then run c..."\n    :queries:\n      - :name: c\n        :file: c.sql\n')),(0,r.kt)("p",null,"Playbooks can be templated, and corresponding variables can be passed in with the var flag like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sql-runner -var host=value,username=value2,password=value3\n")),(0,r.kt)("p",null,"Here is the corresponding playbook template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':targets:\n- :name: "My Postgres database 1"\n  :type: postgres\n  :host: {{.host}}\n  :database: sql_runner_tests_1\n  :port: 5432\n  :username: {{.username}}\n  :password: {{.password}}\n  :ssl: false # SSL disabled by default\n:variables:\n  :test_schema: sql_runner_tests\n  :timeFormat: "2006_01_02"\n:steps:\n- :name: Create schema and table\n  :queries:\n    - :name: Create schema and table\n      :file: postgres-sql/good/1.sql\n      :template: true\n')),(0,r.kt)("h3",{id:"sql-files"},(0,r.kt)("strong",{parentName:"h3"},"SQL files")),(0,r.kt)("p",null,'A query file contains one or more SQL statements. These are executed "raw" (i.e. not in a transaction) in series by SQL Runner. If the query file is flagged as a ',(0,r.kt)("em",{parentName:"p"},"template")," in the playbook, then the file is pre-processed as a template before being executed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If your query is a template that requires pre-processing, you must add ",(0,r.kt)("inlineCode",{parentName:"p"},"template: true")," to the query definition in the playbook yml file, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':name: "Run a.."\n    :queries:\n      - :name: a\n        :file: a.sql\n        :template: true\n')),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"Templates are run through Golang's ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/text/template"},"text template processor"),". The template processor can access all ",(0,r.kt)("em",{parentName:"p"},"variables")," defined in the playbook."),(0,r.kt)("p",null,"The following custom functions are also supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nowWithFormat [timeFormat]"),": where ",(0,r.kt)("inlineCode",{parentName:"li"},"timeFormat")," is a valid Golang ",(0,r.kt)("a",{parentName:"li",href:"http://golang.org/pkg/time/#Time.Format"},"time format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'systemEnv "ENV_VAR"'),": where ",(0,r.kt)("inlineCode",{parentName:"li"},"ENV_VAR")," is a key for a valid environment variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsEnvCredentials"),": supports passing credentials through environment variables, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsProfileCredentials"),": supports getting credentials from a credentials file, also used by boto/awscli"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsEC2RoleCredentials"),": supports getting role-based credentials, i.e. getting the automatically generated credentials in EC2 instances"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsChainCredentials"),": tries to get credentials from each of the three methods above in order, using the first one returned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"randomInt"),": will return a random integer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": All AWS functions output strings in the Redshift credentials format (",(0,r.kt)("inlineCode",{parentName:"p"},"CREDENTIALS 'aws_access_key_id=%s;aws_secret_access_key=%s'"),")."),(0,r.kt)("p",null,"For an example query file using templating see: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/sql-runner/blob/master/integration/resources/postgres-sql/good/3.sql"},"integration/resources/postgres-sql/good/3.sql")),(0,r.kt)("h3",{id:"failure-modes"},(0,r.kt)("strong",{parentName:"h3"},"Failure modes")),(0,r.kt)("p",null,"If a statement fails in a query file, the query will terminate and report failure."),(0,r.kt)("p",null,"If a query fails, its sibling queries will continue running, but no further steps will run."),(0,r.kt)("p",null,"Failures in one target do not affect other targets in any way."),(0,r.kt)("h3",{id:"return-codes"},(0,r.kt)("strong",{parentName:"h3"},"Return codes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- 0 for no errors\n- 5 for target initialization errors\n- 6 for query errors\n- 7 for both types of error\n- 8 for no queries run\n")),(0,r.kt)("h3",{id:"target-configuration"},(0,r.kt)("strong",{parentName:"h3"},"Target configuration")),(0,r.kt)("h4",{id:"redshift"},(0,r.kt)("strong",{parentName:"h4"},"Redshift")),(0,r.kt)("p",null,"If your storage target is Amazon Redshift, then the target configuration in the playbook is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'targets:\n  - name: "My Redshift database"\n    type: redshift\n    host: ADD HERE # The endpoint as shown in the Redshift console\n    database: ADD HERE # Name of database\n    port: 5439 # Default Redshift port\n    username: ADD HERE\n    password: ADD HERE\n    ssl: false # SSL disabled by default\nvariables:\n  ...\n')),(0,r.kt)("h4",{id:"bigquery"},(0,r.kt)("strong",{parentName:"h4"},"BigQuery")),(0,r.kt)("p",null,"To access a BigQuery project, sql-runner will need some Google credentials. These can be set up by creating a new service account in the GCP console, then providing its private key to the application via a GOOGLE","_","APPLICATION","_","CREDENTIALS environment variable - a detailed walkthrough of this process is available on the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually"},"GCP documentation website"),"."),(0,r.kt)("p",null,"After the credentials are set up, simply create a playbook with the following BigQuery-specific target configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'targets:\n  - name: "My BigQuery database"\n    type: bigquery\n    project: ADD HERE # Project ID as shown in the GCP console\'s front page\nvariables:\n    ...\n')),(0,r.kt)("h4",{id:"snowflake"},(0,r.kt)("strong",{parentName:"h4"},"Snowflake")),(0,r.kt)("p",null,"If your data warehouse is Snowflake, then the SQL Runner playbooks will have a target configuration as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'targets:\n  - name: "My Snowflake database"\n    type: snowflake\n    account: ADD HERE # Your Snowflake account name\n    database: ADD HERE # Name of database\n    warehouse: ADD HERE # Name of warehouse to run the queries\n    username: ADD HERE\n    password: ADD HERE\n    host: # Leave blank\n    port: # Leave blank\n    ssl: true # Snowflake connection is always secured by TLS\n    query_tag: ADD HERE # optional, available since v0.10.0\nvariables:\n    ...\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query_tag")," parameter sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"QUERY_TAG")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/parameters.html#query-tag"},"session parameter")," in Snowflake. When set, it will be applied to all queries included in the playbook."),(0,r.kt)("h4",{id:"postgresql"},(0,r.kt)("strong",{parentName:"h4"},"PostgreSQL")),(0,r.kt)("p",null,"Finally, if your storage target is PostgreSQL, then can be configured as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'targets:\n  - name: "My Postgres database"\n    type: postgres\n    host: ADD HERE\n    database: ADD HERE # Name of database\n    port: 5432 # Default Postgres port\n    username: ADD HERE\n    password: ADD HERE\n    ssl: false # SSL disabled by default\nvariables:\n')),(0,r.kt)("p",null,"That's it - you're now ready to start running SQL against your data warehouse!"),(0,r.kt)("h2",{id:"user-guide"},"User guide"),(0,r.kt)("p",null,"SQL Runner is a zero-dependency binary and can be found as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/sql-runner/releases/latest"},"release asset")," for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/sql-runner/releases/download/0.10.0/sql_runner_0.10.0_darwin_amd64.zip"},"macOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/sql-runner/releases/download/0.10.0/sql_runner_0.10.0_linux_amd64.zip"},"Linux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/sql-runner/releases/download/0.10.0/sql_runner_0.10.0_windows_amd64.zip"},"Windows"))),(0,r.kt)("h3",{id:"cli-arguments"},"CLI Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./sql-runner --help\nsql-runner version: 0.10.0\nRun playbooks of SQL scripts in series and parallel on Redshift, Postgres, BigQuery and Snowflake\nUsage:\n  -checkLock string\n        Checks whether the lockfile already exists\n  -consul string\n        The address of a consul server with playbooks and SQL files stored in KV pairs\n  -consulOnlyForLock\n        Will read playbooks locally, but use Consul for locking.\n  -deleteLock string\n        Will attempt to delete a lockfile if it exists\n  -dryRun\n        Runs through a playbook without executing any of the SQL\n  -fillTemplates\n        Will print all queries after templates are filled\n  -fromStep string\n        Starts from a given step defined in your playbook\n  -help\n        Shows this message\n  -lock string\n        Optional argument which checks and sets a lockfile to ensure this run is a singleton. Deletes lock on run completing successfully\n  -playbook string\n        Playbook of SQL scripts to execute\n  -runQuery string\n        Will run a single query in the playbook\n  -showQueryOutput\n        Will print all output from queries\n  -softLock string\n        Optional argument, like '-lock' but the lockfile will be deleted even if the run fails\n  -sqlroot string\n        Absolute path to SQL scripts. Use PLAYBOOK, BINARY and PLAYBOOK_CHILD for those respective paths (default \"PLAYBOOK\")\n  -var value\n        Variables to be passed to the playbook, in the key=value format\n  -version\n        Shows the program version\n")),(0,r.kt)("h4",{id:"more-on-consul"},"More on Consul"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-consul")," argument results in the following changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-playbook")," argument becomes the key that is used to look for the playbook in Consul."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-sqlroot")," argument also becomes a key argument for Consul."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-lock")," argument creates a lock as a Consul key value pair"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-softLock")," argument creates a lock as a Consul key value pair"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-checkLock")," argument searches in Consul for a lock"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"-deleteLock")," argument searches in Consul for a lock")),(0,r.kt)("p",null,"If you pass in the default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'./sql-runner -consul "localhost:8500" -playbook "sql-runner/playbook/1"'))),(0,r.kt)("p",null,"This results in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Looking for your playbook file at this key ",(0,r.kt)("inlineCode",{parentName:"li"},"sql-runner/playbook/1")),(0,r.kt)("li",{parentName:"ul"},"Expecting all your SQL file keys to begin with ",(0,r.kt)("inlineCode",{parentName:"li"},"sql-runner/playbook/<SQL path from playbook>"))),(0,r.kt)("p",null,"However as the key here can be used as a both a data and folder node we have added a new sqlroot option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'./sql-runner -consul "localhost:8500" -playbook "sql-runner/playbook/1" -sqlroot PLAYBOOK_CHILD'))),(0,r.kt)("p",null,"This results in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Looking for your playbook file at this key ",(0,r.kt)("inlineCode",{parentName:"li"},"sql-runner/playbook/1")),(0,r.kt)("li",{parentName:"ul"},"Expecting all your SQL file keys to begin with ",(0,r.kt)("inlineCode",{parentName:"li"},"sql-runner/playbook/1/<SQL path from playbook>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The data node is used as a folder node as well.")))))}d.isMDXComponent=!0}}]);