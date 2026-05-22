import type { MouseEvent } from "react";

// Base UI augments synthetic events passed to merged handlers with this method,
// which cancels the component's own click handler (the accordion toggle).
type BaseUIMouseEvent = MouseEvent<HTMLElement> & {
	preventBaseUIHandler?: () => void;
};

// Lets users select text inside an accordion trigger without toggling it.
// When a click ends with text selected, suppress the open/close behavior.
export const preventToggleWhileSelecting = (event: MouseEvent<HTMLElement>) => {
	const selection = window.getSelection();
	if (selection && selection.toString().length > 0) {
		(event as BaseUIMouseEvent).preventBaseUIHandler?.();
	}
};
