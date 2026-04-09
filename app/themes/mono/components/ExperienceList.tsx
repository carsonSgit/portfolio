import { Accordion } from "@base-ui/react/accordion";
import { Badge } from "@/components/ui/badge";
import { getBadgeStyle } from "@/utils/colors";
import { professionalExp } from "../../../data/experiences";

const ExperienceList = () => {
	return (
		<section
			aria-labelledby="experience-heading"
			className="section-block section-block--editorial"
		>
			<div className="section-heading">
				<h2
					id="experience-heading"
					className="section-title section-title--secondary"
				>
					Experience
				</h2>
			</div>
			<Accordion.Root multiple className="section-list" aria-label="Experience">
				{professionalExp.map((item) => {
					const dateRange = item.date.join(" - ");

					return (
						<Accordion.Item
							key={`${item.title}-${item.institution}`}
							value={`${item.title}-${item.institution}`}
							className="section-list__item"
						>
							<Accordion.Header>
								<Accordion.Trigger className="section-list__trigger">
									<div className="section-list__header">
										<span className="section-list__role">
											{item.title}{" "}
											<a
												href={item.link}
												className="section-list__company-link"
												target="_blank"
												rel="noopener noreferrer"
												onClick={(e) => e.stopPropagation()}
												onKeyDown={(e) => e.stopPropagation()}
											>
												@ {item.institution}
												<span className="sr-only">(opens in new tab)</span>
											</a>
										</span>
										<p className="section-list__summary">
											{item.description[0]}
										</p>
									</div>
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel className="detail-panel" keepMounted>
								<div className="detail-panel__inner">
									<div className="detail-panel__content">
										<div className="detail-panel__intro">
											<p className="detail-panel__meta">{dateRange}</p>
											<p className="detail-panel__status">Experience</p>
										</div>
										<ul className="detail-panel__description-list">
											{item.description.map((desc) => (
												<li
													key={desc}
													className="detail-panel__description-item"
												>
													{desc}
												</li>
											))}
										</ul>
										<div className="detail-panel__badges">
											{Object.values(item.experienceBadges).map((badge) => (
												<Badge
													key={badge.label}
													className="detail-panel__badge"
													style={{
														backgroundColor: getBadgeStyle(
															badge.backgroundColour,
														).background,
														borderColor: getBadgeStyle(badge.backgroundColour)
															.foreground,
														color: getBadgeStyle(badge.backgroundColour)
															.foreground,
													}}
												>
													{badge.label}
												</Badge>
											))}
										</div>
										<div className="detail-panel__links detail-panel__links--editorial">
											<a
												href={item.link}
												className="detail-panel__link"
												target="_blank"
												rel="noopener noreferrer"
											>
												Visit {item.institution}
												<span className="sr-only">(opens in new tab)</span>
											</a>
										</div>
									</div>
								</div>
							</Accordion.Panel>
						</Accordion.Item>
					);
				})}
			</Accordion.Root>
		</section>
	);
};

export default ExperienceList;
