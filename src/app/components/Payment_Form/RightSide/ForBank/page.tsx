import { getSelecteBanksInfo } from "@/app/(utils)/(call_api_function_selected_connected_bank)/route";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
type StatusData = {
  status: string;
  stts_color: string;
};

type PropsType = {
  status_data: StatusData;
};
const ForBank: React.FC<PropsType>=({status_data}) =>{
  const searchParams = useSearchParams();


  const [bank_details, set_bank_details] = useState({
    bankname: "Processing Name...",
    id: "Processing ID...",
    name: "Processing name...",
  });





  useEffect(() => {
    const callfun = async () => {
      const data = await getSelecteBanksInfo(
        Number(searchParams.get("bank_id"))
      );
      set_bank_details(data);
      console.log(data);
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
      <div className="h-9/12 w-full ">
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
        <div className="h-3/12 w-full flex  mt-4 ">
          <div className="h-9/12 w-2/3  text-xs md:text-base">
            <div className="h-1/5 w-full text-nowrap text-gray-500">Account Holder's Name</div>
            <div className="h-4/5 w-full flex items-center   border-b-2">
              <h1 className="text-sm text-nowrap md:text-base">{bank_details.name}</h1>
            </div>
          </div>
        
        </div>
        <div className="h-2/12 w-full flex items-center justify-center text-xs md:text-base">
        <button type="submit" className="h-10/12 w-full rounded-l-full rounded-r-full cursor-pointer bg-custom-blue4 flex items-center justify-center" style={{backgroundColor:status_data.stts_color}}><div >
            <h1  className="font-bold text-slate-200" >{status_data.status}</h1>
          </div></button>
        </div>
      </div>
    </div>
  );
}
export default ForBank