"use client"
export const dynamic = "force-dynamic";




import React, { useContext, useState } from "react";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { call_add_card_to_slide } from "@/app/(utils)/call_add_card_to_slide/route";
import Dialog_UI from "../Dialog_UI/page";
import { call_remove_card_from_db } from "@/app/(utils)/call_remove_card_from_db/route";
import { call_insert_method_id_stripe_in_db } from "@/app/(utils)/call_insert_method_id_stripe_in_db/route";
import MyContext from "../MyContext/route";

type propsType = {
  name: string;
  number: string;
  cvc: string;
  expiry: string;
};

const Stripe_: React.FC<propsType> = ({ name, number, cvc, expiry }) => {
  const {card_loading,setCard_loading}= useContext(MyContext)
  const [status, setStatus] = useState("Processing..");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
    setLoading(true)
    if (name != "" && number != "" && cvc != "" && expiry != "") {
      
      const inserted_res= await call_add_card_to_slide(number,name,expiry,cvc)
     
      const insertID= inserted_res.res.insertId;
      const inserted= inserted_res.status;

      if(inserted || inserted== "inserted"){
        setCard_loading(!card_loading)
        // setStatus("inserted to slide")
        
        if (!stripe || !elements) {
          console.error("Stripe.js has not loaded.");
          setStatus("Stripe.js has not loaded.")
         
          return;
        }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          console.error("CardElement is not found");
          setStatus("CardElement is not found!")
         
          return;
        }
        const { error: cardError, paymentMethod } =
          await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
          });

          console.log("payment method id",paymentMethod)
        const res = await fetch("/api/connect_stripe_card", {
          method: "POST",
          body: JSON.stringify({"id":paymentMethod}),
        });
        const res_data=await res.json() 
        console.log(res_data)
        if (res.status == 200) {
         
          setStatus("Successfully connected card to stripe. (The card is added to card stack as your input for homepage stack)");
         
          // await call_insert_method_id_stripe_in_db(insertID,res_data.data.id)
        }
        else{
       
          
          setStatus("Couldn't connect card in stripe. Make sure the provided Info is correct");
          await call_remove_card_from_db(insertID);
          
        }
      }
      else{
        console.log("res not 200")
        
        setStatus("Insertion Failed");
       
      }
      
    }
    else{
      setStatus("Field is empty!!");
      
     

      }
} catch(err){
  console.log("error in handleSubmit")
}

     
  };
  return (
    <div className="h-full w-full">
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
            Connect
          </button>


            
            {loading==true ? <Dialog_UI status={{header:"Processing Status",description:`${status}`,action:()=>{setLoading(false),setStatus("Processing....");}}} /> : null}

          </div>
        </div>
      </form>
    </div>
  );
};

export default Stripe_;
