"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoChevronBackCircle } from "react-icons/io5";

export default function Back_btn() {
    const router= useRouter();
  return (
    <div onClick={()=>{router.back()}} className='cursor-pointer ring-1 rounded-full ring-slate-400'>
        <IoChevronBackCircle size={"25px"} fill='black'/>
    </div>
  )
}
