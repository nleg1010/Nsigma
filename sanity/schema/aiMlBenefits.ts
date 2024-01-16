import { defineType, defineField } from "sanity";

export const aiMlBenefits = defineType({
	name: "aiMlBenefits",
	type: "document",
	title: "Benefits of AI/ML and Data Science",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "icon",
			type: "image",
			title: "Icon",
		}),
	],
});
