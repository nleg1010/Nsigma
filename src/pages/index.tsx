import Banner from '@/components/banner'
import CaseStudies from '@/components/case-studies/CaseStudies'
import EngagementStrategies from '@/components/engagement-strategies/EngagementStrategies'
import Expertise from '@/components/expertise'
import FaqBox from '@/components/faqBox'
import Head from 'next/head'
import { QCaseStudies, QEngagementStrategies, QExpertise, QQuestions } from '../../sanity/lib/query'
import { client } from '../../sanity/lib/client'
import { FC, useEffect, useState } from 'react'

const Home: FC<any> = ({ engagementStrategiesRes, caseStudiesRes, expertiseRes, questionsRes }) => {

  const [displayedData, setDisplayedData] = useState<any>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndices = displayedData.map((item:any) => questionsRes.indexOf(item.data));
      const nextIndex = (currentIndices[1] + 1) % questionsRes.length;
      const newIndex = nextIndex === currentIndices[0] ? (nextIndex + 1) % questionsRes.length : nextIndex;
      const newItems = [
        { index: currentIndices[1], data: questionsRes[currentIndices[1]] },
        { index: newIndex, data: questionsRes[newIndex] }
      ];
      setDisplayedData(newItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [displayedData, questionsRes]);

  useEffect(() => {
    setDisplayedData([
      { index: 0, data: questionsRes[0] },
      { index: 1, data: questionsRes[1] }
    ]);
  }, [questionsRes]);


  return (
    <>
      <Head>
        <title>Nsigma</title>
      </Head>
      <div className='bg-[#131517]'>
        <Banner />
        <section className='py-16 -mt-28 relative z-40'>
          <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 md:-mt-[100px] mt-0'>
            {displayedData?.map((item: any, idx: number) => {
              return (
                <FaqBox key={idx} id={item.index + 1} data={item.data} />
              )
            })}
          </div>
        </section>
        <Expertise data={expertiseRes} />
        <EngagementStrategies data={engagementStrategiesRes} />
        <CaseStudies data={caseStudiesRes} />
      </div>
    </>
  )
}

export default Home

const FaqsData = [
  {
    id: "1",
    title: "Are You Drowning in Data but  Starving for Insights?",
    content: "Discover how to turn your overwhelming data streams into strategic assets",
  },
  {
    id: "2",
    title: "Is Your Business Ready for the Predictive Power of Machine Learning?",
    content: "See how predictive modeling can illuminate opportunities for growth and efficiency.",
  },
]



export async function getServerSideProps() {
  const engagementStrategiesRes = await client.fetch(QEngagementStrategies);
  const caseStudiesRes = await client.fetch(QCaseStudies);
  const expertiseRes = await client.fetch(QExpertise);
  const questionsRes = await client.fetch(QQuestions);

  return {
    props: {
      engagementStrategiesRes,
      caseStudiesRes,
      expertiseRes,
      questionsRes,
      preview: true
    }
  };
}