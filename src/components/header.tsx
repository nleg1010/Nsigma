import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className='py-3'>
            <div className='container mx-auto px-4 flex gap-7 items-center'>
                <div className='md:w-1/4 w-1/2'>
                    <Link href="/" className='inline-block'>
                        <Image src="/images/logo.png" alt='logo' width={156} height={48} />
                    </Link>
                </div>
                <nav className='md:w-3/4 w-1/2 flex justify-end'>
                    <button onClick={() => setOpen(!open)} className='md:hidden block text-3xl text-white'>
                        {
                            open ? (<IoClose />) : (<FaBars />)
                        }
                    </button>
                    <ul className={`md:flex-row flex-col gap-5 md:items-center items-start md:justify-end md:static  ${open ? "flex absolute left-0 right-0 top-16 md:p-0 px-4 py-10 bg-[#1d1a36] " : "md:flex hidden"}`}>
                        <li>
                            <Link href="#" className='md:text-lg text-base font-semibold text-white uppercase'>
                                Our Expertise
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='md:text-lg text-base font-semibold text-white uppercase'>
                                Engagement Strategies
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='md:text-lg text-base font-semibold text-white uppercase'>
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='md:text-lg text-base font-semibold text-white uppercase'>
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='md:text-lg text-base font-semibold text-white uppercase'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-bold text-white bg-custm_pink p-4 block min-w-[156px] mx-auto text-center rounded-xl'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
