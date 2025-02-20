


export async function call_update_bank_balance_time() {
    
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/update_bank_balance_update_time`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res;
   
}
