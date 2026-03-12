import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: absoluteUrl("/"),
			lastModified: new Date("2026-03-11"),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: absoluteUrl("/case-studies"),
			lastModified: new Date("2026-03-11"),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		...caseStudies.map((caseStudy) => ({
			url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
			lastModified: new Date(caseStudy.updatedAt),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
