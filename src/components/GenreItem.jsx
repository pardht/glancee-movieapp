"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function GenreItem({title, param}) {
    
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <Link href={`/?genre=${param}`}>
        <div className={`hover:text-amber-500 ${genre === param ? 'underline' : ''}`}>
            <p>{title}</p>
        </div>
    </Link>
  )
}
