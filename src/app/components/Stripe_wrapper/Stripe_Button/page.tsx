"use client"
import React from 'react'

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
export default function Stripe() {
   
    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
        if (!stripe || !elements) {
            console.error('Stripe.js has not loaded.');
            return;
          }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            console.error('CardElement is not found');
            return;
          }
        const { error: cardError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
          });
          console.log('PaymentMethod successfully created:', paymentMethod);

          const res= await fetch("/api/connect_stripe_card",{
            method:"POST",
            body:JSON.stringify(paymentMethod)
          })
          const data=await res.json();
          console.log("data");
          console.log(data);
    }
  return (
    
    <form onSubmit={handleSubmit} className='bg-custom-green-lighter rounded-lg h-full w-full p-2 ring-2 ring-black'>
      <CardElement />
      <button type='submit' className=' h-fit w-fit p-1 mt-4 rounded-xl text-sm font-semibold bg-custom-skyblue ring-black ring-2'>Connect</button>
    </form>
    

  )
}
