
export async function call_check_if_own_savings_acc(id: string) {
   
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/check_if_own_savings_acc`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
            
        },
        body:JSON.stringify({"id":id})
        
        
    })
    const final_res= await res.json()
    
    return final_res.isOwn;
   
}
