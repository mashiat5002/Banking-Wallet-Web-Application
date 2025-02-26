import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import stripe_cards from "@/app/models/stripe_cards";
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const stripe_id = await get_stripe_user_id();

  try{
    await connectToDatabase()
    const card= new stripe_cards({
      stripe_id:stripe_id,
      card_ids: body.number,
      expiry_date: body.exp,
      Card_holder:body.name

    })
    const res=await card.save()


return NextResponse.json({"status":"inserted","res":res});
  }
  catch(err){
    if(err)
        console.log(err)
  }


}
