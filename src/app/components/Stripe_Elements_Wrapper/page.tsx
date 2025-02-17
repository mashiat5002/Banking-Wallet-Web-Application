"use client"
import dynamic from 'next/dynamic';
import React from 'react'


const Stripe_ = dynamic(() => import('../Stripe_Button/page'), { ssr: false });
// import Stripe from "./Stripe_Button/page";
type props={
    name:string,
    expiry:string,
    cvc:string,
    number:string

}

const Stripe_Elements_Wrapper:React.FC<props> = ({name,expiry,cvc,number}) => {
  return (
    <div className="h-24 w-full  flex  items-center justify-center  flex-col-reverse">
       
                <Stripe_ name={name} expiry={expiry} cvc={cvc} number={number} />
       
    </div>
  )
}

export default Stripe_Elements_Wrapper
