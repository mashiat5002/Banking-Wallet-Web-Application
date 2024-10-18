import React from 'react'
import { FaPiggyBank } from "react-icons/fa6";
export default function Navlogo() {
  return (
    <div className='h-1/3 md:h-full w-screen md:w-1/3 flex justify-center items-center'>
      <div className='rounded-full h-12 aspect-square flex items-center justify-center bg-custom-green'>
      <FaPiggyBank style={{fontSize:'30px', fill:'white'}}/>

      </div>
      <h1 className=' ml-1 md:ml-4 md:text-2xl lg:text-3xl'>Banking Wallet</h1>
    </div>
  )
}
