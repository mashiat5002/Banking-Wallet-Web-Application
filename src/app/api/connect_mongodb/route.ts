import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest,res:NextResponse) {
    try {
        await  connectToDatabase();
       
        return NextResponse.json({ message: "✅ User added successfully!", }, { status: 201 });
      } catch (error) {
        console.log(error)
        return NextResponse.json({message:"mongodb connection failed",status:500})

    
}}