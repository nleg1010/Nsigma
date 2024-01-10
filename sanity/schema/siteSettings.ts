import { defineType, defineField } from "sanity";

export const themeOptions = defineType({
  name: "themeOptions",
  title: "Theme Options",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
     name: "grid",
     title: "Why Us Cards",
     type: 'array',
     of: [
          {
            type: "object",
            name: "inline",
            fields: [
              { type: "image", name: "icon" },
              { type: "text", name: "content" }
            ]
          }
        ],
   })
  ],
});
