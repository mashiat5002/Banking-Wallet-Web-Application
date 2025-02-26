"use client"
import { FaPiggyBank } from "react-icons/fa6";
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Registration_form from '../Registration Form/page'
type props ={
  setemailInput: React.Dispatch<React.SetStateAction<string>>
  emailInput: string
  title:string
}
const  Dialog_form_registration:React.FC<props>=({emailInput,setemailInput,title})=> {

 
  
  return (
    
    <Dialog >
    <DialogTrigger asChild>
      <div className='w-1/2 text-nowrap  cursor-pointer h-fit px-3 py-3 md:w-fit md:ml-10 bg-custom-green rounded-s md:rounded-s-2xl rounded-2xl'>
            
          <h1 className='text-white text-base font-semibold '>{title}</h1>
      </div>
    </DialogTrigger>
    <DialogContent className=" h-10/12 text-xs md:h-fit w-11/12 md:w-fit flex items-center justify-center bg-[url('/assets/images/landing-bg.jpg')] to-black text-slate-50 font-semibold rounded-2xl
    ">
      <div  className="-z-10 absolute rounded-full bg-gradient-to-tl shadow-slate-950 from-[rgb(16,42,46)] to-black p-5 flex items-center justify-center">
        
        <FaPiggyBank style={{ fontSize: '300px', fill: 'transparent', stroke: 'black', strokeWidth: 6 }} />

      </div>
<Registration_form emailInput={emailInput} setemailInput={setemailInput}/>
      
    </DialogContent>
  </Dialog>
  )
}
export default  Dialog_form_registration