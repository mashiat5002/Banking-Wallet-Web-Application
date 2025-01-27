"use client"

import { call_get_bank_balance } from '@/app/(utils)/call_get_bank_balance/route';
import { call_get_card_balance } from '@/app/(utils)/call_get_card_balance/route';
import { call_get_saving_acc_balance } from '@/app/(utils)/call_get_saving_acc_balance/route';
import { format_date } from '@/app/(utils)/format_date_function/route';

import React, { useContext, useEffect, useState } from 'react'

import Loading_shed_cn_card from '../../loading_shedcn_card/page';
import { MdBarChart } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import MyContext from '../../MyContext/route';
import { call_get_last_update_time_bank_balance } from '@/app/(utils)/call_get_last_update_time_bank_balance/route';
import { format_date_now } from '@/app/(utils)/format_date_now/route';
type propsType={
    card_type:string
}
const Bank_banance = ({card_type}:propsType) => {
    const {saving_balance_loading}= useContext(MyContext)

    const [value,setValue]= useState(0)
    const [loading,setloading]= useState(true)
    const [lastUpdate,setlastUpdate]= useState("fetching...")
    const [type,setType]= useState("")
    const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)

    useEffect( ()=>{
        const getdata=async ()=>{
           
           
                setType("Bank Balance")
                const info=( await call_get_bank_balance())
                setValue(info.balance)
                const updateTime= await call_get_last_update_time_bank_balance()
                setlastUpdate(updateTime)
                setloading(false)
            
 
         
           }
           
        
       getdata()

    },[saving_balance_loading,card_bank_reload])
    
  return (
  <div className='h-1/3 w-full md:h-full  md:w-full  pl-3 md:pl-0'>
      <div className='w-11/12 h-5/6 bg-logo-surrounding text-custom-white rounded-2xl '>
        <div className='h-1/3 w-full  flex '>
            <div className='w-2/12 h-full  flex items-center justify-center'>
                <div className='md:w-2/5 w-1/6 aspect-square bg-custom-black  rounded-full text-custom-purple flex items-center justify-center'>
                    <MdBarChart size={"15px"} fill='#8759EC'/>
                </div>

            </div>
            <div className='w-8/12 h-full  flex items-center text-sm font-medium md:text-custom-size lg:text-xs'>
                <h1 className='pl-3'>Bank Balance</h1>
            </div>
            <div className='w-2/12 h-full  flex items-center justify-center'>
                <BsThreeDotsVertical size={"30px"} fill='white'/>
            </div>

        </div>


        {loading?<div className='h-2/3 w-full'><Loading_shed_cn_card/></div>:<div  className='h-2/3 w-full'>

<div className='h-1/2 w-full  flex items-center pl-7'>
    <h1 className='font-extrabold text-2xl md:text-custom-size2 lg:text-2xl'>${value}</h1>

</div>


<div className='h-1/2 w-full  flex'>
    <div className='w-4/6 h-full  flex items-center pl-5'>
    <h1 className='font-medium text-sm text-custom-grey md:text-custom-size lg:text-xs'>Last Updated</h1>
    </div>
    <div className='w-4/6 h-full flex items-center justify-center'>
        <div className='h-2/6 w-4/6 bg-custom-green-light text-custom-green-lighter rounded-xl flex items-center justify-center md:text-custom-size lg:text-xs'>
            <h1>{lastUpdate}</h1>
        </div>
    </div>
    

</div>
</div>}
      
    </div>
    

  </div>
  )
}
export default Bank_banance