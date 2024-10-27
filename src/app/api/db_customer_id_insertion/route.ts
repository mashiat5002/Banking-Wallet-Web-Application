import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";
export async function POST(request:NextRequest) {
  

    const body= await request.json()
    await db.query(
            `UPDATE users SET dwolla_customer_id = ? WHERE email = ?`,
            [body.id, body.email]
        )
    
    return new NextResponse(JSON.stringify({"a":"b"}));
}