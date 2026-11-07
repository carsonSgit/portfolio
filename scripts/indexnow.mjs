#!/usr/bin/env node
/**
 * Submit the site's URLs to IndexNow (Bing, Yandex, Seznam, Naver -- Google
 * does not consume IndexNow). Run after a deploy: `node scripts/indexnow.mjs`
 * (add `--dry-run` to print the URLs without submitting).
 *
 * Reads the *live* sitemap rather than the build output on purpose: IndexNow
 * rejects URLs the crawler cannot fetch yet, which is exactly what a
 * not-yet-deployed sitemap entry would be.
 */
import { readdirSync, readFileSync } from "node:fs";

const HOST = "carsonspriggs.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_PATTERN = /^[a-f0-9]{32}\.txt$/;

/** The key file at /<key>.txt proves ownership; the file name is the key. */
function findKey() {
	const dir = new URL("../public/", import.meta.url);
	const files = readdirSync(dir).filter((name) => KEY_PATTERN.test(name));
	if (files.length !== 1) {
		throw new Error(
			`expected one IndexNow key file in public/, found ${files.length}`,
		);
	}
	const key = files[0].replace(/\.txt$/, "");
	if (readFileSync(new URL(files[0], dir), "utf8").trim() !== key) {
		throw new Error(`${files[0]} must contain its own file name`);
	}
	return key;
}

async function fetchSitemapUrls() {
	const response = await fetch(`${ORIGIN}/sitemap.xml`);
	if (!response.ok) throw new Error(`sitemap fetch failed: ${response.status}`);
	const xml = await response.text();
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
		match[1].trim(),
	);
}

async function main() {
	const dryRun = process.argv.includes("--dry-run");
	const key = findKey();
	const urls = await fetchSitemapUrls();
	if (urls.length === 0) throw new Error("sitemap contained no URLs");

	if (dryRun) {
		console.log(`[dry-run] ${urls.length} urls, key ${key}`);
		for (const url of urls) console.log(`  ${url}`);
		return;
	}

	const response = await fetch(ENDPOINT, {
		method: "POST",
		headers: { "content-type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			host: HOST,
			key,
			keyLocation: `${ORIGIN}/${key}.txt`,
			urlList: urls,
		}),
	});

	// 200 accepted; 202 accepted, key pending validation. Both are success.
	console.log(`indexnow: ${response.status} (${urls.length} urls)`);
	if (response.status >= 400) {
		console.error(await response.text());
		// set exitCode instead of terminating, so pending stdout is not truncated
		process.exitCode = 1;
	}
}

main().catch((error) => {
	console.error(error.message);
	process.exitCode = 1;
});
