import React from 'react'
import Link from 'next/link'
import Dialog_form_login from '../../Dialog_form_login/page'
export default function Nav_buttons() {
  return (
    <div className='h-1/3 md:h-full w-screen md:w-1/3 flex items-center  font-semibold '>
      
      {/* <Link href="/login" className='w-1/2 h-full flex items-center justify-center text-nowrap md:w-1/6 md:ml-16 lg:ml-20 '>
      <button >Sign in</button>
            </Link> */}
            <div className='w-1/2 h-full flex items-center justify-center text-nowrap md:w-1/6 md:ml-16 lg:ml-20 '>

            <Dialog_form_login/>
            </div>

            
            <Link href="/registration" className='w-1/2 text-nowrap  h-fit p-3 md:w-fit md:ml-10 bg-custom-green rounded-xl '>
      <button >Create Free</button>
      </Link>
    </div>
  )
}
