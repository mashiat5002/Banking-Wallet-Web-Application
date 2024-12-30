"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, {  useState } from "react";
import Stripe from "./Stripe_Button/page";
import Credit_Card_Based_on_input from "../Credit_Card_based_on_input/page";
import Back_btn from "../Back Button/page";

export default function Stripe_Wrapper() {
  const [number,setNumber]= useState("")
  const [expiry,setExpiry]= useState("")
  const [cvc,setCVC]= useState("")
  const [name,setName]= useState("")

  
  

  const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
  );
  return (
    
    <div  onClick={(e)=>{e.stopPropagation()}} className="h-600px w-500px bg-white rounded-xl flex flex-col items-center justify-center ">
      <div>
        <Credit_Card_Based_on_input
          number= {number}
          expiry={expiry}
          cvc={cvc}
          name={name}
        />
      </div>

      <div className=" w-full flex items-center justify-center mt-5 ">
        
        <div className=" w-3/5  rounded-2xl ring-1 ring-black " style={{ backgroundColor: "#1073B5" }}>
          <form className=" h-full  flex flex-col justify-evenly  p-5 rounded-2xl">
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
          <div className="h-28 w-full flex  items-center justify-center mt-1">
            <div className="h-24 w-4/5  flex  items-center justify-center bg-black flex-col-reverse">
              <Elements stripe={stripePromise}>
                <Stripe name={name} expiry={expiry} cvc={cvc} number={number} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
<div className='h-7 mt-5 flex flex-row-reverse w-500 '><Back_btn/></div>
    </div>
  );
}
