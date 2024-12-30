

export async function call_get_saving_acc_balance(id:string) {
    const res= await fetch(`http://localhost:3000/api/get_saving_acc_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"id":id})
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
