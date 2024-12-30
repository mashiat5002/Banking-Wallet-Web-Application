import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body= await request.json()
    const access= await get_dwolla_access_token();
    const response= await fetch(`https://api-sandbox.dwolla.com/funding-sources/${body.funding_source}`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":"application/vnd.dwolla.v1.hal+json"
        }
    })
    const final_response= await response.json()
   console.log(final_response)
    return NextResponse.json(final_response)
}