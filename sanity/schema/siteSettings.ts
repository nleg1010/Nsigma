import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
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
})