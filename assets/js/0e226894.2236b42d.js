"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),h=l,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=n(87462),l=(n(67294),n(3905));const o={title:"ObjC client",date:"2021-03-26",sidebar_position:30},r=void 0,a={unversionedId:"migrated/pipeline-components-and-applications/iglu/iglu-clients/objc-client/index",id:"migrated/pipeline-components-and-applications/iglu/iglu-clients/objc-client/index",title:"ObjC client",description:"This page refers to version 0.1.0 of the Iglu ObjC client.",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/objc-client/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/iglu-clients/objc-client",slug:"/migrated/pipeline-components-and-applications/iglu/iglu-clients/objc-client/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/objc-client/",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"ObjC client",date:"2021-03-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Iglu Clients",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/"},next:{title:"Ruby client",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/ruby-client/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Client compatibility",id:"client-compatibility",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"CocoaPods",id:"cocoapods",level:3},{value:"Manual Setup",id:"manual-setup",level:3},{value:"Clone the client",id:"clone-the-client",level:4},{value:"Copy the client into your project",id:"copy-the-client-into-your-project",level:4},{value:"Copy required resources (Optional)",id:"copy-required-resources-optional",level:4},{value:"Initialization",id:"initialization",level:2},{value:"Importing the library",id:"importing-the-library",level:3},{value:"JSON-based initialization",id:"json-based-initialization",level:3},{value:"Validating JSON",id:"validating-json",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page refers to version 0.1.0 of the Iglu ObjC client."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-objc-client"},"Iglu Objc client")," allows you to resolve JSON Schemas from embedded and remote repositories. It does not yet let you write to repositories in any way (e.g. you can't publish new schemas to an Iglu repository)."),(0,l.kt)("p",null,"This client library should be straightforward to use if you are comfortable with Objective-C development."),(0,l.kt)("h3",{id:"client-compatibility"},"Client compatibility"),(0,l.kt)("p",null,"The Obj-C client is compatible with OSX 10.9+ and iOS 7.0+."),(0,l.kt)("h3",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"The library is dependant on  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/samskiter/KiteJSONValidator"},"KiteJSONValidator")," for all JSONSchema validation."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("h3",{id:"cocoapods"},"CocoaPods"),(0,l.kt)("p",null,"We support installing the Obj-C Client via CocoaPods since it's the easiest way to install the client. Doing so is simple:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install CocoaPods using ",(0,l.kt)("inlineCode",{parentName:"li"},"gem install cocoapods")),(0,l.kt)("li",{parentName:"ol"},"Create the file ",(0,l.kt)("inlineCode",{parentName:"li"},"Podfile")," in the root of your XCode project directory, if you don't have one already"),(0,l.kt)("li",{parentName:"ol"},"Add the following line into it:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pod 'SnowplowIgluClient'\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"pod install")," in the same directory")),(0,l.kt)("h3",{id:"manual-setup"},"Manual Setup"),(0,l.kt)("p",null,"If you prefer not to use CocoaPods, you can grab the client from our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-objc-client.git"},"GitHub repo")," and import it into your project."),(0,l.kt)("h4",{id:"clone-the-client"},"Clone the client"),(0,l.kt)("p",null,"First, git clone the latest version of the client to your local machine:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/iglu-objc-client.git\n")),(0,l.kt)("p",null,"If you don't have git installed locally, ",(0,l.kt)("a",{parentName:"p",href:"http://git-scm.com/downloads"},"install it")," first."),(0,l.kt)("h4",{id:"copy-the-client-into-your-project"},"Copy the client into your project"),(0,l.kt)("p",null,"You first need to copy the client's ",(0,l.kt)("inlineCode",{parentName:"p"},"SnowplowIgluClient")," sub-folder into your XCode project's folder. The command will look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cp -r iglu-objc-client/SnowplowIgluClient MyObjcApp/MyObjcApp/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Replace ",(0,l.kt)("inlineCode",{parentName:"li"},"MyObjcApp")," with the name of your own app, and tweak the source code sub-folder accordingly."),(0,l.kt)("li",{parentName:"ul"},"Next, drag and drop the sub-folder ",(0,l.kt)("inlineCode",{parentName:"li"},"MyObjcApp/MyObjcApp/SnowplowIgluClient")," into your XCode project's workspace."),(0,l.kt)("li",{parentName:"ul"},"Make sure that the suggested options for adding ",(0,l.kt)("inlineCode",{parentName:"li"},"SnowplowIgluClient")," are set ",(0,l.kt)("strong",{parentName:"li"},"Create groups"),", then click ",(0,l.kt)("strong",{parentName:"li"},"Finish"),".")),(0,l.kt)("h4",{id:"copy-required-resources-optional"},"Copy required resources (Optional)"),(0,l.kt)("p",null,"The client requires two schemas for initial operation; the first for validating that a JSON is a correct self-describing JSON and the second for validating the resolver-config JSON passed to it in startup. The client will look for these in a resource bundle named ",(0,l.kt)("inlineCode",{parentName:"p"},"SnowplowIgluResources"),"."),(0,l.kt)("p",null,"To get this bundle you will need to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the ",(0,l.kt)("inlineCode",{parentName:"li"},"SnowplowIgluClient.xcworkspace")," in XCode."),(0,l.kt)("li",{parentName:"ul"},"Build the ",(0,l.kt)("inlineCode",{parentName:"li"},"SnowplowIgluResources")," schema."),(0,l.kt)("li",{parentName:"ul"},"In your ",(0,l.kt)("inlineCode",{parentName:"li"},"Products")," folder within XCode you should now see a ",(0,l.kt)("inlineCode",{parentName:"li"},"SnowplowIgluResources.bundle"),"."),(0,l.kt)("li",{parentName:"ul"},"Copy this bundle to your project.")),(0,l.kt)("p",null,"Alternatively you can also include the standard Snowplow repository in your resolver-config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "name": "Iglu Central",\n  "vendorPrefixes": [\n    "com.snowplowanalytics"\n  ],\n  "connection": {\n    "http": {\n      "uri": "http://iglucentral.com"\n    }\n  },\n  "priority": 0\n}\n')),(0,l.kt)("p",null,"This will allow the client to download the required schemas at runtime."),(0,l.kt)("h2",{id:"initialization"},"Initialization"),(0,l.kt)("p",null,"Assuming you have completed the setup for your Objective-C project, you are now ready to initialize the Obj-C client."),(0,l.kt)("h3",{id:"importing-the-library"},"Importing the library"),(0,l.kt)("p",null,"All interactions are handled through the ObjC client's ",(0,l.kt)("inlineCode",{parentName:"p"},"IGLUClient")," class."),(0,l.kt)("p",null,"Import the header for the client like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#import "IGLUClient.h"\n')),(0,l.kt)("p",null,"You are now ready to create your Obj-C Client."),(0,l.kt)("h3",{id:"json-based-initialization"},"JSON-based initialization"),(0,l.kt)("p",null,"You will need to supply either a resolver-config as an ",(0,l.kt)("inlineCode",{parentName:"p"},"NSString")," or the URL to your resolver-config as an argument for the client. If a valid resolver-config is not passed in the client will throw an ",(0,l.kt)("strong",{parentName:"p"},"exception"),"."),(0,l.kt)("p",null,"To make this step a touch easier we have included several utility functions for getting ",(0,l.kt)("inlineCode",{parentName:"p"},"NSString's")," from URLs and File Paths."),(0,l.kt)("p",null,"For example; grabbing your resolver-config from a local source and creating the client could look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#import "IGLUUtilities.h"\n\n// Create Client\nNSString * resolverAsString = [IGLUUtilities\n  getStringWithFilePath:@"your_iglu_resolver.json"\n  andDirectory:@"Your_Directory" \n  andBundle:[NSBundle bundleForClass:[self class]]];\n\nIGLUClient * client = [[IGLUClient alloc]\n  initWithJsonString:resolverAsString\n  andBundles:nil];\n')),(0,l.kt)("p",null,"To create a client from a URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'// The URL is passed as an NSString\nIGLUClient * client = [[IGLUClient alloc] initWithUrlPath:@"https://raw.githubusercontent.com/snowplow/snowplow/master/3-enrich/config/iglu_resolver.json" andBundles:nil];\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"andBundle:")," argument of the client init accepts an ",(0,l.kt)("inlineCode",{parentName:"p"},"NSMutableArray")," of bundle objects. These objects will be used to search for files for any embedded repositories you include."),(0,l.kt)("p",null,"To add to the available bundles you can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[client addToBundles:yourBundleObject];\n")),(0,l.kt)("h2",{id:"validating-json"},"Validating JSON"),(0,l.kt)("p",null,"Once you have successfully created a client you can start validating your self-describing JSON."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE:")," All JSONs must first be parsed into an NSDictionary before they can be validated."),(0,l.kt)("p",null,"To parse your JSON String as an ",(0,l.kt)("inlineCode",{parentName:"p"},"NSDictionary")," you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"IGLUUtilities")," like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NSDictionary * jsonDictionary = [IGLUUtilities parseToJsonWithString:yourStringHere];\n")),(0,l.kt)("p",null,"To validate your JSON:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"BOOL result = [client validateJson:jsonDictionary];\n")),(0,l.kt)("p",null,"The above command is telling the client to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check the JSON is a valid self-describing JSON"),(0,l.kt)("li",{parentName:"ul"},"Check the JSON validates against it's own schema")),(0,l.kt)("p",null,"Currently the only output from the client will be a ",(0,l.kt)("inlineCode",{parentName:"p"},"YES")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"NO")," response as the underlying library does not support error printing as of yet."))}u.isMDXComponent=!0}}]);