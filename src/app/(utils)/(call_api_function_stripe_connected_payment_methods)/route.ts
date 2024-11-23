export async function call_api_Connected_cards(){
    const res= await fetch("http://localhost:3000/api/getting_stripe_payment_methods",{
        method:"GET"
    })
    const response=await res.json();
    
    return response.stripe_method;
}