
export async function call_dwolla_id_for_frontEnd() {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/dwolla_id_for_frontEnd`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
        
    })
    
    const final_res= await res.json()
    return final_res.res;
   
}
