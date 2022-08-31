"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[56371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Adding extra data: The Subject class",date:"2020-02-26",sidebar_position:30},s=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class/index",id:"migrated/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class/index",title:"Adding extra data: The Subject class",description:"You may have additional information about the user (i.e. subject) performing the action or the environment in which the user has performed the action. Some of that additional data can be sent into Snowplow with each event as part of the subject class.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class",slug:"/migrated/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/python-tracker/adding-extra-data-the-subject-class/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Adding extra data: The Subject class",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialization",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/python-tracker/intialization/"},next:{title:"Tracking specific events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/python-tracker/tracking-specific-events/"}},l={},c=[{value:"Change the tracker&#39;s platform with\xa0<code>set_platform</code>",id:"change-the-trackers-platform-withset_platform",level:4},{value:"Set user ID with\xa0<code>set_user_id</code>",id:"set-user-id-withset_user_id",level:3},{value:"Set screen resolution with <code>set_screen_resolution</code>",id:"set-screen-resolution-with-set_screen_resolution",level:3},{value:"Set viewport dimensions with\xa0<code>set_viewport</code>",id:"set-viewport-dimensions-withset_viewport",level:3},{value:"Set color depth with\xa0<code>set_color_depth</code>",id:"set-color-depth-withset_color_depth",level:3},{value:"Set timezone with\xa0<code>set_timezone</code>",id:"set-timezone-withset_timezone",level:3},{value:"Set the language with\xa0<code>set_lang</code>",id:"set-the-language-withset_lang",level:3},{value:"Setting the IP address with\xa0<code>set_ip_address</code>",id:"setting-the-ip-address-withset_ip_address",level:3},{value:"Setting the useragent with\xa0<code>set_useragent</code>",id:"setting-the-useragent-withset_useragent",level:3},{value:"Setting the domain user ID with\xa0<code>set_domain_user_id</code>",id:"setting-the-domain-user-id-withset_domain_user_id",level:3},{value:"Setting the network user ID with\xa0<code>set_network_user_id</code>",id:"setting-the-network-user-id-withset_network_user_id",level:3},{value:"Tracking multiple subjects",id:"tracking-multiple-subjects",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may have additional information about the user (i.e. subject) performing the action or the environment in which the user has performed the action. Some of that additional data can be sent into Snowplow with each event as part of the subject class."),(0,o.kt)("p",null,"You can create a subject like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from snowplow_tracker import Subject\ns = Subject()\n")),(0,o.kt)("p",null,"The Subject class has a set of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"set_...()"),"\xa0methods to attach extra data relating to the user:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-platform"},(0,o.kt)("inlineCode",{parentName:"a"},"set_platform"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-user-id"},(0,o.kt)("inlineCode",{parentName:"a"},"set_user_id"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-screen-resolution"},(0,o.kt)("inlineCode",{parentName:"a"},"set_screen_resolution"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-viewport"},(0,o.kt)("inlineCode",{parentName:"a"},"set_viewport"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-color-depth"},(0,o.kt)("inlineCode",{parentName:"a"},"set_color_depth"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-timezone"},(0,o.kt)("inlineCode",{parentName:"a"},"set_timezone"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Python-Tracker#set-lang"},(0,o.kt)("inlineCode",{parentName:"a"},"set_lang")))),(0,o.kt)("p",null,"If you initialize a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker"),"\xa0instance without a subject, a default\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Subject"),"\xa0instance will be attached to the tracker. You can access that subject like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'t = Tracker(my_emitter)\nt.subject.set_platform("mob").set_user_id("user-12345").set_lang("en")\n')),(0,o.kt)("p",null,"We will discuss each of these in turn below:"),(0,o.kt)("h4",{id:"change-the-trackers-platform-withset_platform"},"Change the tracker's platform with\xa0",(0,o.kt)("inlineCode",{parentName:"h4"},"set_platform")),(0,o.kt)("p",null,'The default platform is "pc". You can change the platform the subject is using by calling for example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_platform( {{ PLATFORM }})\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s.set_platform("tv") # Running on a Connected TV\n')),(0,o.kt)("p",null,"For a full list of supported platforms, please see the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"."),(0,o.kt)("h3",{id:"set-user-id-withset_user_id"},"Set user ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_user_id")),(0,o.kt)("p",null,"You can set the user ID to any string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s.set_user_id( "{{USER ID}}" )\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s.set_user_id("alexd")\n')),(0,o.kt)("h3",{id:"set-screen-resolution-with-set_screen_resolution"},"Set screen resolution with ",(0,o.kt)("inlineCode",{parentName:"h3"},"set_screen_resolution")),(0,o.kt)("p",null,"If your Python code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_screen_resolution( {{WIDTH}}, {{HEIGHT}} )\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_screen_resolution(1366, 768)\n")),(0,o.kt)("h3",{id:"set-viewport-dimensions-withset_viewport"},"Set viewport dimensions with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_viewport")),(0,o.kt)("p",null,"If your Python code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_viewport( {{WIDTH}}, {{HEIGHT}} )\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_viewport(300, 200)\n")),(0,o.kt)("h3",{id:"set-color-depth-withset_color_depth"},"Set color depth with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_color_depth")),(0,o.kt)("p",null,"If your Python code has access to the bit depth of the device's color palette for displaying images, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_color_depth( {{BITS PER PIXEL}} )\n")),(0,o.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_color_depth(32)\n")),(0,o.kt)("h3",{id:"set-timezone-withset_timezone"},"Set timezone with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_timezone")),(0,o.kt)("p",null,"This method lets you pass a user's timezone into Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_timezone( {{TIMEZONE}} )\n")),(0,o.kt)("p",null,"The timezone should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s.set_timezone("Europe/London")\n')),(0,o.kt)("h3",{id:"set-the-language-withset_lang"},"Set the language with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_lang")),(0,o.kt)("p",null,"This method lets you pass a user's language into Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_lang( {{LANGUAGE}} )\n")),(0,o.kt)("p",null,"The language should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_lang('en')\n")),(0,o.kt)("h3",{id:"setting-the-ip-address-withset_ip_address"},"Setting the IP address with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_ip_address")),(0,o.kt)("p",null,"If you have access to the user's IP address, you can set it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_ip_address('34.633.11.139')\n")),(0,o.kt)("h3",{id:"setting-the-useragent-withset_useragent"},"Setting the useragent with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_useragent")),(0,o.kt)("p",null,'If you have access to the user\'s useragent (sometimes called "browser string"), you can set it like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_useragent('Mozilla/5.0 (Windows NT 5.1; rv:23.0) Gecko/20100101 Firefox/23.0')\n")),(0,o.kt)("h3",{id:"setting-the-domain-user-id-withset_domain_user_id"},"Setting the domain user ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_domain_user_id")),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"domain_userid"),"\xa0field of the Snowplow event model corresponds to the ID stored in the first party cookie set by the Snowplow JavaScript Tracker. If you want to match up server-side events with client-side events, you can set the domain user ID for server-side events like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_domain_user_id('c7aadf5c60a5dff9')\n")),(0,o.kt)("p",null,"You can extract the domain user ID from the cookies of a request using the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"get_domain_user_id"),"\xa0function below. The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"request"),"\xa0argument is, as an example, the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/1.7/ref/request-response/"},"Django request object"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that this function has not been tested.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import re\ndef snowplow_cookie(request):\n    for name in request.COOKIES:\n        if re.match(r"_sp_id", name) != None:\n           return request.COOKIES[name]\n    return None\n\ndef get_domain_user_id(request):\n    cookie = snowplow_cookie(request)\n    if cookie != None:\n        return cookie.split(".")[0]\n')),(0,o.kt)("p",null,'If you used the "cookieName" configuration option of the Snowplow JavaScript Tracker, replace "',(0,o.kt)("em",{parentName:"p"},"sp"),'" with the same string you passed as the cookieName.'),(0,o.kt)("h3",{id:"setting-the-network-user-id-withset_network_user_id"},"Setting the network user ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"set_network_user_id")),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"network_user_id"),"\xa0field of the Snowplow event model corresponds to the ID stored in the third party cookie set by the Snowplow Collector. You can set the network user ID for server-side events like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s.set_network_user_id('ecdff4d0-9175-40ac-a8bb-325c49733607')\n")),(0,o.kt)("h2",{id:"tracking-multiple-subjects"},"Tracking multiple subjects"),(0,o.kt)("p",null,"You may want to track more than one subject concurrently. To avoid data about one subject being added to events pertaining to another subject, create two subject instances and switch between them using\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Tracker.set_subject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from snowplow_tracker import Subject, Emitter, Tracker\n\n# Create a simple Emitter which will log events to http://d3rkrsqld9gmqf.cloudfront.net/i\ne = Emitter("d3rkrsqld9gmqf.cloudfront.net")\n\n# Create a Tracker instance\nt = Tracker(emitters=e, namespace="cf", app_id="CF63A")\n\n# Create a Subject corresponding to a pc user\ns1 = Subject()\n\n# Set some data for that user\ns1.set_platform("pc")\ns1.set_user_id("0a78f2867de")\n\n# Set s1 as the tracker subject\n# All events fired will have the information we set about s1 attached\nt.set_subject(s1)\n\n# Track user s1 viewing a page\nt.track_page_view("http://www.example.com")\n\n# Create another Subject instance corresponding to a mobile user\ns2 = Subject()\n\n# All methods of the Subject class return the Subject instance so methods can be chained:\ns2.set_platform("mob").set_user_id("0b08f8be3f1")\n\n# Change the tracker subject from s1 to s2\n# All events fired will have instead have information we set about s2 attached\nt.set_subject(s2)\n\n# Track user s2 viewing a page\nt.track_page_view("http://www.example.com")\n\n# Switch back to s1 and track a structured event, this time using method chaining:\nt.set_subject(s1).track_struct_event("Ecomm", "add-to-basket", "dog-skateboarding-video", "hd", 13.99)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"*","*","New in v0.9.0"))),(0,o.kt)("p",null,"Since version 0.9.0, it is now possible to set the subject per event, instead of having to mutate the Tracker's subject. This enables a fine-grained control of the information you may want to add during the user journeys. It also makes the tracking of events idempotent even for multi-threaded applications, since it avoids mutating a shared state. The Tracker-level subject will only be used for events that don't specify an event subject."),(0,o.kt)("p",null,"You can specify an ",(0,o.kt)("inlineCode",{parentName:"p"},"event_subject")," in all track methods. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from snowplow_tracker import Emitter, Tracker, Subject\n\ne = Emitter("0.0.0.0", port=9090)\ndefault_subject = Subject().set_platform("srv")\nt = Tracker([e], s) \n# at this point the Tracker\'s subject is the default_subject. \n# The default_subject will be used in cases where an event_subject is not provided\n\n# specifying event_subject - supported by all track methods\nevSubject = Subject().set_platform("srv").set_user_id("tester")\nt.track_page_view("www.example.com", event_subject=evSubject)\n\nt.track_add_to_cart("sku1234", 1, event_subject=Subject().set_user_id("Bob"))\n')))}u.isMDXComponent=!0}}]);