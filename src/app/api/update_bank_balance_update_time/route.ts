import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { format_date } from "@/app/(utils)/format_date_function/route"
import { format_date_now } from "@/app/(utils)/format_date_now/route"



export async function POST(request: NextRequest) {

   const sid= await get_stripe_user_id()
   const unixTime = Date.now(); 
   console.log(format_date_now(unixTime))

    try{
       const res= await db.query(`UPDATE saving_acc
                                SET time_bank = "${format_date_now(unixTime.toString())}"
                                WHERE user_id = "${sid}";
`)
       console.log(res)
       return NextResponse.json({"res":res[0]})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}