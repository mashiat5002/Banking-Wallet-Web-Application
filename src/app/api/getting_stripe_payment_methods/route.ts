import { get_stripe_user_id } from "@/app/(utils)/(get_logged_in_stripe_customer_id)/route";
import { NextResponse } from "next/server";

export async function GET() {
    const stripe_id = await get_stripe_user_id();
    const cards_details: any[] = [];
    let hasMore = true;
    let startingAfter: string | null = null;

    while (hasMore) {
        const url = new URL(`https://api.stripe.com/v1/customers/${stripe_id}/payment_methods`);
        url.searchParams.append("type", "card"); 
        if (startingAfter) {
            url.searchParams.append("starting_after", startingAfter);
        }

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.STRIPE_SECRET}`
            }
        });

        const res = await response.json();
        
        if (res.data && res.data.length > 0) {
            cards_details.push(
                ...res.data.map((x: any) => ({
                    payment_method_id: x.id,
                    type: x.card.brand,
                    last4: x.card.last4,
                    fingerprint: x.card.fingerprint,
                    exp_month: x.card.exp_month,
                    exp_year: x.card.exp_year,
                }))
            );
            startingAfter = res.data[res.data.length - 1].id;
            hasMore = res.has_more || false; 
        } else {
            hasMore = false; 
        }
    }

    return NextResponse.json({ stripe_method: cards_details });
}
