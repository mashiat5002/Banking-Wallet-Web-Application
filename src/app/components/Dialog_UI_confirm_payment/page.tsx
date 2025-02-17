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
import Dialog_UI from '../Dialog_UI/page'

  type propsType ={
    header:string,
    action: () => void
    description:string
    loading:boolean
    setLoading:React.Dispatch<React.SetStateAction<boolean>>
    stat:string
    
  }

  type props ={
    status:propsType
  }


const Dialog_UI_confirm_payment:React.FC<props>=({status})=> {
 
  const [loading,set_loading]=useState(false)

  return (
    <AlertDialog open={status?.loading} >
    <AlertDialogTrigger asChild>
      
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{status?.header}</AlertDialogTitle>
        <AlertDialogDescription>
          {status?.description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Button onClick={()=>{status?.setLoading(!status?.loading)}}>Close</Button>
        <AlertDialogAction  onClick={() => {status?.action(),set_loading(!loading)}}>Confirm</AlertDialogAction>
        {loading? <Dialog_UI status={{header:"Processing Status",description:`${status?.stat}`,action:()=>{set_loading(!loading) }}} /> : null}
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}
export default Dialog_UI_confirm_payment;