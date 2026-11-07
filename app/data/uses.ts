type Use = {
	readonly name: string;
	readonly href: string;
	readonly note: string;
	readonly logo: string;
};

type UseCategory = {
	readonly id: string;
	readonly title: string;
	readonly items: readonly Use[];
};

export const usesUpdatedAt = "2026-09-23";

export const useCategories: readonly UseCategory[] = [
	{
		id: "workspace",
		title: "Workspace",
		items: [
			{
				name: "Kero",
				href: "https://github.com/egoist/kero",
				logo: "/logos/uses/kero.png",
				note: "A small, open source terminal workspace. I like that there isn't a mountain of configuration to get through.",
			},
			{
				name: "VS Code",
				href: "https://code.visualstudio.com/",
				logo: "/logos/uses/vscode.png",
				note: "My editor. I keep it plain.",
			},
			{
				name: "T3 Code",
				href: "https://github.com/pingdotgg/t3code",
				logo: "/logos/uses/t3code.png",
				note: "A desktop GUI for running coding agents side by side.",
			},
			{
				name: "Hermes Agent",
				href: "https://github.com/NousResearch/hermes-agent",
				logo: "/logos/uses/hermes.png",
				note: "An open source agent I use in my AI workflow.",
			},
			{
				name: "Wispr Flow",
				href: "https://wisprflow.ai/",
				logo: "/logos/uses/wisprflow.png",
				note: "Voice dictation. I talk through prompts and notes instead of typing them.",
			},
			{
				name: "Obsidian",
				href: "https://obsidian.md/",
				logo: "/logos/uses/obsidian.png",
				note: "Where my notes live, including the knowledge my agents read before they work.",
			},
			{
				name: "Helium",
				href: "https://github.com/imputnet/helium",
				logo: "/logos/uses/helium.png",
				note: "A simpler browser with a nicer experience than Chrome and easier customization.",
			},
			{
				name: "Raycast",
				href: "https://www.raycast.com/",
				logo: "/logos/uses/raycast.png",
				note: "A launcher I like using in my desktop workflow.",
			},
		],
	},
	{
		id: "design",
		title: "Design and inspiration",
		items: [
			{
				name: "Figma",
				href: "https://www.figma.com/",
				logo: "/logos/uses/figma.png",
				note: "Where I work through interfaces and design ideas.",
			},
			{
				name: "Paper",
				href: "https://paper.design/",
				logo: "/logos/uses/paper.png",
				note: "I like its easy Figma integration, shaders, and how quickly I can work with its tools.",
			},
			{
				name: "Mobbin",
				href: "https://mobbin.com/",
				logo: "/logos/uses/mobbin.png",
				note: "A place I look at product interfaces for inspiration.",
			},
			{
				name: "Dribbble",
				href: "https://dribbble.com/",
				logo: "/logos/uses/dribbble.png",
				note: "A stream of visual ideas and design work.",
			},
			{
				name: "shadcn/ui",
				href: "https://ui.shadcn.com/",
				logo: "/logos/uses/shadcn.png",
				note: "Components I work with enough to have built my own tweaking tool for them.",
			},
		],
	},
	{
		id: "building",
		title: "Building software",
		items: [
			{
				name: "TypeScript",
				href: "https://www.typescriptlang.org/",
				logo: "/logos/stack/typescript.svg",
				note: "A regular part of my frontend, tooling, and automation work.",
			},
			{
				name: "Python",
				href: "https://www.python.org/",
				logo: "/logos/stack/python.svg",
				note: "What I reach for in automation, backend, and data projects.",
			},
			{
				name: "PHP",
				href: "https://www.php.net/",
				logo: "/logos/stack/php.svg",
				note: "A language I've built web backends in.",
			},
			{
				name: "C#",
				href: "https://learn.microsoft.com/dotnet/csharp/",
				logo: "/logos/stack/csharp.svg",
				note: "A language I've used for .NET apps and IoT projects.",
			},
			{
				name: "Next.js",
				href: "https://nextjs.org/",
				logo: "/logos/stack/nextdotjs.svg",
				note: "The framework behind this portfolio and several of my web projects.",
			},
			{
				name: "FastAPI",
				href: "https://fastapi.tiangolo.com/",
				logo: "/logos/stack/fastapi.svg",
				note: "A Python API framework I've used in local media tooling.",
			},
			{
				name: "PostgreSQL",
				href: "https://www.postgresql.org/",
				logo: "/logos/stack/postgresql.svg",
				note: "A database I've used across AI and web projects.",
			},
			{
				name: "Redis",
				href: "https://redis.io/",
				logo: "/logos/stack/redis.svg",
				note: "An in-memory store I've used for caching and queues.",
			},
			{
				name: "Apache Kafka",
				href: "https://kafka.apache.org/",
				logo: "/logos/stack/kafka.svg",
				note: "Event streaming I've worked with between services.",
			},
			{
				name: "Apache HTTP Server",
				href: "https://httpd.apache.org/",
				logo: "/logos/stack/apache.png",
				note: "A web server I've configured and deployed behind.",
			},
			{
				name: "Docker",
				href: "https://www.docker.com/",
				logo: "/logos/stack/docker.svg",
				note: "How I package and run services locally and in deploys.",
			},
			{
				name: "Tilt",
				href: "https://tilt.dev/",
				logo: "/logos/stack/tilt.png",
				note: "One of the most useful local development tools I've worked with: one command to bring up a shared environment.",
			},
		],
	},
	{
		id: "services",
		title: "Services and AI",
		items: [
			{
				name: "Upstash",
				href: "https://upstash.com/",
				logo: "/logos/stack/upstash.svg",
				note: "I have used QStash to make background jobs and triggers more reliable.",
			},
			{
				name: "AWS",
				href: "https://aws.amazon.com/",
				logo: "/logos/uses/aws.png",
				note: "Cloud infrastructure I've used for backend and automation work.",
			},
			{
				name: "Resend",
				href: "https://resend.com/",
				logo: "/logos/uses/resend.png",
				note: "Email infrastructure I like having in my toolkit.",
			},
			{
				name: "SendGrid",
				href: "https://sendgrid.com/",
				logo: "/logos/uses/sendgrid.svg",
				note: "Transactional email I send a lot of at work.",
			},
			{
				name: "Vercel",
				href: "https://vercel.com/",
				logo: "/logos/uses/vercel.png",
				note: "Where I host web projects, including this site.",
			},
			{
				name: "Cloudflare",
				href: "https://www.cloudflare.com/",
				logo: "/logos/uses/cloudflare.png",
				note: "A service I use around my web projects.",
			},
			{
				name: "Hugging Face",
				href: "https://huggingface.co/",
				logo: "/logos/uses/huggingface.png",
				note: "A place I explore models and AI tooling.",
			},
			{
				name: "OpenRouter",
				href: "https://openrouter.ai/",
				logo: "/logos/uses/openrouter.png",
				note: "A way to work with different models through one API.",
			},
			{
				name: "GitHub",
				href: "https://github.com/",
				logo: "/logos/stack/github.svg",
				note: "Where my personal and open source code lives, including this site.",
			},
			{
				name: "GitLab",
				href: "https://gitlab.com/",
				logo: "/logos/uses/gitlab.png",
				note: "The forge at work: merge requests, CI, and reviews.",
			},
		],
	},
];
