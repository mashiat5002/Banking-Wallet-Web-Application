import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import saving_acc from "@/app/models/saving_acc"



export async function POST( request: NextRequest) {
   const user_id=await get_stripe_user_id()
   const body= await request.json()
   
    try{
      await connectToDatabase()
      const res=   await saving_acc.updateOne({user_id:user_id},{$set:{[body.department]: body.updated_amount}})
      console.log(res)
       return NextResponse.json({"res":res.modifiedCount})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}