import { defineType, defineField } from "sanity";

export const aiMl = defineType({
	name: "aiMl",
	type: "document",
	title: "AI & ML",
	fields: [
		defineField({
			name: "dataScience",
			type: "text",
			title: "AI/ML & Predictive Analytics",
		}),
		defineField({
			name: "whatAreAiMl",
			type: "text",
			title:
				"What is AI/ML and Predictive Analytics and how do they work together?",
		}),
	],
});
