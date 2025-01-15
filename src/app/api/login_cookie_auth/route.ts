import { NextRequest, NextResponse } from "next/server";
import { db, } from '../db connection/route';
import { RowDataPacket } from 'mysql2';
import {jwtVerify, SignJWT} from 'jose';
import { cookies } from 'next/headers';
const key="secret";
const secret_key= new TextEncoder().encode(key);


export const encrypt= (payload:{Email:string,expires:Date,Password:string})=>{
    return new SignJWT(payload)
    .setProtectedHeader({alg:"HS256"})
    .setIssuedAt()
    .setExpirationTime('5h')
    .sign(secret_key);

}

export async function decrypt(input:string){
    const  {payload} = await jwtVerify(input, secret_key, {
        algorithms:['HS256']
    })

    return payload;
}

export  async function POST(request:NextRequest){
    const body= await request.json();

    const email= body.email;
    const password= body.password;
    const result =await db.query("SELECT * from users where email = ? and password = ?",[email, password]) 
    const rows = result[0] as RowDataPacket[];
    if (Array.isArray(result[0])) {
        
        if(Number(rows.length)!=0){
        const Email= rows[0].email;
        const Password= rows[0].password;
        const expires = new Date(Date.now() + 1 * 60 * 60 * 1000);

        const session= await encrypt({Email,expires,Password});
        cookies().set('session',session,{expires, httpOnly:true})
        return NextResponse.json({"status":"Login Successful"})
        }
       
        else return NextResponse.json({"status":"Email or Password did not match!!"})
    }
     

}