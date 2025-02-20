
export async function call_create_saving_acc_in_db(id:string) {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/create_saving_acc_in_db`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"id":id})
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
