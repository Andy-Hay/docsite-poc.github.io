"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1265],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={title:"Igluctl (0.8.0)",date:"2022-01-10",sidebar_position:-20},r=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-8-0/index",id:"migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-8-0/index",title:"Igluctl (0.8.0)",description:"Iglu is a schema repository for JSON Schema. A schema repository (sometimes called a registry) is like npm or Maven or git but holds data schemas instead of software or code. Iglu is used extensively in Snowplow.",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-8-0/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-8-0",slug:"/migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-8-0/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-8-0/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:-20,frontMatter:{title:"Igluctl (0.8.0)",date:"2022-01-10",sidebar_position:-20},sidebar:"tutorialSidebar",previous:{title:"Igluctl (0.9.0)",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-9-0/"},next:{title:"Igluctl (0.7.2)",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-7-2/"}},s={},p=[{value:"Igluctl",id:"igluctl",level:2},{value:"lint",id:"lint",level:2},{value:"static generate",id:"static-generate",level:2},{value:"Generating migration Redshift table scripts to accommodate updated schema versions",id:"generating-migration-redshift-table-scripts-to-accommodate-updated-schema-versions",level:3},{value:"Handling union types",id:"handling-union-types",level:3},{value:"Missing schema versions",id:"missing-schema-versions",level:3},{value:"Other options",id:"other-options",level:3},{value:"static push",id:"static-push",level:2},{value:"static pull",id:"static-pull",level:2},{value:"static s3cp",id:"static-s3cp",level:2},{value:"static deploy",id:"static-deploy",level:2},{value:"server keygen",id:"server-keygen",level:2},{value:"rdbms table-check",id:"rdbms-table-check",level:2},{value:"rdbms table-migrate",id:"rdbms-table-migrate",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Iglu is a schema repository for JSON Schema. A schema repository (sometimes called a registry) is like npm or Maven or git but holds data schemas instead of software or code. Iglu is used extensively in Snowplow."),(0,i.kt)("h2",{id:"igluctl"},"Igluctl"),(0,i.kt)("p",null,"Iglu provides a CLI application, called igluctl which allows you to perform most common tasks on Iglu registry. So far, it consists of two subcommands:\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"static"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"lint"),", whereas former itself contains three subcommands\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"generate"),",",(0,i.kt)("inlineCode",{parentName:"p"},"push"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"s3cp"),", so overall structure of commands looks like following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lint"),"\xa0- validate set of JSON Schemas for syntax and consistency of their properties"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static"),"\xa0- work with static Iglu registry",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generate"),"\xa0- generate DDLs and migrations (only for Redshift now) from set of JSON Schemas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"push"),"\xa0- push set of JSON Schemas from static registry to full-featured (Scala Registry for example) one"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pull")," - pull set of JSON Schemas from registry to local folder"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3cp"),"\xa0- copy JSONPaths or schemas to S3 bucket"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"server")," - work with an Iglu server",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keygen")," - generate read and write API keys on Iglu Server"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rdbms")," - work with relation databases",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table-check")," - will check a given schema's table structure against schema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table-migrate"),' is optional and allows removal of incompatible tables by migrating them as opposed to just "blacklisting".')))),(0,i.kt)("p",null,"Download the latest Igluctl from GitHub releases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ wget https://github.com/snowplow-incubator/igluctl/releases/download/0.8.0/igluctl_0.8.0.zip\n$ unzip igluctl.zip\n")),(0,i.kt)("p",null,"Note that Igluctl expects JRE 11 to run."),(0,i.kt)("h2",{id:"lint"},"lint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0lint"),"\xa0validates JSON Schemas."),(0,i.kt)("p",null,"It is designed to be run against schema registries with a folder structure that follows the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-example-schema-registry"},"iglu-example-schema-registry"),"."),(0,i.kt)("p",null,"You can validate\xa0",(0,i.kt)("em",{parentName:"p"},"all"),"\xa0the schemas in the registry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ /path/to/igluctl lint /path/to/schema/registry/schemas\n")),(0,i.kt)("p",null,"Alternatively you can validate an individual schema e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ /path/to/igluctl lint /path/to/schema/registry/schemas/com.example_company/example_event/jsonschema/1-0-0\n")),(0,i.kt)("p",null,"Examples of errors that are identified:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSON Schema has inconsistent self-describing information and path on filesystem"),(0,i.kt)("li",{parentName:"ul"},"JSON Schema has invalid\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"$schema"),"\xa0keyword. It should be always set to\xa0",(0,i.kt)("a",{parentName:"li",href:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#"},"iglu-specific"),", while users tend to set it to Draft v4 or even to self-referencing Iglu URI"),(0,i.kt)("li",{parentName:"ul"},"JSON Schema is invalid against its standard (empty\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", string\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"maximum"),"\xa0and similar)"),(0,i.kt)("li",{parentName:"ul"},"JSON Schema contains properties which contradict each other, like\xa0",(0,i.kt)("inlineCode",{parentName:"li"},'{"type":\xa0"integer",\xa0"maxLength":\xa00}'),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"li"},'{"maximum":\xa00,\xa0"minimum":\xa010\'}'),". These schemas are inherently useless as for some valiators there is no JSON instance they can validate")),(0,i.kt)("p",null,"The above cases can very hard to spot without a specialized tool as they are still valid JSONs and in last case it is even valid JSON Schemas - so will validate against a standard JSON schema validator."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lint"),"\xa0has two options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--skip-warnings"),"\xa0which will omit warnings like unknown properties. However we strongly advise to not use this option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--skip-checks"),"\xa0which will lint without specified linters, given comma separated. To see available linters and their explanations,\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"$\xa0/path/to/igluctl\xa0--help"))),(0,i.kt)("p",null,"Note:\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"--severityLevel"),"\xa0option is deprecated and removed as of version 0.4.0."),(0,i.kt)("p",null,"Below are two groups of linters; allowed to be skipped and not allowed to be skipped. By default, all of them are enabled but igluctl users can skip any combination of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"rootObject"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"unknownFormats"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"numericMinMax"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"stringLength"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"optionalNull"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"description"),"\xa0through\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-checks"),"."),(0,i.kt)("p",null,"Igluctl let you skip below checks:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"DEFINITION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rootObject")),(0,i.kt)("td",{parentName:"tr",align:null},"Check that root of schema has object type and contains properties")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"unknownFormats")),(0,i.kt)("td",{parentName:"tr",align:null},"Check that schema doesn\u2019t contain unknown formats")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"numericMinMax")),(0,i.kt)("td",{parentName:"tr",align:null},"Check that schema with numeric type contains both minimum and maximum properties")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"stringLength")),(0,i.kt)("td",{parentName:"tr",align:null},"Check that schema with string type contains maxLength property or other ways to extract max length")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"optionalNull")),(0,i.kt)("td",{parentName:"tr",align:null},"Check that non-required fields have null type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:null},"Check that property contains description")))),(0,i.kt)("p",null,"A sample usage could be as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl lint --skip-checks description,rootObject /path/to/schema/registry/schemas\n")),(0,i.kt)("p",null,"Note that linter names are case sensitive"),(0,i.kt)("p",null,"Igluctl also includes many checks proving that schemas doesn\u2019t have conflicting expectations (such as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"minimum"),"\xa0value bigger than\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"maximum"),"). Schemas with such expectations are valid according to specification, but do not make any sense in real-world use cases. These checks are mandatory and cannot be disabled."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0lint"),"\xa0will exit with status code 1 if encounter at least one error."),(0,i.kt)("h2",{id:"static-generate"},"static generate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0static\xa0generate"),"\xa0generates corresponding\xa0",(0,i.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html"},"Redshift"),"\xa0DDL files (",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE\xa0TABLE"),"\xa0statements) and migration scripts (",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER\xa0TABLE"),"\xa0statements)."),(0,i.kt)("p",null,"This command previously was a part of\xa0",(0,i.kt)("a",{parentName:"p",href:"http://github.com/snowplow/schema-guru"},"Schema Guru"),"\xa0and was known as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"schema-guru\xa0ddl"),", but has been moved into iglu in r5 release."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate $INPUT\n")),(0,i.kt)("p",null,"You also can specify directory for output (current dir is used as default):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate --output $DDL_DIR $INPUT\n")),(0,i.kt)("h3",{id:"generating-migration-redshift-table-scripts-to-accommodate-updated-schema-versions"},"Generating migration Redshift table scripts to accommodate updated schema versions"),(0,i.kt)("p",null,"If an input directory is specified with several self-describing JSON schemas with a single REVISION, Igluctl will generate migration scripts to update (",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER"),") Redshift tables for older schema versions to support the latest schema version."),(0,i.kt)("p",null,"For example, having the following Self-describing JSON Schemas as an input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"schemas/com.acme/click","_","event/1-0-0"),(0,i.kt)("li",{parentName:"ul"},"schemas/com.acme/click","_","event/1-0-1"),(0,i.kt)("li",{parentName:"ul"},"schemas/com.acme/click","_","event/1-0-2")),(0,i.kt)("p",null,"Igluctl will generate the following migration scripts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sql/com.acme/click","_","event/1-0-0/1-0-1 to alter table from 1-0-0 to 1-0-1"),(0,i.kt)("li",{parentName:"ul"},"sql/com.acme/click","_","event/1-0-0/1-0-2 to alter table from 1-0-0 to 1-0-2"),(0,i.kt)("li",{parentName:"ul"},"sql/com.acme/click","_","event/1-0-1/1-0-2 to alter table from 1-0-1 to 1-0-2")),(0,i.kt)("p",null,"This migrations (and all subsequent table definitions) are aware of column order and will ensure that new columns are added at the end of the table definition. This means that the tables can be updated in-place with single\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER\xa0TABLE"),"\xa0statements."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": migrations support is in early beta. Only single alter-table case is supported, particularly \u201cadd optional field\u201d."),(0,i.kt)("h3",{id:"handling-union-types"},"Handling union types"),(0,i.kt)("p",null,"One of the more problematic scenarios to handle when generating Redshift table definitions is handling\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"UNION"),"\xa0field types e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},'["integer",\xa0"string"]'),"."),(0,i.kt)("p",null,"How should these be represented in SQL DDL? It\u2019s a tough question and we believe there is no perfect solution."),(0,i.kt)("p",null,"Igluctl provides two options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Union types will be transformed as most general. In the above example (union of an integer and string type) the corresponding Redshift column will be a\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"VARCHAR(4096)"),". This is the default behaviour."),(0,i.kt)("li",{parentName:"ol"},"Alternative approach: split the column with product types into separate ones with it\u2019s types as postfix. In the case of a field with type\xa0",(0,i.kt)("inlineCode",{parentName:"li"},'["string",\xa0"integer"]'),"\xa0two corresponding columns will be generated in Redshift:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"model_string"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"model_integer"),". To get Igluctl to split columns add the following flag:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"--split-product-types"),".")),(0,i.kt)("h3",{id:"missing-schema-versions"},"Missing schema versions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"static\xa0generate"),"\xa0command will check versions of schemas inside\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"\xa0as following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If user specified folder and one of schemas has no 1-0-0 or misses any other schemas in between (like it has 1-0-0 and 1-0-2) - refuse to do anything (but proceed with \u2013force option)"),(0,i.kt)("li",{parentName:"ul"},"If user specified full path to file with schema and this file is not 1-0-0 - just print a warning"),(0,i.kt)("li",{parentName:"ul"},"If user specified full path to file with schema and it is 1-0-0 - all good")),(0,i.kt)("h3",{id:"other-options"},"Other options"),(0,i.kt)("p",null,"If you\u2019re not a Snowplow Platform user, don\u2019t use\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"Self-describing Schema"),"\xa0or just don\u2019t want anything Iglu-specific, you can produce raw DDL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate --raw $INPUT\n")),(0,i.kt)("p",null,"But bear in mind that Self-describing Schemas bring many benefits. For example, raw Schemas will not preserve an order for your columns (it\u2019s just impossible as it doesn\u2019t know about previous revisions) and also you will not have a migrations."),(0,i.kt)("p",null,"You may also want to get JSONPaths file for Redshift\u2019s\xa0",(0,i.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html"},"COPY"),"\xa0command. It will place\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"jsonpaths"),"\xa0dir alongside with\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate --with-json-paths $INPUT\n")),(0,i.kt)("p",null,"If there\u2019s no clues about string length (e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength"),"\xa0specifications in the schema), Igluctl will set the length of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR"),"\xa0columns to 4096 by default . You can also specify this your own VARCHAR size used by default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate --varchar-size 32 $INPUT\n")),(0,i.kt)("p",null,"You can also specify Redshift Schema for your table (don\u2019t confuse database\xa0",(0,i.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/redshift/latest/dg/r_Schemas_and_tables.html"},"schema"),"\xa0and schemas like JSON). For non-raw mode\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"atomic"),"\xa0used as default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate --raw --dbschema business $INPUT\n")),(0,i.kt)("p",null,"Some users do not full rely on Igluctl for DDL generation and edit their DDLs manually. By default, Igluctl will not override your files (either DDLs and migrations) if user made any significant changes (comments and whitespaces are not significant). Instead Igluctl will print warning that file has been changed manually. To change this behavior you may specify\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"--force"),"\xa0flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate --force $INPUT\n")),(0,i.kt)("p",null,"It is possible to forget about ownership once table is created. It could be achieved within igluctl as following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate $INPUT --set-owner <owner>\n")),(0,i.kt)("p",null,"igluctl also has an option\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"--no-header"),"\xa0which will not place header comments into output DDL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static generate $INPUT --no-header\n")),(0,i.kt)("h2",{id:"static-push"},"static push"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0static\xa0push"),"\xa0publishes schemas stored locally to a remote\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/tree/master/2-repositories/iglu-server"},"Scala Iglu Registry"),"."),(0,i.kt)("p",null,"It accepts three required arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host"),"\xa0- Scala Iglu Registry host name or IP address with optional port and endpoint. It should conform pattern\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"host:port/path"),"\xa0(or just\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"host"),")\xa0",(0,i.kt)("strong",{parentName:"li"},"without"),"\xa0http:// prefix."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apikey"),"\xa0- master API key, used to create temporary write and read keys"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),"\xa0- path to your static registry (local folder containing schemas)")),(0,i.kt)("p",null,"Also it accepts optional\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"--public"),"\xa0argument which makes schemas available without\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"apikey"),"\xa0header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static push /path/to/static/registry iglu.acme.com:80/iglu-server f81d4fae-7dec-11d0-a765-00a0c91e6bf6\n")),(0,i.kt)("h2",{id:"static-pull"},"static pull"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0static pull")," downloads schemas stored on a remote\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/tree/master/2-repositories/iglu-server"},"Scala Iglu Registry")," to a local folder."),(0,i.kt)("p",null,"It accepts three required arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host"),"\xa0- Scala Iglu Registry host name or IP address with optional port and endpoint. It should conform pattern\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"host:port/path"),"\xa0(or just\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"host"),")\xa0",(0,i.kt)("strong",{parentName:"li"},"without"),"\xa0http:// prefix."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apikey"),"\xa0- master API key, used to create temporary write and read keys"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),"\xa0- path to your static registry (local folder to download to)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static pull /path/to/static/registry iglu.acme.com:80/iglu-server f81d4fae-7dec-11d0-a765-00a0c91e6bf6\n")),(0,i.kt)("h2",{id:"static-s3cp"},"static s3cp"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0static\xa0s3cp")," enables you to upload JSON Schemas to chosen S3 bucket. This is helpful for generating a remote iglu registry which can be served from S3 over http(s)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0static\xa0s3cp"),"\xa0accepts two required arguments and several options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input"),"\xa0- path to your files. Required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bucket"),"\xa0- S3 bucket name. Required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3path"),"\xa0- optional S3 path to prepend your input root. Usually you don\u2019t need it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accessKeyId"),"\xa0- your AWS Access Key Id. This may or or may not be required, depending on your preferred authentication option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretAccessKey"),"\xa0- your AWS Secret Access Key. This may or or may not be required, depending on your preferred authentication option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"profile"),"\xa0- your AWS profile name. This may or or may not be required, depending on your preferred authentication option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"region"),"\xa0- AWS S3 region. Default:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"us-west-2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip-schema-lists")," - Do not generate and upload schema list objects.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0static\xa0s3cp"),"\xa0tries to closely follow AWS CLI authentication process. First it checks if profile name or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"accessKeyId"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"secretAccessKey"),"\xa0pair provided and uses it. If neither of above provided - it looks into\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY"),"\xa0environment variables. If above aren\u2019t available as well - it\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"~/.aws/config"),"\xa0file. If all above failed - it exits with error."),(0,i.kt)("h2",{id:"static-deploy"},"static deploy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl\xa0static\xa0deploy"),"\xa0performs whole schema workflow at once."),(0,i.kt)("p",null,"It accepts one required arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config"),"\xa0- Path to configuration file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl static deploy /path/to/config/file\n")),(0,i.kt)("p",null,"Your configuration file should be a hocon file, following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/igluctl/blob/0.8.0/config/deploy.reference.hocon"},"reference example"),". For backwards compatibility with previous versions, you could also provide a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.iglu/igluctl_config/jsonschema/1-0-0"},"self-describing json"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  {\n    "lint": {\n      "skipWarnings": true\n      "includedChecks": [\n        "rootObject"\n        "unknownFormats"\n        "numericMinMax"\n        "stringLength"\n        "optionalNull"\n        "description"\n        "stringMaxLengthRange"\n      ]\n    }\n\n    "generate": {\n      "dbschema": "atomic"\n      "owner": "a_new_owner"\n      "varcharSize": 4096\n      "withJsonPaths": true\n      "noHeader": false\n      "force": false\n    }\n\n\n    "actions": [\n      {\n        "action": "push"\n        "isPublic": true\n        "apikey": "bd96b5ff-7eb7-4085-83e0-97ac4954b891"\n        "apikey": ${APIKEY_1}\n      }\n      {\n        "action": "s3cp"\n        "uploadFormat": "jsonschema"\n        "profile": "profile-1"\n        "region": "eu-east-2"\n      }\n    ]\n\n}\n')),(0,i.kt)("h2",{id:"server-keygen"},"server keygen"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl server keygen")," generates read and write API keys on Iglu Server."),(0,i.kt)("p",null,"It accepts two required arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host"),"\xa0- Scala Iglu Registry host name or IP address with optional port and endpoint. It should conform pattern\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"host:port/path"),"\xa0(or just\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"host"),")\xa0",(0,i.kt)("strong",{parentName:"li"},"without"),"\xa0http:// prefix."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apikey"),"\xa0- master API key, used to create temporary write and read keys")),(0,i.kt)("p",null,"Also it accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"--vendor-prefix")," argument which will be associated with generated key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl server keygen --vendor-prefix com.acme iglu.acme.com:80/iglu-server f81d4fae-7dec-11d0-a765-00a0c91e6bf6\n")),(0,i.kt)("h2",{id:"rdbms-table-check"},"rdbms table-check"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl rdbms table-check")," will check given schema's table structure against schema."),(0,i.kt)("p",null,"It supports two interfaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"igluctl rdbms table-check --server <uri>")," to check all tables"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"igluctl rdbms table-check --resolver <path> --schema <schemaKey>")," to check particular table")),(0,i.kt)("p",null,"It also accepts a number of arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--resolver <path>\n    Iglu resolver config path\n--schema <schemaKey>\n    Schema to check against. It should have iglu:<URI> format\n--server <uri>\n    Iglu Server URL\n--apikey <uuid>\n    Iglu Server Read ApiKey (non master)\n--dbschema <string>\n    Database schema\n--host <string>\n    Database host address\n--port <integer>\n    Database port\n--dbname <string>\n    Database name\n--username <string>\n    Database username\n--password <string>\n    Database password\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl rdbms table-check --resolver <path> --schema <schemaKey>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl rdbms table-check --server <uri>\n")),(0,i.kt)("h2",{id:"rdbms-table-migrate"},"rdbms table-migrate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"igluctl rdbms table-migrate"),' is optional and allows removal of incompatible tables by migrating them as opposed to just "blacklisting".'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rdbms table-migrate")," will provide you with DML/DDL statements steps to migrate legacy tables into a new format."),(0,i.kt)("p",null,"It also accepts a number of arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--help\n    Display this help text.\n--resolver <path>\n    Iglu resolver config path\n--schema <schemaKey>\n    Schema to check against. It should have iglu:<URI> format\n--dbschema <string>\n    Database schema\n--output <string>\n    S3 Path for output\n--role <string>\n    AWS Role\n--region <name>\n    AWS Region\n--host <string>\n    Database host address\n--port <integer>\n    Database port\n--dbname <string>\n    Database name\n--username <string>\n    Database username\n--password <string>\n    Database password\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./igluctl rdbms table-migrate --resolver <path> --schema <schemaKey>\n")))}u.isMDXComponent=!0}}]);