
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
    <DialogContent className=" md:h-[700px] md:w-[1000px] h-[380px] w-[540px] flex items-center justify-center md:bg-black text-slate-50 font-semibold rounded-2xl
    ">
    
    <Registration_form emailInput={emailInput} setemailInput={setemailInput}/>
      
    </DialogContent>
  </Dialog>
  )
}
export default  Dialog_form_registration