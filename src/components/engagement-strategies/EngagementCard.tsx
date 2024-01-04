import Image from 'next/image'
import React, { FC, useState } from 'react'
import EngagementCardMobile from './EngagementCardMobile'

interface EngagementCardProps {
     idx: number,
     length: number,
     data: any
}

const EngagementCard: FC<EngagementCardProps> = ({ idx, length, data }) => {
     
     const [string, setString] = useState<any>(180)
     const [id,setId] = useState()

     const handleExpand = (id:any) => {
          setString(data.length)
          setId(id)
     }

     return (
          <>
               <section className={`relative gap-6 hidden md:flex md:gap-12 justify-center pb-10 items-center ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className='w-[40%]'>
                         <figure className='bg-[#272932] rounded-xl p-6 w-full flex justify-center'>
                              <Image src={data.image.asset.url} alt="img" width={300} height={200} className='h-[180px]'/>
                         </figure>
                    </div>
                    <div className={`${length !== idx && 'line-border'}`}>
                         <button className='bg-[#272932] z-10 relative rounded-full border-[2px] border-gray-700 text-white w-12 h-12 md:w-16 md:h-16 md:text-xl stroke-black/5'>0{idx}
                         { length === idx && <div className='bg-[#1E2029] p-2 z-[9] absolute ml-6 py-16 top-[62px]'/>}

                         </button>
                    </div>
                    <div className='w-[40%]'>
                         <h3 className={`text-white text-xl md:text-[26px] font-bold capitalize ${idx % 2 === 0 && 'text-right'}`}>{data.title}</h3>
                         <p className={`mt-1.5 text-[#babbbb] md:text-lg ${idx % 2 === 0 && 'text-right'}`}>
                              {data.info.slice(0, string)}
                              {
                                   id !== idx &&  <button className='grad ml-1 hover:underline' onClick={()=>handleExpand(idx)}>{data.info.length > 180 && 'Read More ...'}</button>
                              }
                         </p>
                    </div>
               </section>
               <EngagementCardMobile idx={idx} length={length} data={data}/>
          </>
     )
}

export default EngagementCard



