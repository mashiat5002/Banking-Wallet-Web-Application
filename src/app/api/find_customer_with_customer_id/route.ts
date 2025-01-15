import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
   
  
   
   const body= await request.json()
   const access_dwolla= await get_dwolla_access_token();
   
   const banks_connected= await fetch(`https://api-sandbox.dwolla.com/customers/${body.cid}`,{
      method:"GET",
      headers:{
         "Authorization":`Bearer ${access_dwolla}`,
         "Accept":`application/vnd.dwolla.v1.hal+json`
      }
   })
   const data= await banks_connected.json();
   
   
   
   return NextResponse.json({"name":data.firstName + " "+data.lastName})


}








