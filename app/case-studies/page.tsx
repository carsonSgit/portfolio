import Link from "next/link";
import "@/themes/mono/styles/v2.scss";
import { caseStudies } from "@/data/caseStudies";
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

function formatCaseStudyDate(value: string) {
	return new Intl.DateTimeFormat("en", {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(new Date(`${value}T00:00:00Z`));
}

export default function CaseStudiesIndexPage() {
	return (
		<main className="case-study-page">
			<div className="case-study-shell case-study-shell--index">
				<Link href="/" className="case-study-backlink">
					Back home
				</Link>
				<header className="case-studies-hero">
					<h1 className="case-studies-title">Case Studies</h1>
					<p className="case-studies-intro">
						Short write-ups on what was built, which constraints mattered, and
						how each prototype came together once the rough demo phase was over.
					</p>
				</header>
				<section aria-label="Case study list" className="case-studies-list">
					{caseStudies.map((caseStudy) => (
						<article key={caseStudy.slug} className="case-study-card">
							<h2 className="case-study-card__title">
								<Link
									href={`/case-studies/${caseStudy.slug}`}
									className="case-study-card__link"
								>
									{caseStudy.title}
								</Link>
							</h2>
							<p className="case-study-card__summary">{caseStudy.summary}</p>
							<p className="case-study-card__meta">
								{caseStudy.projectType}
								<span aria-hidden="true"> · </span>
								{formatCaseStudyDate(caseStudy.updatedAt)}
							</p>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
