import React from 'react'

export default function Banner() {
    return (
        <section className='h-full bg-[url("/images/grad-bg.png")] bg-cover bg-no-repeat bg-center -mt-20'>
            <div className='min-h-screen h-full flex items-center justify-center bg-[url("/images/particles.png")] bg-cover bg-no-repeat bg-center w-full'>
                <div className="container mx-auto px-4">
                    <h1 className='md:text-6xl text-3xl md:leading-[70px] font-bold text-white text-center max-w-[720px] mx-auto mb-5'>
                        Business<span className='bg-[url("/images/h-bg.png")] bg-contain bg-no-repeat bg-center sm:p-5 p-2'><span className='grad'>Transformation </span></span>
                        Powered by Data
                    </h1>
                    <p className='text-2xl font-medium text-center text-white max-w-[840px] mx-auto'>
                        We know technologies and have an advanced approach to problem solving, which allow us to provide solutions to almost any engineering challange
                    </p>
                </div>
            </div>
        </section>
    )
}
