"use client"

import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import Dialog_form_forgot_pass from '../Dialog_form_forgot_pass/page'

  type propsType ={
    header:string,
    action: () => void
    description:string
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    emailInput:string
    
  }

  type props ={
    status:propsType
  }


const Dialog_UI_login:React.FC<props>=({status})=> {
 const [loading,setloading]=useState(false)
 useEffect(()=>{

   if(status.description=="Email or Password did not match!!"){
     setloading(true)
   }
 },[status.description])

  return (
   <div >
    <AlertDialog open={true}  >
    <AlertDialogTrigger asChild>
    
    </AlertDialogTrigger>
    <AlertDialogContent className='w-80 bg-custom-green text-white'>
      <AlertDialogHeader>
        <AlertDialogTitle>{status.header}</AlertDialogTitle>
        <AlertDialogDescription>
          {status.description} 
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
      {loading?<Dialog_form_forgot_pass emailInput={status.emailInput}/>:null}      
          <AlertDialogAction disabled={status.description=="Processing Request..."}  onClick={() => {status.setLoading(false),setloading(false)}}>Close</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  </div>
  )
}
export default Dialog_UI_login;