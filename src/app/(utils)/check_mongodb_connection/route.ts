


export async function call_connect_mongodb() {
    
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/connect_mongodb`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res;
   
}
