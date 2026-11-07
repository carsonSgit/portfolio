// Generates one social share card per case study into public/og/<slug>.png.
//
// Each card reuses that study's existing cover artwork at full bleed and sets
// the study's own title over a bottom scrim, so a shared link previews as the
// study itself instead of the generic site card.
//
// Usage: pnpm og:cards   (or: node scripts/generate-social-cards.mjs)
// Needs macOS `sips` to decode the webp covers and `rsvg-convert`
// (brew install librsvg) to rasterise the SVG.
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const WIDTH = 1200;
const HEIGHT = 630;
const COVER_DIR = "public/case-studies";
const OUT_DIR = "public/og";
const FONT = "Geist, Helvetica Neue, Helvetica, Arial, sans-serif";

const escapeXml = (s) =>
	String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Advance-width estimate; only used to break a title into at most two lines,
// where a few pixels either way is invisible.
const estimate = (text, size) => text.length * size * 0.54;

function wrapTitle(text, size, maxWidth) {
	const lines = [];
	let line = "";
	for (const word of text.split(/\s+/)) {
		const next = line ? `${line} ${word}` : word;
		if (line && estimate(next, size) > maxWidth) {
			lines.push(line);
			line = word;
		} else {
			line = next;
		}
	}
	if (line) lines.push(line);
	return lines;
}

function buildSvg({ title, eyebrow, coverBase64 }) {
	const size = title.length > 22 ? 58 : 72;
	const lineHeight = Math.round(size * 1.1);
	const lines = wrapTitle(title, size, WIDTH - 144);
	const lastBaseline = HEIGHT - 92;
	const firstBaseline = lastBaseline - (lines.length - 1) * lineHeight;
	const eyebrowBaseline = firstBaseline - size - 18;
	const ruleY = eyebrowBaseline - 74;

	const tspans = lines
		.map(
			(line, i) =>
				`<tspan x="72" y="${firstBaseline + i * lineHeight}">${escapeXml(line)}</tspan>`,
		)
		.join("");

	return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <clipPath id="frame"><rect width="${WIDTH}" height="${HEIGHT}" rx="0"/></clipPath>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.22" stop-color="#000000" stop-opacity="0"/>
      <stop offset="0.68" stop-color="#000000" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000000" stop-opacity="0.38"/>
      <stop offset="0.52" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g clip-path="url(#frame)">
    <image x="0" y="0" width="${WIDTH}" height="${HEIGHT}" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,${coverBase64}"/>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#edge)"/>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#shade)"/>
    <rect x="72" y="${ruleY}" width="56" height="3" fill="#ffffff" fill-opacity="0.65"/>
    <text x="72" y="${eyebrowBaseline}" font-family="${FONT}" font-size="20" font-weight="600" letter-spacing="3.4" fill="#ffffff" fill-opacity="0.8">${escapeXml(eyebrow.toUpperCase())}</text>
    <text font-family="${FONT}" font-size="${size}" font-weight="700" letter-spacing="-1.2" fill="#ffffff">${tspans}</text>
  </g>
  <text x="${WIDTH - 72}" y="${HEIGHT - 44}" text-anchor="end" font-family="${FONT}" font-size="19" font-weight="500" fill="#ffffff" fill-opacity="0.55">carsonspriggs.com</text>
</svg>`;
}

const work = mkdtempSync(join(tmpdir(), "og-cards-"));
mkdirSync(OUT_DIR, { recursive: true });

const { caseStudies } = await import("../app/data/caseStudies.ts");

for (const study of caseStudies) {
	const cover = join(COVER_DIR, `${study.slug}-cover.webp`);
	const png = join(work, `${study.slug}.png`);
	execFileSync("sips", ["-s", "format", "png", cover, "--out", png], {
		stdio: "ignore",
	});

	const svg = buildSvg({
		title: study.title,
		eyebrow: `Case study · ${String(study.period.start).slice(0, 4)}`,
		coverBase64: readFileSync(png).toString("base64"),
	});

	const svgPath = join(work, `${study.slug}.svg`);
	writeFileSync(svgPath, svg);
	const raster = join(work, `${study.slug}-raster.png`);
	execFileSync("rsvg-convert", [
		"-w",
		String(WIDTH),
		"-h",
		String(HEIGHT),
		"-o",
		raster,
		svgPath,
	]);

	// JPEG keeps the card small (~100 KB) and every social crawler accepts it.
	const out = join(OUT_DIR, `${study.slug}.jpg`);
	execFileSync(
		"sips",
		["-s", "format", "jpeg", "-s", "formatOptions", "82", raster, "--out", out],
		{
			stdio: "ignore",
		},
	);

	console.log(`${study.slug.padEnd(11)} -> ${out}`);
}
