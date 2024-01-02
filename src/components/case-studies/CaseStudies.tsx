import React from 'react'
import CaseStudiesCard from './CaseStudiesCard'

interface ICaseStudiesItemsProps{
     item:any
}

const CaseStudies = () => {
  return (
    <section className='container mx-auto pb-20 px-3 md:px-0'>
          <h2 className=' text-2xl md:mt-5 md:text-[42px] font-extrabold text-white text-center pb-16'>Case <span className='grad'>Studies</span></h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:mt-5'>
          {
               [1,2,3,4].slice(0,3).map((item:any,idx:number)=>(
                    <CaseStudiesCard key={idx} data={item}/>
               ))
          }
          </div>
         <div className='flex justify-center mt-12'>
         <button className='bg-[#F7476B] text-white capitalize px-8 py-3 hover:scale-105 transition-all duration-200 ease-linear rounded-lg'>Load More</button>
         </div>
    </section>
  )
}

export default CaseStudies