import Image from 'next/image'
import React, { FC } from 'react'
import EngagementCardMobile from './EngagementCardMobile'

interface EngagementCardProps {
     idx: number,
     length: number
}

const EngagementCard: FC<EngagementCardProps> = ({ idx, length }) => {
     return (
          <>
               <section className={`relative gap-6 hidden md:flex md:gap-12 justify-center pb-10 items-center ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className='w-[40%]'>
                         <figure className='bg-[#272932] rounded-xl p-6 w-full flex justify-center'>
                              <Image src="/images/chat.svg" alt="img" width={300} height={200} />
                         </figure>
                    </div>
                    <div className={`${length !== idx && 'line-border'}`}>
                         <button className='bg-[#272932] z-10 relative rounded-full border-[2px] border-gray-700 text-white w-12 h-12 md:w-16 md:h-16 md:text-xl stroke-black/5'>0{idx}</button>
                    </div>
                    <div className='w-[40%]'>
                         <h3 className={`text-white text-xl md:text-[26px] font-bold capitalize ${idx % 2 === 0 && 'text-right'}`}>Team Augmentation</h3>
                         <p className={`mt-1.5 text-[#696B76] md:text-lg ${idx % 2 === 0 && 'text-right'}`}>Nettracking gives you an innovative web-based tool that manages, filters and reports on your website&apos;s</p>
                    </div>
               </section>
               <EngagementCardMobile idx={idx} length={length}/>
          </>
     )
}

export default EngagementCard



