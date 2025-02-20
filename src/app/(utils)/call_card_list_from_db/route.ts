

export async function call_card_list_from_db() {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/card_list_from_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    return final_res.res;
   
}
