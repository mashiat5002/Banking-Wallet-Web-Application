
export async function call_find_customer_id_with_funding_src_id(fid:string) {
    
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/find_customer_id_with_funding_src_id`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"fid":fid})
        
    })
    const final_res= await res.json()
    
    return final_res.cid;
   
}
