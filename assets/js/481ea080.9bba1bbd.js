"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[10160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={title:"HTTP Request Tag Configuration",date:"2022-01-06",sidebar_position:100},r=void 0,l={unversionedId:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/index",id:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/index",title:"HTTP Request Tag Configuration",description:"Video Walkthrough",source:"@site/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration",slug:"/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:100,frontMatter:{title:"HTTP Request Tag Configuration",date:"2022-01-06",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"HTTP Request Tag for GTM SS",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/"},next:{title:"Building an Enriched event relay for GTM SS",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/"}},s={},p=[{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Destination URL (required)",id:"destination-url-required",level:3},{value:"Wrap the request body inside an array",id:"wrap-the-request-body-inside-an-array",level:3},{value:"Include all event data in the request body",id:"include-all-event-data-in-the-request-body",level:3},{value:"Snowplow Event Mapping Options",id:"snowplow-event-mapping-options",level:2},{value:"Snowplow Atomic Properties Rules",id:"snowplow-atomic-properties-rules",level:3},{value:"Snowplow Self-Describing Event Rules",id:"snowplow-self-describing-event-rules",level:3},{value:"Snowplow Event Context Rules",id:"snowplow-event-context-rules",level:3},{value:"Extract entity from Array if single element",id:"extract-entity-from-array-if-single-element",level:4},{value:"Include all Entities in request body",id:"include-all-entities-in-request-body",level:4},{value:"Include unmapped entities in request body",id:"include-unmapped-entities-in-request-body",level:4},{value:"Additional Event Mapping Options",id:"additional-event-mapping-options",level:2},{value:"Event Property Rules",id:"event-property-rules",level:3},{value:"Include common event properties",id:"include-common-event-properties",level:4},{value:"Include common user properties",id:"include-common-user-properties",level:4},{value:"Additional Event Property Mapping Rules",id:"additional-event-property-mapping-rules",level:4},{value:"Additional Request Data",id:"additional-request-data",level:2},{value:"Request Headers",id:"request-headers",level:2},{value:"Additional Options",id:"additional-options",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,"In the following short video a complete example configuration of the Snowplow GTM-SS HTTP Request Tag is presented."),(0,o.kt)("p",null,"Scenario: The example assumes that we want to send a POST HTTP Request to an example custom destination endpoint, where we would like the body of the request to have the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "api-key": "myApiKey",\n  "user_identifier": ...\n  "event_data": {\n    ...\n  },\n  "user_data": {\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"where, for this example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Our endpoint expects the ",(0,o.kt)("inlineCode",{parentName:"li"},"api-key")," inside the request body."),(0,o.kt)("li",{parentName:"ul"},"As our ",(0,o.kt)("inlineCode",{parentName:"li"},"user_identifier")," we want to map the value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"client_id")," from the client event."),(0,o.kt)("li",{parentName:"ul"},"Inside ",(0,o.kt)("inlineCode",{parentName:"li"},"event_data")," we want to include:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the common event data"),(0,o.kt)("li",{parentName:"ul"},"the Self-Describing event data"),(0,o.kt)("li",{parentName:"ul"},"the performance timing data from the Snowplow ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/org.w3/PerformanceTiming/jsonschema/1-0-0"},"Performance Timing Context"),"), with ",(0,o.kt)("inlineCode",{parentName:"li"},"performance_timing")," as the property name"),(0,o.kt)("li",{parentName:"ul"},"the page view id from the Snowplow ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0"},"web","_","page context"),", with ",(0,o.kt)("inlineCode",{parentName:"li"},"page_view_id")," as the property name."))),(0,o.kt)("li",{parentName:"ul"},"Under ",(0,o.kt)("inlineCode",{parentName:"li"},"user_data")," we want to map the ",(0,o.kt)("inlineCode",{parentName:"li"},"user_data")," from the client event.")),(0,o.kt)("p",null,"You can read on below for more details on each configuration option."),(0,o.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,o.kt)("h3",{id:"destination-url-required"},"Destination URL (required)"),(0,o.kt)("p",null,"Set this to the URL of your custom HTTP endpoint."),(0,o.kt)("h3",{id:"wrap-the-request-body-inside-an-array"},"Wrap the request body inside an array"),(0,o.kt)("p",null,"By default, the JSON body is an object. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ "myProperty": "myValue" }\n')),(0,o.kt)("p",null,"This option allows you to wrap the resulting object of the request body inside an array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[{ "myProperty": "myValue" }]\n')),(0,o.kt)("h3",{id:"include-all-event-data-in-the-request-body"},"Include all event data in the request body"),(0,o.kt)("p",null,"This option allows you to relay the full client event into the body of the request. Enabling this option, consequently disables both the Snowplow and the Additional Event Mapping Options, which allow to cherry-pick event properties and customize the request body."),(0,o.kt)("h2",{id:"snowplow-event-mapping-options"},"Snowplow Event Mapping Options"),(0,o.kt)("p",null,"This section includes the mapping rules that concern a Snowplow event as claimed by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/"},"Snowplow Client"),":"),(0,o.kt)("h3",{id:"snowplow-atomic-properties-rules"},"Snowplow Atomic Properties Rules"),(0,o.kt)("p",null,"This option indicates if all Snowplow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/atomic/jsonschema/1-0-0"},"atomic")," properties of the event should be included in the JSON body. By default this option is disabled."),(0,o.kt)("p",null,"If enabled, an additional text field optionally allows you to specify a key under which those atomic properties will be nested. Leaving it blank adds those properties in the request body without nesting. Dot notation can also be used here."),(0,o.kt)("p",null,"As an example, this section configured as:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(11500).Z,width:"394",height:"143"})),(0,o.kt)("p",null,"will result in the following JSON structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    ...,\n    "snowplow_atomic": {\n        "app_id": "fooBar",\n        "platform": "mobile",\n        ...\n    },\n    ...\n}\n')),(0,o.kt)("p",null,"Please, note that some of the Snowplow atomic properties are already mapped to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"common event properties")," by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/"},"Snowplow Client"),"."),(0,o.kt)("h3",{id:"snowplow-self-describing-event-rules"},"Snowplow Self-Describing Event Rules"),(0,o.kt)("p",null,"This option indicates if the Snowplow Self-Describing data will be included in the request body and it is enabled by default."),(0,o.kt)("p",null,"Similarly to the above section, you can also specify a key under which the self-describing data will be nested. Leaving it blank adds those properties in the request body without nesting. Dot notation can also be used here."),(0,o.kt)("p",null,"As an example, this section configured as:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(44836).Z,width:"382",height:"147"})),(0,o.kt)("p",null,"will result in the following JSON structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    ...,\n    "self_describing_event_com_acme_test_foo_1": {\n        "mySelfDescProp": "exampleValue",\n        ...\n    },\n    ...\n}\n')),(0,o.kt)("h3",{id:"snowplow-event-context-rules"},"Snowplow Event Context Rules"),(0,o.kt)("p",null,"This section describes how the HTTP Request tag will use the context Entities attached to a Snowplow Event."),(0,o.kt)("h4",{id:"extract-entity-from-array-if-single-element"},"Extract entity from Array if single element"),(0,o.kt)("p",null,"Snowplow Entities are always in Arrays, as multiple of the same entity can be attached to an event. This option will pick the single element from the array if the array only contains a single element."),(0,o.kt)("h4",{id:"include-all-entities-in-request-body"},"Include all Entities in request body"),(0,o.kt)("p",null,"Leaving this option enabled (default) ensures that all Entities on an event will be included within the request data."),(0,o.kt)("p",null,"Optionally, you can also specify a key under which the Snowplow event's contexts will be nested. Alternatively, leaving it blank adds all entities in the request body without nesting."),(0,o.kt)("p",null,'Disabling this option, reveals the options so that individual entities can be selected for inclusion. Using the "Snowplow Entity Mapping" table, these entities can also be remapped to have different names in the JSON body of the request. The entity can be specified in two different formats:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Major version match: ",(0,o.kt)("inlineCode",{parentName:"li"},"x-sp-contexts_com_snowplowanalytics_snowplow_web_page_1")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"com_snowplowanalytics_snowplow")," is the event vendor, ",(0,o.kt)("inlineCode",{parentName:"li"},"web_page")," is the schema name and ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," is the Major version number. ",(0,o.kt)("inlineCode",{parentName:"li"},"x-sp-")," can also be omitted from this if desired"),(0,o.kt)("li",{parentName:"ul"},"Full schema match: ",(0,o.kt)("inlineCode",{parentName:"li"},"iglu:com.snowplowanalytics.snowplow/webPage/jsonschema/1-0-0"))),(0,o.kt)("h4",{id:"include-unmapped-entities-in-request-body"},"Include unmapped entities in request body"),(0,o.kt)("p",null,'This option enables you to ensure that all unmapped entities (i.e. any entites not found in the "Snowplow Entity Mapping" rules above) will be included in the request body.'),(0,o.kt)("p",null,"Again, optionally, you can also specify a key under which the Snowplow event's unmapped entities will be nested. Alternatively, leaving it blank adds the unmapped entities in the request body without nesting."),(0,o.kt)("h2",{id:"additional-event-mapping-options"},"Additional Event Mapping Options"),(0,o.kt)("p",null,"If you wish to pick other properties from the Client event and map them into the request body, this can be specified in this section."),(0,o.kt)("h3",{id:"event-property-rules"},"Event Property Rules"),(0,o.kt)("h4",{id:"include-common-event-properties"},"Include common event properties"),(0,o.kt)("p",null,"Enabled by default, this option sets whether to include the event properties from the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"Common Event definition")," in the request body. Inclusion of the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_data")," property is not affected by this setting (see next option)."),(0,o.kt)("p",null,"Also, you can optionally specify a key under which the Common Event properties will be nested. Alternatively, leaving it blank adds the the common event properties in the request body without nesting."),(0,o.kt)("h4",{id:"include-common-user-properties"},"Include common user properties"),(0,o.kt)("p",null,"Disabled by default, this option sets whether to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_data")," properties from the common event definition in the request body."),(0,o.kt)("p",null,"Again, you can optionally specify a key under which the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_data")," properties from the common event will be nested. Alternatively, leaving it blank adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_data")," in the request body without nesting."),(0,o.kt)("h4",{id:"additional-event-property-mapping-rules"},"Additional Event Property Mapping Rules"),(0,o.kt)("p",null,"Using this table, you can additionally specify the Property Key from the Client Event, and then the key you could like to map it to (or leave the mapped key blank to keep the same name). You can use Key Path notation here (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"x-sp-tp2.p")," for a Snowplow events platform or ",(0,o.kt)("inlineCode",{parentName:"p"},"x-sp-contexts_com_snowplowanalytics_snowplow_web_page_1.0.id")," for a Snowplow events page view id (note the array index 0) or pick non-Snowplow properties if using an alternative Client."),(0,o.kt)("h2",{id:"additional-request-data"},"Additional Request Data"),(0,o.kt)("p",null,'This section allows you to add custom properties in the request body that are "external" to the event, in other words it provides the ability to add custom constant or variable request data.'),(0,o.kt)("h2",{id:"request-headers"},"Request Headers"),(0,o.kt)("p",null,"Similarly to the above, this section allows you to add custom headers to the HTTP request towards your custom endpoint."),(0,o.kt)("h2",{id:"additional-options"},"Additional Options"),(0,o.kt)("p",null,"Finally, this section offers two additional configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changing the HTTP request method from POST (default) to PUT."),(0,o.kt)("li",{parentName:"ul"},"Changing the default request timeout (5000 seconds)")))}u.isMDXComponent=!0},11500:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/snowplow_atomic_nest-4975fe7246e9a491c69b3042e45b280c.png"},44836:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/snowplow_self_desc_no_nest-c7502209e3ea302074ec4427c13b5b6d.png"}}]);