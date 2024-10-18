import React from 'react'

import { IoMdSearch } from "react-icons/io";
export default function NavSearchBar() {
  return (
    <div className='h-20 md:h-full   w-screen md:w-2/12  bg-home-pg-bg p-1 flex justify-center items-center '>
        <div className="w-11/12 h-2/3 bg-logo-surrounding rounded-3xl  text-gray-100 flex items-center justify-center">
        <IoMdSearch size={"20px"}/><input className='h-5/6 w-5/6 bg-transparent pl-3  focus:outline-none' placeholder=' Search here ...' />
       
        </div>
      
    </div>
  )
}
