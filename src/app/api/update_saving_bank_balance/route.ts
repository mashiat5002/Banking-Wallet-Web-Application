import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import saving_acc from "@/app/models/saving_acc"



export async function POST(request: NextRequest) {
   const body= await request.json()
   const sid= await get_stripe_user_id()
   const final_balance= body.calculation=="add"?Number(body.amount)+Number(body.old_balance):Number(body.old_balance)-Number(body.amount)
    try{

         await connectToDatabase()
         const res= await saving_acc.updateOne({user_id:sid},{$set:{[body.savingsSector]:final_balance}})
        console.log(res)
       return NextResponse.json({"res":res})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}