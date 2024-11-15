import Results from '@/components/Results';
import React from 'react'

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/discover/movie` || genre `fetchTrending` ? `/trending/all/week` : `/discover/movie`
    }?api_key=${API_KEY}&language=en-US&page=1`
  )
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Oops! Something went wrong.');
  }
  const results = data.results;
  console.log(results);
  return (
    <div className='w-full h-auto flex justify-center bg-[#4a4a4a]'>
      <div className='w-full max-w-[1280px] h-full'>
        <Results results={results}/>
      </div>
    </div>
  )
}
