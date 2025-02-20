import { call_api_Connected_banks } from "../(call_api_function_connected_banks)/route";


export async function call_get_bank_balance() {
    const funding_src_id= await call_api_Connected_banks();

    const balance_id= funding_src_id[funding_src_id.length-1].id;
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/bank_balance`,{
        method:"POST",
        body:JSON.stringify({"balance_id":balance_id}),
        headers:{
            "Content-Type": "application/json"
        },
        
        
    })
    const final_res= await res.json()
    
    return final_res;
   
}
