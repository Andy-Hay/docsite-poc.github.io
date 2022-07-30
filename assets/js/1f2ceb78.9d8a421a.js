"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[19941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Installing Try Snowplow on AWS (old version)",date:"2020-11-23",sidebar_position:10},l=void 0,r={unversionedId:"migrated/try-snowplow/setting-up-your-pipeline/installing-try-snowplow-on-aws/index",id:"migrated/try-snowplow/setting-up-your-pipeline/installing-try-snowplow-on-aws/index",title:"Installing Try Snowplow on AWS (old version)",description:"Installation process",source:"@site/docs/migrated/try-snowplow/setting-up-your-pipeline/installing-try-snowplow-on-aws/index.md",sourceDirName:"migrated/try-snowplow/setting-up-your-pipeline/installing-try-snowplow-on-aws",slug:"/migrated/try-snowplow/setting-up-your-pipeline/installing-try-snowplow-on-aws/",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/setting-up-your-pipeline/installing-try-snowplow-on-aws/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Installing Try Snowplow on AWS (old version)",date:"2020-11-23",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"What is installed into my cloud? (old version)",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/setting-up-your-pipeline/what-is-installed-into-my-cloud/"},next:{title:"Shutting down Try Snowplow (old version)",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/shutting-down-your-pipeline/"}},s={},c=[{value:"Installation process",id:"installation-process",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Required IAM permissions",id:"required-iam-permissions",level:3},{value:"Installation steps",id:"installation-steps",level:2},{value:"Install the infrastructure",id:"install-the-infrastructure",level:3},{value:"During installation",id:"during-installation",level:3},{value:"Further security considerations",id:"further-security-considerations",level:2},{value:"Limited deployment privileges",id:"limited-deployment-privileges",level:4},{value:"Restricting access to the database",id:"restricting-access-to-the-database",level:4},{value:"As part of install",id:"as-part-of-install",level:5},{value:"Post-install",id:"post-install",level:5}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation-process"},"Installation process"),(0,i.kt)("p",null,"The installation process for Try Snowplow takes around 15 minutes and comprises the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign up to Try Snowplow"),(0,i.kt)("li",{parentName:"ol"},"Install the infrastructure into your cloud account"),(0,i.kt)("li",{parentName:"ol"},"Connect to your pipeline")),(0,i.kt)("p",null,"Security note"),(0,i.kt)("p",null,"Snowplow will never ask you to disclose your Amazon, Google or database credentials."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("h3",{id:"required-iam-permissions"},"Required IAM permissions"),(0,i.kt)("p",null,"Setting up Try Snowplow in your AWS account requires following IAM roles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cloudformation:CreateStack\ncloudformation:DescribeStackEvents\ncloudformation:DescribeStacks\ncloudformation:ListStacks\ncloudformation:GetTemplateSummary\nec2:AssociateRouteTable\nec2:AttachInternetGateway\nec2:AuthorizeSecurityGroupIngress\nec2:CreateInternetGateway\nec2:CreateRoute\nec2:CreateRouteTable\nec2:CreateSecurityGroup\nec2:CreateSubnet\nec2:CreateTags\nec2:CreateVpc\nec2:ModifySubnetAttribute\nec2:ModifyVpcAttribute\necs:CreateCluster\necs:CreateService\necs:DescribeClusters\necs:DescribeServices\necs:RegisterTaskDefinition\nec2:DescribeVpcs\nec2:DescribeAvailabilityZones\nec2:DescribeSecurityGroups\nec2:DescribeAccountAttributes\nec2:DescribeSubnets\nec2:DescribeRouteTables\nelasticloadbalancing:AddTags\nelasticloadbalancing:CreateLoadBalancerListeners\nelasticloadbalancing:CreateLoadBalancer\nelasticloadbalancing:CreateTargetGroup\nelasticloadbalancing:DescribeListeners\nelasticloadbalancing:DescribeLoadBalancers\nelasticloadbalancing:DescribeTargetGroups\nhealth:DescribeEventAggregates\niam:CreateRole\niam:GetRole\niam:GetRole\niam:GetRole\niam:GetRolePolicy\niam:PutRolePolicy\niam:PassRole\nrds:AddTagsToResource\nrds:CreateDBInstance\nrds:CreateDBParameterGroup\nrds:CreateDBSubnetGroup\nrds:DescribeDBInstances\nrds:DescribeDBSubnetGroups\nrds:DescribeEngineDefaultParameters\nrds:ModifyDBParameterGroup\n")),(0,i.kt)("h2",{id:"installation-steps"},"Installation steps"),(0,i.kt)("h3",{id:"install-the-infrastructure"},"Install the infrastructure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the Try Snowplow console, click on ",(0,i.kt)("em",{parentName:"li"},'"Install your Try Snowplow infrastructure"'),"."),(0,i.kt)("li",{parentName:"ul"},"Read the notes and then select either the ",(0,i.kt)("em",{parentName:"li"},'"Basic Installer"')," or the ",(0,i.kt)("em",{parentName:"li"},'"Advanced Installer"')," and launch the installer.")),(0,i.kt)("p",null,"What is the difference between the Basic and Advanced installers?"),(0,i.kt)("p",null,"The Basic Installer is the quickest and simplest installer and should be sufficient for most use cases. The Advanced Installer provides a couple of extra configuration options; allowing you to secure your database with an IP AllowList and to set an AWS Permissions Boundary for your install."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You will be taken to AWS console to deploy the components in your AWS account; at this point you may need to sign into AWS if you are not already signed in.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/01/Screenshot-2021-01-12-at-08.37.35.jpg?w=1024",alt:null})),(0,i.kt)("p",null,"You'll be taken to AWS Console to start install"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Most fields on the installation script are pre-filled, but you can",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"optionally edit the stack name, should you wish to"),(0,i.kt)("li",{parentName:"ul"},"set a login username for the database that will be created"),(0,i.kt)("li",{parentName:"ul"},"set a login password for the database that will be created"),(0,i.kt)("li",{parentName:"ul"},"set an IP allow list for database access ",(0,i.kt)("em",{parentName:"li"},"(advanced template only)")),(0,i.kt)("li",{parentName:"ul"},"set an AWS permission boundary ",(0,i.kt)("em",{parentName:"li"},"(advanced template only)")))),(0,i.kt)("li",{parentName:"ul"},"Check the boxes under ",(0,i.kt)("em",{parentName:"li"},'"Capabilities"')," to allow the creation of an IAM security role for pushing CloudWatch logs"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("em",{parentName:"li"},'"Create stack"')," to start the deployment of your Try Snowplow application")),(0,i.kt)("p",null,"You have just started deployment of Try Snowplow into your own Virtual Private Cloud environment."),(0,i.kt)("h3",{id:"during-installation"},"During installation"),(0,i.kt)("p",null,"This installation takes around 10 minutes to run. At this point you can close AWS console and you will receive an email from Try Snowplow once the deployment is complete."),(0,i.kt)("p",null,"Once the infrastructure is installed, the system will assign you a dedicated, secure ",(0,i.kt)("inlineCode",{parentName:"p"},".try-snowplow.com")," URL that you will use to track events. This can take a minute or two, in the meantime you can get started with tracking events."),(0,i.kt)("h2",{id:"further-security-considerations"},"Further security considerations"),(0,i.kt)("p",null,"Try Snowplow is designed to be secure by default, however if you wish to further tighten security you can take the following measures using"),(0,i.kt)("h4",{id:"limited-deployment-privileges"},"Limited deployment privileges"),(0,i.kt)("p",null,"Some organizations impose limited access policies by using AWS Permissions Boundary. If your organization has this setup you can specify the Permissions Boundary ARN during setup in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PermissionsBoundaryArn")," field."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Requires you to select the Advanced Install _option"),"._"),(0,i.kt)("h4",{id:"restricting-access-to-the-database"},"Restricting access to the database"),(0,i.kt)("p",null,"You can physically restrict access to your database to IPs matching a filter by editing the Security Groups definitions."),(0,i.kt)("h5",{id:"as-part-of-install"},"As part of install"),(0,i.kt)("p",null,"You can specify an IP address range to limit access to your database during install in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseAccessIPs")," field."),(0,i.kt)("h5",{id:"post-install"},"Post-install"),(0,i.kt)("p",null,"If you use the basic installer and later decide you wish to add this security layer you can do so by following these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/v2/home"},"EC2 Service in your AWS console account"),", making sure you are in the same region where you installed your Try Snowplow stack."),(0,i.kt)("li",{parentName:"ul"},"Go to Security Groups.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2020/10/Screen-Shot-2020-10-20-at-09.45.43.png?w=1024",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find and select the security group named ",(0,i.kt)("inlineCode",{parentName:"li"},"$snowplow-sg-db")," with the description ",(0,i.kt)("em",{parentName:"li"},'"Frontend Access to Database"')," (",(0,i.kt)("inlineCode",{parentName:"li"},"snowplow")," may also be your custom stack name if you provided one)."),(0,i.kt)("li",{parentName:"ul"},"In the panel that opens select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Inbound rules")," tab and click ",(0,i.kt)("em",{parentName:"li"},'"Edit inbound rules"'),"."),(0,i.kt)("li",{parentName:"ul"},"Remove the existing rule if it is no longer needed (ie. ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")," filter will allow for anyone with database credentials to initiate connection).")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2020/10/Screen-Shot-2020-10-20-at-09.45.56.png?w=1024",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In editor change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," value. There can be many rules applied to the same security group, so you can even set individual IP addresses in separate rules. Set a description for future reference."),(0,i.kt)("li",{parentName:"ul"},"Accept by clicking the ",(0,i.kt)("em",{parentName:"li"},'"Save rules"')," button.")),(0,i.kt)("p",null,"Traffic to your Try Snowplow pipeline will be dropped for a very brief period of time while the new rule is created."))}p.isMDXComponent=!0}}]);