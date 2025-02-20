

export async function call_get_saving_acc_balance() {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/get_saving_acc_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
       
        
        
    })
    const final_res= await res.json()
    
    return final_res.res;
   
}
