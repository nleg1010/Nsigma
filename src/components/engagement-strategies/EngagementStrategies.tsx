import React, { FC } from 'react'
import EngagementCard from './EngagementCard'
import Image from 'next/image'

const EngagementStrategies:FC<any> = ({data}) => {
  return (
    <section className='py-16 overflow-hidden px-3 md:px-0' id="engagement">
          <div className="container mx-auto relative ">
               <h2 className=' text-2xl md:text-[42px] font-extrabold text-white text-center pb-16'>Engagement <span className='grad'>Strategies</span></h2>
               <div className='bg-[#1E2029] rounded-[20px] px-6 md:px-10 lg:px-32 pb-6 pt-12 md:pt-16 z-10 relative'>
                    {
                         data?.map((item:any,idx:number)=>(
                              <EngagementCard key={idx} idx={idx+1} data={item} length={data.length}/>
                         ))
                    }
               </div>
               <Image src="/images/circle.svg" alt="img" width={140} height={140} className='z-[1] animate-spin absolute -right-16 top-1/2'/>
          </div>
    </section>
  )
}

export default EngagementStrategies


