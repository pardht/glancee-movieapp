import React from 'react'
import { HiLanguage } from "react-icons/hi2";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

export default function MovieDetails({ movie, Link, Image, FaPlay }) {
    return (
        <>
            <div className='flex'>
                <div className='flex-none w-auto'>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=''
                        width={400}
                        height={0}
                        className=' rounded-[20px]'
                    />
                </div>
                <div className=' w-full max-w-[700px] h-auto justify-start gap-5 flex flex-col px-8 space-y-3 text-white '>
                    <div className='space-y-5'>
                        <div className='flex flex-wrap gap-2'>
                            {movie.genres.map((genre) => (
                                <div key={genre.id} className='bg-zinc-100/20 px-5 py-3 rounded-full'>
                                    <p className='text-sm font-light'>{genre.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className='space-y-2'>
                            <p className='text-3xl font-semibold'>{movie.original_title}</p>
                            <p className='text-base font-light text-white/70 line-clamp-6'>{movie.overview}</p>
                        </div>
                        <div>
                            <p className='text-base font-light text-white/70'>{movie.tagline}</p>
                        </div>
                    </div>

                   
                    <div className='space-y-2 '>
                        <div className='space-y-2 '>
                            <div className='flex gap-1'>
                                <p className='p-3 px-4 bg-zinc-100/20 rounded-lg text-sm text-[#FFBB00] '>{movie.status}</p>
                                <p className='p-3 px-4 bg-zinc-100/20 rounded-lg text-sm font-light text-[#FFBB00]'>  {movie.release_date}</p>
                                <div className='flex gap-1'>
                                    <p className='px-3 bg-zinc-100/20 rounded-lg text-sm font-light flex items-center gap-1 text-[#FFBB00]'>
                                        <IoMdTime size={20} className='fill-[#FFBB00]' />
                                        {movie.runtime}mins</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <div className='p-3 bg-zinc-100/20 flex gap-2 rounded-full text-sm'>
                                <AiOutlineProduct size={20} className='fill-[#FFBB00]' />
                            </div>
                            <div className='p-3 px-4 bg-zinc-100/20 flex gap-2 rounded-lg text-sm font-light'>
                                {movie.production_countries.map((production) => (
                                    <div key={production.name} className=''>
                                        <p className='text-md'>{production.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <div className='p-3 bg-zinc-100/20 flex gap-2 rounded-full text-sm'>
                                <HiLanguage size={20} className='fill-[#FFBB00]' />
                            </div>

                            <div className='p-3 px-4 bg-zinc-100/20 flex gap-2 rounded-lg text-sm font-light'>
                                {movie.spoken_languages.map((language) => (
                                    <div key={language.name} className=''>
                                        <p className='text-md'>{language.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=' flex '>
                        <Link href="/">
                            <div className='group flex hover:pr-10 bg-white hover:bg-white/70 rounded-full duration-500 items-center cursor-pointer'>
                                <div className='p-5  rounded-full flex items-center justify-center   transition-all '>
                                    <FaPlay size={15} className='fill-black ' />
                                </div>
                                <p className='text-black font-extralight text-[0px] -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:text-base group-hover:opacity-100 duration-[200ms] ease-in-out'>Watch trailer</p>
                            </div>
                        </Link>
                    </div>
                    </div>


                </div>
                    <div className='flex-1'>
                        <ul className='flex flex-wrap justify-center space-y-10'>
                            {movie.production_companies.map((company) => (
                                <li key={company.id} className=''>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                                        alt='company'
                                        width={150}
                                        height={0}
                                        className=''
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>


        </>
    )
}
