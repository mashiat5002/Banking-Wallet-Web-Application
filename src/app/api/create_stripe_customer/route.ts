import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route";
import User from "@/app/models/user";

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
    
    

    await connectToDatabase()
    const result_=await User.updateOne({email:body.email},{$set:{stripe_customer_id:data.id}})
 
    return NextResponse.json(data)
}