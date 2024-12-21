import Image from 'next/image';
import React from 'react'

export default async function MoviebyId({params}) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    const movie = await res.json();
    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#707070]/50 '>
            <div className='w-auto   h-auto bg-black/20 flex   rounded-[50px] mt-10'>
                <div className='w-[400px]'>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt='poster'
                        width={10000}
                        height={10000}
                        className='rounded-l-[50px]'
                    ></Image>
                </div>
                <div className='w-[500px] h-full flex flex-col px-8 py-10 space-y-5 text-white'>
                    <p className='text-3xl font-semibold'>{movie.original_title}</p>
                    <p className='text-md font-light'>{movie.overview}</p>
                    <p>popularity: {movie.popularity}</p>
                    <p>release date: {movie.release_date}</p>
                    <p>vote average: {movie.vote_average}</p>
                    <p>vote count: {movie.vote_count}</p>
                    <p>vote count: {movie.videos}</p>
                </div>
            </div>
        </div>
    )
}
