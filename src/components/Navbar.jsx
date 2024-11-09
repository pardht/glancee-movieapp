import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaBullseye } from 'react-icons/fa'
import Link from 'next/link'
import GenreItem from './GenreItem'

export default function Navbar() {
    return (
        <div className='w-full h-[60px] fixed flex justify-center items-center mt-2 z-50'>
            <div className='w-full max-w-[1280px] h-full flex justify-between items-center px-4  gap-10 rounded-full bg-[#707070]/80 backdrop-blur-2xl shadow-md shadow-black/25'>
                <div className='flex items-center gap-2'>
                    <Link href="/">
                        <FaBullseye size={30} className='fill-[#FFBB00]' />
                    </Link>
                    <div className='flex'>
                        <MenuItem title="Home" Icon={AiFillHome} address="/" />
                        <MenuItem title="About" Icon={BsFillInfoCircleFill} address="/about" />
                    </div>
                </div>
                <div className='flex gap-10'>
                    <GenreItem title="Trending" param="fetchTrending"/>
                    <GenreItem title="Top Rated" param="fetchTopRated"/>
                </div>
            </div>
        </div>
    )
}
