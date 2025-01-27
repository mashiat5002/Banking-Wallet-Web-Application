
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Confirm_Action from '../Confirm_Action/page';
import Dialog_UI from '../Dialog_UI/page';
import { get_both_savings_sector } from "@/app/(utils)/call_get_savings_sectors/route";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { call_change_savings_sector_name } from "@/app/(utils)/call_change_savings_sector_name/route";
type props={
  reload:boolean,
  reloading: React.Dispatch<React.SetStateAction<boolean>>
}
const Dialog_form_sectors_change:React.FC<props>=({reloading, reload})=> {
      const [sectors, setSectors] = React.useState({department_1:"",department_2:""});
      const [source, setSource] = React.useState("");
      const [destination, setdestination] = React.useState("");
      const [amount, setAmount] = React.useState("");
      const [savingsSector, setSavingsSector] = React.useState("");
      const [loading, setLoading] = React.useState(false);
      const [status, setStatus] = React.useState("Processing...");
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
            const res= await call_change_savings_sector_name(savingsSector,destination);
            console.log(res)
            if(res==1){
              
                setStatus("Success")
                const updated_data= await get_both_savings_sector()
                
                setSectors({department_1:updated_data.department_1,department_2:updated_data.department_2})
                reloading(!reload)
              }
            else{
                setStatus("failed")
            }

        }
        myfun()
        console.log(destination, savingsSector)
        
       }
  return (
    
      <Dialog>
      <DialogTrigger asChild>
        <p className="text-custom-size2 font-light pl-1 cursor-pointer text-nowrap">
          <MdDriveFileRenameOutline size={"20px"}/>
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
        <Card className="w-[350px]">
          <div className=" w-full  flex items-center justify-center ">
            <MdDriveFileRenameOutline  className="h-10 w-10 m-3 text-white " fill="black" size={"100px"}/>
            
          </div>
          <CardHeader>
            <CardTitle className="text-center">Change Savings Sectors Name</CardTitle>
            <CardDescription className="text-center">
              To view progress choose a new name for your savings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Change Name</Label>
                  <Input  onChange={(e:any)=>{setdestination(e.currentTarget.value)}} id="name" placeholder="Type a new name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Savings Type</Label>
                  <Select onValueChange={(value) => {
                    if (value === "1") {
                      setSavingsSector("department_1");
                    } else if (value === "2") {
                      setSavingsSector("department_2");
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
               
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            {
            
            savingsSector==""?<Confirm_Action status={{header: `Incomplete Input `, description:`Select Destination Savings Sector`, action: () => {}}} /> 
            : <Confirm_Action status={{header: `Confirm to Update`, description:`Changing "${savingsSector=="department_1"?sectors.department_1:sectors.department_2}"  to "${destination}"`, action: ()=>{return handleSubmit()}}} />}
            
            {loading==true? <Dialog_UI status={{header:"Processing Status",description:`${status}`,action:()=>{setLoading(false)}}} /> : null}
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
   
  )
}
export default Dialog_form_sectors_change