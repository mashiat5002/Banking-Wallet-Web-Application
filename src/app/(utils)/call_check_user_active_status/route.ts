
export async function call_check_user_active_status(email: string) {
    
    console.log("called")
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/find_user_active_status`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
            
        },
        body:JSON.stringify({"email":email})
        
        
    })
    const final_res= await res.json()
    console.log(final_res)
    
    return final_res.res;
   
}
