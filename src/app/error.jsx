"use client"
import React, { useEffect, useState } from 'react'

export default function error({error, reset}) {
    useEffect(() => {
        console.log(error);
    },[error]);
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-full h-full flex justify-center items-center'>
            <p>Oops! Something went wrong.</p>
            <button onClick={()=> reset()} className='p-4 hover:bg-amber-500'>Try again</button>
        </div>
    </div>
  )
}
