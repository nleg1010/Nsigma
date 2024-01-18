import { defineType, defineField } from "sanity";

export const aiMlWhyUs = defineType({
	name: "aiMlWhyUs",
	type: "document",
	title: "AI/ML Why Us",
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
