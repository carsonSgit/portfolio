import type * as z from "zod";
import type { projectSchema } from "../types/zodTypes";
import { colours } from "./colours";

export const projects: z.infer<typeof projectSchema>[] = [
	{
		year: 2025,
		title: "Argus",
		description:
			"Computer-vision hackathon prototype for monitoring live video feeds and surfacing notable events.",
		languages: {
			ai: { name: "AI", backgroundColour: colours.ai },
			cv: { name: "Computer Vision", backgroundColour: colours.cv },
			ts: { name: "TypeScript", backgroundColour: colours.ts },
			db: { name: "PostgreSQL", backgroundColour: colours.postgresql },
			rtmp: { name: "RTMP", backgroundColour: colours.rtmp },
		},
		links: [
			{ label: "github", href: "https://github.com/GodPuffin/Argus" },
			{ label: "devpost", href: "https://devpost.com/software/argus-w6i0pv" },
		],
		caseStudySlug: "argus",
	},
	{
		year: 2025,
		title: "CropCare",
		description:
			"Sensor-driven farming prototype that connects plant monitoring, cloud messaging, and remote control.",
		languages: {
			py: { name: "Python", backgroundColour: colours.py },
			csharp: { name: "C#", backgroundColour: colours.csharp },
			hardware: { name: "Hardware", backgroundColour: colours.hardware },
			azure: { name: "Azure", backgroundColour: colours.azure },
			iot: { name: "IoT", backgroundColour: colours.iot },
		},
		links: [
			{ label: "github", href: "https://github.com/carsonSgit/CropCare" },
			{ label: "live demo", href: "https://carsonsgit.github.io/cropcare-3d/" },
		],
		caseStudySlug: "cropcare",
	},
	{
		year: 2025,
		title: "Linky",
		description:
			"Retrieval-backed learning tool that turns a URL into a searchable knowledge base.",
		languages: {
			mantine: { name: "Mantine", backgroundColour: colours.mantine },
			ts: { name: "TypeScript", backgroundColour: colours.ts },
			ai: { name: "AI", backgroundColour: colours.ai },
			db: { name: "PostgreSQL", backgroundColour: colours.postgresql },
		},
		links: [
			{ label: "github", href: "https://github.com/carsonSgit/Linky" },
			{ label: "live product", href: "https://www.linky.im/" },
		],
		caseStudySlug: "linky",
	},
	{
		year: 2025,
		title: "Pathfinder",
		description:
			"3D career exploration prototype with AI-assisted recommendations and interactive data views.",
		languages: {
			threejs: { name: "Three.js", backgroundColour: colours.threejs },
			ts: { name: "TypeScript", backgroundColour: colours.ts },
			ai: { name: "AI", backgroundColour: colours.ai },
			zustand: { name: "Zustand", backgroundColour: colours.zustand },
		},
		links: [
			{
				label: "github",
				href: "https://github.com/xsachax/pathfinder_conuhacks-2025",
			},
			{
				label: "live demo",
				href: "https://www.pathfinderhelpsyoudecidewhereyouwantto.work/?",
			},
		],
	},
	{
		year: 2024,
		title: "Mice Neural Decoding",
		description:
			"Hackathon research project using neural activity data to predict mouse navigation decisions.",
		languages: {
			py: { name: "Python", backgroundColour: colours.py },
			ml: { name: "Machine Learning", backgroundColour: colours.ml },
			neuroscience: {
				name: "Neuroscience",
				backgroundColour: colours.neuroscience,
			},
		},
		links: [
			{
				label: "github",
				href: "https://github.com/carsonSgit/Mice-Neural-Decoding-ML",
			},
			{
				label: "notebook",
				href:
					"https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb",
			},
		],
	},
];
