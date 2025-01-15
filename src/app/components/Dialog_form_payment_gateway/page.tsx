
"use client"
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RiBankFill  } from "react-icons/ri";
import Confirm_Action from '../Confirm_Action/page';
import Dialog_form_payment_options from "../Dialog_form_payment_options/page";
import { call_api_Connected_banks } from "@/app/(utils)/(call_api_function_connected_banks)/route";
import Payment_Form from "../Payment_Form/page";
type props={
  system_id: string;
  system_type:string
}
const  Dialog_form_payment_gateway:React.FC<props>=({system_id,system_type})=> {
      const [selectedMethod, setSelectedMethod] = React.useState("");
      const [bankList, setbankList] = React.useState([]);
      const [isOpen, setisOpen] = React.useState(false);
      
      useEffect(() => {
         const fetchData = async () => {
           const data = await call_api_Connected_banks();
           setbankList(data);
         };
         fetchData();
       }, []);
       const  handleSubmit= ()=>{
        
        const myfun=async()=>{
       

        }
        myfun()
      
        
       }
  return (
    
      <Dialog  open={isOpen} onOpenChange={()=>{setSelectedMethod(""),setisOpen(!isOpen)}}>
      <DialogTrigger asChild>
     
        <Button variant="default">Confirm</Button>
     
      </DialogTrigger>
      <DialogContent className="md:h-[700px] md:w-[1000px] h-[500px] w-[550px] flex items-center justify-center">
          <Payment_Form system_type={system_type} system_id={system_id}/>
      </DialogContent>
    </Dialog>
   
  )
}
export default Dialog_form_payment_gateway;