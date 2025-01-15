import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";
import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";

const isConnected=async ()=>{
    try{
       await db.getConnection();
       await db.query('SELECT 1');
        return true;
    }
    catch(error){
        return false;
    }
}

export async function POST(request:NextRequest){
    
    

   
    if(await isConnected()){
        const Body = await request.json();
        
       
        const access_token=await get_dwolla_access_token();
   
        
        
        const response=await fetch("https://api-sandbox.dwolla.com/customers",{
            body:JSON.stringify(Body),
            headers: {
                "Authorization":`Bearer ${access_token}`,
                "Content-Type":"application/json",
                "Accept":"application/vnd.dwolla.v1.hal+json",
                
                
            },
            method:"POST"
    
        });
       
        if (!response.ok) {
            
            return response;
            
        }
        // console.log(response.headers.get("Location"))
    
        db.query(`INSERT INTO users (email, dwolla_customer_id) 
        VALUES ('${Body.email}', '${response.headers.get("Location")}');
`)

        return response;
        
    }
   
    return NextResponse.json({"status":`database not connected`});
   
}