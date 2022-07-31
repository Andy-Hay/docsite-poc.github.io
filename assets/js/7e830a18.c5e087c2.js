"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[96942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Iglu Server",date:"2021-03-26",sidebar_position:2e3},s=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/index",id:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/index",title:"Iglu Server",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server",slug:"/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:2e3,frontMatter:{title:"Iglu Server",date:"2021-03-26",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Iglu Central",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},next:{title:"Iglu Server configuration reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Setup an Iglu Server",id:"setup-an-iglu-server",level:3},{value:"1. The schema service (<code>/api/schemas</code>)",id:"1-the-schema-service-apischemas",level:2},{value:"1.1 POST requests",id:"11-post-requests",level:3},{value:"1.2 PUT requests",id:"12-put-requests",level:3},{value:"1.3 Single-schema GET requests",id:"13-single-schema-get-requests",level:3},{value:"1.4 Multiple GET requests",id:"14-multiple-get-requests",level:3},{value:"Vendor-based requests",id:"vendor-based-requests",level:4},{value:"1.5 Swagger support",id:"15-swagger-support",level:3},{value:"2. Schema validation and the validation service (<code>/api/validation</code>)",id:"2-schema-validation-and-the-validation-service-apivalidation",level:2},{value:"3. Drafts service (<code>/api/drafts</code>)",id:"3-drafts-service-apidrafts",level:2},{value:"3.1 POST requests",id:"31-post-requests",level:3},{value:"3.2 Single-draft GET requests",id:"32-single-draft-get-requests",level:3},{value:"4. Debug (<code>/api/debug</code>) and metadata (<code>/api/meta</code>) services",id:"4-debug-apidebug-and-metadata-apimeta-services",level:2},{value:"5. API keys and the authentication service (<code>/api/auth</code>)",id:"5-api-keys-and-the-authentication-service-apiauth",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/iglu-server/"},"Iglu Server"),"\xa0is an Iglu schema registry which allows you to publish, test and serve schemas via an easy-to-use RESTful interface. It is split into a few services which will be detailed in the following sections."),(0,i.kt)("h3",{id:"setup-an-iglu-server"},"Setup an Iglu Server"),(0,i.kt)("p",null,"Information on setting up an instance of the Iglu Server can be found in\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/"},"the setup guide"),"."),(0,i.kt)("h2",{id:"1-the-schema-service-apischemas"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#1-the-schema-service-apischemas"}),"1","."," The schema service (",(0,i.kt)("inlineCode",{parentName:"h2"},"/api/schemas"),")"),(0,i.kt)("p",null,"The schema service allows you to interact with Iglu schemas using simple HTTP requests."),(0,i.kt)("h3",{id:"11-post-requests"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#11-post-requests"}),"1.1 POST requests"),(0,i.kt)("p",null,"Sending a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request to the schema service allows you to publish a new self-describing schema to the repository."),(0,i.kt)("p",null,"As an example, let's assume you own the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.acme"),"\xa0vendor prefix (more information on that can be found in the API authentication section) and have a JSON schema defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n  "description": "Schema for an Acme Inc ad click event",\n  "self": {\n    "vendor": "com.acme",\n    "name": "ad_click",\n    "format": "jsonschema",\n    "version": "1-0-0"\n  },\n  "type": "object",\n  "properties": {\n    "clickId": {\n      "type": "string"\n    },\n    "targetUrl": {\n      "type": "string",\n      "minLength": 1\n    }\n  },\n  "required": ["targetUrl"],\n  "additionalProperties": false\n}\n')),(0,i.kt)("p",null,"The schema can be added to your repository by making a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request to the following endpoint with the schema included in the request's body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HOST/api/schemas/\n")),(0,i.kt)("p",null,"By default, the schema will not be public (available to others) - this can be changed by adding an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"isPublic"),"\xa0query parameter and setting its value to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"For example, the following request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/schemas -X POST -H "apikey: YOUR_APIKEY" -d @myschema.json \n')),(0,i.kt)("p",null,"will produce a response like this one, if no errors are encountered:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "message": "Schema created",\n  "updated": false,\n  "location": "iglu:com.acme/ad_click/jsonschema/1-0-0",\n  "status":201\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note:"),"\xa0This endpoint must be used with an API key with a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"schema_action"),"\xa0permission of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,i.kt)("h3",{id:"12-put-requests"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#12-put-requests"}),"1.2 PUT requests"),(0,i.kt)("p",null,"Another way of adding schemas is using a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),"\xa0request. Just like a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request, it allows you to publish a schema to the Iglu Server by including it in the request's body, with an optional\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"isPublic"),"\xa0parameter used to set the visibility of a schema. Unlike\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0requests,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),"\xa0requests require a schema's Iglu URI to be included in the request URI (i.e.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"HOST/api/schemas/vendor/name/format/version"),"."),(0,i.kt)("p",null,"However, this means that a schema included in the request's body can be non-self-describing as well as self-describing. Note that in the latter case the URL path must match the schema's metadata, so a schema described as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"iglu:com.snplow/foo/jsonschema/1-0-0"),"\xa0cannot be published using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/schemas/com.acme/bar/jsonschema/1-0-0"),"\xa0PUT endpoint."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/schemas/com.acme/ad_click/jsonschema/1-0-0 -X PUT -H "apikey: YOUR_APIKEY" -d @myschema.json \n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note:"),"\xa0This endpoint must be used with an API key with a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"schema_action"),"\xa0permission of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,i.kt)("h3",{id:"13-single-schema-get-requests"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#13-single-schema-get-requests"}),"1.3 Single-schema GET requests"),(0,i.kt)("p",null,"A schema previously added to the repository can be retrieved by making a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/schemas/com.acme/ad_click/jsonschema/1-0-0 -X GET -H "apikey: YOUR_APIKEY"\n')),(0,i.kt)("p",null,"The JSON response should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n  "description": "Schema for an Acme Inc ad click event",\n  "self": {\n    "vendor": "com.acme",\n    "name": "ad_click",\n    "format": "jsonschema",\n    "version": "1-0-0"\n  },\n  "type": "object",\n  "properties": {\n  "clickId": {\n    "type": "string"\n  },\n  "targetUrl": {\n    "type": "string",\n    "minLength": 1\n  }\n  },\n  "required": ["targetUrl"],\n  "additionalProperties": false\n}\n')),(0,i.kt)("p",null,"GET requests support a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr"),"\xa0URL parameter, allowing you to specify three different ways of representing an Iglu schema. This can have values of either\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"canonical"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),".\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr=canonical"),"\xa0returns the schema as a self-describing Iglu event - it is also the default representation method if no query parameter is specified. (An example of this representation can be seen above.)\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr=meta"),"\xa0adds an additional\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"\xa0field to the schema, containing some meta information about it - this would make the JSON response look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n  "description": "Schema for an Acme Inc ad click event",\n  "self": {\n    "vendor": "com.acme",\n    "name": "ad_click",\n    "format": "jsonschema",\n    "version": "1-0-0"\n  },\n  "type": "object",\n  "properties": {\n  "clickId": {\n    "type": "string"\n  },\n  "targetUrl": {\n    "type": "string",\n    "minLength": 1\n  }\n  },\n  "required": ["targetUrl"],\n  "additionalProperties": false,\n  "metadata": {\n    "createdAt":"2019-04-01T14:23:45.173728Z",\n    "updatedAt":"2019-04-01T14:23:45.173728Z",\n    "isPublic":true\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"repr=uri"),"\xa0simply returns a schema's Iglu URI - this is used internally in the Iglu Server, but public requests are also supported. A response with this URL parameter set would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"iglu:com.acme/ad_click/jsonschema/1-0-0"\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note:"),"\xa0While\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"body"),"\xa0query parameters used in previous versions of the Iglu Server are supported, they have been deprecated in favor of the single\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr"),"\xa0parameter."),(0,i.kt)("h3",{id:"14-multiple-get-requests"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#14-multiple-get-requests"}),"1.4 Multiple GET requests"),(0,i.kt)("p",null,"You can also retrieve multiple schemas in a single\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0request using a few different endpoints"),(0,i.kt)("h4",{id:"vendor-based-requests"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#vendor-based-requests"}),"Vendor-based requests"),(0,i.kt)("p",null,"Every schema belonging to a single vendor can be retrieved by sending a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0request to the following endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HOST/api/schemas/vendor\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/schemas/com.acme -X GET -H "apikey: YOUR_APIKEY"\n')),(0,i.kt)("p",null,"You will get back an array of every schema belonging to this vendor. You can use the same approach to get a list of schemas by vendor and name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HOST/api/schemas/vendor/name\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/schemas/com.acme/ad_click -X GET -H "apikey: YOUR_APIKEY"\n')),(0,i.kt)("p",null,"Or simply retrieve every single public schema accessible to you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HOST/api/schemas\n")),(0,i.kt)("p",null,"or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/schemas/public"),"\xa0in pre-0.5.0 releases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/schemas -X GET -H "apikey: YOUR_APIKEY"\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note:"),"\xa0you can only retrieve schemas that can be read by your API key. This means that if you do not own a vendor you're requesting schemas for, you will only be able to retrieve the vendor's public schemas (if any exist)."),(0,i.kt)("h3",{id:"15-swagger-support"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#15-swagger-support"}),"1.5 Swagger support"),(0,i.kt)("p",null,"We have added\xa0",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger"),"\xa0support to our API so you can explore the repository server\u2019s API interactively. The Swagger UI is available at the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://$HOST/static/swagger-ui/index.html\n")),(0,i.kt)("h2",{id:"2-schema-validation-and-the-validation-service-apivalidation"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#2-schema-validation-and-the-validation-service-apivalidation"}),"2","."," Schema validation and the validation service (",(0,i.kt)("inlineCode",{parentName:"h2"},"/api/validation"),")"),(0,i.kt)("p",null,"When adding a schema to the repository, the repository will validate that the provided schema is self-describing - an overview of this concept can be found in the\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"Self describing JSON schemas"),"\xa0wiki page. In practice this means your schema should contain a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"self"),"\xa0property, which itself contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vendor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"))),(0,i.kt)("p",null,"Non-self-describing schemas can only be added to a repository using a PUT call to the schemas API that describes its vendor, name, format and version in the URL itself rather than the schema."),(0,i.kt)("p",null,"The Iglu Server's Validation service can also be used to validate that a schema is valid without adding it to the repository using the following endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST HOST/api/schemas/validation/validate/schema/format\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl HOST/api/validation/validate/schema/jsonschema -X POST -d @myevent.json\n")),(0,i.kt)("p",null,"The response received will be a detailed report containing information about the schema's validity, as well as potential errors or warnings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{  \n  "message": "The schema has some issues",\n  "report": [  \n    {  \n      "message": "The schema is missing the \\"description\\" property",\n      "level": "INFO",\n      "pointer": "/properties/targetUrl"\n    },\n    {  \n      "message": "A string type in the schema doesn\'t contain \\"maxLength\\" or format which is required",\n      "level": "WARNING",\n      "pointer": "/properties/targetUrl"\n    },\n    {  \n      "message": "The schema is missing the \\"description\\" property",\n      "level": "INFO",\n      "pointer": "/properties/clickId"\n    },\n    {  \n      "message": "A string type in the schema doesn\'t contain \\"maxLength\\" or format which is required",\n      "level": "WARNING",\n      "pointer": "/properties/clickId"\n    },\n    {  \n      "message": "Use \\"type: null\\" to indicate a field as optional for properties clickId",\n      "level": "INFO",\n      "pointer": "/"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Another endpoint in the validation service allows you to validate self-describing\xa0",(0,i.kt)("em",{parentName:"p"},"data"),"\xa0against a schema already located in the Iglu Server repository, if it is accessible to your API key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST HOST/api/schemas/validation/validate/instance\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/validation/validate/instance -X POST -H "apikey: YOUR_APIKEY" -d @myevent.json\n')),(0,i.kt)("p",null,"The service will then either confirm the schema's validity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "message": "Instance is valid iglu:com.acme/ad_click/jsonschema/1-0-0"\n}\n')),(0,i.kt)("p",null,"Or, if it has some issues, return a detailed report about its problems:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{  \n  "message":"The instance is invalid against its schema",\n  "report":[  \n    {  \n      "message": "$.targetUrl: must be at least 1 characters long",\n      "path": "$.targetUrl",\n      "keyword": "minLength",\n      "targets": [ "1" ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Like the schema service, the validation service is also accessible through Swagger UI."),(0,i.kt)("h2",{id:"3-drafts-service-apidrafts"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#3-drafts-service-apidrafts"}),"3","."," Drafts service (",(0,i.kt)("inlineCode",{parentName:"h2"},"/api/drafts"),")"),(0,i.kt)("p",null,"The draft schema service lets you interact with draft schemas using simple HTTP requests. Draft schemas are variants of Iglu schemas with simple versions that start with\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\xa0and can be increased as needed."),(0,i.kt)("h3",{id:"31-post-requests"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#31-post-requests"}),"3.1 POST requests"),(0,i.kt)("p",null,"Sending a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request to the draft service allows you to publish a new self-describing schema to the repository."),(0,i.kt)("p",null,"As an example, let's assume you own the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.acme"),"\xa0vendor prefix (more information on that can be found in the API authentication section) and have a JSON schema defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n  "description": "Schema for an Acme Inc ad click event",\n  "self": {\n    "vendor": "com.acme",\n    "name": "ad_click",\n    "format": "jsonschema",\n    "version": "1-0-0"\n  },\n  "type": "object",\n  "properties": {\n    "clickId": {\n      "type": "string"\n    },\n    "targetUrl": {\n      "type": "string",\n      "minLength": 1\n    }\n  },\n  "required": ["targetUrl"],\n  "additionalProperties": false\n}\n')),(0,i.kt)("p",null,"The schema can be added to your repository as a draft by making a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request to the following endpoint with the schema included in the request's body, and its vendor, name, format and desired draft number added to the request's URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HOST/api/drafts/vendor/name/format/draftNumber\n")),(0,i.kt)("p",null,"By default, the schema draft will not be public (available to others) - this can be changed by adding an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"isPublic"),"\xa0query parameter and setting its value to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"For example, the following request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/drafts/com.acme/ad_click/jsonschema/1 -X POST -H "apikey: YOUR_APIKEY" -d @myschema.json\n')),(0,i.kt)("p",null,"will produce a response like this one, if no errors are encountered:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "message": "Schema created",\n  "updated": false,\n  "location": "iglu:com.acme/ad_click/jsonschema/1",\n  "status":201\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note:"),"\xa0This endpoint must be used with an API key with a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"schema_action"),"\xa0permission of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,i.kt)("h3",{id:"32-single-draft-get-requests"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#32-single-draft-get-requests"}),"3.2 Single-draft GET requests"),(0,i.kt)("p",null,"A schema draft previously added to the repository can be retrieved by making a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/drafts/com.acme/ad_click/jsonschema/1 -X GET -H "apikey: YOUR_APIKEY"\n')),(0,i.kt)("p",null,"The JSON response should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n  "description": "Schema for an Acme Inc ad click event",\n  "self": {\n    "vendor": "com.acme",\n    "name": "ad_click",\n    "format": "jsonschema",\n    "version": "1-0-0"\n  },\n  "type": "object",\n  "properties": {\n  "clickId": {\n    "type": "string"\n  },\n  "targetUrl": {\n    "type": "string",\n    "minLength": 1\n  }\n  },\n  "required": ["targetUrl"],\n  "additionalProperties": false\n}\n')),(0,i.kt)("p",null,"GET requests support a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr"),"\xa0URL parameter, allowing you to specify three different ways of representing an Iglu schema. This can have values of either\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"canonical"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),".\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr=canonical"),"\xa0returns the schema as a self-describing Iglu event - it is also the default representation method if no query parameter is specified. (An example of this representation can be seen above.)\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr=meta"),"\xa0adds an additional\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"\xa0field to the schema, containing some meta information about it - this would make the JSON response look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n  "description": "Schema for an Acme Inc ad click event",\n  "self": {\n    "vendor": "com.acme",\n    "name": "ad_click",\n    "format": "jsonschema",\n    "version": "1-0-0"\n  },\n  "type": "object",\n  "properties": {\n  "clickId": {\n    "type": "string"\n  },\n  "targetUrl": {\n    "type": "string",\n    "minLength": 1\n  }\n  },\n  "required": ["targetUrl"],\n  "additionalProperties": false,\n  "metadata": {\n    "createdAt":"2019-04-01T14:23:45.173728Z",\n    "updatedAt":"2019-04-01T14:23:45.173728Z",\n    "isPublic":true\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"repr=uri"),"\xa0simply returns a schema's Iglu URI - this is used internally in the Iglu Server, but public requests are also supported. A response with this URL parameter set would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"iglu:com.acme/ad_click/jsonschema/1-0-0"\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note:"),"\xa0While\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"body"),"\xa0query parameters used in previous versions of the Iglu Server are supported, they have been deprecated in favor of the single\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repr"),"\xa0parameter."),(0,i.kt)("h2",{id:"4-debug-apidebug-and-metadata-apimeta-services"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#4-debug-apidebug-and-metadata-apimeta-services"}),"4","."," Debug (",(0,i.kt)("inlineCode",{parentName:"h2"},"/api/debug"),") and metadata (",(0,i.kt)("inlineCode",{parentName:"h2"},"/api/meta"),") services"),(0,i.kt)("p",null,"The Iglu Server includes several endpoints for inspecting its own state."),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/debug"),"\xa0endpoint is only active when\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"debug"),"\xa0is set to true in the Iglu Server's configuration file, and returns the Iglu Server's internal state if in-memory storage is used instead of PostgreSQL.\xa0",(0,i.kt)("strong",{parentName:"p"},"This endpoint should be used for internal development and testing only!")),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/meta/health"),"\xa0endpoint will respond with a simple OK string if the server is available:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$curl HOST/api/meta/health\nOK\n")),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/meta/health/db"),"\xa0endpoint is similar, but will also check if the database is accessible if PostgreSQL storage is used (in-memory storage is always accessible):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$curl HOST/api/meta/health/db\nOK\n")),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/meta/server"),"\xa0endpoint returns information about the server - its version, database type, certain configuration settings etc. If an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),"\xa0header is included in the request, it will also return information about the key's permissions and the number of schemas accessible to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl HOST/api/meta/server -H \'apikey: YOUR_APIKEY\'\n{\n  "version": "0.6.0",\n  "authInfo": {\n    "vendor": "",\n    "schema": "CREATE_VENDOR",\n    "key": [ "CREATE", "DELETE" ]\n  },\n  "database": "postgres",\n  "schemaCount": 18,\n  "debug": true,\n  "patchesAllowed": false\n}\n')),(0,i.kt)("h2",{id:"5-api-keys-and-the-authentication-service-apiauth"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-server#5-api-keys-and-the-authentication-service-apiauth"}),"5","."," API keys and the authentication service (",(0,i.kt)("inlineCode",{parentName:"h2"},"/api/auth"),")"),(0,i.kt)("p",null,"In order to use the routes of the Iglu Server's API that require either write access to the repository or readaccess to non-public schemas, you will need an API key, passed as an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),"\xa0HTTP header to relevant calls of those services."),(0,i.kt)("p",null,"The Iglu Server's administrator is responsible for distributing API keys to the repository's clients. To do so, they will need a super API key which will let them generate other keys - this key will have to be manually added to the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INSERT INTO permissions\nVALUES ('api_key_here', '', TRUE, 'CREATE_VENDOR'::schema_action, '{\"CREATE\", \"DELETE\"}'::key_action[])\n")),(0,i.kt)("p",null,"Thanks to this super API key the server's administrator be able to use the API key generation service, which lets them create and revoke API keys. A pair of API keys for a given vendor can be generated by submitting a POST request to the keygen endpoint, with the prefix included in the request's body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST HOST/api/auth/keygen\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl HOST/api/auth/keygen -X POST -H \'apikey: ADMIN_APIKEY\' -H "Content-Type: application/json" -d \'{"vendorPrefix": "com.acme"}\'\n')),(0,i.kt)("p",null,"If no errors occur, the method should return two UUIDs that act as API keys for the given vendor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "read":"bfa90866-aa14-4b92-b6ef-d421fd688b54",\n  "write":"6175aa41-d3b7-4e4f-9fb4-3a170f3c6c16"\n}\n')),(0,i.kt)("p",null,"One of those API keys will have read access and will let you retrieve private schemas or drafts (or other vendors' public schemas) through\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0requests. The other will have both read and write access - you will therefore be able to publish and modify schemas or drafts through\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),"\xa0requests in addition to being able to retrieve them. It is then up to you on to distribute those two keys however you want. The keys grant access to every schema whose vendor starts with\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.acme"),", though wildcard (",(0,i.kt)("inlineCode",{parentName:"p"},"*"),") vendor keys can also be generated."),(0,i.kt)("p",null,"Existing API keys can be revoked by sending a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),"\xa0request to the same endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE HOST/api/auth/keygen\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl HOST/api/auth/keygen?key=APIKEY_TO_DELETE -X DELETE -H 'apikey: ADMIN_APIKEY'\n")),(0,i.kt)("p",null,"If the operation succeeds, it will return a simple JSON response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "message":"Keys have been deleted"\n}\n')))}d.isMDXComponent=!0}}]);