import { cookies } from "next/headers";
import { RowDataPacket } from "mysql2";
import { decrypt } from "@/app/api/login_cookie_auth/route";
import { db } from "@/app/api/db connection/route";

export async function get_dwolla_user_id(){
   
   const session = cookies().get("session")?.value;
   if(session){
      const decrypted_session= await decrypt(session)

     const result =await db.query("Select dwolla_customer_id from users where email=? and password=?",[decrypted_session.Email, decrypted_session.Password])
      const res = result[0] as RowDataPacket[];
      const id= res[0].dwolla_customer_id.replace("https://api-sandbox.dwolla.com/customers/","");
    
     return id;
   }
        
   else return "no id found";


}
