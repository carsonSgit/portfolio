"use client";

import Image from "next/image";
import TabBar, { panelId, tabId } from "@/components/TabBar";
import { caseStudies, formatPeriod } from "@/data/caseStudies";
import {
	educationExp,
	extraCurricularExp,
	professionalExp,
} from "@/data/experiences";
import { projects } from "@/data/projects";
import { replaceHash, useHash } from "@/lib/useHash";

const institutionLogos: Record<string, string> = {
	Qohash: "/logos/qohash.png",
	Botpress: "/logos/botpress.png",
	Fundica: "/logos/fundica.svg",
	"Tail'ed": "/logos/tailed-transparent.png",
	"Ville de Kirkland": "/logos/kirkland.png",
	"Memorial University": "/logos/memorial.png",
	"Concordia University": "/logos/concordia.png",
	"John Abbott College": "/logos/john-abbott.png",
	CUSEC: "/logos/cusec.png",
	JACHacks: "/logos/jachacks.png",
	Mitacs: "/logos/mitacs.jpg",
};

type Entry = {
	institution?: string;
	logo?: string;
	date?: string;
	title: string;
	summary: string;
	href: string;
	external: boolean;
};

type Tab = {
	id: string;
	label: string;
	entries: Entry[];
};

const dateRange = ([start, end]: string[]) =>
	start === end ? start : `${start} to ${end}`;

const fromExperience = (
	items: typeof professionalExp,
	{ dated }: { dated: boolean },
): Entry[] =>
	items.map((item) => ({
		date: dated ? dateRange(item.date) : undefined,
		title: item.title,
		institution: item.institution,
		logo: item.logo ?? institutionLogos[item.institution],
		summary: item.tagline ?? item.description[0],
		href: item.link,
		external: !item.link.startsWith("/"),
	}));

const TABS: Tab[] = [
	{
		id: "experience",
		label: "Experience",
		entries: fromExperience(professionalExp, { dated: true }),
	},
	{
		id: "academics",
		label: "Academics",
		entries: fromExperience(educationExp, { dated: true }),
	},
	{
		id: "extra-curricular",
		label: "Extra-Curricular",
		entries: fromExperience(extraCurricularExp, { dated: false }),
	},
	{
		id: "projects",
		label: "Projects",
		entries: projects.map((project) => ({
			title: project.title,
			summary: project.description,
			href: project.caseStudySlug
				? `/case-studies/${project.caseStudySlug}`
				: project.links[0].href,
			external: !project.caseStudySlug,
		})),
	},
	{
		id: "case-studies",
		label: "Case Studies",
		entries: caseStudies.map((caseStudy) => ({
			date: formatPeriod(caseStudy.period),
			title: caseStudy.title,
			summary: caseStudy.summary,
			href: `/case-studies/${caseStudy.slug}`,
			external: false,
		})),
	},
	{
		id: "uses",
		label: "Uses",
		entries: [
			{
				title: "Tools I use",
				summary: "Software, services, and interesting things in my toolkit.",
				href: "/uses",
				external: false,
			},
		],
	},
];

export const useActiveTab = () => {
	const hash = useHash();
	return TABS.find((tab) => tab.id === hash) ?? TABS[0];
};

const EntryList = ({ entries }: { entries: Entry[] }) => (
	// biome-ignore lint/a11y: Safari drops list semantics when list-style is none
	<ul className="directory__list" role="list">
		{entries.map((entry) => (
			<li key={entry.title}>
				<a
					className="entry"
					href={entry.href}
					{...(entry.external
						? { target: "_blank", rel: "noopener noreferrer" }
						: {})}
				>
					{entry.logo ? (
						<span className="entry__logo">
							<Image src={entry.logo} width={28} height={28} alt="" />
						</span>
					) : null}
					<span className="entry__text">
						<span className="entry__title">
							{entry.title}
							{entry.institution ? (
								<span className="entry__institution">
									{" "}
									@ {entry.institution}
								</span>
							) : null}
							<span className="entry__arrow" aria-hidden="true">
								↗
							</span>
							{entry.external ? (
								<span className="sr-only"> (opens in new tab)</span>
							) : null}
						</span>
						<span className="entry__summary">{entry.summary}</span>
					</span>
					{entry.date ? (
						<span className="entry__date">{entry.date}</span>
					) : null}
				</a>
			</li>
		))}
	</ul>
);

const Directory = () => {
	const active = useActiveTab();

	return (
		<section className="directory" aria-label="Work and background">
			<TabBar
				tabs={TABS}
				activeId={active.id}
				onSelect={replaceHash}
				label="Sections"
			/>

			{/*
			 * Every panel stays mounted so the static export ships all entries —
			 * otherwise the only internal links to case studies, uses and projects
			 * exist behind a hash the crawler never changes. Inactive panels are
			 * hidden from sighted users but remain in the DOM for crawlers and for
			 * find-in-page.
			 */}
			{TABS.map((tab) => (
				<div
					key={tab.id}
					role="tabpanel"
					id={panelId(tab.id)}
					aria-labelledby={tabId(tab.id)}
					hidden={tab.id !== active.id}
				>
					<EntryList entries={tab.entries} />
				</div>
			))}
		</section>
	);
};

export default Directory;
