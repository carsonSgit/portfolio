export interface CaseStudyLink {
	label: string;
	href: string;
}

export interface CaseStudySeo {
	title?: string;
	description?: string;
	socialImage?: string;
}

export interface CaseStudySection {
	id: string;
	title: string;
	paragraphs: string[];
}

export interface CaseStudy {
	slug: string;
	title: string;
	summary: string;
	projectType: string;
	stack: string[];
	sections: CaseStudySection[];
	links: CaseStudyLink[];
	publishedAt: string;
	updatedAt: string;
	seo?: CaseStudySeo;
}

export const caseStudies: CaseStudy[] = [
	{
		slug: "argus",
		title: "Argus",
		summary:
			"Hackathon prototype for monitoring live video feeds with event detection and operator review tools.",
		projectType: "Hackathon prototype",
		stack: ["TypeScript", "AI", "Computer Vision", "PostgreSQL", "RTMP"],
		sections: [
			{
				id: "context",
				title: "Context",
				paragraphs: [
					"Argus started as a fast experiment in making live video review feel more usable for teams that need signal without watching every frame themselves.",
					"The core question was whether ingest, computer-vision analysis, and operator review could be shown as one coherent workflow instead of three disconnected tools.",
				],
			},
			{
				id: "build",
				title: "Build",
				paragraphs: [
					"I framed the demo around one continuous loop: bring in a live feed, analyze it automatically, and surface notable events in a review interface that still felt operator-driven.",
					"The prototype stayed grounded in real constraints, with streaming, typed application code, and persistent storage carrying the idea beyond a superficial hackathon mock-up.",
				],
			},
			{
				id: "takeaways",
				title: "Takeaways",
				paragraphs: [
					"The result showed that computer-vision assistance could reduce constant manual watching while keeping clear review points for a human operator.",
					"It also became a better portfolio story because the architecture, product choices, and tradeoffs could be explained as one end-to-end system.",
				],
			},
		],
		links: [
			{ label: "GitHub", href: "https://github.com/GodPuffin/Argus" },
			{ label: "Devpost", href: "https://devpost.com/software/argus-w6i0pv" },
		],
		publishedAt: "2025-02-01",
		updatedAt: "2026-03-11",
		seo: {
			title: "Argus Case Study | Carson Spriggs",
			description:
				"How Carson Spriggs built Argus, a hackathon prototype that combines live video ingest, event detection, and operator review.",
			socialImage: "/klungo.png",
		},
	},
	{
		slug: "cropcare",
		title: "CropCare",
		summary:
			"Hackathon prototype for plant monitoring and control using sensors, cloud messaging, and operator dashboards.",
		projectType: "Hackathon prototype",
		stack: ["Python", "C#", "IoT", "Azure", "MQTT", "Hardware"],
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
		publishedAt: "2025-01-20",
		updatedAt: "2026-03-11",
		seo: {
			title: "CropCare Case Study | Carson Spriggs",
			description:
				"How Carson Spriggs built CropCare, a hackathon prototype that links sensor data, Azure services, and practical automation workflows.",
			socialImage: "/klungo.png",
		},
	},
	{
		slug: "linky",
		title: "Linky",
		summary:
			"Hackathon prototype that turns a URL into a searchable knowledge base with retrieval-backed answers.",
		projectType: "Hackathon prototype",
		stack: ["TypeScript", "AI", "RAG", "PostgreSQL", "Mantine"],
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
		publishedAt: "2025-01-28",
		updatedAt: "2026-03-11",
		seo: {
			title: "Linky Case Study | Carson Spriggs",
			description:
				"How Carson Spriggs built Linky, a hackathon prototype that uses retrieval and interface design to improve exploration and learning.",
			socialImage: "/klungo.png",
		},
	},
];

export function getCaseStudyBySlug(slug: string) {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
