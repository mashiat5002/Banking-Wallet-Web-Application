import { NextRequest, NextResponse } from "next/server";
import { db } from "../db connection/route";
import { QueryResult, RowDataPacket } from "mysql2";
import { call_nodemailer } from "@/app/(utils)/call_nodemailer/route";

const generateOTP  = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();};




export async function POST(request: NextRequest) {
  const body = await request.json();
  const varify_key = generateOTP ();
  const timeout = Math.floor(Date.now() / 1000) + 5 * 60
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT email from users where email ="${body.email}"`
    );
    const final_res = [rows][0];
    
    console.log(final_res.length)

    if (final_res.length == 1) {
      const query_res =
        await db.query(`update users set varification_key= "${varify_key}",
                varify_timeout= "${timeout}" where email="${body.email}"`);
          
          call_nodemailer(body.email, varify_key)
          return NextResponse.json({ res: query_res[0] });
        } else {
          const query_res =
          await db.query(`INSERT INTO users (email, varification_key,varify_timeout)
            VALUES ("${body.email}", "${varify_key}", "${timeout}");
            `);
            
            call_nodemailer(body.email, varify_key)
      return NextResponse.json({ res: query_res[0] });
    }

} catch (err) {
      return NextResponse.json({ res:"Database Error" });
   
  }
}
