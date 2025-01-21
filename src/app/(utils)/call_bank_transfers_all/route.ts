

export async function call_bank_transfers_all() {
    const res= await fetch(`http://localhost:3000/api/bank_transfers_all`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
