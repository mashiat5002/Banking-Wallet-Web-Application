

export async function call_change_savings_sector_name(department:string,updated_name:string) {
    
   
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/change_savings_sector_name`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"department":department,"updated_name":updated_name})
        
        
    })
    const final_res= await res.json()
    
    return final_res.res;
   
}
