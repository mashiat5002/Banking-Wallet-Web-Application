import React from 'react'

import Avatar from './avatar/page'
export default function QuickSend() {
  return (
    <div  className='h-full w-11/12 bg-logo-surrounding rounded-2xl'>
        <div className='h-1/3 w-full  flex items-center pl-5 text-custom-white text-xl md:text-custom-size lg:text-xs'>
            <h1>Quick Transactions</h1>
        </div>
        <div className='h-2/3 w-full flex items-center justify-center md:space-x-1 lg:space-x-3 '>
         

         <Avatar/>
         <Avatar/>
         <Avatar/>
         <Avatar/>
         <Avatar/>
      

        </div>
      
    </div>
  )
}
