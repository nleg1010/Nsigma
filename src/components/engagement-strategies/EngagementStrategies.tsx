import React from 'react'
import EngagementCard from './EngagementCard'

const EngagementStrategies = () => {
  return (
    <section className='py-16'>
          <div className="container mx-auto">
               <h2 className=' text-2xl md:text-[42px] font-extrabold text-white text-center pb-16'>Engagement <span className='grad'>Strategies</span></h2>
               <div className='bg-[#1E2029] rounded-[20px] px-6 md:px-10 lg:px-32 pb-6 pt-16'>
                    {
                         engagements.map((item:any,idx:number)=>(
                              <EngagementCard key={idx} idx={idx+1} length={engagements.length}/>
                         ))
                    }
               </div>
          </div>
    </section>
  )
}

export default EngagementStrategies


const engagements = [1,2,3]