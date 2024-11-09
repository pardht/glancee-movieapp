import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ result }) {
    return (
        <Link href={`/movie/${result.id}`}>
            <div className='  bg-black/40 rounded-[20px] hover:opacity-80 duration-200 relative flex'>
                < Image
                    src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                    alt='poster'
                    width={10000}
                    height={10000}
                    className='w-full h-full  rounded-[20px] flex'
                />


                <div className='w-full h-[50%] absolute  p-6 bottom-0 flex flex-col space-y-2  justify-end rounded-b-[20px] bg-gradient-to-t from-black/90 via-black/70 to-transparent  '>
                    <p className='text-white font-semibold '>
                        {result.original_title}
                    </p>
                    <p className='line-clamp-2 text-white/70 text-sm font-light tracking-wide'>
                        {result.overview}
                    </p>
                </div>

            </div>
        </Link>
    )
}
