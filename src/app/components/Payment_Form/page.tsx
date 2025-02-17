"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { IoDownloadOutline } from "react-icons/io5";
import RightSidePaymentForm from './RightSide/page';
import { getSelecteBanksInfo } from '@/app/(utils)/(call_api_function_selected_connected_bank)/route';
import { call_Sender_bank } from '@/app/(utils)/call_sender_with_bank/route';
import { getSelectedCardInfo } from '@/app/(utils)/(call_api_function_selected_connected_card)/route';
import { call_Sender_card } from '@/app/(utils)/call_sender_with_card/route';
import Selector from './Left_selector/page';
import Internal_External from './Container_internal_external/page';
import { check_funding_source_origin } from '@/app/(utils)/call_check_funding_source_origin/route';
import { call_get_saving_acc_balance } from '@/app/(utils)/call_get_saving_acc_balance/route';
import { call_update_saving_bank_balance } from '@/app/(utils)/call_update_saving_bank_balance/route';
import { call_update_savings_time } from '@/app/(utils)/call_update_savings_time/route';
import { call_check_bank_acc_type } from '@/app/(utils)/call_check_bank_acc_type/route';
import MyContext from '../MyContext/route';
import Dialog_UI_confirm_payment from '../Dialog_UI_confirm_payment/page';
import { send } from 'process';

type props={
  system_id: string;
  system_type:string
  recipient:string
  from: string
  amount:number
}

const  Payment_Form:React.FC<props>=({recipient,from,amount,system_id,system_type})=> {
 
    const [status,setStatus]= useState("Confirm")
    const [selected,set_selected]= useState("1")
    const [loading,setLoading]= useState(false)
    const [loading_2,setLoading_2]= useState(false)
    const [input_amount,setinputamount]= useState(0)
    
    const [sender,setsender]= useState("")
    const [sending_amount,setsending_amount]= useState("")
    const [receiverID,setreceiverID]= useState("")
    const [isSavings,setisSavings]= useState(false)
    const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)
    const formRef = useRef<HTMLFormElement>(null);
    const amountInput = formRef.current?.elements.namedItem("amount") as HTMLInputElement;
    const routing_id = formRef.current?.elements.namedItem("routing_id") as HTMLInputElement;
    const account_id = formRef.current?.elements.namedItem("account_id") as HTMLInputElement;
    
    const recipient_type1 = formRef.current?.elements.namedItem("recipient_type1") as HTMLInputElement;
    const recipientName = formRef.current?.elements.namedItem("recipient") as HTMLInputElement;
    const recipientInput = formRef.current?.elements.namedItem("receipent_id") as HTMLInputElement;
    const [savingsSector, setSavingsSector] = React.useState("0");


    useEffect(()=>{
      const myfun=async()=>{

        if(system_type=="bank"){const id= system_id;
        //here just index
        const sender_ = await getSelecteBanksInfo(Number(id));
        setsender(sender_.id)}
        else{
          const id= system_id;
          const sender_ = await getSelectedCardInfo(Number(id));
          setsender("******"+sender_.last4)
          console.log(sender_)
        }
        
      }
      myfun();

      if(from.includes("Routing")){
        set_selected("2")
      }
    },[])
    const handleSector=(value:string)=>{
     
      setSavingsSector(value)
    }
  
    const handleSubmit:any= ()=>{

        // e.preventDefault()
        
        setStatus("Processing...")
        // const formdata=  new FormData(e.currentTarget);
        // const routingId = formdata.get("routing_id") as string;
        const routingId = routing_id?.value;
        // const accountId = formdata.get("account_id") as string;
        const accountId = account_id?.value;
        // const recipient_name = formdata.get("recipient") as string;
        const recipient_name = recipientName?.value;
        // const recipient_name_type1 = formdata.get("recipient_type1") as string;
        const recipient_name_type1 = recipient_type1?.value;

        // const recipientID = formdata.get("receipent_id") as string;
        // const recipientID = formdata.get("receipent_id") as string;
        const recipientID = recipientInput?.value;
        // const amount = formdata.get("amount") as string;
        const amount = amountInput?.value;
        setreceiverID(recipientID)
        setsending_amount(amount)

        if(Number(amount)==0){
          setinputamount(0)
          setStatus("Amount Cannot be zero")
        }


        
        
        
        
        const checkBalance= async()=>{

          const isSavingsDestination= await call_check_bank_acc_type(recipientID);
          if(isSavingsDestination.bank_type=="savings"){
            setStatus("Use Savings Transfer!")
           
            return
          }


          if(system_type=="card"){
            setisSavings(false)
            return true
          }
          const id= system_id;
          //here just index
          const sender = await getSelecteBanksInfo(Number(id));
          if(sender.type!="savings"){
            setisSavings(false)
            return true;
          }

          
          const currentAmount=await call_get_saving_acc_balance() as {balance_1:string,balance_2:string};
        if(savingsSector=="balance_1"){
          if(Number(currentAmount.balance_1)<Number(amount)){
            setStatus("Insufficient Balance")

            return "insufficient balance"
          }
          setisSavings(true)
          return true;
        }
        else if(savingsSector=="balance_2"){
          if(Number(currentAmount.balance_2)<Number(amount)){
            setStatus("Insufficient Balance")
            
            return "insufficient balance"
          }
          setisSavings(true)
          return true;
        }
        else{

          setStatus("Select a savings sector")
       
           return 0;
        }
        
      }

        const check= async()=>{
          
          if(await checkBalance()== true){
            const id= system_id;
            //here just index

        const fun2 = async()=>{
        const sender= await getSelectedCardInfo(Number(id));
        let summary_response;
        
        // await  Call_remover_funding_src("")

        selected=="2"?summary_response= await check_funding_source_origin(routingId,accountId,recipient_name,amount,sender,recipient_name):
        summary_response=await call_Sender_card(amount,sender,recipientID,selected,recipient_name_type1)
        console.log(summary_response)
        if(summary_response=="succeeded" || summary_response=="201"){
          
          if(isSavings){
            await call_update_savings_time()
          }
          setStatus("Success")


          setcard_bank_reload(!card_bank_reload)

        

        }
        else {
          setStatus("Failed")
          
          if(summary_response=="DuplicateResource"){
            setStatus("Invelid Recipient Type")

          }
          else if( summary_response== "Routing number must be exactly 9 characters.")
            setStatus("Invalid Routing Number")

          
        }
            
        
    }
    
        const fun=async()=>{
           const sender = await getSelecteBanksInfo(Number(id));
           const response= await call_Sender_bank(amount,sender.id,recipientInput?.value,"bank")
           if(response.status=="201"){
             await call_update_saving_bank_balance(savingsSector,amount,"sub");
             
             if(savingsSector=="balance_1" || savingsSector=="balance_2" ){
               await call_update_savings_time()
              }
              setcard_bank_reload(!card_bank_reload)
            setStatus("Success")
           
           }
           else{
            setStatus("Failed")
          
           }
        }
        system_type=="bank"?fun():fun2()    
        //here
          }
        }
        check()
          
    }
    
  return (
    <form onSubmit={(e)=>{()=>{e.preventDefault()}}} ref={formRef} >
      <div   className="h-screen w-screen  flex items-center justify-center">
        <div  className="h-4/6 w-11/12 md:w-5/6 lg:w-3/6 flex  lg:min-w-625">


          {/* left */}
          <div className="h-full w-7/12    bg-slate-50  flex items-center justify-center ">
            <div className="h-full w-4/6  ">
              <div className="h-4/12 w-full ">
                <div className="h-4/6  ">
                  <div className="h-full w-full flex flex-col-reverse ">

                    <Selector  system_type={system_type} system_id={system_id} onSelectionChange ={set_selected}/>

                    <h1 className="text-2xl md:text-2xl font-bold  text-custom-blue2">
                      Transfer
                    </h1>
                  </div>
                </div>
                <div className="h-2/6 text-blue-700 flex items-center text-xs  md:text-sm">
                  <h1 className="cursor-pointer">
                    Download Invoice 
                  </h1>
                  <IoDownloadOutline className="cursor-pointer ml-1" />
                </div>
              </div>

              <Internal_External  recipient={recipient} from={from} amount={amount} selected={selected}/>

              {/* <div className=" mt-5 w-full flex items-center ">
                <input type="radio"></input> 
                <h1 className="ml-3 text-xs md:text-sm  text-custom-blue3 font-semibold">
                Confirm and Send
                </h1>
              </div> */}
            </div>
          </div>

          {/* right */}
          <div className="h-full w-5/12 bg-custom-grey2 flex items-center justify-center">
            <RightSidePaymentForm setLoading={setLoading} setLoading_2={setLoading_2}  system_type={system_type} system_id={system_id}
              status_data={{ status: status,  } }  setSavingsSector={handleSector} 
              />
             
          </div>
          
            
            {(loading && recipientInput.value!="" )  ? <Dialog_UI_confirm_payment status={{stat:status, setLoading:setLoading,loading:loading,header:"Confirm to transfer",description:`from: ${sender} to: ${recipientInput.value} amount: ${amountInput.value} `,action:()=>{console.log("submission"),handleSubmit()}}} /> : null}
            {(loading_2  )  ? <Dialog_UI_confirm_payment status={{stat:status,setLoading:setLoading_2,loading:loading_2,header:"Confirm to transfer",description:`from ${sender} amount: ${amountInput.value} to: ${routing_id?"Routing No:"+routing_id.value:""} ${account_id?"Account no: "+account_id.value:""} ${recipientInput?recipientInput.value:""}`,action:()=>{console.log("submission"),handleSubmit()}}} /> : null}
        </div>
      </div>
      
    </form>
    
  );
}
export default Payment_Form;