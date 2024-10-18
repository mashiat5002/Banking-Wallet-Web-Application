import React from 'react'
import Image from 'next/image';
export default function TransactionList() {
  return (
   
       <div className='h-1/5 w-full  flex '>
            <div className='h-full w-1/6  flex items-center justify-center '>
                <div className='w-4/6 aspect-square  flex items-center justify-center'>
                <Image className=""  height={80} width={80}   src='/assets/images/Mastercard.jpg' alt=''/>

                </div>
            </div>
            <div className='h-full w-3/6  text-custom-white text-xs  font-normal   flex items-center justify-center'>
                <div className='h-1/3 w-full  flex items-center pl-3 md:text-custom-size lg:text-xs'>
                    <p >External Payment</p>
                </div>
                <div className='h-1/3 w-full  flex items-center md:text-custom-size lg:text-xs'>
                <h1 className='pl-5'>13/10/2014</h1>

                </div>
               
            </div>
            <div className='h-full w-2/6  flex items-center justify-center text-custom-green-lighter md:text-custom-size lg:text-xs'>
            <h1>+$500</h1>
            </div>

        </div>
   
  )
}
