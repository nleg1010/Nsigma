import { defineType, defineField } from "sanity";

export const aiMlWhyUs = defineType({
	name: "aiMlWhyUs",
	type: "document",
	title: "Why to Choose NSigma for AI/ML and Predictive Analytics Services",
	fields: [
		defineField({
			name: "image",
			type: "image",
			title: "Image",
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{
					type: "object",
					name: "section",
					fields: [
						{ type: "string", name: "title" },
						{ type: "text", name: "description" },
					],
				},
			],
		}),
	],
});
