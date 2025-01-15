
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
import { RiBankCard2Fill   } from "react-icons/ri";
import Confirm_Action from '../Confirm_Action/page';
import Dialog_form_payment_options from "../Dialog_form_payment_options/page";
import { call_api_Connected_cards } from "@/app/(utils)/(call_api_function_stripe_connected_payment_methods)/route";
import Dialog_form_payment_gateway from "../Dialog_form_payment_gateway/page";

export default function Dialog_form_card_list() {
      const [selectedMethod, setSelectedMethod] = React.useState("");
      const [cardList, setcardList] = React.useState([]);
      const [isOpen, setisOpen] = React.useState(false);
      
      useEffect(() => {
         const fetchData = async () => {
           const data = await call_api_Connected_cards();
           setcardList(data);
         };
         fetchData();
       }, []);
       const  handleSubmit= ()=>{
        
        const myfun=async()=>{
       

        }
        myfun()
      
        
       }
  return (
    
      <Dialog open={isOpen} onOpenChange={()=>{setSelectedMethod(""),setisOpen(!isOpen)}} >
      <DialogTrigger asChild>
     
        <Button onClick={()=>setisOpen(true)} variant="default">Confirm</Button>
     
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
        <Card className="w-[350px]">
          <div className=" w-full  flex items-center justify-center ">
            <RiBankCard2Fill    className="h-10 w-10 m-3 text-white " fill="black" size={"100px"}/>
            
          </div>
          <CardHeader>
            <CardTitle className="text-center">Choose Card for transaction</CardTitle>
            <CardDescription className="text-center">
              Choose from provided cards that you already connected to Banking Wallet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                
               
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Connected Cards</Label>
                  <Select onValueChange={(value) => {
                   
                      setSelectedMethod(value);
                    
                  }}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>  
                    <SelectContent position="popper" >
                     
                      {cardList.map((x:any,index)=><SelectItem   value={`${index}`}>{`${x.type} (${x.last4})`}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
               
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={()=>setisOpen(false)} variant="outline">Cancel</Button>
            {
            
            selectedMethod==""?<Confirm_Action status={{header: `Incomplete Input `, description:`Select a transaction source`, action: () => {}}} /> 
            : <Dialog_form_payment_gateway system_type={"card"} system_id={selectedMethod}/>}
            
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
   
  )
}
