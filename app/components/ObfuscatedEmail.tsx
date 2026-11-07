"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

// The address is stored reversed and reassembled in the browser so a plain
// `user@domain` literal never reaches the exported HTML. This defeats the
// address-shaped regexes that scrapers run over static markup; it is not a
// secret, and anything that reads the bundle can still recover it.
const LOCAL_PART_REVERSED = "liam";
const DOMAIN_REVERSED = "moc.sggirpsnosrac";

const reverse = (value: string) => Array.from(value).reverse().join("");

type ObfuscatedEmailProps = {
	children: ReactNode;
};

/**
 * Renders a link to the contact address without shipping the address itself in
 * the markup. `href` is filled in after hydration, so with JavaScript disabled
 * the label stays visible as plain text instead of a dead `mailto:`.
 */
const ObfuscatedEmail = ({ children }: ObfuscatedEmailProps) => {
	const [href, setHref] = useState<string>();

	useEffect(() => {
		setHref(
			`mailto:${reverse(LOCAL_PART_REVERSED)}@${reverse(DOMAIN_REVERSED)}`,
		);
	}, []);

	return <a href={href}>{children}</a>;
};

export default ObfuscatedEmail;
