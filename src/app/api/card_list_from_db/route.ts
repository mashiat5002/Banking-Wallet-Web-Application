import { NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import stripe_cards from "@/app/models/stripe_cards"



export async function POST() {
   const user_id=await get_stripe_user_id()
   
    try{
      await connectToDatabase()
      const cards= await stripe_cards.find({stripe_id:user_id})

       return NextResponse.json({"res":cards})
    }catch(err){
        
        return NextResponse.json({"res":"error in db"})
   }
    
}