import Image from 'next/image'
import React, { FC } from 'react'

interface EngagementCardProps {
     idx: number,
     length: number
}

const EngagementCardMobile: FC<EngagementCardProps> = ({ idx, length }) => {
     return (
          <section className={`relative md:hidden gap-5 ${idx === length ? 'pb-5' : 'pb-10'}`}>
               <div className={`flex gap-4 ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    <figure className='bg-[#272932] rounded-xl p-6 w-full flex justify-center'>
                         <Image src="/images/chat.svg" alt="img" width={300} height={200} />
                    </figure> 
                    <div>
                         <button className='bg-[#272932] z-10 relative rounded-full border-[2px] border-gray-700 text-white w-12 h-12 md:w-16 md:h-16 md:text-xl stroke-black/5'>0{idx}</button>
                    </div>
               </div>

               <div className='mt-5'>
                    <h3 className={`text-white text-xl md:text-[26px] font-bold capitalize ${idx % 2 === 0 && 'text-right'}`}>Team Augmentation</h3>
                    <p className={`mt-1.5 text-[#696B76] md:text-lg ${idx % 2 === 0 && 'text-right'}`}>Nettracking gives you an innovative web-based tool that manages, filters and reports on your website&apos;s</p>
               </div>
          </section>
     )
}

export default EngagementCardMobile



