

export async function call_card_list_from_db() {
    const res= await fetch(`http://localhost:3000/api/card_list_from_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    return final_res.res;
   
}
