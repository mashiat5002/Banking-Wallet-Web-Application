export async function Is_funding_source_available(funding_source:string) {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/Is_funding_source_available`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"funding_source":funding_source})
        
    })
    const final_res= await res.json();
    return final_res;
}