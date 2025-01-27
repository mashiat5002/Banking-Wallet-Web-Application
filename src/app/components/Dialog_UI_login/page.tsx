import React from 'react'
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

  type propsType ={
    header:string,
    action: () => void
    description:string
    
  }

  type props ={
    status:propsType
  }


const Dialog_UI_login:React.FC<props>=({status})=> {
 
  

  return (
    <AlertDialog open={true} >
    <AlertDialogTrigger asChild>
      
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{status.header}</AlertDialogTitle>
        <AlertDialogDescription>
          {status.description} 
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        
        <AlertDialogAction disabled={status.description=="Processing Request..."}  onClick={() => {status.action()}}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}
export default Dialog_UI_login;