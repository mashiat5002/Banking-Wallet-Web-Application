import { cookies } from "next/headers";
import { RowDataPacket } from "mysql2";
import { decrypt } from "@/app/api/login_cookie_auth/route";
import { db } from "@/app/api/db connection/route";
import { connectToDatabase } from "../connect_mongodb/route";
import User from "@/app/models/user";

export async function get_stripe_user_id(){
   
   const session = cookies().get("session")?.value;
   if(session){
      const decrypted_session= await decrypt(session)
      await connectToDatabase()
     const result = 
     await User.findOne({email:decrypted_session.Email,password:decrypted_session.Password}).select("stripe_customer_id")

            const id= result.stripe_customer_id

    
     return id;
   }
        
   else return "no id found";


}
