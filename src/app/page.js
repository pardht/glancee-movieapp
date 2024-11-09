import Results from '@/components/Results';
import React from 'react'

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  )
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Oops! Something went wrong.');
  }
  const results = data.results;
  console.log(results);
  return (
    <div className='w-full h-[200vh] bg-amber-500 text-lg no-scrollbar'>
      <div className='w-[20px]'>
        <Results results={results}/>
      </div>
    </div>
  )
}
