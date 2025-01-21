

export async function call_insert_method_id_stripe_in_db(key_id:string,pid:string) {
    const res= await fetch(`http://localhost:3000/api/insert_method_id_stripe_in_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"key_id":key_id,"pid":pid})
       
        
        
    })
    const final_res= await res.json()
    
    return final_res.res.affectedRows;
   
}
