

export async function call_update_varification_key_db(email:string) {
    console.log("call update varification key db called")
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/update_varification_key_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"email":email})
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
