import React, { useCallback, useEffect, useState } from 'react'
import CaseStudiesCard from './CaseStudiesCard'
import Image from 'next/image'

interface ICaseStudiesItemsProps {
     item: any
}

const CaseStudies = ({ data }: any) => {
     const [loadMore, setLoadMore] = useState<number>(3)
     const [caseStudiesList, setCaseStudiesList] = useState(data)

     const handleLoadMore = useCallback((loadMore:any)=>{
          setLoadMore(loadMore+3)
          setCaseStudiesList(data.slice(0, loadMore))
     },[data])

     useEffect(()=>{
          setCaseStudiesList(data.slice(0,3))
     },[data])

     return (
          <section className='container mx-auto pb-20 px-3 md:px-0' id="casestudy">
               <div className='relative'>
                    <h2 className=' text-2xl md:mt-5 md:text-[42px] font-extrabold text-white text-center pb-16'>Case <span className='grad'>Studies</span></h2>
                    {/* <Image src="/images/half-circle.svg" alt="img" width={140} height={140} className='z-[1] animate-pulse absolute md:-top-10 top-0 md:right-16 w-20 md:w-auto right-2'/> */}
                    {/* <Image src="/images/arrow.svg" alt="img" width={120} height={120} className='z-[1] absolute animate-bounce -top-10 md:-left-24 left-0 w-20 md:w-auto'/> */}
               </div>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:mt-5'>
                    {
                         caseStudiesList?.map((item: any, idx: number) => (
                              <CaseStudiesCard key={idx} data={item} />
                         ))
                    }
               </div>
               <div className='flex justify-center mt-12'>
                    <button onClick={()=>handleLoadMore(loadMore)} className='bg-[#F7476B] text-white capitalize px-8 py-3 hover:scale-105 transition-all duration-200 ease-linear rounded-lg'>Load More</button>
               </div>
          </section>
     )
}

export default CaseStudies