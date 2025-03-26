import Results from '@/components/Results';
import React from 'react'

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre ;
  const res = await fetch(
    `https://api.themoviedb.org/3${
    genre ==='Popular' ? '/movie/popular' : 
    genre === 'Top-Rated' ? '/movie/top_rated' : 
    genre ==='Trending' ? '/trending/all/week' : 
    genre ==='On-Air' ? '/movie/now_playing' :
    genre ==='Up-Coming' ? '/movie/upcoming' : '/discover/movie'
    }?api_key=${API_KEY}&language=en-US&page=1`
  )
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Oops! Something went wrong.');
  }
  const results = data.results;
  return (
    <div className='w-full h-auto flex justify-center bg-blur-room bg-cover bg-no-repeat bg-fixed'>
      <div className='w-full h-auto flex justify-center bg-zinc-600/50 '>
        <div className='w-full  h-full px-[32px]'>
          <Results results={results} />
        </div>
      </div>
    </div>
  )
}
