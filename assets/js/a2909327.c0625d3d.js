"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[96445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"Tutorial: User engagement",date:"2020-10-12",sidebar_position:70},a=void 0,l={unversionedId:"migrated/try-snowplow/recipes/recipe-user-engagement/index",id:"migrated/try-snowplow/recipes/recipe-user-engagement/index",title:"Tutorial: User engagement",description:"Introduction",source:"@site/docs/migrated/try-snowplow/recipes/recipe-user-engagement/index.md",sourceDirName:"migrated/try-snowplow/recipes/recipe-user-engagement",slug:"/migrated/try-snowplow/recipes/recipe-user-engagement/",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/recipes/recipe-user-engagement/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:70,frontMatter:{title:"Tutorial: User engagement",date:"2020-10-12",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Single customer view",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/recipes/recipe-single-customer-view/"},next:{title:"Tutorial: Understanding bad data",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/recipes/recipe-understanding-bad-data/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"What you&#39;ll be doing",id:"what-youll-be-doing",level:2},{value:"Implement a custom user ID (optional)",id:"implement-a-custom-user-id-optional",level:2},{value:"Modeling the data you&#39;ve collected",id:"modeling-the-data-youve-collected",level:2},{value:"What does the model do?",id:"what-does-the-model-do",level:4},{value:"First generate the table:",id:"first-generate-the-table",level:4},{value:"And then view it:",id:"and-then-view-it",level:4},{value:"Let&#39;s break down what we&#39;ve done",id:"lets-break-down-what-weve-done",level:2},{value:"What you might want to do next",id:"what-you-might-want-to-do-next",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Deep insights into how your customers interact with you across platforms over time enable you to deliver excellent customer experiences. While sessions are a great place to start understanding how your site is performing, only by looking at the entire customer journey you get a true understanding of who your users are, how they engage with you and how you can improve their experience."),(0,r.kt)("p",null,"There are two key steps in understanding user engagement:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Capture their behaviour in granular detail, and aggregate that behaviour into an easily consumable format."),(0,r.kt)("li",{parentName:"ul"},"Consistently identify users across platforms to ensure you are seeing the full picture.")),(0,r.kt)("p",null,"This recipe will focus on capturing and aggregating user behaviour. You might also want to take a look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/try-snowplow/recipes/recipe-single-customer-view/"},"our single customer view recipe")," that tackles user stitching more specifically."),(0,r.kt)("h2",{id:"what-youll-be-doing"},"What you'll be doing"),(0,r.kt)("p",null,"You have already set up Snowplow\u2019s out of the box web tracking by instrumenting the Javascript Tracker in your application. This includes tracking ",(0,r.kt)("inlineCode",{parentName:"p"},"page_view")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page_ping")," events."),(0,r.kt)("p",null,"With all web events the Snowplow JavaScript tracker captures the following user identifiers automatically:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"domain_userid")),(0,r.kt)("td",null,"client side cookie ID set against the domain the tracking is on")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"network_userid")),(0,r.kt)("td",null,"server side cookie ID set against the collector domain")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_ipaddress")),(0,r.kt)("td",null,"the user\u2019s IP address")))),(0,r.kt)("p",null,"Please note that in Try Snowplow, these fields (as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain_sessionid"),") are being hashed with Snowplow's ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/"},"PII enrichment")," to protect user privacy. With Snowplow BDP, you are able to configure this enrichment to hash (or not hash) any number of out of the box or custom fields."),(0,r.kt)("p",null,"Additionally, Snowplow allows you to specify a custom user ID, which we'll be adding in this recipe. We'll then build a user engagement table to explore how you can develop a better understanding of how your users engage with you over time."),(0,r.kt)("h2",{id:"implement-a-custom-user-id-optional"},"Implement a custom user ID (optional)"),(0,r.kt)("p",null,"Adding a custom user ID with the Snowplow Javascript Tracker is easy. You'll simply add this line to your out of the box tracking:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"window.snowplow('setUserId', \"example_user_id\");\n")),(0,r.kt)("p",null,"If you are using Google Tag Manager, you can add the variable like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"window.snowplow('setUserId', \"{{example_user_id_variable}}\");\n")),(0,r.kt)("p",null,"Make sure you add this method before you start tracking events, i.e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"window.snowplow('setUserId', \"example_user_id\");\nwindow.snowplow('enableActivityTracking', { minimumVisitLength: 10, heartbeatDelay: 10 });\nwindow.snowplow('enableLinkClickTracking');\nwindow.snowplow('trackPageView');\nwindow.snowplow('enableFormTracking');\n")),(0,r.kt)("h2",{id:"modeling-the-data-youve-collected"},"Modeling the data you've collected"),(0,r.kt)("h4",{id:"what-does-the-model-do"},"What does the model do?"),(0,r.kt)("p",null,"Aggregating the user behaviour data you have collected into a table with one row per user makes it much easier to understand how your customers are engaging with your website."),(0,r.kt)("p",null,"The following SQL creates a table of one row per user (as identified by one of the Snowplow cookie IDs), with additional user information as well as engagement measures including number of page views and sessions, total time engaged, etc."),(0,r.kt)("p",null,"Once you have collected some data with your new tracking you can run the following two queries in your tool of choice."),(0,r.kt)("h4",{id:"first-generate-the-table"},"First generate the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE derived.user_engagement AS(\n\n    SELECT\n        -- user information\n        ev.domain_userid,\n        LAST_VALUE(ev.network_userid) OVER (PARTITION BY ev.domain_userid ORDER BY ev.derived_tstamp) AS network_userid,\n        LAST_VALUE(ev.user_id) OVER (PARTITION BY ev.domain_userid ORDER BY ev.derived_tstamp) AS user_id,\n        ev.user_ipaddress AS ip_address, \n        ev.geo_country AS country, -- this field will be null as we cannot enable MaxMind geo data in the Try Snowplow experience due to CCPA regulation\n        ev.geo_city AS city, -- this field will be null as we cannot enable MaxMind geo data in the Try Snowplow experience due to CCPA regulation\n        ua.useragent_family AS browser,\n        ua.os_family AS operating_system,\n\n        -- user engagement\n        MIN(derived_tstamp) AS first_interaction,\n        MAX(derived_tstamp) AS last_interaction,\n        10*SUM(CASE WHEN ev.event_name = 'page_ping' THEN 1 ELSE 0 END) AS total_time_engaged_in_s,\n        COUNT(DISTINCT ev.domain_sessionid) AS sessions,\n        (10*SUM(CASE WHEN ev.event_name = 'page_ping' THEN 1 ELSE 0 END))/(COUNT(DISTINCT ev.domain_sessionid)) AS avg_time_engaged_in_s_per_session,\n        SUM(CASE WHEN ev.event_name = 'page_view' THEN 1 ELSE 0 END) AS page_views,\n        SUM(CASE WHEN ev.event_name = 'link_click' THEN 1 ELSE 0 END) AS link_clicks\n\n    FROM atomic.events AS ev\n    INNER JOIN atomic.com_snowplowanalytics_snowplow_ua_parser_context_1 AS ua\n        ON ev.event_id = ua.root_id AND ev.collector_tstamp = ua.root_tstamp\n\n    WHERE ev.domain_userid IS NOT NULL\n    GROUP BY 1,4,5,6,7,8, ev.network_userid, ev.user_id, ev.derived_tstamp\n\n);\n")),(0,r.kt)("h4",{id:"and-then-view-it"},"And then view it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT * FROM derived.user_engagement;\n")),(0,r.kt)("h2",{id:"lets-break-down-what-weve-done"},"Let's break down what we've done"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have learnt what user identifiers Snowplow tracks out of the box, and how you can add a custom user ID to Snowplow web events."),(0,r.kt)("li",{parentName:"ul"},"You have created a simple user engagement table that aggregates user activity into an easily queryable format. This allows you to better understand how your users are interacting with your site.")),(0,r.kt)("h2",{id:"what-you-might-want-to-do-next"},"What you might want to do next"),(0,r.kt)("p",null,"This recipe covers a really simple example of aggregating user engagement based on Snowplow's out of the box events and the custom user ID only. Next, you might want to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build a user stitching table to make sure you are including all user activity correctly based on the different identifiers you observe across platforms. You can explore Snowplow's approach to user stitching in ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/try-snowplow/recipes/recipe-single-customer-view/"},"our single customer view recipe"),"."),(0,r.kt)("li",{parentName:"ul"},"Instrument additional events to better understand how your users are engaging with you."),(0,r.kt)("li",{parentName:"ul"},"Start to think about how you might use user attributes and user behaviour to segment your user base. Segmentation is the first step towards personalizing user experience.")))}c.isMDXComponent=!0}}]);