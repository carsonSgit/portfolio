"use client";

import { useCallback, useEffect, useState } from "react";

export type ColorMode = "dark" | "light";

const STORAGE_KEY = "portfolio:color-mode";

const readStoredMode = (): ColorMode | null => {
	if (typeof window === "undefined") return null;
	const value = window.localStorage.getItem(STORAGE_KEY);
	return value === "light" || value === "dark" ? value : null;
};

const detectInitialMode = (): ColorMode => {
	if (typeof document !== "undefined") {
		const attr = document.documentElement.getAttribute("data-mode");
		if (attr === "light" || attr === "dark") return attr;
	}
	const stored = readStoredMode();
	if (stored) return stored;
	if (
		typeof window !== "undefined" &&
		window.matchMedia?.("(prefers-color-scheme: light)").matches
	) {
		return "light";
	}
	return "dark";
};

const applyMode = (mode: ColorMode) => {
	if (typeof document === "undefined") return;
	document.documentElement.setAttribute("data-mode", mode);
	document.documentElement.style.colorScheme = mode;
};

export const useColorScheme = () => {
	const [mode, setModeState] = useState<ColorMode>("dark");

	useEffect(() => {
		const initial = detectInitialMode();
		setModeState(initial);
		applyMode(initial);
	}, []);

	const setMode = useCallback((next: ColorMode) => {
		setModeState(next);
		applyMode(next);
		if (typeof window !== "undefined") {
			window.localStorage.setItem(STORAGE_KEY, next);
		}
	}, []);

	const toggle = useCallback(() => {
		setMode(mode === "light" ? "dark" : "light");
	}, [mode, setMode]);

	return { mode, setMode, toggle } as const;
};
