import Banner from "@/components/banner";
import CaseStudies from "@/components/case-studies/CaseStudies";
import EngagementStrategies from "@/components/engagement-strategies/EngagementStrategies";
import Expertise from "@/components/expertise";
import Head from "next/head";
import {
	QCaseStudies,
	QEngagementStrategies,
	QExpertise,
	QQuestions,
	QSiteSetting,
} from "../../sanity/lib/query";
import { client } from "../../sanity/lib/client";
import { FC } from "react";
import AboutUs from "@/components/about-us/AboutUs";

const Home: FC<any> = ({
	engagementStrategiesRes,
	caseStudiesRes,
	expertiseRes,
	questionsRes,
}) => {
	return (
		<>
			<Head>
				<title>Nsigma</title>
			</Head>
			<div className="bg-[#000200]">
				<Banner data={questionsRes} />
				<Expertise data={expertiseRes} />
				<EngagementStrategies data={engagementStrategiesRes} />
				<CaseStudies data={caseStudiesRes} />
				<AboutUs />
			</div>
		</>
	);
};

export default Home;

export async function getServerSideProps() {
	const engagementStrategiesRes = await client.fetch(QEngagementStrategies);
	const caseStudiesRes = await client.fetch(QCaseStudies);
	const expertiseRes = await client.fetch(QExpertise);
	const questionsRes = await client.fetch(QQuestions);
	const siteSetting = await client.fetch(QSiteSetting);

	return {
		props: {
			engagementStrategiesRes,
			caseStudiesRes,
			expertiseRes,
			questionsRes,
			preview: true,
		},
	};
}
