import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
	window.addEventListener("hashchange", onChange);
	return () => window.removeEventListener("hashchange", onChange);
};

export const useHash = () =>
	useSyncExternalStore(
		subscribe,
		() => window.location.hash.slice(1),
		() => "",
	);

export const replaceHash = (id: string) => {
	history.replaceState(history.state, "", `#${id}`);
	// replaceState does not fire hashchange; subscribers still need to hear it.
	window.dispatchEvent(new HashChangeEvent("hashchange"));
};
