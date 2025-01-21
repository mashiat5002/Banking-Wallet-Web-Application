import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import { separating_weekly_monthly_daily_payment } from "@/app/(utils)/separating_weekly_monthly_daily_payment/route";
import { NextResponse } from "next/server";

export async function POST() {
    
    const id = await get_stripe_user_id();

    let transaction_list: any[] = []; 
    let has_more = true;
    let starting_after = null;

    while (has_more) {
        const url = new URL("https://api.stripe.com/v1/payment_intents");
        url.searchParams.append("customer", id);
        url.searchParams.append("limit", "100");
        
        if (starting_after) {
            url.searchParams.append("starting_after", starting_after);
        }

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.STRIPE_SECRET}`,
                "Connection": "keep-alive",
            },
        });

      

        const result = await response.json();
        transaction_list = [...transaction_list, ...result.data]; 

        has_more = result.has_more; 
        if (has_more) {
            starting_after = result.data[result.data.length - 1].id; 
        }
    }
    
   
    
   
          
            

       
    

    return NextResponse.json({"res":transaction_list});
}
