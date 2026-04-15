"use client";

import { useColorScheme } from "../hooks/useColorScheme";

const ThemeToggle: React.FC = () => {
	const { mode, toggle } = useColorScheme();
	const nextLabel =
		mode === "light" ? "Switch to dark mode" : "Switch to light mode";

	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={toggle}
			aria-label={nextLabel}
			title={nextLabel}
			aria-pressed={mode === "light"}
			data-mode={mode}
		>
			<span aria-hidden="true" className="theme-toggle__glyph">
				{mode === "light" ? "☀" : "☾"}
			</span>
		</button>
	);
};

export default ThemeToggle;
