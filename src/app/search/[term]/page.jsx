import Results from '@/components/Results';

export default async function SearchPage({ params }) {
    const searchTerm = params.term;
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
    );
    const data = await res.json();
    const results = data.results;
    return (
        <div className='w-full h-auto flex justify-center bg-blur-room bg-cover bg-no-repeat bg-fixed'>
            <div className='w-full h-auto flex justify-center bg-zinc-600/50 '>
                <div className='w-full px-[32px]'>
                    {results &&
                        results.length === 0 ? (
                        <div className='w-full h-screen p-10  flex justify-center items-center text-white'>
                            Sorry, we couldn’t find any movies related to {searchTerm}.
                        </div>
                        ) : (results && <Results results={results} />)}
                </div>
            </div>
        </div>
    );
}