"use client"
import Link from 'next/link'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export default function GenreItem({ title, param }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenreLink title={title} param={param} />
    </Suspense>
  );
}

function GenreLink({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <Link href={`/?genre=${param}`}>
      <div className={`hover:bg-white/10 py-[12px] px-7 flex justify-center rounded-full text-white font-light text-sm ${genre === param ? 'bg-white/10' : ''}`}>
        <p>{title}</p>
      </div>
    </Link>
  );
}
