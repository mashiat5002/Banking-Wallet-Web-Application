import React from 'react'

export default function Nav_buttons() {
  return (
    <div className='h-1/3 md:h-full w-screen md:w-1/3 flex items-center  font-semibold '>
      <button className='w-1/2 text-nowrap md:w-1/6 md:ml-16 lg:ml-20'>Sign in</button>
      <button className='w-1/2 text-nowrap  h-fit p-3 md:w-fit md:ml-10 bg-custom-green rounded-xl '>Create Free</button>
      
    </div>
  )
}
