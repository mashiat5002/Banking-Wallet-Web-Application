import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export  async function POST (request:NextRequest){
    const body= await request.json()
    console.log("nodemailer")
    console.log(body.email)
    if(request.method=="POST"){
        try{
            const transporter= nodemailer.createTransport({
                host: "smtp.gmail.com", 
                port: 587, 
                secure: false, 
                auth: {
                  user: `${process.env.NEXT_EMAIL}`, 
                  pass: `${process.env.NEXT_EMAIL_PASSWORD}`,   
                },
            })


            const mailOptions = {
                from: `"Banking Wallet" <${process.env.NEXT_EMAIL}>`, 
                to:`${body.email}`, 
                subject:"Banking Wallet Varification Key", 
                text:"Enter The Varification Key to activate your account", 
                html:`<p>${body.key}</p>`, 
              };

              const info = await transporter.sendMail(mailOptions);
              console.log("Message sent: %s", info.messageId);
              return NextResponse.json({status:201,msg:"successfully sent email"})
        }catch(err){
            console.log(err)
            throw new Error("nodemailer error")
            // return NextResponse.json({status:500,msg:"Failed to send email"})
        }
    }
    else{
        return NextResponse.json({status:200,msg:"method not allowed"})

    }

}