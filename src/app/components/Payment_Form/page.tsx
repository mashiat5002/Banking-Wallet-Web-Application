"use client"
import React, { useEffect, useState } from 'react'
import { IoDownloadOutline } from "react-icons/io5";
import RightSidePaymentForm from './RightSide/page';
import { getSelecteBanksInfo } from '@/app/(utils)/(call_api_function_selected_connected_bank)/route';
import { useRouter, useSearchParams } from 'next/navigation';
import { call_Sender_bank } from '@/app/(utils)/call_sender_with_bank/route';
import { getSelectedCardInfo } from '@/app/(utils)/(call_api_function_selected_connected_card)/route';
import { call_Sender_card } from '@/app/(utils)/call_sender_with_card/route';
import Selector from './Left_selector/page';
import Internal_External from './Container_internal_external/page';
import { check_funding_source_origin } from '@/app/(utils)/call_check_funding_source_origin/route';
import { Call_remover_funding_src } from '@/app/(utils)/call_remover_funding_source/route';


export default function Payment_Form() {
  const router= useRouter()
    const [status,setStatus]= useState("Confirm")
    const [statusClr,set_statusClr]= useState("#3A58FF")
    const [selected,set_selected]= useState("1")

    const searchParams= useSearchParams();
    

    const handleSubmit= (e:React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        setStatus("Processing...")
        set_statusClr("orange")
        const formdata=  new FormData(e.currentTarget);
        
        const routingId = formdata.get("routing_id") as string;
        const accountId = formdata.get("account_id") as string;
        const recipient = formdata.get("receipent") as string;
        const recipientID = formdata.get("receipent_id") as string;
        const amount = formdata.get("amount") as string;
        
        
        const id= searchParams.get("bank_id")?searchParams.get("bank_id"):searchParams.get("card_index")
        

        const fun2 = async()=>{
        const sender= await getSelectedCardInfo(Number(id));
        let summary_response;
        
        // await  Call_remover_funding_src("")

        selected=="2"?summary_response= await check_funding_source_origin(routingId,accountId,recipient,amount,sender):
        summary_response=await call_Sender_card(amount,sender,recipientID,selected)
        console.log(summary_response)
        if(summary_response=="succeeded" || summary_response=="201"){
          setStatus("Success")
          set_statusClr("green")
          setTimeout(() => {
              setStatus("Send Again")
          set_statusClr("#3A58FF")
          }, 3000);

        }
        else {
          setStatus("Failed")
          
          if(summary_response=="DuplicateResource"){
            setStatus("Invelid Recipient Type")

          }
          else if( summary_response== "Routing number must be exactly 9 characters.")
            setStatus("Invalid Routing Number")

            set_statusClr("red")
            setTimeout(() => {
                setStatus("Try Again")
            set_statusClr("#3A58FF")
            }, 3000);
        }
            
        
    }
    
        const fun=async()=>{
           const sender = await getSelecteBanksInfo(Number(id));
           
           const response= await call_Sender_bank(amount,sender.id,formdata.get("receipent_id") as string,"bank")
           if(response.status=="201"){
            setStatus("Success")
            set_statusClr("green")
            setTimeout(() => {
                setStatus("Send Again")
            set_statusClr("#3A58FF")
            }, 3000);
           }
           else{
            setStatus("Failed")
            set_statusClr("red")
            setTimeout(() => {
                setStatus("Try Again")
            set_statusClr("#3A58FF")
            }, 3000);
           }
        }
        searchParams.get("bank_id")?fun():fun2()
          
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <div onClick={()=>{router.back()}}  className="h-screen w-screen backdrop-blur-sm flex items-center justify-center">
        <div onClick={(e)=>{e.stopPropagation()}} className="h-4/6 w-11/12 md:w-5/6 lg:w-3/6 flex  lg:min-w-625">


          {/* left */}
          <div className="h-full w-7/12    bg-slate-50  flex items-center justify-center ">
            <div className="h-full w-4/6  ">
              <div className="h-4/12 w-full ">
                <div className="h-4/6  ">
                  <div className="h-full w-full flex flex-col-reverse ">

                    <Selector onSelectionChange ={set_selected}/>

                    <h1 className="text-2xl md:text-2xl font-bold  text-custom-blue2">
                      Transfer
                    </h1>
                  </div>
                </div>
                <div className="h-2/6 text-blue-700 flex items-center text-xs  md:text-sm">
                  <h1 className="cursor-pointer">
                    December invoice financial Service(PDF)
                  </h1>
                  <IoDownloadOutline className="cursor-pointer ml-1" />
                </div>
              </div>

              <Internal_External selected={selected}/>

              <div className=" mt-5 w-full flex items-center ">
                <input type="radio"></input>
                <h1 className="ml-3 text-xs md:text-sm  text-custom-blue3 font-semibold">
                  Remember the bank card
                </h1>
              </div>
            </div>
          </div>


          {/* right */}
          <div className="h-full w-5/12 bg-custom-grey2 flex items-center justify-center">
            <RightSidePaymentForm
              status_data={{ status: status, stts_color: statusClr }}
            />
          </div>

        </div>
      </div>
    </form>
  );
}
