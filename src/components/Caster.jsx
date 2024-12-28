import React from 'react'

export default function Caster({ movie, Image }) {
    return (
        <>
            {movie.credits.cast.map((actor) => (
                <div key={actor.id} className=' flex-none snap-start'>
                    <div className='relative '>
                        <div className='w-full h-full rounded-[20px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end absolute text-white p-3'>
                            <p className='text-sm'>{actor.name}</p>
                            <p className='text-xs font-light opacity-50'>{actor.character}</p>
                        </div>
                        {actor.profile_path ? (
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                alt={actor.name}
                                width={150}
                                height={0}
                                className='rounded-[20px]'
                            />
                        ) : (
                            <div className="w-[150px] h-[225px] bg-gray-800/30 rounded-[20px] flex flex-col justify-center items-center pt-8 space-y-2 " >
                                <div className='p-10 rounded-full bg-gray-400/30 animate-pulse'></div>
                                <div className='w-full h-full p-10  rounded-t-[80px] rounded-b-[20px] bg-gray-400/30 animate-pulse'></div>
                            </div> // Placeholder for missing images
                        )}

                    </div>
                </div>
            ))}
        </>
    )
}
