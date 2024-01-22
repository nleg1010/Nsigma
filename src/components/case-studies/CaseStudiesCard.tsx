import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CaseStudiesCard = ({data}:any) => {
  return (
    <article className='bg-[#1E2029] group rounded-[20px] overflow-hidden'>
          <Link href={`/${data?.slug?.current}`}>
          <figure className='rounded-[20px] cursor-pointer overflow-hidden'>
               <Image src={data.image.asset.url} alt={data.title} width={370} height={250} className='w-full transition-all duration-200 ease-linear group-hover:scale-105 '/>
          </figure> 
          </Link>
          <div className='p-4 px-6'>
          <Link href={`/${data?.slug?.current}`}><h3 className='text-xl min-h-[56px] cursor-pointer text-white'>{data.title}</h3></Link>
               <p className='text-lightGray italic mt-2 pb-2 2xl:min-h-[105px] lg:min-h-[128px]'>{data.info}</p>
          </div>
    </article>
  )
}

export default CaseStudiesCard