"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[72123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),i=r(86010),o=r(52802),a=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",u),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t;let{item:r}=e;const i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},79924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),o=r(52991),a=r(52802);const c={title:"Collecting data with Trackers and Webhooks",date:"2020-02-15",sidebar_position:70},l=void 0,s={unversionedId:"migrated/collecting-data/index",id:"migrated/collecting-data/index",title:"Collecting data with Trackers and Webhooks",description:"",source:"@site/docs/migrated/collecting-data/index.md",sourceDirName:"migrated/collecting-data",slug:"/migrated/collecting-data/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:70,frontMatter:{title:"Collecting data with Trackers and Webhooks",date:"2020-02-15",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Versioning your data structures",permalink:"/docsite-poc.github.io/docs/migrated/understanding-tracking-design/versioning-your-data-structures/"},next:{title:"Trackers - collecting data from your own applications",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/"}},d={},u=[],p={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);