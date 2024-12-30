"use client";
import React, { useState } from "react";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { call_add_card_to_slide } from "@/app/(utils)/call_add_card_to_slide/route";
import { useRouter } from "next/navigation";

type propsType = {
  name: string;
  number: string;
  cvc: string;
  expiry: string;
};

const Stripe: React.FC<propsType> = ({ name, number, cvc, expiry }) => {
  const router= useRouter()
  const [status, setStatus] = useState("Connect");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name != "" && number != "" && cvc != "" && expiry != "") {
      console.log("call add card")
      const inserted= await call_add_card_to_slide(number,name,expiry,cvc)

      if(inserted== "inserted"){
        setStatus("inserted to slide")
        setTimeout(() => {setStatus("Processing...");}, 1500);
        if (!stripe || !elements) {
          console.error("Stripe.js has not loaded.");
          return;
        }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          console.error("CardElement is not found");
          return;
        }
        const { error: cardError, paymentMethod } =
          await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
          });
        console.log("PaymentMethod successfully created:", paymentMethod);
  
        const res = await fetch("/api/connect_stripe_card", {
          method: "POST",
          body: JSON.stringify(paymentMethod),
        });
       
        if (res.status == 200) {
          setStatus("Successful");
          // setTimeout(() => {router.back()}, 1000);
        }
      }
      else{
        
        setStatus("Insertion Failed");
      }
      
    }
    else{
      setStatus("Field is empty!!");
      setTimeout(() => {setStatus("Connect");}, 1500);

      }


     
  };
  return (
    <div className="h-full w-full ">
      <form
        onSubmit={handleSubmit}
        className="bg-sky-500 rounded-lg h-full w-full  p-2 ring-2 ring-black "
      >
        <div className="h-16 w-full mt-3">
          <CardElement />

          <div className="h-1/2 mt-3 w-full flex flex-row-reverse items-center ">
          <button
            type="submit"
            className=" h-fit w-fit p-1 mt-4 rounded-xl text-sm font-semibold bg-custom-skyblue ring-black ring-2"
          >
            {status}
          </button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Stripe;
