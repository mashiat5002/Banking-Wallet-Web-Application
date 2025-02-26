import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    console.log("howw")
    const body= await request.json();
    const params= new URLSearchParams();
    const stripe_acc= await get_stripe_user_id()
    console.log(stripe_acc)
    params.append("customer",`${stripe_acc}`);
    console.log(body.id);
    const response= await fetch(`${process.env.Base_Url_Stripe}/v1/payment_methods/${body.id}/attach`,{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${process.env.STRIPE_SECRET}`,
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:params.toString()
        
    })
    const data=await response.json();
    console.log(data)
    return NextResponse.json({"data":data});
}