import Image from 'next/image'
import React from 'react'
import PortableText from "react-portable-text"

const AboutUs = ({ about }: any) => {
     // console.log("🚀 ~ AboutUs ~ about:", about)
     return (
          <>
               <h2 id="about" className=' text-2xl md:text-[42px] font-extrabold text-white text-center pb-16'>Why Choose <span className='grad'>NSigma ?</span></h2>
               <div className='container mx-auto px-3 text-lightGray text-center md:text-lg pb-20'>
                    <PortableText
                         content={about.content}
                         serializers={{}}
                    />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-10'>
                         {
                              about?.grid?.map((item: any, idx: number) => (
                                   <div key={idx} className='flex justify-start items-start gap-4'>
                                        <Image src={item.icon.asset.url} width={40} height={40} alt={`icon`} />
                                        <p className='text-left'>{item.content}</p>
                                   </div>
                              ))
                         }
                    </div>
               </div>
          </>
     )
}

export default AboutUs