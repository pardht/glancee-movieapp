import Link from 'next/link'
import React from 'react'

export default function MenuItem({ title, address, Icon, size }) {
    return (
        <Link href={address}>
            <div className=' duration-200 hover:opacity-80 text-white bg-white/10 rounded-full p-3 flex items-center'>
                <Icon size={size} className='' />
                <p>{title}</p>
            </div>
        </Link>
    )
}
