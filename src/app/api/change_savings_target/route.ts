import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"



export async function POST( request: NextRequest) {
   const user_id=await get_stripe_user_id()
   const body= await request.json()
   
    try{
       const res= await db.query(`Update saving_acc SET ${body.department}=${body.updated_amount} where user_id ="${user_id}"`)
        console.log(res)
       return NextResponse.json({"res":res[0]})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}