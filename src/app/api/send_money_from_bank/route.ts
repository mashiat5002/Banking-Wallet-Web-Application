import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const dwolla_access= await get_dwolla_access_token();
   
    const body= await request.json();
    // console.log("body.selected,---"+ body.receiver)
    const sender= body.selected=="bank" ? body.sender:"1a180d82-44d5-41b7-80f3-43407947c4cb"
    console.log("sender",sender)
    const response= await fetch("https://api-sandbox.dwolla.com/transfers",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${dwolla_access}`,
            "Content-Type":"application/json",
            "Accept": "application/vnd.dwolla.v1.hal+json",
        },
        body:JSON.stringify({
            "_links": {
                "source": {
                    "href": `https://api-sandbox.dwolla.com/funding-sources/${sender}`
                },
                "destination": {
                    "href": `https://api-sandbox.dwolla.com/funding-sources/${body.receiver}`
                }
            },
            "amount": {
                "currency": "USD",
                "value": `${body.amount}`
            }
         })
        })
       
        return NextResponse.json({"status":response.status})
       
}