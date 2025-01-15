import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"



export async function POST(request:NextRequest) {
   
   const body= await request.json()
   const stripe_id= await get_stripe_user_id()
    try{
       const res= await db.query(`DELETE FROM stripe_cards WHERE key_id="${body.key_id}" AND stripe_id="${stripe_id}"`)
        
       console.log(res)
       return NextResponse.json({"res":res[0]})
    }catch(err){
        console.log(err)
        
        return NextResponse.json({"res":"error in db"})
   }
    
}