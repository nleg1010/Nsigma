import { defineType, defineField } from "sanity";

export const aiMlSigns = defineType({
	name: "aiMlSigns",
	type: "document",
	title: "Signs you business could use AI/ML and Data Science",
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
