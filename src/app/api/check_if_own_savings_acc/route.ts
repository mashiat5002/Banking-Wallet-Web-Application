import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";
import { call_check_bank_acc_type } from "@/app/(utils)/call_check_bank_acc_type/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    
    
    const body= await request.json()
   const dwollId= await get_dwolla_user_id();
  
    const final_res= dwollId== body.id?true:false;
    return NextResponse.json({"isOwn":final_res});
    
}