import React from 'react'

export default function Trailer({trailer}) {
    return (
        <>
            {trailer ? (
                <iframe
                    className='w-full h-[80vh] select-none rounded-[30px] shadow-md shadow-zinc-800'
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}`}
                    title="Movie Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>No trailer available.</p>
            )}
        </>
    )
}
