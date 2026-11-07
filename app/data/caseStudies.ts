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
		slug: "fundica",
		title: "Accessibility at Fundica",
		summary:
			"I led Fundica's WCAG audit, shipped the fixes with the team, and built an auditing tool that reduced time per page by up to 99% compared with manual auditing.",
		projectType: "Professional Experience",
		period: { start: "2025-05", end: "2026-04" },
		stack: ["Python", "WCAG 2.0 AA", "CI automation"],
		image: "/fundica.webp",
		presentation: {
			eyebrow: "Junior Software Developer at Fundica",
			cover: { src: "/case-studies/fundica-cover.webp", tone: "dark" },
			highlights: [
				{
					label: "Audit",
					value: "Led the WCAG audit, mapped every fix and shipped them",
				},
				{
					label: "R&D",
					value: "Automated accessibility checks on every pull request",
				},
				{
					label: "Result",
					value: "Up to 99% less auditing time per page",
				},
			],
		},
		sections: [
			{
				id: "fundica",
				title: "Fundica",
				heading: "Funding search for banks, governments and advisors",
				media: {
					afterParagraph: 0,
					items: [
						{
							src: "/case-studies/fundica-ai-search.webp",
							aspectRatio: 1600 / 985,
							alt: "Fundica's AI Search screen, a natural-language search box over a database of funding programs with suggested questions",
							caption: "AI Search over Fundica's funding program database.",
							source: {
								label: "fundica.com",
								href: "https://www.fundica.com/",
							},
						},
						{
							src: "/case-studies/fundica-results.webp",
							aspectRatio: 1600 / 985,
							alt: "Fundica funding results listing government programs with funding amounts, eligible expenses and status tags",
							caption:
								"Funding results, ranked by how well each program fits the business.",
							source: {
								label: "fundica.com",
								href: "https://www.fundica.com/financial-institutions",
							},
						},
					],
				},
				paragraphs: [
					"Fundica is an AI-powered platform that matches businesses with funding. It searches more than 12,000 private, federal, provincial and municipal programs and ranks them by relevance. Banks, governments and advisors put it in front of their own clients.",
					"Those clients are the kind where things have to just work. Fundica is trusted by 5 of the 10 largest cities and 80+ governments across Canada, by financial institutions like TD and Visa, and by research and innovation organizations like Mila, Centech, DMZ and McGill.",
					"Clients like that don't take a vendor's word for it. They want proof, and the proof is on the website: [[SOC 2 Type II certified]], [[WCAG 2.0 AA]], and [[no IT integration required]].",
				],
				sources: [
					{
						label: "Research & education partners",
						href: "https://www.fundica.com/research-education",
					},
					{
						label: "Governments",
						href: "https://www.fundica.com/governments",
					},
				],
			},
			{
				id: "audit",
				title: "The audit",
				heading: "A client asked for the certification, so I ran the audit",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/fundica-badges.webp",
							aspectRatio: 2,
							alt: "SOC 2 Type 2 badge next to a W3C WCAG 2.0 AA badge",
							caption: "The two badges Fundica's clients look for first.",
						},
					],
				},
				paragraphs: [
					"One of our clients asked for the WCAG certification, and before we could claim it we had to prove it. I led the audit together with our security and compliance specialist.",
					"I went through the platform against the WCAG guidelines and flagged every place we fell short. Then I mapped out the fixes, worked with the rest of the team to get them done, and applied them across the product.",
				],
			},
			{
				id: "automation",
				title: "Automating it",
				heading: "Catching accessibility issues before they merge",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/fundica-dashboard.webp",
							aspectRatio: 1600 / 985,
							alt: "Fundica analytics dashboard with totals for users, sign-ups, active programs and activation rate, plus trend charts",
							caption:
								"Every screen like this one has to stay accessible after each change.",
							source: {
								label: "fundica.com",
								href: "https://www.fundica.com/financial-institutions",
							},
						},
					],
				},
				paragraphs: [
					"An audit only proves where you are on the day you run it. Every new feature can quietly break something again, so after the audit I got the chance to lead an R&D project to automate it.",
					"I started with research: what accessibility actually means for the people using the product, the WCAG guidelines in depth, and which tools already exist for detecting issues and how far each one goes.",
					"I built the auditing script in Python. A JSON configuration describes each page: its URL, name, elements to check and, where needed, a login URL and credentials. The script handles page navigation and authentication so it can check screens behind a login too.",
					"The script runs WCAG checks and produces Markdown reports for review. It combines vetted open-source checkers with detection we built in-house, and runs on pull requests so the team can catch issues before they merge.",
					"Automating that work reduced auditing time per page by [[+up to 99%]] compared with doing it manually. That measures time saved on each page; findings that need human judgment still go through review.",
					"In my December 2025 presentation, I laid out the next step: an OpenAI integration to suggest fixes, propose custom solutions and match the repository's coding style. That was on the roadmap at the time, alongside more WCAG checks and documentation.",
					"It was my first time leading a project this big, from the research through to a system the team uses.",
				],
				sources: [
					{
						label: "Project presentation",
						href: "https://prezi.com/p/kuwtpxdx_aac/ai-driven-wcag-accessibility-auditing-at-fundica/",
					},
				],
			},
			{
				id: "team",
				title: "The team",
				heading: "Thanks, Fundica",
				paragraphs: [
					"Fundica trusted a junior developer to lead a compliance audit and an R&D project for clients that can't afford for things to go wrong. I'm grateful to the whole team for that, and for how much I learned working alongside them.",
				],
			},
		],
		links: [
			{ label: "Fundica", href: "https://www.fundica.com/" },
			{
				label: "Fundica for financial institutions",
				href: "https://www.fundica.com/financial-institutions",
			},
			{
				label: "Project presentation",
				href: "https://prezi.com/p/kuwtpxdx_aac/ai-driven-wcag-accessibility-auditing-at-fundica/",
			},
		],
		publishedAt: "2026-11-06",
		updatedAt: "2026-11-06",
		seo: {
			title: "Fundica Case Study | Carson Spriggs-Audet",
			description:
				"How I led Fundica's WCAG accessibility audit and built a Python tool that reduced auditing time per page by up to 99% compared with manual auditing.",
			socialImage: "/fundica.webp",
		},
	},
	{
		slug: "argus",
		title: "Argus",
		summary:
			"A video surveillance platform Marcus Lee and I built in 37 sleepless hours at Cal Hacks 12.0 in San Francisco. It streams cameras through Mux, finds events with Gemini and Roboflow, and makes them searchable. It took home two first places.",
		projectType: "Hackathon project, 2 first places",
		period: { start: "2025-10-24", end: "2025-10-26" },
		stack: [
			"TypeScript",
			"Next.js",
			"Supabase",
			"PostgreSQL",
			"Mux",
			"Gemini",
			"Roboflow",
			"Elasticsearch",
		],
		image: "/argus.webp",
		presentation: {
			eyebrow: "Cal Hacks 12.0 in San Francisco, with Marcus Lee",
			cover: { src: "/case-studies/argus-cover.webp", tone: "dark" },
			highlights: [
				{ label: "Result", value: "2 first places, 2 internship offers" },
				{ label: "System", value: "Mux → Supabase → worker → models" },
				{ label: "My focus", value: "Detection, stats, landing page" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Cal Hacks 12.0",
				heading:
					"Two students from Montreal at the largest collegiate hackathon",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/argus-calhacks.webp",
							alt: "Carson and Marcus at the Cal Hacks 12.0 photo booth, one holding an 'I paused my game to be here' sign, the other in a green wig and fake moustache",
							caption: "Marcus and me at the photo booth.",
						},
						{
							src: "/case-studies/argus-hall.webp",
							alt: "A hangar-sized hall filled with rows of tables and hackers at laptops, seen from a balcony",
							caption: "The main hall, from the balcony.",
						},
					],
				},
				paragraphs: [
					"Marcus Lee and I applied to Cal Hacks 12.0 kind of out of the blue, and we got in. It ran October 24 to 26, 2025 at the Palace of Fine Arts in San Francisco. It's North America's largest hackathon, and supposedly the largest collegiate hackathon in the world.",
					"We were blown away. Montreal has a good tech scene, but nothing like what we saw there. There were thousands of students in one hall, a lot of them from schools I'd only ever heard about from Canada, and it really hit me that this is where things are happening.",
				],
				sources: [
					{
						label: "Cal Hacks 12.0",
						href: "https://cal-hacks-12-0.devpost.com/",
					},
				],
			},
			{
				id: "san-francisco",
				title: "San Francisco",
				heading: "Seeing as much of the city as we could",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/argus-trip.webp",
							alt: "Map of North America: a solid line from Montreal direct to San Francisco, and a dashed line home from San Francisco to Vancouver to Montreal",
							caption:
								"Direct on the way out, through Vancouver on the way home.",
						},
						{
							src: "/case-studies/argus-sf.webp",
							alt: "Map of San Francisco marking the Palace of Fine Arts, the Golden Gate Bridge, downtown, and our hotel area between the Tenderloin and Nob Hill, with a dashed line from the hotel to the venue",
							caption: "The venue, the hotel, and the rides between them.",
						},
					],
				},
				paragraphs: [
					"I flew direct from Montreal to San Francisco and came home through Vancouver. It was my first time in a city like SF, so between building sessions we tried to take in as much as we could: walking downtown, hanging around the Palace of Fine Arts, and some seriously good Vietnamese food a few blocks from the hotel.",
					"The venue's Wi-Fi had issues from the start, so everyone switched to their phone hotspots, and with three thousand-plus hotspots in one room, pretty much nobody could get online. Argus streams video to Mux and calls three model providers, so we needed internet. We packed up and went back to our hotel in the Tenderloin and Nob Hill area, which was definitely an environment, and built from there.",
					"Every few hours I'd head out to the corner store to grab more energy drinks, and neither of us slept the whole time.",
				],
			},
			{
				id: "waymo",
				title: "The Waymo",
				heading: "Our Waymo got stuck",
				paragraphs: [
					"We took a Waymo for the first time, and it ended up getting stuck in a parking lot by the Palace of Fine Arts, right next to another Waymo that was also stuck. For two kids who don't have Waymo back home, that was pretty much our worst nightmare.",
					"A bunch of people started recording us sitting there stuck in the Waymo, a few minutes from the Golden Gate Bridge, on my first trip to a city like San Francisco. So that was awesome.",
				],
			},
			{
				id: "product",
				title: "What it does",
				heading: "Surveillance footage you can search and question",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/argus-watch.webp",
							alt: "Argus watch page: doorbell camera footage with a green Roboflow box around a man reaching toward the camera, above a scrubber with event markers",
							caption:
								"A recording with Roboflow's person box and event markers.",
							source: {
								label: "Devpost",
								href: "https://devpost.com/software/argus-w6i0pv",
							},
						},
						{
							src: "/case-studies/argus-chat.webp",
							alt: "Argus AI chat answering 'Has anyone shoplifted recently?' with a Medium severity event card: item selected and concealed, at 0:23",
							caption: "The chat finds the event and links to the moment.",
							source: {
								label: "Devpost",
								href: "https://devpost.com/software/argus-w6i0pv",
							},
						},
					],
				},
				paragraphs: [
					"Argus is named after Argus Panoptes, the many-eyed watchman from Greek myth. It takes live camera feeds and uploaded recordings, figures out what happened in them, and lets an operator search those events, ask questions about them, and turn them into incident reports.",
					"Gemini 2.5 describes each clip as a set of events, each with a severity, a type, a time, and the people and objects involved. Roboflow draws a box around every person, eight frames a second. Both land on the recording's timeline, so clicking an event jumps the player right to it.",
					"The chat defaults to Claude Haiku 4.5, and you can switch to Claude Sonnet 4.5, Kimi K2 on Groq, or a Letta agent. It searches the database through tools and shows events as cards. From a conversation, it can draft an incident report that opens in a Tiptap editor.",
				],
			},
			{
				id: "system",
				title: "System",
				heading: "Four services and one Postgres queue",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/argus-system.webp",
							alt: "Architecture: camera over WebSocket to a Node relay running FFmpeg, RTMPS to Mux, webhook to Supabase, which feeds an analysis worker calling Gemini and Roboflow, then Elasticsearch and a Next.js dashboard with Claude, Groq and Letta chat",
							caption:
								"Ingest along the top; analysis and the interface along the bottom.",
						},
					],
				},
				paragraphs: [
					"A browser camera streams WebM over a WebSocket to a Node server running next to Next.js. That server pipes it through FFmpeg and pushes RTMPS to Mux, which runs the live stream, records it, and cuts clips on demand.",
					"When a recording is ready, Mux calls a Supabase Edge Function, which drops analysis jobs into `ai_analysis_jobs`. That Postgres table is the only queue in the whole system. Every minute, a scheduler in the worker also adds 20-second windows for live streams and 60-second windows for recordings.",
					"Supabase Realtime pushes new events, jobs and reports to the dashboard, so nothing polls. Every event also gets synced into Elasticsearch, where ELSER semantic search plus lexical matching powers both the search page and the stats.",
				],
				sources: [
					{
						label: "Stream relay",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/server.js",
					},
					{
						label: "Mux webhook",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/supabase/functions/mux-webhook/index.ts",
					},
					{
						label: "Scheduler",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/worker/segment-scheduler.ts",
					},
					{
						label: "Search index",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/lib/elasticsearch.ts",
					},
				],
			},
			{
				id: "pipeline",
				title: "Pipeline",
				heading: "One recording, start to finish",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/argus-flow.webp",
							alt: "Animation of a 60-second recording moving through seven steps, from Mux webhook to job queue, worker, FFmpeg clip, Gemini and Roboflow, saved results and Elasticsearch, while worker log lines print and a timeline event card appears",
							caption:
								"The log lines are the worker's own; job numbers and counts are illustrative.",
						},
					],
				},
				paragraphs: [
					"The worker checks the queue every five seconds and runs up to three jobs at once. For each one, it asks Mux for an instant clip of that window, transmuxes the HLS segments to MP4 with FFmpeg, and sends the MP4 off to the models.",
					"Live windows only go to Gemini. Recordings go to Gemini and Roboflow in parallel. If Roboflow fails, the job still succeeds, just without boxes. If Gemini fails, the job retries up to three times, waiting 10 seconds and doubling each time.",
				],
				sources: [
					{
						label: "Worker",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/worker/analysis-worker.ts",
					},
					{
						label: "Gemini client",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/worker/gemini-client.ts",
					},
				],
			},
			{
				id: "contribution",
				title: "My part",
				heading: "Detection, stats and the landing page",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/argus-stats.webp",
							alt: "Argus statistics page with totals for events, critical events, event types and entities, a severity donut, an event-type bar chart and an entity-type donut",
							caption: "The stats page, built on Elasticsearch aggregations.",
							source: {
								label: "Devpost",
								href: "https://devpost.com/software/argus-w6i0pv",
							},
						},
						{
							src: "/case-studies/argus-landing.webp",
							alt: "Argus landing page: the word ARGUS beside a large eye drawn in red dot characters on black",
							caption: "The landing page, built on the last night.",
							source: {
								label: "Devpost",
								href: "https://devpost.com/software/argus-w6i0pv",
							},
						},
					],
				},
				paragraphs: [
					"Marcus owned the backend: video processing, the worker and the AI features. I owned the frontend and the pipelines feeding it, and made 49 of the 93 commits in those 37 hours.",
					"I wrote the Roboflow detector. FFmpeg pulls 8 frames a second, each one goes to Roboflow's hosted person-detection model, and anything under 0.3 confidence gets dropped. I drew the boxes over the player and wrote the tracking stats that follow people from frame to frame.",
					"I built the stats page on Elasticsearch aggregations: severity, event types, entities, recording lengths and occupancy, with date filters and chart colours interpolated in HCL. On the last night I built the landing page, then GitHub sign-in and the mobile nav.",
				],
				sources: [
					{
						label: "Detection commit",
						href: "https://github.com/GodPuffin/Argus/commit/2ea0c883f06062d3f95d012ef978f7d9e5af51ce",
					},
					{
						label: "Roboflow detector",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/worker/roboflow-detector.ts",
					},
					{
						label: "Stats queries",
						href: "https://github.com/GodPuffin/Argus/blob/d4b696cf4ab285097f3bdf6239a73de7bdacb12c/lib/elasticsearch-stats.ts",
					},
				],
			},
			{
				id: "results",
				title: "Results",
				heading: "Two first places and two offers",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/argus-results.webp",
							alt: "Two photos of 'Winner: Argus' on projector screens in the hall, beside cards for Conway's Most Data-Intensive Application prize and a37's Best Use of A37 prize",
							caption: "Both prize announcements, from our seats.",
						},
					],
				},
				paragraphs: [
					"We demoed at a table in a huge open space with thousands of other teams presenting all around us. You could tell people had built really good projects, and a lot of them were from the Ivy League schools you hear so much about where I'm from in Canada. Then Argus ended up winning two first places: Conway's Most Data-Intensive Application and a37's Best Use of A37.",
					"Both are cool companies working on really interesting problems. Conway trains predictive models on event streams for Fortune 500 engineering teams, and a37 builds Forge, which finds, governs and polices the AI agents running inside a company. We got internship offers from both of them, which was super cool.",
				],
				sources: [
					{
						label: "Devpost",
						href: "https://devpost.com/software/argus-w6i0pv",
					},
					{ label: "Conway", href: "https://www.conway.ai/" },
					{ label: "a37 Forge", href: "https://www.forge.ai/" },
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				heading: "What I took away from it",
				paragraphs: [
					"Argus is the most complete hackathon project Marcus and I have built. It used eight outside services, and running it locally took four terminals: ngrok for Mux's webhooks, Next.js, the worker, and Supabase in Docker.",
					"But the bigger thing for me was the people. We met so many smart people and saw so many cool projects. I'm confident, without a shadow of a doubt, that a lot of the people we saw there, and so many more that we didn't, are going to do amazing things and shape the world, so getting to be in that space with them was a crazy opportunity.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/GodPuffin/Argus" },
			{ label: "Devpost", href: "https://devpost.com/software/argus-w6i0pv" },
		],
		publishedAt: "2025-10-26",
		updatedAt: "2026-11-06",
		seo: {
			title: "Argus Case Study | Carson Spriggs-Audet",
			description:
				"How Marcus Lee and I built Argus at Cal Hacks 12.0: live video through Mux, events from Gemini and Roboflow, search on Elasticsearch, and two first places.",
		},
	},
	{
		slug: "cropcare",
		title: "CropCare",
		summary:
			"Our final-year capstone: a Raspberry Pi container farm, Azure IoT Hub and a .NET MAUI app, built by three students who really wanted to beat their friends' team. I built the app's monitoring and control screens, its live charts, and three of the farm's sensor drivers.",
		projectType: "Capstone project",
		period: { start: "2024-03", end: "2024-05" },
		stack: [
			"Python",
			"Raspberry Pi",
			"Azure IoT Hub",
			"MQTT",
			"C#",
			".NET MAUI",
			"Firebase",
		],
		image: "/cropcare.webp",
		presentation: {
			eyebrow: "John Abbott College, Computer Science Technology, Winter 2024",
			cover: { src: "/case-studies/cropcare-cover.webp", tone: "dark" },
			highlights: [
				{ label: "My focus", value: "Mobile app and sensor drivers" },
				{ label: "System", value: "Raspberry Pi → IoT Hub → MAUI" },
				{ label: "Team", value: "Three developers" },
			],
		},
		sections: [
			{
				id: "context",
				title: "Context",
				heading: "A final-year capstone that had to be designed first",
				media: {
					afterParagraph: 3,
					items: [
						{
							src: "/case-studies/cropcare-timeline.webp",
							alt: "Timeline of six phases: design in March, hardware by April 22, mobile app by April 29, telemetry by May 10, integration by May 14, polish and build by May 21",
							caption: "From design document to physical farm in two months.",
						},
					],
				},
				paragraphs: [
					"CropCare was our capstone for John Abbott College's Computer Science Technology program, built over the Winter 2024 semester by Cristiano Fazi, Kevin Baggott and me. This was pretty much pre-ChatGPT, which was barely usable back then. The program is hands-on: you do everything yourself, and you do it properly. Two courses fed into it: Application Development 3 taught cross-platform mobile development in .NET MAUI, and Connected Objects taught Python, Raspberry Pi hardware and Azure IoT.",
					"We set the brief ourselves: a container farm an owner or technician can monitor and control from their phone, covering growing conditions, the enclosure's security, and its location. We also had a friendly rivalry going with friends in another group over who'd have the better project. So we went all out, way past what the courses asked for.",
					"The program made you design before you code. In March we wrote a design document, wireframed every screen and drew the UML ourselves. Then the build ran in phases, each with a due date: hardware drivers by April 22, the mobile app by April 29, telemetry to Azure by May 10, the app's link to IoT Hub by May 14, and polish and the physical farm by May 21.",
					"The physical farm was one of the most fun parts. I modelled the enclosure in TinkerCAD across four versions, and we built it out of wood, plexiglass and hinges, with a servo locking the door and an actual plant inside.",
				],
				sources: [
					{
						label: "Program",
						href: "https://johnabbott.qc.ca/career-programs/computer-science-technology/computer-science-420-b0/",
					},
					{
						label: "Team and courses",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/README.md",
					},
					{
						label: "Design document",
						href: "https://docs.google.com/document/d/1CgeMB0Ia7MkWsxPN-nKMrvUxbPpmW7MrcGwJhg-tKfA/edit?usp=sharing",
					},
					{
						label: "Wireframes",
						href: "https://github.com/carsonSgit/CropCare/commit/571626370102830ee631f96d82958d052d246e45",
					},
					{
						label: "CAD versions",
						href: "https://github.com/carsonSgit/CropCare/tree/bccfd15cd470b0f9c182b5061d2f0c01f4306549/Documents/CAD%20files",
					},
				],
			},
			{
				id: "contribution",
				title: "My contribution",
				heading: "The app's screens, its live charts, and three drivers",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/cropcare-ui.webp",
							alt: "Three phone screens: the owner's farm dashboard, the Plants page with readings and controls, and the Security page in dark mode with a loudness chart",
							caption:
								"Redrawn from the shipped screens; readings are illustrative.",
						},
					],
				},
				paragraphs: [
					"In the app, I built the Plants and Security pages, fan and LED control, the owner and technician account types (technicians don't get the controls), and the dark theme.",
					"I also added the live charts. Each controller keeps a reading history per sensor and redraws a LiveCharts line on every message, and a picker lets you choose which sensor to plot.",
					"On the farm side, I wrote the loudness, vibration and GPS drivers, each with its own mock. The GPS took the most work: it reads NMEA sentences from the Pi's UART at /dev/ttyS0, and it only worked after we changed the Pi's serial port config. I also drew the team's UML in Mermaid and wrote the hardware port guide.",
				],
				sources: [
					{
						label: "Fan control",
						href: "https://github.com/carsonSgit/CropCare/commit/9b1850fe0c60b0a2b8469190c3ba61ff9eb0a927",
					},
					{
						label: "Technician permissions",
						href: "https://github.com/carsonSgit/CropCare/commit/cd5cb262855a9e512670d52fcb202569e5f3776b",
					},
					{
						label: "Live charts",
						href: "https://github.com/carsonSgit/CropCare/commit/c74388f0e0714d68594d5892ab70e11b416f578e",
					},
					{
						label: "Chart picker",
						href: "https://github.com/carsonSgit/CropCare/commit/e75efbb502326bd4bde4e1d9789da2077f7cac2f",
					},
					{
						label: "Dark mode",
						href: "https://github.com/carsonSgit/CropCare/commit/e35e77f4321dbab182ed02e0321d91bbe499c5a4",
					},
					{
						label: "GPS driver",
						href: "https://github.com/carsonSgit/CropCare/commit/72b610e65eabd0d9da707f9226f81cd7a081712a",
					},
					{
						label: "Vibration sensor",
						href: "https://github.com/carsonSgit/CropCare/commit/8c7b71c4587c1fb363409be7abfb48225db8fda0",
					},
					{
						label: "UML",
						href: "https://github.com/carsonSgit/CropCare/commit/c414cf812e9bb85893e8d761a96182584e732d5a",
					},
				],
			},
			{
				id: "system",
				title: "System",
				heading: "One device ID ties three runtimes together",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/cropcare-telemetry.webp",
							alt: "Telemetry flow: Raspberry Pi to IoT Hub over MQTT, then the event stream to the MAUI app",
							caption: "Readings go up every five seconds.",
						},
						{
							src: "/case-studies/cropcare-command.webp",
							alt: "Command flow: MAUI app to IoT Hub as a direct method, then to the Raspberry Pi",
							caption: "Commands come down when someone taps a switch.",
						},
					],
				},
				paragraphs: [
					"The farm runs in Python on a Raspberry Pi reTerminal and sends every reading to Azure IoT Hub over MQTT through Azure's device SDK, every five seconds by default.",
					"The app pulls those readings from IoT Hub's built-in Event Hub endpoint and sends commands back down as direct methods. Each farm record in Firebase stores its IoT Hub device ID, and that's how the app knows which farm on screen a stream of events belongs to.",
				],
				sources: [
					{
						label: "Device client",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/farm/farm.py",
					},
					{
						label: "Hub client",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/CropCare/CropCare/Services/IOTService.cs",
					},
					{
						label: "Setup guide",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/README.md",
					},
				],
			},
			{
				id: "farm",
				title: "The Raspberry Pi",
				heading: "Three subsystems behind one interface",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/cropcare-pi-layers.webp",
							alt: "Four stacked layers on the Pi: Grove Base Hat, three subsystem controllers, the Farm loop, and the IoT Hub device client",
							caption: "Four layers between a sensor and the cloud.",
						},
						{
							src: "/case-studies/cropcare-pi-mock.webp",
							alt: "ISensor with two implementations: GPS for prod and MockGPSSensor for mock",
							caption: "Each driver has a mock behind the same interface.",
						},
					],
				},
				paragraphs: [
					"A Grove Base Hat connects the sensors and actuators to the Pi. We followed proper design here: every sensor implements ISensor and every actuator implements IActuator. Plant, security and geolocation controllers own them, and a Farm class reads all three every five seconds.",
					"An ENVIRONMENT_MODE variable swaps every driver for a mock behind the same interface, so the whole pipeline runs on a laptop with no hardware plugged in.",
					"Commands come in as direct methods. A request processor maps a method name like control_actuator to a handler, and each command goes to the first actuator that accepts it. The app can also change the reading interval through the device twin.",
				],
				sources: [
					{
						label: "Farm loop",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/farm/farm.py",
					},
					{
						label: "Controller interface",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/farm/interfaces/subsystem_controller.py",
					},
					{
						label: "Mock swap",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/farm/subsystems/plant/plant_controller.py",
					},
					{
						label: "Direct methods",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/farm/util/farm_req_processor.py",
					},
				],
			},
			{
				id: "app",
				title: "The app",
				heading: "From an event stream to a health colour",
				media: {
					afterParagraph: 1,
					items: [
						{
							src: "/case-studies/cropcare-app-route.webp",
							alt: "Four steps: an event arrives, the farm with that device id takes it, the controller that owns the reading type adds it, the tile and chart update",
							caption: "One event, routed to one tile.",
						},
						{
							src: "/case-studies/cropcare-app-health.webp",
							alt: "Temperature ranges: healthy 25 to 30 °C, caution 20 to 35 °C, critical outside, unknown with no reading",
							caption: "Four limits turn a number into a colour.",
						},
					],
				},
				paragraphs: [
					"Every incoming event names its device ID, and the app routes it to the farm that owns that device. Three C# controllers mirror the Python subsystems, so a reading lands in the controller that knows what it is.",
					"Each controller checks a reading against healthy and caution ranges. For temperature, 25 to 30 °C is healthy, 20 to 35 °C is caution, and anything else is critical. The farm shows its worst state, and value converters turn each state into a colour and a label.",
					"Flipping a switch sends a direct method with a 30-second timeout. With no network, the switch flips back, and if the connection drops, every reading resets to “No data” instead of leaving stale values on screen.",
				],
				sources: [
					{
						label: "IoT service",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/CropCare/CropCare/Services/IOTService.cs",
					},
					{
						label: "Base controller",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/CropCare/CropCare/Models/Controllers/BaseController.cs",
					},
					{
						label: "Health ranges",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/CropCare/CropCare/Models/Controllers/PlantController.cs",
					},
				],
			},
			{
				id: "data",
				title: "Accounts and data",
				heading: "Owners, technicians, and the farms between them",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/cropcare-data-model.webp",
							alt: "Three collections: User and Farm joined through UserToFarm",
							caption: "A join lets one farm have many users.",
						},
						{
							src: "/case-studies/cropcare-data-roles.webp",
							alt: "Permission table: owners see every page and control; technicians see Plants and Location only",
							caption: "One flag decides what each account sees.",
						},
					],
				},
				paragraphs: [
					"Firebase Auth handles sign-in, and the Realtime Database holds three collections: users, farms, and a UserToFarm join between them. A generic DatabaseService<T> implements IDataStore<T> for any keyed model, so all three share the same code.",
					"Every account is either an owner or a technician. I built that split: owners add and delete farms and assign technicians, and technicians see Plants and Location without any of the controls.",
				],
				sources: [
					{
						label: "Data store",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/CropCare/CropCare/Services/DatabaseService.cs",
					},
					{
						label: "Repository",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/CropCare/CropCare/DataRepos/CropCareRepo.cs",
					},
					{
						label: "Owner-only page",
						href: "https://github.com/carsonSgit/CropCare/commit/4c057264568da70c8b70580cfe7b9d86b4f3041c",
					},
					{
						label: "Hidden controls",
						href: "https://github.com/carsonSgit/CropCare/commit/cd5cb262855a9e512670d52fcb202569e5f3776b",
					},
				],
			},
			{
				id: "outcome",
				title: "Outcome",
				heading: "A working farm, and the record of how it was built",
				media: {
					afterParagraph: 2,
					items: [
						{
							src: "/case-studies/cropcare-trail.webp",
							alt: "Six counts: 9 sensors, 4 actuators, 3 subsystems, 13 app pages, 4 CAD versions, 336 commits",
							caption: "The finished system, counted.",
						},
						{
							src: "/case-studies/cropcare-limits.webp",
							alt: "Three shortcuts: readings as Python dict strings, an owner key inside the app, no long-term storage",
							caption: "Shortcuts a shipped version would remove.",
						},
					],
				},
				paragraphs: [
					"The final build streamed readings from the enclosure to the app and switched the fan, LED, door lock and buzzer from a phone. The GitHub repo is a gold mine if you want to see how it was built, with four CAD versions, the UML, the wireframes and a port guide for every sensor, and you can view the final enclosure in 3D in your browser.",
					"Three shortcuts wouldn't survive production. The Pi sends each reading as a Python dict string, which the app parses by swapping quote characters. The app holds an owner-level IoT Hub connection string, where a real app would need a backend between the phone and the hub. And Milestone 4 planned Cosmos DB for long-term telemetry, but the shipped app keeps readings in memory and charts the last ten.",
				],
				sources: [
					{
						label: "3D model",
						href: "https://carsonsgit.github.io/cropcare-3d/",
					},
					{
						label: "Reading format",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/farm/interfaces/sensors.py",
					},
					{
						label: "Reading parser",
						href: "https://github.com/carsonSgit/CropCare/blob/bccfd15cd470b0f9c182b5061d2f0c01f4306549/CropCare/CropCare/Models/Farm.cs",
					},
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/carsonSgit/CropCare" },
			{ label: "3D model", href: "https://carsonsgit.github.io/cropcare-3d/" },
		],
		publishedAt: "2024-05-23",
		updatedAt: "2026-11-06",
		seo: {
			title: "CropCare Case Study | Carson Spriggs-Audet",
			description:
				"How Carson Spriggs-Audet built the mobile app and sensor drivers for CropCare, a capstone IoT container farm linking a Raspberry Pi, Azure IoT Hub and .NET MAUI.",
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
