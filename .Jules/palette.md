## 2025-02-14 - Removed aria-hidden from focusable elements
**Learning:** Found an accessibility issue pattern where `aria-hidden="true"` was placed on elements (`<kbd>`) inside a focusable `<button>`. This can confuse screen readers since the element is reachable via keyboard but hidden from the accessibility tree. Biome's `lint/a11y/noAriaHiddenOnFocusable` rule correctly identifies this.
**Action:** When adding decorative elements or keyboard shortcuts inside buttons, avoid `aria-hidden="true"`. Let the screen reader announce the contents of the button naturally, or use `aria-label` on the button itself if the visual content isn't sufficient.

## 2025-02-14 - Added ARIA label to Command Palette Input
**Learning:** The Command Palette `<input>` relied solely on a visual `placeholder` ("Search commands…"). Placeholders are not a replacement for proper labels in assistive technologies.
**Action:** Always ensure `<input>` fields, especially those without visible `<label>` elements like search or command palette inputs, have an explicit `aria-label` to provide context to screen reader users.