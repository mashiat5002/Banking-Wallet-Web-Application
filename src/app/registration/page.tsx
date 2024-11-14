// import Login from '@/app/components/Login Form/page'
import Registration_form from '@/app/components/Registration Form/page'
import React from 'react'

export default function page() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[url('/assets/images/landing-bg.jpg')] ">
      <Registration_form/>
    </div>
  )
}
