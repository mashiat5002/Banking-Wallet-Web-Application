
export async function call_find_balance_acc_id_with_customer_id(cid:string) {
    
    const res= await fetch(`http://localhost:3000/api/find_balance_acc_id_with_customer_id`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"cid":cid})
        
    })
    const final_res= await res.json()
    
    return final_res.fid;
   
}
