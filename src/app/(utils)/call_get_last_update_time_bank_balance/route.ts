


export async function call_get_last_update_time_bank_balance() {
    
    const res= await fetch(`http://localhost:3000/api/get_last_update_time_bank_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
   
    return final_res.res[0].time_bank;
   
}
