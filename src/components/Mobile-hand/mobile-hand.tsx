import Image from 'next/image'
import React from 'react'
export default function Mobile_hand() {
  return (
    <div className='h-full w-1/3 lg:flex lg:justify-center items-center   '>
     <Image  height={390} width={390}   src='/assets/images/mbl-hand.jpg' alt=''/>
    </div>
  )
}
