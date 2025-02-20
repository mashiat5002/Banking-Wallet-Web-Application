

export async function call_change_savings_target(updated_amount:number,department:string) {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/change_savings_target`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"updated_amount":updated_amount,"department":department})
        
    })
    const final_res= await res.json()
    console.log(final_res)
    return final_res.res;
   
}
