


export async function call_get_card_balance() {
    
    const res= await fetch(`http://localhost:3000/api/card_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res.balance;
   
}
