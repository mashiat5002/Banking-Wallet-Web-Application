
export async function get_both_savings_sector() {
    const res= await fetch(`http://localhost:3000/api/get_both_savings_sector`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res.res[0];
   
}
