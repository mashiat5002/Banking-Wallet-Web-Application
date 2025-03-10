import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const params= new URLSearchParams();
     params.append("grant_type","client_credentials");
     const clientID = process.env.DWOLLA_CLIENT_ID;
        const clientSecret = process.env.DWOLLA_CLIENT_SECRET;
    
    const resp= await fetch("https://api-sandbox.dwolla.com/token",{
        method:"POST",
        headers:{
            "Authorization":`Basic ${Buffer.from(`${clientID}:${clientSecret}`).toString('base64')}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString()
    })
    if(!resp.ok){
        console.log(resp)
    }

    const response= await resp.json();
    return new NextResponse(JSON.stringify(response));
    
}