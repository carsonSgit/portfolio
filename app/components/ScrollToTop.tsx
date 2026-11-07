"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 600);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<button
			type="button"
			className="scroll-top"
			data-visible={visible}
			aria-hidden={!visible}
			tabIndex={visible ? 0 : -1}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<span aria-hidden="true">↑</span>
			<span className="sr-only">Scroll to top</span>
		</button>
	);
};

export default ScrollToTop;
