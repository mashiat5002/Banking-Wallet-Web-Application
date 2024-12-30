import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body= await request.json();
    const access= await get_dwolla_access_token()
    
    
    const funding_source_id= await fetch("https://api-sandbox.dwolla.com/customers/b9fddc89-a7a1-466e-b44b-96543388d8f9/funding-sources?removed=false",{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":"application/vnd.dwolla.v1.hal+json"
        },
        
    })
    const respone_funding_source_id= await funding_source_id.json();

    const id_to_remove= respone_funding_source_id._embedded['funding-sources'];


    id_to_remove.map(async (x:any)=>{
        const res=  await fetch(`https://api-sandbox.dwolla.com/funding-sources/${x.id}`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${access}`,
                "Accept":"application/vnd.dwolla.v1.hal+json",
                // "Content-Type":"text/plain",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({"removed":true})
        })

        const res2= await res.json()
      
    })
    
  
    return NextResponse.json({})
    
}