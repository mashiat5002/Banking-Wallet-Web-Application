import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { format_date } from "@/app/(utils)/format_date_function/route"



export async function POST(request: NextRequest) {

   const sid= await get_stripe_user_id()


    try{
       const res= await db.query(`SELECT time_ FROM saving_acc WHERE user_id = "${sid}";
`)
       console.log(res)
       return NextResponse.json({"res":res[0]})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}