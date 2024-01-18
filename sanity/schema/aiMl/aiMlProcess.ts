import { defineType, defineField } from "sanity";

export const aiMlProcess = defineType({
	name: "aiMlProcess",
	type: "document",
	title: "AI/ML Steps",
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
		defineField({
			name: "description",
			type: "text",
			title: "Description",
		}),
	],
});
