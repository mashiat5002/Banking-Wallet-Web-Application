
import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";
import { separating_weekly_monthly_daily_payment } from "@/app/(utils)/separating_weekly_monthly_daily_payment/route";
import {  NextResponse } from "next/server";

export async function POST() {
  
    const id= await get_dwolla_user_id();
    const access= await get_dwolla_access_token();
    let transfers = [] as any;
let url = `https://api-sandbox.dwolla.com/customers/${id}/transfers?limit=200`; // Set limit to maximum allowed (50
    while (url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${access}`,
                "Accept": "application/vnd.dwolla.v1.hal+json",
            },
        });
    
        const data = await response.json();
        transfers = transfers.concat(data._embedded['transfers']);  // Combine current page's data with previous
    
        // Update URL for the next page, or set to null if there's no next page
        url = data._links?.next?.href || null;
    }
    

    
    
    return NextResponse.json({"res":transfers})

   
}