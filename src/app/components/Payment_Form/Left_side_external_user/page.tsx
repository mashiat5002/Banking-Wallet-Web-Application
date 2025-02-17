"use client"
import React, { useEffect, useState } from 'react'
type propsType={
   
    recipient:string
    from: string
    amount:number
}
const  Left_side_external_user:React.FC<propsType>=({recipient,from,amount})=> {
    const [routing, setrouting]=useState({routingNo:"",AccNo:""})

    useEffect(()=>{
        console.log(from)
        const numbers = from.match(/\d+/g);
        console.log(numbers)

        if (numbers && numbers.length >= 2) {
          
          const result = {
            routingNo: numbers[0], 
            AccNo: numbers[1],    
          };
          setrouting(result)
          console.log(result)
        };
    },[])
    const [total_amount,set_total_amount]= useState(0)
    const handleAmount =(e: React.ChangeEvent<HTMLInputElement>)=>{
        set_total_amount(Number(e.target.value));
      
}
  return (
    <div className=' h-5/12 w-full '>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Recipient Name:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold flex-col-reverse text-custom-blue3'>
        <input defaultValue={recipient} required name='recipient' className='w-11/12 ml-1 bg-slate-50'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Routing Number:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold '>
        <input defaultValue={routing.routingNo} required name='routing_id' className='w-11/12 ml-1 bg-slate-50 border-y-2'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Account Number:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold '>
        <input defaultValue={routing.AccNo} required name='account_id' className='w-11/12 ml-1 bg-slate-50 border-b-2'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Amount:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold'>
        <h1>$ </h1>
        <input defaultValue={amount?.toString()}  onChange={handleAmount} required name='amount' className='w-11/12 ml-1 bg-slate-50 border-b-2'/>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center  '>
        <div className='h-full w-9/12 flex items-center '>
            <h1 className=''>Tax:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold'>
        <h1>${(Number(amount)* 0.00).toFixed(2)}</h1>
        </div>
    </div>
    <div className='h-1/6 w-full text-xs md:text-base text-custom-blue3 flex items-center  '>
        <div className='h-full w-9/12 flex items-center border-t-2 border-t-custom-grey3'>
            <h1 className=''>Amount to pay:</h1>
        </div>
        <div className='h-full w-3/12 flex items-center font-bold  border-t-2 border-t-custom-grey3 text-custom-blue4 '>
        <h1 className='text-base md:text-2xl'>${Number(total_amount) + (Number(total_amount)* 0.00)}</h1>
        </div>
    </div>
    

</div>
  )
}
export default   Left_side_external_user;