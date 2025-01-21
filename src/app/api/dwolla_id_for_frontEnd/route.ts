import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const did=await get_dwolla_user_id()
    return NextResponse.json({"res":did})
    
}