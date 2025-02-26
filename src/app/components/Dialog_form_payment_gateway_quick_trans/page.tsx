
"use client"
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";


import { Button } from "@/components/ui/button";
import { call_api_Connected_banks } from "@/app/(utils)/(call_api_function_connected_banks)/route";
import Payment_Form from "../Payment_Form/page";
type props={
  system_id: string;
  system_type:string
  isOpen:boolean
  setIsopen:React.Dispatch<React.SetStateAction<boolean>>
  recipient:string
  from: string
  amount:number

}
const  Dialog_form_payment_gateway_quick_trans:React.FC<props>=({recipient,from,amount,setIsopen,isOpen,system_id,system_type})=> {
      const [selectedMethod, setSelectedMethod] = React.useState("");
      const [bankList, setbankList] = React.useState([]);
      
      
      useEffect(() => {
         const fetchData = async () => {
           const data = await call_api_Connected_banks();
           setbankList(data);
         };
         fetchData();
       }, []);
       
  return (
    
      <Dialog  open={isOpen} onOpenChange={()=>{setIsopen(!isOpen)}} >
      <DialogTrigger asChild>
     
     
      </DialogTrigger>
      <DialogContent className=" h-[550px] w-5/6 overflow-scroll scrollbar-hide md:w-[850px] rounded-2xl flex items-center justify-center  text-black ">
          <Payment_Form recipient={recipient} from={from} amount={amount}  system_type={system_type} system_id={system_id}/>
      </DialogContent>
    </Dialog>
   
  )
}
export default Dialog_form_payment_gateway_quick_trans;