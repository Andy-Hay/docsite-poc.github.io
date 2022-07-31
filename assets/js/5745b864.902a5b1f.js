"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[47754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,w=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(w,s(s({ref:t},p),{},{components:n})):a.createElement(w,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"Load event and entity types that you have defined",date:"2020-02-26",sidebar_position:30},s=void 0,r={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/load-event-and-entity-types-that-you-have-defined/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/load-event-and-entity-types-that-you-have-defined/index",title:"Load event and entity types that you have defined",description:"Snowplow supports users creating their own events and entities. Events and entity definitions live as schemas in Iglu schema registries.",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/load-event-and-entity-types-that-you-have-defined/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/load-event-and-entity-types-that-you-have-defined",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/load-event-and-entity-types-that-you-have-defined/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/load-event-and-entity-types-that-you-have-defined/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:30,frontMatter:{title:"Load event and entity types that you have defined",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Schedule EmrEtlRunner",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/schedule-emretlrunner/"},next:{title:"SnowflakeDB",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/snowflakedb/"}},l={},d=[{value:"Loading Snowplow-authored events and entities",id:"loading-snowplow-authored-events-and-entities",level:2},{value:"Defining and installing a new table",id:"defining-and-installing-a-new-table",level:2},{value:"Overview",id:"overview",level:3},{value:"Creating a new table for a new event type",id:"creating-a-new-table-for-a-new-event-type",level:3},{value:"Creating and uploading a JSON Paths file",id:"creating-and-uploading-a-json-paths-file",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Creating a JSON Paths file",id:"creating-a-json-paths-file",level:3},{value:"Installing the JSON Paths file",id:"installing-the-json-paths-file",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Snowplow supports users creating their own events and entities. Events and entity definitions live as schemas in Iglu schema registries."),(0,o.kt)("p",null,"When you load Snowplow data into Redshift, the process for loading events and entities that you have authored, vs events and entities that Snowplow has authored, are slightly different."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Before RDB Loader R32, user had to deploy SQL tables and so called JSON Path files manually, for both Snowplow-authored and custom entities. ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/snowplow-rdb-loader-r32-released/3626"},"RDB Loader R32")," introduced table automigrations, which allow you to define entities only on Iglu Server. Table creation and mapping happen automatically."),(0,o.kt)("h2",{id:"loading-snowplow-authored-events-and-entities"},"Loading Snowplow-authored events and entities"),(0,o.kt)("p",null,"Snowplow-authored events and entity definitions are published to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/"},"Iglu Central"),", where anyone can access them. Snowplow provides pre-made Redshft table definitions for all these schemas here: ",(0,o.kt)("inlineCode",{parentName:"p"},"h[ttps://github.com/snowplow/iglu-central/tree/master/sql](https://github.com/snowplow/iglu-central/tree/master/sql)"),"."),(0,o.kt)("p",null,"For example, if you have link click tracking enabled in the JavaScript Tracker, then install ",(0,o.kt)("inlineCode",{parentName:"p"},"[com.snowplowanalytics.snowplow/link_click_1.sql](https://github.com/snowplow/iglu-central/blob/master/sql/com.snowplowanalytics.snowplow/link_click_1.sql)")," into your Snowplow database."),(0,o.kt)("p",null,"Each table needs to be loaded using a JSON Paths file. Snowplow hosts JSON Paths files for all Snowplow-authored JSONs. RDB Loader will automatically locate these JSON Paths files and use them to load shredded types into Redshift."),(0,o.kt)("h2",{id:"defining-and-installing-a-new-table"},"Defining and installing a new table"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"RDB Loader loads each shredded type into its own table in Redshift. You need to create a Redshift table for each new shredded type you have defined."),(0,o.kt)("h3",{id:"creating-a-new-table-for-a-new-event-type"},"Creating a new table for a new event type"),(0,o.kt)("p",null,"Once you have created a new schema in Iglu corresponding to your new event or entity type, you need to create a table definition for it. This can be automatically generated using ",(0,o.kt)("inlineCode",{parentName:"p"},"[igluctl](https://docs.snowplowanalytics.com/open-source/iglu/igluctl/0.5.0/#static-generate)"),", using the ",(0,o.kt)("inlineCode",{parentName:"p"},"[static generate](https://docs.snowplowanalytics.com/open-source/iglu/igluctl/0.5.0/#static-generate)")," command."),(0,o.kt)("h2",{id:"creating-and-uploading-a-json-paths-file"},"Creating and uploading a JSON Paths file"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("p",null,"You need to create a JSON Paths file which RDB Loader will use to load your shredded type into Redshift."),(0,o.kt)("p",null,"The format is simple - a JSON Paths file consists of a JSON array, where each element corresponds to a column in the target table. For full details, see the ",(0,o.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/redshift/latest/dg/copy-usage_notes-copy-from-json.html"},"Copy from JSON")," documentation from Amazon."),(0,o.kt)("h3",{id:"creating-a-json-paths-file"},"Creating a JSON Paths file"),(0,o.kt)("p",null,"JSON Path files should be automatically generated using ",(0,o.kt)("inlineCode",{parentName:"p"},"[igluctl static generate --with-json-paths](https://docs.snowplowanalytics.com/open-source/iglu/igluctl/0.5.0/#static-generate)")),(0,o.kt)("h3",{id:"installing-the-json-paths-file"},"Installing the JSON Paths file"),(0,o.kt)("p",null,"Upload the JSON Paths file to a private S3 bucket which is accessible using the AWS credentials provided in your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml")," file."),(0,o.kt)("p",null,"Store the JSON Paths file in a sub-folder named after the vendor, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s3://acme-jsonpaths-files/com.acme.website/anonymous_customer_1.json\n")))}u.isMDXComponent=!0}}]);