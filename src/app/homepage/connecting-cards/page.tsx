import Stripe_Wrapper from '@/app/components/Stripe_wrapper/page'
import React from 'react'

export default function page() {
  return (
    <div className='h-screen w-screen flex items-center justify-center '>
      <Stripe_Wrapper/>
    </div>
  )
}
