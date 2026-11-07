"use client";

import { useEffect, useState } from "react";

type RailSection = {
	id: string;
	title: string;
};

export default function CaseStudyRail({
	sections,
}: {
	readonly sections: RailSection[];
}) {
	const [activeId, setActiveId] = useState(sections[0]?.id);

	useEffect(() => {
		const targets = sections
			.map(({ id }) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		let frame = 0;
		const update = () => {
			frame = 0;
			const line = window.innerHeight * 0.3;
			let current = targets[0];
			for (const target of targets) {
				if (target.getBoundingClientRect().top <= line) current = target;
			}
			if (current) setActiveId(current.id);
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, [sections]);

	return (
		<aside className="cs-rail" aria-label="Article navigation">
			<nav aria-label="On this page">
				<ol className="cs-rail__list">
					{sections.map((section) => (
						<li key={section.id}>
							<a
								href={`#${section.id}`}
								className="cs-rail__link"
								aria-current={activeId === section.id ? "location" : undefined}
							>
								{section.title}
							</a>
						</li>
					))}
				</ol>
			</nav>
		</aside>
	);
}
