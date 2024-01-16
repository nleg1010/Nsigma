import { defineType, defineField } from "sanity";

export const expertise = defineType({
	name: "expertise",
	type: "document",
	title: "Expertise",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "info",
			type: "text",
			title: "Info",
		}),
		defineField({
			name: "icon",
			type: "image",
			title: "Icon",
		}),
		defineField({
			name: "url",
			type: "string",
			title: "Url",
		}),
	],
});
