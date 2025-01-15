import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"



export async function POST(request: NextRequest) {
   const body= await request.json()
   const sid= await get_stripe_user_id()
   const final_balance= body.calculation=="add"?Number(body.amount)+Number(body.old_balance):Number(body.old_balance)-Number(body.amount)
    try{
       const res= await db.query(`UPDATE saving_acc
                                SET ${body.savingsSector} = ${final_balance}
                                WHERE user_id = "${sid}";
`)
        console.log(res)
       return NextResponse.json({"res":res[0]})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}