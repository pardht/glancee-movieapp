import Image from 'next/image';
import React from 'react';
import Card from './Card';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import Caster from './Caster';
import Trailer from './Trailer';
import MovieDetails from './MovieDetails';

export default async function MoviebyId({ params }) {
    const movieId = params.id;

    // Fetch movie details
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`);
    const movie = await res.json();

    // Fetch trailers
    let trailers;
    try {
        const videoRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`);
        if (!videoRes.ok) throw new Error('Network response was not ok');
        const videos = await videoRes.json();

        // Check if results exist and find the trailer
        trailers = videos.results?.find(video => video.type === 'Trailer');
    } catch (error) {
        console.error("Error fetching videos:", error);
    }
    // console.log(movie)
    return (
        <div className='w-full h-auto min-h-screen flex  flex-col items-center bg-[#707070]/50 '>
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt=''
                width={10000}
                height={0}
                className='fixed z-[-100] opacity-100'
            />
            <div className='w-full h-[60px] py-10 '></div>
            <div className='w-full full  flex flex-col items-center px-8 space-y-4'>
                <div className='w-full h-full '>
                    <Trailer trailer={trailers} />
                </div>
                <div className='w-full h-auto bg-[#3d3d3d]/30 shadow-md backdrop-blur-2xl shadow-black/25 flex flex-col rounded-[50px] p-10'>
                    <MovieDetails movie={movie} Link={Link} Image={Image} FaPlay={FaPlay}/>
                    <div className='my-10'>
                        <div className='flex overflow-x-scroll gap-3  scroll-pl-2 snap-x cursor-grab'>
                            <Caster movie={movie} Image={Image}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[32px]'></div>
        </div >
    );
}
