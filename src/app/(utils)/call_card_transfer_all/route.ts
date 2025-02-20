


export async function call_card_transfer_all() {
    
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/card_transfer_all`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    
    return final_res.res;
   
}
