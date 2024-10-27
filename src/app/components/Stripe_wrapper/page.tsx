"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Stripe from "./Stripe_Button/page";

export default function Stripe_Wrapper() {
  const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
  );
  return (
    <div className="h-2/6 w-2/6 bg-custom-skyblue flex items-center justify-center ">
      <div className="h-20 w-64   flex items-center justify-center ">
        <Elements stripe={stripePromise}>
          <Stripe />
        </Elements>
      </div>
    </div>
  );
}
