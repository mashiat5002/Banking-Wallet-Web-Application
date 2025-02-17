"use client";



import React, {  useState } from "react";

import Credit_Card_Based_on_input from "../Credit_Card_based_on_input/page";

import dynamic from 'next/dynamic';

const Stripe_Elements_Wrapper = dynamic(() => import('../Stripe_Elements_Wrapper/page'), { ssr: false });
export default function Stripe_Wrapper() {
  const [number,setNumber]= useState("")
  const [expiry,setExpiry]= useState("")
  const [cvc,setCVC]= useState("")
  const [name,setName]= useState("")

  
   

  return (
    
    <div  onClick={(e)=>{e.stopPropagation()}} className="h-[400px] w-[400px]  mt-5 rounded-xl flex flex-col items-center justify-center ">
      <div className=" scale-100 ">
        <Credit_Card_Based_on_input
          number= {number}
          expiry={expiry}
          cvc={cvc}
          name={name}
        />
      </div>

      <div className="  w-full flex items-center justify-center scale-90 ">
        
        <div className=" w-5/6  rounded-2xl ring-1 ring-black " style={{ backgroundColor: "#1073B5" }}>
          <form className=" w-full  flex flex-col justify-evenly p-2  rounded-2xl">
            <div className="w-full  flex justify-between">
              <h1 className="text-sm font-semibold text-slate-200">Enter to add to Homepage Slide:</h1>
            </div>
            <div className="w-full mt-3  flex justify-between">
              <h1 className="text-sm font-semibold">Cardholder Name:</h1>
              <input onChange={(e)=>{setName(e.target.value)}} className="text-center w-28 ml-3 bg-custom-skyblue ring-1 ring-black  h-full"></input>
            </div>
            <div className="w-full mt-1 flex justify-between">
              <h1 className="text-sm font-semibold">Enter Card Number :</h1>
              <input onChange={(e)=>{setNumber(e.target.value)}} className=" text-center w-28 ml-3 bg-custom-skyblue ring-1 ring-black  h-full"></input>
            </div>
            <div className="w-full mt-1 flex justify-between">
              <h1 className="text-sm font-semibold">Expiry Date :</h1>
              <input onChange={(e)=>{setExpiry(e.target.value)}} className=" text-center w-28 ml-3 bg-custom-skyblue ring-1 ring-black  h-full"></input>
            </div>
            <div className="w-full mt-1 flex justify-between">
              <h1 className="text-sm font-semibold">CVC :</h1>
              <input onChange={(e)=>{setCVC(e.target.value)}} className="text-center w-28 ml-3 bg-custom-skyblue ring-1 ring-black  h-full"></input>
            </div>
          </form>
          <h1 className="text-sm font-semibold ml-5 text-slate-200">Re-enter Card Number: </h1>
          <div className="h-28 w-full flex  items-center justify-center mt-1 ">
            <div className="h-24 w-4/5  flex  items-center justify-center bg-black flex-col-reverse">
              <Stripe_Elements_Wrapper name={name} expiry={expiry} cvc={cvc} number={number}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
