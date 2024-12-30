

export async function call_spend_card_balance(amount:string) {
    const res= await fetch(`http://localhost:3000/api/spend_card_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"amount":amount})
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
