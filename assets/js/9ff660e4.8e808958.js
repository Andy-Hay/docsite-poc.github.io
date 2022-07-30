"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[71423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),g=n,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Ruby Tracker",date:"2020-02-26",sidebar_position:220},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/ruby-tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/ruby-tracker/index",title:"Ruby Tracker",description:"The Snowplow Ruby Tracker allows you to track Snowplow events in your Ruby applications and gems and Ruby on Rails web applications.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/ruby-tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/",draft:!1,tags:[],version:"current",sidebarPosition:220,frontMatter:{title:"Ruby Tracker",date:"2020-02-26",sidebar_position:220},sidebar:"tutorialSidebar",previous:{title:"Subject methods",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/subject-methods/"},next:{title:"Getting started",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Snowplow Ruby Tracker allows you to track Snowplow events in your Ruby applications and gems and Ruby on Rails web applications."),(0,n.kt)("p",null,"The Ruby tracker is compatible with Ruby 2.1+, including Ruby 3.0+."),(0,n.kt)("p",null,"These pages will help you in setting up and using the Ruby tracker. There are more technical details in the ",(0,n.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-ruby-tracker/SnowplowTracker.html"},"API docs.")),(0,n.kt)("p",null,"As a server-side tracker, the Ruby tracker pairs very well with the JavaScript client-side tracker, if you are tracking events in a website. We've created a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"simple demo Rails app"),", which incorporates both trackers, and also uses the Singleton pattern that we suggest for the Ruby tracker."),(0,n.kt)("p",null,"At its simplest, the Ruby tracker is used by calling a Tracker object's ",(0,n.kt)("inlineCode",{parentName:"p"},"track_x_event")," method, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"track_page_view"),", which will send the event payload created to the Snowplow event collector."),(0,n.kt)("p",null,"There are three main classes which the Ruby Tracker uses: trackers, emitters, and subjects. These are introduced in more detail on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/"},"next page"),". There are also further classes which allow you to add extra data to your events, discussed on the page '",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/adding-data-events/"},"Adding data to your events: context and more"),"'."))}u.isMDXComponent=!0}}]);