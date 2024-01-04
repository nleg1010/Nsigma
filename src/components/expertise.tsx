import Image from 'next/image'
import React from 'react'

export default function Expertise({data}:any) {
    return (
        <section className='py-16 relative' id="expertise">
            <Image src="/images/circle.png" alt='circle' width={180} height={180} className='absolute animate-spin left-4 -z-0 opacity-40 w-20 md:w-[180px]' />
            <Image src="/images/abstract1.png" alt='abstract1' width={121} height={321} className='absolute animate-pulse right-4 -z-0 w-20 md:w-[121px] top-0  hidden md:block' />
            <div className='container mx-auto px-4 relative z-10'>
                <div>
                    <h2 className='md:text-[42px] text-2xl md:leading-[50px] font-bold text-white text-center mb-5'>
                        Our <span className='grad'> Expertise</span>
                    </h2>
                    <p className='text-lg font-medium text-lightGray text-center max-w-[540px] mx-auto'>
                        Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.
                    </p>
                </div>
                <div className='bg-Gray rounded-[20px] p-10 mt-10 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-7'>
                    {data?.map((item: any, idx: number) => {
                        return (<div key={idx}>
                            <div className='w-[61px] h-[61px] bg-black flex items-center justify-center rounded-full'>
                                <Image src={item.icon.asset.url} alt='experty/1' width={26} height={26} />
                            </div>
                            <h3 className='text-xl font-semibold text-white my-4'>
                                {item.title}
                            </h3>
                            <p className='text-base font-medium text-lightGray'>
                                {item.info}
                            </p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <Image src="/images/abstract2.png" alt='abstract2' width={121} height={321} className='absolute animate-pulse left-4 -bottom-20 -z-0 w-20 md:w-[121px] hidden md:block' />
        </section>
    )
}
