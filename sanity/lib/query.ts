export const QEngagementStrategies = `*[ _type == "engagement"] | order(_createdAt asc) {
     title,
     info,
     image{
          asset->{
               url
          }
     }
}`


export const QCaseStudies = `*[ _type == "case_studies"] | order(_createdAt asc) {
     title,
     info,
     image{
          asset->{
               url
          }
     }
}`

export const QExpertise = `*[ _type == "expertise"] | order(_createdAt asc) {
     title,
     info,
     icon{
          asset->{
               url
          }
     }
}`


export const QQuestions = `*[ _type == "questions"] | order(_createdAt asc) {
     title,
     answer,
}`