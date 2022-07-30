"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},21016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Migration guide for Snowplow Android Tracker SDK from version 2.x to 3.0",date:"2021-11-23",sidebar_position:-10},a=void 0,s={unversionedId:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-android-tracker-sdk-from-version-2-x-to-3-0/index",id:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-android-tracker-sdk-from-version-2-x-to-3-0/index",title:"Migration guide for Snowplow Android Tracker SDK from version 2.x to 3.0",description:"This new release doesn't introduce breaking changes with the previous 2.x version. The version 2.0 can be considered a transitory release because two different APIs were available for the developer: v1 API (deprecated) and v2 API (the new one). The version 3.0 doesn't introduce changes to the v2 API but it completely remove the v1 API. Hence, this version introduces breking changes only for the developer that have instrumented the v2.0 using the old deprecated v1 API.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-android-tracker-sdk-from-version-2-x-to-3-0/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-android-tracker-sdk-from-version-2-x-to-3-0",slug:"/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-android-tracker-sdk-from-version-2-x-to-3-0/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-android-tracker-sdk-from-version-2-x-to-3-0/",draft:!1,tags:[],version:"current",sidebarPosition:-10,frontMatter:{title:"Migration guide for Snowplow Android Tracker SDK from version 2.x to 3.0",date:"2021-11-23",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Migration guides",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/"},next:{title:"Migration guide for Snowplow iOS Tracker SDK from version 2.x to 3.0",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/migration-guide-for-snowplow-ios-tracker-sdk-from-version-2-x-to-3-0/"}},l={},c=[],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This new release doesn't introduce breaking changes with the previous 2.x version. The version 2.0 can be considered a transitory release because two different APIs were available for the developer: v1 API (deprecated) and v2 API (the new one). The version 3.0 doesn't introduce changes to the v2 API but it completely remove the v1 API. Hence, this version introduces breking changes only for the developer that have instrumented the v2.0 using the old deprecated v1 API."),(0,o.kt)("p",null,"In this release we've marked as deprecated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PageView")," event: this event has been designed for web tracking. Its role can be replaced on mobile with two different events: ",(0,o.kt)("inlineCode",{parentName:"li"},"ScreenView")," event and ",(0,o.kt)("inlineCode",{parentName:"li"},"DeepLinkReceived")," event. The first covers the need of tracking the screen visualized to the user by the app. The latter covers the case where the shown content is referred to an external url referral and we want to track that down, exactly like the PageView does in the web tracker.")),(0,o.kt)("p",null,"In this release there are some breaking changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The v1 API has been removed from this new version of the trackers, which means the v1 components (Tracker, Emitter, Subject, Session) used to set up the tracker are no longer available. If you have already migrated your instrumentation to the v2 API there aren't breaking changes.\n"),(0,o.kt)("li",{parentName:"ul"},"The events can be built using the constructor and builder methods. The builder classes available with v1 are no longer available. If you already build events using events' constructor suggested with the v2 API, there aren't breaking changes.\n"),(0,o.kt)("li",{parentName:"ul"},"Session callbacks have been removed. They will be reintroduced soon in one of the next minor versions. More details will be provided at the release.\n"),(0,o.kt)("li",{parentName:"ul"},"Utilities or Utils methods, available in v1 API, have been removed.")))}u.isMDXComponent=!0}}]);