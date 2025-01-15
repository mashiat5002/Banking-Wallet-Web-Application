


export async function call_get_stripe_transaction_details() {
    
    const res= await fetch(`http://localhost:3000/api/stripe_transaction_details`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    
    return final_res.res;
   
}
