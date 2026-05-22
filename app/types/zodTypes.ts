import * as z from "zod";

export const experienceRoleSchema = z.object({
	title: z.string(),
	date: z.array(z.string()),
	description: z.array(z.string()),
});

export const experienceSchema = z.object({
	date: z.array(z.string()),
	title: z.string(),
	institution: z.string(),
	tagline: z.string().optional(),
	description: z.array(z.string()),
	experienceBadges: z.record(
		z.string(),
		z.object({
			label: z.string(),
			backgroundColour: z.string(),
		}),
	),
	link: z.string(),
	caseStudySlug: z.string().optional(),
	roles: z.array(experienceRoleSchema).optional(),
});

export const projectLinkSchema = z.object({
	label: z.string(),
	href: z.string(),
});

export const projectSchema = z.object({
	year: z.number(),
	title: z.string(),
	description: z.string(),
	caseStudySlug: z.string().optional(),
	links: z.array(projectLinkSchema),
	languages: z.record(
		z.string(),
		z.object({
			name: z.string(),
			backgroundColour: z.string(),
		}),
	),
});
