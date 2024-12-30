import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const stripe_id = await get_stripe_user_id();

  try{
    const res =
    await db.query(`INSERT INTO stripe_cards (stripe_id, card_ids, expiry_date)
VALUES ('${stripe_id}', '${body.number}', '${body.exp}');
`);
  }
  catch(err){
    if(err)
        console.log(err)
  }
  return NextResponse.json({"status":"inserted"});


}
