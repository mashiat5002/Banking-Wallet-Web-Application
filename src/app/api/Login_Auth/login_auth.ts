import { db, } from '../db connection/route';
import { RowDataPacket } from 'mysql2';
import {SignJWT} from 'jose';
import { cookies } from 'next/headers';
const key="secret";
const secret_key= new TextEncoder().encode(key);


const encrypt= (payload:any)=>{
        return new SignJWT(payload)
        .setProtectedHeader({alg:"HS256"})
        .setIssuedAt()
        .setExpirationTime('10 sec from now')
        .sign(secret_key);

}

export  async function login(formdata:FormData){
    const email= formdata.get("email");
    const password= formdata.get("password");
    const result =await db.query("SELECT * from users where email = ? and password = ?",[email, password]) 
    const rows = result[0] as RowDataPacket[];
    if (Array.isArray(result[0])) {
        
        if(Number(rows.length)!=0){
        const Email= rows[0].email;
        const Password= rows[0].password;
        const expires= new Date(Date.now()+ 10*1000);

        const session= await encrypt({Email,expires,Password});
        cookies().set('sesssion',session,{expires, httpOnly:true})
        }
    }




   



}