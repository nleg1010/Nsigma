import { defineType, defineField } from "sanity";

export const caseStudies = defineType({
     name: "case_studies",
     type: "document",
     title: "Case Studies",
     fields: [
          defineField({
               name: "title",
               type: "string",
               title: "Title",
          }),
          {
               title: 'Slug',
               name: 'slug',
               type: 'slug',
               options: {
                 source: 'title',
                 maxLength: 200,
                 slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
               }
          },
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