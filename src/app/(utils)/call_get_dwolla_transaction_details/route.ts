


export async function call_get_dwolla_transaction_details() {
    
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/dwolla_transaction_details`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res.res;
   
}
