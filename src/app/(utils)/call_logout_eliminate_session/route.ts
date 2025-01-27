
export async function call_logout_eliminate_session() {
    const res= await fetch(`http://localhost:3000/api/logout_eliminate_session`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    
    
    return res;
   
}
