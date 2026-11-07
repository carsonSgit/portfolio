import type { Metadata } from "next";
import Link from "next/link";
import "@/styles.scss";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
	title: "Page not found | Carson Spriggs-Audet",
	description: "That page doesn't exist. Here's the way back.",
	// Next emits its own noindex for the not-found route; this adds follow so
	// link equity still flows out of a mistyped URL.
	robots: { index: false, follow: true },
};

export default function NotFound() {
	return (
		<main className="case-study-page">
			<SiteNav trail={[{ label: "Not found" }]} />
			<div className="case-study-shell">
				<header className="case-studies-hero">
					<h1 className="case-studies-title">404</h1>
					<p className="case-studies-intro">
						That page doesn&rsquo;t exist. Nothing broke — the link was probably
						just retired.
					</p>
				</header>
				<p className="case-studies-intro">
					<Link href="/">Home</Link> ·{" "}
					<Link href="/case-studies">Case studies</Link> ·{" "}
					<Link href="/uses">Uses</Link>
				</p>
			</div>
		</main>
	);
}
