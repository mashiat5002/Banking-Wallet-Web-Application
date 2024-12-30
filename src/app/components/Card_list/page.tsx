"use client"

import { call_api_Connected_cards } from '@/app/(utils)/(call_api_function_stripe_connected_payment_methods)/route';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default  function Card_List() {
     const setSender=(e:React.MouseEvent<HTMLDivElement>)=>{
        console.log(e.currentTarget.getAttribute("data-index"))
     }
    
    const [banks, setBanks]= useState([])
    useEffect(()=>{
        const callback= async()=>{
            const data2 = await call_api_Connected_cards(); 
            setBanks(data2);
        }
        callback();

    },[])
  return (
    <div className='h-fit w-full max-h-52 cursor-all-scroll overflow-auto scrollbar-hide rounded-2xl ring-1 ring-slate-400 '>
    <div className='h-full w-full   flex items-center justify-center  '>
        <div className='h-full w-11/12 justify-between  '>
              {banks.map((x:any, index:number)=>
                  <div   className='h-10 w-full ring-1 ring-slate-400 flex  ' >
                
                      <div onClick={setSender} data-index={index} className='h-full w-10/12 flex items-center ml-5'>
                          <Link href={{pathname:"/homepage/payment&transfer_gateway", query:{"card_index":`${index}`}}} ><h1 className='cursor-pointer text-xs'>{`${x.type.toUpperCase()} (***** ${x.last4})`}</h1></Link>
                      </div>
              </div>
              )}
        

        </div>


    </div>

</div>
  )
}
