import React from 'react'

import { FaPiggyBank } from "react-icons/fa6";


export default function NavbarLogo() {
  return (
    <div className=' h-20 md:h-full w-screen md:w-1/12    bg-home-pg-bg flex justify-center items-center'>
       <div className="w-11/12 md:w-2/3 md:pl-2 h-5/6 md:h-2/3 bg-logo-surrounding rounded-3xl flex justify-center items-center text-gray-100">
      <div className=''>
        <FaPiggyBank size={"30px"}/>
      </div>
      <h1 className='font-extrabold pl-1 md:text-xs md:text-custom-size lg:text-xs'>BW</h1>
     
      </div>
      
    </div>
  )
}
