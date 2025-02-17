"use client"

import React, { useContext, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import SplineComponent from '../Spline/page'
import call_bank_transfers_proper_all from '@/app/(utils)/bank_transfers_proper_all/route'
import Shed_cn_table_bank_transactions from '../Shed_cn_table_bank_transactions/page'
import MyContext from '../MyContext/route'
export type Payment = {
  sender: string
  amount: number
  status: string
  receiver: string
  source_fid: string
  dest_fid: string
  time: string
  pid: string
  
  
}
export default function Bank_transaction_list_all() {
    const [data, setInfo] = React.useState<Payment[]>([]); // Correct type initialization
      const [loading,setLoading]=React.useState(true)
      const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)

  React.useEffect(()=>{
    const callFun=async()=>{
      const data= await call_bank_transfers_proper_all()
      setLoading(false)
      const transformedData = data.sender.map((_, index) => ({
        sender: data.sender[index],
        receiver: data.receiver[index],
        source_fid: data.source_fid[index],
        dest_fid: data.dest_fid[index],
        status: data.status[index],
        amount: data.amounts[index],
        time: data.time[index],
        pid: data.pid[index],
      }));
      setInfo(transformedData)
    }
    callFun()
  },[card_bank_reload])
  
  
  return (
    <Dialog >
    <DialogTrigger asChild>
      <h1 className='text-white text-sm'>Bank Transactions</h1>
    </DialogTrigger>
    <DialogContent className="md:h-[800px] md:w-[1000px] h-[700px] w-[550px] flex items-center justify-center">
    <div className="h-full w-full flex items-center justify-center bg-black">
          <div className="  h-full w-full overflow-hidden bg-custom-light-green opacity-50 ">
            <SplineComponent />
          </div>
          <div className="h-full w-screen   absolute flex items-center justify-center ">
            <div className="scale-75 md:scale-90  h-full w-2/6 min-w-[550px] text-white font-bold " style={{ textShadow: "2px 2px 4px black" }}>
            
            <Shed_cn_table_bank_transactions loading={loading} data={data}/>
    
            </div>
          </div>
        </div>
      
      
    </DialogContent>
  </Dialog>
  )
}
