import { call_get_saving_acc_balance } from "../call_get_saving_acc_balance/route";


export async function call_update_saving_bank_balance(savingsSector:string,amount:string,calculation:string) {
    const old_data= await call_get_saving_acc_balance()
    
    const old_balance= savingsSector=="balance_1"?old_data.balance_1:old_data.balance_2;
   
    const res= await fetch(`http://localhost:3000/api/update_saving_bank_balance`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"savingsSector":savingsSector,"old_balance":old_balance,"amount":amount,"calculation":calculation})
        
        
    })
    const final_res= await res.json()
    
    return final_res.res.affectedRows;
   
}
