import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body= await request.json();
    const access= await get_dwolla_access_token();
    const current_customer= await get_dwolla_user_id();

    
    const response= await fetch(`https://api-sandbox.dwolla.com/customers/${current_customer}/funding-sources`,{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":"application/vnd.dwolla.v1.hal+json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
        
    })
    try{
       
      
        const data= await response.json();
     
        return NextResponse.json(data)
    }
    catch(err){
        
        return NextResponse.json({"code":response.statusText})
        
    }

   
}