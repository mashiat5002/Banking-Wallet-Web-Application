
export async function get_both_savings_sector() {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/get_both_savings_sector`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res.res[0];
   
}
