


export async function call_get_last_update_time_savings_balance() {
    
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/get_last_update_time_savings_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
   
    return final_res.res[0].time_;
   
}
