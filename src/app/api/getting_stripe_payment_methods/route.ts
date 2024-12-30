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
        // console.log(res.data[0])
    const cards_details= res.data.map((x:any)=> ({"payment_method_id":x.id,"type":x.card.brand,"last4":x.card.last4,"fingerprint":x.card.fingerprint,"exp_month":x.card.exp_month,"exp_year":x.card.exp_year}))
    
    
    return NextResponse.json({"stripe_method":cards_details});
}