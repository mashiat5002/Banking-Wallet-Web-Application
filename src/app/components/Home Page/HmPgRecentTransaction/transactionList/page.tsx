"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { call_card_transactions } from "@/app/(utils)/call_card_transactions/route";
import { format_date } from "@/app/(utils)/format_date_function/route";
import { toLocalDate } from "@/app/(utils)/toLocalDate/route";
interface Transaction {
    description: string;
    created: number;
    amount: string;
    payment_method_details:card
  }
interface card {
  card: brand;
   
  }
interface brand {
  brand: string;
  last4: string;
   
  }
export default function TransactionList() {
  const [transections, setTransections] = useState<Transaction[]>([]);
  useEffect(() => {
    const callfunc = async () => {
        const transections = await call_card_transactions();
        console.log("transections")
        console.log(transections)
      setTransections(transections);
    };
    callfunc();
  }, []);
  return (
    <div className="h-4/5 w-full">
      {
        transections.map((transection,index) => <div key={index} className="h-1/4 w-full  flex ">
        <div className="h-full w-2/12  flex items-center justify-center ">
          <div className="w-4/6 aspect-square  flex items-center justify-center">
            <Image
              className=""
              height={80}
              width={80}
              src={`/assets/images/${transection.payment_method_details.card.brand}.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className="h-full w-8/12  text-custom-white text-xs  font-normal justify-between  flex items-center ">
          <div className="h-full w-1/3  flex items-center justify-center  md:text-custom-size lg:text-xs">
            <p>***{transection.payment_method_details.card.last4}</p>
          </div>
          <div className=" h-full w-3/6 text-wrap flex items-center justify-center md:text-custom-size text-custom-size lg:text-xs lg:font-semibold">
            <p>{transection.description}</p>
          </div>
          <div className="h-full w-2/6 pl-2  flex items-center justify-center  md:text-custom-size lg:text-xs text-custom-size lg:font-semibold">
            <p>{toLocalDate(transection.created).replace(",","")}</p>
          </div>
        </div>
        <div className="h-full w-2/12  flex items-center justify-center text-custom-green-lighter md:text-custom-size text-custom-size lg:text-xs lg:font-semibold">
          <h1>${transection.amount}</h1>
        </div>
      </div>)
      }
    </div>
  );
}
