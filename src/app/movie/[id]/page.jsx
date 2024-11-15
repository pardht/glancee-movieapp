import MoviebyId from '@/components/MoviebyId';
import Image from 'next/image';
import { Suspense } from 'react'
import Loading from './loading';

export default function MoviePage({ params }) {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <MoviebyId params={params} />
            </Suspense>
        </>
    )
}
