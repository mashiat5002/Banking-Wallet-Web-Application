import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route"
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route"
import { NextResponse } from "next/server"

export async function POST() {
    const access= await get_dwolla_access_token()
    const customer= await get_dwolla_user_id()
    
    const res= await fetch(`https://api-sandbox.dwolla.com/customers/${customer}/transfers?limit=4`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":"application/vnd.dwolla.v1.hal+json"
        }
    })
    
    const final_res= await res.json()
    
    return NextResponse.json(final_res._embedded.transfers)
    
}