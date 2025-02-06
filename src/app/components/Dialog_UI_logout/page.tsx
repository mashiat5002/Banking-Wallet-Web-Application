"use client"

import React, { useState } from 'react'
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
import Avatar, { genConfig } from 'react-nice-avatar'
import { call_logout_eliminate_session } from '@/app/(utils)/call_logout_eliminate_session/route'

import { useRouter } from 'next/navigation';

type propsType ={
    header:string,
    action: () => void
    description:string
    loading:boolean
    setLoading:React.Dispatch<React.SetStateAction<boolean>>
    name_:string
 
    
  }

  type props ={
    status:propsType
  }


const Dialog_UI_logout:React.FC<props>=({status})=> {
  const router = useRouter();

 
  const logout=()=>{
    call_logout_eliminate_session();
    router.push('/')
  }
  return (
    <AlertDialog open={status.loading} >
    <AlertDialogTrigger asChild>
      
    </AlertDialogTrigger>
    <AlertDialogContent className='bg-custom-grey-white text-white'>
      <AlertDialogHeader>
        <AlertDialogTitle>{status.header}</AlertDialogTitle>
        <AlertDialogDescription>
          {/* {status.description} */}
          <div className='h-40 w-full '>
            <div className='h-4/6 w-full flex items-center  justify-center text-center'>
             <Avatar   className=" h-5/6 aspect-square "     {...genConfig(status.name_)} />
            
            </div>
         
            <h1 className='text-center  font-semibold mt-0 text-white'>{status.name_}</h1>
         

          </div>

        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Button className='bg-black ' onClick={()=>{status.setLoading(!status.loading)}}>Close</Button>
        <Button className='bg-slate-500 hover:bg-white hover:text-black' onClick={()=>{logout()}}>Logout</Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}
export default Dialog_UI_logout;