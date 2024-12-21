import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaBullseye } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link'
import GenreItem from './GenreItem'
import Search from './Search'

export default function Navbar() {
    return (
        <div className='w-full h-[60px] fixed flex justify-center items-center mt-2 z-50 px-8'>
            <div className='w-full  h-full flex justify-between items-center px-[10px] gap-4  rounded-full bg-[#707070]/20 backdrop-blur-2xl shadow-md shadow-black/25'>
                <div className=' flex-1  items-center gap-2'>
                    {/* <Link href="/">
                        <FaBullseye size={30} className='fill-[#FFBB00]' />
                    </Link> */}
                    <div className=' '>
                        <Search/>
                    </div>
                </div>
                <div className='w-full max-w-[800px] justify-center flex flex-none   gap-4 '>
                    <GenreItem title="Popular" param="Popular" />
                    <GenreItem title="On Air" param="On-Air" />
                    <GenreItem title="Trending" param="Trending" />
                    <GenreItem title="Top Rated" param="Top-Rated" />
                    <GenreItem title="Up Coming" param="Up-Coming" />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center  gap-2 '>
                        <MenuItem title="" Icon={BsFillInfoCircleFill} address="/about" size="20" />
                        {/* <MenuItem title="Glancee" Icon={FaBullseye} address="/" size="20" /> */}
                    </div>
                    <Link href="/">
                        <div className='w-[180px] flex justify-between items-center bg-white/10 py-[5px] px-3 rounded-full group'>
                            <div className='flex items-center gap-2'>
                                <FaBullseye size={30} className='fill-[#FFBB00]' />
                                <div className='flex-none'>
                                    <p className='text-[13px] font-light text-white'>Glancee</p>
                                    <p className='text-[10px] font-light text-white/70 flex items-center gap-[2px]'><FaBullseye size={10} className='fill-[#white]' />movieapp</p>
                                </div>
                            </div>
                            <IoIosArrowDown size={15} className='fill-white  justify-end' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
