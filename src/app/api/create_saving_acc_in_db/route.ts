import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route"
import saving_acc from "@/app/models/saving_acc"



export async function POST(request:NextRequest) {
   
   const body= await request.json()
    try{
      await connectToDatabase()
      const res=new saving_acc({user_id:body.id,department_1:"Type_A_Savings",department_2:"Type_B_Savings",balance_1:0.00,balance_2:0.00,department_1_target:0.00,department_2_target:0.00})
      res.save()
        
       return NextResponse.json({"res":res[0]})
    }catch(err){
        
        return NextResponse.json({"res":"error in db"})
   }
    
}