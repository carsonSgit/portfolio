interface CaseStudyLink {
	label: string;
	href: string;
}

interface CaseStudySeo {
	title?: string;
	description?: string;
	socialImage?: string;
}

interface CaseStudyVisual {
	src: string;
	alt: string;
	caption: string;
	aspectRatio?: number;
	source?: CaseStudyLink;
}

interface CaseStudySectionMedia {
	afterParagraph: number;
	items: [CaseStudyVisual] | [CaseStudyVisual, CaseStudyVisual];
}

interface CaseStudySection {
	id: string;
	title: string;
	heading?: string;
	paragraphs: string[];
	media?: CaseStudySectionMedia;
	callout?: CaseStudyCallout;
	sources?: CaseStudyLink[];
}

interface CaseStudyCallout {
	quote: string;
	attribution: string;
	source: CaseStudyLink;
	image: Pick<CaseStudyVisual, "src" | "alt">;
}

interface CaseStudyHighlight {
	label: string;
	value: string;
}

interface CaseStudyCover {
	src: string;
	tone: "light" | "dark";
}

interface CaseStudyPresentation {
	eyebrow?: string;
	cover?: CaseStudyCover;
	highlights?: CaseStudyHighlight[];
}

interface CaseStudyPeriod {
	start: string;
	end?: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	summary: string;
	projectType: string;
	period: CaseStudyPeriod;
	stack: string[];
	image?: string;
	sections: CaseStudySection[];
	links: CaseStudyLink[];
	publishedAt: string;
	updatedAt: string;
	seo?: CaseStudySeo;
	presentation?: CaseStudyPresentation;
}

const caseStudyEntries: CaseStudy[] = [
	{
		slug: "trademind",
		title: "TradeMind",
		summary:
			"I researched and built TradeMind's machine-learning model in a Jupyter notebook, using Kaggle stock data and lessons from AI Launch Lab's Winter 2024 R&D program.",
		projectType: "AI R&D program project",
		period: { start: "2024-02", end: "2024-04" },
		stack: [
			"Python",
			"Jupyter",
			"pandas",
			"scikit-learn",
			"FastAPI",
			"React",
			"Plotly",
		],
		presentation: {
			eyebrow: "AI Launch Lab, Dawson AI, Winter 2024",
			cover: { src: "/case-studies/trademind-cover.webp", tone: "dark" },
			highlights: [
				{
					label: "My focus",
					value: "Model research and development",
				},
				{
					label: "Model",
					value: "Quadratic regression",
				},
				{
					label: "Record",
					value: "Winter 2024 cohort listing",
				},
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				heading: "An AI research project in winter 2024",
				paragraphs: [
					"TradeMind was my project for AI Launch Lab's Winter 2024 R&D program, built with a team of five. The program ran from February 10 to April 5 and wrapped up with presentations at Dawson College.",
					"We wanted to see if historical stock data could give someone a second opinion when they're researching long-term investments, so TradeMind paired a fitted prediction model with a website where you could look at what it predicted.",
					"AI Launch Lab listed TradeMind with the rest of the cohort, next to projects in healthcare, education and environmental modelling. Dawson kept that same project-first format going in its later accelerator programs with AI Launch Lab and Mitacs.",
					"AI Launch Lab ran the program with Montreal NewTech, funded by the Government of Québec and in collaboration with District 3, IVADO, ConcordAI, Montréal InVivo, Korbit, V1 Studio and Concordia University. They're who gave me the chance to do this.",
				],
				media: {
					afterParagraph: 4,
					items: [
						{
							src: "/case-studies/trademind-launchlab-banner.webp",
							alt: "AI Launch Lab and Montreal NewTech R&D programs banner naming Québec as financial partner and District 3, IVADO, ConcordAI, Montréal InVivo, Korbit, V1 Studio and Concordia University as collaborators",
							caption: "The program's organizers, funder and collaborators.",
							source: {
								label: "AI Launch Lab",
								href: "https://launchlab.ai/winter-2024-rd-program/",
							},
						},
					],
				},
				sources: [
					{
						label: "Winter 2024 cohort",
						href: "https://launchlab.ai/winter-2024-rd-program/",
					},
					{
						label: "Team",
						href: "https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/frontend/trade-mind/src/pages/About.js",
					},
					{
						label: "Dawson program background",
						href: "https://www.dawsoncollege.qc.ca/ai/dawsonai-ai-launch-lab/",
					},
					{
						label: "Later AI Accelerator",
						href: "https://www.dawsoncollege.qc.ca/ai/aia-program",
					},
					{
						label: "Later program curriculum",
						href: "https://launchlab.ai/rd-program/",
					},
				],
			},
			{
				id: "contribution",
				title: "My contribution",
				heading: "Researching and building the machine-learning model",
				media: {
					afterParagraph: 3,
					items: [
						{
							src: "/case-studies/trademind-mobile.webp",
							alt: "Illustration of the TradeMind mobile menu opened by a toggle",
							caption: "The mobile menu moved from hover to a tap toggle.",
						},
						{
							src: "/case-studies/trademind-analytics.webp",
							alt: "Illustration of the ticker and forecast horizon controls",
							caption: "Pick a ticker and a one-to-five-year horizon.",
						},
					],
				},
				paragraphs: [
					"My piece was the model. I built it in a Jupyter notebook, pulled historical stock data from Kaggle, and dug through scikit-learn's models, putting what we were learning in the program to work.",
					"That meant the whole modelling process: picking the dataset, figuring out an approach, and implementing it. The notebook let me work right on top of the stock data and build the model the rest of the project ran on.",
					"Outside the model, I chipped in on the website too: the responsive navigation, the analytics styling, fixes for charts that resized badly or overflowed, and the project docs. That's what got the model's output in front of people through the team's web app.",
				],
				sources: [
					{
						label: "Research notebook",
						href: "https://colab.research.google.com/drive/1iF8vrqAI5z4uwKgJQ-MhEdLHXmqqIr4k",
					},
					{
						label: "Kaggle dataset",
						href: "https://www.kaggle.com/datasets/camnugent/sandp500",
					},
					{
						label: "Mobile menu",
						href: "https://github.com/carsonSgit/TradeMind/commit/9873b8873756900155400237e6f00a0a2067eabf",
					},
					{
						label: "Chart resizing",
						href: "https://github.com/carsonSgit/TradeMind/commit/27525e8d0aaccd641abf751aea676f91c3d9de70",
					},
					{
						label: "Chart overflow",
						href: "https://github.com/carsonSgit/TradeMind/commit/3cd875edf5939ed253392dc6c392be683f34188a",
					},
					{
						label: "Analytics styling",
						href: "https://github.com/carsonSgit/TradeMind/commit/be958d6317c1b2795c3b7905e807df11876cb709",
					},
					{
						label: "Dataset documentation",
						href: "https://github.com/carsonSgit/TradeMind/commit/02dceb5354169c2b2a9931e09a9ebe567419e8ec",
					},
				],
			},
			{
				id: "implementation",
				title: "Implementation",
				heading: "Historical data, a fitted model, and a chart",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/trademind-chart.webp",
							alt: "Illustration of a line chart with solid historical prices and a dashed prediction",
							caption:
								"History draws as a solid line; the prediction continues dashed.",
						},
					],
				},
				paragraphs: [
					"For data, I went with a Kaggle dataset of S&P 500 prices from 2013 to 2018. The prediction code filters down to one ticker, turns dates into days elapsed, and fits closing prices with degree-two polynomial features and a linear regression, so basically a quadratic curve.",
					"FastAPI serves the list of symbols and a prediction endpoint. In React, you pick a ticker and a horizon from one to five years, and it asks for the historical and predicted series. Plotly draws history as a solid line and the prediction as a dashed one.",
					"There are Keras experiments in the repo too, but the endpoint only ever calls the polynomial trainer, so what gets served stays separate from the neural-network stuff.",
				],
				sources: [
					{
						label: "Prediction model",
						href: "https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/backend/model_trainer.py",
					},
					{
						label: "API",
						href: "https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/backend/server.py",
					},
					{
						label: "Analytics interface",
						href: "https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/frontend/trade-mind/src/pages/Analytics.js",
					},
					{
						label: "Chart",
						href: "https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/frontend/trade-mind/src/components/DataPlot.jsx",
					},
				],
			},
			{
				id: "outcome",
				title: "Outcome",
				heading: "A documented prototype with a public cohort record",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/trademind-system.webp",
							alt: "Diagram: S&P 500 data, regression, FastAPI, React and Plotly",
							caption: "Dataset to model to API to chart.",
						},
						{
							src: "/case-studies/trademind-split.webp",
							alt: "Card showing an 80/20 train and test split with held-out accuracy not reported",
							caption:
								"A random 80/20 split, with no held-out accuracy reported.",
						},
					],
				},
				paragraphs: [
					"I took the model from research and picking a dataset all the way to a working notebook. The team hooked the prediction service up to an interactive frontend, and AI Launch Lab put TradeMind in its public Winter 2024 project listing.",
					"The trainer does a random 80/20 split but never actually reports held-out accuracy, and stretching a quadratic curve years past its training data doesn't say much about investment performance. That's why the interface frames it as an educational tool.",
					"After the program, AI Launch Lab, Dawson AI and Mitacs sent me to World Summit AI, where the talks pushed my idea of AI past software development.",
				],
				callout: {
					quote:
						"Thrilled to see the next generation of AI enthusiasts like Carson Spriggs-Audet expanding their horizons at the World Summit AI.",
					attribution: "AI Launch Lab, May 2024",
					source: {
						label: "LinkedIn post",
						href: "https://www.linkedin.com/posts/ailaunchlab_thrilled-to-see-the-next-generation-of-ai-activity-7192163530605809666-6JvL",
					},
					image: {
						src: "/case-studies/trademind-wsai.webp",
						alt: "Exhibition hall at World Summit AI with attendees walking between booths",
					},
				},
				sources: [
					{
						label: "Published project listing",
						href: "https://launchlab.ai/winter-2024-rd-program/",
					},
					{
						label: "Training and prediction code",
						href: "https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/backend/model_trainer.py",
					},
					{
						label: "Educational framing",
						href: "https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/frontend/trade-mind/src/pages/Analytics.js",
					},
				],
			},
			{
				id: "reflection",
				title: "Reflection",
				heading: "Next time, I'd measure it properly",
				paragraphs: [
					"Looking back, I'd keep the pick-a-ticker, get-a-chart flow and put a lot more evidence behind the predictions. I'd compare against a baseline that just uses the last price, test on later time periods, and show the error for each forecast horizon.",
					"In a future version, I'd put the training period and the measured error right next to the chart. TradeMind already got a model into a browser. The next step is helping people decide how much to trust it.",
				],
				sources: [],
			},
		],
		links: [
			{
				label: "Repository",
				href: "https://github.com/carsonSgit/TradeMind",
			},
			{
				label: "Cohort listing",
				href: "https://launchlab.ai/winter-2024-rd-program/",
			},
		],
		publishedAt: "2026-11-06",
		updatedAt: "2026-11-06",
	},
	{
		slug: "botpress",
		title: "Working at Botpress",
		summary:
			"I built Botpress's Jira integration and Topic Insights, the conversation analytics in Botpress Desk, and moved its AI jobs onto a queue.",
		projectType: "Professional Experience",
		period: { start: "2026-04", end: "2026-05" },
		stack: ["TypeScript", "Zod", "LLMz", "Next.js", "Prisma", "QStash", "Tilt"],
		image: "/botpress.webp",
		presentation: {
			eyebrow: "Full Stack Developer at Botpress",
			cover: { src: "/case-studies/botpress-cover.webp", tone: "dark" },
			highlights: [
				{
					label: "Jira integration",
					value:
						"17 action cards and an OAuth setup wizard, shipped in five days",
				},
				{
					label: "Topic Insights",
					value: "Schema, cron jobs, AI flows, API and UI, built end to end",
				},
				{
					label: "Queueing",
					value:
						"AI jobs moved onto QStash: no duplicate runs, failed jobs retried",
				},
			],
		},
		sections: [
			{
				id: "platform",
				title: "The platform",
				heading: "Agents built in Studio, wired to tools by integrations",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/botpress-studio.webp",
							alt: "Botpress Studio autonomous node with Search Knowledge and Escalate To Desk tools, an Orders table, and integration icons",
							caption:
								"An autonomous node in Botpress Studio. Tools come from tables, knowledge bases and integrations.",
							source: {
								label: "botpress.com",
								href: "https://botpress.com/features/ai-agent-studio",
							},
						},
					],
				},
				paragraphs: [
					"Botpress is a platform for building AI agents. In Botpress Studio, you write the agent's instructions in an autonomous node and then hand it tools: search a knowledge base, read a table, pass the conversation to a human in Desk.",
					"Most of those tools come from integrations. An integration wraps a third-party API in typed actions, and every action shows up in Studio as a card. The agent can call the card, or a builder can drop it into a workflow.",
					"Botpress Desk is the newer product, a support inbox where the agent and the human team share tickets. I worked on Desk's analytics and on the integration catalogue.",
				],
			},
			{
				id: "jira",
				title: "Jira integration",
				heading: "Seventeen Jira actions an agent can call",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/botpress-jira.webp",
							alt: "Botpress Studio card picker filtered to Jira, listing actions such as Add Attachment, Search Issues and Transition Issue",
							caption: "The Jira cards in Studio's card picker.",
						},
						{
							src: "/case-studies/botpress-oauth.webp",
							alt: "Jira integration page in Botpress, describing the Connect with OAuth and Use an API Token setup options",
							caption:
								"The integration page. Setup offers OAuth or an API token.",
						},
					],
				},
				paragraphs: [
					"Every new hire at Botpress builds an integration first. Mine was Jira. Most people take two to three weeks on theirs. I shipped mine in five days.",
					"It exposes 17 actions as cards. [[Issues]] search, count, pick by free text, get, create, batch-create up to 50, update, assign, delete, attach a file, list transitions and apply one. [[Projects]] list projects, statuses and issue types. [[Users]] find one or list all. Comments go through a separate `issueComments` channel, so a message the agent sends lands on the issue as a comment.",
					"Search uses Atlassian's `POST /rest/api/3/search/jql`, which took over from `/rest/api/3/search` when Atlassian retired it in May 2025. Pagination is cursor-based, so `searchIssues` hands back a `nextToken`, and `countIssues` is there for when all you need is the total.",
					"Every project has its own workflow, so the agent can't hard-code a status. It calls `getIssueTransitions` to get the IDs that are valid for that issue right now, then passes one to `transitionIssue`.",
					"Later on I built the setup wizard. You pick [[Connect with OAuth]] or [[Use an API Token]]. OAuth runs Atlassian's consent flow, and if your account can see more than one Jira site, the wizard asks which one you mean. The token path just takes a host, an email and a token. Every action and config schema is typed with Zod, so the editor caught a wrong field before I ever ran anything.",
				],
			},
			{
				id: "topic-insights",
				title: "Topic Insights",
				heading: "Desk's analytics, built end to end",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/botpress-insights.webp",
							alt: "Topic Insights in Botpress Desk: a topic list with ticket counts and CSAT rings, and a Webhook Reliability panel showing a 63% CSAT score and a trend line",
							caption:
								"Topic Insights in Desk: topics with nested subtopics, ticket counts and CSAT rings.",
							source: { label: "botpress.com", href: "https://botpress.com/" },
						},
					],
				},
				paragraphs: [
					"In my first week, with Jira done, my lead handed me Topic Insights for Desk. It groups a workspace's support tickets into topics, so a team can see what customers are reaching out about, how happy they are, and whether each topic is growing.",
					"Each topic shows a ticket count and a CSAT ring. Click one and a side panel opens with a summary of its tickets, the CSAT score, a trend line and the actual conversations, so the team can act on it right there.",
					"I built the whole thing: the Prisma schema, the cron jobs, the API routes, the AI inference flows, the gating and deduplication logic, the frontend, the tests and the docs.",
				],
			},
			{
				id: "topic-pipeline",
				title: "How topics form",
				heading: "Topics come from your own tickets, not a fixed list",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/botpress-topic-flow.webp",
							alt: "Diagram: a closed ticket is summarised by an inference job, matched against existing topics or used to create a new one, and a topic that reaches 10 tickets generates subtopics",
							caption:
								"One ticket through the pipeline. Ten tickets in a topic unlocks subtopics.",
						},
					],
				},
				paragraphs: [
					"Botpress doesn't ship a list of categories. Every topic comes out of the workspace's own tickets, so a billing-heavy SaaS and a shipping-heavy retailer end up with completely different topics.",
					"When a ticket comes in, an inference job summarises it and scores it on [[CSAT]], [[sentiment]] and [[resolution]]. The prompt keeps topic names tight: a few words at most, and a category, not a description. A pile of refund tickets becomes [[+Billing Issues]], not [[-Clients are requesting money back]].",
					"The first tickets in a workspace seed the first topics. After that, each new ticket gets checked against the existing topics one at a time. If it fits one, it [[+joins it]]. If it fits none, it [[starts a new topic]].",
					"Once a topic hits 10 tickets, a second job splits it into subtopics, like [[Duplicate Charges]] and [[Refund Requests]] under [[Billing Issues]]. That check runs on every new ticket, so the tree keeps getting deeper as tickets come in.",
				],
			},
			{
				id: "queues",
				title: "Queues",
				heading: "One paid inference per change",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/botpress-qstash.webp",
							alt: "Diagram comparing triggers calling inference jobs directly, with duplicate and dropped runs, against triggers going through QStash with dedup keys, retries, backoff and ordering",
							caption:
								"Before and after: duplicate runs and dropped jobs, then one deduplicated run with retries.",
						},
					],
				},
				paragraphs: [
					"Ticket events were triggering the AI jobs directly, and the jobs depended on each other: A triggers B and C, and D needs both. At production volume, one change could [[-fire the same inference job several times]], a [[-failed job just disappeared]], and a [[-dependent job could start]] before its inputs existed.",
					"Every duplicate run paid for LLM tokens again, so the bill grew with ticket volume even when nothing new was being learned. And the dropped jobs left topics stale.",
					"My lead and I mapped out the flow and put Upstash QStash between the triggers and the jobs. Each message gets a [[+deduplication key]], failed jobs [[+retry with backoff]], and dependent jobs [[+wait for the jobs they need]]. Now each change pays for exactly one inference run.",
					"While we were mapping it, we found other trigger-driven jobs with the same problem, so those went onto the queue too.",
				],
			},
			{
				id: "learnings",
				title: "What I learned",
				heading: "Good tooling is what lets you ship fast",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/botpress-tilt.webp",
							alt: "Terminal running tilt up with api, web, worker and postgres ready",
							caption: "One tilt up, the same environment on every machine.",
						},
					],
				},
				paragraphs: [
					"Shipping fast isn't the same as shipping sloppy. What kept the speed safe was typed schemas that fail in the editor, and infrastructure like the queue that catches failures instead of dropping them.",
					'Tilt runs the whole local stack (containers, Kubernetes, rebuilds, logs) from one `tilt up`. Everyone runs the same config, so "works on my machine" pretty much stopped being a thing.',
					"In three weeks, I got to work across the backend, frontend, infrastructure and AI pipelines of a product that was still being built.",
				],
			},
		],
		links: [
			{ label: "Botpress", href: "https://botpress.com/" },
			{
				label: "Botpress Studio",
				href: "https://botpress.com/features/ai-agent-studio",
			},
		],
		publishedAt: "2026-05-20",
		updatedAt: "2026-11-06",
		seo: {
			title: "Botpress Case Study | Carson Spriggs-Audet",
			description:
				"How I built Botpress's Jira integration and Topic Insights, and moved its AI inference jobs onto a QStash queue.",
			socialImage: "/botpress.webp",
		},
	},
	{
		slug: "argus",
		title: "Argus",
		summary:
			"Hackathon prototype for monitoring live video feeds with event detection and operator review tools.",
		projectType: "2x Hackathon Winning Project",
		period: { start: "2025-10-24", end: "2025-10-26" },
		stack: ["TypeScript", "AI", "Computer Vision", "PostgreSQL", "RTMP"],
		image: "/argus.webp",
		presentation: {
			eyebrow: "Live ops tooling for machine-assisted review",
			highlights: [
				{ label: "Outcome", value: "2x hackathon winner" },
				{ label: "Focus", value: "Signal-first operator review" },
				{ label: "System", value: "Vision, streaming, storage" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				paragraphs: [
					"Argus began as an attempt to make live video review feel more humane for teams that need signal without sitting through every frame themselves.",
					"The central question was whether ingest, computer-vision analysis, and operator review could read as one coherent workflow instead of three disconnected tools.",
				],
			},
			{
				id: "build",
				title: "Build",
				paragraphs: [
					"I framed the demo around one continuous loop: bring in a live feed, analyze it automatically, and surface notable events in a review interface that still felt operator-led.",
					"The prototype stayed grounded in real constraints, with streaming, typed application code, and persistent storage carrying the idea beyond a superficial hackathon mock-up.",
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				paragraphs: [
					"The result suggested that computer-vision assistance could reduce constant manual watching while still preserving clear review points for a human operator.",
					"It also became a stronger portfolio story because the architecture, product choices, and tradeoffs could be explained as one end-to-end system.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/GodPuffin/Argus" },
			{ label: "Devpost", href: "https://devpost.com/software/argus-w6i0pv" },
		],
		publishedAt: "2025-10-26",
		updatedAt: "2026-03-26",
		seo: {
			title: "Argus Case Study | Carson Spriggs-Audet",
			description:
				"How Carson Spriggs-Audet built Argus, a hackathon prototype that combines live video ingest, event detection, and operator review.",
		},
	},
	{
		slug: "cropcare",
		title: "CropCare",
		summary:
			"Hackathon prototype for plant monitoring and control using sensors, cloud messaging, and operator dashboards.",
		projectType: "Capstone Project",
		period: { start: "2024-03", end: "2024-05" },
		stack: ["Python", "C#", "IoT", "Azure", "MQTT", "Hardware"],
		image: "/cropcare.webp",
		presentation: {
			eyebrow: "Connected agriculture system spanning hardware and software",
			highlights: [
				{ label: "Focus", value: "Readable monitoring and control" },
				{ label: "System", value: "Sensors, Azure, MQTT" },
				{ label: "Outcome", value: "End-to-end field workflow" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				paragraphs: [
					"CropCare came from a simple observation: a lot of smart-agriculture demos prove the hardware works, but stop short of showing a software workflow that someone could actually trust day to day.",
					"The project was meant to connect field signals, cloud automation, and a readable operator experience inside one end-to-end story.",
				],
			},
			{
				id: "build",
				title: "Build",
				paragraphs: [
					"I used an Azure-backed MQTT pipeline to move between sensing and response, so the system could both observe conditions and react without feeling like a disconnected hardware demo.",
					"The interface work focused on making monitoring and control legible, which helped the project read as a product prototype instead of a bundle of technical parts.",
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				paragraphs: [
					"The final prototype demonstrated reliable two-way communication between field data and cloud-side actions, which was the most important proof point for the concept.",
					"It also gave me a concise way to explain how embedded constraints, backend integration, and user-facing control design fit together.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/carsonSgit/CropCare" },
			{ label: "Live demo", href: "https://carsonsgit.github.io/cropcare-3d/" },
		],
		publishedAt: "2024-05-23",
		updatedAt: "2026-03-26",
		seo: {
			title: "CropCare Case Study | Carson Spriggs-Audet",
			description:
				"How Carson Spriggs-Audet built CropCare, a hackathon prototype that links sensor data, Azure services, and practical automation workflows.",
		},
	},
	{
		slug: "linky",
		title: "Linky",
		summary:
			"Hackathon prototype that turns a URL into a searchable knowledge base with retrieval-backed answers.",
		projectType: "Hackathon Winning Project",
		period: { start: "2024-04-05", end: "2024-04-06" },
		stack: ["TypeScript", "AI", "RAG", "PostgreSQL", "Mantine"],
		image: "/linky.webp",
		presentation: {
			eyebrow: "A calmer interface for retrieval-backed learning",
			highlights: [
				{ label: "Focus", value: "Learning workflow over chat UX" },
				{ label: "System", value: "Retrieval, storage, typed frontend" },
				{ label: "Outcome", value: "Searchable knowledge experience" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				paragraphs: [
					"Linky started with a small but useful prompt: what if one URL could become a structured place to learn, not just a one-off chat input.",
					"I wanted the project to show both retrieval quality and a calmer product experience, since many AI demos only prove the model call and not the interface around it.",
				],
			},
			{
				id: "build",
				title: "Build",
				paragraphs: [
					"The product flow stayed intentionally simple: start with a URL, ingest the source material, and turn it into a knowledge layer that supports exploration instead of generic answers.",
					"Under the hood, the stack paired retrieval, storage, and a typed frontend so the project felt like a usable tool with real product decisions behind it.",
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				paragraphs: [
					"The prototype showed how ingestion, retrieval, and interface design can reinforce each other when the product starts with a clear learning workflow.",
					"It also became a stronger write-up because the product decisions and technical implementation could be presented with the same level of clarity.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/carsonSgit/Linky" },
			{ label: "Website", href: "https://www.linky.im/" },
		],
		publishedAt: "2024-04-11",
		updatedAt: "2026-03-26",
		seo: {
			title: "Linky Case Study | Carson Spriggs-Audet",
			description:
				"How Carson Spriggs-Audet built Linky, a hackathon prototype that uses retrieval and interface design to improve exploration and learning.",
		},
	},
];

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function dateParts(iso: string) {
	const [year, month, day] = iso.split("-").map(Number);
	return { year, month: MONTHS[month - 1], day };
}

export function formatPeriod({ start, end }: CaseStudyPeriod): string {
	const from = dateParts(start);
	const to = dateParts(end ?? start);
	if (from.year !== to.year) {
		return `${from.month} ${from.year} to ${to.month} ${to.year}`;
	}
	if (from.month !== to.month) {
		return `${from.month} to ${to.month} ${to.year}`;
	}
	if (from.day && to.day && from.day !== to.day) {
		return `${from.month} ${from.day} to ${to.day}, ${to.year}`;
	}
	return `${to.month} ${to.year}`;
}

const periodKey = ({ start, end }: CaseStudyPeriod) =>
	`${end ?? start}|${start}`;

export const caseStudies = [...caseStudyEntries].sort((a, b) =>
	periodKey(b.period).localeCompare(periodKey(a.period)),
);

export function getCaseStudyBySlug(slug: string) {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
