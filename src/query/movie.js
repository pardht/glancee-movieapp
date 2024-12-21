const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/discover/movie` || genre `fetchTrending` ? `/trending/all/week` : `/discover/movie`
    }?api_key=${API_KEY}&language=en-US&page=1`
  )
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Oops! Something went wrong.');
  }
  const results = data.results;