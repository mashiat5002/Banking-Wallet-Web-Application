import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";



export async function POST() {
   

     const sid= await get_stripe_user_id();
    try{
       const res= await db.query(`SELECT department_1 , department_2 from saving_acc where
        user_id ="${sid}"`)
        return NextResponse.json({"res":res[0]})
    }catch(err){
        console.log(err)
        
        return NextResponse.json({"res":"error in db"})
   }
    
}