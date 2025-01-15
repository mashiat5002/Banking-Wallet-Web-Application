import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";

import { NextResponse } from "next/server";

export async function POST(){
   
  
   
   const userId= await get_dwolla_user_id()
   const access_dwolla= await get_dwolla_access_token();
   
   const banks_connected= await fetch(`https://api-sandbox.dwolla.com/customers/${userId}/funding-sources?removed=false`,{
      method:"GET",
      headers:{
         "Authorization":`Bearer ${access_dwolla}`,
         "Accept":`application/vnd.dwolla.v1.hal+json`
      }
   })
   const all_connected_banks= await banks_connected.json();
   
   const banknames= all_connected_banks._embedded["funding-sources"].map((x:any)=> ({"name":x.name,"id":x.id,"bankname":x.bankName,"type":x.bankAccountType}) )
   
   return NextResponse.json({"connected_banks":banknames})


}








