import { Accordion } from "@base-ui/react/accordion";
import type * as z from "zod";
import type { projectSchema } from "@/types/zodTypes";
import { projects } from "../../../data/projects";
import ProjectDetail from "./ProjectDetail";

const ProjectList = () => {
	return (
		<section
			aria-labelledby="projects-heading"
			className="section-block section-block--projects section-block--editorial"
		>
			<div className="section-heading">
				<h2
					id="projects-heading"
					className="section-title section-title--secondary"
				>
					Hackathon Projects
				</h2>
			</div>
			<Accordion.Root
				multiple
				className="section-list section-list--projects"
				aria-label="Hackathon projects"
			>
				{projects.map((project: z.infer<typeof projectSchema>) => {
					const stack = Object.values(project.languages);

					return (
						<Accordion.Item
							key={project.title}
							value={project.title}
							className="section-list__item"
						>
							<Accordion.Header>
								<Accordion.Trigger className="section-list__trigger">
									<div className="section-list__header">
										<div className="section-list__meta">
											<span className="section-list__title">
												{project.title}
											</span>
										</div>
										<p className="section-list__summary">
											{project.description}
										</p>
									</div>
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel className="detail-panel" keepMounted>
								<div className="detail-panel__inner">
									<ProjectDetail
										projectTitle={project.title}
										links={project.links}
										caseStudySlug={project.caseStudySlug}
										stack={stack}
										year={project.year}
									/>
								</div>
							</Accordion.Panel>
						</Accordion.Item>
					);
				})}
			</Accordion.Root>
		</section>
	);
};

export default ProjectList;
