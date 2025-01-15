"use client"
import React, { useState } from 'react'

export default function Left_side_external_user() {
    const [total_amount,set_total_amount]= useState(0)
    const handleAmount =(e: React.ChangeEvent<HTMLInputElement>)=>{
        set_total_amount(Number(e.target.value));

}
  return (
    <div className=' h-5/12 w-full '>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Reciepent Name:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold flex-col-reverse text-custom-blue3'>
        <input required name='receipent' className='w-11/12 ml-1 bg-slate-50'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Routing Number:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold '>
        <input required name='routing_id' className='w-11/12 ml-1 bg-slate-50 border-y-2'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Account Number:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold '>
        <input required name='account_id' className='w-11/12 ml-1 bg-slate-50 border-b-2'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Amount:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold'>
        <h1>$ </h1>
        <input  onChange={handleAmount} required name='amount' className='w-11/12 ml-1 bg-slate-50 border-b-2'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center  '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Tax:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold'>
        <h1>${total_amount* 0.03}</h1>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center  '>
        <div className='h-full w-9/12 flex items-center border-t-2 border-t-custom-grey3'>
            <h1 className=''>Amount to pay:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold  border-t-2 border-t-custom-grey3 text-custom-blue4 '>
        <h1 className='text-base md:text-2xl'>${total_amount + (total_amount* 0.03)}</h1>
        </div>
    </div>
    

</div>
  )
}
