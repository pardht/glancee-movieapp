import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Card({ result }) {
    // console.log(result)
    return (
        <Link href={`/movie/${result.id}`}>
            <div className=' bg-black/40 rounded-[30px] duration-500 relative flex group hover:brightness-125 group transition-all'>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                    alt='poster'
                    width={10000}
                    height={10000}
                    className='w-full h-full rounded-[30px] flex '
                />
                <div className='w-full h-[50%] absolute  p-6 bottom-0 flex  items-end rounded-b-[30px] opacity-0  group-hover:opacity-100 duration-300 bg-gradient-to-t from-black/90 via-black/70 to-transparent '>
                    <div className='grid grid-cols-3 space-y-3 group-hover:translate-y-0 translate-y-1 duration-300'>
                        <div className=' col-span-3 '>
                            <p className='text-white font-semibold '>
                                {result.original_title}
                            </p>
                        </div>
                        <div className=' col-span-2'>
                            <p className='line-clamp-3 text-white/70 text-[13px] font-light tracking-wide'>
                                {result.overview}
                            </p>
                        </div>
                        <div className=' col-span-1 flex items-end justify-end'>
                            <div className='p-4 bg-white rounded-full flex items-center justify-center group  group-hover:scale-110  transition-all'>
                                <FaPlay size={15} className='fill-black ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
