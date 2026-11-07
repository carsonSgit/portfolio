import "@/styles.scss";
import CaseStudyIndex from "@/components/CaseStudyIndex";
import SiteNav from "@/components/SiteNav";
import { caseStudies, formatPeriod } from "@/data/caseStudies";
import {
	absoluteUrl,
	collectionSchema,
	createPageMetadata,
	SITE_NAME,
} from "@/lib/seo";

export const metadata = createPageMetadata({
	title: `Case Studies | ${SITE_NAME}`,
	description:
		"Short write-ups of selected hackathon projects by Carson Spriggs-Audet, focused on implementation choices, constraints, and outcomes.",
	pathname: "/case-studies",
	keywords: [
		"Carson Spriggs case studies",
		"hackathon project write-ups",
		"software engineer portfolio",
		"Canada software engineer portfolio",
	],
});

export default function CaseStudiesIndexPage() {
	return (
		<main className="case-study-page">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD with trusted local data
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						...collectionSchema({
							name: `Case Studies | ${SITE_NAME}`,
							pathname: "/case-studies",
							description:
								"Short write-ups of selected hackathon projects, focused on implementation choices, constraints, and outcomes.",
							items: caseStudies.map((caseStudy) => ({
								name: caseStudy.title,
								url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
							})),
						}),
					}),
				}}
			/>
			<SiteNav trail={[{ label: "Case studies" }]} />
			<div className="case-study-shell">
				<header className="case-studies-hero">
					<h1 className="case-studies-title">Case Studies</h1>
					<p className="case-studies-intro">
						Readable project write-ups on how each prototype was framed, built,
						and shaped into something more intentional than a demo.
					</p>
				</header>
				<CaseStudyIndex
					cards={caseStudies.map((caseStudy) => ({
						slug: caseStudy.slug,
						title: caseStudy.title,
						summary: caseStudy.summary,
						projectType: caseStudy.projectType,
						date: formatPeriod(caseStudy.period),
						cover: caseStudy.presentation?.cover?.src,
					}))}
				/>
			</div>
		</main>
	);
}
