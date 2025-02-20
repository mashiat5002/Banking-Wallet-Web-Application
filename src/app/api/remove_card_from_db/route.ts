import { NextRequest, NextResponse } from "next/server"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import stripe_cards from "@/app/models/stripe_cards"
import mongoose from "mongoose"



export async function POST(request:NextRequest) {
   
   const body= await request.json()
   const stripe_id= await get_stripe_user_id()
    try{
      await connectToDatabase()
     
      const cards=await stripe_cards.deleteOne({_id: new mongoose.Types.ObjectId(body.key_id),stripe_id:stripe_id})
  
       return NextResponse.json({"res":cards})
    }catch(err){
        console.log(err)
        
        return NextResponse.json({"res":"error in db"})
   }
    
}