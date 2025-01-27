"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { call_card_transactions } from "@/app/(utils)/call_card_transactions/route";
import { toLocalDate } from "@/app/(utils)/toLocalDate/route";
import Loading_shed_cn_card from "@/app/components/loading_shedcn_card/page";
import MyContext from "@/app/components/MyContext/route";
import No_data_skeleton from "@/app/components/No_data_skeleton/page";
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
  const [loading,setloading]= useState(true);
  const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)


  useEffect(() => {
    const callfunc = async () => {
        const transections = await call_card_transactions();
        console.log("transections")
        setloading(false)
        console.log(transections)
      setTransections(transections);
    };
    callfunc();
  }, [card_bank_reload]);
  return (
    <div className="h-4/5 w-full">
      {loading?<div className="h-full w-full bg-logo-surrounding flex text-xs lg:text-custom-size2 lg:font-semibold" ><Loading_shed_cn_card/></div>:
      (transections.length==0)? <div className='w-full h-10/12 bg-custom-grey-white'><No_data_skeleton/></div> :
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
          <h1>${((Number(transection.amount)/100).toFixed(2))}</h1>
        </div>
      </div>)}
      
    </div>
  );
}
