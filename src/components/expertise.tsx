import Image from 'next/image'
import React from 'react'

export default function Expertise() {
    return (
        <section className='py-16 relative'>
            <Image src="/images/circle.png" alt='circle' width={180} height={180} className='absolute left-4 -z-0 opacity-40 w-20 md:w-[180px]' />
            <Image src="/images/abstract1.png" alt='abstract1' width={121} height={321} className='absolute right-4 -z-0 w-20 md:w-[121px] top-0' />
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
                    {ExpertyData.map((item: any, idx: number) => {
                        return (<div key={idx}>
                            <div className='w-[61px] h-[61px] bg-black flex items-center justify-center rounded-full'>
                                <Image src={item.icon} alt='experty/1' width={26} height={26} />
                            </div>
                            <h3 className='text-xl font-semibold text-white my-4'>
                                Data & Analytics
                            </h3>
                            <p className='text-base font-medium text-lightGray max-w-[280px]'>
                                Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.
                            </p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <Image src="/images/abstract2.png" alt='abstract2' width={121} height={321} className='absolute left-4 -bottom-20 -z-0 w-20 md:w-[121px]' />
        </section>
    )
}

const ExpertyData = [
    {
        icon: "/images/experty/1.svg",
        title: "Data & Analytics",
        content: "Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.",
    },
    {
        icon: "/images/experty/2.svg",
        title: "AI / ML",
        content: "Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.",
    },
    {
        icon: "/images/experty/3.svg",
        title: "Data Science & Predictive Edge",
        content: "Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.",
    },
    {
        icon: "/images/experty/4.svg",
        title: "Date Management",
        content: "Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.",
    },
    {
        icon: "/images/experty/5.svg",
        title: "Mobile",
        content: "Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.",
    },
    {
        icon: "/images/experty/6.svg",
        title: "BI Automation",
        content: "Exepteur sint occaecat cupidatat non proident, sunt in culpa que official deserunt mollit laborum - semper quis lectus nulla.",
    },
]
