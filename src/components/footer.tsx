import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {

    const handleMail = async (e: any) => {
        e.preventDefault()

        const response = await fetch("/api/mailsend");
        const movies = await response.json();
        console.log(movies, 'movies');
      
    }

    return (
        <footer className='bg-Gray relative'>
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
            <div className='container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7 pt-10 pb-16 relative z-[1]'>
                <div className='md:w-[30%] w-full'>
                    <h6 className='md:text-[22px] md:leading-8 text-lg font-bold text-white'>
                        Subscribe to our newsletter
                    </h6>
                    <form className='relative my-10'>
                        <label htmlFor='email' className='hidden'>Email</label>
                        <input
                            name='email'
                            id='email'
                            type='email'
                            placeholder='Your Email Adreess'
                            className='text-sm font-normal text-[#858B93] placeholder:text-[#858B93] appearance-none bg-transparent p-4 rounded-[26px] outline-none border border-[#272633] w-full' />
                        <button onClick={(e) => handleMail(e)} className='text-2xl text-white bg-gradient-to-r from-[#EB9204] to-[#83E868] h-[38px] w-[38px] inline-flex items-center justify-center rounded-full absolute right-2 inset-y-1/2 -translate-y-1/2'>
                            <FaChevronRight />
                        </button>
                    </form>
                    <ul className='flex items-center flex-wrap gap-3'>
                        <li>
                            <Link href="#" className='text-lg text-white hover:bg-lightGray bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full'>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-lg text-white hover:bg-lightGray bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full'>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-lg text-white hover:bg-lightGray bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full'>
                                <FaLinkedinIn />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-lg text-white hover:bg-lightGray bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full'>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-lg text-white hover:bg-lightGray bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full'>
                                <FaLinkedinIn />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-lg text-white hover:bg-lightGray bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full'>
                                <FaEnvelope />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='md:w-[70%] w-full grid md:grid-cols-3 grid-cols-1 gap-7'>
                    <div>
                        <h6 className='md:text-[22px] md:leading-8 text-lg font-bold text-white mb-6'>
                            Services
                        </h6>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link href="https://nsigma.vercel.app/#expertise" className='text-xl font-medium text-lightGray hover:text-white'>
                                    Data Strategy & Consulting
                                </Link>
                            </li>
                            <li>
                                <Link href="https://nsigma.vercel.app/#expertise" className='text-xl font-medium text-lightGray hover:text-white'>
                                    AI/ML & Data Science
                                </Link>
                            </li>
                            <li>
                                <Link href="https://nsigma.vercel.app/#expertise" className='text-xl font-medium text-lightGray hover:text-white'>
                                    DataOps Services
                                </Link>
                            </li>
                            <li>
                                <Link href="https://nsigma.vercel.app/#expertise" className='text-xl font-medium text-lightGray hover:text-white'>
                                    Data Analytics & Reporting
                                </Link>
                            </li>
                            <li>
                                <Link href="https://nsigma.vercel.app/#expertise" className='text-xl font-medium text-lightGray hover:text-white'>
                                    Software Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='text-xl font-medium text-lightGray hover:text-white'>
                                    Business Automation
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='md:text-[22px] md:leading-8 text-lg font-bold text-white mb-6'>
                            About
                        </h6>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link href="#" className='text-xl font-medium text-lightGray hover:text-white'>
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='text-xl font-medium text-lightGray hover:text-white'>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='md:text-[22px] md:leading-8 text-lg font-bold text-white mb-6'>
                            Help
                        </h6>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link href="#" className='text-xl font-medium text-lightGray hover:text-white'>
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='text-xl font-medium text-lightGray hover:text-white'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <Image src="/images/abstract.png" alt='abstract' width={94} height={250} className='absolute left-4 bottom-5 -z-0' /> */}
        </footer>
    )
}
