
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
}
const  Dialog_form_payment_gateway:React.FC<props>=({system_id,system_type})=> {
      const [isOpen, setisOpen] = React.useState(false);
      
      
      
  return (
    
      <Dialog  open={isOpen} onOpenChange={()=>{setisOpen(!isOpen)}}>
      <DialogTrigger asChild>
     
        <Button variant="default">Confirm</Button>
     
      </DialogTrigger>
      <DialogContent className="h-[550px] w-5/6 p-0 overflow-scroll scrollbar-hide md:w-[850px] flex items-center justify-center  bg-transparent text-black rounded-2xl">
          <Payment_Form recipient="" from="" amount={0} system_type={system_type} system_id={system_id}/>
      </DialogContent>
    </Dialog>
   
  )
}
export default Dialog_form_payment_gateway;