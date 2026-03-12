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
				<nav className="case-study-breadcrumb" aria-label="Breadcrumb">
					<Link href="/" className="case-study-backlink">
						Back home
					</Link>
				</nav>
				<header className="case-studies-hero">
					<p className="case-study-eyebrow">Case Studies</p>
					<h1 className="case-studies-title">
						Selected hackathon builds, explained with more context.
					</h1>
					<p className="case-studies-intro">
						Short write-ups on what was built, which constraints mattered, and how
						each prototype came together once the rough demo phase was over.
					</p>
				</header>
				<section aria-label="Case study list" className="case-studies-list">
					{caseStudies.map((caseStudy) => (
						<article key={caseStudy.slug} className="case-study-row">
							<p className="case-study-row__meta">
								{caseStudy.projectType}
								<span aria-hidden="true"> / </span>
								Updated {formatCaseStudyDate(caseStudy.updatedAt)}
							</p>
							<div className="case-study-row__body">
								<h2 className="case-study-row__title">
									<Link
										href={`/case-studies/${caseStudy.slug}`}
										className="case-study-row__title-link"
									>
										{caseStudy.title}
									</Link>
								</h2>
								<p className="case-study-row__summary">{caseStudy.summary}</p>
							</div>
							<Link
								href={`/case-studies/${caseStudy.slug}`}
								className="case-study-link"
							>
								read write-up
							</Link>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
