
export async function call_find_customer_with_customer_id(cid:string) {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/find_customer_with_customer_id`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"cid":cid})
        
    })
    const final_res= await res.json()
    
    return final_res.name;
   
}
