import React, { useEffect, useMemo, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition';


const TEXTS = ['Driven', 'Informed', 'Dependent', 'Powered', 'Enhanced'];

export default function Banner() {

    const [index, setIndex] = useState<any>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex: any) => prevIndex + 1);
        }, 4000);
        return () => clearTimeout(intervalId);
    }, []);

    const currentIndex = useMemo(() => index % TEXTS.length, [index, TEXTS.length]);

    return (
        <>
            <main className="relative flex items-center justify-center h-screen mb-12 overflow-hidden -mt-20">
                <div className="relative z-30 text-2xl bg-opacity-50 rounded-xl">
                    <div className='flex items-center justify-center bg-black/30 w-screen h-screen'>
                        <div className="container mx-auto px-4">
                            <div className='md:text-6xl text-3xl justify-center md:leading-[70px] max-w-[700px] font-black text-white text-center mx-auto mb-5'>
                                <div className='flex gap-3 justify-center flex-wrap'>
                                    <h2>Data</h2>
                                    <div className='relative overflow-hidden'>
                                        <TextTransition className='' springConfig={presets.wobbly}>
                                            <span className='grad'>{TEXTS[currentIndex % TEXTS.length]} </span>
                                        </TextTransition>
                                    </div>
                                </div>
                                <h2 className='-mt-5 md:mt-2'>Intelligence</h2>
                            </div>
                            <p className='text-2xl font-medium text-center text-white max-w-[840px] mx-auto'>
                                We know technologies and have an advanced approach to problem solving, which allow us to provide solutions to almost any engineering challange
                            </p>
                        </div>
                    </div>
                </div>
                <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                    <source src="/video.mp4" type="video/mp4" />Your browser does not support the video tag.
                </video>
            </main>
        </>
    )
}


