import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState<any>()

    const handleSubMenuEnter = (idx: any) => {
        setSubMenu(idx)
    }
    const handleSubMenuLeave = (idx: any) => {
        setSubMenu(null)
    }

    const handleSubMenuClick = (idx: any) => {
        if(subMenu === idx){
            return setSubMenu(null)
        }
        setSubMenu(idx)
    }


    return (
        <header className='py-3 z-50'>
            <div className='container mx-auto px-4 flex gap-7 items-center'>
                <div className='md:w-1/4 w-1/2 z-50'>
                    <Link href="/" className='inline-block'>
                        <Image src="/images/logo.png" alt='logo' width={156} height={48} className='z-50' />
                    </Link>
                </div>
                <nav className='md:w-3/4 w-1/2 flex justify-end '>
                    <button onClick={() => setOpen(!open)} className='md:hidden block text-3xl text-white z-50'>
                        {
                            open ? (<IoClose />) : (<FaBars />)
                        }
                    </button>
                    <ul className={`md:flex-row z-50 flex-col gap-5 md:items-center items-start md:justify-end md:static  ${open ? "flex absolute left-0 right-0 top-16 md:p-0 px-4 py-10 bg-[#1d1a36] " : "md:flex hidden"}`}>
                        {
                            NavItem.map((item: any, idx) => (
                                <li key={idx} className='relative w-full md:w-auto'
                                onMouseEnter={() => handleSubMenuEnter(idx)}
                                onMouseLeave={() => handleSubMenuLeave(idx)}  
                                >
                                    <button className={` w-full md:w-auto flex justify-between items-center gap-1 md:justify-center
                                        ${idx + 1 === NavItem.length ? 'text-base font-bold text-white bg-custm_pink p-4 block min-w-[156px] mx-auto text-center rounded-xl'
                                            : 'md:text-lg text-base font-semibold text-white uppercase'}`}

                                    >
                                        <Link href={item.link} className=''
                                        
                                        >
                                            {item.name}
                                        </Link>
                                        {
                                            item?.subNav?.length > 0 && <IoIosArrowDown onClick={() => handleSubMenuClick(idx)} className="text-2xl" />
                                        }

                                    </button>
                                    {
                                        item?.subNav?.length > 0 && subMenu === idx && <div className='md:absolute md:pt-4 mt-4 md:mt-0 md:border-none border-l-[2px] border-custm_pink'>
                                            <ul className='md:bg-[#20262D]/50 md:p-4 px-6 rounded-xl'>
                                                {
                                                    item?.subNav?.map((sItem: any, id: number) => (
                                                        <li key={id} className='py-1'>
                                                            <Link href={sItem.link} className='md:text-lg whitespace-nowrap hover:text-custm_pink text-base font-semibold text-white uppercase' >{sItem.name}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}




const NavItem = [
    {
        name: 'Our Expertise',
        link: '#expertise'
    },
    {
        name: 'Engagement Strategies',
        link: '#engagement'
    },
    {
        name: 'Case Studies',
        link: '#casestudy',
        subNav: [
            {
                name: 'About Us',
                link: '#'
            }
        ]
    },
    {
        name: 'Resources',
        link: '#'
    },
    {
        name: 'Contact Us',
        link: '#'
    }
]