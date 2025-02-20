


export async function call_get_card_balance() {
    
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/card_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res;
   
}
