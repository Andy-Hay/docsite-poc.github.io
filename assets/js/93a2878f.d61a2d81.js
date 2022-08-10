"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[30235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={title:"Remote Configuration",date:"2021-11-23",sidebar_position:50},r=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/remote-configuration/index",id:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/remote-configuration/index",title:"Remote Configuration",description:"iOS TrackerAndroid Tracker",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/remote-configuration/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/remote-configuration",slug:"/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/remote-configuration/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/remote-configuration/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:50,frontMatter:{title:"Remote Configuration",date:"2021-11-23",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Tracking Events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/tracking-events/"},next:{title:"Migration guides",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/migration-guides/"}},c={},s=[{value:"The remote configuration file",id:"the-remote-configuration-file",level:3},{value:"Refresh the configuration",id:"refresh-the-configuration",level:3},{value:"Policy for runtime settings and remote configuration updates",id:"policy-for-runtime-settings-and-remote-configuration-updates",level:3},{value:"The remote configuration file",id:"the-remote-configuration-file-1",level:3},{value:"Refresh the configuration",id:"refresh-the-configuration-1",level:3},{value:"Policy for runtime settings and remote configuration updates",id:"policy-for-runtime-settings-and-remote-configuration-updates-1",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#tab-ios-tracker"},"iOS Tracker"),(0,a.kt)("a",{parentName:"p",href:"#tab-android-tracker"},"Android Tracker")),(0,a.kt)("p",null,"Remote Configuration is a feature of the mobile native trackers that allows for the configuration of the tracker without distributing an app update."),(0,a.kt)("p",null,'The tracker can be configured traditionally, passing the configuration as explained in the "Instrumentation" section.',(0,a.kt)("br",{parentName:"p"}),"\n","Unfortunately, every time the developer wants to update the tracker configuration, they are forced to update the code and redistribute the app."),(0,a.kt)("p",null,"With remote configuration the developer just indicates to the tracker how to download the configuration file and the tracker will automatically reconfigure itself based on the downloaded file."),(0,a.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker for the remote configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your application delegate ",(0,a.kt)("inlineCode",{parentName:"li"},"AppDelegate.swift")," add ",(0,a.kt)("inlineCode",{parentName:"li"},"import SnowplowTracker"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"application(_:didFinishLaunchingWithOptions:)")," method, set up the SDK as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  // Indicate the URL where to download the config file\n  let remoteConfig = RemoteConfiguration(endpoint: REMOTE_CONFIG_URL, method: .get)\n\n  // Default configuration used in case the remote config is not accessible\n  let defaultNetworkConfig = NetworkConfiguration(endpoint: DEFAULT_COLLECTOR_URL, method: .post);\n  let defaultConfig = [ConfigurationBundle(namespace: "defaultNamespace", networkConfiguration: networkConfig)]\n\n  // Callback for when the tracker reconfigures itself passing a list of active namespaces\n  let successCallback: ([String]?) -> Void = { namespaces in\n      // This callback can be used for last minute, post-configuration, updates once the tracker instance is enabled and configured.\n  }\n\n  // Setup tracker with remote configuration\n  Snowplow.setup(remoteConfiguration: remoteConfig, defaultConfiguration: defaultConfig, onSuccess: successCallback)\n')),(0,a.kt)("p",null,"Once the app starts the Snowplow tracker initializer will attempt to download the remote configuration file. Meanwhile, it will initialize the tracker instance (or multiple tracker instances) based on the last cached configuration. The cached configuration is the last configuration downloaded remotely. If it's not available, the tracker initializer will spin up the default configuration passed as a parameter. Every time the initializer successfully initializes the tracker instances it calls a callback passing the list of activated namespaces. The callback can be used for last minute settings at runtime once the tracker has been instanced."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultConfiguration")," parameter takes a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigurationBundle")," objects. Each one represents a tracker instance and it's own configuration. Each tracker instance is identified by a ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," which is a parameter required in each ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigurationBundle"),'. All the other properties are just the various configurations described in the "Introduction" section.'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," callback is called for each successful configuration. For example, if the tracker has a cached configuration and it's downloading a new configuration, first the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," callback will be called for the cached configuration and then it will be called when the downloaded configuration is applied. When it happens the cached configuration is substituted with the downloaded one."),(0,a.kt)("h3",{id:"the-remote-configuration-file"},"The remote configuration file"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteConfiguration")," object passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method is specified the REMOTE","_","CONFIG","_","URL, which is the url where the developer hosts the configuration file.",(0,a.kt)("br",{parentName:"p"}),"\n","There aren't restrictions about where to host the file but possible solutions may be S3 with Cloudfront or a Google Cloud Storage bucket."),(0,a.kt)("p",null,"The configuration file is simply a JSON file compliant with the ",(0,a.kt)("a",{parentName:"p",href:"http://iglucentral.com/schemas/com.snowplowanalytics.mobile/remote_config/jsonschema/1-0-0"},"Remote Config JSONSchema"),"."),(0,a.kt)("p",null,"An example of remote config specification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.mobile/remote_config/jsonschema/1-0-0",\n  "configurationVersion": 1,\n  "configurationBundle": [\n    {\n      "namespace": "testTracker1",\n      "networkConfiguration": {\n        "endpoint": "http://<collector.url>",\n        "method": "get"\n      },\n      "trackerConfiguration": {\n        "appId": "app-identifier",\n        "devicePlatform": "mob",\n        "logLevel": "off",\n        "sessionContext": false,\n        "applicationContext": false,\n        "platformContext": false,\n        "geoLocationContext": false,\n        "screenContext": false,\n        "screenViewAutotracking": false,\n        "lifecycleAutotracking": false,\n        "installAutotracking": false,\n        "exceptionAutotracking": false,\n        "diagnosticAutotracking": false\n      },\n      "subjectConfiguration": {\n        "userId": "example",\n        "networkUserId": "example",\n        "domainUserId": "example",\n        "useragent": "example",\n        "ipAddress": "example",\n        "timezone": "example",\n        "language": "example"\n      },\n      "sessionConfiguration": {\n        "backgroundTimeout": 1800,\n        "foregroundTimeout": 1800\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The required fields are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$schema"),": It specifies the format of the configuration file and it's used by the tracker to check if the format is compatible with that version of the tracker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configurationVersion"),": It's an incremental version number that identifies the current configuration. ",(0,a.kt)("strong",{parentName:"li"},"It MUST be increased on each update.")," The tracker compares this value with the configurationVersion of the cached configuration to decide whether to update or not the tracker configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configurationBundle"),": This is a list of configurations for the various tracker instances the developer wants to activate in the app. Usually there is a unique tracker instance for the app so the configurationBundle will likely be an array of a single object like in the example above.")),(0,a.kt)("p",null,"The elements of the ",(0,a.kt)("inlineCode",{parentName:"p"},"configurationBundle"),' list are just a subset of the common configuration settings described in the "Introduction" section.',(0,a.kt)("br",{parentName:"p"}),"\n","At the moment the configuration objects configurable remotely are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"networkConfiguration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trackerConfiguration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subjectConfiguration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sessionConfiguration"))),(0,a.kt)("p",null,"Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"networkConfiguration")," is fundamental in order to set the collector endpoint, the URL where the tracked events will be sent. If the ConfigurationBundle has a ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," but not the ",(0,a.kt)("inlineCode",{parentName:"p"},"networkConfiguration"),", the tracker initializer will remove the tracker instance with the corresponding namespace."),(0,a.kt)("h3",{id:"refresh-the-configuration"},"Refresh the configuration"),(0,a.kt)("p",null,"As shown above the developer can enforce the download of the configuration file at the start up of the app.",(0,a.kt)("br",{parentName:"p"}),"\n","If the developer wants to check for configuration updates more often, for example at runtime or when the app comes back from background state, it's possible to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh")," method, placing it where the developer wants to perform the download and the configuration check."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let successCallback: ([String]?) -> Void = { namespaces in\n    // This callback can be used for last minute, post-configuration,\n    // updates once the tracker instance is enabled and configured.\n}\n\nSnowplow.refresh(onSuccess: successCallback)\n")),(0,a.kt)("p",null,"The method needs only the callback parameter, without any remote configuration url or default configuration, because this is intended just for the configuration updates, not for the initial setup.",(0,a.kt)("br",{parentName:"p"}),"\n","The tracker will be configured only if a new configuration (with a higher ",(0,a.kt)("inlineCode",{parentName:"p"},"configurationVersion")," value) is available at the url indicated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteConfiguration")," passed earlier at start up of the app in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method call."),(0,a.kt)("h3",{id:"policy-for-runtime-settings-and-remote-configuration-updates"},"Policy for runtime settings and remote configuration updates"),(0,a.kt)("p",null,"When the tracker initializer updates the tracker configuration it would reset all the previous configuration with the new settings. Obviously, this can cause issues in case some runtime configuration has been applied meanwhile. To avoid this the tracker keeps track of runtime changes in the configuration settings and when a new remote configuration is downloaded and applied it doesn't override the settings already changed at runtime."),(0,a.kt)("p",null,"A clear example is a runtime change on ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"SubjectController"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Load configuration with userId = nil\nSnowplow.setup(remoteConfiguration: remoteConfig, defaultConfiguration: defaultConfig, onSuccess: successCallback)\n\n/* userId is set to nil */\n\n...later...\n\ntracker.subject.userId = "my-runtime-updated-userId"\n\n/* userId is is set to "my-runtime-updated-userId" */\n\n...later...\n\n// Later refreshing the configuration with userId = nil\nSnowplow.refresh(onSuccess: successCallback)\n\n/* userId is still set to "my-runtime-updated-userId" because it was set at runtime */\n')),(0,a.kt)("p",null,"Remote Configuration is a feature of the mobile native trackers that allows for the configuration of the tracker without distributing an app update."),(0,a.kt)("p",null,'The tracker can be configured traditionally, passing the configuration as explained in the "Instrumentation" section.',(0,a.kt)("br",{parentName:"p"}),"\n","Unfortunately, every time the developer wants to update the tracker configuration, they are forced to update the code and redistribute the app."),(0,a.kt)("p",null,"With remote configuration the developer just indicates to the tracker how to download the configuration file and the tracker will automatically reconfigure itself based on the downloaded file."),(0,a.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker for the remote configuration:"),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," subclass, set up the SDK as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  // Indicate the URL where to download the config file\n  RemoteConfiguration remoteConfig = new RemoteConfiguration(REMOTE_CONFIG_URL, HttpMethod.get);\n\n  // Default configuration used in case the remote config is not accessible\n  NetworkConfiguration defaultNetworkConfig = new NetworkConfiguration(DEFAULT_COLLECTOR_URL, HttpMethod.post);\n  List<ConfigurationBundle> defaultConfig = Arrays.asList(new ConfigurationBundle("defaultNamespace", networkConfig));\n\n  // Setup tracker with remote configuration\n  Snowplow.setup(context, remoteConfig, defaultConfig, namespaces -> {\n    // This callback can be used for last minute, post-configuration, updates once the tracker instance is enabled and configured.\n  });\n')),(0,a.kt)("p",null,"Once the app starts the Snowplow tracker initializer will attempt to download the remote configuration file. Meanwhile, it will initialize the tracker instance (or multiple tracker instances) based on the last cached configuration. The cached configuration is the last configuration downloaded remotely. If it's not available, the tracker initializer will spin up the default configuration passed as a parameter. Every time the initializer successfully initializes the tracker instances it calls a callback passing the list of activated namespaces. The callback can be used for last minute settings at runtime once the tracker has been instanced."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultConfiguration")," parameter takes a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigurationBundle")," objects. Each one represents a tracker instance and it's own configuration. Each tracker instance is identified by a ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," which is a parameter required in each ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigurationBundle"),'. All the other properties are just the various configurations described in the "Introduction" section.'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," callback is called for each successful configuration. For example, if the tracker has a cached configuration and it's downloading a new configuration, first the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," callback will be called for the cached configuration and then it will be called when the downloaded configuration is applied. When it happens the cached configuration is substituted with the downloaded one."),(0,a.kt)("h3",{id:"the-remote-configuration-file-1"},"The remote configuration file"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteConfiguration")," object passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method is specified the REMOTE","_","CONFIG","_","URL, which is the url where the developer hosts the configuration file.",(0,a.kt)("br",{parentName:"p"}),"\n","There aren't restrictions about where to host the file but possible solutions may be S3 with Cloudfront or a Google Cloud Storage bucket."),(0,a.kt)("p",null,"The configuration file is simply a JSON file compliant with the ",(0,a.kt)("a",{parentName:"p",href:"http://iglucentral.com/schemas/com.snowplowanalytics.mobile/remote_config/jsonschema/1-0-0"},"Remote Config JSONSchema"),"."),(0,a.kt)("p",null,"An example of remote config specification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.mobile/remote_config/jsonschema/1-0-0",\n  "configurationVersion": 1,\n  "configurationBundle": [\n    {\n      "namespace": "testTracker1",\n      "networkConfiguration": {\n        "endpoint": "http://<collector.url>",\n        "method": "get"\n      },\n      "trackerConfiguration": {\n        "appId": "app-identifier",\n        "devicePlatform": "mob",\n        "logLevel": "off",\n        "sessionContext": false,\n        "applicationContext": false,\n        "platformContext": false,\n        "geoLocationContext": false,\n        "screenContext": false,\n        "screenViewAutotracking": false,\n        "lifecycleAutotracking": false,\n        "installAutotracking": false,\n        "exceptionAutotracking": false,\n        "diagnosticAutotracking": false\n      },\n      "subjectConfiguration": {\n        "userId": "example",\n        "networkUserId": "example",\n        "domainUserId": "example",\n        "useragent": "example",\n        "ipAddress": "example",\n        "timezone": "example",\n        "language": "example"\n      },\n      "sessionConfiguration": {\n        "backgroundTimeout": 1800,\n        "foregroundTimeout": 1800\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The required fields are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$schema"),": It specifies the format of the configuration file and it's used by the tracker to check if the format is compatible with that version of the tracker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configurationVersion"),": It's an incremental version number that identifies the current configuration. ",(0,a.kt)("strong",{parentName:"li"},"It MUST be increased on each update.")," The tracker compares this value with the configurationVersion of the cached configuration to decide whether to update or not the tracker configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configurationBundle"),": This is a list of configurations for the various tracker instances the developer wants to activate in the app. Usually there is a unique tracker instance for the app so the configurationBundle will likely be an array of a single object like in the example above.")),(0,a.kt)("p",null,"The elements of the ",(0,a.kt)("inlineCode",{parentName:"p"},"configurationBundle"),' list are just a subset of the common configuration settings described in the "Introduction" section.',(0,a.kt)("br",{parentName:"p"}),"\n","At the moment the configuration objects configurable remotely are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"networkConfiguration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trackerConfiguration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subjectConfiguration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sessionConfiguration"))),(0,a.kt)("p",null,"Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"networkConfiguration")," is fundamental in order to set the collector endpoint, the URL where the tracked events will be sent. If the ConfigurationBundle has a ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," but not the ",(0,a.kt)("inlineCode",{parentName:"p"},"networkConfiguration"),", the tracker initializer will remove the tracker instance with the corresponding namespace."),(0,a.kt)("h3",{id:"refresh-the-configuration-1"},"Refresh the configuration"),(0,a.kt)("p",null,"As shown above the developer can enforce the download of the configuration file at the start up of the app.",(0,a.kt)("br",{parentName:"p"}),"\n","If the developer wants to check for configuration updates more often, for example at runtime or when the app comes back from background state, it's possible to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh")," method, placing it where the developer wants to perform the download and the configuration check."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Snowplow.refresh(context, namespaces -> {\n  // This callback can be used for last minute, post-configuration, \n  // updates once the tracker instance is enabled and configured.\n});\n")),(0,a.kt)("p",null,"The method needs only the callback parameter, without any remote configuration url or default configuration, because this is intended just for the configuration updates, not for the initial setup.",(0,a.kt)("br",{parentName:"p"}),"\n","The tracker will be configured only if a new configuration (with a higher ",(0,a.kt)("inlineCode",{parentName:"p"},"configurationVersion")," value) is available at the url indicated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteConfiguration")," passed earlier at start up of the app in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method call."),(0,a.kt)("h3",{id:"policy-for-runtime-settings-and-remote-configuration-updates-1"},"Policy for runtime settings and remote configuration updates"),(0,a.kt)("p",null,"When the tracker initializer updates the tracker configuration it would reset all the previous configuration with the new settings. Obviously, this can cause issues in case some runtime configuration has been applied meanwhile. To avoid this the tracker keeps track of runtime changes in the configuration settings and when a new remote configuration is downloaded and applied it doesn't override the settings already changed at runtime."),(0,a.kt)("p",null,"A clear example is a runtime change on ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"SubjectController"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Load configuration with userId = nil\nSnowplow.setup(context, remoteConfig, defaultConfig, successCallback);\n/* userId is set to nil */\n\n...later...\n\ntracker.getSubject().userId = "my-runtime-updated-userId"\n\n/* userId is is set to "my-runtime-updated-userId" */\n\n...later...\n\n// Later refreshing the configuration with userId = nil\nSnowplow.refresh(context, successCallback)\n\n/* userId is still set to "my-runtime-updated-userId" because it was set at runtime */\n')))}p.isMDXComponent=!0}}]);