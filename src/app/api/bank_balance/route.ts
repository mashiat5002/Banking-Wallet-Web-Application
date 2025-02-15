import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const access= await get_dwolla_access_token()
    const balance_id= await request.json()
    const id= balance_id.balance_id
    const res= await fetch(`https://api-sandbox.dwolla.com/funding-sources/${id}/balance`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":`application/vnd.dwolla.v1.hal+json`
        }

    })
   
    const final_res= await res.json()
    
    return NextResponse.json({"balance":final_res.balance.value,"last_update":final_res.lastUpdated})
    
}