"use client"
import React, { useContext, useEffect, useState } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { call_find_customer_with_customer_id } from '@/app/(utils)/call_find_customer_with_customer_id/route';
import { call_find_customer_id_with_funding_src_id } from '@/app/(utils)/call_find_customer_id_with_funding_src_id/route';
import { call_bank_transfers_all } from '@/app/(utils)/call_bank_transfers_all/route';
import { call_find_balance_acc_id_with_customer_id } from '@/app/(utils)/call_find_balance_acc_id_with_customer_id/route';
import { call_api_Connected_banks } from '@/app/(utils)/(call_api_function_connected_banks)/route';
import { call_dwolla_id_for_frontEnd } from '@/app/(utils)/call_dwolla_id_for_frontEnd/route';
import { call_get_stripe_transaction_details } from '@/app/(utils)/call_get_stripe_transaction_details/route';
import { call_card_transfer_all } from '@/app/(utils)/call_card_transfer_all/route';
import { call_api_Connected_cards } from '@/app/(utils)/(call_api_function_stripe_connected_payment_methods)/route';
import Dialog_form_payment_gateway_quick_trans from '../../Dialog_form_payment_gateway_quick_trans/page';
import MyContext from '../../MyContext/route';
import Loading_shed_cn_card from '../../loading_shedcn_card/page';
import No_data_skeleton from '../../No_data_skeleton/page';
export default function QuickSend() {
   const [system_id, setsystem_id] = useState("");
   const [isOpen, setisOpen] = useState(false);
   const [isOpen_card, setisOpen_card] = useState(false);
   const [transList, setTransList] = useState([] as any);
   const [destNames, setDestNames] =useState([] as any);
   const [sourceFids, setSource_fids] =useState([] as any);
   const [destFids, setDest_fids] =useState([] as any);
   const [connected_banks, setconnected_banks] =useState([] as any);
   const [unique_two_card, setunique_two_card] =useState([] as any);
   const [unique_two_card_pid, setunique_two_card_pid] =useState([] as any);
   const [unique_two_card_desc, setunique_two_card_desc] =useState([] as any);
   const [connectedCards, setconnectedCards] =useState([] as any);
   const [amounts, setamounts] =useState([] as any);
   const [card_meta, setcardmeta] =useState([] as any);
   const [tobeSent, settobeSent]= useState(0);
   const [toSent, settoSent]= useState("");
   const [toFid, settofid]= useState("");
     const [loading,setloading]= useState(true);
     const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)
   
      // const [recent_card_transaction_details,setrecent_card_transaction_detials]=useState("")
      const {setIsQuickTrans}= useContext(MyContext)

    const handleClick=(index:any)=>{
      if(index<3){
   
        
        settoSent(destNames[index])

        const target= connected_banks.findIndex((item:any)=>item==sourceFids[index])
      
        settofid(destFids[index])
      
        settobeSent(amounts[index])
        setsystem_id(target)
        setisOpen(true)
      }
      else{
        setIsQuickTrans(true)
    
        const targetId= unique_two_card_pid[index-3];
        const target= connectedCards.findIndex((item: any) => item.payment_method_id === targetId);
        setsystem_id(target)
  
        settobeSent(card_meta[index-3].amount)
        settoSent(card_meta[index-3].recipient)
        settofid(card_meta[index-3].recipientID)
        setisOpen_card(true)

      
      }
      

    }
   
    useEffect(()=>{
      const myfun=async()=>{
       const  allCards= await call_api_Connected_cards();
       setconnectedCards(allCards)
      }
      myfun()
    },[card_bank_reload])

    useEffect(() => {
     
      

      const fetchTransactions = async () => {
        try {

         


          const data = await call_bank_transfers_all();
          const transactions= data.res;
          // console.log(transactions)
          const unique_five=[] as any;
          const unique_five_source=[] as any;
          const unique_five_destination=[] as any;
          const money= [] as any;
          
          
          
          
          
          const myfun=async()=>{
            const data= await call_api_Connected_banks()
            const connected_banks_list= data.map((x:any)=>x.id)
            const dwolla_id=await call_dwolla_id_for_frontEnd()
            connected_banks_list.push(dwolla_id)
            console.log(connected_banks_list)
            setconnected_banks(connected_banks_list);
            for(let i=0;i<transactions.length;i++){
              if(("funded-transfer" in transactions[i]._links) || ("funding-transfer" in transactions[i]._links) ){
                if(!(("source-funding-source" in transactions[i]._links) && ("destination-funding-source" in transactions[i]._links)))
                  i++
              }
              
              if(unique_five_destination.length==5)
                return ;
              let source:any;
              if (transactions[i]._links.source["resource-type"] === "customer") {
                const customerId = transactions[i]._links.source.href.slice(-36);
                source=  {"type":"cid","id":customerId,"name":""}
              } else if (transactions[i]._links.source["resource-type"] === "funding-source") {
                const fundingId = transactions[i]._links.source.href.slice(-36);
                source= {"type":"fid","id":fundingId,"name":""}
                
              } else if (transactions[i]._links.source["resource-type"] === "account") {
                source= {"type":"main_account","id":"","name":""};
              }

              
             
              let destination;
              if (transactions[i]._links.destination["resource-type"] === "customer") {
                const customerId = transactions[i]._links.destination.href.slice(-36);
                destination= {"type":"cid","id":customerId,"name":""};
              } else if (transactions[i]._links.destination["resource-type"] === "funding-source") {
                const fundingId = transactions[i]._links.destination.href.slice(-36);
                destination= {"type":"fid","id":fundingId,"name":""};
                
              } else if (transactions[i]._links.destination["resource-type"] === "account") {
                destination= {"type":"main_account","id":"","name":""};
              }
              if("funding-transfer" in transactions[i]._links || ("funded-transfer" in transactions[i]._links) ){
                
                
                const fundingId = transactions[i]._links["source-funding-source"].href.slice(-36);
                source= {"type":"fid","id":fundingId,"name":""}
                const fundingId_ = transactions[i]._links["destination-funding-source"].href.slice(-36);
                destination= {"type":"fid","id":fundingId_,"name":""}
                
              }
              
              
              
              
              if(( (connected_banks_list.includes(source?.id)) &&  (!unique_five.includes(`${source?.id+"<-->"+destination?.id}`)) && (source?.type!="main_account")   ) ){
                
                unique_five.push(`${source?.id+"<-->"+destination?.id}`)
              unique_five_source.push(source)
              unique_five_destination.push(destination )
              money.push(transactions[i].amount.value)
             
            }
          }
          
          
            
          
          
          
          
        }
        await myfun();
        setTransList(unique_five);
        setamounts(money)

          
        
          //fetching customer names of destinations
          const fetchNames = async () => {
            try {
              const names = await Promise.all(
                unique_five_destination.map(async (x: any) => {
                  if (x.type === "cid") {
                    return await call_find_customer_with_customer_id(x.id);
                  } else if (x.type === "fid") {
                    const cid = await call_find_customer_id_with_funding_src_id(x.id);
                    return await call_find_customer_with_customer_id(cid);
                  }
                })
              );
          
              setDestNames(names)
              setloading(false)
            } catch (error) {
              console.error("Error fetching names:", error);
            }
          };
          
          fetchNames();
          
          
          
          //fetching fids of destinations
          const fetch_dest_fid = async () => {
            try {
              const fids = await Promise.all(
                unique_five_destination.map(async (x: any) => {
                  if (x.type === "cid") {
                    return await call_find_balance_acc_id_with_customer_id(x.id);
                  } else if (x.type === "fid") {
                    return x.id;
                  }
                })
              );
              
              
              setDest_fids(fids)
            } catch (error) {
              console.error("Error fetching names:", error);
            }
          };
          
          fetch_dest_fid();

          

          
          
          
            //fetching fids of sources
            const fetch_source_fid = async () => {
              try {
                const fids = await Promise.all(
                  unique_five_source.map(async (x: any) => {
                    if (x.type === "cid") {
                      return await call_find_balance_acc_id_with_customer_id(x.id);
                    } else if (x.type === "fid") {
                    return x.id;
                  }
                })
              );
              
              setSource_fids(fids)
             
            } catch (error) {
              console.error("Error fetching names:", error);
            }
          };
          
          

          
          fetch_source_fid();
          
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      };
     
      fetchTransactions();
     
    }, [card_bank_reload]);
    
    
    const unique_cards=[] as any;
    const unique_cards_pid=[] as any;
    const unique_cards_description=[] as any;
    const card_metaData= [] as any;
    useEffect(()=>{
      const fetch_card_trans=async()=>{
        const card_trans_list= await call_card_transfer_all()
        console.log(card_trans_list)
        
        for(let i=0;i<card_trans_list.length;i++){
          if(unique_cards.length==2){
            break
          }
          const card_info= card_trans_list[i].payment_method+"---"+card_trans_list[i].description;
          if(! unique_cards.includes(card_info)){
            unique_cards.push(card_info)
            unique_cards_pid.push(card_trans_list[i].payment_method)
            unique_cards_description.push(card_trans_list[i].description)
            card_metaData.push(card_trans_list[i].metadata)
  
            
          }
        }
        setunique_two_card(unique_cards)
        setunique_two_card_pid(unique_cards_pid)
        setunique_two_card_desc(unique_cards_description)
        setcardmeta(card_metaData)
      
      }
      fetch_card_trans()
     
    },[card_bank_reload])
  
    
    return (
    <div  className='h-full w-11/12 bg-logo-surrounding rounded-2xl'>
        <div className='h-1/3 w-full  flex items-center pl-5 text-custom-white text-xl md:text-custom-size lg:text-xs'>
            <h1>Quick Transactions</h1>
        </div>
        <div className='h-2/3 w-full flex items-center justify-center md:space-x-1 lg:space-x-3 '>
         

         {loading? <div className='w-full h-full'><Loading_shed_cn_card/></div>: (destNames.length==0)? <div className='w-full h-full bg-custom-grey-white'><No_data_skeleton/></div> : transList.map((transaction, index:any) => {
           return (
         
             <div key={index} className='w-1/6 h-full    text-custom-white '>
             <div className='w-full h-full '>
               <div className='h-3/6 w-full flex items-center justify-center cursor-pointer'>
               <div className='h-full aspect-square ' onClick={()=>handleClick(index)}>
                <Avatar  className="w-full h-full"  {...genConfig(index<3?destNames[index]:"Card Transfer")} />
               </div>
               </div>
         
         
               <div  onClick={()=>handleClick(index)} className=' h-1/3 w-full cursor-pointer font-semibold flex items-center justify-center md:text-custom-size lg:text-xs'>
               {index<3?<h1>{destNames[index]?.replace(/".*?"/g, '')}</h1>:<h1>{card_meta[index-3].recipient}</h1>}
               </div>
         
             </div>
         
               
         </div>
           )})}
        
      

        </div>
        <Dialog_form_payment_gateway_quick_trans recipient={toSent} from={toFid} amount={tobeSent} setIsopen={setisOpen} isOpen={isOpen} system_type={"bank"} system_id={system_id}/>
        <Dialog_form_payment_gateway_quick_trans recipient={toSent} from={toFid} amount={tobeSent} setIsopen={setisOpen_card} isOpen={isOpen_card} system_type={"card"} system_id={system_id}/>
    </div>
  )
}
