"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[22249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?s.createElement(m,o(o({ref:t},u),{},{components:n})):s.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const a={title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},o=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/index",id:"migrated/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/index",title:"Adding extra data: the Subject class",description:"Subject information describes the user and device associated with the event, such as their user ID, what type of device they used, or what size screen that device had.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class",slug:"/migrated/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:30,frontMatter:{title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialisation",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/initialisation/"},next:{title:"Tracking specific events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/"}},l={},c=[{value:"Set user ID with\xa0&quot;set_user_id&quot;",id:"set-user-id-withset_user_id",level:2},{value:"Set screen resolution with\xa0&quot;set_screen_resolution&quot;",id:"set-screen-resolution-withset_screen_resolution",level:2},{value:"Set viewport dimensions with\xa0&quot;set_viewport&quot;",id:"set-viewport-dimensions-withset_viewport",level:2},{value:"Set color depth with\xa0&quot;set_color_depth&quot;",id:"set-color-depth-withset_color_depth",level:2},{value:"Set timezone with\xa0&quot;set_timezone&quot;",id:"set-timezone-withset_timezone",level:2},{value:"Set the language with\xa0&quot;set_language&quot;",id:"set-the-language-withset_language",level:2},{value:"Set custom user-agent with\xa0&quot;set_useragent&quot;",id:"set-custom-user-agent-withset_useragent",level:2},{value:"Set user&#39;s IP address with\xa0&quot;set_ip_address&quot;",id:"set-users-ip-address-withset_ip_address",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subject information describes the user and device associated with the event, such as their user ID, what type of device they used, or what size screen that device had."),(0,r.kt)("p",null,"Create a subject like this and add it to your tracker using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow::create_tracker"),"\xa0call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'auto subject = make_shared<Subject>();\nsubject.set_user_id("a-user-id");\n\nauto tracker = Snowplow::create_tracker("ns", "https://com.acme.collector", POST, "events.db", subject);\n')),(0,r.kt)("p",null,"You can also attach custom Subject information to individual events. In this way, you may track events describing different users or devices using the same tracker. Events can be assigned a shared C++ pointer to a Subject instance using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"set_subject"),"\xa0method. The following example shows how to attach a subject instance to a structured event (see\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/"},"Tracking specific events"),"\xa0for more information on tracking events):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'auto subject = std::make_shared<Subject>();\nsubject->set_user_id("another-user");\n\nStructuredEvent se("category", "action");\nse.set_subject(subject);\n')),(0,r.kt)("p",null,"The Subject class has a set of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_user_id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_screen_resolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_viewport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_color_depth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_timezone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_useragent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_ip_address"))),(0,r.kt)("p",null,"We will discuss each of these in turn below:"),(0,r.kt)("h2",{id:"set-user-id-withset_user_id"},'Set user ID with\xa0"set',"_","user","_",'id"'),(0,r.kt)("p",null,"You can set the user ID to any string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'subject->set_user_id( "{{USER ID}}" );\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'subject->set_user_id("alexd");\n')),(0,r.kt)("h2",{id:"set-screen-resolution-withset_screen_resolution"},'Set screen resolution with\xa0"set',"_","screen","_",'resolution"'),(0,r.kt)("p",null,"If your code has access to the device\u2019s screen resolution, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_screen_resolution( {{WIDTH}}, {{HEIGHT}} );\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_screen_resolution(1366, 768);\n")),(0,r.kt)("h2",{id:"set-viewport-dimensions-withset_viewport"},'Set viewport dimensions with\xa0"set',"_",'viewport"',(0,r.kt)("a",{parentName:"h2",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/03-adding-data.md#set-viewport-dimensions-with-set_viewport"})),(0,r.kt)("p",null,"If your code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_viewport( {{WIDTH}}, {{HEIGHT}} );\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_viewport(300, 200);\n")),(0,r.kt)("h2",{id:"set-color-depth-withset_color_depth"},'Set color depth with\xa0"set',"_","color","_",'depth"',(0,r.kt)("a",{parentName:"h2",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/03-adding-data.md#set-color-depth-with-set_color_depth"})),(0,r.kt)("p",null,"If your code has access to the bit depth of the device\u2019s color palette for displaying images, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_color_depth( {{BITS PER PIXEL}} );\n")),(0,r.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_color_depth(32);\n")),(0,r.kt)("h2",{id:"set-timezone-withset_timezone"},'Set timezone with\xa0"set',"_",'timezone"'),(0,r.kt)("p",null,"This method lets you pass a user\u2019s timezone in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_timezone( {{TIMEZONE}} );\n")),(0,r.kt)("p",null,"The timezone should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'subject->set_timezone("Europe/London");\n')),(0,r.kt)("h2",{id:"set-the-language-withset_language"},'Set the language with\xa0"set',"_",'language"',(0,r.kt)("a",{parentName:"h2",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/03-adding-data.md#set-the-language-with-set_language"})),(0,r.kt)("p",null,"This method lets you pass a user\u2019s language in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_language( {{LANGUAGE}} );\n")),(0,r.kt)("p",null,"The language should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_language('en');\n")),(0,r.kt)("h2",{id:"set-custom-user-agent-withset_useragent"},'Set custom user-agent with\xa0"set',"_",'useragent"'),(0,r.kt)("p",null,"To change the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"user-agent string"),"\xa0sent along with events to identify the application and system, you may set custom useragent using this method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_useragent( {{USERAGENT}} );\n")),(0,r.kt)("p",null,"The user-agent should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'subject->set_useragent("YourApp/5.0 (Macintosh; Intel Mac OS X 10_15_7)");\n')),(0,r.kt)("h2",{id:"set-users-ip-address-withset_ip_address"},"Set user's IP address with\xa0\"set","_","ip","_",'address"'),(0,r.kt)("p",null,"To set the user's IP address, you may use this method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"subject->set_ip_address( {{IP_ADDRESS}} );\n")),(0,r.kt)("p",null,"The IP address should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'subject->set_ip_address("169.254.0.2");\n')),(0,r.kt)("p",null,"If the IP address is not set, the events will be assigned the IP address from the HTTP request by the Collector."))}d.isMDXComponent=!0}}]);