import Image from 'next/image'
import React from 'react'
export default function Mobile_hand() {
  return (
    <div className='overflow-hidden h-full w-1/3 lg:flex  items-center  lg:mr-14 '>
     <Image  height={390} width={390}   src='/assets/images/mbl-hand.jpg' alt=''/>
    </div>
  )
}
