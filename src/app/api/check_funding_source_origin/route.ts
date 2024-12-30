import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { Call_remover_funding_src } from "@/app/(utils)/call_remover_funding_source/route";
import { call_Sender_card } from "@/app/(utils)/call_sender_with_card/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body= await request.json();
    const access= await get_dwolla_access_token();
    const res= await fetch(`https://api-sandbox.dwolla.com/customers/b9fddc89-a7a1-466e-b44b-96543388d8f9/funding-sources`,{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":"application/vnd.dwolla.v1.hal+json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "routingNumber": body.routingNumber,
            "accountNumber": body.accountNumber,
            "type": "savings",
            "name": body.name
        })
    })
    
    if(res.status==201 ){
        
        return NextResponse.json({"response":res.status});
    }
    const final_res= await res.json()
    console.log(final_res)

    
    try {
        return NextResponse.json({"response":final_res._embedded.errors[0].message});
  } catch (err) {
    // console.log(err);
  }



    
    
    if(final_res.code=="DuplicateResource"){
        
        return NextResponse.json({"response":final_res.code});
        
    }
//    console.log(final_res)
}