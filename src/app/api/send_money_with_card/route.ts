import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
        const body = await request.json();
        
        const customer= await get_stripe_user_id();
         
        const formBody = new URLSearchParams();
        
        formBody.append("amount", (Number(body.amount) * 100).toString()); 
        formBody.append("currency", "usd");
        formBody.append("automatic_payment_methods[enabled]", "true");
        formBody.append("automatic_payment_methods[allow_redirects]", "never");
        formBody.append("confirm", "true");
        formBody.append("customer", customer);
        formBody.append("payment_method", body.sender.payment_method_id);
        formBody.append("description", body.receiver);
        formBody.append("metadata[recipient]", body.recipient || "No additional note");
        formBody.append("metadata[recipientID]", body.receiver || "No additional note");
        formBody.append("metadata[amount]", (Number(body.amount) ).toString());
     
        const response = await fetch(`${process.env.Base_Url_Stripe}/v1/payment_intents`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.STRIPE_SECRET}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody.toString()
        });

        
        const finalResponse = await response.json();
        return NextResponse.json({ "response": finalResponse });
    } 

