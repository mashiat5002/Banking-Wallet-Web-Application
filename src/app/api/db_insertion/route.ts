import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route";
import User from "@/app/models/user";
// import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
export async function POST(Request: NextRequest) {
    const formdata = await Request.json();
    // formdata.password= await bcrypt.hash(formdata.password, saltRounds)

    try{
        
       await connectToDatabase()
       const res=await User.updateOne({email:formdata.email},formdata)
      
    }
    catch(error){
        console.log(error)
    }
  
    return NextResponse.json({});
}
