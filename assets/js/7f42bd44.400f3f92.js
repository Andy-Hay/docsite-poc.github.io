"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[10478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Getting started",date:"2021-10-15",sidebar_position:0},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/index",id:"migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/index",title:"Getting started",description:"Installation",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started",slug:"/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Getting started",date:"2021-10-15",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Ruby Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/"},next:{title:"Tracking events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events/"}},s={},l=[{value:"Installation",id:"installation",level:2},{value:"Introduction to the tracker code",id:"introduction-to-the-tracker-code",level:2},{value:"Tracking design and initialization",id:"tracking-design-and-initialization",level:2},{value:"Testing your tracking",id:"testing-your-tracking",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The Snowplow Ruby Tracker is compatible with Ruby 2.1+, including 3.0+. To install it locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ gem install snowplow-tracker\n")),(0,a.kt)("p",null,"To add the Snowplow Tracker to your Ruby app or gem, add this line to your Gemfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gem 'snowplow-tracker', '~> 0.8.0'\n")),(0,a.kt)("p",null,"To make the Snowplow Ruby Tracker work with as many different Ruby programs as possible, we have tried to keep external dependencies to a minimum. There are only two external dependencies currently, both of which are for development of the gem itself: ",(0,a.kt)("a",{parentName:"p",href:"https://rspec.info/"},"rspec")," and ",(0,a.kt)("a",{parentName:"p",href:"https://rubygems.org/gems/webmock"},"webmock"),"."),(0,a.kt)("h2",{id:"introduction-to-the-tracker-code"},"Introduction to the tracker code"),(0,a.kt)("p",null,"Find the Ruby tracker code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-ruby-tracker"},"here"),", and the API documentation ",(0,a.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-ruby-tracker/index.html"},"here"),"."),(0,a.kt)("p",null,"The main class of the Ruby tracker is the Tracker class. Trackers provide methods for tracking events, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"track_page_view"),". The Tracker creates an appropriate event payload out of the provided event properties. This payload is passed to one or more Emitters for sending to the event collector."),(0,a.kt)("p",null,"Data about users, and which platform (e.g. server-side app or mobile) the event occurred on, are managed by Subject objects. A Subject can be added to each event, and Trackers always have an associated Subject. Other information can be added to events using Page, DeviceTimestamp or TrueTimestamp objects, as well as via event context. Event context is added via SelfDescribingJson objects."),(0,a.kt)("p",null,"Note that the Ruby tracker version 0.7.0 had some breaking changes, specifically the addition of keyword arguments. If you are using version <0.7.0, look out for the dropdowns under code examples on these pages for the old API. Check out the tracker changelog ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-ruby-tracker/blob/master/CHANGELOG"},"here"),"."),(0,a.kt)("h2",{id:"tracking-design-and-initialization"},"Tracking design and initialization"),(0,a.kt)("p",null,"Designing how and what to track in your app is an important decision. Check out our docs about tracking design ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/introduction-to-tracking-design/"},"here"),"."),(0,a.kt)("p",null,"We suggest implementing the Ruby tracker as a Singleton global object. This pattern is demonstrated in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"Ruby on Rails example app"),". Structuring your code in this way avoids wasting bandwidth or processing on reinitializing Trackers and Emitters for every page load or event sent."),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"Rails demo")," has both the Ruby and JavaScript trackers implemented. This combination of client- and server-side tracking can be highly effective and powerful. For example, you can discover how much effect adblockers are having on your tracking, by comparing the amount of client-side and server-side page view events you collect. It also allows you to track events in the most appropriate way for the event type. Check out this ",(0,a.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2021/11/09/the-unrivaled-power-of-joining-client-and-server-side-tracking/"},"blog post")," for more discussion about tracking client- and server-side."),(0,a.kt)("p",null,'The Tracker must be initialized with an Emitter or the subclass AsyncEmitter (or an array of Emitters/AsyncEmitters). The only required argument for an Emitter/AsyncEmitter is the endpoint, i.e. the address of the event collector. See "',(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent/"},"Configuring how events are sent"),'" for more information about configuring Emitters.'),(0,a.kt)("p",null,"Initializing a tracker instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"require 'snowplow-tracker'\n\nemitter = SnowplowTracker::Emitter.new(endpoint: 'collector.example.com')\ntracker = SnowplowTracker::Tracker.new(emitters: emitter)\n# or\ntracker = SnowplowTracker::Tracker.new(emitters: [emitter])\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"require 'snowplow-tracker'\n\nemitter = SnowplowTracker::Emitter.new('collector.example.com')\ntracker = SnowplowTracker::Tracker.new(emitter)\n# or\ntracker = SnowplowTracker::Tracker.new([emitter])\n")),(0,a.kt)("p",null,"This Tracker will send events via GET to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://collector.example.com/i"),"."),(0,a.kt)("p",null,"At initialization, two Tracker parameters can be set which will be added to all events. The first is the Tracker ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),". This is especially useful to distinguish between events from different Trackers, if more than one is being used. The second user-set Tracker property is the ",(0,a.kt)("inlineCode",{parentName:"p"},"app_id"),". This is the unique identifier for the site or application, and is particularly useful for distinguishing between events when Snowplow tracking has been implemented in multiple apps."),(0,a.kt)("p",null,"A Tracker is always associated with a Subject. It will be generated automatically if one is not provided during initialization. It can be swapped out later for another Subject using ",(0,a.kt)("inlineCode",{parentName:"p"},"set_subject"),"."),(0,a.kt)("p",null,"The final initialization parameter is a setting for the base64-encoding of any JSONs in the event payload. The default is for JSONs to be encoded. Once the Tracker has been instantiated, it is not possible to change this setting."),(0,a.kt)("p",null,"Initializing a tracker instance with all possible settings used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"require 'snowplow-tracker'\n\nSnowplowTracker::Tracker.new(emitters: SnowplowTracker::Emitter.new(endpoint: 'collector.example.com'),\n                             subject: SnowplowTracker::Subject.new,\n                             namespace: 'tracker_no_encode',\n                             app_id: 'rails_main',\n                             encode_base64: false)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this-1"},"Using Ruby tracker <0.7.0? Expand this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"require 'snowplow-tracker'\n\nSnowplowTracker::Tracker.new(SnowplowTracker::Emitter.new('collector.example.com'),\n                             SnowplowTracker::Subject.new,\n                             'tracker_no_encode',\n                             'rails_main',\n                             false)\n")),(0,a.kt)("p",null,"You can create as many Tracker instances as you like within your app; each one is completely sandboxed. For example, you may wish to send certain events to a different collector endpoint (using a different Emitter), or with a different JSON base64-encoding choice. Make sure you set different Tracker namespaces when using multiple instances."),(0,a.kt)("h2",{id:"testing-your-tracking"},"Testing your tracking"),(0,a.kt)("p",null,"Testing that your event tracking is properly configured can be as important as testing the other aspects of your app. It confirms that you are generating the events you expect."),(0,a.kt)("p",null,"We provide two types of pipeline for testing and debugging. ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-mini/"},"Snowplow Mini")," is especially useful in manual schema and pipeline testing. ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/"},"Snowplow Micro")," is a minimal pipeline designed to be used as part of your app's automated test suite."),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"Ruby tracker Rails demo")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-micro-examples"},"Snowplow Micro examples repo")," for two examples of automated webapp testing using Snowplow Micro and the testing framework ",(0,a.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress"),". Any end-to-end testing framework can be used."))}d.isMDXComponent=!0}}]);