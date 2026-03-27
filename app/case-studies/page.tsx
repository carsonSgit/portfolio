import Image from "next/image";
import Link from "next/link";
import "@/styles.scss";
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
					<p className="case-studies-kicker">Selected work</p>
					<h1 className="case-studies-title">Case Studies</h1>
					<p className="case-studies-intro">
						Readable project write-ups on how each prototype was framed, built,
						and shaped into something more intentional than a demo.
					</p>
				</header>
				<section aria-label="Case study list" className="case-studies-list">
					{caseStudies.map((caseStudy) => (
						<article
							key={caseStudy.slug}
							className="case-study-card"
							data-accent={caseStudy.presentation?.accent ?? "mist"}
						>
							<Link
								href={`/case-studies/${caseStudy.slug}`}
								className="case-study-card__surface"
							>
								<div className="case-study-card__content">
									<p className="case-study-card__meta">
										{caseStudy.projectType}
									</p>
									<div className="case-study-card__text">
										<h2 className="case-study-card__title">{caseStudy.title}</h2>
										<p className="case-study-card__summary">
											{caseStudy.summary}
										</p>
									</div>
									<ul className="case-study-card__stack" aria-hidden="true">
										{caseStudy.stack.slice(0, 3).map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
								{caseStudy.image ? (
									<div className="case-study-card__media">
										<div className="case-study-card__image-wrap">
											<Image
												src={caseStudy.image}
												alt=""
												fill
												className="case-study-card__image"
												sizes="(max-width: 900px) 100vw, 30rem"
											/>
										</div>
									</div>
								) : null}
							</Link>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
