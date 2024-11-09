import React from 'react'

export default function Results({results}) {
  return (
    <div className='text-white'>
        {results.map((result) => (
            <div key={result.id}>
                <p>{result.original_title}</p>
            </div>
        ))}
    </div>
  )
}
