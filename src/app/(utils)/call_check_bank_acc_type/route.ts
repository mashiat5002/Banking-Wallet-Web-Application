
export async function call_check_bank_acc_type(id: string) {
   
    const res= await fetch(`http://localhost:3000/api/check_bank_acc_type`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
            
        },
        body:JSON.stringify({"id":id})
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
