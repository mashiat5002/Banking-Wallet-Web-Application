import { NextRequest, NextResponse } from "next/server";
import {jwtVerify, SignJWT} from 'jose';
import { cookies } from 'next/headers';
import { connectToDatabase } from "@/app/(utils)/connect_mongodb/route";
import User from "@/app/models/user";
const key="secret";
const secret_key= new TextEncoder().encode(key);


export const encrypt= (payload:{Email:string,expires:Date,Password:string})=>{
    return new SignJWT(payload)
    .setProtectedHeader({alg:"HS256"})
    .setIssuedAt()
    .setExpirationTime('1h')
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
  
    await connectToDatabase()
    const rows= await User.findOne({email:email,password:password})
    if (rows) {
        const Email= rows.email;
        const Password= rows.password;
        const expires = new Date(Date.now() + 1 * 60 * 60 * 1000);

        const session= await encrypt({Email,expires,Password});
        cookies().set('session',session,{expires, httpOnly:true})
        return NextResponse.json({"status":"Login Successful"})
       
    }
        else return NextResponse.json({"status":"Email or Password did not match!!"})
     

}