"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[44746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),v=r,m=u["".concat(p,".").concat(v)]||u[v]||d[v]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Setup",date:"2022-05-12",sidebar_position:10},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/setup/index",id:"migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/setup/index",title:"Setup",description:"Integration options",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/setup/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/setup",slug:"/migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/setup/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/setup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659338286,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:10,frontMatter:{title:"Setup",date:"2022-05-12",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Java Tracker (v0.11)",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/"},next:{title:"Initialization",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization/"}},p={},c=[{value:"Integration options",id:"integration-options",level:2},{value:"Tracker compatibility",id:"tracker-compatibility",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Adding OkHttp Support",id:"adding-okhttp-support",level:4},{value:"Adding ApacheHttp Support",id:"adding-apachehttp-support",level:4},{value:"SBT",id:"sbt",level:3}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"integration-options"},"Integration options"),(0,r.kt)("h3",{id:"tracker-compatibility"},"Tracker compatibility"),(0,r.kt)("p",null,"The Snowplow Java Tracker has been built and tested using Java versions 8, 11 and 13, so should work within any Java application built using JDK8 upwards."),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"To minimize jar bloat, we have tried to keep external dependencies to a minimum. For the full list of dependencies, please see our\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker/blob/master/build.gradle"},"Gradle build file"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The current version of the Snowplow Java Tracker is ",(0,r.kt)("strong",{parentName:"p"},"0.10.1")),(0,r.kt)("p",null,"You can also manually insert the Tracker by downloading the jar directly:\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bintray.com/snowplow/snowplow-maven/download_file?file_path=com%2Fsnowplowanalytics%2Fsnowplow-java-tracker%2F0.9.0%2Fsnowplow-java-tracker-0.9.0.jar"},"snowplow-java-tracker-0.10.1.jar")),(0,r.kt)("h3",{id:"maven"},"Maven"),(0,r.kt)("p",null,"Add into your project's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-java-tracker</artifactId>\n    <version>0.10.1</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,"Add into your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    // Snowplow Java Tracker\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:0.10.1'\n}\n")),(0,r.kt)("p",null,"From 0.10.1 you can also specify the feature variants via Gradle, to pull in the required optional dependencies."),(0,r.kt)("h4",{id:"adding-okhttp-support"},"Adding OkHttp Support"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:0.10.1'\n    implementation ('com.snowplowanalytics:snowplow-java-tracker:0.10.1') {\n        capabilities {\n            requireCapability 'com.snowplowanalytics:snowplow-java-tracker-okhttp-support:0.10.1'\n        }\n    }\n}\n")),(0,r.kt)("h4",{id:"adding-apachehttp-support"},"Adding ApacheHttp Support"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:0.10.1'\n    implementation ('com.snowplowanalytics:snowplow-java-tracker:0.10.1') {\n        capabilities {\n            requireCapability 'com.snowplowanalytics:snowplow-java-tracker-apachehttp-support:0.10.1'\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"sbt"},"SBT"),(0,r.kt)("p",null,"The Snowplow Java Tracker is also usable from Scala. Add this to your SBT config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Dependency\nval snowplowTracker = "com.snowplowanalytics"  % "snowplow-java-tracker"  % "0.10.1"\n')))}d.isMDXComponent=!0}}]);