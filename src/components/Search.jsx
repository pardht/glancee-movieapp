'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5'

export default function Search({ Icon }) {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    };
    return (
        <form
            className=''
            onSubmit={handleSubmit}
        >
            <div className='w-full h-[45px] bg-black/20 rounded-full flex items-center pl-5 pr-3 gap-5 text-white shadow-inner shadow-black/20'>
                <div className='h-full flex items-center'>
                    <IoSearchOutline size={25} className="opacity-50" />
                </div>
                <div className='w-full h-full'>
                    <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    type="text" name="" id="" 
                    placeholder='Search movies' 
                    className='w-full h-full bg-transparent outline-none font-extralight placeholder-white/80' />
                </div>
            </div>
        </form>
    )
}
