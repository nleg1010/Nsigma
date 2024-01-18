import { defineType, defineField } from "sanity";

export const questions = defineType({
	name: "questions",
	type: "document",
	title: "Main Questions",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "answer",
			type: "text",
			title: "Answer",
		}),
	],
});
