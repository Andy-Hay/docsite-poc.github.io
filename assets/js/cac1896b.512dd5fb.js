"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[33623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=i,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"Initialization",date:"2020-12-02",sidebar_position:10},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/initialization/index",id:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/initialization/index",title:"Initialization",description:"Assuming you have completed the\xa0Scala Tracker Setup, you are ready to initialize the Scala Tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/initialization/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/initialization",slug:"/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/initialization/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/initialization/",draft:!1,tags:[],version:"current",lastUpdatedAt:1659254934,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:10,frontMatter:{title:"Initialization",date:"2020-12-02",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2/"},next:{title:"Sending events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/sending-events/"}},c={},s=[{value:"Emitters",id:"emitters",level:2},{value:"Http4s Emitter",id:"http4s-emitter",level:3},{value:"ID Emitters",id:"id-emitters",level:3},{value:"Subject",id:"subject",level:2},{value:"Buffer Configuration",id:"buffer-configuration",level:2},{value:"Retry Policies",id:"retry-policies",level:2},{value:"Event Queue Policy",id:"event-queue-policy",level:2},{value:"Global contexts",id:"global-contexts",level:2},{value:"EC2 Context",id:"ec2-context",level:4},{value:"Google Compute Engine Metadata context",id:"google-compute-engine-metadata-context",level:4},{value:"Callbacks",id:"callbacks",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Assuming you have completed the\xa0Scala Tracker Setup, you are ready to initialize the Scala Tracker."),(0,i.kt)("h2",{id:"emitters"},"Emitters"),(0,i.kt)("p",null,"Each tracker instance must be initialized with an Emitter which is responsible for firing events to a Collector. We offer two different modules of emitter: the http4s-emitters and the id-emitters"),(0,i.kt)("h3",{id:"http4s-emitter"},"Http4s Emitter"),(0,i.kt)("p",null,"Backed by a ",(0,i.kt)("a",{parentName:"p",href:"https://http4s.org/"},"Http4s")," client, this emitter captures actions in the context of a functional effect type, such as a cats IO, ZIO or Monix Task. This is the recommended emitter if you are familiar with functional programming and the cats ecosystem of type classes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import org.http4s.client.blaze.BlazeClientBuilder\nimport com.snowplowanalytics.snowplow.scalatracker.Tracker\nimport com.snowplowanalytics.snowplow.scalatracker.Emitter.EndpointParams\nimport com.snowplowanalytics.snowplow.scalatracker.emitters.http4s.Http4sEmitter\nimport scala.concurrent.ExecutionContext\nimport cats.data.NonEmptyList\nimport cats.implicits._\nimport cats.effect.{ContextShift, IO, Timer}\n\nimplicit val cs: ContextShift[IO] = IO.contextShift(ExecutionContext.global)\nimplicit val timer: Timer[IO]     = IO.timer(ExecutionContext.global)\n\nval resource = for {\n  client   <- BlazeClientBuilder[IO](ExecutionContext.global).resource\n  emitter1 <- Http4sEmitter.build[IO](EndpointParams("mycollector.com"), client)\n  emitter2 <- Http4sEmitter.build[IO](EndpointParams("myothercollector.com", port = Some(8080)), client)\n} yield new Tracker(NonEmptyList.of(emitter1, emitter2), "mytrackername", "myapplicationid")\n\nresource.use { tracker =>\n  // Use the tracker inside this block to initialize and run your application\n  MyApp.run(tracker)\n}\n')),(0,i.kt)("p",null,"The above code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an implicit ",(0,i.kt)("inlineCode",{parentName:"li"},"Timer")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"ContextShift"),", which are required for bringing a ",(0,i.kt)("inlineCode",{parentName:"li"},"Concurrent[IO]")," into implicit scope"),(0,i.kt)("li",{parentName:"ul"},"Creates a Http4s client from the BlazeClientBuilder. Http4s offers other variants of the client, but Blaze is the recommended default choice."),(0,i.kt)("li",{parentName:"ul"},"Creates an emitter ",(0,i.kt)("inlineCode",{parentName:"li"},"emitter1"),' which sends events to "mycollector.com" on the default port 80'),(0,i.kt)("li",{parentName:"ul"},"Creates a second emitter ",(0,i.kt)("inlineCode",{parentName:"li"},"emitter2")," which sends events to \u201cmyothercollector.com\u201d on port 8080"),(0,i.kt)("li",{parentName:"ul"},"Creates a tracker which can be used to send events to all emitters")),(0,i.kt)("p",null,"Your application might then use the tracker by flatMapping over the functional effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'for {\n  _ <- tracker.trackPageView("http://example.com")\n  _ <- tracker.trackTransaction("order1234", 42.0)\n} yield ()\n')),(0,i.kt)("h3",{id:"id-emitters"},"ID Emitters"),(0,i.kt)("p",null,'The emitters in the "id" module have a simpler developer interface, because return types are not wrapped in functional events. Use these emitters if your application code is not using any other typeclasses from the cats ecosystem.'),(0,i.kt)("p",null,"The above code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates a non-blocking emitter ",(0,i.kt)("inlineCode",{parentName:"li"},"emitter1"),' which sends events to "mycollector.com" on the default port 80'),(0,i.kt)("li",{parentName:"ul"},"Creates a blocking emitter ",(0,i.kt)("inlineCode",{parentName:"li"},"emitter2")," which sends events to \u201cmyothercollector.com\u201d on port 8080"),(0,i.kt)("li",{parentName:"ul"},"Creates a tracker which can be used to send events to all emitters")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import scala.concurrent.ExecutionContext.Implicits.global\n\nimport com.snowplowanalytics.snowplow.scalatracker.idimplicits._\nimport com.snowplowanalytics.snowplow.scalatracker.Tracker\nimport com.snowplowanalytics.snowplow.scalatracker.Emitter.EndpointParams\nimport com.snowplowanalytics.snowplow.scalatracker.emitters.id.{AsyncEmitter, SyncEmitter}\nimport cats.data.NonEmptyList\n\nval emitter1 = AsyncEmitter.createAndStart(EndpointParams("mycollector.com"))\nval emitter2 = SyncEmitter(EndpointParams("myothercollector.com", port = Some(8080)))\nval tracker = new Tracker(NonEmptyList.of(emitter1, emitter2), "mytrackername", "myapplicationid")\n')),(0,i.kt)("p",null,"When using this emitter, the methods on the tracker all return ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit"),", so there is no requirement to flatMap over effect types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'tracker.trackPageView("http://example.com") // returns Unit\ntracker.trackTransaction("order1234", 42.0) // returns Unit\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SyncEmitter")," blocks the whole thread when it sends events to the collector. The ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncEmitter")," sends requests asynchronously from the tracker's main thread of execution, but in doing so it blocks a thread on the provided execution for each http request. The blocking calls are wrapped in scala's ",(0,i.kt)("a",{parentName:"p",href:"https://www.scala-lang.org/api/current/scala/concurrent/index.html#blocking%5BT%5D(body:=%3ET):T"},"blocking construct"),", which is respected by the global execution context."),(0,i.kt)("h2",{id:"subject"},"Subject"),(0,i.kt)("p",null,"You can configure a subject with extra data and attach it to the tracker so that the data will be attached to every event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'val subject = new Subject()\n  .setUserId("user-00035")\n  .setPlatform(Desktop)\nval tracker = Tracker(emitters, ns, appId).setSubject(subject)\n')),(0,i.kt)("p",null,"Alternatively, you can set the subject for each event individually."),(0,i.kt)("h2",{id:"buffer-configuration"},"Buffer Configuration"),(0,i.kt)("p",null,"Emitters use a buffer, so they can send larger payloads comprising several events, instead of sending each event immediately. You can choose the behaviour of your emitter's buffering by passing in a ",(0,i.kt)("inlineCode",{parentName:"p"},"BufferConfig")," during initialisation. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"val emitter = Http4sEmitter.build(endpoint, bufferConfig = PayloadSize(40000))\n")),(0,i.kt)("p",null,"The available configs are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EventsCardinality(size: Int)")," Configures the emitter to buffer events and send batched payloads comprising a fixed number of events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PayloadSize(bytes: Int)")," Configures the emitter to buffer events and send batched payloads of a minimum size in bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NoBuffering")," Configures the emitter to send events immediately to the collector, without buffering for larger batches")),(0,i.kt)("h2",{id:"retry-policies"},"Retry Policies"),(0,i.kt)("p",null,"Emitters can be configured to retry sending events to the collector if the initial attempt fails. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"val emitter = Http4sEmitter.build(endpoint, retryPolicy = MaxAttempts(10))\n")),(0,i.kt)("p",null,"The available policies are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RetryForever")," A RetryPolicy with no cap on maximum of attempts to send an event to the collector. This policy might appear attractive where it is critical to avoid data loss because it never deliberately drops events. However, it could cause a backlog of events in the buffered queue if the collector is unavailable for too long. This RetryPolicy could be paired with an ",(0,i.kt)("inlineCode",{parentName:"li"},"EventQueuePolicy")," that manages the behaviour of a large backlog."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MaxAttempts(max: Int)")," A RetryPolicy which drops events after failing to contact the collector within a fixed number of attempts. This policy can smooth over short outages of connection to the collector. Events will be dropped only if the collector is unreachable for a relatively long span of time. Dropping events can be a safety mechanism against a growing backlog of unsent events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NoRetry")," A RetryPolicy that drops events immediately after a failed attempt to send to the collector.")),(0,i.kt)("h2",{id:"event-queue-policy"},"Event Queue Policy"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"EventQueuePolicy")," becomes important when the queue of pending events grows to an unexpectedly large number; for example, if the collector is unreachable for a long period of time"),(0,i.kt)("p",null,"Picking an EventQueuePolicy is an opportunity to protect against excessive heap usage by limiting the maximum size of the queue"),(0,i.kt)("p",null,"An EventQueuePolicy can be paired with an appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"RetryPolicy"),", which controls dropping events when they cannot be sent"),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"val emitter = new Http4sEmitter(endpoint, queuePolicy = IgnoreWhenFull(100))\n")),(0,i.kt)("p",null,"The available policies are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnboundedQueue"),". An ",(0,i.kt)("inlineCode",{parentName:"li"},"EventQueuePolicy")," with no upper bound on the number pending events in the emitter's queue. This policy never deliberately drops events, but it comes at the expense of potentially high heap usage if the collector is unavailable for a long period of time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BlockwhenFull(limit: Int)"),". An ",(0,i.kt)("inlineCode",{parentName:"li"},"EventQueuePolicy")," that blocks the tracker's thread until the queue of pending events falls below a threshold. This policy never deliberately drops events, but it comes at the expense of blocking threads if the collector is unavailable for long period of time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IgnoreWhenFull(limit: Int)"),". An ",(0,i.kt)("inlineCode",{parentName:"li"},"EventQueuePolicy")," that silently drops new events when the queue of pending events exceeds a threshold."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ErrorWhenFull(limit: Int)"),". An ",(0,i.kt)("inlineCode",{parentName:"li"},"EventQueuePolicy")," that raises an exception when the queue of pending events exceeds a threshold.")),(0,i.kt)("h2",{id:"global-contexts"},"Global contexts"),(0,i.kt)("p",null,"You can configure your tracker to add a context to every event sent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"val tracker = Tracker(emitters, namespace, appId).addContext(selfDescribingJson)\n")),(0,i.kt)("p",null,"There is also syntax for adding EC2 or GCE contexts automatically:"),(0,i.kt)("h4",{id:"ec2-context"},"EC2 Context"),(0,i.kt)("p",null,"Amazon\xa0",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"Elastic Cloud"),"\xa0can provide basic information about instance running your app. You can add this informational as additional custom context to all sent events by enabling it in Tracker after initializaiton of your tracker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import com.snowplowanalytics.snowplow.scalatracker.metadata._\nval tracker = Tracker(emitters, ns, appId).enableEc2Context()\n")),(0,i.kt)("h4",{id:"google-compute-engine-metadata-context"},"Google Compute Engine Metadata context"),(0,i.kt)("p",null,"Google ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute"},"Cloud Compute Engine")," can provide basic information about instance running your app. You can add this informational as additional custom context to all sent events by enabling it in Tracker after initializaiton of your tracker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import com.snowplowanalytics.snowplow.scalatracker.metadata._\nval tracker = Tracker(emitters, ns, appId).enableGceContext()\n")),(0,i.kt)("p",null,"This will add ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/152c90a72d5888460985ea43605afb5252180b10/schemas/com.google.cloud.gce/instance_metadata/jsonschema/1-0-0"},(0,i.kt)("inlineCode",{parentName:"a"},"iglu:com.google.cloud.gce/instance_metadata/jsonschema/1-0-0")),"\xa0context to all your events"),(0,i.kt)("h2",{id:"callbacks"},"Callbacks"),(0,i.kt)("p",null,"All emitters supplied with Scala Tracker support callbacks invoked after every sent event (or batch of events) whether it was successful or not. This feature particularly useful for checking collector unavailability and tracker debugging."),(0,i.kt)("p",null,"Callbacks should have following signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type Callback = (Emitter.EndpointParams, Emitter.Request, Emitter.Result) => Unit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EndpointParams"),"\xa0is collector configuration attached to emitter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Request"),"\xa0is raw collector's payload, which can be either\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),"\xa0and holding number of undertaken attempts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Result"),"\xa0is processed collector's response or failure reason. You'll want to pattern-match it to either no-op or notify DevOps about non-working collector")),(0,i.kt)("p",null,"To add a callback to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncBatchEmitter"),"\xa0you can use following approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import com.snowplowanalytics.snowplow.scalatracker.Emitter._\n\ndef emitterCallback(params: EndpointParams, req: Request, res: Result): Unit = {\n  res match {\n    case Result.Success(_) => ()\n    case Result.Failure(code) => \n      devopsIncident(s"Scala Tracker got unexpected HTTP code $code from ${params.getUri}")\n    case Result.TrackerFailure(exception) => \n      devopsIncident(s"Scala Tracker failed to reach ${params.getUri} with following exception $exception after ${req.attempt} attempt")\n    case Result.RetriesExceeded(failure) =>\n      devopsIncident(s"Scala Tracker has stopped trying to deliver payload after following failure: $failure")\n      savePayload(req)      // can be investigated and sent afterwards\n  }\n}\n\nval emitter = AsyncEmitter.createAndStart(endpointParams, callback = Some(emitterCallback))\n')),(0,i.kt)("p",null,"The async emitter will perform callbacks asynchronously in its\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutionContext"),"."))}m.isMDXComponent=!0}}]);