import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { NextResponse } from "next/server";

export async function GET(){
    const stripe_id=await get_stripe_user_id();
    
    const response= await fetch(`https://api.stripe.com//v1/customers/${stripe_id}/payment_methods`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${process.env.STRIPE_SECRET}` 
        }
    })
    const res=await response.json();
    
    const cards_details= res.data.map((x:any)=> ({"type":x.card.brand,"last4":x.card.last4,"fingerprint":x.card.fingerprint}))
    
    
    return NextResponse.json({"stripe_method":cards_details});
}