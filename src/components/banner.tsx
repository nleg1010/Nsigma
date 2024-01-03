import React from 'react'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Transformation', 'Business'];

export default function Banner() {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <section className='h-full bg-[url("/images/grad-bg.png")] bg-cover bg-no-repeat bg-center -mt-20'>
            <div className='min-h-[90vh] h-full flex items-center justify-center bg-[url("/images/particles.png")] bg-cover bg-no-repeat bg-center w-full'>
                <div className="container mx-auto px-4">
                    <div className='md:text-6xl text-3xl justify-center md:leading-[70px] max-w-[700px] font-black text-white text-center mx-auto mb-5'>
                        <div className='flex gap-3 justify-center '>
                            <p className='pt-2'>Business</p>
                            <div className='relative'>
                                <div className='_dott_bottom_left' />
                                <div className='_dott_bottom_right' />
                                <TextTransition className='bg-[#20262D] !h-[49px] md:!h-[78px] px-5 py-2 _border' springConfig={presets.wobbly}>
                                    <span className='grad'>{TEXTS[index % TEXTS.length]} </span>
                                </TextTransition>
                            </div>
                        </div>
                        <p className='mt-3'>Powered by Data</p>
                    </div>
                    <p className='text-2xl font-medium text-center text-white max-w-[840px] mx-auto'>
                        We know technologies and have an advanced approach to problem solving, which allow us to provide solutions to almost any engineering challange
                    </p>
                </div>
            </div>
        </section>
    )
}


