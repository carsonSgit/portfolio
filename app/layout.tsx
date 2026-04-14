import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {
	absoluteUrl,
	BASE_URL,
	DEFAULT_DESCRIPTION,
	DEFAULT_SOCIAL_IMAGE,
	DEFAULT_SOCIAL_IMAGE_ALT,
	DEFAULT_TITLE,
	SITE_NAME,
	siteVerification,
} from "@/lib/seo";
import CommandPaletteProvider from "@/components/shared/CommandPaletteProvider";
import "./globals.scss";

const HOME_KEYWORDS = [
	"Carson Spriggs",
	"software engineer",
	"product engineer",
	"software developer Canada",
	"TypeScript developer",
	"developer tools",
	"hackathon projects",
	"Fundica",
	"Memorial University",
	"CUSEC",
];

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: DEFAULT_TITLE,
	description: DEFAULT_DESCRIPTION,
	applicationName: SITE_NAME,
	authors: [{ name: SITE_NAME, url: BASE_URL }],
	creator: SITE_NAME,
	publisher: SITE_NAME,
	keywords: HOME_KEYWORDS,
	alternates: {
		canonical: absoluteUrl("/"),
	},
	verification: siteVerification,
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/manifest.json",
	openGraph: {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		url: BASE_URL,
		siteName: SITE_NAME,
		locale: "en_CA",
		type: "website",
		images: [
			{
				url: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
				width: 1200,
				height: 630,
				alt: DEFAULT_SOCIAL_IMAGE_ALT,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		images: [absoluteUrl(DEFAULT_SOCIAL_IMAGE)],
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#111" },
		{ media: "(prefers-color-scheme: light)", color: "#f4f4f7" },
	],
};

const COLOR_MODE_BOOTSTRAP = `(() => {
  try {
    const stored = window.localStorage.getItem('portfolio:color-mode');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const mode = stored === 'light' || stored === 'dark' ? stored : (prefersLight ? 'light' : 'dark');
    document.documentElement.setAttribute('data-mode', mode);
    document.documentElement.style.colorScheme = mode;
    if (mode === 'light') document.documentElement.style.backgroundColor = '#f4f4f7';
  } catch (_) {
    document.documentElement.setAttribute('data-mode', 'light');
  }
})();`;

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${BASE_URL}#person`,
			name: "Carson Spriggs",
			description: DEFAULT_DESCRIPTION,
			url: BASE_URL,
			image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
			sameAs: [
				"https://github.com/carsonSgit",
				"https://linkedin.com/in/carsonspriggs",
			],
			jobTitle: "Software Engineer",
			worksFor: {
				"@type": "Organization",
				name: "Fundica",
				url: "https://fundica.com/",
			},
			homeLocation: {
				"@type": "Country",
				name: "Canada",
			},
			alumniOf: [
				{
					"@type": "CollegeOrUniversity",
					name: "Memorial University of Newfoundland",
					url: "https://www.mun.ca/",
				},
				{
					"@type": "CollegeOrUniversity",
					name: "Concordia University",
					url: "https://www.concordia.ca/",
				},
				{
					"@type": "CollegeOrUniversity",
					name: "John Abbott College",
					url: "https://www.johnabbott.qc.ca/",
				},
			],
			knowsAbout: [
				"Product engineering",
				"Developer tools",
				"TypeScript",
				"Web applications",
				"Technical communication",
			],
		},
		{
			"@type": "WebSite",
			"@id": `${BASE_URL}#website`,
			url: BASE_URL,
			name: SITE_NAME,
			description: DEFAULT_DESCRIPTION,
			inLanguage: "en-CA",
			publisher: {
				"@id": `${BASE_URL}#person`,
			},
		},
	],
};

export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en-CA" data-theme="mono" data-mode="light">
			<head>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static bootstrap to prevent FOUC, no user input
					dangerouslySetInnerHTML={{ __html: COLOR_MODE_BOOTSTRAP }}
				/>
				{process.env.NODE_ENV === "development" && (
					<Script
						src="//unpkg.com/react-grab/dist/index.global.js"
						crossOrigin="anonymous"
						strategy="beforeInteractive"
					/>
				)}
				{process.env.NODE_ENV === "development" && (
					<Script
						src="//unpkg.com/@react-grab/mcp/dist/client.global.js"
						strategy="lazyOnload"
					/>
				)}
				<link
					rel="preload"
					href="/fonts/CommitMono-400-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/CommitMono-700-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="theme-mono">
				<CommandPaletteProvider />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
