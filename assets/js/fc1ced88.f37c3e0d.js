"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[51973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),A=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=A(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=A(a),m=n,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var A=2;A<o;A++)i[A]=a[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(67294),n=a(86010),o=a(52802),i=a(39960),l=a(13919),c=a(95999);const A="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:a}=e;return r.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",A)},a)}function m(e){let{href:t,icon:a,title:o,description:i}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",s),title:o},a," ",o),i&&r.createElement("p",{className:(0,n.Z)("text--truncate",p),title:i},i))}function g(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?r.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){var t;let{item:a}=e;const n=(0,l.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(m,{href:a.href,icon:n,title:a.label,description:null==i?void 0:i.description})}function u(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(w,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){let{items:t,className:a}=e;return r.createElement("section",{className:(0,n.Z)("row",a)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(u,{item:e})))))}},31492:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(e){return"Actively Maintained"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Actively Maintained",title:"Actively Maintained badge",class:"img_ev3q"})):"Maintained"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Maintained&color=9e62dd&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Maintained",title:"Maintained badge",class:"img_ev3q"})):"Early Release"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Early%20Release&color=014477&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Early Release",title:"Early Release badge",class:"img_ev3q"})):"Unsupported"===e.badgeType?r.createElement("a",{href:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Unsupported&color=24292e&labelColor=lightgrey&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Unsupported",title:"Unsupported badge",class:"img_ev3q"})):"Snowplow Tracker Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/v/snowplow/snowplow-tracker",alt:"Latest version"}):"React Native Tracker Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/v/@snowplow/react-native-tracker",alt:"Latest version"})):"Pypi Tracker Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/v/snowplow-tracker",alt:"Latest version"})):"Snowplow Tracker PHP Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/php-v/snowplow/snowplow-tracker",alt:"PHP Version"}):"Snowplow Tracker React Native Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/dependency-version/@snowplow/react-native-tracker/peer/react-native",alt:"React Native Version"})):"Snowplow Tracker Pypi Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/pyversions/snowplow-tracker",alt:"React Native Version"})):void 0}},17081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>A,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(31492),i=a(52991),l=a(52802);const c={title:"Flutter Tracker",date:"2022-01-31",sidebar_position:130},A=void 0,s={unversionedId:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker/index",title:"Flutter Tracker",description:"The Snowplow Flutter Tracker allows you to add analytics to your Flutter apps for Web, Android, and iOS when using a Snowplow pipeline.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/flutter-tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659276909,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:130,frontMatter:{title:"Flutter Tracker",date:"2022-01-31",sidebar_position:130},sidebar:"tutorialSidebar",previous:{title:"Migrating from v0 to v1",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/"},next:{title:"Getting started",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/flutter-tracker/getting-started/"}},p={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{badgeType:"Early Release",mdxType:"Badges"}),(0,n.kt)("p",null,"The Snowplow Flutter Tracker allows you to add analytics to your Flutter apps for Web, Android, and iOS when using a Snowplow pipeline."),(0,n.kt)("p",null,"The tracker is published on pub.dev as\xa0",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/packages/snowplow_tracker"},"snowplow","_","tracker"),".",(0,n.kt)("a",{parentName:"p",href:"#articles"})),(0,n.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);