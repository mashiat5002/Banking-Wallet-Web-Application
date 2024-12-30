import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"



export async function POST(request: NextRequest) {
   const body= await request.json()
   
    try{
       const res= await db.query(`SELECT balance
                                    FROM saving_acc
                                    WHERE bank_id = "${body.id}"
`)
        
       return NextResponse.json({"res":res[0]})
    }catch(err){
        
        return NextResponse.json({"res":"error in db"})
   }
    
}