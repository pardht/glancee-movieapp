import Blank from '@/components/Blank'
import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='w-full h-auto flex justify-center bg-blur-room bg-cover bg-no-repeat bg-fixed'>
      <div className='w-full h-auto flex flex-col justify-center bg-zinc-600/50 '>
        <div className='flex px-[32px] gap-6'>
          {/* <div className='w-auto max-w-[300px] h-auto mt-20 flex flex-col gap-6 '>
                    <div className='w-[300px] h-[500px] rounded-[30px] p-2 bg-black/20'></div>
                    <div className='w-[300px] h-[500px] rounded-[30px] p-2 bg-black/20'></div>
                </div> */}
          <div className='w-full h-auto grid grid-cols-3  md:grid-cols-4 justify-center mt-20 gap-6 '>
            <div className='h-[500px] col-span-4 p-2 bg-black/20 rounded-[30px]'></div>
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
            <Blank />
          </div>
        </div>
      </div>
    </div>
  )
}