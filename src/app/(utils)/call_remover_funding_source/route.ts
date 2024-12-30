export async function Call_remover_funding_src(funding_source:string) {
    const res= await fetch(`http://localhost:3000/api/Remove_a_funding_source`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"funding_source":funding_source})
        
    })
    const final_res= await res.json()
   
}