import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";

export async function POST(request:NextRequest) {
    
    const body= await request.json();
    const params= new URLSearchParams();
    params.append("name",`${body.first_name} ${body.last_name}`);
    const response= await fetch("https://api.stripe.com//v1/customers",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${process.env.STRIPE_SECRET}`,
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:params.toString()
    })
    const data= await response.json ();
    console.log(data)



    await db.query(`update users set stripe_customer_id=? where email=?`,
        [data.id,body.email]
    )
    return NextResponse.json(data)
}