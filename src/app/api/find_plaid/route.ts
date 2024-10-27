import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
 
    const Body= await request.json();
    Body.client_id=`${process.env.PLAID_CLIENT_ID}`;
    Body.secret=`${process.env.PLAID_SECRET}`

    
    const response=await fetch("https://sandbox.plaid.com/auth/get",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${Body.access_token}`,
            "Content-Type":"application/json",
        
        },
        body:JSON.stringify(Body)
        
        

    })
    
    const resBody=  await response.json()
    

    return  NextResponse.json(resBody);




}