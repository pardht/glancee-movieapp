import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Blank = () => {
    return (
        <div className='col-span-1'>
            <div className='rounded-[30px] duration-200 relative flex'>
                <Image
                    src="/assets/blank.jpg"
                    alt='poster'
                    width={10}
                    height={10}
                    className='w-full h-full rounded-[30px] flex opacity-20 animate-pulse'
                />
                <div className='w-full h-[50%] absolute  p-6 bottom-0 flex  items-end rounded-[30px] bg-gradient-to-t from-black/40 via-black/20  animate-pulse '>
                    <div className='w-full grid grid-cols-3 space-y-3'>
                        <div className=' col-span-3'>
                            <div className='w-full rounded-[20px] bg-black/20 p-3'></div>
                        </div>
                        <div className='col-span-2'>
                            <div className='w-full rounded-[20px] bg-black/20 p-10'></div>
                        </div>
                        <div className='col-span-1 flex items-end justify-end'>
                            <div className='p-4 bg-black/20 rounded-full '>
                                <FaPlay size={15} className='fill-white opacity-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blank