import { NextRequest, NextResponse } from "next/server"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { format_date_now } from "@/app/(utils)/format_date_now/route"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import saving_acc from "@/app/models/saving_acc"



export async function POST(request: NextRequest) {

   const sid= await get_stripe_user_id()
   const unixTime = Date.now(); 
   console.log(format_date_now(unixTime))

    try{

         await connectToDatabase()
         const res= await saving_acc.updateOne({user_id:sid},{$set:{time_:format_date_now(unixTime.toString())}})
       
       return NextResponse.json({"res":res.modifiedCount})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}