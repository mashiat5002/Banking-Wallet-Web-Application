import { NextRequest, NextResponse } from "next/server"
import User from "@/app/models/user"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"



export async function POST(request: NextRequest) {
   const body= await request.json()
   try{
      await connectToDatabase()
     const rows=await User.find({email:body.email}).select("active_status")
    
    if(rows[0].active_status){

       return NextResponse.json({"res":rows[0].active_status})
    }
    }catch(err){
        console.log(err)
        return NextResponse.json({"res":"error in db"})
   }
    
}