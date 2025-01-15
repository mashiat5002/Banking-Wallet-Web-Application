
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import {  NextResponse } from "next/server";

export async function POST() {
    const id= await get_stripe_user_id()
    const res= await fetch(`https://api.stripe.com//v1/customers/${id}`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${process.env.STRIPE_SECRET}`,
        
        }

    })
   
    const final_res= await res.json()
  
    return NextResponse.json({"balance":final_res.balance,"last_update":new Date(final_res.created * 1000)})
    
}