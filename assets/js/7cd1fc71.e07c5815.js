"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[859],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):A(A({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||o;return a?n.createElement(m,A(A({ref:t},s),{},{components:a})):n.createElement(m,A({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,A=new Array(o);A[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,A[1]=l;for(var p=2;p<o;p++)A[p]=a[p];return n.createElement.apply(null,A)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3908:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=a(7294),o=a(3905);function A(e){return"Actively Maintained"===e.badgeType?r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Actively Maintained",title:"Actively Maintained badge",class:"img_ev3q"}):"Early Release"===e.badgeType?r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Early%20Release&color=014477&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Early Release",title:"Early Release badge",class:"img_ev3q"}):"Snowplow Tracker Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/v/snowplow/snowplow-tracker",alt:"Latest version"}):"Snowplow Tracker PHP Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/php-v/snowplow/snowplow-tracker",alt:"PHP Version"}):void 0}const l={},i="Page with Badges on it",p={type:"mdx",permalink:"/docsite-poc.github.io/page-with-badges",source:"@site/src/pages/page-with-badges.mdx",title:"Page with Badges on it",description:"Uses common template and passes a badgeType to determine which badge to display.",frontMatter:{}},s=[],c={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"page-with-badges-on-it"},"Page with Badges on it"),(0,o.kt)("p",null,"Uses common template and passes a ",(0,o.kt)("inlineCode",{parentName:"p"},"badgeType")," to determine which badge to display.\nNot sure how many badges there are, so the Badges component may grow in size.\nIf component breaks then its normally because its being called with a value it\ndoesn't recognise.  Needs to be more resilient."),(0,o.kt)(A,{badgeType:"Actively Maintained",mdxType:"Badges"}),(0,o.kt)("br",null),(0,o.kt)(A,{badgeType:"Early Release",mdxType:"Badges"}),(0,o.kt)("br",null),(0,o.kt)(A,{badgeType:"Early Release",mdxType:"Badges"}),"\xa0",(0,o.kt)(A,{badgeType:"Snowplow Tracker Release",mdxType:"Badges"}),"\xa0",(0,o.kt)(A,{badgeType:"Snowplow Tracker PHP Release",mdxType:"Badges"}),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);