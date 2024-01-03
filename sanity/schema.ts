import { type SchemaTypeDefinition } from 'sanity'
import { engagement } from './schema/engagement'
import { caseStudies } from './schema/case-studies'
import { expertise } from './schema/expertise'
import { questions } from './schema/questions'
import { siteSettings } from './schema/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [questions, expertise, engagement, caseStudies],
}
