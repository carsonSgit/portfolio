"use client";

import {
	lazy,
	Suspense,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import AsciiFooter from "./components/AsciiFooter";
import EducationList from "./components/EducationList";
import ExperienceList from "./components/ExperienceList";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import ThemeToggle from "./components/ThemeToggle";
import { useVimNavigation } from "./hooks/useVimNavigation";
import "@/styles.scss";
import Shader from "@/components/ui/shader";

const GuideModal = lazy(() => import("../../components/shared/GuideModal"));

const MonoTheme: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isGuideOpen, setIsGuideOpen] = useState(false);
	const [guideEverOpened, setGuideEverOpened] = useState(false);

	useVimNavigation({ containerRef, disabled: isGuideOpen });

	const handleOpenGuide = useCallback(() => {
		setIsGuideOpen(true);
		setGuideEverOpened(true);
	}, []);

	const handleCloseGuide = useCallback(() => {
		setIsGuideOpen(false);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement
			) {
				return;
			}

			if (e.key === "?" && !isGuideOpen) {
				e.preventDefault();
				handleOpenGuide();
			}
		};

		globalThis.addEventListener("keydown", handleKeyDown);
		return () => globalThis.removeEventListener("keydown", handleKeyDown);
	}, [isGuideOpen, handleOpenGuide]);

	return (
		<div className="mono-portfolio-wrapper theme-mono">
			<div className="mono-portfolio" ref={containerRef}>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>

				<ThemeToggle />

				<button
					type="button"
					className="guide-trigger"
					onClick={handleOpenGuide}
					aria-label="Open guide"
					title="Press ? for guide"
				>
					<kbd>?</kbd>
				</button>

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

			{guideEverOpened && (
				<Suspense>
					<GuideModal isOpen={isGuideOpen} onClose={handleCloseGuide} />
				</Suspense>
			)}
		</div>
	);
};

export default MonoTheme;
