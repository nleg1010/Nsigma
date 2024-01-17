import { type SchemaTypeDefinition } from "sanity";
import { engagement } from "./schema/engagement";
import { caseStudies } from "./schema/case-studies";
import { expertise } from "./schema/expertise";
import { questions } from "./schema/questions";
import { themeOptions } from "./schema/siteSettings";
import { aiMl } from "./schema/aiMl/aiMl";
import { aiMlSigns } from "./schema/aiMl/aiMlSigns";
import { aiMlBenefits } from "./schema/aiMl/aiMlBenefits";
import { aiMlExamples } from "./schema/aiMl/aiMlExamples";
import { aiMlWhyUs } from "./schema/aiMl/aiMlWhyUs";
import { aiMlProcess } from "./schema/aiMl/aiMlProcess";

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
		aiMlProcess,
	],
};
