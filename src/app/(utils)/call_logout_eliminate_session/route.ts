
export async function call_logout_eliminate_session() {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/logout_eliminate_session`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    
    
    return res;
   
}
