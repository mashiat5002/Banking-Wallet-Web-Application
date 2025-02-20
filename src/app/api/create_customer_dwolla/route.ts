import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";
import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { call_check_user_active_status } from "@/app/(utils)/call_check_user_active_status/route";
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route";
import User from "@/app/models/user";

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
        const hasUppercase = /[A-Z]/.test(Body.pass); 
        const hasSpecialChar = /[!@#$%^&*(),.?`":{}|<>]/.test(Body.pass); 
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
        
        const isActive= await call_check_user_active_status(Body.email)
        console.log("isActive",isActive)
        if(isActive!="active"){
            return NextResponse.json({
                status: 500,
                msg: "Email is not varified",
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
      
        await connectToDatabase()
        const result_=await User.updateOne({email:Body.email},{$set:{dwolla_customer_id:response.headers.get("Location")}})
        console.log(result_)
        return response;
        
    }
   
    return NextResponse.json({"status":`database not connected`});
   
}