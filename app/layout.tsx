import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import SiteFooter from "@/components/SiteFooter";
import {
	absoluteUrl,
	BASE_URL,
	DEFAULT_DESCRIPTION,
	DEFAULT_SOCIAL_IMAGE,
	DEFAULT_SOCIAL_IMAGE_ALT,
	DEFAULT_TITLE,
	SITE_NAME,
} from "@/lib/seo";
import "./globals.scss";

const HOME_KEYWORDS = [
	"Carson Spriggs",
	"software developer Canada",
	"TypeScript developer",
	"hackathon projects",
	"Qohash",
	"Botpress",
	"Memorial University",
	"CUSEC",
	"Canadian University Software Engineering Conference",
];

// Search-engine ownership tokens, set as env vars in the Vercel project (all
// environments, or production only). Absent vars emit no tag at all, so a fork
// or a preview deploy never claims ownership of the domain.
const GOOGLE_SITE_VERIFICATION =
	process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const BING_SITE_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	verification: {
		...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
		...(BING_SITE_VERIFICATION
			? { other: { "msvalidate.01": BING_SITE_VERIFICATION } }
			: {}),
	},
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
	themeColor: "#fdfdfc",
};

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
			jobTitle: "AI Software Engineer",
			worksFor: {
				"@type": "Organization",
				name: "Qohash",
				url: "https://Qohash.com/",
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
				"AI and machine learning",
				"Open source software",
				"Technical leadership",
				"Software architecture",
				"Cloud computing",
				"Design systems",
				"Accessibility",
				"Performance optimization",
				"Developer experience",
				"Interface design",
				"User experience",
				"UI/UX design",
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
		<html lang="en-CA">
			<head>
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
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				<link
					rel="preload"
					href="/fonts/geist-latin.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				{children}
				<SiteFooter />
				<ScrollToTop />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
