import type * as z from "zod";
import type { projectLinkSchema } from "@/types/zodTypes";
import BracketLink from "./BracketLink";

interface ProjectDetailProps {
	projectTitle: string;
	links: z.infer<typeof projectLinkSchema>[];
	caseStudySlug?: string;
	stack: { name: string }[];
	meta?: string;
}

const ProjectDetail = ({
	projectTitle,
	links,
	caseStudySlug,
	stack,
	meta,
}: ProjectDetailProps) => {
	return (
		<div className="detail-panel__content">
			{meta ? <p className="detail-panel__meta">{meta}</p> : null}
			<div className="detail-panel__group">
				<p className="detail-panel__label">Stack</p>
				<ul
					className="detail-panel__badge-list"
					aria-label={`${projectTitle} stack`}
				>
					{stack.map((item) => (
						<li key={item.name} className="detail-panel__badge-item">
							<span className="detail-panel__badge">{item.name}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="detail-panel__group">
				<p className="detail-panel__label">Explore</p>
				<div className="detail-panel__links detail-panel__links--quiet">
					{links.map((link) => (
						<BracketLink
							key={link.href}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							srContext={`${link.label} for ${projectTitle}`}
						>
							{link.label}
						</BracketLink>
					))}
					{caseStudySlug && (
						<BracketLink
							href={`/case-studies/${caseStudySlug}`}
							srContext={`Write-up for ${projectTitle}`}
						>
							read write-up
						</BracketLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
