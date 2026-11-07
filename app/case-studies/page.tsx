import "@/styles.scss";
import CaseStudyIndex from "@/components/CaseStudyIndex";
import SiteNav from "@/components/SiteNav";
import { caseStudies, formatPeriod } from "@/data/caseStudies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
	title: "Case Studies | Carson Spriggs",
	description:
		"Short write-ups of selected hackathon projects by Carson Spriggs, focused on implementation choices, constraints, and outcomes.",
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
