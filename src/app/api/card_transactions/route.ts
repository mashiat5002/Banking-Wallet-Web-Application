import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const customer= await get_stripe_user_id()
    
    const res= await fetch(`${process.env.Base_Url_Stripe}/v1/charges?customer=${customer}&limit=4`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${process.env.STRIPE_SECRET}`
        }
    })
    
    const final_res= await res.json()
   
    return NextResponse.json({final_res})
}