"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[24819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Migrating from v2 to v3",date:"2021-03-24",sidebar_position:1200},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/index",title:"Migrating from v2 to v3",description:"A number of features which have been deprecated for a number of v2.x releases have been removed in v3 and a new API for track methods has been introduced which is a major breaking change.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:1200,frontMatter:{title:"Migrating from v2 to v3",date:"2021-03-24",sidebar_position:1200},sidebar:"tutorialSidebar",previous:{title:"Getting the most out of performance timing",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing/"},next:{title:"Self hosting the JavaScript Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/"}},s={},p=[{value:"New CDN Locations",id:"new-cdn-locations",level:2},{value:"New tracking API (BREAKING CHANGE)",id:"new-tracking-api-breaking-change",level:2},{value:"Renamed Properties (BREAKING CHANGE)",id:"renamed-properties-breaking-change",level:2},{value:"Removed Tracking",id:"removed-tracking",level:2},{value:"Removed Configuration Options",id:"removed-configuration-options",level:2},{value:"Removed Functions",id:"removed-functions",level:2},{value:"Whats New?",id:"whats-new",level:2},{value:"Plugins",id:"plugins",level:4},{value:"sp.lite.js",id:"splitejs",level:4},{value:"Build your own sp.js",id:"build-your-own-spjs",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A number of features which have been deprecated for a number of v2.x releases have been removed in v3 and a new API for ",(0,i.kt)("inlineCode",{parentName:"p"},"track")," methods has been introduced which is a major breaking change."),(0,i.kt)("h2",{id:"new-cdn-locations"},"New CDN Locations"),(0,i.kt)("p",null,"The JavaScript Tracker is now available in new locations on third party CDN providers. CDN providers are useful for getting tracking up and running quickly, particularly when testing a new release. We still strongly recommend renaming ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js")," and hosting the file yourself but if you'd like to access the tracker from a CDN, then is available on ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/@snowplow/javascript-tracker?path=dist"},"jsDelivr")," and ",(0,i.kt)("a",{parentName:"p",href:"https://unpkg.com/browse/@snowplow/javascript-tracker@latest/dist/"},"unpkg")," (and cdnjs soon)."),(0,i.kt)("h2",{id:"new-tracking-api-breaking-change"},"New tracking API (BREAKING CHANGE)"),(0,i.kt)("p",null,"The track methods now accept an Object which contains the event data, instead of the parameter list in v2. As an example, here is what a Page View event used to look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"window.snowplow('trackPageView', 'My Title', [ // Set page title; add page context\n  {\n    schema: \"iglu:org.schema/WebPage/jsonschema/1-0-0\",\n    data: {\n      keywords: ['tester']\n    }\n  }\n]);\n")),(0,i.kt)("p",null,"Starting in v3, this looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"window.snowplow('trackPageView', {\n  title: 'My Title',\n  context: [\n    {\n      schema: 'iglu:org.schema/WebPage/jsonschema/1-0-0',\n      data: {\n        keywords: ['tester'],\n      },\n    },\n  ],\n});\n")),(0,i.kt)("p",null,"This improves the readability of the tracking code, removing the need for comments that are often used to describe what each property represents. It also allows the tracking functions to be easily extended in the future."),(0,i.kt)("p",null,"All functions that previously accepted multiple arguments now accept an Object instead. Functions which have a single parameter, such as the setters, have remained as they are as they will never have multiple parameters. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"window.snowplow('setUserId', 'alex-d-123');\n")),(0,i.kt)("p",null,"You can find the complete list of all the functions and the new named arguments in the full v3 documentation (available soon)."),(0,i.kt)("h2",{id:"renamed-properties-breaking-change"},"Renamed Properties (BREAKING CHANGE)"),(0,i.kt)("p",null,"All references to ",(0,i.kt)("inlineCode",{parentName:"p"},"whitelist")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"blacklist")," have been removed in Link Click tracking and Form tracking. They have been replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"allowlist")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"denylist"),"."),(0,i.kt)("p",null,"For example, in v2 you would specify:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"window.snowplow('enableLinkClickTracking', \n  { blacklist: ['exclude'] },\n  true,\n  true,\n});\n")),(0,i.kt)("p",null,"In v3 this is now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"window.snowplow('enableLinkClickTracking', {\n  options: { denylist: ['exclude'] },\n  pseudoClicks: true,\n  trackContent: true,\n});\n")),(0,i.kt)("h2",{id:"removed-tracking"},"Removed Tracking"),(0,i.kt)("p",null,'Three sets of properties will no longer be collected in the default configuration. Although in the case of two of them, they can still be loaded as additional plugins (See "Whats New?").'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Parrable")," opt-out cookie tracking is no longer available. This specific Parrable cookie is no longer part of Parrable."),(0,i.kt)("p",null,"Tracking Browser features, from the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigator.mimeTypes")," is no longer included as this is a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes"},"deprecated API"),". If you still wish to track this, you can load this as a plugin."),(0,i.kt)("p",null,"Optimizely Classic tracking is no longer included by default. Optimizely now defaults all installations and has migrated the majority of installations to Optimizely X, which is still included by default. Optimizely Classic tracking can be loaded as a plugin."),(0,i.kt)("h2",{id:"removed-configuration-options"},"Removed Configuration Options"),(0,i.kt)("p",null,"This isn't a breaking change as the tracker will ignore unrecognised properties during initialisation but you may want to take this opportunity to remove them. The properties below were all part of the configuration Object passed to a ",(0,i.kt)("inlineCode",{parentName:"p"},"newTracker")," call."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pageUnloadTimer")," has been removed. The tracker no longer attempts to block when unloading the page. Instead it will send events on ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityChange")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"hidden")," and make one final attempt to flush any unsent events in ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeUnload"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"forceSecureTracker")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"forceUnsecureTracker")," have been removed. You can now force the protocol of the collector endpoint when initialising the tracker, or leave it off and the tracker will use the same as the current site. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"window.snowplow('newTracker', 'sp', 'collector.mywebsite.com', {})")," will use the same protocol whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"window.snowplow('newTracker', 'sp', 'https://collector.mywebsite.com', {})")," will force the events to be sent over HTTPS."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useLocalStorage")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useCookies")," have been removed in favour of ",(0,i.kt)("inlineCode",{parentName:"p"},"stateStorageStrategy")," which can be one of four values: ",(0,i.kt)("inlineCode",{parentName:"p"},"'cookieAndLocalStorage'")," (default), ",(0,i.kt)("inlineCode",{parentName:"p"},"'cookie'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'localStorage'")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"'none'"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"contexts.parrable")," is no longer available. The Parrable feature this tracked is no longer part of Parrable."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"post")," has been removed. Set ",(0,i.kt)("inlineCode",{parentName:"p"},"eventMethod")," instead, the available options are: ",(0,i.kt)("inlineCode",{parentName:"p"},"'post'")," (default), ",(0,i.kt)("inlineCode",{parentName:"p"},"beacon")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"skippedBrowserFeatures")," is removed as ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js")," will no longer collect ",(0,i.kt)("inlineCode",{parentName:"p"},"mimeTypes")," browser features without the use of an additional Plugin (See Plugins for more information)."),(0,i.kt)("h2",{id:"removed-functions"},"Removed Functions"),(0,i.kt)("p",null,"Some deprecated functions have also been removed. This shouldn't cause any errors if you do call them, although you will see warnings in your developer tools console."),(0,i.kt)("p",null,"The following have been removed:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"trackUnstructEvent")," has been removed in favour of ",(0,i.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent"),". They behave in exactly the same way, ",(0,i.kt)("inlineCode",{parentName:"p"},"trackUnstructEvent")," was an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"window._snaq")," has been removed. All calls to the tracker should be made via ",(0,i.kt)("inlineCode",{parentName:"p"},"window.snowplow")," now (or your own global if you have configured the Tag parameters)."),(0,i.kt)("p",null,"Legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"window.Snowplow")," (note the capital S) and the containing functions (",(0,i.kt)("inlineCode",{parentName:"p"},"getTrackerCf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getTrackerUrl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getAsyncTracker"),") have been removed."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setCountPreRendered")," and the prerendered visibility checks, as this is ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState#browser_compatibility"},"a deprecated API"),"."),(0,i.kt)("p",null,"User Fingerprinting was removed in v2.13 but now the remaining method stubs ",(0,i.kt)("inlineCode",{parentName:"p"},"enableUserFingerprint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserFingerprint")," have been completely removed."),(0,i.kt)("p",null,"The following functions are removed and should be set during Tracker initialisatoin:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"setAppId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setCookieNamePrefix"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setCookieDomain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setSessionCookieTimeout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setUserFingerprintSeed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"respectDoNotTrack"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setPlatform"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"encodeBase64")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setCollectorCf"),"."),(0,i.kt)("h2",{id:"whats-new"},"Whats New?"),(0,i.kt)("p",null,"There are also a number of new features which you might want to now start to take advantage of. Additionally the full ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js")," in 3.0.0 is smaller than 2.17.3 and ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.lite.js")," is even smaller! Read on..."),(0,i.kt)("h4",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"You can now load Plugins which extend the JavaScript Tracker with new Contexts and new API functions. As an example, you might want to continue tracking the ",(0,i.kt)("inlineCode",{parentName:"p"},"mimeTypes")," which have been dropped by default in v3. To do that you would write the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"window.snowplow('newTracker', 'sp', {});\nwindow.snowplow('addPlugin', 'https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-browser-features@3.0.0/dist/index.umd.min.js', ['snowplowBrowserFeatures', 'BrowserFeaturesPlugin']);\nwindow.snowplow('trackPageView');\n")),(0,i.kt)("p",null,"This will queue all track events until the plugin is loaded, or 5000 milliseconds, whichever is sooner. Just we recommend with ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js")," we suggest you rename and host the plugin JavaScript files yourself."),(0,i.kt)("h4",{id:"splitejs"},"sp.lite.js"),(0,i.kt)("p",null,"We also now publish a much smaller version of the JavaScript Tracker, called ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.lite.js"),". You can find it on the CDNs and in the GitHub Releases just like the regular ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js"),". This has a limited featureset but is roughly half the size of ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js"),"."),(0,i.kt)("p",null,"Included in ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.lite.js")," is: Page View, Self Describing and Structured Event tracking as well as Activity Tracking and Anonymous Tracking. All other features can be loaded as separate plugins. So if you wanted sp.lite.js with Form tracking, you could do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<script type=\"text/javascript\" async=1> \n;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[]; p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments) };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1; n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,\"script\",\"https://cdn.jsdelivr.net/npm/@snowplow/javascript-tracker@3.0.0-beta.4/dist/sp.lite.js\",\"snowplow\")); \n\nwindow.snowplow('newTracker', 'sp', {});\nwindow.snowplow('addPlugin', 'https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-form-tracking@3.0.0/dist/index.umd.min.js', ['snowplowFormTracking', 'FormTrackingPlugin']);\nwindow.snowplow('enableFormTracking');\n<\/script>\n")),(0,i.kt)("h4",{id:"build-your-own-spjs"},"Build your own sp.js"),(0,i.kt)("p",null,"It's now easier than ever to build your own ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js")," to include ",(0,i.kt)("em",{parentName:"p"},"just")," the features you want!"),(0,i.kt)("p",null,"To do this, you'll need to install ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," and ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," 10, 12 or 14 (at the time of writing) then open a Terminal or Command Prompt and run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/snowplow/snowplow-javascript-tracker.git\n$ npm install -g @microsoft/rush \n$ rush update\n")),(0,i.kt)("p",null,"Then open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/trackers/javascript-tracker/tracker.config.ts")," in your favourite text editor and flip the ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," values to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for features which you don't require."),(0,i.kt)("p",null,"Then run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ rush build\n")),(0,i.kt)("p",null,"Once complete (it might take a minute or two), you'll find your brand new ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js")," at:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"/trackers/javascript-tracker/dist/sp.js")," along with a new sourcemap ",(0,i.kt)("inlineCode",{parentName:"p"},"sp.js.map")," which we suggest hosting together for a better developer experience."))}d.isMDXComponent=!0}}]);