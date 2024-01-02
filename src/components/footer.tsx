import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='bg-Gray'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between items-center gap-7 pt-16 pb-10 border-b border-[#696B76]/40'>
                <div className='md:w-1/2 w-full'>
                    <Link href="/" className='inline-block'>
                        <Image src="/images/footer-logo.png" alt='logo' width={250} height={76} />
                    </Link>
                </div>
                <div className='md:w-1/2 w-full flex items-center gap-7'>
                    <h5 className='md:text-[34px] text-2xl font-bold text-white'>
                        Ready to get started?
                    </h5>
                    <Link href="#" className='text-base font-bold text-white bg-custm_pink p-4 inline-block min-w-[165px] mx-auto text-center rounded-xl'>
                        Get Started
                    </Link>
                </div>
            </div>
            <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between items-center gap-7 pt-16 pb-10'>
                <div className='md:w-1/2 w-full'>
                    <h6 className='md:text-[22px] md:leading-8 text-lg font-bold text-white'>
                        Subscribe to our newsletter
                    </h6>
                    <form className='relative'>
                        <label htmlFor='email' className='hidden'>Email</label>
                        <input
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Your Email Adreess'
                        className='text-sm font-normal text-[#858B93] placeholder:text-[#858B93] appearance-none bg-transparent p-4 rounded-[26px] outline-none border-none w-full' />
                        <button className='text-2xl text-white bg-gradient-to-r from-[#EB9204] to-[#83E868] h-[38px] w-[38px] inline-flex items-center justify-center rounded-full absolute right-2 inset-y-1/2 -translate-y-1/2'>
                            <FaChevronRight />
                        </button>
                    </form>
                </div>
                <div className='md:w-1/2 w-full flex items-center gap-7'>

                </div>
            </div>
        </footer>
    )
}
