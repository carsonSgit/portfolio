import Link from "next/link";
import { Fragment } from "react";
import { breadcrumbSchema, SITE_NAME } from "@/lib/seo";

type Crumb = {
	label: string;
	href?: string;
};

const SECTIONS = [
	{ label: "Case studies", href: "/case-studies" },
	{ label: "Uses", href: "/uses" },
];

const SiteNav = ({ trail }: { trail: Crumb[] }) => (
	<header className="site-nav">
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
			dangerouslySetInnerHTML={{
				__html: JSON.stringify([
					{
						"@context": "https://schema.org",
						...breadcrumbSchema([
							{ name: SITE_NAME, href: "/" },
							...trail.map(({ label, href }) => ({ name: label, href })),
						]),
					},
				]),
			}}
		/>
		<div className="site-nav__inner">
			<nav className="site-nav__crumbs" aria-label="Breadcrumb">
				<Link href="/">Carson Spriggs-Audet</Link>
				{trail.map((crumb) => (
					<Fragment key={crumb.label}>
						<span className="site-nav__sep" aria-hidden="true">
							/
						</span>
						{crumb.href ? (
							<Link href={crumb.href}>{crumb.label}</Link>
						) : (
							<span aria-current="page">{crumb.label}</span>
						)}
					</Fragment>
				))}
			</nav>
			<nav className="site-nav__sections" aria-label="Sections">
				{SECTIONS.map((section) => (
					<Link key={section.href} href={section.href}>
						{section.label}
					</Link>
				))}
			</nav>
		</div>
	</header>
);

export default SiteNav;
