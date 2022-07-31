"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[97369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Quick Start Guide",date:"2021-04-12",sidebar_position:200},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/index",id:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/index",title:"Quick Start Guide",description:"iOS TrackerAndroid Tracker",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide",slug:"/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:200,frontMatter:{title:"Quick Start Guide",date:"2021-04-12",sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/"},next:{title:"Tracking Events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/"}},c={},p=[{value:"iOS Tracker",id:"ios-tracker",level:2},{value:"Installation",id:"installation",level:3},{value:"Instrumentation",id:"instrumentation",level:3},{value:"Android Tracker",id:"android-tracker",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Instrumentation",id:"instrumentation-1",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#tab-ios-tracker"},"iOS Tracker"),(0,a.kt)("a",{parentName:"p",href:"#tab-android-tracker"},"Android Tracker")),(0,a.kt)("h2",{id:"ios-tracker"},"iOS Tracker"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The iOS Tracker SDK can be installed using various dependency managers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Swift Package Manager")," (Recommended)"),(0,a.kt)("p",null,"To install Snowplow Tracker with SPM:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Xcode, select File > Swift Packages > Add Package Dependency."),(0,a.kt)("li",{parentName:"ol"},"Add the url where to download the library: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-objc-tracker"},"https://github.com/snowplow/snowplow-objc-tracker"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cocoapods")),(0,a.kt)("p",null,"To install Snowplow Tracker with Cocoapods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure that Cocoapods is installed on your system and correctly configured for your app."),(0,a.kt)("li",{parentName:"ol"},"Add the iOS Tracker SDK among the dependencies of your ",(0,a.kt)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   pod 'SnowplowTracker', '~> 2.0'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"pod install")," to add the tracker to your app project.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Carthage")),(0,a.kt)("p",null,"To install Snowplow Tracker with Carthage:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure that Carthage is installed on your system and correctly configured for your app."),(0,a.kt)("li",{parentName:"ol"},"Add the iOS Tracker SDK among the dependencies of your ",(0,a.kt)("inlineCode",{parentName:"li"},"Cartfile"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   github "snowplow/snowplow-objc-tracker" ~> 2.0\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"carthage update")," and drag the appropriate frameworks from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Carthage/build")," folder to your app project.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported System Version")),(0,a.kt)("p",null,"The iOS Tracker SDK supports ",(0,a.kt)("strong",{parentName:"p"},"iOS 9.0+"),", ",(0,a.kt)("strong",{parentName:"p"},"macOS 10.9+"),", ",(0,a.kt)("strong",{parentName:"p"},"tvOS 9.0+")," and ",(0,a.kt)("strong",{parentName:"p"},"watchOS 2.0+")),(0,a.kt)("h3",{id:"instrumentation"},"Instrumentation"),(0,a.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your application delegate ",(0,a.kt)("inlineCode",{parentName:"li"},"AppDelegate.swift")," add ",(0,a.kt)("inlineCode",{parentName:"li"},"import SnowplowTracker"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"application(_:didFinishLaunchingWithOptions:)")," method, set up the SDK as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   let tracker = Snowplow.createTracker(namespace: "appTracker", endpoint: COLLECTOR_URL, method: .post)\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"It creates a tracker instance which can be used to track events like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   let event = Structured(category: "Category_example", action: "Action_example")\n   tracker.track(event)\n')),(0,a.kt)("p",null,"If you prefer to access the tracker when the reference is not directly accessible, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultTracker")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   Snowplow.defaultTracker().track(event)\n")),(0,a.kt)("p",null,"The tracker has a default configuration where some settings are enabled by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"session tracking"),(0,a.kt)("li",{parentName:"ul"},"screen tracking"),(0,a.kt)("li",{parentName:"ul"},"platform contexts (mobile specific context fields)")),(0,a.kt)("p",null,"You can override the default configuration with a fine grained configuration when you create the tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'let networkConfig = NetworkConfiguration(endpoint: COLLECTOR_URL, method: .post)\nlet trackerConfig = TrackerConfiguration()\n    .base64Encoding(false)\n    .sessionContext(true)\n    .platformContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .screenContext(true)\n    .applicationContext(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true)\nlet sessionConfig = SessionConfiguration(\n    foregroundTimeout: Measurement(value: 30, unit: .minutes),\n    backgroundTimeout: Measurement(value: 30, unit: .minutes)\n)       \nSnowplow.createTracker(\n    namespace: "appTracker",\n    network: networkConfig,\n    configurations: [trackerConfig, sessionConfig]\n);\n')),(0,a.kt)("h2",{id:"android-tracker"},"Android Tracker"),(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"The Android Tracker SDK is available on ",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.snowplowanalytics/snowplow-android-tracker"},"Maven Central")," and can be installed using Gradle."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gradle")),(0,a.kt)("p",null,"Add into your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dependencies {\n  ...\n  // Snowplow Android Tracker\n  implementation 'com.snowplowanalytics:snowplow-android-tracker:2.+'\n  // In case 'lifecycleAutotracking' is enabled\n  implementation 'androidx.lifecycle-extensions:2.2.+'\n  ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported System Version")),(0,a.kt)("p",null,"The Android Tracker SDK supports Android 5 (",(0,a.kt)("strong",{parentName:"p"},"API level 21+"),")"),(0,a.kt)("h3",{id:"instrumentation-1"},"Instrumentation"),(0,a.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("inlineCode",{parentName:"li"},"Application")," subclass, set up the SDK as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   TrackerController tracker = Snowplow.createTracker(context, "appTracker", COLLECTOR_URL, HttpMethod.POST);\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"It creates a tracker instance which can be used to track events like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   Event event = new Structured("Category_example", "Action_example");\n   tracker.track(event);\n')),(0,a.kt)("p",null,"If you prefer to access the tracker when the reference is not directly accessible, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultTracker")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   Snowplow.getDefaultTracker().track(event);\n")),(0,a.kt)("p",null,"The tracker has a default configuration where some settings are enabled by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"session tracking"),(0,a.kt)("li",{parentName:"ul"},"screen tracking"),(0,a.kt)("li",{parentName:"ul"},"platform contexts (mobile specific context fields)")),(0,a.kt)("p",null,"You can override the default configuration with a fine grained configuration when you create the tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'NetworkConfiguration networkConfig = new NetworkConfiguration(COLLECTOR_URL, HttpMethod.POST);\nTrackerConfiguration trackerConfig = new TrackerConfiguration("appId")\n    .base64Encoding(false)\n    .sessionContext(true)\n    .platformContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .screenContext(true)\n    .applicationContext(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true);\nSessionConfiguration sessionConfig = new SessionConfiguration(\n    new TimeMeasure(30, TimeUnit.SECONDS),\n    new TimeMeasure(30, TimeUnit.SECONDS)\n);\nSnowplow.createTracker(context,\n    "appTracker",\n    networkConfig,\n    trackerConfig,\n    sessionConfig\n);\n')))}u.isMDXComponent=!0}}]);