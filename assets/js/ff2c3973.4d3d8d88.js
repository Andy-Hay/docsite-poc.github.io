"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[91923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(v,i(i({ref:t},d),{},{components:n})):o.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Analytics SDK - Go",date:"2021-05-26",sidebar_position:300},i=void 0,l={unversionedId:"migrated/modeling-your-data/analytics-sdk/analytics-sdk-go/index",id:"migrated/modeling-your-data/analytics-sdk/analytics-sdk-go/index",title:"Analytics SDK - Go",description:"1\\. Overview",source:"@site/docs/migrated/modeling-your-data/analytics-sdk/analytics-sdk-go/index.md",sourceDirName:"migrated/modeling-your-data/analytics-sdk/analytics-sdk-go",slug:"/migrated/modeling-your-data/analytics-sdk/analytics-sdk-go/",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/analytics-sdk/analytics-sdk-go/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:300,frontMatter:{title:"Analytics SDK - Go",date:"2021-05-26",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Analytics SDK - JavaScript",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/analytics-sdk/analytics-sdk-javascript/"},next:{title:"Analytics SDK - Python",permalink:"/docsite-poc.github.io/docs/migrated/modeling-your-data/analytics-sdk/analytics-sdk-python/"}},s={},p=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Compatibility",id:"2-compatibility",level:2},{value:"3. Setup",id:"3-setup",level:2},{value:"4. Usage",id:"4-usage",level:2},{value:"4.1 Overview",id:"41-overview",level:3},{value:"4.2 Summary of example usage",id:"42-summary-of-example-usage",level:3},{value:"4.3 API",id:"43-api",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-overview"},"1","."," Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-golang-analytics-sdk"},"Snowplow Analytics SDK for Go")," lets you work with ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/canonical-event/"},"Snowplow enriched events")," in your Go event processing, data modeling and machine-learning jobs. You can use this SDK with ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),", ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/functions/"},"Google Cloud Functions"),", ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/appengine"},"Google App Engine")," and other Golang-compatible data processing frameworks."),(0,a.kt)("h2",{id:"2-compatibility"},"2","."," Compatibility"),(0,a.kt)("p",null,"Snowplow Analytics SDK fo Go was tested with Go versions 1.13-1.15."),(0,a.kt)("p",null,"There are only two external dependencies currently:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"github.com/json-iterator/go")," - used to parse JSON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"github.com/pkg/errors")," - used to provide an improvement on the standard error reporting."))),(0,a.kt)("h2",{id:"3-setup"},"3","."," Setup"),(0,a.kt)("p",null,"snowplow/snowplow-golang-analytics-sdk can be imported to a project as a go module:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go get github.com/snowplow/snowplow-golang-analytics-sdk")),(0,a.kt)("h2",{id:"4-usage"},"4","."," Usage"),(0,a.kt)("h3",{id:"41-overview"},"4.1 Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-golang-analytics-sdk"},"Snowplow Analytics SDK for Go")," provides you an API to parse an enriched event from it's TSV-string form to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ParsedEvent")," slice of strings, then a set of methods to transform the entire event or a subset of fields into either ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," form. It also offers methods to efficiently get a field from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ParsedEvent"),"."),(0,a.kt)("h3",{id:"42-summary-of-example-usage"},"4.2 Summary of example usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get github.com/snowplow/snowplow-golang-analytics-sdk\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import "github.com/snowplow/snowplow-golang-analytics-sdk/analytics"\n\n\nparsed, err := ParseEvent(event) // Where event is a valid TSV string Snowplow event.\nif err != nil {\n  fmt.Println(err)\n}\n\nparsed.ToJson() // whole event to JSON\nparsed.ToMap() // whole event to map\nparsed.GetValue("page_url") // get a value for a single canonical field\nparsed.GetSubsetMap("page_url", "domain_userid", "contexts", "derived_contexts") // Get a map of values for a set of canonical fields\nparsed.GetSubsetJson("page_url", "unstruct_event") // Get a JSON of values for a set of canonical fields\n')),(0,a.kt)("h3",{id:"43-api"},"4.3 API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func ParseEvent(event string) (ParsedEvent, error)\n")),(0,a.kt)("p",null,"ParseEvent takes a Snowplow Enriched event tsv string as input, and returns a 'ParsedEvent' typed slice of strings. Methods may then be called on the resulting ParsedEvent type to transform the event, or a subset of the event to Map or Json."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (event ParsedEvent) ToJson() ([]byte, error)\n")),(0,a.kt)("p",null,"ToJson transforms a valid Snowplow ParsedEvent to a JSON object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (event ParsedEvent) ToMap() (map[string]interface{}, error)\n")),(0,a.kt)("p",null,"ToMap transforms a valid Snowplow ParsedEvent to a Go map."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (event ParsedEvent) GetSubsetJson(fields ...string) ([]byte, error)\n")),(0,a.kt)("p",null,"GetSubsetJson returns a JSON object containing a subset of the event, containing only the atomic fields provided, without processing the rest of the event."),(0,a.kt)("p",null,'For custom events and contexts, only "unstruct',"_",'event", "contexts", or "derived',"_",'contexts" may be provided, which will produce the entire data object for that field.'),(0,a.kt)("p",null,"For contexts, the resultant map will contain all occurrences of all contexts within the provided field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (event ParsedEvent) GetSubsetMap(fields ...string) (map[string]interface{}, error)\n")),(0,a.kt)("p",null,"GetSubsetMap returns a map of a subset of the event, containing only the atomic fields provided, without processing the rest of the event."),(0,a.kt)("p",null,'For custom events and entites, only "unstruct',"_",'event", "contexts", or "derived',"_",'contexts" may be provided, which will produce the entire data object for that field.'),(0,a.kt)("p",null,"For contexts, the resultant map will contain all occurrences of all contexts within the provided field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (event ParsedEvent) GetValue(field string) (interface{}, error)\n")),(0,a.kt)("p",null,"GetValue returns the value for a provided atomic field, without processing the rest of the event. For unstruct","_","event, it returns a map of only the data for the unstruct event. For contexts and derived","_","contexts, it returns the data for all contexts or derived","_","contexts in the event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (event ParsedEvent) ToJsonWithGeo() ([]byte, error)\n")),(0,a.kt)("p",null,"ToJsonWithGeo adds the geo","_","location field, and transforms a valid Snowplow ParsedEvent to a JSON object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (event ParsedEvent) ToMapWithGeo() (map[string]interface{}, error)\n")),(0,a.kt)("p",null,"ToMapWithGeo adds the geo","_","location field, and transforms a valid Snowplow ParsedEvent to a Go map."))}c.isMDXComponent=!0}}]);