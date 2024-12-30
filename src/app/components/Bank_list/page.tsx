"use client"
import { call_api_Connected_banks } from '@/app/(utils)/(call_api_function_connected_banks)/route';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default  function Bank_List() {
    
   
    const [banks, setBanks]= useState([])
    useEffect(()=>{
        const callback= async()=>{
 
            const data = await call_api_Connected_banks(); 
       
            setBanks(data);
        }
        callback();

    },[])
  return (
    <div className='h-fit w-full max-h-52 cursor-all-scroll overflow-auto scrollbar-hide rounded-2xl ring-1 ring-slate-400 '>
    <div className='h-full w-full   flex items-center justify-center  '>
        <div className='h-full w-11/12 justify-between  '>
              {banks.map((x:any, index:Number)=>
                  <div  className='h-10 w-full ring-1 ring-slate-400 flex ' >
                      <div className='h-full w-10/12 flex items-center ml-5'>
                          <Link href={{pathname:"/homepage/payment&transfer_gateway", query:{"bank_id":`${index}`}}}><h1 className='cursor-pointer text-xs'>{`${x.name.toUpperCase()}`}</h1></Link>
                      </div>
              </div>
              )}
        

        </div>


    </div>

</div>
  )
}
