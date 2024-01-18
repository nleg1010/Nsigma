import { defineType, defineField } from "sanity";

export const aiMlExamples = defineType({
	name: "aiMlExamples",
	type: "document",
	title: "AI/ML Examples",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "image",
			type: "image",
			title: "Image",
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
		}),
	],
});
