import Image from 'next/image'
import React from 'react'

const CaseStudiesCard = ({data}:any) => {
  return (
    <article className='bg-[#1E2029] rounded-[20px] overflow-hidden'>
          <figure>
               <Image src={data.image.asset.url} alt={data.title} width={370} height={250} className='w-full rounded-[20px] overflow-hidden'/>
          </figure>
          <div className='p-4 px-6'>
               <h3 className='text-xl text-[#CACACA]'>{data.title}</h3>
               <p className='text-[#696B76] italic mt-2 pb-2'>{data.info}</p>
          </div>
    </article>
  )
}

export default CaseStudiesCard