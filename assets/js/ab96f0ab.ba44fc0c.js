"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"R32 Upgrade Guide",date:"2020-03-06",sidebar_position:700},i=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r32-upgrade-guide/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r32-upgrade-guide/index",title:"R32 Upgrade Guide",description:"We recommend to go through the upgrade routine in several independent steps. After every step you should have a working pipeline. If something is not working or Shredder produces unexpected bad rows - please let us know.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r32-upgrade-guide/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r32-upgrade-guide",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r32-upgrade-guide/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r32-upgrade-guide/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:700,frontMatter:{title:"R32 Upgrade Guide",date:"2020-03-06",sidebar_position:700},sidebar:"tutorialSidebar",previous:{title:"R33/R34 Upgrade Guide",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide/"},next:{title:"Snowflake Loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/"}},l={},d=[{value:"Updating assets",id:"updating-assets",level:2},{value:"Iglu Server",id:"iglu-server",level:2},{value:"Tabular blacklisting",id:"tabular-blacklisting",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We recommend to go through the upgrade routine in several independent steps. After every step you should have a working pipeline. If something is not working or Shredder produces unexpected bad rows - please let us know."),(0,a.kt)("h2",{id:"updating-assets"},"Updating assets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Upgrade EmrEtlRunner to R116 or higher"),(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("inlineCode",{parentName:"li"},"redshift_config.json"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Update SchemaVer to ",(0,a.kt)("inlineCode",{parentName:"li"},"4-0-0")),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},'"blacklistTabular": null')," field into ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," payload"))),(0,a.kt)("li",{parentName:"ol"},"Update your ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yml")," file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"aws:\n  emr:\n    ami_version: 5.19.0     # was 5.9.0; Required by RDB Shredder \nstorage:\n  versions:\n    rdb_loader: 0.17.0      # was 0.16.0\n    rdb_shredder: 0.16.0    # was 0.15.0\n")),(0,a.kt)("p",null,"At this point, your pipeline should be running with new assets as it was before, without automigrations and generated TSV. We recommend to test this setup and monitor shredded bad rows for one or two runs before proceeding to enabling automigrations."),(0,a.kt)("h2",{id:"iglu-server"},"Iglu Server"),(0,a.kt)("p",null,"Automigrations work only with Iglu Server 0.6.0. This component provides information about how columns should be ordered across different ADDITIONs and REVISIOINs. If you still don't have Iglu Server 0.6.0 we recommend to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/wiki/Setting-up-an-Iglu-Server"},"set it up"),"."),(0,a.kt)("p",null,"You still can use static registries as a backup, they will continue to work for validatioin purposes, but won't work for TSV shredding. Snowplow does not provide a public Iglu Server hosting Iglu Central schemas, so we recommend you to mirror Iglu Central with your own Iglu Server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/snowplow/iglu-central.git\n$ igluctl static push iglu-central/schemas $YOUR_SERVER_URL $YOU_API_KEY\n$ igluctl static push com.acme-iglu-registry/schemas $YOUR_SERVER_URL $YOU_API_KEY\n")),(0,a.kt)("p",null,"After setting up the Iglu Server, don't forget to add it to your resolver config."),(0,a.kt)("h2",{id:"tabular-blacklisting"},"Tabular blacklisting"),(0,a.kt)("p",null,"New RDB Shredder is still able to produce legacy JSON files. But automigrations can be applied only to tables where data is prepared as TSV. If you setup a new pipeline, you can generate only TSVs abandoning legacy DDLs (except ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic.events")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic.manifest"),") and ",(0,a.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/jsonpaths-files-demystified/269"},"JSONPaths")," altogether. However, if you already have tables deployed which DDLs were generated manually or via old igluctl you will likely need to apply so called ",(0,a.kt)("em",{parentName:"p"},"tabular blacklisting")," to these tables. It means that Shredder will keep producing data with these schemas as JSONs and Loader won't be able to apply migrations to it. This is necessary because manually generated DDLs are not guaranteed to have predictable column order and the only way to map JSON values to respective columns is JSONPaths files."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/igluctl-0-7-0-released/3620"},"igluctl 0.7.0")," provides ",(0,a.kt)("inlineCode",{parentName:"p"},"rdbms table-check")," subcommand that get schemas from Iglu Server, figures out what DDL the Loader would generate, then connects to Redshift and compares those DDLs with actual state of the table.",(0,a.kt)("br",{parentName:"p"}),"\n",'Every table that have an incompatible order will have to be "blacklisted" in Redshift storage target config (',(0,a.kt)("inlineCode",{parentName:"p"},"redshift_config.json"),")."),(0,a.kt)("p",null,"Here's an example of a black list containing several schemas from Iglu Central:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "blacklistTabular": [\n    "iglu:org.w3/PerformanceTiming/jsonschema/1-*-*",\n\n    "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-*-*",\n    "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-*-*",\n    "iglu:com.snowplowanalytics.snowplow/mobile_context/jsonschema/1-*-*",\n    "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-*-*",\n    "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-*-*",\n    "iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-*-*",\n    "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-*-*",\n\n    "iglu:com.mandrill/recipient_unsubscribed/jsonschema/1-*-*",\n    "iglu:com.mandrill/message_soft_bounced/jsonschema/1-*-*",\n    "iglu:com.mandrill/message_sent/jsonschema/1-*-*",\n    "iglu:com.mandrill/message_opened/jsonschema/1-*-*",\n    "iglu:com.mandrill/message_marked_as_spam/jsonschema/1-*-*",\n    "iglu:com.mandrill/message_delayed/jsonschema/1-*-*",\n    "iglu:com.mandrill/message_clicked/jsonschema/1-*-*",\n    "iglu:com.mandrill/message_bounced/jsonschema/1-*-*"\n  ]\n')),(0,a.kt)("p",null,"As you can see, schemas specified in schema criterion format (with wildcards everywhere except MODEL)."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"At this point if you track an event with new schema and this schema resides on an Iglu Server - RDB Shredder will produce TSV data for it and RDB Loader will automatically create a new table. Same with ADDITION and REVISION migrations - they're handled by RDB Loader automatically."))}c.isMDXComponent=!0}}]);