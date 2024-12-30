"use client"
import Stripe_Wrapper from '@/app/components/Stripe_wrapper/page'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Stripe_Wrapper_() {
  const router= useRouter()
  return (
    <div onClick={()=>{router.back()}} className='h-screen w-screen flex items-center justify-center backdrop-blur'>
      
      <Stripe_Wrapper/>
    </div>
  )
}
