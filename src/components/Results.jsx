import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='w-full h-auto grid grid-cols-3  md:grid-cols-5 items-center justify-center mt-20 gap-6'>
        {results.map((result,key) => (
            <div className='' key={key}>
                <Card key={key} result={result}/>
            </div>
        ))}
    </div>
  )
}
