
    export async function call_card_transactions() {
        const res= await fetch(`http://localhost:3000/api/card_transactions`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            
            
        })
        const final_res= await res.json()
        return final_res;
       
    }
