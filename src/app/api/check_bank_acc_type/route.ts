import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    
    const access= await get_dwolla_access_token()
    const body= await request.json()
   
    const res= await fetch(`https://api-sandbox.dwolla.com/funding-sources/${body.id}`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":`application/vnd.dwolla.v1.hal+json`
        }

    })
   
    const final_res= await res.json()
   
    return NextResponse.json({"bank_type":final_res.bankAccountType})
    
}