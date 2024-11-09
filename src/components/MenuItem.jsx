import Link from 'next/link'
import React from 'react'

export default function MenuItem({ title, address, Icon }) {
    return (
        <Link href={address}>
            <div className='w-[90px] h-[45px] flex items-center justify-center rounded-full duration-200 text-white hover:bg-black/10'>
                <p className='hidden md:block'>{title}</p>
                <Icon className='md:hidden' />
            </div>
        </Link>
    )
}
