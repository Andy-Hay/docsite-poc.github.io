"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[64158],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return t?i.createElement(u,o(o({ref:n},c),{},{components:t})):i.createElement(u,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={title:"SchemaVer",date:"2021-03-26",sidebar_position:10},o=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/iglu/common-architecture/schemaver/index",id:"migrated/pipeline-components-and-applications/iglu/common-architecture/schemaver/index",title:"SchemaVer",description:"This page is adapted from the Snowplow Analytics blog post, Introducing SchemaVer for semantic versioning of schemas .",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/schemaver/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/common-architecture/schemaver",slug:"/migrated/pipeline-components-and-applications/iglu/common-architecture/schemaver/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/schemaver/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"SchemaVer",date:"2021-03-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Iglu Common Architecture",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/"},next:{title:"Self-describing JSON Schemas",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"Addition example",id:"addition-example",level:3},{value:"Revision example",id:"revision-example",level:3},{value:"Model example",id:"model-example",level:3},{value:"Additional differences",id:"additional-differences",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This page is adapted from the Snowplow Analytics blog post, ",(0,a.kt)("a",{parentName:"em",href:"http://snowplowanalytics.com/blog/2014/05/13/introducing-schemaver-for-semantic-versioning-of-schemas/"},"Introducing SchemaVer for semantic versioning of schemas")," .")),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"With the advent of our new self-describing JSON Schemas, it became necessary to implement some kind of versioning to those JSON Schemas so they could evolve through time."),(0,a.kt)("p",null,"Our approach is based on ",(0,a.kt)("a",{parentName:"p",href:"http://semver.org/"},"semantic versioning")," (SemVer for short) which, as a reminder, looks like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAJOR")," which you're supposed to use when you make backwards-incompatible API changes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MINOR")," when you add backwards-compatible functionalities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PATCH")," when you make backwards-compatible bug fixes")),(0,a.kt)("p",null,"As is, SemVer does not suit schema versioning well. Indeed, there is no such thing as bug fixes for a JSON Schema and the idea of an API doesn't really translate to JSON Schemas either."),(0,a.kt)("p",null,"That's why we decided to introduce our own schema versioning notion: SchemaVer.",(0,a.kt)("br",{parentName:"p"}),"\n","SchemaVer is defined as follows: ",(0,a.kt)("inlineCode",{parentName:"p"},"MODEL-REVISION-ADDITION")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MODEL")," when you make a breaking schema change which will prevent interaction with ",(0,a.kt)("em",{parentName:"li"},"any")," historical data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REVISION")," when you introduce a schema change which ",(0,a.kt)("em",{parentName:"li"},"may")," prevent interaction with ",(0,a.kt)("em",{parentName:"li"},"some")," historical data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADDITION")," when you make a schema change that is compatible with ",(0,a.kt)("em",{parentName:"li"},"all")," historical data")),(0,a.kt)("h3",{id:"addition-example"},"Addition example"),(0,a.kt)("p",null,"By way of example, if we were to modify an existing JSON Schema representing an ad click with version ",(0,a.kt)("inlineCode",{parentName:"p"},"1-0-0")," defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": false\n}\n')),(0,a.kt)("p",null,"and introduce a new ",(0,a.kt)("inlineCode",{parentName:"p"},"impressionId")," property to obtain the following JSON Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        },\n        "impressionId": {\n            "type": "string"\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": false\n}\n')),(0,a.kt)("p",null,"Because the new ",(0,a.kt)("inlineCode",{parentName:"p"},"impressionId")," is ",(0,a.kt)("strong",{parentName:"p"},"not")," a required property and because the ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"1-0-0")," version was set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", any historical data following the ",(0,a.kt)("inlineCode",{parentName:"p"},"1-0-0")," schema will work with this new schema.  "),(0,a.kt)("p",null,"According to our definition of SchemaVer, we are consequently looking at an ",(0,a.kt)("inlineCode",{parentName:"p"},"ADDITION")," and the schema's version becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"1-0-1"),"."),(0,a.kt)("h3",{id:"revision-example"},"Revision example"),(0,a.kt)("p",null,"If we continue with the same example, but modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," property to true to get the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        },\n        "impressionId": {\n            "type": "string"\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": true\n}\n')),(0,a.kt)("p",null,"We are now at version ",(0,a.kt)("inlineCode",{parentName:"p"},"1-0-2"),". After a while, we decide to add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"cost")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        },\n        "impressionId": {\n            "type": "string"\n        },\n        "cost": {\n            "type": "number",\n            "minimum": 0\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": true\n}\n')),(0,a.kt)("p",null,"The problem now is that since we modified the ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," to true before adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"cost")," field, someone might have added another ",(0,a.kt)("inlineCode",{parentName:"p"},"cost")," field in the meantime following a different set of rules (for example it could be an amount followed by the currency such as 1.00$, the effective type would be string and not number) and so we cannot be sure that this new schema validate all historical data.  "),(0,a.kt)("p",null,"As a result, this new JSON Schema is a ",(0,a.kt)("inlineCode",{parentName:"p"},"REVISION")," of the previous one, its version becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"1-1-0"),"."),(0,a.kt)("h3",{id:"model-example"},"Model example"),(0,a.kt)("p",null,"Times goes by and we choose to completely review our JSON Schema identifying an ad click only through a ",(0,a.kt)("inlineCode",{parentName:"p"},"clickId")," property so our schema becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "type": "object",\n    "properties": {\n        "clickId": {\n            "type": "string"\n        },\n        "cost": {\n            "type": "number",\n            "minimum": 0\n        }\n    },\n    "required": ["clickId"],\n    "additionalProperties": false\n}\n')),(0,a.kt)("p",null,"The change is so important that we cannot realistically expect our historical data to interact with this new JSON Schema, consequently, the ",(0,a.kt)("inlineCode",{parentName:"p"},"MODEL")," is changed and the schema's version becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"2-0-0"),".  "),(0,a.kt)("p",null,"Another important thing to notice is that we switched the ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," back to false in order to avoid unnecessary future revisions."),(0,a.kt)("h3",{id:"additional-differences"},"Additional differences"),(0,a.kt)("p",null,"There are a few additional differences between our own SchemaVer and SemVer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we use hyphens instead of periods to separate the components that make our SchemaVer"),(0,a.kt)("li",{parentName:"ul"},"the versioning starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"1-0-0")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"0.1.0"))),(0,a.kt)("p",null,"The design considerations behind those decisions can be found in the blog post on ",(0,a.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2014/05/13/introducing-schemaver-for-semantic-versioning-of-schemas/"},"SchemaVer"),"."))}m.isMDXComponent=!0}}]);