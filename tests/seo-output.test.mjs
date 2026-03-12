import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();
const OUT_DIR = path.join(ROOT_DIR, "out");

function readOutFile(...segments) {
	const filePath = path.join(OUT_DIR, ...segments);
	assert.ok(existsSync(filePath), `Expected build output file to exist: ${filePath}`);
	return readFileSync(filePath, "utf8");
}

const homeHtml = readOutFile("index.html");
assert.match(homeHtml, /<title>Carson Spriggs \| Software Engineer<\/title>/);
assert.match(
	homeHtml,
	/meta name="description" content="Carson Spriggs is a Canada-based software engineer at Fundica, focused on product engineering, developer tools, and clear technical communication\."\/>/,
);
assert.match(homeHtml, />Hackathon Projects<\/h2>/);
assert.match(homeHtml, /href="\/case-studies\/argus"[^>]*>read write-up</);
assert.match(homeHtml, /href="\/case-studies\/cropcare"[^>]*>read write-up</);
assert.match(homeHtml, /href="\/case-studies\/linky"[^>]*>read write-up</);
assert.doesNotMatch(homeHtml, /href="\/case-studies\/pathfinder"[^>]*>read write-up</);
assert.doesNotMatch(homeHtml, /Full-Stack &amp; AI Engineer/);
assert.doesNotMatch(homeHtml, />Projects<\/h2>/);

const argusHtml = readOutFile("case-studies", "argus.html");
assert.match(argusHtml, /<title>Argus Case Study \| Carson Spriggs<\/title>/);
assert.match(
	argusHtml,
	/<link rel="canonical" href="https:\/\/carsonspriggs\.me\/case-studies\/argus"/,
);
assert.match(argusHtml, /"@type":"Article"/);
assert.match(argusHtml, /Hackathon prototype for monitoring live video feeds with event detection and operator review tools\./i);
assert.match(argusHtml, /href="\/case-studies"[^>]*>Back to case studies</);
assert.match(argusHtml, /class="case-study-shell[^\"]*"/);
assert.match(argusHtml, />Context<\/h2>/);
assert.match(argusHtml, />Build<\/h2>/);
assert.match(argusHtml, />Takeaways<\/h2>/);
assert.doesNotMatch(argusHtml, />Project Type</);
assert.doesNotMatch(argusHtml, />Approach</);
assert.doesNotMatch(argusHtml, /Full-Stack and AI Engineer/);

const caseStudiesHtml = readOutFile("case-studies.html");
assert.match(caseStudiesHtml, /href="\/"[^>]*>Back home</);
assert.match(caseStudiesHtml, /class="case-studies-list"/);
assert.match(caseStudiesHtml, /Selected hackathon builds, explained with more context\./);
assert.match(caseStudiesHtml, /read write-up/i);
assert.doesNotMatch(caseStudiesHtml, /Open write-up/);

const sitemap = readOutFile("sitemap.xml");
assert.match(sitemap, /https:\/\/carsonspriggs\.me\/<\/loc>/);
assert.match(sitemap, /https:\/\/carsonspriggs\.me\/case-studies\/argus<\/loc>/);
assert.match(sitemap, /https:\/\/carsonspriggs\.me\/case-studies\/cropcare<\/loc>/);
assert.match(sitemap, /https:\/\/carsonspriggs\.me\/case-studies\/linky<\/loc>/);

console.log("SEO output checks passed");

