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
        const hasUppercase = /[A-Z]/.test(Body.pass); // Checks for at least one uppercase letter
        const hasSpecialChar = /[!@#$%^&*(),.?`":{}|<>]/.test(Body.pass); // Checks for at least one
        if (Body.pass.length < 9) {
           
            return NextResponse.json({
                status: 500,
                msg: "Password Can't be less than 8 characters!",
            });
        } else if (!hasSpecialChar){
            return NextResponse.json({
                status: 500,
              msg: "Password Can't be less than 1 special characters!",
            });
            
        }
        else if (! hasUppercase){
            return NextResponse.json({
                status: 500,
                msg: "Password Can't be less than 1 Upper Case characters!",
            });
            
        }
        
        
        
        const access_token = await get_dwolla_access_token();
   
        
        
        const response=await fetch("https://api-sandbox.dwolla.com/customers",{
            body:JSON.stringify(Body),
            headers: {
                "Authorization":`Bearer ${access_token}`,
                "Content-Type":"application/json",
                "Accept":"application/vnd.dwolla.v1.hal+json",
                
                
            },
            method:"POST"
        });
        console.log(response)
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