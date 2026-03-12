import { Accordion } from "@base-ui/react/accordion";
import type * as z from "zod";
import type { projectSchema } from "@/types/zodTypes";
import { projects } from "../../../data/projects";
import ProjectDetail from "./ProjectDetail";

const ProjectList = () => {
	return (
		<section aria-labelledby="projects-heading">
			<div className="section-heading">
				<h2 id="projects-heading">Hackathon Projects</h2>
				<p className="section-intro">
					Selected prototypes and experiments from hackathons, with direct links
					to the source, demos, and deeper write-ups where they exist.
				</p>
			</div>
			<Accordion.Root
				multiple
				className="section-list"
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
									<span className="section-list__marker" aria-hidden="true">
										*
									</span>
									<div className="section-list__header">
										<div className="section-list__meta">
											<span className="section-list__year">{project.year}</span>
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
								<ProjectDetail
									projectTitle={project.title}
									links={project.links}
									caseStudySlug={project.caseStudySlug}
									stack={stack}
								/>
							</Accordion.Panel>
						</Accordion.Item>
					);
				})}
			</Accordion.Root>
		</section>
	);
};

export default ProjectList;
