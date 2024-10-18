import React from 'react'
import Image from 'next/image'
export default function Avatar() {
  return (
    <div className='w-1/6 h-full    text-custom-white '>
    <div className='w-full h-full '>
      <div className='h-2/3 w-full flex items-center justify-center'>
      <Image className=""  height={40} width={40}   src='/assets/images/profileAvatar.png' alt=''/>
      </div>


      <div className='h-1/3 w-full flex items-center justify-center md:text-custom-size lg:text-xs'>
      <h1>Mashiat</h1>
      </div>

    </div>

      
</div>
  )
}



