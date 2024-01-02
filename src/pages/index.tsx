import Banner from '@/components/banner'
import CaseStudies from '@/components/case-studies/CaseStudies'
import EngagementStrategies from '@/components/engagement-strategies/EngagementStrategies'

export default function Home() {
  return (
    <div className='bg-[#131517]'>
      <Banner />
      <EngagementStrategies/>
      <CaseStudies/>
    </div>
  )
}
