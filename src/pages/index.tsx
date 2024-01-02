import Banner from '@/components/banner'
import Expertise from '@/components/expertise'
import FaqBox from '@/components/faqBox'

export default function Home() {
  return (
    <main className='bg-black'>
      <Banner />
      <section className='py-16'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 md:-mt-[100px] mt-0'>
          {FaqsData.map((item: any, idx: number) => {
            return (
              <FaqBox key={idx} data={item} />
            )
          })}
        </div>
      </section>
      <Expertise />
    </main>
  )
}

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