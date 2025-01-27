"use client"
import { getSelecteBanksInfo } from "@/app/(utils)/(call_api_function_selected_connected_bank)/route";
import { get_both_savings_sector } from "@/app/(utils)/call_get_savings_sectors/route";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type StatusData = {
  status: string;
};

type PropsType = {
  status_data: StatusData;
  setSavingsSector: (value: string) => void
  system_id: string;
  system_type:string
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
};

type props={
  system_id: string;
  system_type:string
}
const ForBank: React.FC<PropsType>=({setLoading,system_id,system_type,status_data,setSavingsSector}) =>{



  const [bank_details, set_bank_details] = useState({
    bankname: "Processing Name...",
    id: "Processing ID...",
    name: "Processing name...",
    type: "Processing Account Type..."
  });

  const [sectors, setSectors] = React.useState({department_1:"",department_2:""});
 


  useEffect(() => {
    const fetchData = async () => {
      const data = await get_both_savings_sector();
  
      setSectors(data);
    };
    fetchData();
  }, []);


  useEffect(() => {
    const callfun = async () => {
      const data = await getSelecteBanksInfo(
        Number(system_id)
      );
      set_bank_details(data);
     
    };
    callfun();
  }, []);





  return (
    <div className="h-full w-9/12 text-custom-blue3">
      <div className="h-2/12 w-full flex flex-col-reverse  ">
        <div className="flex">
          <h1 className="text-xs md:text-xl font-bold text-custom-blue2 text-nowrap">
            Bank Details{" "}
          </h1>
          <h1 className="text-xs md:text-xl font-bold text-gray-500 ml-2">
            {" "}
            (Sender){" "}
          </h1>
        </div>
      </div>
      <div className="h-8/12 w-full ">
        <div className="h-3/12 w-full flex flex-col-reverse">
          <div className="h-1/2 w-full flex items-center border-b-2 border-b-custom-grey3 ">
            <h1 className="text-xs md:text-base text-custom-blue2">
              {bank_details.bankname}
            </h1>
          </div>
          <div className="h-1/2 w-full flex flex-col-reverse">
            <h1 className="text-xs md:text-sm text-gray-500">Bank Name</h1>
          </div>
        </div>
        <div className="h-3/12 w-full flex flex-col-reverse">
          <div className="h-1/2 w-full flex  border-b-2 border-b-custom-grey3  ">
            <div className="h-full w-11/12 flex items-center text-xs  md:text-base">
              {bank_details.id}
            </div>
            <div className="h-full w-1/12 "></div>
          </div>
          <div className="h-1/2 w-full flex flex-col-reverse">
            <h1 className="text-xs md:text-sm text-gray-500">Account ID</h1>
          </div>
        </div>
        <div className="h-3/12 w-full   mt-4 ">
          <div className="h-9/12 w-2/3  text-xs md:text-base">
            <div  className="h-1/6 w-full text-nowrap text-gray-500">Account Holder's Name</div>
            <div className="h-4/6 w-full flex items-center   border-b-2">
              <h1 className="text-sm text-nowrap md:text-base">{bank_details.name}</h1>
            </div>
           
          </div>

          
        
        </div>
        {bank_details.type=="savings"?
          <div className="h-2/12 w-full flex items-center justify-center text-xs md:text-base">
          <Label htmlFor="framework"  className="text-custom-size2 mr-1 md:text-sm ">Savings Type</Label>
                    <select className="text-base font-semibold" onChange={(e:any)=>{setSavingsSector(e.target.value)}}>
                       
                        <option   value="0" >select</option>
                        <option   value="balance_1">{sectors.department_1}</option>
                        <option  value="balance_2">{sectors.department_2}</option>
                    
                    </select>
          </div>:<div></div>
        }
      </div>
      <div className="h-1/12 w-full ">
      <button type="button" onClick={()=>setLoading(true)}  className="h-full w-full rounded-l-full rounded-r-full cursor-pointer bg-custom-blue4 flex items-center justify-center" ><div >
            <h1  className="font-bold text-slate-200" >Confirm</h1>
          </div></button>
      
      </div>
    </div>
  );
}


export default ForBank