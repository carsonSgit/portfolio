import type * as z from "zod";
import type { projectLinkSchema } from "@/types/zodTypes";
import BracketLink from "./BracketLink";

interface ProjectDetailProps {
	projectTitle: string;
	links: z.infer<typeof projectLinkSchema>[];
	caseStudySlug?: string;
	stack: { name: string }[];
	year: number;
}

const ProjectDetail = ({
	projectTitle,
	links,
	caseStudySlug,
	stack,
	year,
}: ProjectDetailProps) => {
	return (
		<div className="detail-panel__content">
			<div className="detail-panel__intro">
				<p className="detail-panel__meta">
					{year}
					<span className="detail-panel__meta-sep" aria-hidden="true">·</span>
					{caseStudySlug ? "Case study" : "Project"}
				</p>
			</div>
			<ul className="detail-panel__tech-list" aria-label={`${projectTitle} stack`}>
				{stack.map((item) => (
					<li key={item.name} className="detail-panel__tech-item">
						<span className="detail-panel__tech-pill">{item.name}</span>
					</li>
				))}
			</ul>
			<div className="detail-panel__links detail-panel__links--editorial">
				{caseStudySlug && (
					<BracketLink
						href={`/case-studies/${caseStudySlug}`}
						className="detail-panel__link detail-panel__link--primary"
						srContext={`Write-up for ${projectTitle}`}
					>
						Case study
					</BracketLink>
				)}
				{links.map((link) => (
					<BracketLink
						key={link.href}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="detail-panel__link"
						srContext={`${link.label} for ${projectTitle}`}
					>
						{link.label}
					</BracketLink>
				))}
			</div>
		</div>
	);
};

export default ProjectDetail;
