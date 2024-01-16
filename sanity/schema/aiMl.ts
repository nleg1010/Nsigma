import { defineType, defineField } from "sanity";

export const aiMl = defineType({
	name: "aiMl",
	type: "document",
	title: "AI & ML",
	fields: [
		defineField({
			name: "dataScience",
			type: "text",
			title: "AI/ML & Data Science",
		}),
		defineField({
			name: "whatAreAiMl",
			type: "text",
			title: "What is AI/ML and Data Science and how do they work together?",
		}),
	],
});
