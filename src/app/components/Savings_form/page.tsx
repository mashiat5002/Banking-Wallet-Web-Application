"use client"
import React, { useContext, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { GiPayMoney } from "react-icons/gi";
import { get_both_savings_sector } from "@/app/(utils)/call_get_savings_sectors/route";
import { call_Sender_bank } from "@/app/(utils)/call_sender_with_bank/route";
import { call_update_saving_bank_balance } from "@/app/(utils)/call_update_saving_bank_balance/route";
import Confirm_Action from "../Confirm_Action/page";
import Dialog_UI from "../Dialog_UI/page";
import { call_check_bank_acc_type } from "@/app/(utils)/call_check_bank_acc_type/route";
import { call_find_customer_id_with_funding_src_id } from "@/app/(utils)/call_find_customer_id_with_funding_src_id/route";
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";
import { call_check_if_own_savings_acc } from "@/app/(utils)/call_check_if_own_savings_acc/route";
import MyContext from "../MyContext/route";
import { call_update_savings_time } from "@/app/(utils)/call_update_savings_time/route";





export default function Savings_form() {
  const [sectors, setSectors] = React.useState({department_1:"",department_2:""});
  const [source, setSource] = React.useState("");
  const [destination, setdestination] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [savingsSector, setSavingsSector] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [status, setStatus] = React.useState("Processing...");

  const {saving_balance_loading,setsaving_balance_loading}= useContext(MyContext)



  const handleSubmit =  async () => {
    setStatus("Processing...");
    setLoading(true);
    const isSavingsSource= await call_check_bank_acc_type(source);
    const isSavingsDestination= await call_check_bank_acc_type(destination);
    const cid= await call_find_customer_id_with_funding_src_id(source);
    const origin= await call_check_if_own_savings_acc(cid);
      if(origin==false){
        setStatus("Cannot Perform Transaction from Accounts except Own Savings Account");
        return;
      }
    if(isSavingsSource.bank_type=="savings"){
      setStatus("Cannot Perform Transaction from Savings Account");
      return;

    }
    else if(isSavingsDestination.bank_type!="savings"){
      setStatus("Cannot Perform Transaction to Accounts except Savings Account");
      return;

    }


    else if(isSavingsDestination.bank_type=="savings"){
      const cid= await call_find_customer_id_with_funding_src_id(destination);
      const origin= await call_check_if_own_savings_acc(cid);
      if(origin==false){
        setStatus("Cannot Perform Transaction to Accounts except Own Savings Account");
        return;
      }
      
    }

    const res= await call_Sender_bank(amount,source,destination,"bank");


    if(res.status==201){
      setStatus("Successful");
      await call_update_savings_time()
      console.log(await call_update_saving_bank_balance(savingsSector,amount,"add"));
      setsaving_balance_loading(!saving_balance_loading)
     
    }
    else{
      setStatus("Failed");
      
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await get_both_savings_sector();
  
      setSectors(data);
    };
    fetchData();
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={()=>{setIsOpen(!isOpen), setSource(""),setdestination(""),setSavingsSector("")}}>
      <DialogTrigger asChild>
        <p className=" font-light pl-1 cursor-pointer text-nowrap">
          Add Savings
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
        <Card className="w-[350px]">
          <div className=" w-full  flex items-center justify-center ">
            <GiPayMoney  className="h-10 w-10 m-3 text-white " fill="black" size={"100px"}/>
            
          </div>
          <CardHeader>
            <CardTitle className="text-center">Add to savings</CardTitle>
            <CardDescription className="text-center">
              Switch money to your savings account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Source Funding Source</Label>
                  <Input required onChange={(e:any)=>{setSource(e.currentTarget.value)}} id="name" placeholder="Funding Source ID" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Destination Funding Source</Label>
                  <Input required  onChange={(e:any)=>{setdestination(e.currentTarget.value)}} id="name" placeholder="Savings Account ID" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Savings Type</Label>
                  <Select onValueChange={(value) => {
                    if (value === "1") {
                      setSavingsSector("balance_1");
                    } else if (value === "2") {
                      setSavingsSector("balance_2");
                    }
                  }}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>  
                    <SelectContent position="popper" >
                      <SelectItem   value="1">{sectors.department_1}</SelectItem>
                      <SelectItem  value="2">{sectors.department_2}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Amount</Label>
                  <Input required onChange={(e:any)=>{setAmount(e.currentTarget.value)}} id="name" placeholder="Amount" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={()=>setIsOpen(!isOpen)} variant="outline">Cancel</Button>
           
            {
            
            (savingsSector=="" || source=="" || destination=="" || amount=="")?<Confirm_Action status={{header: `Incomplete Input `, description:`Ensure All Fields Are Filled`, action: () => {}}} /> 
            : <Confirm_Action status={{header: `Confirm Transfer `, description:`Sending to: ${savingsSector=="balance_1"?sectors.department_1:sectors.department_2} Amount: ${amount} from: ${source} to: ${destination}`, action: ()=>{return handleSubmit()}}} />}
            
            {loading==true? <Dialog_UI status={{header:"Processing Status",description:`${status}`,action:()=>{setLoading(false)}}} /> : null}
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
