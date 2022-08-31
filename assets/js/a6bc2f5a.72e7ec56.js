"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[62320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,w=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?o.createElement(w,s(s({ref:t},u),{},{components:n})):o.createElement(w,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"IAM permissions for operating Snowplow",date:"2020-11-24",sidebar_position:80},s=void 0,a={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/index",title:"IAM permissions for operating Snowplow",description:'These are instructions for setting up the IAM permissions for the "user(s)" that "operates" Snowplow; in practice this is the user associated with the credentials that should be used in the EmrEtlRunner and storage config files.',source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/",draft:!1,tags:[],version:"current",lastUpdatedAt:1661950255,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:80,frontMatter:{title:"IAM permissions for operating Snowplow",date:"2020-11-24",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"IAM permissions for installing Snowplow",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/"},next:{title:"The Snowplow Collector on AWS",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/"}},l={},p=[{value:"Setup the IAM group",id:"setup-the-iam-group",level:2},{value:"Initial group configuration",id:"initial-group-configuration",level:3},{value:"Set the permissions for the group",id:"set-the-permissions-for-the-group",level:2},{value:"Running Kinesis Applications",id:"running-kinesis-applications",level:3},{value:"Create a new user",id:"create-a-new-user",level:2},{value:"Add the new user to your new group",id:"add-the-new-user-to-your-new-group",level:2},{value:"Update the EmrEtlRunner config files with the new credentials",id:"update-the-emretlrunner-config-files-with-the-new-credentials",level:2},{value:"Delete the user created to setup Snowplow",id:"delete-the-user-created-to-setup-snowplow",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'These are instructions for setting up the IAM permissions for the "user(s)" that "operates" Snowplow; in practice this is the user associated with the credentials that should be used in the EmrEtlRunner and storage config files.'),(0,r.kt)("p",null,"The permissions represent the minimum required to keep the Snowplow data pipeline running: this is best practice, so that if a hacker manages to compromise the server with EmrEtlRunner and storage configs on it (so gain access to these credentials), they will have only limited access to your AWS resources."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disclaimer: Snowplow Analytics Ltd will not be liable for any problems caused by the full or partial implementation of these instructions on your Amazon Web Services account. If in doubt, please consult an independent AWS security expert.")),(0,r.kt)("h2",{id:"setup-the-iam-group"},"Setup the IAM group"),(0,r.kt)("h3",{id:"initial-group-configuration"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Setup-IAM-permissions-for-operating-Snowplow#initial-group-configuration"}),"Initial group configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First click on the IAM icon on the AWS dashboard:"),(0,r.kt)("li",{parentName:"ul"},"Click on the\xa0",(0,r.kt)("em",{parentName:"li"},"Create a New Group of Users"),"\xa0button"),(0,r.kt)("li",{parentName:"ul"},"Enter a\xa0",(0,r.kt)("em",{parentName:"li"},"Group Name"),"\xa0of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"snowplow-data-pipeline")," and click ",(0,r.kt)("em",{parentName:"li"},"Continue"))),(0,r.kt)("h2",{id:"set-the-permissions-for-the-group"},"Set the permissions for the group"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose the\xa0",(0,r.kt)("em",{parentName:"li"},"Custom Policy"),"\xa0option and click\xa0",(0,r.kt)("em",{parentName:"li"},"Select")),(0,r.kt)("li",{parentName:"ul"},"Give it a\xa0",(0,r.kt)("em",{parentName:"li"},"Policy Name"),"\xa0of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"snowplow-policy-operate-datapipeline"))),(0,r.kt)("p",null,"We now need to create the Amazon policy document to define\xa0",(0,r.kt)("em",{parentName:"p"},"just"),"\xa0the user permissions required to run the Snowplow pipeline. An example permissions policy is given below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Action": [\n                "ec2:*",\n                "elasticbeanstalk:*",\n                "elasticmapreduce:*",\n                "s3:*",\n                "sns:*",\n                "iam:passrole",\n                "cloudformation:ListStackResources",\n                "cloudformation:DescribeStacks",\n                "autoscaling:DescribeAutoScalingGroups",\n                "redshift:DescribeClusters"\n            ],\n            "Resource": "*",\n            "Effect": "Allow"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Note that there should be opportunities to lock these permissions down further e.g.:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Place them on specific resources rather than\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"*")),(0,r.kt)("li",{parentName:"ol"},"Remove e.g.\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"sns"),"\xa0permissions if you are not using SNS to monitor your Snowplow infrastructure")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy and paste the JSON into the policy document field and click\xa0",(0,r.kt)("em",{parentName:"li"},"Continue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do not add an existing user"),". We want to create a new user with these permissions, who\xa0",(0,r.kt)("strong",{parentName:"li"},"only"),"\xa0has these permissions."),(0,r.kt)("li",{parentName:"ul"},"Review the final settings before pressing\xa0",(0,r.kt)("em",{parentName:"li"},"Continue"),"\xa0to complete the process. Your new group is now setup.")),(0,r.kt)("h3",{id:"running-kinesis-applications"},"Running Kinesis Applications"),(0,r.kt)("p",null,"Our Kinesis Applications are designed so that you can launch them all with IAM Roles so you will never have to store your AWS Access/Secret Keys on the instance itself. Lock down your permissions as far as possible, and remember that assigning permissions to specific instances of autoscaling groups is better than assigning them to users."),(0,r.kt)("h2",{id:"create-a-new-user"},"Create a new user"),(0,r.kt)("p",null,"Now that our group has been created, we need to add a new user to it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the IAM console, click on the\xa0",(0,r.kt)("em",{parentName:"li"},"Users"),"\xa0section on the left hand menu"),(0,r.kt)("li",{parentName:"ul"},"Click on the\xa0",(0,r.kt)("em",{parentName:"li"},"Create New Users"),"\xa0button:"),(0,r.kt)("li",{parentName:"ul"},"Give your new user a suitable name e.g.\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"snowplow-operator"),"."),(0,r.kt)("li",{parentName:"ul"},"Click\xa0",(0,r.kt)("em",{parentName:"li"},"Create"))),(0,r.kt)("p",null,"AWS gives you the chance to either show or download the credentials. Whichever you do, make sure you\xa0",(0,r.kt)("strong",{parentName:"p"},"store these credentials safely"),". You will need them in later in this guide."),(0,r.kt)("p",null,"Now close the window: your new user is setup."),(0,r.kt)("h2",{id:"add-the-new-user-to-your-new-group"},"Add the new user to your new group"),(0,r.kt)("p",null,"The user we have created has no permissions so we need to add them to the new group we created to give her those permissions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the\xa0",(0,r.kt)("em",{parentName:"li"},"Groups"),"\xa0section on the AWS console, and select the new group you created"),(0,r.kt)("li",{parentName:"ul"},"Click on the\xa0",(0,r.kt)("em",{parentName:"li"},"Add Users to Group"),"\xa0button"),(0,r.kt)("li",{parentName:"ul"},"The user now has the required permissions.")),(0,r.kt)("h2",{id:"update-the-emretlrunner-config-files-with-the-new-credentials"},"Update the EmrEtlRunner config files with the new credentials"),(0,r.kt)("p",null,"Now that you have setup your new user and given her the relevant permissions to run the Snowplow data pipeline, you need to take those credentials and use them instead of the existing credentials in your EmrEtlRunner config files."),(0,r.kt)("p",null,"Those files should be accessible on the server setup to run EmrEtlRunner. (Examples of those files can be found on the Snowplow repo\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/tree/master/3-enrich/emr-etl-runner/config"},"here"),"\xa0and\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/tree/master/4-storage/config"},"here"),".) Update the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},":access_key_id:"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},":secret_access_key:"),"\xa0fields with those from the new user in\xa0",(0,r.kt)("strong",{parentName:"p"},"both"),"\xa0files."),(0,r.kt)("h2",{id:"delete-the-user-created-to-setup-snowplow"},"Delete the user created to setup Snowplow"),(0,r.kt)("p",null,"Now that we have created a new user with just the permissions required to run the Snowplow data pipeline, and used her credentials in in the EmrEtlRunner config files, we can delete the user that we created to setup/install Snowplow originally."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the IAM console, go into the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"snowplow-setup"),"\xa0group you created when you created user credentials for the individual who setup Snowplow."),(0,r.kt)("li",{parentName:"ul"},"Select the user in that group e.g.\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"snowplow-setup"),"\xa0and click the\xa0",(0,r.kt)("em",{parentName:"li"},"Remove User from Group"),"\xa0link:"),(0,r.kt)("li",{parentName:"ul"},"Click\xa0",(0,r.kt)("em",{parentName:"li"},"Remove from Group"),"\xa0when AWS asks you to confirm.")),(0,r.kt)("p",null,"In the event that you need to update your Snowplow setup in the future, you can simply create a new user, fetch their credentials, then add them to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setup-snowplow"),"\xa0group to give them the relevant permissions."))}c.isMDXComponent=!0}}]);