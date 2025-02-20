export async function call_api_Connected_cards(){
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/getting_stripe_payment_methods`,{
        method:"GET"
    })
    const response=await res.json();
    
    return response.stripe_method;
}