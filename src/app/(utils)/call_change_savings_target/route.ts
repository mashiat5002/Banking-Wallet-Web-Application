

export async function call_change_savings_target(updated_amount:number,department:string) {
    const res= await fetch(`http://localhost:3000/api/change_savings_target`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"updated_amount":updated_amount,"department":department})
        
    })
    const final_res= await res.json()
    return final_res.res;
   
}
