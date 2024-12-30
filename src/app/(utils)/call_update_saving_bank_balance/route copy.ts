

export async function call_update_saving_bank_balance(id:string,amount:string) {
    const res= await fetch(`http://localhost:3000/api/update_saving_bank_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"id":id, "amount":amount})
        
        
    })
    const final_res= await res.json()
    return final_res;
   
}
