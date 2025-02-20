import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import saving_acc from "@/app/models/saving_acc"



export async function POST() {
 
   const id= await get_stripe_user_id()

    try{
//        const res= await db.query(`SELECT *
//                                     FROM saving_acc
//                                     WHERE user_id = "${id}";
// `)
       await connectToDatabase()
       const res= await saving_acc.findOne({user_id:id})

       return NextResponse.json({"res":res})
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}