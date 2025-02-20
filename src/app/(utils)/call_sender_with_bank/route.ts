import { call_update_bank_balance_time } from "../call_update_bank_balance_time/route";

export async function call_Sender_bank(amount:string,sender:string,receiver:string,selected:string) {
    const res= await fetch("${process.env.NEXT_PUBLIC_Base_Url}/api/send_money_from_bank",{
        method:"POST",
        body:JSON.stringify({
            "amount":amount,
            "sender":sender,
            "receiver":receiver,
            "selected":selected
        })
    })
   
    const data= await res.json()

  if(data.status==201){
    await call_update_bank_balance_time()
  }
    return data;
    
}