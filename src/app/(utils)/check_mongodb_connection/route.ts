


export async function call_connect_mongodb() {
    
    const res= await fetch(`http://localhost:3000/api/connect_mongodb`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res;
   
}
