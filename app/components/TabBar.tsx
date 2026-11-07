"use client";

import {
	type CSSProperties,
	useId,
	useLayoutEffect,
	useRef,
	useState,
} from "react";

type TabBarTab = {
	id: string;
	label: string;
};

type HighlightStyle = CSSProperties & {
	"--highlight-x": string;
	"--highlight-y": string;
	"--highlight-width": string;
	"--highlight-height": string;
};

export const tabId = (id: string) => `tab-${id}`;
export const panelId = (id: string) => `panel-${id}`;

const TabBar = ({
	tabs,
	activeId,
	onSelect,
	label,
}: {
	tabs: readonly TabBarTab[];
	activeId: string;
	onSelect: (id: string) => void;
	label: string;
}) => {
	const filterId = useId();
	const tabsRef = useRef<HTMLDivElement>(null);
	const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const [highlights, setHighlights] = useState<HighlightStyle[]>([]);
	const activeIndex = tabs.findIndex((tab) => tab.id === activeId);

	useLayoutEffect(() => {
		const bar = tabsRef.current;
		if (!bar) return;
		const measure = () => {
			setHighlights(
				[activeId, hoveredId ?? activeId].flatMap((id) => {
					const button = tabRefs.current[id];
					if (!button) return [];
					return [
						{
							"--highlight-x": `${button.offsetLeft}px`,
							"--highlight-y": `${button.offsetTop}px`,
							"--highlight-width": `${button.offsetWidth}px`,
							"--highlight-height": `${button.offsetHeight}px`,
						},
					];
				}),
			);
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(bar);
		return () => observer.disconnect();
	}, [activeId, hoveredId]);

	const moveTo = (index: number) => {
		const next = tabs[(index + tabs.length) % tabs.length];
		onSelect(next.id);
		tabRefs.current[next.id]?.focus();
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "ArrowRight") {
			moveTo(activeIndex + 1);
		} else if (event.key === "ArrowLeft") {
			moveTo(activeIndex - 1);
		} else if (event.key === "Home") {
			moveTo(0);
		} else if (event.key === "End") {
			moveTo(tabs.length - 1);
		} else {
			return;
		}
		event.preventDefault();
	};

	return (
		<div
			className="directory__tabs"
			ref={tabsRef}
			onPointerLeave={() => setHoveredId(null)}
			role="tablist"
			aria-label={label}
			onKeyDown={handleKeyDown}
		>
			<svg className="directory__filter" aria-hidden="true">
				<defs>
					<filter
						id={filterId}
						x="-20%"
						y="-50%"
						width="140%"
						height="200%"
						colorInterpolationFilters="sRGB"
					>
						<feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
						/>
					</filter>
				</defs>
			</svg>
			<div
				className="directory__highlights"
				aria-hidden="true"
				style={{ filter: `url(#${filterId})` }}
			>
				{highlights.map((style, index) => (
					<span
						key={index === 0 ? "selected" : "hover"}
						className="directory__highlight"
						style={style}
					/>
				))}
			</div>
			{tabs.map((tab) => (
				<button
					key={tab.id}
					type="button"
					role="tab"
					id={tabId(tab.id)}
					className="directory__tab"
					aria-selected={tab.id === activeId}
					aria-controls={panelId(tab.id)}
					tabIndex={tab.id === activeId ? 0 : -1}
					ref={(node) => {
						tabRefs.current[tab.id] = node;
					}}
					onClick={() => onSelect(tab.id)}
					onPointerEnter={(event) => {
						if (event.pointerType !== "touch") setHoveredId(tab.id);
					}}
				>
					{tab.label}
				</button>
			))}
		</div>
	);
};

export default TabBar;
