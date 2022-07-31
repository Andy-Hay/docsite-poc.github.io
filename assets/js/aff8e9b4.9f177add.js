"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[46440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),i=n(86010),o=n(52802),a=n(39960),c=n(13919),s=n(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function m(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:a},a))}function g(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:n}=e;const i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},36815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),o=n(52991),a=n(52802);const c={title:"Designing tracking",date:"2020-02-15",sidebar_position:60},s=void 0,l={unversionedId:"migrated/understanding-tracking-design/index",id:"migrated/understanding-tracking-design/index",title:"Designing tracking",description:"",source:"@site/docs/migrated/understanding-tracking-design/index.md",sourceDirName:"migrated/understanding-tracking-design",slug:"/migrated/understanding-tracking-design/",permalink:"/docsite-poc.github.io/docs/migrated/understanding-tracking-design/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659258049,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:60,frontMatter:{title:"Designing tracking",date:"2020-02-15",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Glossary of Terms",permalink:"/docsite-poc.github.io/docs/migrated/understanding-your-pipeline/glossary-of-terms/"},next:{title:"Introduction to tracking design",permalink:"/docsite-poc.github.io/docs/migrated/understanding-tracking-design/introduction-to-tracking-design/"}},d={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);