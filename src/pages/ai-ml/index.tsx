import Banner from "@/components/ai-ml/Banner";
import Head from "next/head";
import {
	QAiMl,
	QAiMlBenefits,
	QAiMlExamples,
	QAiMlSigns,
	QAiMlWhyUs,
} from "../../../sanity/lib/query";
import { client } from "../../../sanity/lib/client";
import { FC } from "react";
import Navigation from "@/components/ai-ml/Navigation";
import DataScienceSection from "@/components/ai-ml/DataScienceSection";
import WhatIsAiSection from "@/components/ai-ml/WhatIsAiSection";
import ProcessSection from "@/components/ai-ml/ProcessSection";
import Divider from "@/components/ai-ml/Divider";
import SignsYouNeedAiSection from "@/components/ai-ml/SingsYouNeedAiSection";
import ReadySection from "@/components/ai-ml/ReadySection";
import WhyUsSection from "@/components/ai-ml/WhyUsSection";
import BenefitsSection from "@/components/ai-ml/BenefitsSection";
import ExamplesSection from "@/components/ai-ml/ExamplesSection/ExamplesSection";

const AiMl: FC<any> = ({
	aiMl,
	aiMlSigns,
	aiMlBenefits,
	aiMlExamples,
	aiMlWhyUs,
}) => {
	return (
		<>
			<Head>
				<title>Nsigma | Data Driven Intelligence</title>
			</Head>
			<div className="bg-[#000200]">
				<Banner />
				<Navigation />
				<DataScienceSection content={aiMl.dataScience} />
				<Divider />
				<WhatIsAiSection content={aiMl.whatAreAiMl} />
				<Divider />
				<ProcessSection />
				<Divider />
				<SignsYouNeedAiSection cards={aiMlSigns} />
				<Divider />
				<BenefitsSection cards={aiMlBenefits} />
				<Divider />
				<ExamplesSection examples={aiMlExamples} />
				<Divider />
				<WhyUsSection data={aiMlWhyUs} />
				<ReadySection />
			</div>
		</>
	);
};

export default AiMl;

export async function getServerSideProps() {
	const aiMl = await client.fetch(QAiMl);
	const aiMlSigns = await client.fetch(QAiMlSigns);
	const aiMlBenefits = await client.fetch(QAiMlBenefits);
	const aiMlExamples = await client.fetch(QAiMlExamples);
	const aiMlWhyUs = await client.fetch(QAiMlWhyUs);

	return {
		props: {
			aiMl,
			aiMlSigns,
			aiMlBenefits,
			aiMlExamples,
			aiMlWhyUs,
			preview: true,
		},
	};
}
