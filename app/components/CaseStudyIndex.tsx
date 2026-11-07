"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TabBar, { panelId, tabId } from "@/components/TabBar";

type CaseStudyCard = {
	slug: string;
	title: string;
	summary: string;
	projectType: string;
	date: string;
	cover?: string;
};

const VIEWS = [
	{ id: "list", label: "List" },
	{ id: "grid", label: "Grid" },
	{ id: "rows", label: "Rows" },
] as const;

type View = (typeof VIEWS)[number]["id"];

const isView = (id: string): id is View => VIEWS.some((view) => view.id === id);

const CaseStudyIndex = ({ cards }: { cards: CaseStudyCard[] }) => {
	const [view, setView] = useState<View>("list");

	return (
		<>
			<TabBar
				tabs={VIEWS}
				activeId={view}
				onSelect={(id) => {
					if (isView(id)) setView(id);
				}}
				label="Layout"
			/>
			<section
				role="tabpanel"
				id={panelId(view)}
				aria-labelledby={tabId(view)}
				className={`case-studies-panels case-studies-panels--${view}`}
			>
				{cards.map((card) => (
					<article key={card.slug}>
						<Link
							href={`/case-studies/${card.slug}`}
							className="case-study-panel__surface"
						>
							{card.cover ? (
								<div className="case-study-panel__cover">
									<Image
										src={card.cover}
										alt=""
										fill
										sizes="(max-width: 700px) 100vw, 624px"
									/>
								</div>
							) : null}
							<div className="case-study-panel__body">
								<p className="case-study-panel__meta">
									<strong>{card.projectType}</strong>
									<time>{card.date}</time>
								</p>
								<h2 className="case-study-panel__title">{card.title}</h2>
								<p className="case-study-panel__summary">{card.summary}</p>
								<span className="case-study-panel__read">
									Continue reading
									<span
										className="case-study-panel__read-arrow"
										aria-hidden="true"
									>
										→
									</span>
								</span>
							</div>
						</Link>
					</article>
				))}
			</section>
		</>
	);
};

export default CaseStudyIndex;
