import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import "@/styles.scss";
import BrandMark from "@/components/BrandMark";
import CaseStudyRail from "@/components/CaseStudyRail";
import SiteNav from "@/components/SiteNav";
import { linkLogo, stackLogo } from "@/data/brandLogos";
import {
	type CaseStudy,
	caseStudies,
	formatPeriod,
	getCaseStudyBySlug,
} from "@/data/caseStudies";
import { absoluteUrl, BASE_URL, caseStudyCard, SITE_NAME } from "@/lib/seo";

type RouteParams = {
	slug: string;
};

type PageProps = {
	readonly params: Promise<RouteParams>;
};

export function generateStaticParams() {
	return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) {
		return {};
	}

	const title =
		caseStudy.seo?.title ?? `${caseStudy.title} Case Study | ${SITE_NAME}`;
	const description = caseStudy.seo?.description ?? caseStudy.summary;
	// Each study ships its own 1200x630 card in public/og, so a shared link
	// previews that study instead of the generic site card.
	const socialImage =
		caseStudy.seo?.socialImage ?? caseStudyCard(caseStudy.slug);
	const canonicalPath = `/case-studies/${caseStudy.slug}`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalPath,
		},
		keywords: [
			caseStudy.title,
			...caseStudy.stack,
			SITE_NAME,
			"case study",
			"hackathon project",
			"software engineer",
		],
		openGraph: {
			title,
			description,
			url: `${BASE_URL}${canonicalPath}`,
			type: "article",
			images: [
				{
					url: absoluteUrl(socialImage),
					width: 1200,
					height: 630,
					alt: `${caseStudy.title} case study preview`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [absoluteUrl(socialImage)],
		},
	};
}

const CHIP_TONES: Record<string, string> = { "+": "good", "-": "bad" };

function Prose({ text }: { text: string }) {
	const parts = text.split(/(`[^`]+`|\*[^*]+\*|\[\[[^\]]+\]\])/g);
	return parts.map((part, idx) => {
		const key = `${idx}-${part}`;
		const chip = /^\[\[([+-]?)(.+)\]\]$/.exec(part);
		if (chip) {
			const tone = CHIP_TONES[chip[1]];
			return (
				<span key={key} className={`cs-chip${tone ? ` cs-chip--${tone}` : ""}`}>
					{chip[2]}
				</span>
			);
		}
		if (part.startsWith("`") && part.endsWith("`")) {
			return <code key={key}>{part.slice(1, -1)}</code>;
		}
		if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
			return <em key={key}>{part.slice(1, -1)}</em>;
		}
		return part;
	});
}

type SectionMediaData = NonNullable<CaseStudy["sections"][number]["media"]>;

function SectionMedia({ media }: { media: SectionMediaData }) {
	const isPair = media.items.length === 2;
	return (
		<div className={`cs-media${isPair ? " cs-media--pair" : ""}`}>
			{media.items.map((item) => (
				<figure key={item.src} className="cs-media__item">
					<div
						className="cs-media__frame"
						style={
							item.aspectRatio ? { aspectRatio: item.aspectRatio } : undefined
						}
					>
						<Image
							src={item.src}
							alt={item.alt}
							fill
							sizes={
								isPair
									? "(max-width: 700px) 100vw, 470px"
									: "(max-width: 1040px) 100vw, 960px"
							}
						/>
					</div>
					<figcaption>
						{item.caption}
						{item.source ? (
							<>
								{" Image: "}
								<a href={item.source.href} target="_blank" rel="noreferrer">
									{item.source.label}
								</a>
								.
							</>
						) : null}
					</figcaption>
				</figure>
			))}
		</div>
	);
}

type SectionCalloutData = NonNullable<CaseStudy["sections"][number]["callout"]>;

function SectionCallout({ callout }: { callout: SectionCalloutData }) {
	return (
		<figure className="cs-callout">
			<div className="cs-callout__frame">
				<Image
					src={callout.image.src}
					alt={callout.image.alt}
					fill
					sizes="(max-width: 700px) 100vw, 200px"
				/>
			</div>
			<div>
				<blockquote cite={callout.source.href}>
					<p>“{callout.quote}”</p>
				</blockquote>
				<figcaption>
					{callout.attribution},{" "}
					<a href={callout.source.href} target="_blank" rel="noreferrer">
						{callout.source.label}
					</a>
				</figcaption>
			</div>
		</figure>
	);
}

function MetaGrid({ caseStudy }: { caseStudy: CaseStudy }) {
	return (
		<dl className="cs-meta">
			<div>
				<dt>Type</dt>
				<dd>{caseStudy.projectType}</dd>
			</div>
			<div>
				<dt>Timeline</dt>
				<dd>{formatPeriod(caseStudy.period)}</dd>
			</div>
			<div>
				<dt>Stack</dt>
				<dd className="cs-meta__stack">
					{caseStudy.stack.map((name) => (
						<BrandMark key={name} label={name} logo={stackLogo(name)} />
					))}
				</dd>
			</div>
			<div>
				<dt>Links</dt>
				<dd className="cs-meta__links">
					{caseStudy.links.map((link) => (
						<BrandMark
							key={link.href}
							label={link.label}
							logo={linkLogo(link.href)}
							href={link.href}
							srLabel={` (${link.label} for ${caseStudy.title}, opens in new tab)`}
						/>
					))}
				</dd>
			</div>
		</dl>
	);
}

export default async function CaseStudyPage({ params }: PageProps) {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) {
		notFound();
	}

	const highlights = caseStudy.presentation?.highlights ?? [];
	const index = caseStudies.indexOf(caseStudy);

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline:
			caseStudy.seo?.title ?? `${caseStudy.title} Case Study | ${SITE_NAME}`,
		description: caseStudy.seo?.description ?? caseStudy.summary,
		datePublished: caseStudy.publishedAt,
		dateModified: caseStudy.updatedAt,
		author: {
			"@type": "Person",
			name: SITE_NAME,
			url: BASE_URL,
		},
		publisher: {
			"@type": "Person",
			name: SITE_NAME,
			url: BASE_URL,
		},
		mainEntityOfPage: `${BASE_URL}/case-studies/${caseStudy.slug}`,
		url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
		image: [
			`${BASE_URL}${caseStudy.seo?.socialImage ?? caseStudyCard(caseStudy.slug)}`,
		],
		keywords: caseStudy.stack.join(", "),
		about: caseStudy.stack,
		abstract: caseStudy.summary,
	};

	const cover = caseStudy.presentation?.cover;
	const railSections = [
		{ id: "overview", title: "Overview" },
		...caseStudy.sections.map(({ id, title }) => ({ id, title })),
	];

	return (
		<main className="cs-page">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD with trusted local data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
			<SiteNav
				trail={[
					{ label: "Case studies", href: "/case-studies" },
					{ label: caseStudy.title },
				]}
			/>
			<CaseStudyRail sections={railSections} />

			<article className="cs-article">
				{cover ? (
					<div className={`cs-cover cs-cover--${cover.tone}`}>
						<Image
							src={cover.src}
							alt=""
							fill
							priority
							sizes="(max-width: 1040px) 100vw, 960px"
						/>
						<p className="cs-cover__title" aria-hidden="true">
							{caseStudy.title}
						</p>
					</div>
				) : null}

				<header id="overview" className="cs-header">
					{caseStudy.presentation?.eyebrow ? (
						<p className="cs-label">{caseStudy.presentation.eyebrow}</p>
					) : null}
					<h1 className="cs-title">{caseStudy.title}</h1>
					<p className="cs-lede">{caseStudy.summary}</p>
					<MetaGrid caseStudy={caseStudy} />
				</header>

				{highlights.length > 0 ? (
					<dl className="cs-highlights">
						{highlights.map((highlight) => (
							<div key={highlight.label}>
								<dt>{highlight.label}</dt>
								<dd>{highlight.value}</dd>
							</div>
						))}
					</dl>
				) : null}

				{caseStudy.image ? (
					<figure className="cs-figure">
						<div className="cs-figure__frame">
							<Image
								src={caseStudy.image}
								alt={`${caseStudy.title} key art`}
								fill
								sizes="(max-width: 1040px) 90vw, 760px"
							/>
						</div>
					</figure>
				) : null}

				<div className="cs-body">
					{caseStudy.sections.map((section) => (
						<section
							key={section.id}
							id={section.id}
							className="cs-section"
							aria-labelledby={`${section.id}-heading`}
						>
							<p className="cs-label">{section.title}</p>
							<h2 id={`${section.id}-heading`} className="cs-section__heading">
								{section.heading ?? section.title}
							</h2>
							<div className="cs-section__body">
								{section.paragraphs.map((paragraph, idx) => (
									<Fragment key={`${section.id}-p-${idx}`}>
										{section.media?.afterParagraph === idx ? (
											<SectionMedia media={section.media} />
										) : null}
										<p>
											<Prose text={paragraph} />
										</p>
									</Fragment>
								))}
								{section.media &&
								section.media.afterParagraph >= section.paragraphs.length ? (
									<SectionMedia media={section.media} />
								) : null}
								{section.callout ? (
									<SectionCallout callout={section.callout} />
								) : null}
								{section.sources?.length ? (
									<nav
										className="cs-meta__links"
										aria-label={`${section.title} sources`}
									>
										{section.sources.map((source) => (
											<BrandMark
												key={source.href}
												label={source.label}
												logo={linkLogo(source.href)}
												href={source.href}
												srLabel=" (source, opens in new tab)"
											/>
										))}
									</nav>
								) : null}
							</div>
						</section>
					))}
				</div>

				<nav className="cs-pager" aria-label="More case studies">
					{[
						{ label: "Previous", study: caseStudies[index - 1] },
						{ label: "Next", study: caseStudies[index + 1] },
					].map(({ label, study }) =>
						study ? (
							<Link
								key={label}
								href={`/case-studies/${study.slug}`}
								className={`cs-pager__link cs-pager__link--${label.toLowerCase()}`}
							>
								<span className="cs-pager__label">{label}</span>
								<span className="cs-pager__title">{study.title}</span>
							</Link>
						) : (
							<span key={label} aria-hidden="true" />
						),
					)}
				</nav>
				<Link href="/case-studies" className="cs-pager__all">
					All case studies
				</Link>
			</article>
		</main>
	);
}
