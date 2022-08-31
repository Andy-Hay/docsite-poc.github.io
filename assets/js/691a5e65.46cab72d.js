"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[58942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var s=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,l=function(e,t){if(null==e)return{};var n,s,l={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=s.createContext({}),u=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return s.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=u(n),k=l,p=c["".concat(o,".").concat(k)]||c[k]||d[k]||r;return n?s.createElement(p,i(i({ref:t},m),{},{components:n})):s.createElement(p,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=n(87462),l=(n(67294),n(3905));const r={title:"Managing user permissions in Console",date:"2022-03-17",sidebar_position:30},i=void 0,a={unversionedId:"migrated/using-the-snowplow-console/managing-user-permissions-in-console/index",id:"migrated/using-the-snowplow-console/managing-user-permissions-in-console/index",title:"Managing user permissions in Console",description:"To set a users permissions, navigate to Manage users and then to the user who's account you'd like to manage.",source:"@site/docs/migrated/using-the-snowplow-console/managing-user-permissions-in-console/index.md",sourceDirName:"migrated/using-the-snowplow-console/managing-user-permissions-in-console",slug:"/migrated/using-the-snowplow-console/managing-user-permissions-in-console/",permalink:"/docsite-poc.github.io/docs/migrated/using-the-snowplow-console/managing-user-permissions-in-console/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Managing user permissions in Console",date:"2022-03-17",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Managing Console API authentication",permalink:"/docsite-poc.github.io/docs/migrated/using-the-snowplow-console/managing-console-api-authentication/"},next:{title:"Managing users",permalink:"/docsite-poc.github.io/docs/migrated/using-the-snowplow-console/managing-users/"}},o={},u=[{value:"What permissions can be set?",id:"what-permissions-can-be-set",level:2},{value:"How are permissions set?",id:"how-are-permissions-set",level:2},{value:"User permission set",id:"user-permission-set",level:4},{value:"Admin permission set",id:"admin-permission-set",level:4},{value:"Custom permission set",id:"custom-permission-set",level:4},{value:"What does each permission mean?",id:"what-does-each-permission-mean",level:2},{value:"Environments",id:"environments",level:3},{value:"Data structures",id:"data-structures",level:3},{value:"Data models",id:"data-models",level:3},{value:"API keys",id:"api-keys",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To set a users permissions, navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"Manage users")," and then to the user who's account you'd like to manage."),(0,l.kt)("h2",{id:"what-permissions-can-be-set"},"What permissions can be set?"),(0,l.kt)("p",null,"Snowplow console sets permissions for each area of console as summarized below:"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Console feature")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Description")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Possible permissions"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"User management"),(0,l.kt)("td",null,"The management and addition of user access. This permission cannot be configured on a Custom role."),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"No access"),(0,l.kt)("li",null,"Edit"),(0,l.kt)("li",null,"Create")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Environments"),(0,l.kt)("td",null,"The management of pipeline and sandbox (Mini) environments. This includes managing which Enrichments run on each environment."),(0,l.kt)("td",null,(0,l.kt)("div",null),(0,l.kt)("ul",null,(0,l.kt)("li",null,"No access"),(0,l.kt)("li",null,"View"),(0,l.kt)("li",null,"Edit")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data structures"),(0,l.kt)("td",null,"The management and creation of the schemas that define the events and entities you are capturing."),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"No access"),(0,l.kt)("li",null,"View"),(0,l.kt)("li",null,"Edit on development"),(0,l.kt)("li",null,"Edit on production"),(0,l.kt)("li",null,"Create")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data models"),(0,l.kt)("td",null,"The management and creation of your data models."),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"No access"),(0,l.kt)("li",null,"View"),(0,l.kt)("li",null,"Edit"),(0,l.kt)("li",null,"Create")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"API keys"),(0,l.kt)("td",null,"The management and creation of API keys."),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"View"),(0,l.kt)("li",null,"Manage"),(0,l.kt)("li",null,"Create")))))),(0,l.kt)("h2",{id:"how-are-permissions-set"},"How are permissions set?"),(0,l.kt)("p",null,"To set permissions for a user, navigate to ",(0,l.kt)("em",{parentName:"p"},"Manage Users")," and select the user, within the management screen for their user you will be able to set their permissions."),(0,l.kt)("p",null,"There are three ways of setting user permissions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Admin (pre-defined role)"),(0,l.kt)("li",{parentName:"ul"},"User (pre-defined role)"),(0,l.kt)("li",{parentName:"ul"},"Custom (custom permissions role) - ",(0,l.kt)("strong",{parentName:"li"},"custom roles are only available on our Summit tier"))),(0,l.kt)("h4",{id:"user-permission-set"},"User permission set"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Console feature")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Permissions"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"User management"),(0,l.kt)("td",null,"No access (in the UI)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Environments"),(0,l.kt)("td",null,"View access")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data structures"),(0,l.kt)("td",null,"Edit on developmentCreate")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data models"),(0,l.kt)("td",null,"View access")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"API keys"),(0,l.kt)("td",null,"View access")))),(0,l.kt)("h4",{id:"admin-permission-set"},"Admin permission set"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Console feature")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Permissions"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"User management"),(0,l.kt)("td",null,"Full access")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Environments"),(0,l.kt)("td",null,"Full access")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data structures"),(0,l.kt)("td",null,"Full access")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data models"),(0,l.kt)("td",null,"Full access")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"API keys"),(0,l.kt)("td",null,"Full access")))),(0,l.kt)("h4",{id:"custom-permission-set"},"Custom permission set"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Console feature")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Permissions"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"User management"),(0,l.kt)("td",null,(0,l.kt)("em",null,"Customized by you, per user"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Environments"),(0,l.kt)("td",null,(0,l.kt)("em",null,"Customized by you, per user"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data structures"),(0,l.kt)("td",null,(0,l.kt)("em",null,"Customized by you, per user"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Data models & jobs"),(0,l.kt)("td",null,(0,l.kt)("em",null,"Customized by you, per user"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"API keys"),(0,l.kt)("td",null,(0,l.kt)("em",null,"Customized by you, per user"))))),(0,l.kt)("p",null,"A note on API keys and permissions"),(0,l.kt)("p",null,"Please note:"),(0,l.kt)("p",null,"1) Any API keys you create have full admin permissions"),(0,l.kt)("p",null,"2) Any existing Iglu API keys allow permissions to be side-stepped by connecting directly to Iglu servers"),(0,l.kt)("p",null,"Our recommendation is to remove all existing API keys and Iglu keys, and set the API keys permission respectively so that only trusted users can create new keys."),(0,l.kt)("h2",{id:"what-does-each-permission-mean"},"What does each permission mean?"),(0,l.kt)("h3",{id:"environments"},"Environments"),(0,l.kt)("p",null,"An environment is the collective name for your Production pipelines, QA pipelines and sandboxes."),(0,l.kt)("p",null,"An environment has three permissions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"No access")," ","-"," the user will not see the environment management screens."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"View")," - the user can see the environment management screen, but cannot edit anything. This is the default setting for the User role."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Edit / Publish")," - the user can make and publish edits to the environment. This includes configuration such as enrichment enablement, enrichment configuration and collector configuration. This is the default setting for the Admin role.")),(0,l.kt)("h3",{id:"data-structures"},"Data structures"),(0,l.kt)("p",null,"Data structures have five permissions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"No access")," ","-"," the user will not see the data structure management screen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"View")," - the user can see the data structure management screen, but cannot edit anything."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Edit on development")," ","-"," the user can see the data structure management screen, and can make edits to data structures but only publish them to the development registry. This is the default setting for the User role."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Edit on production")," ","-"," the user can see the data structure management screen, and can make edits to data structures, and can publish changes to the production registry. This is the default setting for the Admin role."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Create")," ","-"," the user can create new data structures. Both the User and Admin roles have this permission.")),(0,l.kt)("h3",{id:"data-models"},"Data models"),(0,l.kt)("p",null,"Data models and jobs have four permissions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"No access")," ","-"," the user will not see the data model management screens"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"View")," - the user can see the data model management screens, but cannot edit anything. This is the default setting for the User role."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Edit")," ","-"," the user can see the data model management and can make edits to data models in production. This is the default setting for the Admin role."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Create")," ","-"," the user can create new data models. The Admin role has this permission.")),(0,l.kt)("h3",{id:"api-keys"},"API keys"),(0,l.kt)("p",null,"API keys have three permissions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"View")," - the user can see the API key descriptions but cannot see the keys themselves or manage them"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Manage")," ","-"," the user can see and manage the API keys. This is the default setting for the Admin role."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Create")," ","-"," the user can generate new API keys. The Admin role has this permission.")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"You shouldn\u2019t be required to logout for new permissions to take effect, but if you do find permissions aren\u2019t applying as requested logging out and back in should force the new permissions to apply."))}d.isMDXComponent=!0}}]);