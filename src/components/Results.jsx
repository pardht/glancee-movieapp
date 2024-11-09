import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='w-full h-auto grid grid-cols-3  md:grid-cols-5 items-center justify-center mt-20 gap-[10px] px-[10px]'>
        {results.map((result) => (
            <div className=' duration-200 '>
                <Card key={result.id} result={result}/>
            </div>
        ))}
    </div>
  )
}
