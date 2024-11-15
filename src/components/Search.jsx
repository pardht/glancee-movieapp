import React from 'react'
import {IoSearchOutline} from 'react-icons/io5'

export default function Search({Icon}) {
    return (
        <div className='w-[500px] h-[45px] bg-black/20 rounded-full flex items-center px-3 gap-2 text-white shadow-inner shadow-black/20'>
            <div className='h-full flex items-center'>
                <Icon size={25}/>
            </div>
            <div className='w-full h-full'>
                <input type="text" name="" id="" placeholder='Search' className='w-full h-full bg-transparent outline-none font-regular placeholder-white/50' />
            </div>
        </div>
    )
}
