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
          {
               name: 'content',
               title: 'Content',
               type: 'array',
               of: [
                    {
                         type: 'block'
                    },
                    {
                         type: 'image',
                         fields: [
                              {
                                   type: 'text',
                                   name: 'alt',
                                   title: 'Alternative text',
                                   description: `Some of your visitors cannot see images, 
                           be they blind, color-blind, low-sighted; 
                           alternative text is of great help for those 
                           people that can rely on it to have a good idea of 
                           what\'s on your page.`,
                                   options: {
                                        isHighlighted: true
                                   }
                              }
                         ]
                    },
               ]
          },
     ],
})