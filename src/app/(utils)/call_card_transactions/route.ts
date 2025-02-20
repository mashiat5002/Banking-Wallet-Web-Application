
    export async function call_card_transactions() {
        const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/card_transactions`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            
            
        })
        const final_res= await res.json()
        return final_res.final_res.data;
       
    }
