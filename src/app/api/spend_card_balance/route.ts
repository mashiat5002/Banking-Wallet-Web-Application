import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body= await request.json();
    const amount= Math.ceil(Number(body.amount)).toString();

    const stripe_id= await get_stripe_user_id()
    const formData = new URLSearchParams();
    formData.append('amount', `${amount}`);
    formData.append('currency', 'usd');
    formData.append('description', '');
    const response= await fetch(`https://api.stripe.com/v1/customers/${stripe_id}/balance_transactions`,{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${process.env.STRIPE_SECRET}`,
            "Content-Type": "application/x-www-form-urlencoded"

        },
        body:formData.toString()
    })
    const final_response= await response.json()
    
    return NextResponse.json(final_response)
}