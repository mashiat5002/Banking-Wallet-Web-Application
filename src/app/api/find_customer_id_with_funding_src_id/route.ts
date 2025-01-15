import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";


import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
   
  
   
   const body= await request.json()
   const access_dwolla= await get_dwolla_access_token();
   
   const banks_connected= await fetch(`https://api-sandbox.dwolla.com/funding-sources/${body.fid}`,{
      method:"GET",
      headers:{
         "Authorization":`Bearer ${access_dwolla}`,
         "Accept":`application/vnd.dwolla.v1.hal+json`
      }
   })
   const data= await banks_connected.json();
  
   const cid=data._links.customer.href.slice(-36)
   
   
   return NextResponse.json({"cid":cid})


}








