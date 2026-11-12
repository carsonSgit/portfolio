import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { usesUpdatedAt } from "@/data/uses";
import { absoluteUrl, BASE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const latestUpdate = new Date(
	caseStudies.reduce(
		(latest, caseStudy) =>
			caseStudy.updatedAt > latest ? caseStudy.updatedAt : latest,
		caseStudies[0].updatedAt,
	),
);

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			// Origin without a trailing slash: Next normalizes the root
			// canonical to `result.origin`, so the sitemap must match it exactly
			// or Google sees two homepage URLs and may pick its own canonical.
			url: BASE_URL,
			lastModified: latestUpdate,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: absoluteUrl("/case-studies"),
			lastModified: latestUpdate,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: absoluteUrl("/uses"),
			lastModified: new Date(usesUpdatedAt),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		...caseStudies.map((caseStudy) => ({
			url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
			lastModified: new Date(caseStudy.updatedAt),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
