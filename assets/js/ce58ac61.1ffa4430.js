"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[14502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),A=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=A(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=A(a),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var A=2;A<n;A++)i[A]=a[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),o=a(86010),n=a(52802),i=a(39960),l=a(13919),c=a(95999);const A="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:a}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",A)},a)}function m(e){let{href:t,icon:a,title:n,description:i}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:n},a," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function g(e){let{item:t}=e;const a=(0,n.Wl)(t);return a?r.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){var t;let{item:a}=e;const o=(0,l.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(m,{href:a.href,icon:o,title:a.label,description:null==i?void 0:i.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(w,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function u(e){let{items:t,className:a}=e;return r.createElement("section",{className:(0,o.Z)("row",a)},function(e){return e.filter((e=>"category"!==e.type||!!(0,n.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},31492:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294);function o(e){return"Actively Maintained"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Actively Maintained",title:"Actively Maintained badge",class:"img_ev3q"})):"Maintained"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Maintained&color=9e62dd&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Maintained",title:"Maintained badge",class:"img_ev3q"})):"Early Release"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Early%20Release&color=014477&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Early Release",title:"Early Release badge",class:"img_ev3q"})):"Unsupported"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Unsupported&color=24292e&labelColor=lightgrey&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Unsupported",title:"Unsupported badge",class:"img_ev3q"})):"Snowplow Tracker Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/v/snowplow/snowplow-tracker",alt:"Latest version"}):"React Native Tracker Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/v/@snowplow/react-native-tracker",alt:"Latest version"})):"Pypi Tracker Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/v/snowplow-tracker",alt:"Latest version"})):"Snowplow Tracker PHP Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/php-v/snowplow/snowplow-tracker",alt:"PHP Version"}):"Snowplow Tracker React Native Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/dependency-version/@snowplow/react-native-tracker/peer/react-native",alt:"React Native Version"})):"Snowplow Tracker Pypi Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/pyversions/snowplow-tracker",alt:"React Native Version"})):void 0}},80975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>A,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=a(87462),o=(a(67294),a(3905)),n=a(31492),i=a(52991),l=a(52802);const c={title:"PHP Tracker",date:"2020-02-26",sidebar_position:230},A=void 0,s={unversionedId:"migrated/collecting-data/collecting-from-own-applications/php-tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/php-tracker/index",title:"PHP Tracker",description:"The\xa0Snowplow PHP Tracker\xa0allows you to track Snowplow events from your PHP apps and scripts.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/php-tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/php-tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:230,frontMatter:{title:"PHP Tracker",date:"2020-02-26",sidebar_position:230},sidebar:"tutorialSidebar",previous:{title:"Example Rails app",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/example-rails-app/"},next:{title:"Setup",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/setup/"}},p={},d=[],m={toc:d};function g(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{badgeType:"Early Release",mdxType:"Badges"}),"\xa0",(0,o.kt)(n.Z,{badgeType:"Snowplow Tracker Release",mdxType:"Badges"}),"\xa0",(0,o.kt)(n.Z,{badgeType:"Snowplow Tracker PHP Release",mdxType:"Badges"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"The\xa0Snowplow PHP Tracker\xa0allows you to track Snowplow events from your PHP apps and scripts."),(0,o.kt)("p",null,"There are three basic types of object you will create when using the Snowplow PHP Tracker: Trackers, Subjects and Emitters."),(0,o.kt)("p",null,"A subject represents a user whose events are tracked. A tracker constructs events and sends them to one or more emitters. Each emitter then sends the event to the endpoint you configure, a Snowplow collector."),(0,o.kt)("p",null,"The current flow of the PHP Tracker is illustrated below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(70664).Z,width:"799",height:"515"})),(0,o.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0},70664:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/php-tracker-flow-0a55defa12a400416329dcf1e75a4143.png"}}]);