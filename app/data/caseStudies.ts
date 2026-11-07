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
		summary: "Lessons learned while working at Botpress.",
		projectType: "Professional Experience",
		period: { start: "2026-04", end: "2026-05" },
		stack: ["TypeScript", "Zod", "LLMz", "Next.js", "Prisma"],
		image: "/botpress.webp",
		presentation: {
			eyebrow: "Shipping at an industry-leading AI startup",
			highlights: [
				{
					label: "Ship fast",
					value: "Rapid iteration and deployment in a fast-paced environment",
				},
				{
					label: "Engineering",
					value: "Building scalable and maintainable applications",
				},
				{
					label: "Ownership",
					value: "Taking end-to-end responsibility for features and products",
				},
			],
		},
		sections: [
			{
				id: "pretext",
				title: "Pretext",
				paragraphs: [
					"Starting in Summer 2025, I became enamoured with the work that Botpress does. The speed and quality that they go at was awe-inspiring for me, and I knew that I wanted to be a part of it.",
					"I spent the next 8 months interviewing, practicing, learning, growing, and taking feedback to the heart to become a great engineer, ultimately I was given an offer for a full time position as a Full Stack Developer.",
					"The offer came in back in February and I accepted it immediately, all that hard work finally paid off and I was ready to step up to the challenge and get to shipping.",
				],
			},
			{
				id: "week1_work",
				title: "Week 1, move fast",
				paragraphs: [
					"Starting my first week was a culture shock, I had finished my onboarding in the first few hours and got straight to coding. Everyone who starts at Botpress does the same task: Build an integration for the Botpress platform.",
					"A quick TLDR: what is an integration? Basically Botpress has a platform that allows users to build and deploy AI agents that are fully connected to their tools and data, an integration is basically the connector that allows you to link your external tools to your Botpress agent, all accessible in one place.",
					"I was given the task to build out the Jira integration. I had heard that people typically take about 2-3 weeks to build their integration, but me being me, I wanted to challenge myself to see how quickly I could get it up and running.",
					"After fumbling through setting up my dev environment, I got to work. Lots of reading documentation, looking at other examples, manual testing, trying to break things, before the end of the week I was done everything.",
					"Once I was done, it actually hit me-- this tool I just built was now able to be used to help customers improve their own workflows in the blink of an eye. A little bit later, I got to set up OAuth connections which was really fun and a good learning experience, I got to really appreciate the beauty of TypeScript and intellisense.",
				],
			},
			{
				id: "work",
				title: "Work and Ownership",
				paragraphs: [
					"During my first week, since I was basically done with my integration, I spoke with my team lead about next steps. To my shock, he decided to catapult me into building a full, comprehensive feature end-to-end.",
					"I was tasked with building out Topic Insights for our new product that's in the works. Backend logic, CRON jobs, database schemas, API routes, AI flows, synchronization, logic gating, deduplication, frontend, testing, documentation, the whole shebang.",
					"I was definitely nervous to start, this feature is *very* important to the product and customers, it's the one-stop shop for all the data and insights that users will be relying on to make important business decisions, and I was the one given the reigns and responsibility to build it out from ground up.",
					"But I got to work, stayed late *every day...* (even till 11:30pm on some days) and I loved every minute of it. In the world of programming, getting to do actual engineering work at a high level is pretty rare, so getting to have full ownership over a core feature of the product *on my first week* was an absolutely unique feeling.",
				],
			},
			{
				id: "learnings",
				title: "What did I learn?",
				paragraphs: [
					"First and foremost, shipping fast does NOT mean slop, and second, the importance of good developer experience has such a massive impact on what you can do and how fast you can go.",
					"QStash: QStash is a tool made by Upstash (What's up stash?), basically it's the middleman between your API and your requests. The problem I was tackling had to do with system flows and triggers. Basically, `if A triggered --> do B and C --> once B is done launch D --> D depends on C`.",
					"Without QStash, we were running into a lot of issues with reliability, AI jobs ran on certain triggers, but at scale issues arose (deduplication, synchronization, server-stress, reliability & error catching). After going through and mapping out the architecture with my Team Lead, we decided to use QStash to handle the AI inferrence jobs.",
					"While reading through the docs, my team lead and I realized that this was actually something that needed to be done for a lot of other jobs that get triggered, without a queueing system we were basically waiting for a disaster. After setting it up, it was night and day, no dropped requests, automatic retries, overall a much more reliable system, and the AI inferrence jobs were now bringing unquantifiably better results.",
					"Tilt.dev: Tilt is a tool for making local development *so* much easier. Instead of having to mess around with Docker commands, kubectl, Apache configs, manage different environments, etc., Tilt just handlees everything for you. Auto-rebuild, logs, syncing, whatever you need when it comes to infrastructure and local development, Tilt handles it.",
					"Tilt genuinely is one of the most useful tools I've ever worked with, everyone has the same config, the same docker containers and kubernetes clusters, it's all standardized and just works. The best part? All you need to do is run `tilt up` and you're good to go.",
					"Overall I grew across all facets of engineering; backend, frontend, infrastructure, testing, scaling, and so much more. In 3 weeks I can confidently say that I learnt more than some people do in 3 years at other companies, I'm extremely grateful for the opportunity to work and learn at Botpress.",
				],
			},
			{
				id: "layoffs",
				title: "The reality of startups: Layoffs",
				paragraphs: [
					"Today, when I got into work I was made aware that the company was going through restructuring, 40% of the company was being laid off effective immediately. Unfortunately, I was one of the many affected.",
					"The news is definitely a shock, I still can't really process it. The hardest part is that I really loved working at Botpress, the people, the work, the culture, I was so proud to be part of it and I was so excited to start my career there, I honestly saw myself there for a very long time.",
					"That being said, I understand that this is simply the reality of startups and the tech industry in general. Does that mean it doesn't hurt? No, it definitely does, but the fact is that I was able to learn and grow so much in such a short amount of time, I'm already a better developer than I was a month ago and I'm confident that I'll keep growing.",
					"Layoffs suck and personally in most cases I think they're the wrong move for a company to make, but in tech you have to face the reality that they *do* happen, you just have to take the hit and move forward.",
				],
			},
		],
		links: [{ label: "Botpress", href: "https://botpress.com/" }],
		publishedAt: "2026-05-20",
		updatedAt: "2026-05-20",
		seo: {
			title: "Botpress Case Study | Carson Spriggs-Audet",
			description:
				"Learn about my experience at Botpress and the lessons I learned while working on various projects.",
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
