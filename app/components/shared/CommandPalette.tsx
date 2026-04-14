"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useColorScheme } from "@/themes/mono/hooks/useColorScheme";

interface PaletteItem {
	id: string;
	label: string;
	hint: string;
	href?: string;
	action?: () => void;
}

const CommandPalette: React.FC = () => {
	const router = useRouter();
	const { toggle } = useColorScheme();
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [activeIndex, setActiveIndex] = useState(0);
	const listRef = useRef<HTMLUListElement>(null);

	const items = useMemo<PaletteItem[]>(
		() => [
			{ id: "home", label: "Home", hint: "/" },
			{ id: "case-studies", label: "Case Studies", hint: "/case-studies" },
			{ id: "argus", label: "Argus", hint: "/case-studies/argus" },
			{ id: "cropcare", label: "CropCare", hint: "/case-studies/cropcare" },
			{ id: "linky", label: "Linky", hint: "/case-studies/linky" },
			{ id: "theme", label: "Toggle theme", hint: "light / dark", action: toggle },
		],
		[toggle],
	);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return q ? items.filter((item) => item.label.toLowerCase().includes(q)) : items;
	}, [items, query]);

	const openPalette = () => {
		document.documentElement.setAttribute("data-palette-open", "true");
		setIsOpen(true);
		setQuery("");
		setActiveIndex(0);
	};

	const closePalette = () => {
		document.documentElement.removeAttribute("data-palette-open");
		setIsOpen(false);
		setQuery("");
		setActiveIndex(0);
	};

	const execute = (item: PaletteItem) => {
		closePalette();
		if (item.href) {
			router.push(item.href);
		} else if (item.action) {
			item.action();
		}
	};

	const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setActiveIndex(0);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Escape") {
			e.preventDefault();
			closePalette();
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			const next = (activeIndex + 1) % filtered.length;
			setActiveIndex(next);
			listRef.current?.children[next]?.scrollIntoView({ block: "nearest" });
			return;
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			const prev = (activeIndex - 1 + filtered.length) % filtered.length;
			setActiveIndex(prev);
			listRef.current?.children[prev]?.scrollIntoView({ block: "nearest" });
			return;
		}
		if (e.key === "Enter" && filtered.length > 0) {
			e.preventDefault();
			execute(filtered[activeIndex]);
		}
	};

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				if (isOpen) {
					closePalette();
				} else {
					openPalette();
				}
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="cmd-palette-overlay"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={closePalette}
				>
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-label="Command palette"
						className="cmd-palette"
						initial={{ opacity: 0, scale: 0.97, y: -8 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.97, y: -8 }}
						transition={{ duration: 0.18, ease: "easeOut" }}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="cmd-palette__input-row">
							<input
								ref={(el) => { el?.focus(); }}
								type="text"
								className="cmd-palette__input"
								placeholder="Search commands…"
								value={query}
								onChange={handleQueryChange}
								onKeyDown={handleKeyDown}
								autoComplete="off"
								spellCheck={false}
							/>
							<kbd className="cmd-palette__esc">Esc</kbd>
						</div>
						<ul ref={listRef} className="cmd-palette__list" role="listbox">
							{filtered.map((item, i) => (
								<li
									key={item.id}
									role="option"
									aria-selected={i === activeIndex}
									className="cmd-palette__item"
									data-active={i === activeIndex}
									onMouseEnter={() => setActiveIndex(i)}
									onClick={() => execute(item)}
								>
									<span className="cmd-palette__item-label">{item.label}</span>
									<span className="cmd-palette__item-hint">{item.hint}</span>
								</li>
							))}
							{filtered.length === 0 && (
								<li className="cmd-palette__empty">No results for "{query}"</li>
							)}
						</ul>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CommandPalette;
