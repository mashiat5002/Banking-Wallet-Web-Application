
import React, { useContext, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import SplineComponent from '../Spline/page'
import { call_card_transfer_all } from '@/app/(utils)/call_card_transfer_all/route'
import { format_date } from '@/app/(utils)/format_date_function/route'
import Shed_cn_table_card_transactions from '../Shed_cn_table_card_transactions/page'
import { toLocalDate } from '@/app/(utils)/toLocalDate/route'
import MyContext from '../MyContext/route'
export type Payment = {
 
  amount: number
  status: string
  receiver: string
  time: string
  pid: string
  
  
}
export default function Card_transaction_list_all() {

   const [data, setInfo] = React.useState<Payment[]>([]); // Correct type initialization
   const [loading,setLoading]=React.useState(true)
   const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)

    
    React.useEffect(()=>{
      const callFun=async()=>{
        const data= await call_card_transfer_all()
        console.log(data)
        setLoading(false)
        
        const transformedData = data.map((x:any, index) => ({
          receiver: x.description,
          status: x.status,
          amount: ((x.amount)/100),
          time: toLocalDate(x.created).replace(",",""),
          pid: x.payment_method,
        }));
        setInfo(transformedData)
      }
      callFun()
    },[card_bank_reload])
  
  return (
    <Dialog >
    <DialogTrigger asChild>
      <h1 className='text-white text-sm'>Card Transactions</h1>
    </DialogTrigger>
    <DialogContent className="md:h-[800px] md:w-[1000px] h-[700px] w-[550px] flex items-center justify-center">
    <div className="h-full w-full flex items-center justify-center bg-black">
          <div className="  h-full w-full overflow-hidden bg-custom-light-green opacity-50 ">
            <SplineComponent />
          </div>
          <div className="h-full w-screen   absolute flex items-center justify-center ">
            <div className="scale-75 md:scale-90  h-full w-2/6 min-w-[550px] text-white font-bold " style={{ textShadow: "2px 2px 4px black" }}>
            
            <Shed_cn_table_card_transactions loading={loading} data={data}/>
    
            </div>
          </div>
        </div>
      
      
    </DialogContent>
  </Dialog>
  )
}
