import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";
export async function POST(Request: NextRequest) {
    
    const formdata = await Request.json();

    try{
        db.getConnection()
        db.query(`Update users set ${Object.keys(formdata).join("=?, ")}=? where email="${formdata.email}"`,Object.values(formdata) )
       
    }
    catch(error){
        console.log(error)
    }
  
    return NextResponse.json({"a":"b"});
}
