

export async function call_remove_card_from_db(key_id:string) {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/remove_card_from_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"key_id":key_id})
       
        
        
    })
    const final_res= await res.json()
    
    return final_res.res.deletedCount;
   
}
