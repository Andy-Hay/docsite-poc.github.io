"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[52648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,g=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Adjust",date:"2020-08-21",sidebar_position:160},o=void 0,d={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/adjust-webhook/index",id:"migrated/collecting-data/collecting-data-from-third-parties/adjust-webhook/index",title:"Adjust",description:"Intro",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/adjust-webhook/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/adjust-webhook",slug:"/migrated/collecting-data/collecting-data-from-third-parties/adjust-webhook/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/adjust-webhook/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660120719,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:160,frontMatter:{title:"Adjust",date:"2020-08-21",sidebar_position:160},sidebar:"tutorialSidebar",previous:{title:"ZenDesk",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-data-from-third-parties/zendesk/"},next:{title:"Enriching your data",permalink:"/docsite-poc.github.io/docs/migrated/enriching-your-data/"}},s={},l=[{value:"Intro",id:"intro",level:2},{value:"How the integration works: an overview",id:"how-the-integration-works-an-overview",level:2},{value:"Step-by-step guide",id:"step-by-step-guide",level:2},{value:"1. Setup the Adjust webhook",id:"1-setup-the-adjust-webhook",level:3},{value:"2. Create the corresponding jsonschema",id:"2-create-the-corresponding-jsonschema",level:3},{value:"3. Create the table in Redshift",id:"3-create-the-table-in-redshift",level:3},{value:"4. Create the correpsonding JSONpaths file",id:"4-create-the-correpsonding-jsonpaths-file",level:3},{value:"5. Extending the setup for reattribution events",id:"5-extending-the-setup-for-reattribution-events",level:3}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.adjust.com/"},"Adjust\xa036"),"\xa0provides a mobile attribution platform. It enables users to track what marketing channels drive mobile app installations."),(0,i.kt)("p",null,"Many Snowplow users who have mobile apps use Adjust to capture the sources (marketing channels) that drive app downloads. By integrating Adjust with Snowplow, it is straightforward to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Have your mobile attribution data (at the app installation event-level), with the rest of your event-level data, in Snowplow"),(0,i.kt)("li",{parentName:"ol"},"Join app installation data collected from Adjust, with other user event data collected through Snowplow from mobile, web or other platforms, in order to analyse the performance of those marketing channels and return on ad spend. This is typically used to drive future ad spend.")),(0,i.kt)("p",null,"Integrating Adjust with Snowplow is straightforward. In this guide we will walk through the process."),(0,i.kt)("h2",{id:"how-the-integration-works-an-overview"},"How the integration works: an overview"),(0,i.kt)("p",null,"The integration uses the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://docs.adjust.com/en/callbacks/"},"Adjust Callback\xa034"),". We will configure this to send an app install event to the Snowplow collector when an app is installed, with the attribution data attached. In addition, we will set this up to send a reattribution event every time this occurs in Adjust to Snowplow. Again, this will contain all the data we need to figure out what drove an earlier app installation."),(0,i.kt)("p",null,"On the Snowplow side, we will use the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Iglu-webhook-adapter"},"Iglu webhook adapter\xa027"),"\xa0to ensure that the event is correctly received and processed. We will create a schema for the event that matches the structure of the data sent from Adjust."),(0,i.kt)("p",null,"The guide is illustrative. One of the nice things about Adjust is that it gives you a huge amount of flexibility about what data you want to send into Snowplow and how. One of the great things about Snowplow is that it is flexible enough to work with very many structures of data, just so long as it knows the schema that the data adheres to. So there are lots of ways you can adapt the following setup. It should be a good start for most users however."),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),(0,i.kt)("h3",{id:"1-setup-the-adjust-webhook"},"1","."," Setup the Adjust webhook"),(0,i.kt)("p",null,"Log into Adjust and navigate to Settings -> Events screen in the dashboard. Hover over the install event, click the \u201cedit\u201d icon that appears and enter the following, substituting your own collector URL for\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"mycollector.mydomain.com"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://mycollector.mydomain.com/com.snowplowanalytics.iglu/v1?schema=iglu%3Acom.adjust.snowplow%2Finstall%2Fjsonschema%2F1-0-0&app_id={app_id}&app_name={app_name}&app_name_dashboard={app_name_dashboard}&store={store}&tracker={tracker}&tracker_name={tracker_name}&network_name={network_name}&campaign_name={campaign_name}&adgroup_name={adgroup_name}&creative_name={creative_name}&impression_based={impression_based}&is_organic={is_organic}&gclid={gclid}&rejection_reason={rejection_reason}&click_referer={click_referer}&click_attribution_window={click_attribution_window}&impression_attribution_window={impression_attribution_window}&reattribution_attribution_window={reattribution_attribution_window}&inactive_user_definition={inactive_user_definition}&adid={adid}&idfa={idfa}&android_id={android_id}&android_id_md5={android_id_md5}&mac_sha1={mac_sha1}&mac_md5={mac_md5}&idfa-android-id={idfa||android_id}&idfa-or-gps-adid={idfa||gps_adid}&idfa_md5={idfa_md5}&idfa_md5_hex={idfa_md5_hex}&idfv={idfv}&gps_adid={gps_adid}&gps_adid_md5={gps_adid_md5}&win_udid={win_udid}&win_hwid={win_hwid}&win_naid={win_naid}&win_adid={win_adid}&match_type={match_type}&reftag={reftag}&referrer={referrer}&user_agent={user_agent}&ip_address={ip_address}&click_time={click_time}&engagement_time={engagement_time}&installed_at={installed_at}&installed_at_hour={installed_at_hour}&created_at={created_at}&reattributed_at={reattributed_at}&connection_type={connection_type}&isp={isp}&city={city}&country={country}&language={language}&device_name={device_name}&device_type={device_type}&os_name={os_name}&api_level={api_level}&sdk_version={sdk_version}&os_version={os_version}&environment={environment}&tracking_enabled={tracking_enabled}&timezone={timezone}&fb_campaign_group_name={fb_campaign_group_name}&fb_campaign_group_id={fb_campaign_group_id}&fb_campaign_name={fb_campaign_name}&fb_campaign_id={fb_campaign_id}&fb_adgroup_name={fb_adgroup_name}&fb_adgroup_id={fb_adgroup_id}&tweet_id={tweet_id}&twitter_line_item_id={twitter_line_item_id}&label={label}\n")),(0,i.kt)("p",null,"We are collecting the data by adding key-value pairs to request in the format\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"data_point={data_point}"),". The first part of each pair is the name of the field in the collected event and it must match a property name in your schema. The second part, in curly braces, is a placeholder that Adjust replaces with an actual value before making the callback. For example,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"app_id={app_id}"),"\xa0will be transformed to something like\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"app_id=C013FJP3WF"),"."),(0,i.kt)("p",null,"In our example webhook setup above we\u2019re using the schema that is defined further down in this post, but you are a free to use any custom compatible schema. There is no requirement that the key in each key-value pair must match the spelling of the respective Adjust placeholder, so your schema can have properties with names that better match your own business logic, e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"adjust_tracker={tracker}"),"."),(0,i.kt)("p",null,"We have elected to grab\xa0",(0,i.kt)("em",{parentName:"p"},"all"),"\xa0the data that Adjust makes available with an install event (at the time of writing)."),(0,i.kt)("p",null,"For a complete list of data Adjust can send, see the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://partners.adjust.com/placeholders/"},"Adjust placeholder documentation\xa014"),"."),(0,i.kt)("p",null,"At the end of this post we\u2019ll describe how you can tailor your setup to grab just a subset."),(0,i.kt)("h3",{id:"2-create-the-corresponding-jsonschema"},"2","."," Create the corresponding jsonschema"),(0,i.kt)("p",null,"In order for Snowplow to process the data sent to the Iglu webhook, we need to schema it."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Since first publishing this guide, we\u2019ve added an Adjust\xa0",(0,i.kt)("inlineCode",{parentName:"em"},"install"),"\xa0event schema to our\xa0",(0,i.kt)("a",{parentName:"em",href:"https://github.com/snowplow/iglu-central"},"Iglu Central"),"\xa0schema repository. You can find it\xa0",(0,i.kt)("a",{parentName:"em",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.adjust/install/jsonschema/1-0-0"},"here\xa01"),". We recommend using that schema for out-of-the-box tracking of all the data points associated with an\xa0",(0,i.kt)("inlineCode",{parentName:"em"},"install"),"\xa0event (at the time the schema was written), rather than the example schema used further down. If you\u2019re using Redshift you might also find the\xa0",(0,i.kt)("a",{parentName:"em",href:"https://github.com/snowplow/iglu-central/blob/master/sql/com.adjust/install_1.sql"},"table definition\xa02"),"\xa0and\xa0",(0,i.kt)("a",{parentName:"em",href:"https://github.com/snowplow/iglu-central/blob/master/jsonpaths/com.adjust/install_1.json"},"JSONpaths file\xa02"),"\xa0from Iglu Central useful. For Snowflake and BigQuery users, the loader app in the pipeline will figure those out itself.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Refer to the rest of this guide to see how you can write your own custom schemas.")),(0,i.kt)("p",null,"Upload the following schema to your Iglu repo as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.adjust.snowplow/install/jsonschema/1-0-0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n  "description": "Schema for Adjust install event",\n  "self": {\n    "vendor": "com.adjust.snowplow",\n    "name": "install",\n    "format": "jsonschema",\n    "version": "1-0-0"\n  },\n\n  "type": "object",\n  "properties": {\n    "app_id": {\n      "type": "string"\n    },\n    "app_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "app_name_dashboard": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "store": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "tracker": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "tracker_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "network_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "campaign_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "adgroup_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "creative_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "impression_based": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "is_organic": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "gclid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "rejection_reason": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "click_referer": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "click_attribution_window": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "impression_attribution_window": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "reattribution_attribution_window": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "inactive_user_definition": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "adid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "idfa": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "android_id": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "android_id_md5": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "mac_sha1": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "mac_md5": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "idfa-android-id": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "idfa-or-gps-adid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "idfa_md5": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "idfa_md5_hex": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "idfv": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "gps_adid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "gps_adid_md5": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "win_udid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "win_hwid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "win_naid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "win_adid": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "match_type": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "reftag": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "referrer": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "user_agent": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "ip_address": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "click_time": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "engagement_time": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "installed_at": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "installed_at_hour": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "created_at": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "reattributed_at": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "connection_type": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "isp": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "city": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "country": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "language": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "device_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "device_type": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "os_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "api_level": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "sdk_version": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "os_version": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "environment": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "tracking_enabled": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "timezone": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "fb_campaign_group_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "fb_campaign_group_id": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "fb_campaign_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "fb_campaign_id": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "fb_adgroup_name": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "fb_adgroup_id": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "tweet_id": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "twitter_line_item_id": {\n      "type": "string",\n      "maxLength": 256\n    },\n    "label": {\n      "type": "string",\n      "maxLength": 256\n    }\n  },\n  "additionalProperties": true\n}\n')),(0,i.kt)("p",null,"We have included a field for each placeholder that we included in our Adjust callback. Although here we\u2019ve used the same spelling for property names as the placeholders, there is no requirement to do so in your own schema."),(0,i.kt)("h3",{id:"3-create-the-table-in-redshift"},"3","."," Create the table in Redshift"),(0,i.kt)("p",null,"Create a corresponding Redshift table for the schema. We recommend autogenerating this\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/schema-guru"},"Schema Guru\xa06"),", e.g. by executing the following in the root of your schema registry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ /path/to/schema-guru-0.6.2 ddl --with-json-paths schemas/com.adjust.snowplow/install\n")),(0,i.kt)("p",null,"Or with\xa0",(0,i.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/open-source/iglu/igluctl/"},"Igluctl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ /path/to/igluctl static generate --with-json-paths schemas/com.adjust.snowplow/install\n")),(0,i.kt)("p",null,"In our case this auto-generated the following table definition. (",(0,i.kt)("em",{parentName:"p"},"Please note that this example might be outdated. Since first publishing this guide, Redshift has introduced the more efficient ZSTD encoding for column compression, which we have adopted as standard in Igluctl."),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS atomic.com_adjust_snowplow_install_1 (\n    "schema_vendor"                    VARCHAR(128)  ENCODE RUNLENGTH NOT NULL,\n    "schema_name"                      VARCHAR(128)  ENCODE RUNLENGTH NOT NULL,\n    "schema_format"                    VARCHAR(128)  ENCODE RUNLENGTH NOT NULL,\n    "schema_version"                   VARCHAR(128)  ENCODE RUNLENGTH NOT NULL,\n    "root_id"                          CHAR(36)      ENCODE RAW       NOT NULL,\n    "root_tstamp"                      TIMESTAMP     ENCODE LZO       NOT NULL,\n    "ref_root"                         VARCHAR(255)  ENCODE RUNLENGTH NOT NULL,\n    "ref_tree"                         VARCHAR(1500) ENCODE RUNLENGTH NOT NULL,\n    "ref_parent"                       VARCHAR(255)  ENCODE RUNLENGTH NOT NULL,\n    "adgroup_name"                     VARCHAR(256)  ENCODE LZO,\n    "adid"                             VARCHAR(256)  ENCODE LZO,\n    "android_id"                       VARCHAR(256)  ENCODE LZO,\n    "android_id_md5"                   VARCHAR(256)  ENCODE LZO,\n    "api_level"                        VARCHAR(256)  ENCODE LZO,\n    "app_id"                           VARCHAR(4096) ENCODE LZO,\n    "app_name"                         VARCHAR(256)  ENCODE LZO,\n    "app_name_dashboard"               VARCHAR(256)  ENCODE LZO,\n    "campaign_name"                    VARCHAR(256)  ENCODE LZO,\n    "city"                             VARCHAR(256)  ENCODE LZO,\n    "click_attribution_window"         VARCHAR(256)  ENCODE LZO,\n    "click_referer"                    VARCHAR(256)  ENCODE LZO,\n    "click_time"                       VARCHAR(256)  ENCODE LZO,\n    "connection_type"                  VARCHAR(256)  ENCODE LZO,\n    "country"                          VARCHAR(256)  ENCODE LZO,\n    "created_at"                       VARCHAR(256)  ENCODE LZO,\n    "creative_name"                    VARCHAR(256)  ENCODE LZO,\n    "device_name"                      VARCHAR(256)  ENCODE LZO,\n    "device_type"                      VARCHAR(256)  ENCODE LZO,\n    "engagement_time"                  VARCHAR(256)  ENCODE LZO,\n    "environment"                      VARCHAR(256)  ENCODE LZO,\n    "fb_adgroup_id"                    VARCHAR(256)  ENCODE LZO,\n    "fb_adgroup_name"                  VARCHAR(256)  ENCODE LZO,\n    "fb_campaign_group_id"             VARCHAR(256)  ENCODE LZO,\n    "fb_campaign_group_name"           VARCHAR(256)  ENCODE LZO,\n    "fb_campaign_id"                   VARCHAR(256)  ENCODE LZO,\n    "fb_campaign_name"                 VARCHAR(256)  ENCODE LZO,\n    "gclid"                            VARCHAR(256)  ENCODE LZO,\n    "gps_adid"                         VARCHAR(256)  ENCODE LZO,\n    "gps_adid_md5"                     VARCHAR(256)  ENCODE LZO,\n    "idfa"                             VARCHAR(256)  ENCODE LZO,\n    "idfa_android_id"                  VARCHAR(256)  ENCODE LZO,\n    "idfa_or_gps_adid"                 VARCHAR(256)  ENCODE LZO,\n    "idfa_md5"                         VARCHAR(256)  ENCODE LZO,\n    "idfa_md5_hex"                     VARCHAR(256)  ENCODE LZO,\n    "idfv"                             VARCHAR(256)  ENCODE LZO,\n    "impression_attribution_window"    VARCHAR(256)  ENCODE LZO,\n    "impression_based"                 VARCHAR(256)  ENCODE LZO,\n    "inactive_user_definition"         VARCHAR(256)  ENCODE LZO,\n    "installed_at"                     VARCHAR(256)  ENCODE LZO,\n    "installed_at_hour"                VARCHAR(256)  ENCODE LZO,\n    "ip_address"                       VARCHAR(256)  ENCODE LZO,\n    "is_organic"                       VARCHAR(256)  ENCODE LZO,\n    "isp"                              VARCHAR(256)  ENCODE LZO,\n    "label"                            VARCHAR(256)  ENCODE LZO,\n    "language"                         VARCHAR(256)  ENCODE LZO,\n    "mac_md5"                          VARCHAR(256)  ENCODE LZO,\n    "mac_sha1"                         VARCHAR(256)  ENCODE LZO,\n    "match_type"                       VARCHAR(256)  ENCODE LZO,\n    "network_name"                     VARCHAR(256)  ENCODE LZO,\n    "os_name"                          VARCHAR(256)  ENCODE LZO,\n    "os_version"                       VARCHAR(256)  ENCODE LZO,\n    "reattributed_at"                  VARCHAR(256)  ENCODE LZO,\n    "reattribution_attribution_window" VARCHAR(256)  ENCODE LZO,\n    "referrer"                         VARCHAR(256)  ENCODE LZO,\n    "reftag"                           VARCHAR(256)  ENCODE LZO,\n    "rejection_reason"                 VARCHAR(256)  ENCODE LZO,\n    "sdk_version"                      VARCHAR(256)  ENCODE LZO,\n    "store"                            VARCHAR(256)  ENCODE LZO,\n    "timezone"                         VARCHAR(256)  ENCODE LZO,\n    "tracker"                          VARCHAR(256)  ENCODE LZO,\n    "tracker_name"                     VARCHAR(256)  ENCODE LZO,\n    "tracking_enabled"                 VARCHAR(256)  ENCODE LZO,\n    "tweet_id"                         VARCHAR(256)  ENCODE LZO,\n    "twitter_line_item_id"             VARCHAR(256)  ENCODE LZO,\n    "user_agent"                       VARCHAR(256)  ENCODE LZO,\n    "win_adid"                         VARCHAR(256)  ENCODE LZO,\n    "win_hwid"                         VARCHAR(256)  ENCODE LZO,\n    "win_naid"                         VARCHAR(256)  ENCODE LZO,\n    "win_udid"                         VARCHAR(256)  ENCODE LZO,\n    FOREIGN KEY (root_id) REFERENCES atomic.events(event_id)\n)\nDISTSTYLE KEY\nDISTKEY (root_id)\nSORTKEY (root_tstamp);\n\nCOMMENT ON TABLE com_adjust_snowplow_install_1 IS \'iglu:com.adjust.snowplow/install/jsonschema/1-0-0\';\n')),(0,i.kt)("h3",{id:"4-create-the-correpsonding-jsonpaths-file"},"4","."," Create the correpsonding JSONpaths file"),(0,i.kt)("p",null,"Finally add the following JSONpaths file to your jsonpaths folder (as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.adjust.snowplow/install_1.json"),"). Your JSONpaths file should have already been auto-generated using schema-guru or Igluctl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "jsonpaths": [\n        "$.schema.vendor",\n        "$.schema.name",\n        "$.schema.format",\n        "$.schema.version",\n        "$.hierarchy.rootId",\n        "$.hierarchy.rootTstamp",\n        "$.hierarchy.refRoot",\n        "$.hierarchy.refTree",\n        "$.hierarchy.refParent",\n        "$.data.adgroup_name",\n        "$.data.adid",\n        "$.data.android_id",\n        "$.data.android_id_md5",\n        "$.data.api_level",\n        "$.data.app_id",\n        "$.data.app_name",\n        "$.data.app_name_dashboard",\n        "$.data.campaign_name",\n        "$.data.city",\n        "$.data.click_attribution_window",\n        "$.data.click_referer",\n        "$.data.click_time",\n        "$.data.connection_type",\n        "$.data.country",\n        "$.data.created_at",\n        "$.data.creative_name",\n        "$.data.device_name",\n        "$.data.device_type",\n        "$.data.engagement_time",\n        "$.data.environment",\n        "$.data.fb_adgroup_id",\n        "$.data.fb_adgroup_name",\n        "$.data.fb_campaign_group_id",\n        "$.data.fb_campaign_group_name",\n        "$.data.fb_campaign_id",\n        "$.data.fb_campaign_name",\n        "$.data.gclid",\n        "$.data.gps_adid",\n        "$.data.gps_adid_md5",\n        "$.data.idfa",\n        "$.data.idfa-android-id",\n        "$.data.idfa-or-gps-adid",\n        "$.data.idfa_md5",\n        "$.data.idfa_md5_hex",\n        "$.data.idfv",\n        "$.data.impression_attribution_window",\n        "$.data.impression_based",\n        "$.data.inactive_user_definition",\n        "$.data.installed_at",\n        "$.data.installed_at_hour",\n        "$.data.ip_address",\n        "$.data.is_organic",\n        "$.data.isp",\n        "$.data.label",\n        "$.data.language",\n        "$.data.mac_md5",\n        "$.data.mac_sha1",\n        "$.data.match_type",\n        "$.data.network_name",\n        "$.data.os_name",\n        "$.data.os_version",\n        "$.data.reattributed_at",\n        "$.data.reattribution_attribution_window",\n        "$.data.referrer",\n        "$.data.reftag",\n        "$.data.rejection_reason",\n        "$.data.sdk_version",\n        "$.data.store",\n        "$.data.timezone",\n        "$.data.tracker",\n        "$.data.tracker_name",\n        "$.data.tracking_enabled",\n        "$.data.tweet_id",\n        "$.data.twitter_line_item_id",\n        "$.data.user_agent",\n        "$.data.win_adid",\n        "$.data.win_hwid",\n        "$.data.win_naid",\n        "$.data.win_udid"\n    ]\n}\n')),(0,i.kt)("h3",{id:"5-extending-the-setup-for-reattribution-events"},"5","."," Extending the setup for reattribution events"),(0,i.kt)("p",null,"You\u2019ve now done all that is necessary to log your Adjust installation events (with attribution data) directly into Snowplow. Read\xa0",(0,i.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/integrating-adjust-with-snowplow-to-add-mobile-attribution-data-to-the-rest-of-your-event-data-2-2/270"},"part 2"),"\xa0of our guide to find out how to extend the implementation to cover reattribution events and other Adjust events, as well as other ways to tailor the integration."))}c.isMDXComponent=!0}}]);