import Image from "next/image";
import CaseStudyRail from "@/components/CaseStudyRail";
import SiteNav from "@/components/SiteNav";
import "@/styles.scss";
import { useCategories, usesUpdatedAt } from "@/data/uses";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
	title: "Uses | Carson Spriggs-Audet",
	description:
		"A living list of the tools, software, and services Carson Spriggs-Audet uses and likes exploring.",
	pathname: "/uses",
	keywords: ["Carson Spriggs-Audet uses", "developer tools", "software"],
});

const railSections = [
	{ id: "overview", title: "Overview" },
	...useCategories.map(({ id, title }) => ({ id, title })),
];

export default function UsesPage() {
	return (
		<main className="cs-page">
			<SiteNav trail={[{ label: "Uses" }]} />
			<CaseStudyRail sections={railSections} />

			<article className="cs-article">
				<header id="overview" className="cs-header">
					<p className="cs-label">Updated {usesUpdatedAt}</p>
					<h1 className="cs-title">Uses</h1>
					<p className="cs-lede">
						A living list of tools I use and things I enjoy exploring. Some are
						daily drivers; others are here because they made an impression on
						me.
					</p>
				</header>

				<div className="cs-body">
					{useCategories.map((category) => (
						<section
							key={category.id}
							id={category.id}
							className="cs-section"
							aria-labelledby={`${category.id}-heading`}
						>
							<p className="cs-label">{category.items.length} tools</p>
							<h2 id={`${category.id}-heading`} className="cs-section__heading">
								{category.title}
							</h2>
							<ul className="uses-list">
								{category.items.map((item) => (
									<li className="uses-item" key={item.name}>
										<Image
											className="uses-item__logo"
											src={item.logo}
											width={28}
											height={28}
											alt=""
										/>
										<div className="uses-item__text">
											<a
												href={item.href}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.name}
												<span className="sr-only"> (opens in new tab)</span>
											</a>
											<p>{item.note}</p>
										</div>
									</li>
								))}
							</ul>
						</section>
					))}
				</div>
			</article>
		</main>
	);
}
