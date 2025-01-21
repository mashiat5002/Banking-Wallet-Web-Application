"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { call_bank_transfers } from "@/app/(utils)/call_bank_transfers/route";
import { call_find_customer_with_customer_id } from "@/app/(utils)/call_find_customer_with_customer_id/route";
import { call_find_customer_id_with_funding_src_id } from "@/app/(utils)/call_find_customer_id_with_funding_src_id/route";
import Avatar, { genConfig } from 'react-nice-avatar'
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
  const [transList, setTransList] = useState<Transaction[]>([]);
  const [customerNames, setCustomerNames] = useState<string[]>([]);
  const [destNames, setDestNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactions = await call_bank_transfers();
        setTransList(transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

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
            return "Main Account";
          }
          return "Unknown";
        })
      );
    };

    const fetchAllNames = async () => {
      try {
        const [sourceNames, destinationNames] = await Promise.all([
          fetchCustomerNames(true),
          fetchCustomerNames(false),
        ]);
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
      {transList.map((transaction, index) => {
        
        return (
        <div
          key={index}
          className="h-1/4 w-full bg-logo-surrounding flex text-xs lg:text-custom-size2 lg:font-semibold"
        >
          {/* Source Customer */}
          <div className="h-full w-2/6 flex">
            <div className="h-full w-1/3  flex items-center justify-center">
            
              <div className="h-4/6 w-4/6 bg-red-500 rounded-full">
              <Avatar className="w-full h-full"  {...genConfig(customerNames[index])} />
              {/* <img src={`https://avatar.iran.liara.run/username?username=${customerNames[index]}&bold=false` }/> */}
              </div>
            </div>
            <div className="text-custom-white font-semibold flex items-center">
              <p>{customerNames[index]?.replace(/".*?"/g, '') || "Loading..."}</p>
            </div>
          </div>
                
          {/* Destination Customer */}
          <div className="h-full w-2/6 flex">
            <div className="h-full w-1/3 flex items-center justify-center">
            <div className="h-4/6 w-4/6 bg-red-500 rounded-full">
              <Avatar className="w-full h-full"  {...genConfig(destNames[index])} />
              {/* <img src={`https://avatar.iran.liara.run/username?username=${destNames[index]}` }/> */}
              </div>
            </div>
            <div className="text-white font-semibold flex items-center">
              <p>{destNames[index]?.replace(/".*?"/g, '') || "Loading..."}</p>
            </div>
          </div>

          {/* Transaction Details */}
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
