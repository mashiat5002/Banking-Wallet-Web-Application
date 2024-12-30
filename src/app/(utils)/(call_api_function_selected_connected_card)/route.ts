import { call_api_Connected_cards } from "../(call_api_function_stripe_connected_payment_methods)/route";

export async function getSelectedCardInfo(index:number) {
    const allCards= await call_api_Connected_cards();
   
    return allCards[index];
    
}