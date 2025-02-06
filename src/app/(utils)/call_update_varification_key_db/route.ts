

export async function call_update_varification_key_db(email:string) {
    const res= await fetch(`http://localhost:3000/api/update_varification_key_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"email":email})
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
