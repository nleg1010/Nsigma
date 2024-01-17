import { defineType, defineField } from "sanity";

export const aiMlExamples = defineType({
	name: "aiMlExamples",
	type: "document",
	title: "Examples of AI/ML & Predictive Analytics",
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
