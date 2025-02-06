import { NextRequest, NextResponse } from "next/server"
import { db } from "../db connection/route"
import { RowDataPacket } from "mysql2"
import { call_update_varification_key_db } from "@/app/(utils)/call_update_varification_key_db/route"



export async function POST(request: NextRequest) {
   const body= await request.json()
   const current_time= Date.now()/1000
   try{
      
      const [rows]= await db.query<RowDataPacket[]>(`Select varify_timeout from users
         where varification_key= "${body.key}"` 
      )
      try{
         
         var varify_timeout=rows[0].varify_timeout
        }catch(err){
       call_update_varification_key_db(body.email)
            
         return NextResponse.json({"res":"Invalid"})

        }

       if(current_time<=varify_timeout){
         const query_res =
         await db.query(`update users set active_status= "active"
                  where varification_key="${body.key}" and  email="${body.email}"`);
                  return NextResponse.json({"res":"activated"})
               }
               else{
                  call_update_varification_key_db(body.email)
          return NextResponse.json({"res":"OTP Timedout"})

       }
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}