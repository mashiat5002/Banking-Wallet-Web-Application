


export async function call_activate_user_db(email:string,key:string) {
    
    const res= await fetch(`http://localhost:3000/api/activate_user_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"key":key,"email":email})
        
        
    })
    const final_res= await res.json()

    return final_res;
   
}
