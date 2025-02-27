"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { call_bank_transfers } from "@/app/(utils)/call_bank_transfers/route";
import { call_find_customer_with_customer_id } from "@/app/(utils)/call_find_customer_with_customer_id/route";
import { call_find_customer_id_with_funding_src_id } from "@/app/(utils)/call_find_customer_id_with_funding_src_id/route";
import Avatar, { genConfig } from 'react-nice-avatar'
import MyContext from "@/app/components/MyContext/route";
import Loading_shed_cn_card from "@/app/components/loading_shedcn_card/page";
import No_data_skeleton from "@/app/components/No_data_skeleton/page";
interface TransactionLink {
  href: string;
  "resource-type"?: string;
}

interface Transaction {
  _links: {
    source: TransactionLink;
    destination: TransactionLink;
  };
  created: string;
  amount: { value: string };
  status: string;
}

export default function MoneySentList() {
  const {saving_balance_loading}= useContext(MyContext)
    const [loading,setloading]= useState(true);
    const [no_data_loading,setno_data_loading]= useState(true);
  
  const [transList, setTransList] = useState<Transaction[]>([]);
  const [customerNames, setCustomerNames] = useState<string[]>([]);
  const [destNames, setDestNames] = useState<string[]>([]);
  const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactions = await call_bank_transfers();
     

        setTransList(transactions);
        setno_data_loading(false)

        
        if(transactions.length==0)
          setloading(false)
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [saving_balance_loading,card_bank_reload]);

  useEffect(() => {
    const fetchCustomerNames = async (isSource: boolean) => {
      return await Promise.all(
        transList.map(async (transaction) => {
          const link = isSource ? transaction._links.source : transaction._links.destination;
          if (link["resource-type"] === "customer") {
            const customerId = link.href.slice(-36);
            return await call_find_customer_with_customer_id(customerId)+`"${customerId}"`;
          } else if (link["resource-type"] === "funding-source") {
            const fundingId = link.href.slice(-36);
            const customerId = await call_find_customer_id_with_funding_src_id(fundingId);
            return await call_find_customer_with_customer_id(customerId)+`"${customerId}"`;
          } else if (link["resource-type"] === "account") {
            return "Card Transfer";
          }
          return "Unknown";
          
        }
      
      )
    );
    };

    const fetchAllNames = async () => {
      try {
        const [sourceNames, destinationNames] = await Promise.all([
          fetchCustomerNames(true),
          fetchCustomerNames(false),
        ]);
        setloading(false)
        setCustomerNames(sourceNames);
        setDestNames(destinationNames);
      } catch (error) {
        console.error("Error fetching customer names:", error);
      }
    };

    if (transList.length > 0) {
      fetchAllNames();
    }
  }, [transList]);

  return (

    <div className="h-4/6 w-full">
      {(no_data_loading || loading)?<div className="h-full w-full bg-logo-surrounding flex  lg:text-custom-size2 lg:font-semibold" ><Loading_shed_cn_card/></div>:
      (transList.length==0)? <div className='w-full h-full bg-custom-grey-white'><No_data_skeleton/></div> :
      transList.map((transaction, index) => {
        
        return (
        <div
          key={index}
          className="h-1/4 w-full bg-logo-surrounding flex  lg:text-custom-size2 lg:font-semibold"
        >
          <div className="h-full w-2/6 flex">
            <div className="h-full w-1/3  flex items-center justify-center">
            
              <div className="h-4/6 aspect-square rounded-full">
              <Avatar className="w-full h-full"  {...genConfig(customerNames[index]?.replace(/".*?"/g, '') || "Loading...")} />
              </div>
            </div>
            <div className="text-custom-white font-semibold flex items-center ml-1 md:ml-0">
              <p>{customerNames[index]?.replace(/".*?"/g, '') || "Loading..."}</p>
            </div>
          </div>
                
          <div className="h-full w-2/6 flex">
            <div className="h-full w-1/3 flex items-center justify-center">
            <div className="h-4/6 aspect-square  rounded-full">
              <Avatar className="w-full h-full"  {...genConfig(destNames[index]?.replace(/".*?"/g, '') || "Loading...")} />
              </div>
            </div>
            <div className="text-white font-semibold flex items-center ml-1 md:ml-0">
              <p>{destNames[index]?.replace(/".*?"/g, '') || "Loading..."}</p>
            </div>
          </div>

          <div className="h-full w-4/6 flex text-custom-white ">
            <div className="h-full w-2/5 flex items-center">
              <h1 className="ml-4">{transaction.created.slice(0, 10)}</h1>
            </div>
            <div className="h-full w-1/4 flex items-center">
              <h1>${transaction.amount.value}</h1>
            </div>
            <div className="h-full w-1/4 flex items-center">
              <div
                className={`h-2/5 w-full rounded-2xl flex items-center justify-center ${
                  transaction.status === "processed"
                    ? "bg-custom-green-light text-custom-green"
                    : "bg-amber-600 text-neutral-950"
                }`}
              >
                <h1>{transaction.status}</h1>
              </div>
            </div>
          </div>
        </div>
      )})}
    </div>
  );
}
