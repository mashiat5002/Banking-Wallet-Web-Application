"use client"

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Login from '@/app/components/Login Form/page'
export default function Dialog_form_login() {

  
  
  return (
    <Dialog >
    <DialogTrigger asChild>
      <h1 className='text-white text-sm cursor-pointer'>Login</h1>
    </DialogTrigger>
    <DialogContent className="p-0 h-fit w-fit flex items-center justify-center bg-transparent border-transparent text-slate-50 font-semibold">
    
    <Login/>
      
    </DialogContent>
  </Dialog>
  )
}
