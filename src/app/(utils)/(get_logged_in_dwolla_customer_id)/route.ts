import { cookies } from "next/headers";
import { decrypt } from "@/app/api/login_cookie_auth/route";
import { connectToDatabase } from "../connect_mongodb/route";
import User from "@/app/models/user";

export async function get_dwolla_user_id(){
   
   const session = cookies().get("session")?.value;
   if(session){
      const decrypted_session= await decrypt(session)
      await connectToDatabase()
     const result =
      await User.findOne({email:decrypted_session.Email,password:decrypted_session.Password}).select("dwolla_customer_id")
      const id= result.dwolla_customer_id.replace("https://api-sandbox.dwolla.com/customers/","");
    
     return id;
   }
        
   else return "no id found";


}
