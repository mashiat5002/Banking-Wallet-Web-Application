
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
import { MdOutlinePayments } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RiBankFill  } from "react-icons/ri";
import { RiBankCard2Fill   } from "react-icons/ri";
import Confirm_Action from '../Confirm_Action/page';
import Dialog_UI from '../Dialog_UI/page';
import { get_both_savings_sector } from "@/app/(utils)/call_get_savings_sectors/route";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { call_update_saving_bank_balance } from "@/app/(utils)/call_update_saving_bank_balance/route";
import { call_change_savings_sector_name } from "@/app/(utils)/call_change_savings_sector_name/route";
import Dialog_form_banks_list from "../Dialog_form_banks_list/page";
import Dialog_form_card_list from "../Dialog_form_card_list/page";

export default function Dialog_form_payment_options() {
      const [sectors, setSectors] = React.useState({department_1:"",department_2:""});
      const [source, setSource] = React.useState("");
      const [destination, setdestination] = React.useState("");
      const [amount, setAmount] = React.useState("");
      const [selectedMethod, setSelectedMethod] = React.useState("");
      const [loading, setLoading] = React.useState(false);
      const [status, setStatus] = React.useState("Processing...");
      const [isOpen, setisOpen] = React.useState(false);
      
      useEffect(() => {
         const fetchData = async () => {
           const data = await get_both_savings_sector();
       
           setSectors(data);
         };
         fetchData();
       }, []);
       const  handleSubmit= ()=>{
        setLoading(true)
        
        const myfun=async()=>{
            const res= await call_change_savings_sector_name(selectedMethod,destination);
            console.log(res)
            if(res==1){
              
                setStatus("Success")
                const updated_data= await get_both_savings_sector()
                
                setSectors({department_1:updated_data.department_1,department_2:updated_data.department_2})
            }
            else{
                setStatus("failed")
            }

        }
        myfun()
        console.log(destination, selectedMethod)
        
       }
  return (
    
      <Dialog open={isOpen} onOpenChange={()=>{setSelectedMethod(""),setisOpen(!isOpen)}}>
      <DialogTrigger asChild>
        <div className=" font-light pl-1 cursor-pointer text-nowrap flex text-text-sm">
          <MdOutlinePayments size={"20px"}/>
          <h1 className="ml-1">Payment</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
        <Card className="w-[350px]">
          <div className=" w-full  flex items-center justify-center ">
            <RiBankFill    className="h-10 w-10 m-3 text-white " fill="black" size={"100px"}/>
            <RiBankCard2Fill     className="h-10 w-10 m-3 text-white " fill="black" size={"100px"}/>
            
          </div>
          <CardHeader>
            <CardTitle className="text-center">Choose From Payment Methods</CardTitle>
            <CardDescription className="text-center">
              Choose a method through which you want to make the transaction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                
               
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Payment Method</Label>
                  <Select onValueChange={(value) => {
                    if (value === "1") {
                      setSelectedMethod("Bank Transfer");
                    } else if (value === "2") {
                      setSelectedMethod("Card Payment");
                    }
                  }}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>  
                    <SelectContent position="popper" >
                      <SelectItem   value="1">Bank Transfer</SelectItem>
                      <SelectItem  value="2">Card Payment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
               
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button  onClick={()=>setisOpen(false)} variant="outline">Cancel</Button>
            {
            
            selectedMethod==""?<Confirm_Action status={{header: `Incomplete Input `, description:`Select a payment method`, action: () => {}}} /> 
            : (selectedMethod=="Bank Transfer"?<Dialog_form_banks_list  />:<Dialog_form_card_list  />)}
            
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
   
  )
}
