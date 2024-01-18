// ./deskStructure.js

export const myStructure = (S: any) =>
	S.list()
		.title("Base")
		.items([
			S.listItem()
				.title("Site Settings")
				.child(
					S.document().schemaType("themeOptions").documentId("themeOptions")
				),
			S.listItem()
				.title("AI/ML")
				.child(S.document().schemaType("aiMl").documentId("aiMl")),
			S.listItem()
				.title("AI/ML Why NSigma")
				.child(S.document().schemaType("aiMlWhyUs").documentId("aiMlWhyUs")),
			...S.documentTypeListItems().filter(
				(listItem: any) =>
					!["themeOptions", "aiMl", "aiMlWhyUs"].includes(listItem.getId())
			),
		]);
