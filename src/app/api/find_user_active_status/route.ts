import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { RowDataPacket } from "mysql2"



export async function POST(request: NextRequest) {
   const body= await request.json()
   try{
     const [rows]=await db.query<RowDataPacket[]>(`Select active_status from users where email="${body.email}"`)
    if(rows[0].active_status){

       return NextResponse.json({"res":rows[0].active_status})
    }
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}