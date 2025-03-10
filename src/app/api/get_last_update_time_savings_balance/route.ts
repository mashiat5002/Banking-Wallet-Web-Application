import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { format_date } from "@/app/(utils)/format_date_function/route"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import saving_acc from "@/app/models/saving_acc"



export async function POST(request: NextRequest) {

   const sid= await get_stripe_user_id()


    try{

await connectToDatabase()
       const res= await saving_acc.find({user_id:sid}).select("time_")
       console.log(res)
       return NextResponse.json({"res":res})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}