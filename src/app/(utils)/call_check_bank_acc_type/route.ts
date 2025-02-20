
export async function call_check_bank_acc_type(id: string) {
   
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/check_bank_acc_type`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
            
        },
        body:JSON.stringify({"id":id})
        
        
    })
    const final_res= await res.json()
    console.log(final_res)
    return final_res;
   
}
