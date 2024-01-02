import { defineType, defineField } from "sanity";

export const engagement = defineType({
     name: "engagement",
     type: "document",
     title: "Engagement",
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
               name: "image",
               type: "image",
               title: "Image",
          }),
     ],
})