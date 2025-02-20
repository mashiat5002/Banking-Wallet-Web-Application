export async function Call_remover_funding_src(funding_source:string) {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/Remove_a_funding_source`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"funding_source":funding_source})
        
    })
    const final_res= await res.json()
   
}