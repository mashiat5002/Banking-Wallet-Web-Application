import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body= await request.json();
    const responseI= await fetch (`${process.env.Base_URl}/api/dwolla_access`,{
        method:"POST",
    })
    const access_token=await responseI.json();
  
    const response= await fetch("https://api-sandbox.dwolla.com/customers/2f5848d6-1e34-44eb-bc9a-017255799c90/funding-sources",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${access_token.access_token}`,
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