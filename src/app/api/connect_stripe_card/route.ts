import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body= await request.json();
    const params= new URLSearchParams();
   
    params.append("customer","cus_R6b2fTVYgQKeFN");
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
    console.log(response.status);
    return NextResponse.json(data);
}