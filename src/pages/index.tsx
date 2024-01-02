import Banner from '@/components/banner'
import EngagementStrategies from '@/components/engagement-strategies/EngagementStrategies'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-[#131517]'>
      <Banner />
      <EngagementStrategies/>
    </div>
  )
}
