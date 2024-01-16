export const QEngagementStrategies = `*[ _type == "engagement"] | order(_createdAt asc) {
     title,
     info,
     image{
          asset->{
               url
          }
     }
}`;

export const QCaseStudies = `*[ _type == "case_studies"] | order(_createdAt asc) {
     title,
     info,
     image{
          asset->{
               url
          }
     },
     slug,
     content
}`;

export const QExpertise = `*[ _type == "expertise"] | order(_createdAt asc) {
     title,
     info,
     icon{
          asset->{
               url
          }
     }
}`;

export const QQuestions = `*[ _type == "questions"] | order(_createdAt asc) {
     title,
     answer,
}`;

export const QSiteSetting = `*[ _type == "themeOptions"] | order(_createdAt asc){
     content,
     grid[]{
          icon{
               asset->{
                    url
               }
          },
          content
     }
}`;

export const QCaseStudySingle = `*[ _type == "case_studies" && slug.current == $slug][0]{
     title,
     info,
     image{
          asset->{
               url
          }
     },
     slug,
     content
}`;

export const QAiMl = `*[ _type == "aiMl"] | order(_createdAt asc)[0]{
     dataScience,
     whatAreAiMl
}`;

export const QAiMlSigns = `*[ _type == "aiMlSigns"] | order(_createdAt asc) {
     title,
     icon{
          asset->{
               url
          }
     }
}`;

export const QAiMlBenefits = `*[ _type == "aiMlBenefits"] | order(_createdAt asc) {
     title,
     icon{
          asset->{
               url
          }
     }
}`;

export const QAiMlExamples = `*[ _type == "aiMlExamples"] | order(_createdAt asc) {
     title,
     image{
          asset->{
               url
          }
     },
     description
}`;

export const QAiMlWhyUs = `*[ _type == "aiMlWhyUs"] | order(_createdAt asc)[0]{
     image{
          asset->{
               url
          }
     },
     content[]{
          title,
          description
     }
}`;
