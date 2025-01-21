
import React, { useState } from 'react'
import Spline_bg from '../Spline/page'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Shed_cn_table_bank_transactions } from '../Shed_cn_table_bank_transactions/page'

export default function Bank_transaction_list_all() {

  
  
  return (
    <Dialog >
    <DialogTrigger asChild>
      <h1 className='text-white text-sm'>Bank Transactions</h1>
    </DialogTrigger>
    <DialogContent className="md:h-[800px] md:w-[1000px] h-[700px] w-[550px] flex items-center justify-center">
    <div className="h-full w-full flex items-center justify-center bg-black">
          <div className="  h-full w-full overflow-hidden bg-custom-light-green opacity-50 ">
            <Spline_bg />
          </div>
          <div className="h-full w-screen   absolute flex items-center justify-center ">
            <div className="scale-75 md:scale-90  h-full w-2/6 min-w-[550px] text-white font-bold " style={{ textShadow: "2px 2px 4px black" }}>
            
            <Shed_cn_table_bank_transactions/>
    
            </div>
          </div>
        </div>
      
      
    </DialogContent>
  </Dialog>
  )
}
