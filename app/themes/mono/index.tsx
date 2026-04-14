"use client";

import { useRef } from "react";
import AsciiFooter from "./components/AsciiFooter";
import EducationList from "./components/EducationList";
import ExperienceList from "./components/ExperienceList";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import { useVimNavigation } from "./hooks/useVimNavigation";
import "@/styles.scss";
import Shader from "@/components/ui/shader";

const MonoTheme: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useVimNavigation({ containerRef });

	return (
		<div className="mono-portfolio-wrapper theme-mono">
			<div className="mono-portfolio" ref={containerRef}>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>

				<main id="main-content" className="portfolio-grid">
					<div className="portfolio-grid__left">
						<div className="intro-panel">
							<Intro />
						</div>
						<div className="shader-panel" aria-hidden="true">
							<Shader className="shader-panel__surface" />
						</div>
					</div>
					<div className="portfolio-grid__right">
						<ProjectList />
						<ExperienceList />
						<EducationList />
						<AsciiFooter />
					</div>
				</main>
			</div>
		</div>
	);
};

export default MonoTheme;
