import Image from 'next/image'
import React from 'react'

const CaseStudiesCard = ({data}:any) => {
  return (
    <article className='bg-[#1E2029] rounded-[20px] overflow-hidden'>
          <figure>
               <Image src="/images/csbg.png" alt="" width={370} height={250} className='w-full rounded-[20px] overflow-hidden'/>
          </figure>
          <div className='p-4 px-6'>
               <h3 className='text-xl text-[#CACACA]'>Memilih foto yang cocok untuk desain website</h3>
               <p className='text-[#696B76] italic mt-2 pb-2'>Tips memilih foto yang cocok untuk desain website dan bagaimana cara mene mpatkan nya dengan tepat</p>
          </div>
    </article>
  )
}

export default CaseStudiesCard