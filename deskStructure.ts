// ./deskStructure.js

export const myStructure = (S:any) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('themeOptions')
            .documentId('themeOptions')),
            ...S.documentTypeListItems().filter((listItem:any) => !['themeOptions'].includes(listItem.getId()))
    ])