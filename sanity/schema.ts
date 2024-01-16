import { type SchemaTypeDefinition } from "sanity";
import { engagement } from "./schema/engagement";
import { caseStudies } from "./schema/case-studies";
import { expertise } from "./schema/expertise";
import { questions } from "./schema/questions";
import { themeOptions } from "./schema/siteSettings";
import { aiMl } from "./schema/aiMl";
import { aiMlSigns } from "./schema/aiMlSigns";
import { aiMlBenefits } from "./schema/aiMlBenefits";
import { aiMlExamples } from "./schema/aiMlExamples";
import { aiMlWhyUs } from "./schema/aiMlWhyUs";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		questions,
		expertise,
		engagement,
		caseStudies,
		themeOptions,
		aiMl,
		aiMlSigns,
		aiMlBenefits,
		aiMlExamples,
		aiMlWhyUs,
	],
};
