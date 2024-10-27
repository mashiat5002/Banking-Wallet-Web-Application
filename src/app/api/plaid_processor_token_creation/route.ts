import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body= await request.json();
     body.client_id=`${process.env.PLAID_CLIENT_ID}`;
    body.secret=`${process.env.PLAID_SECRET}`
    const response= await fetch("https://sandbox.plaid.com/processor/token/create",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${body.access_token}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    const resBody=  await response.json();
    
    
    return  NextResponse.json(resBody);
    
}